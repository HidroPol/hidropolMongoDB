const express = require("express")
const path = require("path")
const hidropolRoutes = require("./routes/hidropolRoutes")
const cors = require("cors")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const app = express()
const PORT = 8080

app.use(cors())

//morgan used for logging HTTP requests to the console
app.use(morgan("dev"))

//bodyParser middleware used for resolving the req and res body objects (urlEncoded and json formats)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// add routers
app.use("/api/hidropol", hidropolRoutes)

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))