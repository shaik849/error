const router = require('express').Router();

const  {upload}  = require('../middleware/middle')

const {getAll, postAll} = require('../controller/controller')

router.get('/', getAll)

router.post('/',postAll)

module.exports = router;