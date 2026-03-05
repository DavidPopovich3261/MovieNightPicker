import express from "express"
import cors from "cors"
import fs from "fs/promises"
import { Filtervalues } from "./utils/Filtervalues.js"

const app = express()
app.use(express.json())
app.use(cors())


app.get("/movies", async (req, res) => {
    try {
        const data = await fs.readFile("../server/DB/data.json", "utf8")
        const newdata = await Filtervalues(data)
        res.json({ newdata })

    } catch {
        res.status(500).json({ "messege": "not found" })
    }

})

app.get("/purchases", async (req, res) => {
    const purchases = await fs.readFile("../server/DB/seats.json", "utf8")
    res.json({ purchases })
})

app.listen(8080, () => {
    console.log("server run ...");
})