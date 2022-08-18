import * as country from '@assets/country.json';

const countryObj = JSON.parse(JSON.stringify(country));

export interface ICountryNameCode {
    [countryCode: string]: keyof typeof countryObj.userinfo_country_code;
}

export interface ICountryCode {
    [countryCode: string]: keyof typeof countryObj.id_to_countrycode;
}

export interface ICountry {
    userinfo_country_code: ICountryNameCode;
    id_to_countrycode: ICountryCode;
}