const router = require("express").Router()

router.get("/", (req, res) => {
    res.json("api dashboard")
})

router.post("/login", ( req, res ) => {
    res.json("Loginnn")
})

router.post("/getDatabase", ( req, res ) => {
    res.json("Berhasil mendapatkan data")
})

router.post("/updateDatabase", ( req, res ) => {
    res.json("Berhasil mendapatkan data")
})

router.get("/controlling", (req, res) => {
    res.json("controlling")
})

router.get("/about", (req, res) => {
    res.json("about")
})

module.exports = router