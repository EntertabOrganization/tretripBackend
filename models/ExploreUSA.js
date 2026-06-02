const mongoose = require('mongoose');

const exploreUSASchema = new mongoose.Schema(
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
      required: true,
    },
    tripStartDate: {
      type: Date,
      required: true,
    },
    tripEndDate: {
      type: Date,
      required: true,
    },
    numberOfTravelers: {
      type: Number,
      required: true,
    },
    tripType: {
      type: String,
      enum: ['One Way', 'Round Trip', 'Hourly'],
      required: true,
    },
    preferredDestinations: [{
      type: String,
      enum: [
        'Boston', 'San Francisco', 'Las Vegas', 'Hawaii', 'Houston, Texas',
        'Miami Beaches', 'Grand Canyon', 'Walt Disney World', 'Yosemite National Park',
        'White House', 'Other'
      ],
    }],
    otherDestination: {
      type: String,
      trim: true,
    },
    preferredGuidingLanguage: {
      type: String,
      enum: ['English', 'Arabic', 'French', 'Spanish', 'German'],
      required: true,
    },
    budgetRange: {
      type: String,
      trim: true,
    },
    domesticFlightsNeeded: {
      type: Boolean,
      required: true,
    },
    hotelAccommodationNeeded: {
      type: Boolean,
      required: true,
    },
    notesAndSpecialRequests: {
      type: String,
      trim: true,
    },
    needAccommodation: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ExploreUSA', exploreUSASchema);
