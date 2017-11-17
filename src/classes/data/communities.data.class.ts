import _ from 'lodash';

class Province {
    name: string;
    key: string;

    constructor(init? : any) {
        for (const key in init) {
            if (init.hasOwnProperty(key)) {
                this[key] = init[key];
            }
        }
    }
}

const provinces = [
    new Province({ name: "Western Cape", key: "WC" }),
    new Province({ name: "Eastern Cape", key: "EC" }),
    new Province({ name: "Northern Cape", key: "NC" }),
    new Province({ name: "KwaZulu Natal", key: "KZN" })
];

const lookupProvince = (provinceKey: string): any => {
    for (const province of provinces) {
        if (province.key === provinceKey) {
            return province;
        }
    }
};

export class CommunityData {
    public communities: any[];

    constructor() {
        this.communities  = [
            {
                "Id": "a042400000TsC7LAAV",
                "OwnerId": "00524000003r6GEAAY",
                "IsDeleted": false,
                "Name": "ocean_view",
                "CreatedDate": "2017-10-02T07:47:43.000+0000",
                "CreatedById": "00524000003r6GEAAY",
                "LastModifiedDate": "2017-10-02T07:47:43.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-10-02T07:47:43.000+0000",
                "LastViewedDate": "2017-10-02T07:47:43.000+0000",
                "LastReferencedDate": "2017-10-02T07:47:43.000+0000",
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": 0,
                "gps_lon__c": 0,
                "gps_alt_m__c": null,
                "name_eng__c": "Ocean View",
                "image_url__c": null,
                "name_afr__c": "Ocean View",
                "unique_ext_id__c": "ocean_view",
                "comments__c": "Ocean View"
            },
            {
                "Id": "a042400000D8zc1AAB",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "lambertsbaai",
                "CreatedDate": "2016-08-30T07:43:50.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -32.089864,
                "gps_lon__c": 18.298161,
                "gps_alt_m__c": null,
                "name_eng__c": "Lamberts Bay",
                "image_url__c": null,
                "name_afr__c": "Lambertsbaai",
                "unique_ext_id__c": "lambertsbaai",
                "comments__c": "Lambert's Bay is a small fishing town in the Western Cape province of South Africa situated 280 kilometres north of Cape Town. It is part of the Cederberg Municipality."
            },
            {
                "Id": "a042400000D8zc2AAB",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "struisbaai",
                "CreatedDate": "2016-08-30T07:43:50.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.799624,
                "gps_lon__c": 20.058849,
                "gps_alt_m__c": null,
                "name_eng__c": "Struis Bay",
                "image_url__c": null,
                "name_afr__c": "Struisbaai",
                "unique_ext_id__c": "struisbaai",
                "comments__c": "Struis Bay is an old fishing village which for many years sported a beautiful natural harbour. Some development has taken place since then but Struisbaai is still relatively untouched by the rigours of over-development. %endline%%endline%Many fishermen still reside in this settlement but it is now known better for its leisure activities, which include fishing, horseriding, hiking, paintball, quadbiking and diving."
            },
            {
                "Id": "a042400000D8zc3AAB",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "kleinmond",
                "CreatedDate": "2016-08-30T07:43:50.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.348175,
                "gps_lon__c": 19.009774,
                "gps_alt_m__c": null,
                "name_eng__c": "Kleinmond",
                "image_url__c": null,
                "name_afr__c": "Kleinmond",
                "unique_ext_id__c": "kleinmond",
                "comments__c": "Kleinmond is a small coastal town in the Overberg region of the Western Cape province, South Africa. It is situated inside a UNESCO-declared biosphere about 90 km east of Cape Town between Betty's Bay and Hermanus. %endline%%endline%The town's name, meaning \"small mouth\" in Afrikaans, refers to its location at the mouth of the Bot River lagoon. Tourism plays a large role in the town's economy due to its popularity with holiday makers from across the Western Cape and Cape Town in particular."
            },
            {
                "Id": "a042400000D8zc4AAB",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "portnolloth",
                "CreatedDate": "2016-08-30T07:43:50.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "NC",
                "daff_prefix__c": null,
                "gps_lat__c": -29.258178,
                "gps_lon__c": 16.857371,
                "gps_alt_m__c": null,
                "name_eng__c": "Port Nolloth",
                "image_url__c": null,
                "name_afr__c": "Port Nolloth",
                "unique_ext_id__c": "portnolloth",
                "comments__c": "Port Nolloth is a town and small domestic seaport in the Namaqualand region on the northwestern coast of South Africa.%endline%%endline%The port was previously a transshipment point for copper from the Okiep mines, and diamonds from the Namaqua coast. Since the 1970s the principal seagoing activities have been fishing and small-vessel tourism."
            },
            {
                "Id": "a042400000D8zc5AAB",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "hondeklipbaai",
                "CreatedDate": "2016-08-30T07:43:50.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "NC",
                "daff_prefix__c": null,
                "gps_lat__c": -30.316823,
                "gps_lon__c": 17.260731,
                "gps_alt_m__c": null,
                "name_eng__c": "Hondeklip Bay",
                "image_url__c": null,
                "name_afr__c": "Hondeklipbaai",
                "unique_ext_id__c": "hondeklipbaai",
                "comments__c": "Hondeklip Bay (Afrikaans: Hondeklipbaai, which translates as dog stone bay) is a coastal village in the Namakwa district of the Northern Cape province of South Africa.%endline%%endline%This village was originally used as a harbor to export copper ore from the mines around Springbok but was later surpassed by Port Nolloth, which had a safer harbor as well as a railway line.%endline%%endline%Today Hondeklip Bay is a popular regional holiday destination and serves the fishing and diamond-mining community. Holiday accommodation ranges from camping at the municipal caravan park to self-catering chalets at the Honnehokke Resort."
            },
            {
                "Id": "a042400000D8zc6AAB",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "sainthelena",
                "CreatedDate": "2016-08-30T07:43:50.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -32.717345,
                "gps_lon__c": 18.029937,
                "gps_alt_m__c": null,
                "name_eng__c": "Saint Helena",
                "image_url__c": null,
                "name_afr__c": "Saint Helena",
                "unique_ext_id__c": "sainthelena",
                "comments__c": "Saint Helena Bay (Afrikaans: St. Helenabaai) is a settlement in West Coast District Municipality in the Western Cape province of South Africa. %endline%%endline%Nicknamed by locals as Agterbaai, the town is located on the shore of the bay, from which it derives its name and is approximately 150 km north of Cape Town, South Africa. It surrounds the towns of Vredenburg and Paternoster, and is located across the bay from Laaiplek."
            },
            {
                "Id": "a042400000D8zc7AAB",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "doringbaai",
                "CreatedDate": "2016-08-30T07:43:50.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": "2017-04-04T08:59:25.000+0000",
                "LastReferencedDate": "2017-04-04T08:59:25.000+0000",
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -31.826041,
                "gps_lon__c": 18.231344,
                "gps_alt_m__c": null,
                "name_eng__c": "Doring Bay",
                "image_url__c": null,
                "name_afr__c": "Doringbaai",
                "unique_ext_id__c": "doringbaai",
                "comments__c": "Doringbaai is a settlement in West Coast District Municipality in the Western Cape province of South Africa.%endline%%endline%Doringbaai, previously known as Thornbay, is a small fishing village. The main economic activity is the packaging and export of crayfish. In the past, the bay at Doringbaai was used as an anchorage for the trade route; provisions were deposited here and transported to Vanrhynsdorp by camel. The lighthouse, one of the local landmarks, was built in 1963."
            },
            {
                "Id": "a042400000D8zc8AAB",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "olifants",
                "CreatedDate": "2016-08-30T07:43:50.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": null,
                "gps_lon__c": null,
                "gps_alt_m__c": null,
                "name_eng__c": "Olifants",
                "image_url__c": null,
                "name_afr__c": "Olifants",
                "unique_ext_id__c": "olifants",
                "comments__c": "The Olifants River is a river in the southwestern area of the Western Cape Province of South Africa. The upper and main catchment area of the Olifants river is around Ceres and the Cederberg mountains."
            },
            {
                "Id": "a042400000D8zc9AAB",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "elandsbaai",
                "CreatedDate": "2016-08-30T07:43:50.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -32.307607,
                "gps_lon__c": 18.328468,
                "gps_alt_m__c": null,
                "name_eng__c": "Elands Bay",
                "image_url__c": null,
                "name_afr__c": "Elandsbaai",
                "unique_ext_id__c": "elandsbaai",
                "comments__c": "Elands Bay is a town in South Africa, situated in the Western Cape Province, on the Atlantic Ocean. The town is located about 220 kilometres (two and a half hours drive) north from Cape Town. It is a major surfing location and is also noted for its caves, which have a number of rock paintings. %endline%%endline%In 2009, Heritage Western Cape declared the Elands Bay Cave and most of Baboon Point (Cape Deseada), on which it is located, as a provincial heritage site. Eland's Bay along with much of this coastline is an \"important\" bird habitat. The local wetland, Verloerenvlei, is a Ramsar wetland."
            },
            {
                "Id": "a042400000FqSGjAAN",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "democommunity",
                "CreatedDate": "2016-11-07T09:04:34.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-04T15:59:53.000+0000",
                "LastViewedDate": "2017-04-04T07:45:45.000+0000",
                "LastReferencedDate": "2017-04-04T07:45:45.000+0000",
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -33.79695,
                "gps_lon__c": 18.37509,
                "gps_alt_m__c": null,
                "name_eng__c": "Demo Community",
                "image_url__c": null,
                "name_afr__c": "Demo Gemeenskap",
                "unique_ext_id__c": "democommunity",
                "comments__c": "(Not an actual community) Test community for demonstrating Abalobi functionality"
            },
            {
                "Id": "a042400000PqvOSAAZ",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "muizenberg",
                "CreatedDate": "2017-07-11T09:24:27.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-07-11T09:24:27.000+0000",
                "LastModifiedById": "005240000010ELCAA2",
                "SystemModstamp": "2017-07-11T09:24:27.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.095979,
                "gps_lon__c": 18.51072,
                "gps_alt_m__c": null,
                "name_eng__c": "Muizenberg",
                "image_url__c": null,
                "name_afr__c": "Muizenberg",
                "unique_ext_id__c": "muizenberg",
                "comments__c": null
            },
            {
                "Id": "a042400000PqtoMAAR",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "bellville",
                "CreatedDate": "2017-07-11T08:12:04.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-07-11T08:12:04.000+0000",
                "LastModifiedById": "005240000010ELCAA2",
                "SystemModstamp": "2017-07-11T08:12:04.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -33.895387,
                "gps_lon__c": 18.6256617,
                "gps_alt_m__c": null,
                "name_eng__c": "Bellville",
                "image_url__c": null,
                "name_afr__c": "Bellville",
                "unique_ext_id__c": "bellville",
                "comments__c": null
            },
            {
                "Id": "a042400000PqvMnAAJ",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "hermanus",
                "CreatedDate": "2017-07-11T09:23:11.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-07-11T09:23:11.000+0000",
                "LastModifiedById": "005240000010ELCAA2",
                "SystemModstamp": "2017-07-11T09:23:11.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.43416,
                "gps_lon__c": 19.225194,
                "gps_alt_m__c": null,
                "name_eng__c": "Hermanus",
                "image_url__c": null,
                "name_afr__c": "Hermanus",
                "unique_ext_id__c": "hermanus",
                "comments__c": null
            },
            {
                "Id": "a042400000PqvLuAAJ",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "kalk_bay",
                "CreatedDate": "2017-07-11T09:21:35.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-07-11T09:21:35.000+0000",
                "LastModifiedById": "005240000010ELCAA2",
                "SystemModstamp": "2017-07-11T09:21:35.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.129055,
                "gps_lon__c": 18.449104,
                "gps_alt_m__c": null,
                "name_eng__c": "Kalk Bay",
                "image_url__c": null,
                "name_afr__c": "Kalkbaai",
                "unique_ext_id__c": "kalk_bay",
                "comments__c": null
            },
            {
                "Id": "a042400000Pr0BaAAJ",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "grassy_park",
                "CreatedDate": "2017-07-11T13:47:50.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-07-11T13:47:50.000+0000",
                "LastModifiedById": "005240000010ELCAA2",
                "SystemModstamp": "2017-07-11T13:47:50.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.052323,
                "gps_lon__c": 18.508074,
                "gps_alt_m__c": null,
                "name_eng__c": "Grassy Park",
                "image_url__c": null,
                "name_afr__c": "Grassy Park",
                "unique_ext_id__c": "grassy_park",
                "comments__c": null
            },
            {
                "Id": "a042400000PqvHdAAJ",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "strand",
                "CreatedDate": "2017-07-11T09:19:49.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-07-11T09:19:49.000+0000",
                "LastModifiedById": "005240000010ELCAA2",
                "SystemModstamp": "2017-07-11T09:19:49.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.112499,
                "gps_lon__c": 18.846098,
                "gps_alt_m__c": null,
                "name_eng__c": "Strand",
                "image_url__c": null,
                "name_afr__c": "Strand",
                "unique_ext_id__c": "strand",
                "comments__c": null
            },
            {
                "Id": "a042400000PqvKXAAZ",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "strandfontein_falsebay",
                "CreatedDate": "2017-07-11T09:21:02.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-07-11T09:21:02.000+0000",
                "LastModifiedById": "005240000010ELCAA2",
                "SystemModstamp": "2017-07-11T09:21:02.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.079342,
                "gps_lon__c": 18.572079,
                "gps_alt_m__c": null,
                "name_eng__c": "Strandfontein (False Bay)",
                "image_url__c": null,
                "name_afr__c": "Strandfontein (Valsbaai)",
                "unique_ext_id__c": "strandfontein_falsebay",
                "comments__c": null
            },
            {
                "Id": "a042400000PqvMOAAZ",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "hout_bay",
                "CreatedDate": "2017-07-11T09:22:21.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-07-11T09:22:21.000+0000",
                "LastModifiedById": "005240000010ELCAA2",
                "SystemModstamp": "2017-07-11T09:22:21.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.054062,
                "gps_lon__c": 18.347608,
                "gps_alt_m__c": null,
                "name_eng__c": "Hout Bay",
                "image_url__c": null,
                "name_afr__c": "Houtbaai",
                "unique_ext_id__c": "hout_bay",
                "comments__c": null
            },
            {
                "Id": "a042400000PqvNtAAJ",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "simonstown",
                "CreatedDate": "2017-07-11T09:23:47.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-07-11T09:23:47.000+0000",
                "LastModifiedById": "005240000010ELCAA2",
                "SystemModstamp": "2017-07-11T09:23:47.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.188984,
                "gps_lon__c": 18.437674,
                "gps_alt_m__c": null,
                "name_eng__c": "Simon's Town",
                "image_url__c": null,
                "name_afr__c": "Simonstad",
                "unique_ext_id__c": "simonstown",
                "comments__c": null
            },
            {
                "Id": "a042400000PqvFwAAJ",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "gordons_bay",
                "CreatedDate": "2017-07-11T09:17:50.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-07-11T09:17:50.000+0000",
                "LastModifiedById": "005240000010ELCAA2",
                "SystemModstamp": "2017-07-11T09:17:50.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.151981,
                "gps_lon__c": 18.871202,
                "gps_alt_m__c": null,
                "name_eng__c": "Gordon's Bay",
                "image_url__c": null,
                "name_afr__c": "Gordonsbaai",
                "unique_ext_id__c": "gordons_bay",
                "comments__c": null
            },
            {
                "Id": "a042400000F15h6AAB",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "arniston",
                "CreatedDate": "2016-10-17T09:08:20.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.679041,
                "gps_lon__c": 20.240156,
                "gps_alt_m__c": null,
                "name_eng__c": "Arniston",
                "image_url__c": null,
                "name_afr__c": "Waenhuiskrans",
                "unique_ext_id__c": "arniston",
                "comments__c": "Arniston is a small seaside settlement in the Overberg region on the Cape South coast, close to Cape Agulhas, the southernmost tip of Africa. Prior to the loss of the Arniston, it was known as Waenhuiskrans, an Afrikaans name meaning literally \"Wagon house cliff\", after a local sea cave large enough to accommodate a wagon and a span of oxen."
            },
            {
                "Id": "a042400000M9BimAAF",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "sainthelenaisland",
                "CreatedDate": "2017-04-18T08:53:24.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "saint_helena_island",
                "province_abbreviation__c": "SHI",
                "daff_prefix__c": null,
                "gps_lat__c": -15.933333,
                "gps_lon__c": -5.72,
                "gps_alt_m__c": null,
                "name_eng__c": "St Helena Island",
                "image_url__c": null,
                "name_afr__c": "St Helena Eiland",
                "unique_ext_id__c": "sainthelenaisland",
                "comments__c": "Saint Helena is a volcanic tropical island in the South Atlantic Ocean, 4,000 kilometres east of Rio de Janeiro and 1,950 kilometres west of the Cunene River, which marks the border between Namibia and Angola in southwestern Africa. It is part of the British Overseas Territory of Saint Helena, Ascension and Tristan da Cunha. It was named after Saint Helena of Constantinople."
            },
            {
                "Id": "a042400000IJOhkAAH",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "langebaan",
                "CreatedDate": "2017-01-17T08:42:48.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -33.0545,
                "gps_lon__c": 18.016556,
                "gps_alt_m__c": null,
                "name_eng__c": "Langebaan",
                "image_url__c": null,
                "name_afr__c": "Langebaan",
                "unique_ext_id__c": "langebaan",
                "comments__c": "Langebaan is a town in the Western Cape province of South Africa on the eastern shore of Langebaan Lagoon.%endline%%endline%The Langebaan Lagoon was formed by the rising and falling of sea levels during pre-historic times. This is unlike most lagoons which form where fresh water rivers enter the sea. As a result, Langebaan Lagoon is purely a salt water lagoon.%endline%%endline%The area is rich in historical events from the first inhabitants, the Khoikhoi and San, to the arrival of the Europeans. The first European to set foot on land was Vasco da Gama at St Helena Bay on the West Coast Peninsula in 1497."
            },
            {
                "Id": "a042400000IKSgSAAX",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "paternoster",
                "CreatedDate": "2017-01-19T10:22:29.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -32.805158,
                "gps_lon__c": 17.89164,
                "gps_alt_m__c": null,
                "name_eng__c": "Paternoster",
                "image_url__c": null,
                "name_afr__c": "Paternoster",
                "unique_ext_id__c": "paternoster",
                "comments__c": null
            },
            {
                "Id": "a042400000JZKBtAAP",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "bettysbay",
                "CreatedDate": "2017-02-23T14:50:06.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.366955,
                "gps_lon__c": 18.906523,
                "gps_alt_m__c": null,
                "name_eng__c": "Bettys Bay",
                "image_url__c": null,
                "name_afr__c": "Bettysbaai",
                "unique_ext_id__c": "bettysbay",
                "comments__c": "Betty's Bay (Afrikaans: Bettysbaai) is a small holiday town situated on the Overberg coast of South Africa's Western Cape province. It is located 96 km from Cape Town beneath the rugged Kogelberg Mountains and is on the scenic R44 ocean drive between Pringle Bay and Kleinmond. This village stretches over 13 km along the Coast. Tourism plays a large role in the town's economy due to its popularity with holiday makers from across the Western Cape and Cape Town in particular.%endline%%endline%During Colonial times Betty's Bay was allegedly a favourite place for runaway slaves, and in 1912 Betty's Bay became a formal whaling station running up until the 1930s. Remains of the whaling station can still be seen at Stony Point."
            },
            {
                "Id": "a042400000JZKGFAA5",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "pringlebay",
                "CreatedDate": "2017-02-23T14:52:33.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-11-12T11:38:44.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -34.345383,
                "gps_lon__c": 18.818009,
                "gps_alt_m__c": null,
                "name_eng__c": "Pringle Bay",
                "image_url__c": null,
                "name_afr__c": "Pringlebaai",
                "unique_ext_id__c": "pringlebay",
                "comments__c": "Pringle Bay (Afrikaans: Pringlebaai) is a small coastal town of ca. 1600 inhabitants in the Overberg region of the Western Cape, in South Africa. It is situated at the foot of Hangklip, on the opposite side of False Bay from Cape Point. The town and surrounds are part of the Kogelberg Biosphere Reserve, a UNESCO Heritage Site. The bay is named after Rear-Admiral Thomas Pringle, of the Royal Navy, who commanded the naval station at the Cape in the late 1790s."
            },
            {
                "Id": "a042400000JZKI4AAP",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "capetown",
                "CreatedDate": "2017-02-23T14:53:15.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "west_coast",
                "province_abbreviation__c": "WC",
                "daff_prefix__c": null,
                "gps_lat__c": -33.885562,
                "gps_lon__c": 18.448989,
                "gps_alt_m__c": null,
                "name_eng__c": "Cape Town",
                "image_url__c": null,
                "name_afr__c": "Cape Town",
                "unique_ext_id__c": "capetown",
                "comments__c": "Cape Town is a coastal city in South Africa.%endline%%endline%Located on the shore of Table Bay, Cape Town was first developed by the Dutch East India Company as a victualling (supply) station for Dutch ships sailing to East Africa, India, and the Far East. Jan van Riebeeck's arrival on 6 April 1652 established the first permanent European settlement in South Africa. %endline%%endline%Cape Town quickly outgrew its original purpose as the first European outpost at the Castle of Good Hope, becoming the economic and cultural hub of the Cape Colony. Until the Witwatersrand Gold Rush and the development of Johannesburg, Cape Town was the largest city in South Africa."
            },
            {
                "Id": "a042400000LIkvkAAD",
                "OwnerId": "005240000010ELCAA2",
                "IsDeleted": false,
                "Name": "coffeebay",
                "CreatedDate": "2017-03-29T12:33:03.000+0000",
                "CreatedById": "005240000010ELCAA2",
                "LastModifiedDate": "2017-05-03T12:34:59.000+0000",
                "LastModifiedById": "00524000003r6GEAAY",
                "SystemModstamp": "2017-05-03T12:34:59.000+0000",
                "LastViewedDate": null,
                "LastReferencedDate": null,
                "region__c": "kwazulunatal eastern_cape",
                "province_abbreviation__c": "KZN",
                "daff_prefix__c": null,
                "gps_lat__c": -31.989237,
                "gps_lon__c": 29.15009,
                "gps_alt_m__c": null,
                "name_eng__c": "Coffee Bay",
                "image_url__c": null,
                "name_afr__c": "Koffiebaai",
                "unique_ext_id__c": "coffeebay",
                "comments__c": "Coffee Bay (Afrikaans: Koffiebaai) is a small town situated on the Wild Coast of the Eastern Cape Province of South Africa. It is located about 250 kilometres south of the city of Durban and has a population of 258 people.%endline%%endline%The town is named after the hundreds of coffee trees which grew from beans either scattered by a shipwreck or by plunderers. A holiday resort in Tembuland is located 80km south-east of Viedgesville. It can be reached via a turn-off from the N2 highway."
            }
        ];
    }

    getProvinces(): Province[] {
        return _.uniq(
            this.communities
            .map(community => community.province_abbreviation__c))
            .map(key => lookupProvince(key))
            .filter(item => item !== undefined);

    }

    getFilteredCommunities(province_key: string): any[] {
        return _.sortBy(this.communities
            .filter(item => item['province_abbreviation__c'] === province_key),
            "unique_ext_id__c")
    }
}