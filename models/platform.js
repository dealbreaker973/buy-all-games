const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlatformSchema = new Schema({
    name: String,
});

module.exports = mongoose.model('Platform', PlatformSchema);
