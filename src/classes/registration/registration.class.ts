export class Registration {
    // User Details
    usertype: string;
    manager_is_fisher: boolean;

    // Permissions
    permissions_abalobi: boolean;
    permissions_daff: boolean;
    permissions_manager: boolean;

    // Personal Information
    user_firstname: string;
    user_lastname: string;
    user_nickname: string;
    user_gender: string;
    user_email: string;
    user_email_own: boolean;
    user_birthdate: Date;
    user_language: string;

    constructor(init?: any) {

        this.usertype = 'fisher';
        this.permissions_daff = false;

        // Leave this here for any parameters we passed through
        if (init) {
            for (let key of Object.keys(init)) {
                this[key] = init[key];
            }
        }

    }
}
