# Setup

Before we start we need to set up a few accounts that will help us with deploying our app and making it visible to everyone on the internet. There are many tools that can be used for this, but for the purposes of this exercise we'll be continuing to use Pancake and Dropbox, the same as Bron's session.

## Dropbox

If you already know what Dropbox is and have it installed you can skip this step. 

Dropbox is a free service which allows you to store your files so that they are accessible to you anywhere from any device connected to the internet. It works by creating a special folder on your computer that automatically gets uploaded to your Dropbox account on the internet.

1. Visit the Dropbox website at https://www.dropbox.com/
1. Fill in your details to sign up
1. Follow the instructions to install the Dropbox app

## Pancake

If you already know what Pancake is and have an account you can skip this step. 

Pancake is a host - a company that makes files available on the internet by giving you a URL. It works together with Dropbox to expose your site to the world.

1. Visit the Pancake website at https://www.pancake.io
1. Click on **Sign up** and fill in your details
1. Click on **Dropbox** then click on **Reconnect to pancake.io folder**
1. Dropbox will then ask you if it's ok for Pancake to connect, say yes.

## Project set-up

We'll now set up your project files.

1. Go back to your Pancake dashboard
1. Click **new project** and select **create** next to Dropbox
1. Pancake will have given your new project a random name, so let's give it a nicer one. Click on **settings** adn give your project a name and subdomain eg. *camp-seek-pwa*. Remember, this name must be unique globally.
1. Visit your website by typing in the subdomain you entered in Pancake and adding *.pancakeapps.com* on the end. For example: *camp-seek-pwa.pancakeapps.com* - you should see a welcome page that was created by Pancake
1. If you now look at your Dropbox *Apps/pancake.io* folder, you should see new files called *example.html* and *index.html*
1. Delete these 2 new files as we won't need them
1. Using the code you worked on in Bron's session, copy the files into your Dropbox *Apps/pancake.io* folder - alternatively if you want to start fresh, download the completed example from [here](camp-seek-coding-finished-example.zip)
1. Go back to your website and refresh it to see 

You should now have a good idea of what our deployment process is. Every time you change a file in the Dropbox *Apps/pancake.io* folder it will automatically update your website!