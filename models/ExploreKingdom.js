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
      enum: ['Al Souda', 'Ragal Almaa', 'AlUla', 'Mecca', 'Diriyah', 'Medina', 'Other'],
    }],
    otherDestination: String,
    preferredGuidingLanguage: {
      type: String,
      enum: ['Arabic', 'English', 'French', 'Spanish', 'German'],
    },
    budgetRange: String,
    domesticFlightsNeeded: Boolean,
    hotelAccommodationNeeded: Boolean,
    notesAndSpecialRequests: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('ExploreKingdom', exploreKingdomSchema);
