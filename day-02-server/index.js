const express = require('express');
const router = require('./routers/index.js');
const calcRouter = require('./routers/calc.js');

const YAML = require('yamljs');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = YAML.load('./swagger.yaml');

const app = express();
app.use('/', router);
app.use('/calculadora', calcRouter);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

/** Starting server */
app.listen(3000, console.log('Listening...'));
