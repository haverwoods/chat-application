const express = require ('express');
const {signup , login} = require ('../controller/auth.js')

const router = express.Router();

// router.post('./signup');
// router.post('./login');
router.post('/signup', signup);
router.post('/login', login);


module.exports = router