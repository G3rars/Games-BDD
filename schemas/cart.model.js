const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Games' }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
);

const cartModel = mongoose.model('Cart', cartSchema);
module.exports = cartModel;
