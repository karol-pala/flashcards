const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    dictonary: {type: Schema.Types.ObjectId, ref: "Dictonary", required: true},
    firstSide: {type: String, required: true},
    secondSide: {type: String, required: true}
})

module.exports = mongoose.model("Card", CardSchema);