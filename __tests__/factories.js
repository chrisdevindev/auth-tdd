const { request } = require("../src/app");

const { factory } = require('factory-girl')
const { User } = require('../src/app/models')

factory.define('User', User, {
    name: 'Christian Castro',
    email: 'christian.alves@dellead.com',
    password: '123456'
})

module.exports = factory