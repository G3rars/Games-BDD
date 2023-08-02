const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'introduce un email con formato valido']
    },
    password: { type: String, required: true},
    role: { type: String, required: true},
    token: { type: String, required: true }
}, {
    timestamps: true // <-- Corrección aquí
});

const User = mongoose.model('User', userSchema);
const Session = mongoose.model('Session', userSchema);
module.exports = { User, Session };
