const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RegionSchema = new Schema({
    name: String,
    default_currency: String,
});

module.exports = mongoose.model('Region', RegionSchema );
