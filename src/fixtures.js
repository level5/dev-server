const fs = require('fs')
const util = require('util')

const readdir = util.promisify(fs.readdir)

const AMD_PATH = 'd:/github/WebUIService/src/static/fixtures'

const requirejs = require('requirejs')

global.Can = {xxx: 'Hello Mock'}

requirejs.config({
    paths: {
        'can/util/fixture': __dirname + '/amd',
        'fixtures': AMD_PATH,
    }
})



async function getAllAMDModules() {


}


async function getFilesName(path) {

    const files = await readdir
}
