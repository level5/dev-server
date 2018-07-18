const Router = require('koa-router')

const router = new Router({
    prefix: '/redfish/v1'
})


router.get('/user', function() {
    return 'user'
})

module.exports = router