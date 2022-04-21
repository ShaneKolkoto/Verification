const bcrypt = require('bcryptjs');
const { v4 } = require('uuid');
const knex = require('../db/knex');

async function registerUser(req, res) {
    let {name, surname, email, password} = req.body

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    let user = await knex('users').where('email', req.body.email).then((data) => {return data});
    
    if(user.length === 0) {
        let newUser = await knex('users').insert({
            id: v4(),
            name: name,
            surname: surname,
            email: email,
            password: hash
        }).returning(['id']).then((data) => { return data[0] });
        let userRole = await knex('roles').insert({
            id: v4(),
            user_id: newUser.id,
            role: 'user'
        })

        res.json(`Successfully registered ${name}`)
    }
    else {
        res.status(400).json({
            status: 'error',
            error: 'Email already in use'
        })
    }
};

module.exports = {
    registerUser
}