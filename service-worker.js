importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js"
);

workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  // Make PWA read from cache if it exists in there instead of querying via internet.
  new workbox.strategies.CacheFirst()
  // Make PWA query via internet first before reading it from cache if it exists in there (will also default to cache if app is not connected to internet).
  // new workbox.strategies.NetworkFirst()
);
