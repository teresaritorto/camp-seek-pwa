var cacheStaticName = 'weather-camp-seek';  
var dropBoxCacheName = 'db-weather-camp-seek';  

var filesToCache = [
 '/',  
  '/index.html',  
  '/javascript/weather.js',  
  '/styles/weather.css'
];

var currentCacheNames = [
cacheStaticName,
dropBoxCacheName
];

//install with known static cache
//happens when this worker is successfully registered
self.addEventListener('install', function(e) {  
  console.log('[ServiceWorker] Install');  
  e.waitUntil(  
    caches.open(cacheStaticName).then(function(cache) {  
      console.log('[ServiceWorker] Caching app shell');  
      return cache.addAll(filesToCache);  
    }) 
  );  
});

//Occurs the first time the worker becomes active - i.e.
//when the page is refreshed (hard)
self.addEventListener("activate", function (event) {
    event.waitUntil(
      caches.keys()
        .then(function (cacheNames) {
          return Promise.all(
            cacheNames.map(function (cacheName) {
              if (currentCacheNames.indexOf(cacheName) === -1) {              
                return caches.delete(cacheName);
              }
            })
          );
        })
    );
  });

//fetch when request is made either from cache(or if not in cache add it))
//handle delayed caching of other assets based on opaque concerns
//Response types include - 
//Basic: hosted on our domain
//CORS: external domain that supports CORS (i.e. full access to the response)
//Opaque: response from another source that doesn't support CORS
self.addEventListener("fetch", function (event) {
	var requestURL = new URL(event.request.url);
	event.respondWith(
		caches.match(event.request)
		.then(function (response) {

		  if (response) {
			return response;
		  }

		  var fetchRequest = event.request.clone();

		  return fetch(fetchRequest).then(
			function (response) {

			  var shouldCache = false;

			  if (response.type === "basic" && response.status === 200) {
				shouldCache = cacheName;
			  } else if (response.type === "opaque") { // if response isn"t from our origin / doesn"t support CORS
				//you could optimise this to be part of a white list (for demo purposes only)
				if (requestURL.hostname.indexOf("pancakeapps.com") > -1) {
				  shouldCache = dropBoxCacheName;
				} else {
				  // just let response pass through, don't cache
				}
			  }

			  if (shouldCache) {
				var responseToCache = response.clone();

				caches.open(shouldCache)
				  .then(function (cache) {
					var cacheRequest = event.request.clone();
					cache.put(cacheRequest, responseToCache);
				  });
			  }

			  return response;
			}
		  );
		})
	);
});