const parse_data = require("../model/index")
const fs = require("fs")

exports.get = (req, res) => {
    res.json(parse_data)
}

exports.post = (req, res) => {
    const user = {
        id: req.body.id,
        name: req.body.name
    }
    parse_data.push(user)
    res.json(user)

    fs.writeFile('API_JSON/jsonData.json', JSON.stringify(parse_data, null, 4), err => {
        if (err) {
            console.error(err)
        }
        else {
            console.log("data has been sended")
        }
    })
}

exports.put = (req, res) => {
    let id = req.params.id
    let name = req.body.name
    let index = parse_data.findIndex(() => {
        return (id == Number.parseInt(id))
    })
    if (index >= 0) {
        const upd = parse_data[index]
        upd.name = name
        res.json(upd)
    }
    else {
        res.send("error")
    }

    fs.writeFile('API_JSON/jsonData.json', JSON.stringify(parse_data, null, 4), err => {
        if (err) {
            console.error(err)
        }
    })

}

exports.delete = (req, res) => {
    let id = req.params.id
    let index = parse_data.findIndex(() => {
        return (id == Number.parseInt(id))
    })
    if (index >= 0) {
        let del = parse_data[index]
        parse_data.splice(index, 1)
        res.send(del)

    }
    else {
        res.send("error")
    }

    fs.writeFile('API_JSON/jsonData.json', JSON.stringify(parse_data, null, 4), err => {
        if (err) {
            console.error(err)
        }
    })
}
