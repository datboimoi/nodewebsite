// Imports Express
const express = require('express');
// Uses Router Express method 
const router = express.Router();
// Routes
const mainController = require('../controllers/main');
// Uses rendered page when it has a GET request
router.get('/', mainController.getHomePage);