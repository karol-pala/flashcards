const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DictonarySchema = new Schema(
    {
        name: {type: String, required: true},
        author: {type: String, required: true},
        description: {type: String}
    }
)

module.exports = mongoose.model("Dictonary", DictonarySchema);