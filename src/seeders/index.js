require('dotenv').config();
const mongoose = require('../database');
const User = require('../models/user.model');
const { userType } = require('../config/user.config');
const helper = require('../helper/common.helper');

const run = async function () {
    await mongoose.connect();
    await User.deleteMany({});
    const users = [
        {
            name: 'Admin User',
            email: 'admin@mail.com',
            userType: userType.admin,
            password : helper.enryptPassword('adminpassword')      
        },
        {
            name: 'Client',
            email: 'client@mail.com',
            userType: userType.client,
            password : helper.enryptPassword('clientpassword')      
        },
    ]
    await User.insertMany(users); 
}
run().then(r => {
    console.log('All data seeded');
    process.exit(0);
}).catch(e => {
    console.log(e.message);
    process.exit(0);    
})