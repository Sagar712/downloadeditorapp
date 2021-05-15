self.addEventListener("install", e => {
  e.waitUntil(
      caches.open("EditorApp").then(cache => {
          return cache.addAll(["./", "./main.js", "./style.css", "./Screenshot.png", "",
          "./contact-us/contact.html", "./contact-us/otherstyle.css", 
          "./import-export/import-export.css", "./import-export/import-export.html", "./import-export/import-export.js"]);
      })
  );
});

self.addEventListener("fetch", e => {
  console.log(`Intesepting fet req for: ${e.request.url}`);

  e.respondWith(
      caches.match(e.request).then(response => {
          return response || fetch(e.request);
      })
  );

});

