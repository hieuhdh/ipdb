const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Iphomedb = new Schema({
    ip: {
        type: String,
    },
    sl: {
        type: Number,
    },
}, {
    collection: "iphomedb",
});

module.exports = mongoose.model("iphomedb", Iphomedb);