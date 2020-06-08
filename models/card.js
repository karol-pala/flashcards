const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    dictonary: {type: Schema.Types.ObjectId, ref: "Dictonary", required: true},
    firstSide: {type: String, required: true},
    secondSide: {type: String, required: true}
})

CardSchema
.virtual('delete')
.get(function(){
    return `/catalog/dictonary/${this.dictonary}/card/${this.id}/delete`
})

CardSchema
.virtual('update')
.get(function(){
    return `/catalog/dictonary/${this.dictonary}/card/${this.id}/update`
})

module.exports = mongoose.model("Card", CardSchema);