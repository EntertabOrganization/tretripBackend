const mongoose = require('mongoose');

const exploreKingdomSchema = new mongoose.Schema(
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
      enum: ['Al Souda', 'Ragal Almaa', 'AlUla', 'Mecca', 'Diriyah', 'Medina', 'Other'],
    }],
    otherDestination: String,
    preferredGuidingLanguage: {
      type: String,
      enum: ['Arabic', 'English', 'French', 'Spanish', 'German'],
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
  },
  { timestamps: true }
);

module.exports = mongoose.model('ExploreKingdom', exploreKingdomSchema);
