# Converting to a PWA

Now that your website is live, let's start adding some progressive web app features to it. Websites can already be added to a phone's home screen, but we can improve that experience for the end user.

In this exercise, we'll add your new website to your phone so it appears like any othe app.

Remember to work out of your Dropbox *Apps/pancake.io* folder, as it will make the changes you do available almost instantly on your site. From now on we will refer to that folder as the *root* folder.

## Icons

All good apps have kick-ass icons. We prepared some Camp SEEK ones for you, so just go ahead and copy them into your *root/icons*. You can find the icons [here](../resources/icons). 

There are 3 icons all together, 1 for each different size that phone operating systems may want to use.

If you feel creative, you can replace these with your own icons, just make sure you are using the same sizes.

## Phone operating systems

There are 3 major phone operating systems in the market and it is good practice to try and support as many of them as possible. When writing an app or website, supporting many platforms means that you can reach more people. 

You will probably have heard of these 3 platforms already: iOS used by iPhones, Android used by lots of different phones, and Windows Phone used by Jeremy.

Luckily, PWA's are meant to be universal, so it is really easy to support all 3 platforms.

### iOS

To make a website appear like an app, open the website in Safari, tap the share button and choose **Add to Home Screen**. To get a nice experience with our site you can give iOS a hint on what name and icon to use.

The way to add the hint is to add the following HTML code to the `head` element in your `index.html` file:

```html
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="Camp SEEK Weather">
  <link rel="apple-touch-icon" href="/icons/icon-152x152.png">
```

What is this doing? The first line tells iOS that this is a website that can be treated like an app. The second line is telling iOS to hide the URL bar in Safari. The last 2 lines tell iOS what name to use and where to find the icon representing the app. You can change these to be whatever you like.

### Android

The Android way is a little bit different to iOS. It's a bit more complicated but a lot more powerful.

The first part is similar to iOS. Add the following to the `head` element of your `index.html` file.

```html
  <link rel="manifest" href="/manifest.json">
```

This tells android where to look for a `manifest.json` file, which is just a settings file with heaps of options. You already know that your API is also made of JSON, this is very much the same idea just used for a different purpose.

Download `manifest.json` into your *root* folder. The manifest can be found here: [manifest.json](https://raw.githubusercontent.com/tritorto/camp-seek-pwa/master/resources/snippets/manifest.json).

Open up the `manifest.json` file; can you tell what the options mean?

### Windows Phone

The process for Windows Phone is much the same as for iOS. Just add the following to the `head` element of your `index.html` file.

```html
  <meta name="msapplication-TileImage" content="/icons/icon-144x144.png">
  <meta name="msapplication-TileColor" content="#2F3BA2">
```

Windows phone uses "tiles" which is just their way of saying icon. Here we specify the icon for the tile, and the colour.

## Test it out!

Time to try it out. Visit your website on your phone and add it to your home screen. You should get your custom icon and name automatically shown. Remember you can share your website with your friends sitting next to you, try theirs out too!
