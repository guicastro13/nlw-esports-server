import express, { response } from 'express'
import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
dotenv.config()

const app = express()

const prisma = new PrismaClient()

app.get('/games', async (req, res) => { 
    const games = await prisma.game.findMany()
    return response.json(games)
});


app.post('/ads', (req, res) => { 

});

app.get('/games/:id/ads', (req, res) => { 

});

app.get('/games/:id/discord', (req, res) => { 

});

app.listen(process.env.PORT, () => {
    console.log("Server ativo!")
})