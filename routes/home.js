const express = require('express');

//Our own import from controllers 
const logicController = require('../controllers/logic');

const router = express.Router();

//What happens when we visit this path - 'localhost:3000/'
router.get('/', logicController.getData);

//Exporting this method to be used in our main app.js file
module.exports = router;