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
    cart: {type: mongoose.Schema.Types.ObjectId, ref: 'Cart'},
}, {
    timestamps: true 
});

const sessionSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'introduce un email con formato valido']
    },
    token: { type: String, required: true },
    role: { type: String, required: true },
    expireAt: {
      type: Date,
      default: () => new Date(Date.now() + 3600 * 1000), // Expira en 3600 segundos (1 hora)
      index: { expires: '1h' }, // Expira automáticamente después de 1 hora
    },
  });

const User = mongoose.model('User', userSchema);
const Session = mongoose.model('Session', sessionSchema);
module.exports = { User, Session };
