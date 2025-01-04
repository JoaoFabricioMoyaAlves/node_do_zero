
import {fastify} from 'fastify';              //Exemplo criando servidor utilizando o framework fastify
//import { DatabaseMemory } from './database-memory.js';
import { DatabasePostgres } from './database-postgres.js';
 
const server = fastify();

//const database = new DatabaseMemory();

const database = new DatabasePostgres();

//GET, POST, PUT, DELETE e outros... (get para pegar informações do servidor,  POST para enviar informações para o servidor, PUT para alterações e DELETE para exlcuir )

//request Body



server.post('/videos', async (request, reply) => {
    
    const {title, description, duration} = request.body ;

   
    

 await  database.create({ 
        //quanto o nome tem o mesmo valro da variavel podemos usar SHORT sintaxe
    title,                     // =   title: title,
    description,               // = description: description,
    duration,                  // = duration: duration,
    });

  // console.log(database.list());


    return reply.status(201).send();

});

server.get('/videos', async (request) => {

   const search = request.query.search


   const videos = await database.list(search);

   
   return videos;

});

server.put('/videos/:id', async (request, reply) => {
    
    const videoID = request.params.id ;
    const {title, description, duration} = request.body ;

   await database.update(videoID, {
      title,
      description,
      duration,
    })


   return reply.status(204).send();

});

server.delete('/videos/:id', async (request, reply) => {
   
    const videoID = request.params.id;

    await database.delete(videoID);

    return reply.status(204).send();

});

server.listen({
    port: process.env.PORT ?? 3333,
});