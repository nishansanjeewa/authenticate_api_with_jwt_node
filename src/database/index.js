const mongoose = require('mongoose');
const url = process.env.MONGODB_URL;

module.exports.connect = async function () {
    try {
        mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }, () => {
            console.log('mongoose connected')
        });
    } catch (e) {       
        console.log('Error found', e);
        process.abort();
    }
}