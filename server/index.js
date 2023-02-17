import express from 'express';
import http from 'http'
import cors from 'cors'
import { router } from './route.js';
import { Server } from 'socket.io';


const PORT = process.env.PORT || 3005
const app = express()

app.use(cors({ origin: "*" }))
app.use(router)


const server = http.createServer(app)

const io = new Server(server, {
    cors: "*",
    methods: ["GET"]
})

console.log(io)

server.listen(PORT, () => {
    console.log("Server started on " + PORT)
})