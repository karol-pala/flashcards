const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    dictionary: {type: Schema.Types.ObjectId, ref: "Dictionary", required: true},
    firstSide: {type: String, required: true},
    secondSide: {type: String, required: true}
})

CardSchema
.virtual('delete')
.get(function(){
    return `/catalog/dictionary/${this.dictionary}/card/${this.id}/delete`
})

CardSchema
.virtual('update')
.get(function(){
    return `/catalog/dictionary/${this.dictionary}/card/${this.id}/update`
})

module.exports = mongoose.model("Card", CardSchema);