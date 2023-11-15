const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123123",
    database: "reservas",
    port: "3308",
})

//CREATE
app.get("/", (req, res) => {

    let SQL = "INSERT INTO reserva ( nome, telefone, num_mesa, qtd_clientes, data_atend, horario ) VALUES ('Catarina Guimarães', '81991835021', 02, 4, '2023-11-14', '23:46:38' )";

    db.query(SQL, (err, result) => {
        console.log(err);
    })

    res.send("CONECTADO!!!")
})

//Tentei alterar, mas não consegui
app.post("/item", (req, res) => {
    const { comentarios } = req.body;
    let SQL = "INSERT INTO listaitens ( itens ) VALUES (?)";
    db.query(SQL, comentarios, (err, result) => {
        console.log(err);
    })
}); 

//READ
app.get("/reservas", (req, res) => {

    let SQL = "SELECT * from reserva";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
})

// Não está deletando 
//DELETE
app.delete("/reserva/:id", (req, res) => {

    const { id } = req.params;
    console.log("Informação: ", id)

    let SQL = "DELETE FROM reserva WHERE (`id` = ? )";

    db.query(SQL, id, (err, result) => {
        console.log(err);
    })
})

app.listen(3001, () => {
    console.log('Rodando servidor');
});
