const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const {check, validationResult} = require('express-validator');

router.post('/registration',
    // [
    //     check('login', 'Uncorrect login').isLength({min:6})
    // ],
    async (req,res)=>{
    try {
        // const errors = validationResult(req);
        console.log('GOT');
        // if(!errors.isEmpty()){
        //     return res.status(400).json({
        //         errors: errors.array(),
        //         message: 'Uncorrect data'
        //     })
        // }
        const {login, role, name, surname, sursurname, password} = req.body;
        const isUsed = await User.findOne({login});
        if(isUsed){
            console.log('EXIST')
            return res.status(300).json({message: 'Данный логин уже существует'});
        }
        const user = new User({
            login, role, name, surname, sursurname, password
        })
        await user.save();

        res.status(201).json({message:'Пользователь создан'});
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;