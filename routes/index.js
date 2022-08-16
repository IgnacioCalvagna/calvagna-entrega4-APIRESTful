const {Router} = require('express')
const router = Router()
const productos = require('./productos')

router.use("/productos",productos)



module.exports =router


