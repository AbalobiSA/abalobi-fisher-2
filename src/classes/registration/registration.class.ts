export class Registration {
    // Personal Information
    user: RegUser = new RegUser();
    device: DeviceInfo = new DeviceInfo();

    // Registration Details
    usertype: string;
    manager_is_fisher: boolean;

    // User Permissions
    permissions_abalobi: boolean;
    permissions_daff: boolean;
    permissions_manager: boolean;

    boat_info: BoatInfo = new BoatInfo();

    profileImage: string;

    constructor(init?: any) {
        // this.usertype = 'fisher';

        // Leave this here for any parameters we passed through
        if (init) {
            for (let key of Object.keys(init)) {
                this[key] = init[key];
            }
        }
    }

    debug(): void {
        this.user.language = "eng";
        this.user.firstname = "Bob";
        this.user.lastname = "Marley";
        this.user.nickname = "Chuck Testa";
        this.user.gender = "male";
        this.user.birthdate = "1993-07-21";
        this.user.id_number = "1231231231231";
        this.user.email = "bob@gmail.com";
        this.user.mobile_number = "1231231231";
        this.user.email_own = true;
        this.user.password = "123123";
        this.user.password_confirm = "123123";
        this.user.community_province = "WC";
        this.user.community = "other";
        this.user.community_custom = "Some new community";

        this.usertype = "fisher";
        this.permissions_daff = true;
        this.permissions_abalobi = true;
        this.permissions_manager = true;

        this.user.permits.permit_irp = false;
        this.user.permits.permit_commercial = true;
        this.user.permits.permit_recreational = true;
        this.user.permits.permit_com_wcrl = false;
        this.user.permits.permit_com_tlf = true;
        this.user.permits.permit_com_other = true;
        this.user.permits.permit_com_other_type = "Some other permit type";
    }
}

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
    community_province: string;

    fishes_from_boat: boolean = false;
    fishes_from_shore: boolean = false;

    boat_used_own: boolean = false;
    boat_used_others: boolean = false;

    permits: PermitInfo = new PermitInfo();

}

class PermitInfo {
    permit_irp: boolean = false;
    permit_commercial: boolean = false;
    permit_recreational: boolean = false;

    permit_com_wcrl: boolean = false;
    permit_com_tlf: boolean = false;
    permit_com_other: boolean = false;

    permit_com_other_type: string;
}

class BoatInfo {
    name: string;
    type: string;
    registration_number: string;
    registration_expiry_date: string;

    has_engine: boolean = false;
    engine_power_type: string;
    engine_power: number;
}

class DeviceInfo {
    cordova: string;
    manufacturer: string;
    model: string;
    platform: string;
    serial: string;
    uuid: string;
    version: string;
    appVersion: string;
}
