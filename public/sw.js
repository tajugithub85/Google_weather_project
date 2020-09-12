// importScripts('cached-app.js');

var cache_myApp = 'v1';
var cached_urls = [
  "index.html",
  "main.js",
  "app.js",
  "style.css",
  "unknown.png",
  "manifest.json"
];
 // call istall event  
self.addEventListener('install', (e) => {
  console.log('Service Worker Install');
  e.waitUntil(
      caches
      .open(cache_myApp)
      .then((cache) => {
       console.log('Service Worker Caching all: app shell and content');
         cache.addAll(cached_urls);
   })
    //.then (()=> self.skipwaiting())
  );
});
//call istall evet
self.addEventListener('activate', (e) => {
  console.log('service worker:activated');

  // remove unwated cachese
  e.waitUntil(
    caches.keys().then((cache_myApp) => {
      return Promise.all(
        cache_myApp.map((cache) => {
          if (cache != cache_myApp) {
            console.log('service worker cear caches')
            return caches.delete(cache);
          }
        })
      )
    })
  )
});
self.addEventListener('fetch', (e) => {
  console.log('service worker fetchig');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
  
});


