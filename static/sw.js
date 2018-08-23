importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-practice-2",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.e74f45a8f710be7bc841.js",
    "revision": "5ef50bbd491212ea7c360fc5e819806d"
  },
  {
    "url": "/_nuxt/layouts/default.250b6076743d642bb23d.js",
    "revision": "73f99e19deed20ab992b6f17b57ffd81"
  },
  {
    "url": "/_nuxt/manifest.f16c7f37faff405bcafe.js",
    "revision": "821737c32f323ff7e133eb39c51200b5"
  },
  {
    "url": "/_nuxt/pages/index.840b4d806a780e6c230c.js",
    "revision": "100de0d21e095d64a0f5e5a318d34fc0"
  },
  {
    "url": "/_nuxt/vendor.4cf15d07719da0835ee1.js",
    "revision": "06e3c18e7f20697e4bf76882996c98d8"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

