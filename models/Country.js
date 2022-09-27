const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
	title: String,
	emissions_Wind: Number,
    emissions_Solar: Number,
    emissions_Bioenergy: Number,
    emissions_Hydro: Number,
    emissions_OtherRenewables: Number,
    emissions_Nuclear: Number,
    emissions_OtherFossil: Number,
    emissions_Gas: Number,
    emissions_Coal: Number,
    generation_Wind: Number,
    generation_Solar: Number,
    generation_Bioenergy: Number, 
    generation_Hydro: Number,
    generation_OtherRenewables: Number,
    generation_Nuclear: Number,
    generation_OtherFossil: Number,
    generation_Gas: Number,
    generation_Coal: Number
});


const Country = mongoose.model('Country', CountrySchema);

module.exports = Country;