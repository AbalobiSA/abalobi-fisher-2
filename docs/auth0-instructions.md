# Setting up Auth0

Go to the Application Settings section in your 
Auth0 dashboard and set your Callback URL in 
the Allowed Callback URLs box.

```
com.abalobi.fisher://abalobi.eu.auth0.com/cordova/com.abalobi.fisher/callback
```

Add file as an allowed origin to the Allowed Origins (CORS) box.

```
file://*
```

Lastly, be sure that the Client Type for 
your application is set to Native in the client settings.

### Install the Dependencies

The required dependencies for using Auth0 in an Ionic application are auth0.js and auth0-cordova. Install them with npm or yarn.

```
# installation with npm
npm install auth0-js @auth0/cordova --save

# installation with yarn
yarn add auth0-js @auth0/cordova
```

### Add cordova plugins 

You must install the SafariViewController plugin from 
Cordova to be able to show Auth0's hosted login page. 
The downloadable sample project already has this plugin added, 
but if you are adding Auth0 to your own application, 
install the plugin via the command line.

```
ionic cordova plugin add cordova-plugin-safariviewcontroller
```

The CustomURLScheme plugin from Cordova is also 
required to handle redirects properly. The sample project has 
it already, but if you're adding Auth0 to your own project, 
install this plugin as well.

```
# replace YOUR_PACKAGE_ID with your app identifier
ionic cordova plugin add cordova-plugin-customurlscheme --variable URL_SCHEME=com.abalobi.fisher --variable ANDROID_SCHEME=com.abalobi.fisher --variable ANDROID_HOST=abalobi.eu.auth0.com --variable ANDROID_PATHPREFIX=/cordova/com.abalobi.fisher/callback
```

### Modify config.xml

Add `<preference name="AndroidLaunchMode" value="singleTask" />` to your config.xml. 
This will allow the Auth0 dialog to properly redirect back to your app.

