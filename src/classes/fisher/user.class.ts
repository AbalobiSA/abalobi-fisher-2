import {Community} from "./community.class";

export class User {

    abalobi_id__c: string;
    abalobi_usertype__c: string;
    contact_mobile_num__c: string;
    date_of_birth__c: string;
    date_registered_on_abalobi__c: string;
    email_is_my_own__c: string;
    Email__c: string;
    FirstName__c: string;
    gender__c: string;
    id_number__c: string;
    image_url__c: string;
    IsActive__c: boolean;
    LastName__c: string;
    Name__c: string;
    preferred_language__c: string;
    primary_community__c: string;
    share_data_with_daff__c: boolean;
    share_data_with_local_impl__c: boolean;
    Username__c: string;

    full_community_info: Community;

    constructor(init?: any) {
        for (const key in init) {
            if (init.hasOwnProperty(key)) {
                this[key] = init[key];
            }
        }
    }
}
