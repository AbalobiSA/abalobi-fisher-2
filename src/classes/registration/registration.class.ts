class RegUser {
    firstname: string;
    lastname: string;
    nickname: string;
    gender: string;
    email: string;
    email_own: boolean;
    birthdate: string;
    language: string;
    id_number: string;
    mobile_number: string;

    password: string;
    password_confirm: string;

    community: string;
    community_custom: string;
}

export class Registration {
    // User Details
    usertype: string;
    manager_is_fisher: boolean;

    // Permissions
    permissions_abalobi: boolean;
    permissions_daff: boolean;
    permissions_manager: boolean;

    // Personal Information
    user: RegUser = new RegUser();

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

    debug(): void {
        this.user.language = "eng";
        this.user.firstname = "test";
        this.user.lastname = "test";
        this.user.nickname = "test";
        this.user.gender = "male";
        this.user.birthdate = ("2017-11-15");
        this.user.id_number = "1231231231231";
        this.user.email = "carleiserman@gmail.com";
        this.user.mobile_number = "1231231231";
        this.user.email_own = true;
        this.user.password = "123123";
        this.user.password_confirm = "123123";

        this.usertype = "fisher";
        this.permissions_daff = true;
        this.permissions_abalobi = true;
        this.permissions_manager = true;
    }
}
