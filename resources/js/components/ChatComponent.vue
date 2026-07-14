<template>
  <div v-if="showChatDialog" class="messenger-panel elevation-12">
    <div class="panel-header d-flex align-center px-3" @click="$emit('update:showChatDialog', false)">
      <div class="header-title font-weight-bold"></div>
      <v-spacer></v-spacer>
      <v-btn icon small @click.stop="$emit('update:showChatDialog', false)">
        <v-icon :color="$vuetify.theme.dark ? 'white' : 'black'">mdi-chevron-down</v-icon>
      </v-btn>
    </div>

    <div class="panel-body">
      <div class="log-interface">
        <div class="log-area" ref="logArea">
          <div 
            v-for="(msg, index) in messages"
            :key="msg.id ? `${msg.id}-${index}` : `msg-${index}`" 
            class="message-row"
            :class="[
              msg.username === username ? 'sent' : 'received',
              { 'mj-duro-style': username === 'MJ Duro' }
            ]"
          >
            <span v-if="msg.username !== username" class="sender-name">
              {{ msg.username }}
            </span>

            <!-- Reply Reference Block Context -->
            <div v-if="msg.reply_to_id && getParentMessage(msg.reply_to_id)" class="reply-context-bubble" @click="scrollToMessage(msg.reply_to_id)">
              <span class="reply-context-user">↳ {{ getParentMessage(msg.reply_to_id).username }}</span>
              <span class="reply-context-text">
                <template v-if="getParentMessage(msg.reply_to_id).type === 'image'">📷 Image</template>
                <template v-else-if="getParentMessage(msg.reply_to_id).type === 'video'">🎥 Video</template>
                <template v-else>{{ getParentMessage(msg.reply_to_id).content }}</template>
              </span>
            </div>

            <!-- Bubble & Layout Row Grid Container -->
            <div class="bubble-container">
              <div class="message-bubble">
                <template v-if="msg.type === 'text'">
                  {{ msg.content }}
                </template>
                
                <template v-else-if="msg.type === 'image' && (msg.imageUrl || msg.image_url)">
                  <v-img 
                    :src="msg.imageUrl || msg.image_url" 
                    max-width="220" 
                    class="bubble-image rounded-lg"
                  ></v-img>
                </template>

                <!-- HTML5 Inline Native Video Player -->
                <template v-else-if="msg.type === 'video' && (msg.imageUrl || msg.image_url)">
                  <video 
                    :src="msg.imageUrl || msg.image_url" 
                    controls 
                    preload="metadata" 
                    width="220" 
                    class="bubble-video rounded-lg"
                  ></video>
                </template>
              </div>

              <!-- Action Layout Grid Box Wrapper -->
              <div class="message-actions mx-2">
                <v-btn icon x-small class="action-reply-btn" @click="setReplyTarget(msg)">
                  <v-icon size="16">mdi-reply</v-icon>
                </v-btn>
              </div>
            </div>

            <span class="message-time">{{ getFormattedTime(msg) }}</span>
          </div>
        </div>

        <!-- Active Replying UI Status Context Row -->
        <div v-if="replyingTo" class="reply-status-indicator d-flex align-center px-3 py-1">
          <v-icon small class="mr-2">mdi-reply</v-icon>
          <div class="reply-preview-details text-truncate">
            <span class="font-weight-bold mr-1">Replying to {{ replyingTo.username }}:</span>
            <span class="grey--text text--darken-1">
              <template v-if="replyingTo.type === 'image'">📷 Image</template>
              <template v-else-if="replyingTo.type === 'video'">🎥 Video</template>
              <template v-else>{{ replyingTo.content }}</template>
            </span>
          </div>
          <v-spacer></v-spacer>
          <v-btn icon x-small @click="cancelReply">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </div>

        <div class="input-area px-2 py-2">
          <v-row no-gutters align="center" class="flex-nowrap">
            <v-col cols="auto" class="d-flex align-center">
              <!-- Modified to accept both images and videos -->
              <input type="file" ref="mediaInput" style="display: none" @change="onFileSelected" accept="image/*,video/*" />

              <v-btn icon small class="mx-1" @click="triggerFileInput">
                <v-icon :color="$vuetify.theme.dark ? 'white' : 'black'">mdi-attachment</v-icon>
              </v-btn>

              <v-menu top offset-y :close-on-content-click="false">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon small class="mr-1" v-bind="attrs" v-on="on">
                    <v-icon :color="$vuetify.theme.dark ? 'white' : 'black'">mdi-emoticon-happy-outline</v-icon>
                  </v-btn>
                </template>

                <v-card max-width="220" class="pa-2" :color="$vuetify.theme.dark ? '#2d2d2d' : 'white'">
                  <div class="emoji-grid">
                    <span v-for="emoji in emojis" :key="emoji" @click="appendEmoji(emoji)" class="emoji-item">{{ emoji }}</span>
                  </div>
                </v-card>
              </v-menu>
            </v-col>

            <v-col class="flex-grow-1 px-1">
              <div class="messenger-input-pill">
                <v-text-field 
                  v-model="message" 
                  placeholder="Aa" 
                  dense 
                  flat 
                  hide-details 
                  solo
                  background-color="transparent" 
                  :dark="$vuetify.theme.dark"
                  @keypress.enter="sendMessage"
                ></v-text-field>
              </div>
            </v-col>

            <v-col cols="auto" class="pl-1">
              <v-btn text small :color="$vuetify.theme.dark ? 'teal lighten-2' : 'black'" class="font-weight-bold" @click="sendMessage">Send</v-btn>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { messaging, getToken } from "../firebase.js";

window.Pusher = require("pusher-js");

export default {
  props: {
    showChatDialog: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      username: "",
      message: "",
      messages: [],
      selectedFile: null,
      isFetching: false,
      replyingTo: null,
      emojis: [
        "😀", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉",
        "😍", "😘", "😜", "😎", "👍", "🔥", "🎉", "❤️",
      ],
    };
  },

  created() {
    this.initializeEcho();
    this.syncAuthenticatedUser();

    if (this.showChatDialog) {
      this.fetchChatHistory();
    }

    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  },

  watch: {
    messages() {
      this.scrollToBottom();
    },

    showChatDialog(val) {
      if (val) {
        this.syncAuthenticatedUser();
        this.scrollToBottom();
        this.fetchChatHistory();
      }
    },
    
    "$store.state.credentials": {
      handler() {
        this.syncAuthenticatedUser();
      },
      deep: true
    }
  },

  methods: {
    setReplyTarget(msg) {
      this.replyingTo = msg;
    },

    cancelReply() {
      this.replyingTo = null;
    },

    getParentMessage(replyToId) {
      return this.messages.find(m => m.id === replyToId || String(m.id) === String(replyToId));
    },

    scrollToMessage(replyToId) {
      this.$nextTick(() => {
        const index = this.messages.findIndex(m => m.id === replyToId);
        if (index !== -1) {
          const elements = this.$refs.logArea?.querySelectorAll('.message-row');
          if (elements && elements[index]) {
            elements[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      });
    },

    syncAuthenticatedUser() {
      const activeName = this.$store.state.credentials?.name || 
                         this.$store.state.credentials?.[0]?.name || 
                         this.$store.state.credentials?.[0]?.Name;
                         
      if (activeName && this.username !== activeName) {
        this.username = activeName;
        this.$store.dispatch("setCurrentUsername", this.username);
        this.registerNotificationToken();
      }
    },

    async registerNotificationToken() {
      if (!("Notification" in window)) return;

      try {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") {
          console.warn("Notification permission was denied or not selected.");
          return;
        }

        const registration = await navigator.serviceWorker.ready;
        const fcmToken = await getToken(messaging, { 
          vapidKey: "BAK4EU7aHgHhBlWJO3Z6DHdI5QdffJJANlNRcOLaWa8Y5mBO95qtnK1vrB_VLz8cX4vnSYR8G7fBwDSZWysj3wk",
          serviceWorkerRegistration: registration
        });
        
        if (fcmToken) {
          console.log("FCM Token successfully acquired:", fcmToken);
          
          axios.put(`${this.$url}/api/messages/join`, {
            username: this.username,
            fcm_token: fcmToken 
          })
          .then(() => console.log("FCM Token successfully synchronized to database."))
          .catch(err => console.error("Database token sync failed:", err));
        }
      } catch (e) {
        console.error("Token generation warning:", e);
      }
    },

    async fetchChatHistory() {
      if (this.isFetching) return;
      this.isFetching = true;

      try {
        const response = await axios.get(`${this.$url}/api/messages`);
        if (response.data && Array.isArray(response.data)) {
          this.messages = response.data.map(msg => {
            if (!msg.created_at) {
              msg.created_at = new Date().toISOString();
            }
            return msg;
          });
          this.scrollToBottom();
        }
      } catch (error) {
        console.error("Could not fetch chat logs from database:", error);
      } finally {
        this.isFetching = false;
      }
    },

    handleVisibilityChange() {
      if (document.visibilityState === "visible" && this.showChatDialog) {
        if (window.Echo && window.Echo.connector) {
          window.Echo.connector.disconnect();
          window.Echo.connector.connect();
        }
        this.fetchChatHistory();
      }
    },

    scrollToBottom() {
      this.$nextTick(() => {
        setTimeout(() => {
          const container = this.$refs.logArea;
          if (container) {
            container.scrollTop = container.scrollHeight;
          }
        }, 50); 
      });
    },

    initializeEcho() {
      if (!window.Echo) {
        console.log("Echo not ready in ChatComponent yet, retrying listener setup in 1s...");
        setTimeout(() => this.initializeEcho(), 1000);
        return;
      }

      window.Echo.channel("chat").listen(".receive.message", (e) => {
        let payload = e;
        if (e.data) {
          payload = e.data;
        }

        if (!payload.id || !payload.username) return;

        if (!payload.created_at) {
          payload.created_at = new Date().toISOString();
        }

        const isDuplicate = this.messages.some(
          (msg) => msg.id === payload.id || (msg.content === payload.content && msg.username === payload.username)
        );

        if (!isDuplicate) {
          this.messages = [...this.messages, payload];
          this.scrollToBottom();
        }
      });
    },

    triggerFileInput() {
      this.$refs.mediaInput.click();
    },

    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        this.sendMediaFile();
      }
    },

    appendEmoji(emoji) {
      this.message += emoji;
    },

    getFormattedTime(messageInstance) {
      if (!messageInstance) return 'No date available';
      const timeSource = messageInstance.created_at || messageInstance.updated_at;
      if (!timeSource) return 'No date available';

      try { 
        let date;
        if (typeof timeSource === 'string') {
          if (timeSource.includes('T')) {
            date = new Date(timeSource);
          } else {
            let cleanStr = timeSource;
            if (cleanStr.includes(' ')) {
              cleanStr = cleanStr.replace(' ', 'T');
            }
            date = new Date(cleanStr);
          }
        } else {
          date = new Date(timeSource);
        }

        if (!isNaN(date.getTime())) {
          const textDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
          const textClock = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
          return `${textDate}, ${textClock}`;
        }
      } catch (err) {
        console.error("Date calculation fallback failed:", err);
      }
      return 'No date available';
    },

    async sendMessage() {
      if (this.message.trim()) {
        const generatedId = Date.now() + Math.random().toString(36).substr(2, 5);
        const timestamp = new Date().toISOString();
        const parentReplyId = this.replyingTo ? this.replyingTo.id : null;

        const payload = {
          username: this.username,
          content: this.message,
          type: "text",
          id: generatedId,
          created_at: timestamp,
          reply_to_id: parentReplyId
        };

        this.messages = [...this.messages, payload];
        const messageToSend = this.message;
        this.message = "";
        this.cancelReply();
        this.scrollToBottom();

        try {
          const response = await axios.post(`${this.$url}/api/messages`, {
            id: generatedId,
            username: this.username,
            content: messageToSend,
            type: "text",
            created_at: timestamp,
            reply_to_id: parentReplyId
          });

          if (response.data && response.data.id) {
            const index = this.messages.findIndex(m => m.id === generatedId);
            if (index !== -1) {
              const updatedMessages = [...this.messages];
              updatedMessages[index] = response.data;
              this.messages = updatedMessages;
            }
          }
        } catch (error) {
          console.error("Message failed to send", error);
        }
      }
    },

    async sendMediaFile() {
      if (!this.selectedFile) return;

      const generatedId = Date.now() + Math.random().toString(36).substr(2, 5);
      const localIsoTimestamp = new Date().toISOString();
      const parentReplyId = this.replyingTo ? this.replyingTo.id : null;
      const isVideoFile = this.selectedFile.type.startsWith('video/');

      const formData = new FormData();
      formData.append("id", generatedId);
      formData.append("file", this.selectedFile); // Appending dynamic file parameter
      formData.append("username", this.username);
      formData.append("type", isVideoFile ? "video" : "image");
      formData.append("created_at", localIsoTimestamp);
      if (parentReplyId) {
        formData.append("reply_to_id", parentReplyId);
      }

      this.cancelReply();

      try {
        const response = await axios.post(
          `${this.$url}/api/messages`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        if (response.data) {
          if (!response.data.created_at) {
            response.data.created_at = localIsoTimestamp;
          }
          this.messages = [...this.messages, response.data];
          this.scrollToBottom();
        }

        this.selectedFile = null;
        this.$refs.mediaInput.value = null;
      } catch (error) {
        console.error("Media upload failed", error);
      }
    },
  },

  beforeDestroy() {
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
    if (window.Echo) {
      window.Echo.leaveChannel("chat");
    }
  },
};
</script>

<style scoped>
/* Main Window Panel Container */
.messenger-panel { 
  width: 320px; 
  height: 440px; 
  background: #ffffff; 
  border: 1px solid #e5e5e5; 
  display: flex; 
  flex-direction: column; 
  border-radius: 8px 8px 0 0; 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}
.theme--dark .messenger-panel {
  background: #1e1e1e;
  border-color: #333333;
}

.panel-header { 
  background: #ffffff; 
  height: 48px; 
  flex-shrink: 0; 
  border-bottom: 1px solid #f0f0f0;
}
.theme--dark .panel-header {
  background: #1e1e1e;
  border-bottom: 1px solid #333333;
}

.header-title {
  font-size: 0.95rem;
  color: #050505;
}
.theme--dark .header-title {
  color: #ffffff;
}

.panel-body { 
  flex-grow: 1; 
  display: flex; 
  flex-direction: column; 
  overflow: hidden; 
}
.log-interface { 
  display: flex; 
  flex-direction: column; 
  height: 100%; 
  overflow: hidden; 
}

.log-area { 
  flex: 1 1 auto; 
  overflow-y: auto; 
  background: #ffffff; 
  padding: 12px;
  scrollbar-width: none; 
  -ms-overflow-style: none;  
}

.log-area::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
}

.theme--dark .log-area {
  background: #1e1e1e;
}

.message-row {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  width: 100%;
}

/* Base Flex-Row Container Setup */
.bubble-container {
  display: flex;
  width: 100%;
  align-items: center;
}

/* Hidden by default, just like Messenger layout */
.message-actions {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.15s ease, visibility 0.15s ease;
}
.message-row:hover .message-actions {
  visibility: visible;
  opacity: 1;
}

/* Outgoing Messages Alignment (You) */
.message-row.sent {
  align-items: flex-end;
}
.message-row.sent .bubble-container {
  justify-content: flex-start; 
  flex-direction: row-reverse; 
}
.message-row.sent .message-time {
  align-self: flex-end;
  text-align: right;
}

/* Default Outgoing Message Bubble Styling */
.message-row.sent .message-bubble {
  background-color: #000000;
  color: #ffffff;
  border-radius: 18px 18px 4px 18px;
}
.theme--dark .message-row.sent .message-bubble {
  background-color: #00796b; 
}

/* Dynamic override applied when MJ Duro is the logged-in user */
.message-row.sent.mj-duro-style .message-bubble {
  background-color: #e4e6eb;
  color: #050505;
}
.theme--dark .message-row.sent.mj-duro-style .message-bubble {
  background-color: #3a3a3c;
  color: #ffffff;
}

/* Incoming Messages Alignment (Others) */
.message-row.received {
  align-items: flex-start;
}
.message-row.received .bubble-container {
  justify-content: flex-start;
  flex-direction: row;
}
.message-row.received .message-time {
  align-self: flex-start;
  text-align: left;
}
.message-row.received .message-bubble {
  background-color: #e4e6eb;
  color: #050505;
  border-radius: 18px 18px 18px 4px;
}
.theme--dark .message-row.received .message-bubble {
  background-color: #2d2d2e;
  color: #e4e6eb;
}

/* Inner Bubble Text and Elements styling */
.message-bubble {
  padding: 8px 14px;
  font-size: 0.88rem;
  max-width: 75%;
  word-break: break-word;
  line-height: 1.4;
}
.sender-name {
  font-size: 0.68rem;
  color: #65676b;
  margin-left: 6px;
  margin-bottom: 2px;
  font-weight: 500;
}
.theme--dark .sender-name {
  color: #a0a0a5;
}

.message-time {
  font-size: 0.62rem;
  color: #bcc0c4;
  margin-top: 2px;
  padding: 0 6px;
}
.theme--dark .message-time {
  color: #72727a;
}

/* HTML5 Embedded Native Controls styling */
.bubble-video {
  display: block;
  max-width: 220px;
  background-color: #000;
}

/* Reply Context Box Layout positioning context */
.reply-context-bubble {
  font-size: 0.75rem;
  background: rgba(0, 0, 0, 0.05);
  padding: 4px 10px;
  border-radius: 12px;
  margin-bottom: 2px;
  max-width: 65%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-left: 3px solid #65676b;
}
.theme--dark .reply-context-bubble {
  background: rgba(255, 255, 255, 0.08);
  border-left-color: #a0a0a5;
}
.message-row.sent .reply-context-bubble {
  align-self: flex-end;
}
.message-row.received .reply-context-bubble {
  align-self: flex-start;
}
.reply-context-user {
  font-weight: bold;
  font-size: 0.68rem;
}
.reply-context-text {
  opacity: 0.8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Bottom State Preview Indicator Row style */
.reply-status-indicator {
  background: #f7f7f7;
  border-top: 1px solid #f0f0f0;
  font-size: 0.78rem;
  height: 32px;
}
.theme--dark .reply-status-indicator {
  background: #252526;
  border-top-color: #333333;
}
.reply-preview-details {
  max-width: 80%;
}

/* Bottom Input Area */
.input-area { 
  flex: 0 0 auto; 
  background: #ffffff; 
  border-top: 1px solid #f0f0f0; 
}
.theme--dark .input-area {
  background: #1e1e1e;
  border-top: 1px solid #333333;
}

.messenger-input-pill {
  background-color: #f0f2f5;
  border-radius: 20px;
  padding: 0 8px;
  display: flex;
  align-items: center;
}
.theme--dark .messenger-input-pill {
  background-color: #2a2a2a;
}

@media (max-width: 600px) {
  .messenger-panel { 
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100vw; 
    height: 100vh; 
    max-width: 100vw; 
    max-height: 100vh; 
    border-radius: 0; 
    border: none; 
    z-index: 9999; 
  }
  .panel-header { 
    height: 54px; 
  }
}

.emoji-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; text-align: center; }
.emoji-item { font-size: 20px; cursor: pointer; user-select: none; }
.emoji-item:hover { transform: scale(1.2); }
</style>