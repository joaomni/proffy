import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express()

const port = 3333

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`[*] Server is running at port: ${port}`)
    console.log(`[*] Site is running at: http://localhost:${port}`)
})
