const CACHE_NAME = "acampamento-v1"

const urlsToCache = [

"/",
"index.html",
"style.css",
"script.js",
"comprovantes.html",
"comprovantes.js",
"perfil.html",
"perfil.js",
"logo.png"

]

self.addEventListener("install",event=>{

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache=>cache.addAll(urlsToCache))

)

})

self.addEventListener("fetch",event=>{

event.respondWith(

caches.match(event.request)
.then(response=>response || fetch(event.request))

)

})