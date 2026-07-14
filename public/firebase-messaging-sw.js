// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// PWA Standard Handshakes
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Firebase Initialization
firebase.initializeApp({
  apiKey: "AIzaSyCssH2ZwsVPSVbksXiKSaXz38HwNgH6CQ8",
  authDomain: "bebeapp-d56dd.firebaseapp.com",
  projectId: "bebeapp-d56dd",
  storageBucket: "bebeapp-d56dd.firebasestorage.app",
  messagingSenderId: "1087857358163",
  appId: "1:1087857358163:web:e0248b3592efa6a4fd5da6",
  measurementId: "G-0PSZSJZ7B2"
});

const messaging = firebase.messaging();

// Tagasalo ng Firebase Background Messages (Data-only payloads fallback)
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Background message received: ', payload);

  // Kung ang payload ay may notification block na, automatic na itong ipapakita ng Firebase SDK.
  // Gagamitin lang natin ito kung data-only payload ang pinadala para iwas double notification.
  if (!payload.notification) {
    const notificationTitle = payload.data?.title || "New Message";
    const notificationOptions = {
      body: payload.data?.body || payload.data?.content || "You received a new message.",
      icon: '/images/bebe.jpg',
      badge: '/images/bebe.jpg',
      tag: 'chat-notification',
      data: payload.data
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
  }
});

// FIX DITO: Sinala natin ang native push listener para hindi niya nakawin o masira ang FCM payloads!
self.addEventListener('push', (event) => {
  if (!event.data) return;

  try {
    const rawData = event.data.json();

    // KUNG PASOK ITO SA FCM PAYLOAD STRUCTURE, MAG-ABORT KA DITO AT HAYAAN SI FIREBASE SDK ANG MAG-PROSESO!
    if (rawData.from || rawData.notification || rawData.messagingSenderId) {
      return; 
    }

    // Kung hindi galing sa FCM (Halimbawa: Direct native push fallback para sa iOS lifecycle), dito siya dadaan:
    const options = {
      body: rawData.body || rawData.content || "New notification received.",
      icon: '/images/bebe.jpg',
      badge: '/images/bebe.jpg'
    };
    event.waitUntil(self.registration.showNotification(rawData.title || "New Message", options));

  } catch (e) {
    const textData = event.data.text();
    // Pag may bakas ng internal FCM messaging routing headers, huwag hawakan manually
    if (textData.includes("gcm") || textData.includes("google")) return;

    const options = {
      body: textData,
      icon: '/images/bebe.jpg',
      badge: '/images/bebe.jpg'
    };
    event.waitUntil(self.registration.showNotification("New Message", options));
  }
});

// Handle push notification clicks safely
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes('/expense') && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});