const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

// Connecting to database
const knex = require("../db/knex");

async function Login(req, res) {    
    let {email, password} = req.body

    if (email === null || email === "" && password === null || password === "") {
        res.status(400).json({
            status: 'error',
            error: 'Please Complete Form'
        })
    }
    else if (email && password === null || password === "") {
        res.status(400).json({
            status: 'error',
            error: 'Please Complete Password'
        })
    }
    else if(password && email === null || email === "") {
        res.status(400).json({
            status: 'error',
            error: 'Please Complete Email'
        })
    }
    else {
		let user = await knex
			.select()
			.from("users")
			.where("email", email)
			.then((user) => {
				return user[0];
			});
		if (!user) {
			res.json({ msg: "Invalid Email" });
		}
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			res.json({ msg: "Invalid Password" });
		}
		
		const payload = {
			user: {
				id: user.id,
				name: user.name,
				surname: user.surname,
				email: user.email,
			},
		};
			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{
					expiresIn: '365d',
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
	    }
}

module.exports = {
    Login
}