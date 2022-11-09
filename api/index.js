const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

routes(app);

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

module.exports = app;
