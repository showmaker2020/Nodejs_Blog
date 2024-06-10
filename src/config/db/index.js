const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_edu_dev');
        console.log("Thanh cong");
    } catch (error) {
        console.log('That bai');
    }
}

module.exports = {connect}