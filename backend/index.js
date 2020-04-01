const express = require('express');

const app = express();

/**
 * Rota / Recurso
 */


 /**
  * Método HTTP:
  * 
  * GET: Buscar/listar uma informação no Back-end
  * POST: Criar uma informação no Back-end
  * PUT: Alterar uma informação no Back-end
  * DELETE: Deletar uma informação no Back-end
  */

  
app.get('/', (request, response) =>{
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Douglas Soares'
    });
});

app.listen(3333);
