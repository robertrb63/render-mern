import express from 'express'
import cors from 'cors'
const app = express()
import pg from 'pg'
import {FRONTEND_URL, DB_HOST, DB_DATABASE, PORT, DB_NAME,DB_PASSWORD} from './config.js'


const pool = new pg.Pool({
    database:DB_DATABASE,
    host:DB_HOST,
    user:DB_NAME,
    password:DB_PASSWORD,
    port:PORT
  })
 
app.use(cors({
    origin: FRONTEND_URL
}))

app.get('/ping', async (req, res)=>{

    const result = await pool.query('SELECT NOW()')
    console.log(result)
    res.send({
        pong: result.rows[0].now,
    })
})

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})

