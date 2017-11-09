export class Community {

    name_key: string;
    name_eng__c: string;
    name_afr__c: string;

    constructor(init?: any) {
        for (const key in init) {
            if (init.hasOwnProperty(key)) {
                this[key] = init[key];
            }
        }
    }
}
