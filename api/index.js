const express = require('express');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (_, res) => res.status(200).send({ mensagem: 'boas vindas à API' }));

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

module.exports = app;
