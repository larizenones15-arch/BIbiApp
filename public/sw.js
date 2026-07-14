// Minimal Service Worker required by iOS/Android for web app push notifications
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Listens to network push triggers if you implement web-push later
self.addEventListener('push', (event) => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/images/bebe.jpg',
            badge: '/images/bebe.jpg'
        };
        event.waitUntil(self.registration.showNotification(data.title, options));
    }
});