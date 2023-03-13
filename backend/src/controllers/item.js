const con = require('../dao/connect')

const teste = (req, res) => {
    res.json("Inventário Respondendo").end()
}

const criar = (req, res)=>{
    let string = `INSERT INTO livro (titulo,autor,valor,dataEmprest,dataPrevDev,dataDevolucao) VALUE('${req.body.titulo}','${req.body.autor}','${req.body.valor}','${req.body.dataEmprest}','${req.body.dataPrevDev}','${req.body.dataDevolucao}')`
    con.query(string,(err, result)=>{
        if(err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res)=>{
    let string = "SELECT * FROM livro"
    con.query(string, (err, result)=>{
        if(err == null){
            res.json(result).status(200).end()
        }else{
            res.json(err).status(404).end()
        }
            
    })
}

const excluir = (req, res)=>{
    let string = `DELETE FROM item WHERE id = '${req.body}'`
    con.query(string, (err, result)=>{
        if(result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    criar,
    listar,
    excluir
}