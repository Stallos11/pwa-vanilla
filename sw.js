const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1');
  await cache.addAll(resources);
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    addResourcesToCache([
      '/pwa-vanilla/',
      '/pwa-vanilla/index.html',
      '/pwa-vanilla/style.css',
      '/pwa-vanilla/script.js',
      '/pwa-vanilla/icone.png',
    ])
  );
});

self.addEventListener('fetch', () => console.log('fetch'));
