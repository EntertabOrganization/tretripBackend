const mongoose = require('mongoose');

const medicalTourismSchema = new mongoose.Schema(
  {
    dateOfBirth: {
      type: Date,
      required: true,
    },
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
    countryOfResidence: {
      type: String,
      enum: ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Other'],
      required: true,
    },
    destinationCountry: {
      type: String,
      enum: ['Turkey', 'United Arab Emirates', 'Thailand', 'Mexico', 'Costa Rica', 'Germany', 'Other'],
      required: true,
    },
    preferredDepartureDate: Date,
    preferredReturnDate: Date,
    travelAlone: {
      type: Boolean,
      required: true,
    },
    helpBookingFlights: Boolean,
    accommodationArrangements: Boolean,
    transportationFromAirport: Boolean,
    interpreterNeeded: Boolean,
    medicalArrangements: Boolean,
    hospitalBooking: Boolean,
    additionalNotes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('MedicalTourism', medicalTourismSchema);
