const CACHE_NAME = 'guia-santa-rosa-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/img/icon-192.png',
  '/img/icon-512.png',
  '/img/favicon.png'
  // Agregá aquí los nombres de tus iconos de categorías, ej: '/img/delivery.png'
];

// Instalación: Guarda los archivos básicos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Estrategia: Cache First (Busca en el celu, si no está, va a internet)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((fetchResponse) => {
        // Opcional: Podés guardar nuevas imágenes que el usuario vea sobre la marcha
        return fetchResponse;
      });
    })
  );
});