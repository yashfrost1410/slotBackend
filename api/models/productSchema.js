const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    className: { type: String, require: true },
    faculty: { type: String, require: true },
    students: Number
});
module.exports = mongoose.model('Slot', productSchema);