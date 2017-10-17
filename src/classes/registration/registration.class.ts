export class Registration {
    // Personal Details
    firstname: string;
    lastname: string;
    manager_is_fisher: boolean;

    usertype: string;
    birthdate: Date;

    constructor(init?: any) {
        if (init) {
            for (let key of Object.keys(init)) {
                this[key] = init[key];
            }
        }

    }
}
