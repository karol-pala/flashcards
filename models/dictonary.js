const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DictonarySchema = new Schema(
    {
        name: {type: String, required: true},
        author: {type: String, required: true},
        description: {type: String, required: true}
    }
)

DictonarySchema
.virtual('update')
.get(function(){
    return '/catalog/dictonary/update/' + this._id
})

DictonarySchema
.virtual('delete')
.get(function(){
    return '/catalog/dictonary/delete/' + this.id
})

module.exports = mongoose.model("Dictonary", DictonarySchema);