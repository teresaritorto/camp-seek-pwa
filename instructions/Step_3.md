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