const CACHE_NAME = "sharon-portfolio-offline-v2";

const OFFLINE_URL = "/offline.html";
const PORTFOLIO_PDF = "/porto/porto.pdf";

const PRECACHE_URLS = [
  OFFLINE_URL,
  PORTFOLIO_PDF,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") {
    return;
  }

  /*
   * ============================================
   * PAGE NAVIGATION
   * ============================================
   */

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(async () => {
        const cache = await caches.open(CACHE_NAME);

        return cache.match(OFFLINE_URL);
      })
    );

    return;
  }

  /*
   * ============================================
   * CACHED PDF
   * ============================================
   */

  if (
    new URL(request.url).pathname ===
    PORTFOLIO_PDF
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          return cached;
        }

        return fetch(request);
      })
    );

    return;
  }

  /*
   * ============================================
   * NORMAL REQUESTS
   * ============================================
   */

  event.respondWith(
    fetch(request).catch(() =>
      caches.match(request)
    )
  );
});