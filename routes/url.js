

const express = require('express');
const {handleurlshortner,handleurlanalytics,handleurlredirect}=require('../controllers/handleurlshortner') 
const router= express.Router();
const URL=require('../models/url');


router.post('/',handleurlshortner);

router.get('/:shortid',handleurlredirect);

router.get('/analytics/:shortid',handleurlanalytics);

module.exports=router;

