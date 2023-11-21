// Arquivo service-worker.js

const arquivosEmCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/jbx.ico',
  '/jbx2.ico',
  '/caf.gif',
  '/docs.gif',
  '/jumbexlogo.gif',
  '/jumbo.gif',
  '/shop.gif',
  '/facebook.png',
  '/instagram.png',
  '/lupa.png',
  '/phone.png',
  '/whatsapp.png',

  // Adicione aqui todos os recursos estáticos que deseja armazenar em cache
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('cache-v1').then(cache => {
            return cache.addAll(arquivosEmCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
