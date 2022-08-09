const express = require('express')
const app = express();
app.get('/json', (req, res)=>{
    res.json({title: "Tarefas", done: true})
})
app.get('/', (req,res)=>{
    res.send("<h1>Minha lista de tarefas</h1>")
})
app.get('/planet',(req, res)=>{
    res.send("<h1>Jupiter</h1> </hr> <p>Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol.[11] Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto.</p>")
})
app.listen(3000, ()=>{
    console.log("O servidor foi iniciado!")
})
