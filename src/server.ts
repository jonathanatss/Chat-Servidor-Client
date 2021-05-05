import express from "express";

import "./database";

const app = express();

/**
 * GET = buscas
 * POST = criação
 * PUT = alteração
 * DELETE = deletar
 * PATCH = alterar uma informação específica
 */

app.get("/", (request, response) => {
    return response.json({
        message: "Olá, Jonathan!"
    })

})

app.post("/", (request, response) => {
    return response.json({ message: "Usuário salvo com sucesso! " });
});

app.listen(3333, () => console.log("Server is running on port 3333"));