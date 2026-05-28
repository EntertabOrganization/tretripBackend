const mongoose = require('mongoose');

const businessServiceSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      enum: ['Male', 'Female'],
      required: true,
    },
    passportNumber: {
      type: String,
      required: true,
      unique: true,
    },
    countryOfDeparture: {
      type: String,
      enum: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Other'],
      required: true,
    },
    destinationCountry: {
      type: String,
      enum: ['Turkey', 'United Arab Emirates', 'Thailand', 'Mexico', 'Costa Rica', 'Germany', 'Other'],
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyIndustry: String,
    preferredDepartureDate: Date,
    preferredReturnDate: Date,
    travelAlone: {
      type: Boolean,
      required: true,
    },
    specialInstructions: String,
    requiredSupportServices: [{
      type: String,
      enum: ['Venue Booking', 'A/V Setup', 'Branding & Printing', 'Decoration', 'Catering', 'Stage Design', 'Transportation', 'Security'],
    }],
    additionalNotes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('BusinessService', businessServiceSchema);
