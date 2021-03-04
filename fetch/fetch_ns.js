const { getGamesAmerica, getGamesEurope, getGamesJapan, getPrices } = require('nintendo-switch-eshop');
const { shops_america, shops_europe, shops_asia} = require('../utils/consts')

async function fetchAmerica() {
    let games = await getGamesAmerica();
    let game_ids = games.map(game => game.nsuid).filter(Boolean);
    let ret = []
    for (let country of shops_america) {
        let price_result = await getPrices(country.code, game_ids);
        let original = price_result['prices'].reduce( (total, cur)=>{ 
            return total + (+cur['regular_price']?.['raw_value'] || 0);
        }, 0).toFixed(2);
        let sale = price_result['prices'].reduce( (total, cur)=>{ 
            return total + (+cur['discount_price']?.['raw_value'] || +cur['regular_price']?.['raw_value'] || 0);
        }, 0).toFixed(2);
        ret.push({'original':+original, 'sale':+sale, 'country':country.code});
    }
    return ret;
    //TODO: error control
}

async function fetchEurope() {
    let games = await getGamesEurope();
    let game_ids = games.map(game => game.nsuid_txt?.[0]).filter(Boolean);
    let ret = [];
    for (let country of shops_europe) {
        let price_result = await getPrices(country.code, game_ids);
        let original = price_result['prices'].reduce( (total, cur)=>{ 
            return total + (+cur['regular_price']?.['raw_value'] || 0);
        }, 0).toFixed(2);
        let sale = price_result['prices'].reduce( (total, cur)=>{ 
            return total + (+cur['discount_price']?.['raw_value'] || +cur['regular_price']?.['raw_value'] || 0);
        }, 0).toFixed(2);
        ret.push({'original':+original, 'sale':+sale, 'country':country.code});
    }
    return ret;
    //TODO: error control
}

async function fetchAsia() {
    let games = await getGamesJapan();
    let game_ids = games.map(game => game.LinkURL?.slice(8)).filter(Boolean);
    let ret = [];
    for (let country of shops_asia) {
        let price_result = await getPrices(country.code, game_ids);
        let original = price_result['prices'].reduce( (total, cur)=>{ 
            return total + (+cur['regular_price']?.['raw_value'] || 0);
        }, 0).toFixed(2);
        let sale = price_result['prices'].reduce( (total, cur)=>{ 
            return total + (+cur['discount_price']?.['raw_value'] || +cur['regular_price']?.['raw_value'] || 0);
        }, 0).toFixed(2);
        ret.push({'original':+original, 'sale':+sale, 'country':country.code});
    }
    return ret;
    //TODO: error control
}

module.exports.fetchAmerica = fetchAmerica;
module.exports.fetchEurope = fetchEurope;
module.exports.fetchAsia = fetchAsia;
