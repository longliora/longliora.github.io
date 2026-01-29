const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = ['./', './index.html'];

// Cài đặt SW và lưu cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Kích hoạt SW và xóa cache cũ
self.addEventListener('activate', event => {
  console.log('Service Worker đang hoạt động');
});

// Xử lý request - BẮT BUỘC PHẢI CÓ ĐỂ CÀI ĐẶT ĐƯỢC APP
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});