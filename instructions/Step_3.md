#Architecture

In order to build an app-like user experience, there are a few key parts to the PWA arhitecture that helps piece it all together.

When you think of an app, generally there is something dynamic and something static about it - dynamic in this context, meaning content that can change and static meaning the opposite, for example things like images or even JavaScript. So when we think about how a PWA is pieced together, we can use this understanding of static and dynamic content to help optimise how we load and display the app.

PWAs are made up of 3 fundamental parts:
* An App Shell
* Service Workers
* Web App Manifest - the part of the code (JSON) that makes the PWA 'appy' - launchable via icon, etc.

Architecturally, there is a split between how we develop the shell and how we develop the content - all with good reason - to improve load times for example.


##App Shell

When talking about the App Shell, we really mean all of the static content mentioned earlier, things like HTML, CSS, JavaScript and Images - the resources and assets needed to power the User Interface. Think of an app shell as really the container or frame of the application where it is stored locally on your device in something called the cache and allows for the rest of the app, namely the content, to be dynamically brought in.

If you review the image below, you can see, architecturally there is a split between the shell and the content - so the shell doesn't change (often) and is stored locally and the content (which does change often) is brought in dynamically (note: image taken from Google).

![logo](https://github.com/tritorto/camp-seek-pwa/blob/master/instructions/images/appshell.jpg)


So to summarise, the app shell has a few characteristics:

* Fast loading
* Cached
* Static

##Fast loading & Caching
Things to expect when using this sort of architecture:
* The first time it loads will be its slowest load time
* The first load will use caching to improve performance for the next time you visit
* Local caching also means the next time you visit, that you can still load the app shell even without an internet connection

What is caching? In reference to this architecture, in very basic terms it just means storing all of the static files (the things that don't change) locally on the device so that you only ever have to retrieve it from the network (which can be slow) once. So, the next time it will be retrieved locally from the device which makes the load much much faster. Reducing the need to go over a network speeds up the app and gives a much better user experience - no one likes a slow loading app - this architecture is designed to help with that.


##Service Worker [Advanced topic]
At a high level, the service worker is a script that runs in the background, seperate from the website - it responds to events and is responsible for handling all of the loading and caching of content (including the app shell) that gives us that performance benefit. It can be used to do things like push notifications and optimise how the dynamic content is handled also.

We will go into more detail with a the Service Worker Exercise.

#Exercise

##Configure for HTTPS

##Add serviceworker.js 
Create a new file in the src folder and name it serviceworker.js - it should be at the same directory level where your index.html file is.

Open serviceworker.js and paste the code snippet from [here](../resources/snippets/serviceworker.js)

Take a moment to browse over the code.

There are 3 methods.

```
self.addEventListener('install', function(e) {  
```

Install is an event that happens when this worker is successfully registered - when the application first loads.


```
self.addEventListener('install', function(e) {  
```

Install is an event that happens when this worker is successfully registered - when the application first loads.


```
self.addEventListener("fetch", function (event) { 
```

The Fetch Event happens when a request is made
This particular fetch handles delayed caching of other assets based on opaque concerns
Response types include - 

* Basic: hosted on our domain
* CORS: external domain that supports CORS (i.e. full access to the response)
* Opaque: response from another source that doesn't support CORS


Now, open the index.html and paste the code snippet from [here](../resources/snippets/serviceworker-html.html) - this bit of code checks that the service worker is supported in the browser you are using (not all browsers support this).

##Upload 
Upload your changes including the new serviceworker.js and modified index.html files to dropbox.

##Test
Using Chrome on your computer, open the URL to your weather application (i.e. Pancake URL).
Now open up the Chrom developer tools. If you are on Windows, you can press F12 to launch, or on a Mac, Cmd+alt+I will load this.

Now go to the Applications tab and click on ServiceWorkers. You should see your newly added service worker.

If you look in the console, you should see some debug logging showing that the service worker has cached the app shell and is retrieving from the cache.

If you go back to your Applications directory and then click on Cache - you will see the static assets defined in the serviceworker.js file.

###Bonus - Advanced Debugging

If you are familiar with JavaScript debugging, there are some interesting insights on what is going on behind the scenes in the service worker.

If you have time, look at the other tabs within the developer tools - for example, the Sources tab and open up the serviceworker.js file - see if you can put a breakpoint within the fetch method and inspect the objects being used.