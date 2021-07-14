const axios = require("axios")
const fs = require("fs")
axios.get('http://api.navgurukul.org/courses').then(cource_response => {
    const responce_data = cource_response.data;
    //  THIS IS TO CREATE JSON FILE
    fs.writeFile('API_JSON/jsonData.json',JSON.stringify(responce_data,null,4),(err)=>{
        if(err) throw err;
    })
})

const data = fs.readFileSync("API_JSON/jsonData.json", "utf8");
const parse_data = JSON.parse(data)

module.exports = parse_data