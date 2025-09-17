const CACHE_NAME = "video-reels-cache-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json"
];

// Install SW
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Fetch requests
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
