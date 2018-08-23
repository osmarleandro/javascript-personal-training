const express = require('express');
const YAML = require('yamljs');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = YAML.load('./swagger.yaml');

const app = express();
const { homeRouter, calcRouter, personRouter } = require('./routers');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routers
app.use('/', homeRouter);
app.use('/calculator', calcRouter);
app.use('/person', personRouter);

// Templates
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// Starting server
app.listen(PORT, () => console.log('Listening on http://localhost:3001'));
