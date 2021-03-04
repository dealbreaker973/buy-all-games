const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RegionSchema = new Schema({
    code: String,
    country: String,
    default_currency: String,
});

module.exports = mongoose.model('Region', RegionSchema);
