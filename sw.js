const CACHE_VERSION='brevetpro-v5';
const APP_CACHE=`${CACHE_VERSION}-app`;
const RUNTIME_CACHE=`${CACHE_VERSION}-runtime`;

const PRECACHE_ASSETS=[
  './',
  './index.html',
  './style.css',
  './app.js',
  './db-data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './brevetcoin-ui.png'
];

self.addEventListener('install',event=>{
  self.skipWaiting();
  event.waitUntil(
    caches.open(APP_CACHE).then(cache=>cache.addAll(PRECACHE_ASSETS))
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(
      keys
        .filter(key=>![APP_CACHE,RUNTIME_CACHE].includes(key))
        .map(key=>caches.delete(key))
    );
    if('navigationPreload' in self.registration){
      await self.registration.navigationPreload.enable();
    }
    await self.clients.claim();
  })());
});

function isFontRequest(url){
  return url.origin.includes('fonts.googleapis.com') || url.origin.includes('fonts.gstatic.com');
}

async function staleWhileRevalidate(request,cacheName=RUNTIME_CACHE){
  const cache=await caches.open(cacheName);
  const cached=await cache.match(request);
  const networkPromise=fetch(request)
    .then(response=>{
      if(response && response.ok){
        cache.put(request,response.clone());
      }
      return response;
    })
    .catch(()=>cached);
  return cached || networkPromise;
}

async function networkFirst(request,cacheName=RUNTIME_CACHE){
  const cache=await caches.open(cacheName);
  try{
    const response=await fetch(request);
    if(response && response.ok){
      cache.put(request,response.clone());
    }
    return response;
  }catch(error){
    const cached=await cache.match(request);
    if(cached) return cached;
    throw error;
  }
}

self.addEventListener('fetch',event=>{
  const {request}=event;
  if(request.method!=='GET') return;

  const url=new URL(request.url);
  const isLocalAsset=url.origin===self.location.origin;
  const isNavigation=request.mode==='navigate';
  const isStaticAsset=isLocalAsset && /\.(?:js|css|png|webp|svg|json)$/i.test(url.pathname);

  if(isNavigation){
    event.respondWith(networkFirst(request,APP_CACHE));
    return;
  }

  if(isStaticAsset || isFontRequest(url)){
    event.respondWith(staleWhileRevalidate(request,isLocalAsset?APP_CACHE:RUNTIME_CACHE));
  }
});
