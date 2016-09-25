# Responsify

When smartphones became common, a new problem with websites as they were back then arose. Imagine trying to read the same version of Wikipedia as it is on a laptop, on a small phone screen, expecially those early tiny screens. The text was so small, it was impossible to read.

So, some smart people got together and came up with an idea called responsive websites - the idea that a website could change to perfectly fit into the size of screen it was being displayed on. 

![Responsive web explained](images/responsive.jpg)

*Image source: https://en.wikipedia.org/wiki/Responsive_web_design*

A core part of a PWA is its responsiveness to different screen sizes.

## How it works

Try adding the following code at the bottom of your stylesheet found in *styles/weather.css*

```css
@media (max-width: 1024px) {
  body { background: #f0f; }
}
```

So what does this code do? Well, the `@media (max-width: 1024px) ` bit is called a *media query* and it tells the browser that the rules enclosed apply **only** when the browser window is *less than* 1024 pixels. The `body { background: #f0f; }` sets the background colour of our site to fuschia.

Try it out! Refresh your website after you added the code and resize the browser window to smaller and smaller - eventually the background will go all bright pink.

There's a ton more rules you can put in the media query - more info can be found here: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

## Responsifying weather

We won't go into the details of the new responsive stylesheet, it's more important that you understand how and why it works.

The new stylesheet uses the media query from before and makes some changes for the small screen. To apply it, copy the content from [this stylesheet](../resources/snippets/responsive.css) to the bottom of your websites stylesheet.

Additionally, copy the following line into your `weather.js` file, to the bottom of the `setWeatherTypeImage` function:

```js
$('body').removeClass().addClass('weather__body--' + weatherDescription);
```

What do you think that line does?

## Gotchas

Now is a good time to mention a couple of gotchas. 

### Preloading images

When you try out the new responsive stylesheet, you will notice the first few times you switch between cities, the transition is a bit jerky. This is because the app is loading the images from the internet for the first time - every other time after that it should be smooth. Right now iOS has no solution for this, however on Android you can tell it in the service worker to load those images immediately.

### iOS reloading

When you go ahead and make changes that are only to the stylesheet, your homescreen app should refresh automatically. Should. iOS won't do it automatically, so to fix that you can quit the app (double home press and then swipe up) and re-launch to force it to download the newest stylesheet.

## Test it out!

Time to try it out. Visit your website on your phone and add it to your home screen if you haven't already. You should see a completely different looking website. Remember you can share your website with your friends sitting next to you, try theirs out too!