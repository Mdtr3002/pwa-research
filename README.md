# Progressive Web App - PWA

## I. Definition:

Today, users typically think of apps as either platform-installed apps or browser-based "web" apps, where the browser itself is an app installed on a specific platform:

- Platform-specific apps function only on their respective device platforms, requiring a separate codebase for each platform and possibly a specialized development team familiar with the necessary tools and languages. This approach allows access to all platform-specific capabilities.
- On the other hand, web apps operate universally with a single codebase, running across various browsers and devices that support those browsers. However, this universal compatibility limits their ability to utilize platform-specific features that may not be available everywhere.

A Progressive Web App (PWA) is a traditional web app that is progressively enhanced using open web technologies, to make sure it delivers the best possible experience on every device, based on available capabilities. This is a technology developed to make web applications more cross-platform and accessible on mobile devices. With PWA, you can create fast-loading websites that are highly interactive and compatible with various types of devices.

This means that users on modern browsers and newer devices will get an enhanced experience that rivals the platform-specific (installed) apps on that platform – but users on older browsers or devices will continue to get a usable experience in the form of familiar websites.

This allows Progressive Web Apps to combine the reach (broad availability and access) of website experiences with the capability (hardware features and rich resources) of platform-specific experiences.

Progressive enhancement is a design philosophy that puts emphasis on content-first experiences where developers

- Ensure there is a baseline experience so users can consume core content from any device, even those with older browsers.
- Detect the existence of newer capabilities (e.g., on modern browsers, newer devices) and enhance the experience on those devices to use them.

Progressive Web Apps takes advantage of open web technologies - like Service Workers, HTTPS, Web App Manifest, Push Notifications, and other Web APIs and capabilities - to detect and adapt experiences to suit the available capabilities on the platform.

- On older devices and browsers - where nothing new may be detected, it delivers a baseline website experience.
- On newer devices - it can detect device form factors and deliver responsive experiences that align with platform-specific behaviors.
- On modern browsers - it can detect support for Service Workers and Web App Manifest, and use those to unlock and support features like installability and offline operation - just like platform-specific apps.

## II. Origin:

Apple had been discussing a groundbreaking approach to creating web applications that "look and behave exactly like native apps" long before Google coined the term "Progressive Web Apps." In 2007, alongside the launch of the iPhone, Steve Jobs introduced the visionary idea of Web Apps, emphasizing app development around Safari's capabilities and downplaying the need for native apps. However, his enthusiasm waned, and four months later, an SDK for building more efficient native iOS apps was announced.

In 2015, Chrome developer Alex Russell and designer Frances Berriman introduced the term "Progressive Web Apps" in an article that called for a fundamental shift in our tools and understanding to "build better experiences across devices and contexts with a single codebase." This concept, an evolution of Apple's original idea enhanced with modern capabilities, received strong support from Google, which has aggressively promoted PWA development. Since then, major companies like Google and Microsoft have actively endorsed Progressive Web Apps as a solution to bridge the gap between web and native applications.

## III. Functionality and Key features:

### How PWAs works:

1. Customers access any website through the browser on their mobile devices. If the website supports PWA features, users will be prompted to install the site's PWA. This prompt will appear as a simple dialog box or an install button in the browser.
2. If users agree, the browser will download and store the PWA on their device. The PWA will be saved on the phone's home screen, similar to a mobile app. However, PWAs are not entirely stored on the user's device; they are typically cached in the browser to provide a seamless online and offline experience.
3. When users want to access the website, they can open the site's PWA instead of the browser, allowing for quicker and more convenient access and enabling continued use of the website even without a network connection.
4. If the PWA is designed to work offline, users can still access the website. When the network connection is restored, the PWA will update with the latest data from the website and synchronize the data on the user's device.

### Installing PWA

When an installed PWA is launched, it can be displayed in its own standalone window (without the full browser UI) but it still effectively runs in a browser window, even if the usual browser UI elements, such as the address bar or back button, aren't visible. The application will be found where the OS saves other applications, within a folder specific to the browser.

PWAs installed by a browser remain specific to this browser. This means that the browser that was used to install a PWA is the one used to run that PWA. It also means that you can install the same PWA from a different browser and that the two apps will behave as two different instances and will not share any data. The browser used to install the PWA will know the PWA is installed, but other browsers will not have access to the installed status. When multiple instances of a PWA are open, data is not shared between instances installed from different browsers.

When you tap the web app's icon, it opens up in the browser environment that installed the PWA, generally without the browser's UI around it. Similarly, the method used to uninstall the PWA depends on the browser that was used to install it.

### PWA’s characteristics

| Characteristic          | Why Is This Desirable?                                                                                         |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- |
| Discoverability         | I can find PWAs in app stores, or via web search.                                                              |
| Installability          | I can add PWAs to my device home screen, and launch them - like any platform-specific app.                     |
| Re-Engageability        | I can get push notification alerts (even if PWA is not actively in use) - like any platform-specific app.      |
| Network Independence    | I can get a usable PWA experience - like any platform-specific app.                                            |
| Progressive Enhancement | My PWA experience scales up (like platform-specific apps) or down (like website) based on device capabilities. |
| Secure                  | My PWA uses secure network communications with privacy safeguards in place.                                    |
| Responsive              | My PWA adapts to suit device screen size, orientation and input modality.                                      |
| Linkability             | I can link to, share, bookmark, and visit the PWA URL - like any website.                                      |

## IV. Comparing Progressive Web Apps, Web Apps, and Native Apps:

### PWA vs Web App

| Characteristic     | PWA                                                                                                                                                                           | Web App                                                                                                                                |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Installation       | Can be installed directly onto a user’s device. Once installed, a PWA can be accessed just like any other app.                                                                | Run entirely within a web browser and cannot be installed. Users must navigate to the web app’s URL each time they want to use it      |
| Offline capability | Designed to store data offline, enabling users to access and use the app even without an internet connection.                                                                 | Require a constant internet connection to function. If the connection drops, the web app becomes inaccessible, limiting its usability. |
| Push notifications | PWAs can send push notifications directly to users’ devices, providing engaging content even when the app isn’t actively in use.                                              | Users must manually check the web app for any updates or new content                                                                   |
| Performance        | With their ability to cache data and utilize service workers, which allow PWAs to load quickly and perform smoothly, PWAs deliver a faster and more seamless user experience. | Rely on a constant internet connection and do not benefit from the same level of caching and offline capabilities.                     |
| Security           | Are generally considered more secure because they use HTTPS and SSL encryption to protect data during transmission.                                                           | Are more vulnerable to security breaches due to their reliance on web browsers.                                                        |
| Customization      | Can be tailored to provide a native app-like experience                                                                                                                       | Must operate within the confines of the web browser, which restricts their ability to fully integrate with device features.            |
| Distribution       | Can be distributed through app stores, making them easily discoverable and accessible to a wide audience.                                                                     | Are typically accessed and distributed through web browsers                                                                            |

### PWA vs Native App

#### Development process:

- Building a progressive web app is cheaper than developing a native app. In the case of the native app, you will have to learn the language and build a version for each platform. This means you need at least two versions for iOS and Android, and the resources to maintain and update each version. Depending on the purpose and complexity of the app, this requires a lot of time and money.
- A progressive web app is faster to build and update with one single codebase for various platforms. With responsive design, you just need one version of the app, and it will display in an identical manner on all devices.
- PWA bypasses the cumbersome App Store requirements since all the users need is a web browser and a URL. Many PWA features are supported by popular browsers such as Chrome, Safari, Firefox, and Edge. This makes it easier for your app to reach a large audience in a short time.
- However, the Store requirements prevent poor-quality apps from being published. Publishing an app can increase your reliability and give users more confidence to access your app. Stores can also promote your business: being featured in an App Store can give you a quick branding and sales boost.

#### Security:

- PWAs have to run under HTTPS. These security protocols ensure that no exchanges between the client and the server are tampered with. In a secure environment, customers can enter personal details and credit card information without the worry they might be stolen.
- Compared to PWA, with a native app, you have the option to build in many security measures. In addition, users are more likely to trust an app than a URL, as it needs to pass the App Store’s security requirements before getting published.

#### Installation:

- A PWA requires no App Store or installation. From the browser, visitors can bookmark and add the app to their home screen with a few taps. The PWA will show up on the home screen, in their app directory, send notifications, and integrate into system settings.
- A PWA doesn’t take up as much space as an app. With just an URL, visitors can access and share the app with their friends. There’s also no need to update the app, as it always displays the most recent version upon launching.

#### Performance:

- PWA loads faster. At the heart of any PWA is service workers, scripts that run in the background and separate from the web page. With service workers, you can manage offline requests, prefetch, and cache certain resources, sync data with a remote server, and more.
- PWA runs from a browser, which means that there will be latency and more battery consumption than the native app. A native app can tie into the underlying operating system. It can access device hardware to do more calculations and deliver a better experience to your customers.

#### Functionality:

- PWAs have access to a range of device features (such as push notifications, camera, and geolocation), but they might be limited compared to native apps due to browser security and permission restrictions.
- Native apps have full access to all device features and sensors, allowing for more comprehensive use of hardware functionalities, including advanced features like Bluetooth, NFC, and background processing.

## V. When to make your application into a PWA:

### Summary on the reasons why progressive web apps help retain users:

- Easy onboarding: You can simply add the progressive web app to your home screen. No registration is required.
- No need to download: Because there’s no need to download a PWA, users don’t have to worry about storage space on their devices. Many apps get uninstalled because of this.
- Push notifications: Like those from native apps, these keep users informed of any updates in your business.
- Time & Money: PWAs are easy and cheaper to develop than typical apps. If you’re starting from scratch, you’re probably better off starting with a progressive web app as it will get to market faster.
- Offline capability: enabling users to access and use the app even without an internet connection.
- Broad reach: can be distributed through app stores and web browsers

One reason brands develop native apps is to cater to users who return to their websites to perform specific actions frequently. Apps make it easier for these functions to be performed without going to the brand’s website. They also have characteristics that make them fun to use.

You can use progressive apps in the same situations native apps are used—for applications you expect your visitors to visit frequently.

Other times you should consider using a progressive web app are when:

- You don’t have the budget for a full-fledged app.
- You need to get to market fast.
- Proper indexing on search engines is crucial.
- Cross-platform compatibility is essential to your business.
- You need to reach a wider audience.

### Case Studies on the Impact of PWAs on Businesses

<!-- Resources for case studies and metrics: PWAStats.com -->

<ins>Starbucks:</ins>

Starbucks used a PWA for its ordering system, which afforded the coffee giant additional functionality that a regular website doesn’t. When accessing the Starbucks PWA, consumers can place their orders, browse the menu, and much more without the hassle of downloading a new mobile app.

One of the big benefits is that this PWA is available offline, meaning customers can browse the menu and add things to their carts even if they don’t have service. When service is restored, they can immediately come back and complete their orders.

PWAs offer a lot of speed. Starbucks customers can place their orders quickly, something that’s important if they’re in a hurry and trying to grab a quick item on the go.

<ins>Uber:</ins>

The primary benefit of the Uber PWA is that it works on slower networks and doesn’t take up much space. This allows more users to interact with the app, even those with limited network and storage resources.

The Uber PWA is so versatile and accessible that it can be accessed via 3G or even 2G networks. Its PWA can accommodate the needs of consumers with low-end devices, as well as those who only use the service periodically and have no interest in installing the native mobile app permanently.

The Uber progressive web app can be downloaded in seconds thanks to its compact file size. By expediting the download process, Uber can reduce bounce rates and prevent potential customers from turning to one of its competitors.

<ins>Trivago:</ins>

Due to its ability to function offline, the PWA could help users avoid frustrating service disruptions when hopping on an elevator or driving through areas with poor service.

Another perk is that it gives users a chance to try out the platform before downloading.

## VI. PWA’s building blocks:

The three core building blocks for PWA development:

- HTTPS - makes your PWA secure.
- Service Workers - makes your PWA reliable and network-independent.
- Web App Manifest - makes your PWA installable.

Think about the PWA like a startup - with each technology being a founding team member with a specialized purpose that helps deliver a progressively-enhanced experience.

The app page is the CEO - it drives the core experience and remains responsive to user needs and interactions.
The Web App Manifest is the resume - it describes app identity, brand and capabilities to devices and app stores for installability.

HTTPS is the Chief Security Officer (CSO) - it encrypts end-to-end communications between app and server endpoints for safety.
The Service Worker is the Chief Operations Officer (COO) - it unblocks the CEO from performing time-consuming or synchronous tasks, and takes proactive actions to ensure reliable operation even when offline.

### HTTPS:

HTTPS or HyperText Transfer Protocol Secure is a secure version of the HTTP protocol, encrypting end-to-end communications between client and server endpoints in your web app by default.

Progressive Web Apps must be served from an HTTPS endpoint to ensure secure communications, provide user privacy safeguards and guarantee content authenticity. HTTPS is mandatory for Service Workers - the core PWA technology required for reliable, offline-friendly operation.

### Web App Manifest:

The Web App Manifest is an open web specification of a JSON format that is critical to making PWAs installable. Functionally, it governs how your PWA looks and behaves when installed on device by defining the properties (key-value pairs) that characterize its appearance and behaviors. In other words, it describes details about your web app, such as your app name, description, icons, and more.

- Identity - e.g., name, categories, starting URL.
- Characteristics - e.g, icons, colors, screenshots.
- Capabilities e.g., url_handlers

#### A simplified explanation of how Web App Manifest is used:

- The browser is like an amazing workplace where people look out for your success. PWAs are apps “working” there - they keep an updated “resume” (manifest) and “link” it in their HTML to tell the browser they can work “remotely” (on device). The browser uses it to “advertise” this to users (“Install This Site As An App”).
- If the user clicks that Install prompt, it triggers an “interview” between app new workplace (device), The latter looks up the resume for details (profile, appearance, skills) and adds it to its local “workplace directory” just like other platform-specific apps. Users can now launch the app, or discover it using device-specific search features. And, users and other apps can now target this app for tasks matching its listed capabilities (“url handling”).
- The PWA can also list its resume in app stores just like platform-specific apps (publish to e.g., Microsoft Store for Windows devices). When users Install from the app store, they just trigger the same interview process.

#### Creating a Web App Manifest:

Creating a manifest involves:

- Create a manifest.json and populate its properties.
- Linking it to app HTML to advertise your PWA status.
  `<link rel="manifest" href="/manifest.json">`

A suggested minimal manifest should have at least these three - where start_url defines the entry point (default path shown) when app is launched on device.
`{
    "name": "My Sample PWA",
    "lang": "en-US",
    "start_url": "/"
}`

Description of some supported members in the manifest:

- short_name - app name for constrained spaces (e.g., home screen)
- categories - hints for stores or app catalogs.
- display - how much of the browser UI does the user see in the app?
- background_color - placeholder to show (before stylesheet loads)
- theme_color - default theme color for app
- scope - what web pages can be viewed (navigation scope)
- description - what is the app about?
- icons - array of icon images used in various contexts
- screenshots - showcase application UI/UX (e.g., for app stores)
- Reference for supported members’ description

### Service worker:

Service Workers are a special type of Web Worker. Web Workers operate in a separate thread, allowing them to execute long-running or asynchronous tasks in the background, minimizing the impact on page performance.

Service Workers make PWA operation reliable by helping deliver usable experiences even under flaky or offline network conditions. They do this by intercepting network fetch requests from the page and strategically handling them using cached responses (if offline), or network-fetched resources (if real-time), or some combination of both based on predefined caching strategies for resource types.

Service Workers make PWAs re-engageable by having the ability to alert users to app changes or context, even if the page itself is inactive. They do this by listening for asynchronous push notifications (from a server) and working with platform capabilities to deliver alerts in a device-familiar way. When users engage with the alert, they are drawn back into the app seamlessly - just like with other platform-specific app experiences.

Like all Web Workers, the Service Worker must be authored in its own file. The location of that file (relative to the root of the app) defines the scope of its authority. Service Workers can only intercept or manage requests to pages within their scope.

#### Lifecycle events:

Service worker registration is like onboarding the COO. Once that is complete, the service worker is ready to listen for lifecycle events (install, activate) to set itself up for success. Think of this as three phases:

1. Registration: The browser registers the service worker, kicking off the Service Worker lifecycle.
2. Installation: The browser triggers install as the first event to the Service Worker. It can use this for pre-caching resources (e.g., populate cache with long-lived resources like logos or offline pages).

`self.addEventListener( "install", function( event ){
   console.log( "WORKER: install event in progress." );
});`

3. Activation: The browser sends the activate event to indicate that the service worker has been installed. This service worker can now clean up actions (e.g., remove old caches from prior versions) and ready itself to handle functional events. If there is an old service worker in play, you can use clients.claim() to immediately replace the old service worker with your new one.

`self.addEventListener( "activate", function( event ){
   console.log( "WORKER: activation event in progress." );
   clients.claim();
   console.log( "WORKER: all clients are now controlled" );
`});

#### Functional events:

Functional events are those that require the asynchronous or background processing abilities of service workers to support reliable and re-enageable behaviors. For now, think about just two: “fetch” and “push”.

- The fetch event is triggered when the browser tries to access a page that lies within the scope of the service worker. The service worker acts as an interceptor - returning a response either from the cache or from the network (or some combination of both) based on predefined strategies.

`self.addEventListener( "fetch", function( event ){
  console.log( "WORKER: Fetching", event.request );
`});

- The push event is triggered when the browser receives a push message from a server to display as a toast notification to users. This occurs only if the PWA had previously subscribed for server notifications and the user has granted the PWA permission to receive them. Push events are critical to re-engaging users when the app is not otherwise active.

`self.addEventListener( "push", function( event ){
  console.log( "WORKER: Received notification", event.data );
`});

#### Make you PWA able to work offline with service worker

##### Storage options

Making resources available offline requires taking advantage of on-device storage. Given their async nature, service workers (web workers) have access to two options:

- CacheStorage - an API to a store of named Cache objects that can be accessed by both service workers and an app’s main JavaScript thread. Caches store request/response pairs for network resources. Caches need to be managed explicitly - for updates and deletes - with quotas set per origin. A service worker can have multiple named Cache objects if needed.
- IndexedDB - an API to store large amounts of structured data including files and blobs. It’s an object-oriented transactional database that uses key-value pairs and is ideal for storing individual assets (vs. response pages in cache). You can read more about IndexedDB in week 4 Platforms & Practices.

##### Cache on install to improve performance

``// named cache in Cache Storage
const CACHE_NAME = 'devtools-tips-v3';

// list of requests whose responses will be pre-cached at install
const INITIAL_CACHED_RESOURCES = [
'/',
'/offline/',
'/all/',
'/browser/edge/',
'/browser/safari/',
'/browser/firefox/',
'/browser/chrome/',
'/assets/style.css',
'/assets/filter-tip-list.js',
'/assets/share.js',
'/assets/logo.png',
'https://unpkg.com/prismjs@1.20.0/themes/prism-okaidia.css',
'/assets/localforage-1.10.0.min.js'
];

// install event handler (note async operation)
// opens named cache, pre-caches identified resources above
self.addEventListener('install', event => {
event.waitUntil((async () => {
const cache = await caches.open(CACHE_NAME);
cache.addAll(INITIAL_CACHED_RESOURCES);
})());
});
``

##### Cache-first on (fetch) retrieval

When a fetch event is received, the service worker can enforce its preferred policy - here a cache first strategy means that the service worker looks for a match in the cache and only goes to the network on a miss. Note that you can pre-filter on request parameters to refine the policy - e.g. go to cache only if resource type is an HTML page etc.

``
// We have a cache-first strategy,
// where we look for resources in the cache first
// and only on the network if this fails.
self.addEventListener('fetch', event => {
event.respondWith((async () => {
const cache = await caches.open(CACHE_NAME);

        // Try the cache first.
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse !== undefined) {
            // Cache hit, let's send the cached resource.
            return cachedResponse;
        } else {
            // Nothing in cache, let's go to the network.

            // ...... truncated ....
        }
    }

}
``

##### Detecting Network changes

What if you wanted to condition your strategy on the current status of the network? The navigator.onLine property returns a boolean (true/false) value reflecting the online status of the browser. Different browsers might implement this differently - so you may want to understand nuances to avoid false positives and negatives. The property should send update events if that status changes - and you can listen for those events at the window level.

`window.addEventListener("online", function(){
console.log("You are online!");
});
window.addEventListener("offline", function(){
console.log("Oh no, you lost your network connection.");
});`

##### Service Workers and their clients can communicate using the postMessage API.

- On the client side, this involves sending a message with relevant data:

`` navigator.serviceWorker.controller.postMessage({
type: `IS_OFFLINE`
// add more properties if needed
}); ``

- On the service worker side, it listens for “message” events and unpacks the data to take further action:

`self.addEventListener('message', (event) => {
if (event.data && event.data.type === 'IS_OFFLINE') {
// take relevant actions
}
});`

### Capabilities:

Device platforms today evolve faster than the web platform can. Platform-specific apps can keep pace, delivering richer experiences driven by new device hardware or features. But web apps are limited in their ability to follow suit because they need those capabilities to be implemented for platform-specific software first so the browser can then proxy them into a web platform feature. This creates the experience gap between web and platform-specific app experiences that progressive web apps try to fill.

So, what if those device-specific capabilities could be exposed to the web platform through standardized interfaces that all stakeholders agree on? Now, web apps gain access to the same device capabilities as platform-specific apps, and they do this without losing their core web identity and characteristics.

#### Project Fugu

Project Fugu is a collaborative initiative with one driving vision: “web apps should be able to do anything that platform-specific apps can”. Contributors include representatives from Google, Intel, Microsoft, Samsung, and other stakeholders vested in the success of the web platform.

How does Fugu work? It’s a multi-stage process where proposals for new capability APIs are made in the open and evolved iteratively with feedback from all key stakeholders. The steps of the standardization process are as follows:

1. New capability is suggested - by filing a feature request
2. Capability goes under consideration - explainers written, feedback solicited.
3. Work has started - on a formal API spec to iterate on,
4. Available in developer trials - under experimental flag, not for production
5. Available in origin trials - for validation, in prototypes for larger audiences
6. Capability has shipped - API is stable in latest browser version.
