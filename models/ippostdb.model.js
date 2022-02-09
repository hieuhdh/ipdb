const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Ipdb = new Schema({
    ip: {
        type: String,
    },
    post: {
        type: String,
    },
    sl: {
        type: Number,
    },
}, {
    collection: "ipdb",
});

module.exports = mongoose.model("ipdb", Ipdb);