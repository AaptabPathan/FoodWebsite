const mongoose = require('mongoose');

const {Schema} = mongoose;

const Order = new Schema({
    email: {
        type: String,
        required: true
    },
    order_data: {
        type: Array,
        required: true
    },
    order_date: {
        type: Date,
        require: true
    }
});

const userOrder =  new mongoose.model('UserOrder', Order);

module.exports = userOrder;