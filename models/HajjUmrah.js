const mongoose = require('mongoose');

const hajjUmrahSchema = new mongoose.Schema(
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
      required: true,
    },
    preferredContactMethod: {
      type: String,
      enum: ['Email', 'Phone Number', 'Whatsapp'],
    },
    passportNumber: {
      type: String,
      required: true,
      unique: true,
    },
    pilgrimageDate: {
      type: Date,
      required: true,
    },
    accommodationClass: {
      type: String,
      enum: ['Economy / Budget Class', 'Standard / 3-Star Class', 'Premium / 4-Star Class', 'Luxury / 5-Star Class'],
      required: true,
    },
    groupSize: {
      type: String,
      enum: ['1 Person', '2-4 People', '5-8 People', '9-12 People', '13+ People'],
    },
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('HajjUmrah', hajjUmrahSchema);
