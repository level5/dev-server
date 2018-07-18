const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)

module.exports = {
    async loadJSON(path) {
        let json = await readFile(path)
        return JSON.parse(json)
    }
}