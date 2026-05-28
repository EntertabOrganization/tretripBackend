const mongoose = require('mongoose');

const shippingServiceSchema = new mongoose.Schema(
  {
    // Shipper Information
    shipperName: {
      type: String,
      required: true,
    },
    shipperContactPerson: String,
    shipperAddress: String,
    cityOfOrigin: String,
    stateOfOrigin: String,
    postalCodeOrigin: String,

    // Recipient Information
    recipientName: {
      type: String,
      required: true,
    },
    recipientContactPerson: String,
    recipientPhone: String,
    recipientEmail: {
      type: String,
      match: /.+\@.+\..+/,
    },
    recipientAddress: String,
    destinationCity: String,
    destinationState: String,
    destinationCountry: {
      type: String,
      enum: [
        'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Spain', 'Italy',
        'Japan', 'China', 'India', 'Brazil', 'Mexico', 'South Korea', 'Netherlands', 'Switzerland',
        'Sweden', 'Norway', 'Belgium', 'Austria', 'Denmark', 'Finland', 'Poland', 'Russia',
        'Saudi Arabia', 'United Arab Emirates', 'Singapore', 'Malaysia', 'Thailand', 'Vietnam',
        'Philippines', 'Indonesia', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Egypt', 'South Africa',
        'Nigeria', 'Kenya'
      ],
      required: true,
    },
    postalCodeDestination: String,
    department: String,

    // Item Details
    itemDescription: {
      type: String,
      required: true,
    },
    numberOfPackages: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    dimensions: String,
    declaredValue: Number,

    // Shipping Method
    shippingMethod: {
      type: String,
      enum: ['Standard', 'Express', 'Overnight', 'International'],
      required: true,
    },
    urgentShipping: Boolean,
    trackingRequired: Boolean,
    fullInsurance: Boolean,

    // Dates
    preferredPickupDate: Date,
    preferredDeliveryDate: Date,

    additionalNotes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('ShippingService', shippingServiceSchema);
