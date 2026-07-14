<template>
  <v-app id="inspire">
    <v-app-bar
      clipped-left
      app
      dense
      color="#1e293b" 
      dark
      flat
      style="border-bottom: 1px solid #2d3748 !important"
      v-if="
        !$router.history.current.path.includes('/error') && $store.state.session
      "
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
        color="#E9C9AA"
      ></v-app-bar-nav-icon>

      <v-tabs 
        class="hidden-sm-and-down" 
        optional 
        slider-color="#E9C9AA"
        background-color="transparent"
      >
        <v-tab @click="expense()" class="text-capitalize font-weight-medium">
          <v-icon left color="#E9C9AA" small>🧮</v-icon>
          <span style="color: #e9c9aa; font-size: 13px;">Expense Calculator</span>
        </v-tab>

        <v-tab @click="ActualExpenses()" class="text-capitalize font-weight-medium">
          <v-icon left color="#E9C9AA" small>💸</v-icon>
          <span style="color: #e9c9aa; font-size: 13px;">Actual Expenses</span>
        </v-tab>
        <v-tab @click="Customerlogs()" class="text-capitalize font-weight-medium">
          <v-icon left color="#E9C9AA" small>💳</v-icon>
          <span style="color: #e9c9aa; font-size: 13px;">Customer Logs</span>
        </v-tab>
        <v-tab @click="ExcelExam()" class="text-capitalize font-weight-medium">
          <v-icon left color="#E9C9AA" small>📊</v-icon>
          <span style="color: #e9c9aa; font-size: 13px;">Excel Exam</span>
        </v-tab>
        <v-tab @click="FrontEnd()" class="text-capitalize font-weight-medium">
          <v-icon left color="#E9C9AA" small>💻</v-icon>
          <span style="color: #e9c9aa; font-size: 13px;">FrontEnd Exam</span>
        </v-tab>
      </v-tabs>

      <v-spacer></v-spacer>

      <v-btn icon small @click="toggleDarkMode" class="mr-3" color="#E9C9AA">
        <v-icon small>{{ $vuetify.theme.dark ? 'mdi-brightness-7' : 'mdi-brightness-4' }}</v-icon>
      </v-btn>

      <span
        style="color: #e9c9aa; font-size: small"
        class="mr-3 text-truncate hidden-xs-only font-weight-medium"
      >
        {{ $store.state.credentials?.name || $store.state.credentials?.[0]?.name || $store.state.credentials?.[0]?.Name }}
      </span>

      <v-menu offset-y left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn small fab dark color="transparent" elevation="0" v-bind="attrs" v-on="on">
            <v-icon color="#E9C9AA">mdi-chevron-double-down</v-icon>
          </v-btn>
        </template>

        <v-list dense class="py-0">
          <v-list-item @click="logout()">
            <v-icon color="error" small class="mr-2">mdi-logout</v-icon>
            <v-list-item-title class="font-weight-bold text-caption">LOG OUT</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
      dark
      clipped
      mobile-breakpoint="0"
      color="#272727"
      v-if="$store.state.session"
    >
      <v-list-item class="px-4 py-3">
        <v-list-item-content>
        <v-list-item-title style="color: #e9c9aa">
          {{ $store.state.credentials?.name || $store.state.credentials?.[0]?.name || $store.state.credentials?.[0]?.Name }}
        </v-list-item-title>
      </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item
          @click="
            expense();
            drawer = false;
          "
        >
          <v-list-item-icon
            ><v-icon color="#E9C9AA">🧮</v-icon></v-list-item-icon
          >

          <v-list-item-title style="color: #e9c9aa">Expense Calculator</v-list-item-title>
        </v-list-item>
        <v-list-item
          @click="
            ActualExpenses();
            drawer = false;
          "
        >
          <v-list-item-icon
            ><v-icon color="#E9C9AA">💸</v-icon></v-list-item-icon
          >

          <v-list-item-title style="color: #e9c9aa">Actual Expenses</v-list-item-title>
        </v-list-item>

        <v-list-item
          @click="
            Customerlogs();
            drawer = false;
          "
        >
          <v-list-item-icon
            ><v-icon color="#E9C9AA">💳</v-icon></v-list-item-icon
          >

          <v-list-item-title style="color: #e9c9aa">Customer Logs</v-list-item-title>
        </v-list-item>

        <v-list-item
          @click="
            ExcelExam();
            drawer = false;
          "
        >
          <v-list-item-icon
            ><v-icon color="#E9C9AA">📊</v-icon></v-list-item-icon
          >

          <v-list-item-title style="color: #e9c9aa">Excel Exam</v-list-item-title>
        </v-list-item>
        <v-list-item
          @click="
            FrontEnd();
            drawer = false;
          "
        >
          <v-list-item-icon
            ><v-icon color="#E9C9AA">💻</v-icon></v-list-item-icon
          >

          <v-list-item-title style="color: #e9c9aa">FrontEnd Exam</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main :style="{ backgroundColor: $vuetify.theme.dark ? '#121212' : 'aliceblue' }">
      <v-container fluid>
        <router-view ref="systemComponent"></router-view>
      </v-container>
    </v-main>

    <div v-if="$route.path !== '/login'" class="system-utility-container">
      <ChatComponent :showChatDialog.sync="showChatDialog" />

      <div v-if="!showChatDialog" class="log-trigger-bar" :class="{ 'dark-trigger': $vuetify.theme.dark }" @click="openChat">
        <v-badge
          :content="unreadCount"
          :value="unreadCount > 0"
          color="red"
          overlap
        >
          <v-icon small :color="$vuetify.theme.dark ? '#ffffff' : 'black'">mdi-chevron-up</v-icon>
        </v-badge>
      </div>
    </div>
  </v-app>
</template>

<script>
import ChatComponent from "../components/ChatComponent.vue";
import axios from "axios";

export default {
  components: { ChatComponent },

  data: () => ({
    unreadCount: 0,
    showChatDialog: false,
    deleteDialog: false,
    selectedItem: null,
    systems: [],
    dialog: false,
    activeTab: 0,
    loading: false,
    drawer: false, 
    forms: {
      system: { SystemName: "", Logo: null },
      team: { TeamName: "" },
      category: { ContentType: "" },
      announcement: { Title: "", Content: "", TargetDate: "", Image: null },
    },
  }),

  created() {
    // Check saved local storage preference
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      this.$vuetify.theme.dark = savedTheme === "true";
    }
  },

  mounted() {
    this.requestNotificationPermission();
    this.initializeRealTimeNotifications();
  },

  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("darkMode", this.$vuetify.theme.dark);
    },
    requestNotificationPermission() {
      if ("Notification" in window && Notification.permission === "default") {
        Notification.requestPermission();
      }
    },
    initializeRealTimeNotifications() {
      if (!window.Echo) {
        console.log("Echo not ready yet, retrying listener configuration in 1s...");
        setTimeout(this.initializeRealTimeNotifications, 1000);
        return;
      }

      console.log("Notification Listener successfully attached to Echo channel.");
      window.Echo.channel("chat").listen(".receive.message", (e) => {
        const payload = e.data ? e.data : e;
        const currentUsername =
          this.$store.getters.getCurrentUsername ||
          this.$store.state.credentials?.name ||
          this.$store.state.credentials?.[0]?.name ||
          this.$store.state.credentials?.[0]?.Name;

        if (payload.username === currentUsername) return;

        if (!this.showChatDialog) {
          this.unreadCount++;
          this.triggerChatPushNotification(payload);
        }
      });
    },

    triggerChatPushNotification(data) {
      if (Notification.permission !== "granted") {
        console.warn("Notification permission is not granted by the browser.");
        return;
      }

      const title = `New Message from ${data.username}`;
      const options = {
        body: data.type === "image" ? "📷 Sent an image" : data.content,
        icon: window.location.origin + "/favicon.ico",
        badge: window.location.origin + "/favicon.ico",
        tag: "chat-message",
        renotify: true,
      };

      if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.showNotification(title, options);
        });
      } else {
        console.log("Triggering native desktop notification fallback...");
        const n = new Notification(title, options);
        n.onclick = () => {
          window.focus();
          this.openChat();
        };
      }
    },

    openChat() {
      this.showChatDialog = true;
      this.unreadCount = 0;
    },

    expense() {
      if (this.$route.path !== "/expense") this.$router.push("/expense");
    },
    ActualExpenses() {
      if (this.$route.path !== "/ActualExpenses") this.$router.push("/ActualExpenses");
    },
    Customerlogs() {
      if (this.$route.path !== "/customerlogs") this.$router.push("/customerlogs");
    },
    ExcelExam() {
      if (this.$route.path !== "/ExcelExam") this.$router.push("/ExcelExam");
    },
    FrontEnd() {
      if (this.$route.path !== "/FrontEndExam") this.$router.push("/FrontEndExam");
    },

    logout() {
      if (window.Echo) {
        window.Echo.leaveChannel("chat");
      }
      this.$store.dispatch("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.system-utility-container {
  position: fixed;
  bottom: 0;
  right: 15px;
  z-index: 100;
}

.log-trigger-bar {
  background: #ffffff;
  padding: 8px 14px;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.log-trigger-bar.dark-trigger {
  background: #1e1e1e;
  border-color: #333333;
}

.log-trigger-bar:hover {
  background: #f5f5f5;
  transform: translateY(-2px);
}
.log-trigger-bar.dark-trigger:hover {
  background: #2d2d2d;
}

@media (max-width: 600px) {
  .system-utility-container {
    right: 10px;
  }
  .log-trigger-bar {
    padding: 6px 12px;
  }
}
</style>