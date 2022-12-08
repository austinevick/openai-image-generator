const { generateImage } = require('../controller/controller');

const router = require('express').Router();


router.post('/generateimage',generateImage)

module.exports=router;