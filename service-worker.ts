const API_URI = 'http://localhost:4000';
const MILLISECONDS_IN_A_WEEK = 1000 * 60 * 60 * 24 * 7;

const today = new Date();
const firstJanuary = new Date(today.getFullYear(), 0, 1);

const currentYear = today.getFullYear();
const currentWeek = Math.floor(
  (+today - +firstJanuary) / MILLISECONDS_IN_A_WEEK + 1,
);

const cachePrefix = 'FrontEnd-Flow';
const cacheVersion = `v${currentYear}:${currentWeek}`;
const cacheName = `${cachePrefix}_${cacheVersion}`;

const sw = self as unknown as ServiceWorkerGlobalScope;

sw.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      await cache.addAll([
        `${API_URI}/articles?_page=1&_limit=9`,
        `${API_URI}/articles/1`,
      ]);
    })(),
  );

  sw.skipWaiting();
});

sw.addEventListener('fetch', (event) => {
  const { destination, method, url, headers } = event.request;

  const headerAccept = headers.get('Accept') ?? '';
  const isHtmlPage = headerAccept.includes('text/html');
  const request = isHtmlPage ? '/' : event.request;

  if (method === 'GET' && url.startsWith('http')) {
    event.respondWith(
      (async () => {
        if (destination === 'image') {
          const cachedImage = await caches.match(request);
          if (cachedImage) {
            return cachedImage;
          }
        }

        try {
          const response = await fetch(request);
          const cache = await caches.open(cacheName);
          await cache.put(request, response.clone());
          return response;
        } catch (error) {}

        const response = await caches.match(request);
        if (response) {
          return response;
        }

        return new Response('', {
          status: 502,
          statusText: 'No connection',
        });
      })(),
    );
  }
});

sw.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();

      await Promise.all(
        keys.filter((key) => key !== cacheName).map(caches.delete),
      );
    })(),
  );

  sw.clients.claim();
});
