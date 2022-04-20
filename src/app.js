const express = require('express');
const app = express();

const index = require('./routes/index');
const shoudDeployRoute = require('./routes/shoudDeployRoute');
app.use(express.json())
app.use('/', index);
app.use('/should-i-deploy-today', shoudDeployRoute);
module.exports = app;