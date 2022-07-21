const express = require('express');
const { randomUUID } = require('crypto');

const app = express();

app.use(express.json());

const products = [];

// POST => inserir um dado 
// GET => buscar um ou mais dados
// PUT => alterar um dado
// DELETE => deletar um dado

// Body => sempre que eu quiser enviar dados para minha requisição
// Params => /product/id
// Query => /product?id=102823&value=30829384

app.post("/products", (request, response) => {
  // nome e preço 

  const { name, price } = request.body;

  console.log(request.body)

  const product = {
    name,
    price,
    id: randomUUID(),
  }

  products.push(product)

  // return response.sendStatus(200);

  return response.json(product)
})

app.get("/products", (request, response) => {
  // nome e preço 

  return response.json(products);

  // return response.json(product)
})

app.get("/products/:id", (request, response) => {
  const { id } = request.params;

  const product = products.find(product => product.id === id);

  return response.json(product);
})

app.put("/products/:id", (request, response) => {
  
})

app.listen(4002, () => console.log('servidor está rodando na porta 4002'));
