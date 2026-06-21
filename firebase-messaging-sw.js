importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDPNggPA-1HtrRrbFwTMDqOoEZSq6D9eGY",
  projectId: "gat-arbeidstimer",
  authDomain: "gat-arbeidstimer.firebaseapp.com",
  messagingSenderId: "246390249634",
  appId: "1:246390249634:web:a64005874385c4fa43dffb"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const { title, body } = payload.notification;
  self.registration.showNotification(title, {
    body: body,
    icon: '/icon.png'
  });
});
