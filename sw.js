
 let forCache = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
  ];

 self.addEventListener('install', function(event){
    event.waitUntil(
       caches.open('v1').then(function(cache){
              console.log('install works');
              return cache.addAll(forCache);
      })
      .catch(function(e) {
        console.log(e);
      })
    );
 });

 self.addEventListener('fetch', function(event) {
   event.respondWith(
     caches.match(event.request).then(function(response){
       if(response){
         console.log('Found');
         return response;
       }
       else {
         console.log('Not found');
         return fetch(event.request).then(function(response){
           let clonedRes = response.clone();
           caches.open('v1').then(function(cache){
             cache.put(event.request, clonedRes);
           });
           return response;
         }).catch(function(error){
           console.error(error);
         });
       }
     })
   )
});
