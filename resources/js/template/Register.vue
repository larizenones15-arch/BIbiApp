<template>
  <v-container fluid class="login-page-wrapper d-flex align-center justify-center">
    <v-card
      outlined
      elevation="4"
      max-width="500"
      width="100%"
      class="pa-8 login-card rounded-xl"
    >
      <div class="text-center mb-8">
        <v-avatar
          size="100"
          color="grey lighten-4"
          class="mb-4 elevation-2 profile-avatar"
        >
          <img
            :src="`http://10.11.1.98/photos/` + registrationData.employee_code + `.jpg`"
            alt="User Avatar"
            onerror="src='storage/images/blank.png'"
            @dblclick="mRegister()"
          />
        </v-avatar>

        <h2 class="text-h5 font-weight-bold grey--text text--darken-4 mb-1">
          CREATE ACCOUNT
        </h2>
        <p class="body-2 grey--text">HTI-P SYSTEM REGISTRATION</p>
      </div>

      <v-form @keyup.native.enter="mRegister()">
        <v-text-field
          v-model="registrationData.employee_code"
          label="Employee Code"
          prepend-inner-icon="mdi-identifier"
          outlined
          flat
          class="rounded-lg mb-2"
          color="primary"
          hide-details="auto"
          :error-messages="errorData.employee_code"
          @input="clearError('employee_code')"
        ></v-text-field>

        <v-text-field
          v-model="cEmployees"
          label="Full Name"
          prepend-inner-icon="mdi-account-outline"
          outlined
          readonly
          flat
          class="rounded-lg mb-2"
          color="primary"
          hide-details="auto"
          :error-messages="errorData.employee_name"
          @input="clearError('employee_name')"
        ></v-text-field>

        <v-select
          v-model="registrationData.TeamtID"
          :items="teamsItems"
          item-text="TeamName"
          item-value="TeamID"
          label="Team"
          prepend-inner-icon="mdi-account-group"
          outlined
          flat
          class="rounded-lg mb-2"
          color="primary"
          hide-details="auto"
          :error-messages="errorData.DepartmentID"
          @input="clearError('DepartmentID')"
        ></v-select>

        <v-text-field
          v-model="registrationData.password"
          label="Password"
          prepend-inner-icon="mdi-lock-outline"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          outlined
          flat
          class="rounded-lg mb-6"
          color="primary"
          hide-details="auto"
          :error-messages="errorData.password"
          @click:append="showPassword = !showPassword"
          @input="clearError('password')"
          autocomplete="new-password"
        ></v-text-field>

        <v-btn
          color="brown"
          block
          dark
          x-large
          depressed
          class="rounded-lg font-weight-bold shadow-button"
          :loading="isLoading"
          @click="mRegister()"
        >
          REGISTER NOW
        </v-btn>

        <div class="text-center mt-4">
          <span
            class="text-caption primary--text font-weight-bold cursor-pointer"
            @click="$router.push('/login')"
          >
            Already have an account? Log-in
          </span>
        </div>
      </v-form>

      <div class="text-center mt-8">
        <v-divider class="mb-4"></v-divider>
        <span class="grey--text text--lighten-1 text-caption font-weight-medium">
          SD Factory &copy; 2026
        </span>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    dialog: true,
    isLoading: false,
    showPassword: false,
    // Data for v-selects (Replace with your actual API calls)
    teamsItems: [],
    Employees: [],
    sections: [
      { id: 101, name: "Development" },
      { id: 102, name: "Networking" },
    ],

    registrationData: {
      employee_code: "",
      employee_name: "",
      password: "",
    },
    errorData: {
      employee_code: "",
      employee_name: "",
      DepartmentID: "",
      SectionID: "",
      password: "",
    },
  }),
  created() {
    // In a real application, you would fetch departments and sections here
    // this.mGetDepartments();
    this.mTeams();
    this.mGetEmployee();
  },
  methods: {
    clearError(field) {
      if (this.errorData[field]) {
        this.errorData[field] = "";
      }
    },
    mTeams() {
      axios
        .get(`${this.$url}/api/staffregistration?Team`)
        .then((res) => {
          this.teamsItems = res.data.result;
        })
        .catch(({ response }) => {
          this.$store.dispatch("setStatusCode", response.status);
          this.$router.push("/error/" + response.status);
        })
        .finally(() => {
          // this.isLoading = false;
        });
    },
    mGetEmployee() {
      this.registrationData.employee_code = "";
      axios
        .get(`${this.$url}/api/login/staff`)
        .then((res) => {
          this.Employees = res.data;
        })
        .catch(({ response }) => {
          this.registrationData.employee_code = "Employee not found";
          console.error("Error fetching employee:", response);
        });
    },

    mRegister() {
      Object.keys(this.errorData).forEach((key) => (this.errorData[key] = ""));
      this.isLoading = true;

      axios
        .post(`${this.$url}/api/staffregistration`, this.registrationData)
        .then((res) => {
          if (res.status === 201) {
            alert("Registration successful!");
            // Redirect to login or home page
            this.$router.push("/login");
          }
        })
        .catch(({ response }) => {
          if (response.status === 422 || response.status === 400) {
            Object.keys(response.data).forEach((key) => {
              const field = key.toLowerCase().replace(/_/g, "");
              if (this.errorData.hasOwnProperty(field)) {
                this.errorData[field] = response.data[key][0];
              }
            });
          } else {
            console.error("Registration failed with status:", response.status);
            // this.$router.push("/error/" + response.status);
          }
        })
        .finally(() => {
          this.isLoading = false;
        });

      // setTimeout(() => {
      //   this.isLoading = false;
      //   console.log("Registration Attempt with:", this.registrationData);
      //   alert("Simulated Registration Attempted!");
      // }, 1500);
    },
  },
  computed: {
    cEmployees: {
      get() {
        if (this.registrationData.employee_code) {
          let data = this.Employees.filter(
            (rec) => rec.EmployeeCode == this.registrationData.employee_code
          ).map((req) => req.EmployeeName);
          this.registrationData.employee_name = data[0];
          return data[0];
        } else {
          return "";
        }
      },
      set(newValue) {
        this.registrationData.employee_code = newValue;
      },
    },
  },
};
</script>
<style scoped>
/* Matching the Login Style Exactly */
.login-page-wrapper {
  min-height: 100vh;
  background-color: #f0f2f5;
  background-image: radial-gradient(#d1d9e6 1px, transparent 1px);
  background-size: 20px 20px;
}

.login-card {
  border: 1px solid #e0e6ed !important;
  background-color: #ffffff;
}

.profile-avatar {
  border: 3px solid #fff;
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
  /* Using brown shadow to match your button color choice */
  box-shadow: 0 4px 14px 0 rgba(121, 85, 72, 0.3) !important;
}

/* Ensure outlined fields look flat like the login page */
.v-text-field--outlined >>> fieldset {
  border-color: #e0e6ed !important;
}
</style>
