const CACHE_NAME = 'brevetpro-v1';

// Liste des fichiers à mettre en cache
// ATTENTION : Les noms doivent correspondre exactement à tes fichiers sur GitHub
const ASSETS = [
  './',                  // La racine (index)
  './brevetpro.html',    // Ton fichier principal
  './manifest.json',     // Ton fichier de config
  './logo.png',          // Ton icône (adapte le nom si besoin)
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap'
];

// Installation : on télécharge les fichiers dans la mémoire du téléphone
self.addEventListener('install', (e) => {
  self.skipWaiting(); // Force la mise à jour immédiate
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('App : Mise en cache des fichiers');
      return cache.addAll(ASSETS);
    })
  );
});

// Activation : on supprime les anciens caches si on change de version
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
});

// Interception : si on n'a pas internet, on utilise le cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});