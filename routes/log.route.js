const {Router} = require('express');
const router = Router();
const User = require('../models/User');


router.post('/login',
    async (req,res)=>{
    try {
        console.log(req.body)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;