const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    emailAddress: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    serviceType: {
      type: String,
      enum: [
        'Medical Tourism',
        'Business Tourism',
        'Travel Tourism',
        'Transportation Service',
        'Shipping Service',
        'Event Management',
      ],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ContactUs', contactUsSchema);
