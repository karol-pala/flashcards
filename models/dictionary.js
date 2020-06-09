const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DictionarySchema = new Schema(
    {
        name: {type: String, required: true},
        author: {type: String, required: true},
        description: {type: String, required: true}
    }
)

DictionarySchema
.virtual('update')
.get(function(){
    return `/catalog/dictionary/${this.id}/update/`
})

DictionarySchema
.virtual('delete')
.get(function(){
    return `/catalog/dictionary/${this.id}/delete/`
})

DictionarySchema
.virtual('show')
.get(function(){
    return '/catalog/dictionary/' + this.id
})

DictionarySchema
.virtual('cards')
.get(function(){
    return `/catalog/dictionary/${this.id}/card_list`
})

DictionarySchema
.virtual('create_card')
.get(function(){
    return `/catalog/dictionary/${this.id}/card/create`
})


module.exports = mongoose.model("Dictionary", DictionarySchema);