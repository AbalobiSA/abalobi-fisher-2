Abalobi Fisher 2
================

### Requirements

You will need the following to work on this app:

- Node Version Manager ([Windows](https://github.com/carl-eis/Ultimate.Setup/wiki/Windows-Setup) / [Linux / Mac](https://github.com/carl-eis/Ultimate.Setup/wiki/Node.js-Linux))
- NodeJS v8.9.1
- Java JDK version 8.x
- [Android Studio](https://developer.android.com/studio/index.html)
- Android Build Tools
- Android SDK versions `5.1`, `6.0`, `7.0`, `8.0`
- Yarn package manager (`npm install -g yarn`)
- Ionic command line tools (`npm install -g @ionic/cli`)
- Cordova (`npm install -g cordova`)

The rest of this readme assumes you have these installed and set up
correctly.

Also make sure that `$JAVA_HOME` and `$ANDROID_HOME` are set up in your
system path. On linux / mac, you can set this in your `bashrc` or `zshrc`
file.

### Getting Started

Clone this repo, create platforms folder, install dependencies

    $ git clone https://github.com/AbalobiSA/abalobi-fisher-2
    $ cd abalobi-fisher-2
    $ cp -r plarforms_backup platforms
    $ npm install -g yarn
    $ yarn
    $ cordova platform add android --save

> Cordova will add the latest backwards-compatible version of cordova-android -
if you have any problems with this, use

    $ cordova platform add android@^6.3.0 --save

Check that the cordova plugins installed correctly.

    $ cordova plugins ls

> Plugins will fail to install if you do not have the correct Android SDK versions installed.
> Use `cordova platforms ls` to see which platforms you have in the current project.

### Development

This will launch the app in the browser. Cordova native functionality
will not be available.

    $ ionic serve

### Building

Connect your mobile phone via USB cable and enable android debugging.

    $ gulp  // (increases version number)
    $ ionic build --prod
    $ cordova run android

### Plugins

If for whatever reason the cordova plugins are not downloaded, I have
uploaded zip files containing the cordova plugins for each project to the
Techairos dropbox. Unzip the ones for ablb-fisher-2 app into `./plugins/` and
you should be good to go.
