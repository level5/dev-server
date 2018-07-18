const Koa = require('koa')

const static = require('koa-static')
const proxy = require('koa-proxy')

const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)
const readdir = util.promisify(fs.readdir)

const app = new Koa()

const routersPath = __dirname + '/routers'
const dataPath = __dirname + '/data'

init()

async function init() {
    // project
    loadStatic(__dirname + '/../statics')   
    // mock
    await loadMock(app)
    
    // proxy
    setProxy(app, 'https://www.zhihu.com/')

    app.listen(3000);
}

function loadStatic(path) {
    app.use(static(path))
}

function setProxy(app, host) {
    app.use(proxy({
        host
    }))
}

async function loadMock(app) {
    app.use(async (ctx, next) => {
        const result = await next()
        console.log('result of next:', result)
        if (typeof result === 'string') {
            try {
                ctx.body = (await readFile(`${dataPath}/${result}.json`)).toString()
            } catch(err) {
                console.error('error:', err)
                ctx.body = {
                    error: err
                }
            }
        }
    })

    const files = await readdir(routersPath)

    for(const file of files) {
        console.log('file name:', file)
        const router = require(`${routersPath}/${file}`)
        app.use(router.routes())
    }
}






