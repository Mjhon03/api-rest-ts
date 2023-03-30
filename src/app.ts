import "dotenv/config"
import express from "express";
import cors from "cors";
import { router } from "./routes";
import { dbCoonectMySql } from "./config/database";


const PORT = process.env.PORT || 3001
const app = express()

app.use(cors({
  origin:['*'] //or https://LaUrlQueCosumiriaElAPI
}))
app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

dbCoonectMySql