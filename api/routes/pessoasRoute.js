const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router
  .get('/pessoas', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
  .get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
  .post('/pessoas', PessoaController.criaPessoa)
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
  .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
  .delete('/pessoas/:id', PessoaController.deletaPessoa)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.deletaMatricula);

module.exports = router;
