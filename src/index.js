//importa os módulos http e express
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 4000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(4000);

let id =2;

    let livros = [{
    id: 1,
    titulo: "Lógica de Programação",
    descricao: "Este livro ajudará  com o conceito de lógica",
    edicao: "3",
    autor: "Lucas Lima",
    isbn: "789123"
    },
    { 
    
    id: 2,
    titulo: "Programação Web",
    descricao: "Este livro ajudará com o conceito web",
    edicao: "2",
    autor: "Lucas Lima",
    isbn: "123654"

    } 
]
 
app.get("/livros,",(req,res,next) => {
    res.status(201).json(livros)
 }) 

app.post("/livros",(req, res, next ) => { 
    const livro = { 
id: id +-1,
titulo: req.body.titulo,
descricao: req.body.descricao,
edicao: req.body.edicao,
autor: req.body.autor,
isbn: req.body.isbn

  }
   
     livros.push[livro]
     res.status(201).json(livros);
 } )

 app.put("/livros",(req, res, next) =>{
     livros.forEach((livros) =>{
         if(livro.id === req.body.id) { 
            livro.titulo = req.body.titulo,
            livro.descricao = req.body.descricao,
            livro.edicao = req.body.edicao,
            livro.autor = re.body.autor,
            livro.isbn = req.body.isbn
     } 
      } )
     res.status(201).json(livros)
 }) 

 app.delete('/livros/:id',(req, res, next ) => {  
     livros.forEach((livro) =>{
         if (livro.id == idLivroDeletado) livros.splice(index, 1)
         const index = livros.indexOf(livro, 8)
         livros.splice (index, 1)
     } )
     req.status(201).json(livros);

 }) 
