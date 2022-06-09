'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1dbd6d80562655e9c759960e346a8a51",
"assets/assets/activities.svg": "7a9020c09863bbcc4ed3045d85cb3466",
"assets/assets/apetito.svg": "3d55a4e8faad8c0d1b98f6344c21b162",
"assets/assets/attach.svg": "4131638eabd4087163381f4fba10a23c",
"assets/assets/billing_Transaction.svg": "4063562c42060f6d0e2bb3253cfe8395",
"assets/assets/calendar.svg": "b604362fe41ffef2349b9e15a9328068",
"assets/assets/characters.svg": "f592919b34bd02ab7bd14159408af392",
"assets/assets/chat.svg": "25718d0168d6448b57c0460c0a6b2d68",
"assets/assets/checkin_app.svg": "f7f24deed1ce2816dfa57745334a2dbf",
"assets/assets/children.svg": "abf75e67eca818317ed1f3a4648d13e0",
"assets/assets/child_attendance.svg": "85d9136782392f4033bc11e0965f4d9c",
"assets/assets/child_development.svg": "a2c3de6a8710bc4f9f3476e95161188a",
"assets/assets/csv.svg": "64cdb65ee3ca7d0719c8b9f8cbd0748c",
"assets/assets/dashboard.svg": "4fe41f1e20cc15ba107bc173f0b5d579",
"assets/assets/document.svg": "d0292aa31bb8e8176d9ba68bbd1eddf1",
"assets/assets/docx.svg": "546f543d9f9f2f57ea2273eb2679d33f",
"assets/assets/epub.svg": "820786fc7573f9245c019af957cd1280",
"assets/assets/file.svg": "39a99c37a26bf66dc2e5059fe5c5da81",
"assets/assets/food_plan.svg": "a12ecc6c1b8b126d58f0468be19f884e",
"assets/assets/forgot_password.svg": "22e5b29fc823e075f403305709857843",
"assets/assets/holiday_feedback.svg": "ecd35a355b9aafa15bed947f73ed9bbd",
"assets/assets/info.svg": "2935bac1a38ef4acf37573da3b566cd3",
"assets/assets/inspirations.svg": "4d6f4a22cda98e9e1467aaa2f9980548",
"assets/assets/listing.svg": "217bb6c5e641be70e3878e5c23e3db6d",
"assets/assets/login_artwork.png": "478341553119889029751e8ce1de66b3",
"assets/assets/login_artwork.svg": "50c975d6c514ad62fb10be9aa3cd3e14",
"assets/assets/logo.png": "965d636fb7cb8a7200c58ff876924b45",
"assets/assets/logo.svg": "a168b20612f5784ee6351d25795940b4",
"assets/assets/messages.svg": "f671090dbffcd596e6ff9eae32213224",
"assets/assets/newsfeed.svg": "534c170b6b529717d24c1927ea45d2ca",
"assets/assets/notifications.svg": "dddf556f1ce2e71976495da559019f2e",
"assets/assets/options.svg": "abcf49c363ceeeb65308434acd29d309",
"assets/assets/pdf.svg": "1cb899b44ee440ac29bb503ad591347d",
"assets/assets/permissions.svg": "318596054bf7522af77d7eeea111e0e9",
"assets/assets/ppt.svg": "6179889f7a01977e3ff8d137c4f5ae01",
"assets/assets/product_management.svg": "0927023a349c00db18d066565fe18e48",
"assets/assets/profile.svg": "0b3f80ad8bff302953e8532906f8c607",
"assets/assets/rooms.svg": "0cfc0d79e34144ac77884083d04bde0c",
"assets/assets/room_planning.svg": "a94c98d05ec887204ee41e3af13beffa",
"assets/assets/staff_schedule.svg": "8ff1d355bbc76dcded19bff9bf45b514",
"assets/assets/subsidies.svg": "fbc3c93bd7a0b669d9381554eac42bc7",
"assets/assets/surveys.svg": "8ee3b8309a813c9152cfc9145ac6dd8b",
"assets/assets/svg.svg": "70d20e35ee53e7143b162e6f261d228a",
"assets/assets/tools.svg": "a6dc669ec15b5db5db752175ed14e3bc",
"assets/assets/translations/af.json": "ff77fc60f965057d51e6ab2c65cf6af6",
"assets/assets/translations/ar.json": "6707e31e792d854cd7e619e7e07a5ba9",
"assets/assets/translations/da.json": "dbe6386c266f1cb2e8369df6af6f9c31",
"assets/assets/translations/de-at.json": "a5d754c94e0ef09df6dbb820156223e0",
"assets/assets/translations/de-ch.json": "2d568c16d8e2fea67486b6b519b6118e",
"assets/assets/translations/de.json": "bffa819f41e60a818c3acc3a00e5511c",
"assets/assets/translations/el.json": "8371d5d52aabb624f219057963d03a26",
"assets/assets/translations/en-gb.json": "7eee5858475d423d9ae69f4db27864b0",
"assets/assets/translations/en.json": "73710bdc7337a830d8a5afef30c3c9ca",
"assets/assets/translations/es.json": "6a3ba2dd9b985ff44e68f3031727a213",
"assets/assets/translations/fr.json": "8d6e541aba7b537ca18550384ad15d53",
"assets/assets/translations/it.json": "08e6d27b3f271a9ee4cc1d29f61501e0",
"assets/assets/translations/lt.json": "014ce02d89ac6f9212183ba1967ac4b6",
"assets/assets/translations/nl.json": "d0fe17efadc5a1d943b906361860565c",
"assets/assets/translations/no.json": "e41affc611edffa114ed0bc888e223b6",
"assets/assets/translations/ru.json": "73d04a2fcf72ddf542888c81b9da46fe",
"assets/assets/translations/sv.json": "a8551622d07698a4ecc55c83c6e06c45",
"assets/assets/translations/tr.json": "34da4cd5857859c373708b1c2e80020b",
"assets/assets/txt.svg": "324da803114b600ca425f9a14ce7a15e",
"assets/assets/waitlist.svg": "7739b4978dcc2812cf33ebdb191b5a29",
"assets/assets/xlsx.svg": "dfdd7b76d58bf547fac66ddb34cda1b4",
"assets/assets/zoom.svg": "1309c6002980342450ee90f77edba87e",
"assets/FontManifest.json": "ad398007388ce6906ef955bc13125908",
"assets/fonts/Inter-Black.ttf": "c6dacb6bcfcd747bba440bf2fbd2c85a",
"assets/fonts/Inter-Bold.ttf": "cef517a165e8157d9f14a0911190948d",
"assets/fonts/Inter-ExtraBold.ttf": "82c8c1cf127220ccd9914e5dc739de28",
"assets/fonts/Inter-ExtraLight.ttf": "819a76705047d6474cb529a319e74bbc",
"assets/fonts/Inter-Light.ttf": "d4be01c95657978131342b1dcf829a45",
"assets/fonts/Inter-Medium.ttf": "1aa99aa25c72307cb7f16fae35e8c9d1",
"assets/fonts/Inter-Regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/fonts/Inter-SemiBold.ttf": "3e87064b7567bef4ecd2ba977ce028bc",
"assets/fonts/Inter-Thin.ttf": "f482d38d962b4d95853bef956ff6dd83",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7975efcbd8ff76147f6cf61b87670392",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f966e8076a131f576a6c62dd18203dd4",
"/": "f966e8076a131f576a6c62dd18203dd4",
"main.dart.js": "48fa4b0fc7c6d7e8fcfe23e897b7fb11",
"manifest.json": "4112bd971d87d0ac512e3441868a3776",
"version.json": "5bdd2b14bb9cebdab40ba5f6abe6e6d5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
