const mongoose = require('mongoose');

const transportationServiceSchema = new mongoose.Schema(
  {
    pickupLocation: {
      type: String,
      required: true,
    },
    dropoffLocation: {
      type: String,
      required: true,
    },
    tripType: {
      type: String,
      enum: ['Daily', 'Hourly', 'Round Trip', 'One Way'],
      required: true,
    },
    pickupDate: {
      type: Date,
      required: true,
    },
    pickupTime: {
      type: String,
      required: true,
    },
    numberOfPassengers: {
      type: String,
      enum: ['1', '2', '3', '4', '5+'],
      required: true,
    },
    childSeatRequired: Boolean,
    luggage: {
      type: String,
      enum: ['No Luggage', '1 Small Bag', '1 Medium Bag', '1 Large Bag', '2 Bags', '3+ Bags'],
    },
    vehicleType: {
      type: String,
      enum: ['Economy', 'SUV', 'Luxury', 'Van', 'Other'],
      required: true,
    },
    specialRequests: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('TransportationService', transportationServiceSchema);
