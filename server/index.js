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
});

// CREATE
app.post("/reserva", (req, res) => {
    const { nome, telefone, num_mesa, qtd_clientes, data_atend, horario } = req.body;
    const SQL = "INSERT INTO reserva (nome, telefone, num_mesa, qtd_clientes, data_atend, horario) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [nome, telefone, num_mesa, qtd_clientes, data_atend, horario];

    db.query(SQL, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Erro ao adicionar reserva");
        } else {
            res.status(200).send("Reserva adicionada com sucesso");
        }
    });
});

// READ
app.get("/reserva", (req, res) => {
    const SQL = "SELECT * FROM reserva";

    db.query(SQL, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Erro ao obter reservas");
        } else {
            res.status(200).send(result);
        }
    });
});

// DELETE
app.delete("/reserva/:id", (req, res) => {
    const { id } = req.params;
    const SQL = "DELETE FROM reserva WHERE id = ?";

    db.query(SQL, [id], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Erro ao excluir reserva");
        } else {
            res.status(200).send("Reserva excluída com sucesso");
        }
    });
});

app.listen(3001, () => {
    console.log('Rodando servidor');
});
