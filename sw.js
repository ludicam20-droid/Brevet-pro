const CACHE_NAME = 'brevetpro-v6'; // CHANGE CE CHIFFRE À CHAQUE MISE À JOUR (v11, v12...)
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
  // Ajoute ici tes dossiers si besoin (ex: './assets/avatar1.png')
];

// Installation : on met en cache
self.addEventListener('install', (e) => {
  self.skipWaiting(); // FORCE le nouveau SW à s'activer tout de suite
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Activation : on supprime les ANCIENS caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim(); // Prend le contrôle des pages immédiatement
});

// Stratégie : Réseau d'abord, sinon Cache
// C'est ça qui permet de voir les modifs direct si tu as de la 4G/Wifi
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
