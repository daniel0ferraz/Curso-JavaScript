const porta = 3003; //porta significa um processo que esta associado a um endereço

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados'); // busca modulo

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
  res.send(bancoDeDados.getProdutos());
});

app.get("/produtos/:id", (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.param.id));
});

app.post("/produtos", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); // JSON
});

app.put("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); // JSON
});

app.delete("/produtos/:id", (req, res, next) => {
  const produto = bancoDeDados.excluirProdutos(req.params.id)
  res.send(produto); // JSON
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});
