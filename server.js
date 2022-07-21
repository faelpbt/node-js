const http = require('http');

 http.createServer(( request, response ) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });

  if(request.url === '/produto') {
    response.end(JSON.stringify({
      message: 'Rota de produto',
    }))
  }

  if(request.url === '/usuario') {
    response.end(JSON.stringify({
      message: 'Rota de usuarios',
    }))
  }
  
  response.end(JSON.stringify({
    message: 'Rota principal'
  }));
 }).listen(4001, () => console.log('servidor está rodando na porta 4001'));
