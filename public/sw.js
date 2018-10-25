var urlsToCache = [
  '/',
  '/add2numbers.html',
  '/add2numbers.js',
  '/map.html',
  '/peta.js',
  '/kuliner.html'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open('dicky-cache-v2')
      .then(function(cache) {
        console.log('in install serviceworker... cache opened!');
        return cache.addAll(urlsToCache);
      })
  );

});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
self.addEventListener('activate', function(event) {

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheNames) {
          return cacheNames != 'dicky-cache-v2'
        }).map(function(cacheNames) {
          return caches.delete(cacheNames)
        })

      );
    })
  );
});
