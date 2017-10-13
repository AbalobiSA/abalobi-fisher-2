#!/usr/bin/env bash
echo "Deleting apk files..."
rm -rf ./platforms/android/build/outputs/apk/*.apk
echo "Deleted all files"
echo "Building app..."
ionic build
cordova prepare
cordova run android
echo "Done!"
