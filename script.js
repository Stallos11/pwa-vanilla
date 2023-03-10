document.addEventListener('DOMContentLoaded', () => {
  registerServiceWorker();
});

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/pwa-vanilla/sw.js', {
        scope: 'https://stallos11.github.io/pwa-vanilla/',
      });
      if (registration.installing) {
        console.log('Installation du service worker en cours');
      } else if (registration.waiting) {
        console.log('Service worker installé');
      } else if (registration.active) {
        console.log('Service worker actif');
      }
    } catch (error) {
      console.error(`L'enregistrement a échoué : ${error}`);
    }
  }

  const handleNetworkChange = (e) => {
    const status = e && e.type ? e.type : navigator.onLine ? 'online' : 'offline';
    document.querySelector('#status').innerHTML = status;
  };

  handleNetworkChange();
  window.addEventListener('online', handleNetworkChange);
  window.addEventListener('offline', handleNetworkChange);
};
