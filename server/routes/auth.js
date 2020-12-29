const express = require('express')
const Router = express.Router();
const AUthController = require('../controllers/auth.js');


Router.route("/register").post(AUthController.register);
Router.route("/getUserList").post(AUthController.getUserList);


module.exports = Router;