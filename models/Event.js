const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: true,
    },
    organization: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: String,
      required: true,
      trim: true,
    },
    eventName: {
      type: String,
      required: true,
      trim: true,
    },
    eventType: {
      type: String,
      enum: ['Corporate', 'Wedding', 'Conference', 'Exhibition', 'Cultural Event', 'Private Party', 'Other'],
      required: true,
    },
    theme: {
      type: String,
      trim: true,
    },
    preferredDate: {
      type: Date,
      required: true,
    },
    duration: {
      type: String,
      required: true,
      trim: true,
    },
    expectedAttendees: {
      type: String,
      enum: ['1-50', '51-100', '101-250', '251-500', '501-1000', '1000+'],
      required: true,
    },
    targetAudience: {
      type: String,
      required: true,
      trim: true,
    },
    preferredVenue: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
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
    indoorOutdoor: {
      type: String,
      enum: ['Indoor', 'Outdoor', 'Both'],
      required: true,
    },
    venueSuggestionsNeeded: {
      type: Boolean,
      required: true,
    },
    bookingSupportNeeded: {
      type: Boolean,
      required: true,
    },
    coreServices: [
      {
        type: String,
        enum: ['Venue Booking', 'A/V Setup', 'Catering', 'Stage Design'],
      },
    ],
    additionalServices: [
      {
        type: String,
        enum: ['Branding & Printing', 'Decoration', 'Entertainment/Speakers', 'Guest Management', 'Transportation', 'Security', 'Photography/Videography', 'Other'],
      },
    ],
    additionalServicesOther: {
      type: String,
      trim: true,
    },
    estimatedBudget: {
      type: Number,
      min: 0,
    },
    additionalNotes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
