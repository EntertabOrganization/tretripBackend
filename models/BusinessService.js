const mongoose = require('mongoose');

const businessServiceSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    passportNumber: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female'],
      required: true,
    },
    countryOfDeparture: {
      type: String,
      required: true,
      trim: true,
    },
    destinationCountryCity: {
      type: String,
      required: true,
      trim: true,
    },
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    companyIndustry: {
      type: String,
      trim: true,
    },
    preferredDepartureDate: {
      type: Date,
      required: true,
    },
    preferredReturnDate: {
      type: Date,
    },
    travelAlone: {
      type: Boolean,
      required: true,
    },
    specialInstructions: {
      type: String,
      trim: true,
    },
    requiredSupportServices: [
      {
        type: String,
        enum: ['Venue Booking', 'A/V Setup', 'Branding & Printing', 'Decoration', 'Catering', 'Stage Design', 'Transportation', 'Security'],
      },
    ],
    additionalNotes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('BusinessService', businessServiceSchema);
