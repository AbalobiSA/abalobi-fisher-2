// import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";
import {File} from '@ionic-native/file';

const ODK_URL = "http://server.abalobi.info/formList";
declare var window: any;

/*
  Generated class for the OdkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OdkProvider {

    constructor(
        public file: File) {
    }

    writeSettings(username: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const odkSettings = {
                "general": {
                    "autosend": "wifi_and_cellular",
                    "analytics": false,
                    "default_completed": true,
                    "delete_send": false,
                    "formlist_url": "/formList",
                    "high_resolution": false,
                    "image_size": "very_small",
                    "map_sdk_behavior": "google_maps",
                    "metadata_username": username,
                    "navigation": "swipe",
                    "password": password,
                    "protocol": "odk_default",
                    "server_url": "http://server.abalobi.info",
                    "username": username
                },
                "admin": {
                    "mark_as_finalized": false,
                    "analytics": false,
                    "change_constraint_behavior": false,
                    "save_as": false,
                    "delete_after_send": false,
                    "change_autosend": false,
                    "change_form_metadata": false,
                    "show_splash_screen": false,
                    "change_navigation": false,
                    "show_map_sdk": false,
                    "instance_form_sync": false,
                    "default_to_finalized": false,
                    "high_resolution": false,
                    "show_map_basemap": false
                }
            };
            const serializedFileString = JSON.stringify(odkSettings, null, 4);

            if ((window as any).cordova === undefined) {
                console.log("BROWSER DETECTED.");
                reject();
                return;
            }

            const ODK_DIR = this.file.externalRootDirectory;

            try {
                const writeFile = (fileEntry: any, data: any): void => {
                    // Create a FileWriter object for our FileEntry (log.txt).
                    fileEntry.createWriter(function (fileWriter) {

                        fileWriter.onwriteend = function () {
                            console.log("Successful file write...");
                        };

                        fileWriter.onerror = function (e) {
                            console.log("Failed file write: " + e.toString());
                        };

                        let blob = new Blob([data], {type: 'application/json'});
                        fileWriter.write(blob);
                        resolve();
                    });
                };

                const gotDir = (dirEntry) => {
                    dirEntry.getFile("collect.settings.json", {
                        create: true
                    }, (file) => {
                        console.log("got the file", file);
                        writeFile(file, serializedFileString);
                    });
                };

                window.resolveLocalFileSystemURL((window as any).cordova.file.externalRootDirectory, (dir) => {
                    console.log(dir);
                    dir.filesystem.root.getDirectory("odk", {create: true}, gotDir);
                });
            } catch (ex) {
                // console.log("Meh, you are probably in a browser.");
                reject(ex);
                console.log(ex);
            }
        })


    }

}
