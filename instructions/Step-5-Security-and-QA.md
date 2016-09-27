## Table of contents

1. [Introduction](README.md)
1. [Setup](Step-1-Setup.md)
1. [Converting to PWA](Step-2-Convert-to-PWA.md)
1. [Architecture](Step-3-Architecture.md)
1. [Responsify](Step-4-Responsify.md)
1. Security and QA
1. [Service Workers (bonus)](Step-6-Bonus-Service-Workers.md)
1. [Conclusion](Step-7-Conclusion.md)

# Security and QA

Brief description

## HTTPS

HTTPS is a protocol for securing communication over a network - it involves the encryption and decryption of the page requests and page information between the browser and the server.

When you think about things like passwords or credit card details for example, you don't want them being sent over a network in plain text for someone to look at - you want them encrypted, where the server you are sending to has a way to decrypt that data. 

So, in our app shell architecture - knowing what a service worker can do, i.e. intercepting and modifying navigation and resource requests, and caching resources - they must be run using HTTPS.

Pro-tip: Think about whether you are using a site that uses HTTP or HTTPS when you are using a free public wifi connection.


##Exercise
So, let's get started on configuring our app to use HTTPS...

## Configure for HTTPS
When using HTTPS, you can't request subresources from HTTP - that is called "mixed-content". If you were to attempt to connect to our app right now using HTTPS, you would get a mixed-content error in your browser. If you remember back to the work you did in the javascript/weather.js - there is an ajax call being made to a HTTP resource to get some JSON data. To get our app working with HTTPS we need to make a code change so that it points to a HTTPS endpoint instead.

Open the javascript/weather.js file and change the URL of the getWeatherData ajax call. The snippet for that is located [here](../resources/snippets/https.js).

Pancake is already configured as a host to allow for HTTPS, so that means when we access our site URL, we need to use https:// instead of http://

Now you shoud have an app ready to use with HTTPS!


Onto testing....

## QA

Quality Assurance - really means checking that what we are developing is both going to work and is fit for purpose. It is much better to find and fix any bugs in your app before releasing to the public. It can be far more costly to fix once you have gone into production. Releasing an app that has bugs in it can not only affect any profit you make but also the public perception of the app can become negative - remember when Pokemon Go first came out and how many problems existed? A lot of bad publicity came about due to all the bugs that were in the app.

One thing to mention is that it's not always possible to test every single thing, so we often adopt other means to capture and monitor our errors - failing-fast and monitoring those failures can allow you to fix an error quickly before it impacts too many people.

QA is a really important part of software development - it is something that everyone in a team is responsible for - and there are many tools and techniques out there to help with this - especially when it comes to automating these tests.

For now, let's try and do some manual testing to verify what we have developed is working as expected...

###Testing
Seeing as we made the HTTPS change to our app - lets try connecting to that instead of HTTP (Note: It will work with both HTTP and HTTPS).

Download at least 2 of your neighbours apps and test them out using HTTPS. To do this:

Open your browser on your device and go to your neighbours app URL - only this time prefix it with https:// instead of http://. Add it to your home screen and test it out.


