const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    login:{type: String, require:true, unique: true},
    role:{type: String, require:true},
    name:{type: String, require:true},
    surname:{type: String, require:true},
    sursurname:{type: String, require:true},
    password:{type: String, require:true}
})

module.exports = model('User', schema);