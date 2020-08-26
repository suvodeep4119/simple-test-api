//3rd party imports
const express = require('express');

//Own imports
const homeRoutes = require('./routes/home');

//Running express functionality as an app
const app = express();

app.use(homeRoutes);

//server
app.listen(3000);