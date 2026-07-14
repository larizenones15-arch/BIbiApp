<template>
  <v-container fluid class="login-page-wrapper d-flex align-center justify-center">
    <v-card 
      outlined 
      elevation="4" 
      max-width="450" 
      width="100%" 
      class="pa-8 login-card rounded-xl"
      :dark="$vuetify.theme.dark"
    >
      <div class="text-center mb-8">
        <h2 
          class="text-h5 font-weight-bold mb-1"
          :class="$vuetify.theme.dark ? 'white--text' : 'grey--text text--darken-4'"
        >
          LARIZE & MJ SYSTEM
        </h2>
      </div>

      <v-form @submit.prevent="mLogin" @keyup.native.enter="mLogin()">
        <v-text-field
          v-model="credentials.email"
          label="Email Address"
          prepend-inner-icon="mdi-email-outline"
          outlined
          flat
          class="rounded-lg mb-1"
          color="primary"
          type="email"
          hide-details="auto"
          :error-messages="errorCredentials.email"
          @input="clearError('email')"
          :dark="$vuetify.theme.dark"
        ></v-text-field>

        <v-text-field
          v-model="credentials.password"
          label="Password"
          prepend-inner-icon="mdi-lock-outline"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          outlined
          flat
          class="rounded-lg mt-4"
          color="primary"
          hide-details="auto"
          :error-messages="errorCredentials.password"
          @click:append="showPassword = !showPassword"
          @input="clearError('password')"
          :dark="$vuetify.theme.dark"
        ></v-text-field>

        <div class="d-flex align-center justify-space-between mt-4 mb-8">
          <v-checkbox
            v-model="rememberMe"
            label="Remember me"
            hide-details
            class="mt-0 pt-0 text-caption"
            :dark="$vuetify.theme.dark"
          ></v-checkbox>
          <!-- <span class="text-caption primary--text font-weight-bold cursor-pointer" @click="mRegister">
            Create Account
          </span> -->
        </div>

        <v-btn
          color="brown"
          block
          dark
          x-large
          depressed
          class="rounded-lg font-weight-bold shadow-button"
          :loading="isLoading"
          @click="mLogin"
        >
          LOG-IN
        </v-btn>
      </v-form>

      <div class="text-center mt-8">
        <v-divider class="mb-4"></v-divider>
        <span class="grey--text text-caption font-weight-medium">
          MJ DURO &copy; 2026
        </span>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    isLoading: false,
    showPassword: false,
    rememberMe: false, // Remember me tracking variable
    credentials: {
      email: "",
      password: "",
    },
    errorCredentials: {
      email: "",
      password: "",
    },
    debounceTimer: null,
  }),
  
  created() {
    // Look for saved email profile information on initial load
    const savedEmail = localStorage.getItem("remembered_email");
    if (savedEmail) {
      this.credentials.email = savedEmail;
      this.rememberMe = true;
    }
  },

  watch: {
    "credentials.email": function (newVal) {
      this.debouncedValidation();
      if (newVal.length === 0) this.errorCredentials.email = "";
    },
    "credentials.password": function (newVal) {
      this.debouncedValidation();
      if (newVal.length === 0) this.errorCredentials.password = "";
    },
  },

  methods: {
    mRegister() {
      this.$router.push("/register");
    },
    clearError(field) {
      if (this.errorCredentials[field]) {
        this.errorCredentials[field] = "";
      }
    },
    debouncedValidation() {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        if (this.credentials.email.length > 0 && this.credentials.password.length > 0) {
          this.mValidateCredentials();
        } else {
          this.errorCredentials.email = "";
          this.errorCredentials.password = "";
        }
      }, 150);
    },
    mValidateCredentials() {
      this.errorCredentials.password = "";
      this.errorCredentials.email = "";

      axios
        .get(`${this.$url}/api/login/signin?email=${this.credentials.email}&password=${this.credentials.password}`)
        .then(() => {
          this.errorCredentials.email = "";
          this.errorCredentials.password = "";
        })
        .catch(({ response }) => {
          if (response && response.status === 404) {
            ["password", "email"].forEach((field) => {
              if (response.data[field]?.[0]) {
                this.errorCredentials[field] = response.data[field][0];
              }
            });
          }
        });
    },
    mLogin() {
      clearTimeout(this.debounceTimer);
      this.errorCredentials.password = "";
      this.errorCredentials.email = "";
      this.isLoading = true;

      axios
        .get(`${this.$url}/api/login/signin?email=${this.credentials.email}&password=${this.credentials.password}`)
        .then((res) => {
          if (res.status === 200) {
            // Handle Remember Me state storage settings
            if (this.rememberMe) {
              localStorage.setItem("remembered_email", this.credentials.email);
            } else {
              localStorage.removeItem("remembered_email");
            }

            this.$store.commit("login", res.data);
            this.$router.push("/");
          }
        })
        .catch(({ response }) => {
          if (response && response.status === 404) {
            ["password", "email"].forEach((field) => {
              if (response.data[field]?.[0]) {
                this.errorCredentials[field] = response.data[field][0];
              }
            });
          } else if (response) {
            this.$router.push("/error/" + response.status);
          } else {
            console.error("Network or server error encountered.");
          }
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.login-page-wrapper {
  min-height: 100vh;
  background-color: #f0f2f5;
  background-image: radial-gradient(#d1d9e6 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Dark mode fallback rule if background color variables aren't inheriting */
.theme--dark.login-page-wrapper,
.theme--dark .login-page-wrapper {
  background-color: #121212 !important;
  background-image: radial-gradient(#333333 1px, transparent 1px) !important;
}

.login-card {
  border: 1px solid #e0e6ed !important;
  background-color: #ffffff !important;
}

/* Dark mode panel card custom color override matching dark setups */
.theme--dark.login-card {
  border-color: #2d2d2d !important;
  background-color: #1e1e1e !important;
}

.cursor-pointer {
  cursor: pointer;
  transition: opacity 0.2s;
}
.cursor-pointer:hover {
  opacity: 0.7;
}

.v-btn--x-large {
  height: 56px !important;
  letter-spacing: 1.25px;
}

.shadow-button {
  box-shadow: 0 4px 14px 0 rgba(109, 76, 65, 0.3) !important; /* Brown tint shadow placeholder */
}
</style>