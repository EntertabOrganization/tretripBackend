const mongoose = require('mongoose');

const travelTourismSchema = new mongoose.Schema(
  {
    // Traveler's Information
    travelerName: {
      type: String,
      required: true,
      trim: true,
    },
    
    // Flight Details
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
    },
    goingTo: {
      type: String,
      required: true,
    },
    airline: String,
    departingDate: Date,
    stops: Number,
    adult: {
      type: Number,
      default: 1,
    },
    children: Number,
    infants: Number,

    // Hotel Details
    destination: String,
    checkInDate: Date,
    checkOutDate: Date,
    roomAdult: Number,
    roomChildren: Number,
    numberOfRooms: Number,
    hotelRating: {
      type: String,
      enum: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    },
    mealPlan: {
      type: String,
      enum: ['Room only', 'Breakfast included', 'Half Board', 'Full Board'],
    },

    // Transfer Details
    pickupLocation: String,
    dropoffLocation: String,
    pickupDate: Date,
    pickupTime: String,

    // Car Rental Details
    carRentalPickupDate: Date,
    carRentalDropoffDate: Date,
    carType: String,
    driverAge: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('TravelTourism', travelTourismSchema);
