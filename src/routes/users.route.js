const route = require('express').Router();
const userHandler = require('../handlers/users.handler');

route.get('/', userHandler.getUsers)
route.post('/', userHandler.createUser);

module.exports = route