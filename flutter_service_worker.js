'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "48a24b70a0b376535542b996af517398",
".git/config": "31981761a303a643a5cf1a044b6f69dc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "89c448e06cde1962b8fb555c395fab87",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b68352671a022dc1b2f42228a02f1550",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9d50d8898888bbad1bfdc9ee42e19d42",
".git/logs/refs/heads/master": "9d50d8898888bbad1bfdc9ee42e19d42",
".git/logs/refs/remotes/origin/master": "d33fb430d615f2e0336d71d4d1b21263",
".git/objects/01/cab64ce7c21614a4abd5b564f43d3b59090181": "cdc34825bbf569f06e5ae50fdfdfe66d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/7b521a1de7d10aec2f800589031d8884210c02": "5d8a422056db782e64a779836428cf86",
".git/objects/07/f76607c18edb5cb4907a06d324ab2cbecc82ff": "eb26241cf86f137b23d461e47ef2ef81",
".git/objects/09/20bed369f6424d046a2a0c48fa5887bd2516f9": "ee3970956b1248aabb94213963c054b6",
".git/objects/0f/2b6dfd6e669155e1c94a4860dca71a01fcae58": "7cc38e62f51fcc1f2d0a751d1621b4d2",
".git/objects/10/b6dcd3ea97113a662436033e51bfb08be0cd16": "df890f1e196134e2b815e16ab8af5206",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/78bedb0b8ef249768399750e387c0bd75c415d": "efd2e05f448f04d76ea07fd26a621ecf",
".git/objects/16/a081c886bbb770f52d75eeab93471967ade8f3": "74f758b1f585031be5d630cb6f32b4cf",
".git/objects/16/db2613e49234c019bd62557885d5db41e41b3e": "1dc07d9a60c89281e8b8d434714af2f6",
".git/objects/1c/50f7c570be51f74e0e5c39671e454926e0446c": "93d38f7c7c67846cfb7219ff1d4c83d6",
".git/objects/2f/e0e0e1d719db6693576bd9388e78d1f5b33051": "980ebccb9020c82dd5e1ccb19691d768",
".git/objects/30/cd708c62d8e7664b37523f9b9da2b03882bb3a": "02b9c35058085ce88572bae7ce0aa18a",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/4e0debeef353ed3d67c8b3f4cab0fde8947ec3": "ea1d88b6838dfccf8832cb78a9019e6a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c1ee1dec90d858f77437cbf69bda9516d4e2a0": "760578d29d67a8ef75f06d2887786997",
".git/objects/46/caf600d122f7fb8c6d0ed8b3504af665c1858d": "4fae0ee780cabfb9de59046676564d52",
".git/objects/47/001c7c454cdf650c9a429f6f44fc2cff1ed35d": "7a578ad4850304838cca105909cb1183",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/c0edfbc9e72ab89af9cc116f70c15bfc7fc559": "9e5c0308265a2f7f9311d27dcb9d1fb0",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5c/10745d859e0a2df743490529b781f43cda4650": "1d66e85a20fb3516df127589ededb054",
".git/objects/5e/2944e81e386a9c886321c0894cb748a21897b1": "fd3bf48fc3717822eff051471bf5a91d",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6a/77f41634892ce47b0027ac12cc4e6e4ee02073": "d70ac68a0f87b86594b24348cd9d0bb8",
".git/objects/70/66116df7b485a824b2b126632547ff9aa9ba9b": "3e4bfd2af092062555ec6d063aaaae60",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/57eeb3c76ca99c8d1d661c475bc1b977bfee27": "8ccdef8557ea63562e341c4279f2a75d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/fa9a240bd7e383744ad0ec1c53b1fc1a8491a4": "ee12efd9165de56ecc2c7e57df1d2838",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ec40712a62620478aabaf4377c57dd7b053ecf": "66dab1c61f6356d0fb4ab992df7e7bc5",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/5b268e8d131b8e5a3b01de4b2009fa543a108a": "c4eee412d68125969efdb5a401463fa5",
".git/objects/90/912e9b0fb3812e90dd0ca35ad812af2c95eb52": "096085c59670dfa53cab07f707e28af4",
".git/objects/a0/da01de5b1999726fb55d32d362b0cf8040de62": "0cf8510c248b49bf1cefc2bd467d081d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/dd962720d1492eb527864035e848bcbf0117e6": "c4fb3e97e32f7deb79cdf7dd7cd43b46",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/39f734debc1205b70da8fcb148c59cfc50383d": "844d7dfd6094e23b1a54e8621d55d337",
".git/objects/b6/db7500aca90e2ddb261c1ed7bbc6f6f34c02af": "b9326f95a463613a9739dfec249427b7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/99e4df4ea3eb945158da83d610660e88756a16": "e2509a88a6888ff1b6aee6e9009a12ac",
".git/objects/c4/145407ac8d8bd4c1417f42f2b67620939a7434": "41fc011d046d9a309f9541225e046838",
".git/objects/d5/614fba58643229fdbeb9cc69bc95f574cf46a4": "3736ffbb56ef1bd60db550b62c13f3bc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/323290bf5cd677cb7042d7d627ca8122651e4b": "e3e4a40f7b54bf91a3cbebb4d544c718",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/16e55c43652c481daa904af00218c70e713df6": "1e0b1328acb044cd78ff123db7c9023c",
".git/objects/e6/fc997e39e5da8e79504c010a5f4cf226382e6d": "586d51e304feb4982a36fd8fb5b3981c",
".git/objects/e7/ef6eadbe2b7446718fb634ef84705a1d470e0f": "d5670e16cc04e6262072a87e2910377f",
".git/objects/eb/20d4e4973af35447c761c32089171876f5a496": "a19b87f7b50e82b36dc6b75cd11666a7",
".git/objects/eb/7037820826f56f03f1b55a65422fa3c543cf5e": "55c9a8bd9beaa8f8e6c18152b0204dcd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/f302c17029c8f7790431a882d391edfcb76b2a": "badf89b9c95e7a2f6980d88e2709e674",
".git/objects/f8/9c98bd9c1abccd9626aa9e42977471f208eeb7": "2dbad071946baf62e3ddcf5e48c3614e",
".git/objects/fa/7f92681b57c6eb2119143954944d17368dd577": "068c3001e60922e88b47f75b1741738d",
".git/objects/fc/c58e15153127733de5ee27dfb55ae61c421320": "5cc7760cfb5862a381bd447aaba896ea",
".git/objects/pack/pack-482e98d8493db2bfb57d1ed307a72cd4af545c15.idx": "862ae9cc95fc9698bb7597d941becb84",
".git/objects/pack/pack-482e98d8493db2bfb57d1ed307a72cd4af545c15.pack": "56500e2b820f487d71a907d6db2e42f4",
".git/refs/heads/master": "d0e34e51e7921ed500de691847db34a3",
".git/refs/remotes/origin/master": "6d12bab89fec126b1fd3eeb06b15fa79",
"assets/AssetManifest.json": "4020df421197ce0b5c2526f613dc5b18",
"assets/assets/csc.png": "425b353ba542f21fa77dc2ef969b21e2",
"assets/assets/error.png": "6f80497be6fbfe5f23c306ae4dacddb3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "5bef44d54539bd43f663b7a7f68f5b6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "4a9751cac9e479ce2ec969c80d1eab72",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "086cebc3474cdf9a74216e30d93dff9c",
"icons/Icon-512.png": "086cebc3474cdf9a74216e30d93dff9c",
"icons/Icon-maskable-192.png": "086cebc3474cdf9a74216e30d93dff9c",
"icons/Icon-maskable-512.png": "086cebc3474cdf9a74216e30d93dff9c",
"index.html": "b73650e219f59ee7ecb0e56c050b3e74",
"/": "b73650e219f59ee7ecb0e56c050b3e74",
"main.dart.js": "ee0fe4d44342049e5041d1543416c77a",
"manifest.json": "45fe6872a3a2c2fd92fb4e6016934a62",
"version.json": "f6b16fece3f67527071eaba07f69a51b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
