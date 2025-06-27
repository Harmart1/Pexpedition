self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/products_sanctuary.html',
                '/products_pod.html',
                '/products_mat.html',
                '/products_bowl.html'
                // '/assets/images/pexpedition-logo.png', // Example: Add specific, critical images
                // '/assets/images/franklin-arctic.jpg'  // Example: Add specific, critical images
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});