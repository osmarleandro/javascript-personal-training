const express = require('express');
const YAML = require('yamljs');
const swaggerUI = require('swagger-ui-express');

const app = express();
const { homeRouter, calculatorRouter } = require('./routers');
const swaggerDoc = YAML.load('./swagger.yaml');

// Routers
app.use('/', homeRouter);
app.use('/calculadora', calculatorRouter);

// Templates
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// Starting server
app.listen(3000, () => console.log('Listening on http://localhost:3000'));
