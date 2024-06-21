const mongoose = require("mongoose")
//mongodb+srv://admin:deep1507@cluster0.rd0szsg.mongodb.net/
mongoose.connect("mongodb+srv://admin:deep1507@cluster0.rd0szsg.mongodb.net/")

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}