const express = require('express');
const route = express.Router();

const controller = require('../controller/taskController');
route.post('/api', controller.create);
route.get('/api/tasks', controller.find);
route.put('/api/tasks/:id', controller.update);
route.delete('/api/tasks/:id', controller.delete);

module.exports = route;
