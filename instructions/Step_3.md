#Architecture

In order to build an app-like user experience, there are a few key parts to the PWA arhitecture that helps piece it all together.

Fundamentally, there are 2 distinct parts, the App Shell and the Service Worker.

##App Shell

The App Shell really means all of the HTML, CSS, JavaScript and Images - the resources and assets needed to power the User Interface. Think of an app shell as really the container or frame of the application where it is stored locally on your device in something called the cache and allows for the rest of the app, namely the content, to be dynamically brought in.

![logo](https://github.com/tritorto/camp-seek-pwa/blob/master/instructions/images/appshell.jpg)

The app shell has a few characteristics:

*Fast loading
*Cached
*Dynamic content display

##Fast loading

Things to expect when using this sort of architecture:
*The first time it loads will be its slowest load time
*The first load will use caching to improve performance for the next time you visit
*Local caching also means the next time you visit, that you can still load the app shell even without an internet connection

##Caching
What is caching? In reference to this architecture, it really means storing all of the static files (the things that don't change) locally on the computer or device so that you only ever have to retrieve it from the network (which can be slow) once. So, the next time it will be retrieved locally from the device which makes the load much much faster. Reducing the need to go over a network speeds up the app and gives a much better user experience - no one likes a slow loading app - this architecture is designed to help with that.


##Service Worker overview
At a high level, the service worker is a script that runs in the background, seperate from the website - it responds to events, for example, a network request - so it does nothing but listen for an event and then do something based on its event. Without going into too much detail, they can be powerful helpers including adding functionality like push notifications for example. 