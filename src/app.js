require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const v1Routes = require('./v1/routes');

const app = express();

app.use('/api/v1/', v1Routes);

app.listen(8000, () => {
    console.log(`App running on port 8000`);
});

module.exports = app;
