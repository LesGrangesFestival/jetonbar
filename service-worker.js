const CACHE_NAME = "les-granges-ui-v5-1";
const FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/logo-les-granges-26.svg",
  "./assets/abeilles-les-granges.svg",
  "./assets/flowers.svg",
  "./assets/cloud.svg",
  "./assets/cloud-sun.svg",
  "./assets/beer.svg",
  "./assets/wine.svg",
  "./assets/soft.svg",
  "./assets/water.svg",
  "./assets/cocktail.svg",
  "./assets/cup.svg",
  "./assets/return.svg",
  "./assets/ticket.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
