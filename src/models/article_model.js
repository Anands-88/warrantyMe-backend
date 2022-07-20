const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title:{type: String, required: true}, 
    description:{type: String, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true},
},{
    versionKey: false,
    timestamps:true,
})
module.exports = mongoose.model("articles", articleSchema);