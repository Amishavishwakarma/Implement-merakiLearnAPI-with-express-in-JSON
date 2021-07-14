const express = require("express")
const Router = require("../API_JSON/route/index")
const parse_data = require("../API_JSON/model/index")
const app = express()
app.use(express.json())
app.use(Router)

app.listen(3000, () => {
    console.log("listning")
})
