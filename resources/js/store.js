import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    session: false,
    status: null,
    credentials: {},
    currentUsername: '',
    chatMessages: [],
    SystemID: null,
    ChapterID: null,
    System: null,
    SystemName : null
  },
  mutations: {
    SET_DOWNLOAD_PARAMS(state, payload) {
      state.SystemID = payload.systemId;
      state.ChapterID = payload.chapterId;
      state.System = payload.system;
      state.SystemName = payload.SystemName;
    },
    login(state, payload) {
      state.session = true;
      state.status = null;
      state.credentials = payload;
    },
    logout(state) {
      state.session = false;
      state.credentials = {};
      state.currentUsername = '';
      state.chatMessages = [];
    },
    setCurrentUsername(state, username) {
      state.currentUsername = username;
    },
    addMessage(state, message) {
      const formattedMessage = {
        id: message.id || Date.now() + Math.random(),
        username: message.username || 'Unknown User',
        content: message.content || '',
        type: message.type || 'text', 
        imageUrl: message.imageUrl || null 
      };
      state.chatMessages.push(formattedMessage);
    },
    clearMessages(state) {
      state.chatMessages = [];
    }
  },
  actions: {
    updateDownloadParams({ commit }, data) {
      commit('SET_DOWNLOAD_PARAMS', data);
    },
    login({ commit }, payload) {
      commit('login', payload);
    },
    logout({ commit }) {
      commit('logout');
    },
    setCurrentUsername({ commit }, username) {
      commit('setCurrentUsername', username);
    },
    sendMessage({ commit }, messageData) {
      commit('addMessage', messageData);
    }
  },
  getters: {
    getCurrentUsername: state => state.currentUsername,
    getChatMessages: state => state.chatMessages
  },
  plugins: [createPersistedState({key:'vuexTS'})]
});