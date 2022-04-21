const express = require('express');
const auth = require('../middleware/auth')
const Verification = require('../controllers/Login_Verify')
const Register = require('../controllers/Register')

const router = express.Router();

router.get('/', auth, (req, res) => {
	let name = req.user.name
    res.json(`Welcome user ${name}`)
});

router.post("/login", async (req, res) => {
	return Verification.Login(req, res);
});

router.post("/register", async (req, res) => {
	return Register.registerUser(req, res);
});

module.exports = router