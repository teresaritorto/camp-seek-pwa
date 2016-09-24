#Architecture

Lets talk about architecture - meaning all the different components that make up the software you have been building.

In this step, we will be covering something called the app shell architecture - which is what progressive web apps (PWAs) typically use.

A couple of things that are key to this sort of architecture is the separation of what we commonly refer to as static and dynamic content.

When you think of an app, generally there is something dynamic and something static about it - dynamic in this context, meaning content that can change and static meaning the opposite, for example things like images or even JavaScript. So when we think about how a PWA is pieced together, we can use this understanding of static and dynamic content to help optimise how we load and display the app.

Modern progressive web apps are made up of 3 fundamental parts:
* An App Shell
* Service Worker
* Dynamically loaded content (via Javascript)

Take a moment to think about the weather app you have been working on. Architecturally, there is a split between the shell and the dynamic content (i.e. the data) - keep this in mind as we go over the App Shell next.


##App Shell

When talking about the App Shell, we really mean all of the static content mentioned earlier, things like HTML, CSS, JavaScript and Images - the resources and assets needed to power the User Interface. Think of an app shell as really the container or frame of the application where it is stored locally on your device in something called the cache and allows for the rest of the app, namely the content, to be dynamically brought in.

If you review the image below, you can see, architecturally there is a split between the shell and the content - so the shell doesn't change (often) and can therefore be stored locally and the content (which does change often) is brought in dynamically through an ajax call for example (note: image taken from Google).

![logo](https://github.com/tritorto/camp-seek-pwa/blob/master/instructions/images/appshell.jpg)

Why do we bother doing this?

Well.. apps need to be fast loading, using the app shell architecture gives you the benefit of caching easily and as you will see later on, through the use of the service worker, you can get a lot of value.


##Fast loading & Caching
Things to expect when using this sort of architecture:
* The first time it loads will be its slowest load time
* The first load will use caching to improve performance for the next time you visit (rendering should be super fast the next time)
* Local caching also means you have the potential to make your app work offline.

What is caching? In reference to this architecture, in very basic terms it just means storing the static files (the things that don't change) locally on the device so that you only ever have to retrieve it from the network (which can be slow) once. So, the next time it will be retrieved locally from the device which makes the load much faster. 

Performance tip: Reducing the need to go over a network speeds up the app and gives a much better user experience - no one likes a slow loading app - this architecture is designed to help with that.


##Service Worker [Advanced topic]
At a high level, the service worker is a script that runs in the background, seperate from the website - it responds to events and is responsible for handling all of the loading and caching of content (including the app shell) that gives us that performance benefit. It can be used to do things like push notifications and optimise how the dynamic content is handled also - things like offline viewing.

We will go into more detail with a the Service Worker Exercise in Step 6 (Bonus).

#Exercise

To use the app shell architeture we need to configure our app to use HTTPS and we will also need to create the service worker file. So let's get started...

##Configure for HTTPS

Service workers must be run using HTTPS (or localhost - local development), so we will need to make some code changes to let our app work with HTTPS.
Open the javascript/weather.js file and change the URL of the getWeatherData ajax call. The snippet for that is located [here](../resources/snippets/https.js)

Pro tip: If you don't know much about HTTPS, feel free to read up on it in your own time - it's pretty important when working in web development.

##Add serviceworker.js 
Create a new file in the src folder and name it serviceworker.js - it should be at the same directory level where your index.html file is.

Open serviceworker.js and paste the code snippet from [here](../resources/snippets/serviceworker.js)

Now, open the index.html and paste (under the existing script tag and before the </body> tag) the code snippet from [here](../resources/snippets/serviceworker-html.html) - this bit of code checks that the service worker is supported in the browser you are using (not all browsers support this).

You have just configured your app to use the app shell architecture using caching in the service worker. Note: Step 6, as a bonus goes into much more detail about the service worker code that you can look at later on.