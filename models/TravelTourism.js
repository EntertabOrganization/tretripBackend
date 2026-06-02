const mongoose = require('mongoose');

const travelTourismSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: true,
    },
    tripType: {
      type: String,
      enum: ['Multiple Destinations', 'Round Trip', 'One Way'],
      required: true,
    },
    cabinClass: {
      type: String,
      enum: ['First', 'Business', 'Premium', 'Economy'],
      required: true,
    },
    leavingFrom: {
      type: String,
      required: true,
      trim: true,
    },
    goingTo: {
      type: String,
      required: true,
      trim: true,
    },
    multipleDestinations: [
      {
        type: String,
        trim: true,
      },
    ],
    departingDate: {
      type: Date,
      required: true,
    },
    returnDate: {
      type: Date,
      required() {
        return this.tripType === 'Round Trip';
      },
    },
    airline: {
      type: String,
      trim: true,
    },
    stops: {
      type: Number,
      min: 0,
      default: 0,
    },
    destinationFocus: {
      type: String,
      trim: true,
    },
    adult: {
      type: Number,
      min: 1,
      default: 1,
    },
    children: {
      type: Number,
      min: 0,
      default: 0,
    },
    infants: {
      type: Number,
      min: 0,
      default: 0,
    },

    preferredHotel: {
      type: String,
      trim: true,
    },
    roomType: {
      type: String,
      trim: true,
    },
    nights: {
      type: Number,
      min: 0,
      default: 0,
    },
    checkInDate: Date,
    checkOutDate: Date,
    mealPreference: {
      type: String,
      trim: true,
    },

    pickupLocation: {
      type: String,
      trim: true,
    },
    dropoffLocation: {
      type: String,
      trim: true,
    },
    pickupDate: Date,
    pickupTime: {
      type: String,
      trim: true,
    },

    carRentalPickupDate: Date,
    carRentalDropoffDate: Date,
    carType: {
      type: String,
      trim: true,
    },
    driverAge: {
      type: Number,
      min: 18,
    },
    specialRequests: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

travelTourismSchema.path('multipleDestinations').validate(function validateDestinations(value) {
  if (this.tripType !== 'Multiple Destinations') {
    return true;
  }

  return Array.isArray(value) && value.length > 0;
}, 'multipleDestinations is required when tripType is Multiple Destinations.');

module.exports = mongoose.model('TravelTourism', travelTourismSchema);
