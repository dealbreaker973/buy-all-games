// shoplists
const shops_america = [
    { code: 'BR', country: 'Brazil', currency: 'BRL', region: 1 },
    { code: 'CA', country: 'Canada', currency: 'CAD', region: 1 },
    { code: 'MX', country: 'Mexico', currency: 'MXN', region: 1 },
    { code: 'US', country: 'United States', currency: 'USD', region: 1 }
];

const shops_europe = [
    { code: 'DK', country: 'Denmark', currency: 'DKK', region: 2 },
    { code: 'EE', country: 'Estonia', currency: 'EUR', region: 2 },
    { code: 'FI', country: 'Finland', currency: 'EUR', region: 2 },
    { code: 'IE', country: 'Ireland', currency: 'EUR', region: 2 },
    { code: 'LV', country: 'Latvia', currency: 'EUR', region: 2 },
    { code: 'LT', country: 'Lithuania', currency: 'EUR', region: 2 },
    { code: 'NO', country: 'Norway', currency: 'NOK', region: 2 },
    { code: 'SE', country: 'Sweden', currency: 'SEK', region: 2 },
    { code: 'GB', country: 'United Kingdom', currency: 'GBP', region: 2 },
    { code: 'HR', country: 'Croatia', currency: 'EUR', region: 2 },
    { code: 'CY', country: 'Cyprus', currency: 'EUR', region: 2 },
    { code: 'GR', country: 'Greece', currency: 'EUR', region: 2 },
    { code: 'IT', country: 'Italy', currency: 'EUR', region: 2 },
    { code: 'MT', country: 'Malta', currency: 'EUR', region: 2 },
    { code: 'PT', country: 'Portugal', currency: 'EUR', region: 2 },
    { code: 'SI', country: 'Slovenia', currency: 'EUR', region: 2 },
    { code: 'ES', country: 'Spain', currency: 'EUR', region: 2 },
    { code: 'BG', country: 'Bulgaria', currency: 'EUR', region: 2 },
    { code: 'CZ', country: 'Czech Republic', currency: 'CZK', region: 2 },
    { code: 'HU', country: 'Hungary', currency: 'EUR', region: 2 },
    { code: 'PL', country: 'Poland', currency: 'PLN', region: 2 },
    { code: 'RO', country: 'Romania', currency: 'EUR', region: 2 },
    { code: 'RU', country: 'Russian Federation', currency: 'RUB', region: 2 },
    { code: 'SK', country: 'Slovakia', currency: 'EUR', region: 2 },
    { code: 'AT', country: 'Austria', currency: 'EUR', region: 2 },
    { code: 'BE', country: 'Belgium', currency: 'EUR', region: 2 },
    { code: 'FR', country: 'France', currency: 'EUR', region: 2 },
    { code: 'DE', country: 'Germany', currency: 'EUR', region: 2 },
    { code: 'LU', country: 'Luxembourg', currency: 'EUR', region: 2 },
    { code: 'NL', country: 'Netherlands', currency: 'EUR', region: 2 },
    { code: 'CH', country: 'Switzerland', currency: 'CHF', region: 2 },
    { code: 'AU', country: 'Australia', currency: 'AUD', region: 2 },
    { code: 'NZ', country: 'New Zealand', currency: 'NZD', region: 2 },
    { code: 'ZA', country: 'South Africa', currency: 'ZAR', region: 2 }
];

const shops_asia = [ 
    { code: 'JP', country: 'Japan', currency: 'JPY', region: 3 } 
];

module.exports.shops_america = shops_america;
module.exports.shops_europe = shops_europe;
module.exports.shops_asia = shops_asia;
module.exports.shops_all = [...shops_america, ...shops_europe, ...shops_asia];