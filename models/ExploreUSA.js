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
    },
    preferredDestinations: [{
      type: String,
      enum: [
        'Boston', 'San Francisco', 'Las Vegas', 'Hawaii', 'Houston, Texas',
        'Miami Beaches', 'Grand Canyon', 'Walt Disney World', 'Yosemite National Park',
        'White House', 'Other'
      ],
    }],
    otherDestination: String,
    budgetRange: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('ExploreUSA', exploreUSASchema);
