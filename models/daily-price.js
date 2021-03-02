const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DailyPriceSchema = new Schema({
  date: { type: Date, default: Date.now },
  price: Number,
  region: [{ type: Schema.Types.ObjectId, ref: 'Region' }],
  platform: [{ type: Schema.Types.ObjectId, ref: 'Platform' }]
});

module.exports = mongoose.model('DailyPrice', DailyPriceSchema );
