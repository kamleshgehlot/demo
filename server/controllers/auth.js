const Auth = require('../models/auth.js');

const register = async function (req, res, next) {    
    const params = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        mobile: req.body.mobile,
        country_code: req.body.country_code,       
    }
    
    try {
        const newActivity = new Auth(params);
        const result = await newActivity.register();
        res.send(result)
    } catch (err) {
        next(err);
    }
}




const getUserList = async function (req, res, next) {
    try {
        const result = await new Auth({searchText: req.body.searchText}).getUserList();
        res.send( {userList: result} );
    } catch (err) {
        next(err);
    }
}

module.exports = {   
    register : register,
    getUserList : getUserList,
    
};
