const fetch_ns = require('./fetch/fetch_ns');
const Region = require('./models/region');
const DailyPrice = require('./models/daily-price');
const Platform = require('./models/platform');
const consts = require('./utils/consts');

// connect to db
const mongoose = require('mongoose');
const mongoDB = process.env.mongodb_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error!'));

let ns = null;

// Check platform data
Platform.findOne({ 'name': 'ns' })
    .exec(function (err, found) {
        if (err) { console.log(err); }
        if (found) {
            ns = found;
            console.log('NS platform found.')
        }
        else {
            ns = new Platform(
                { name: 'ns' }
            );
            ns.save(console.log('NS Platform added.'));
        }
    });


// update Nintendo Switch game prices
(async () => {
    console.log('Start fetching data from Nintendo api...')
    let prices_america = await fetch_ns.fetchAmerica();
    let prices_europe = await fetch_ns.fetchEurope();
    let prices_asia = await fetch_ns.fetchAsia();
    console.log('Fetch completed!')
    for (let record of [...prices_america, ...prices_europe, ...prices_asia]) {
        Region.findOne({ 'code': record.country }).exec((err, found) => {
            if (err) { console.log(err); }
            let country = null;
            if (found) { country = found; }
            else {
                let country_info = consts.shops_all.filter((country) => (country.code == record.country))[0];
                country = new Region({
                    code: country_info.code,
                    country: country_info.country,
                    default_currency: country_info.currency,
                });
                country.save(console.log(`Country info ${record.country} added.`));
            }
            let new_price_record = new DailyPrice({
                original: record.original,
                sale: record.sale,
                region: country._id,
                platform: ns._id,
            })
            new_price_record.save(console.log(`New price for ${record.country} on NS added.`));
        })
    }
})();
