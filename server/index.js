const express = require('express');
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

const vehiclesData = require('./data/vehicles.json');
const homeMortgageData = require('./data/homeMortgage.json');

const app = express();
const instance = webpackMiddleware(webpack(webpackConfig));

app.use(bodyParser.json());

app.get('/vehicles', (req, res) => {
    res.status(200).json(vehiclesData);
});

app.get('/home-mortgage', (req, res) => {
    res.status(200).json(homeMortgageData);
});

app.use((req, res, next) => {
    if (!/(\.(?!html)\w+$|__webpack.*)/.test(req.url)) {
        req.url = '/' //this would make express.js serve index.html
    }

    next();
});

app.use(instance);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server started in PORT:', 3000);
});
