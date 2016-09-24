#Service Workers (Bonus)

Open serviceworker.js and take a moment to browse over the code.

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


##Upload 
Upload your changes including the new serviceworker.js, the javascript/weather.js file and the modified index.html file to dropbox.

##Test
Using Chrome on your computer, open the URL to your weather application (i.e. Pancake URL).
Now open up the Chrom developer tools. If you are on Windows, you can press F12 to launch, or on a Mac, Cmd+alt+I will load this.

Now go to the Applications tab and click on ServiceWorkers. You should see your newly added service worker.

If you look in the console, you should see some debug logging showing that the service worker has cached the app shell and is retrieving from the cache.

If you go back to your Applications directory and then click on Cache - you will see the static assets defined in the serviceworker.js file.

###Bonus - Advanced Debugging

If you are familiar with JavaScript debugging, there are some interesting insights on what is going on behind the scenes in the service worker.

If you have time, look at the other tabs within the developer tools - for example, the Sources tab and open up the serviceworker.js file - see if you can put a breakpoint within the fetch method and inspect the objects being used.
