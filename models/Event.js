const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    organization: {
      type: String,
      required: true,
    },
    position: String,
    eventName: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      enum: ['Corporate', 'Wedding', 'Conference', 'Exhibition', 'Cultural Event', 'Private Party', 'Other'],
      required: true,
    },
    theme: String,
    preferredDates: [Date],
    duration: String,
    expectedAttendees: {
      type: String,
      enum: ['1-50', '51-100', '101-250', '251-500', '501-1000', '1000+'],
    },
    targetAudience: String,
    preferredVenue: String,
    city: String,
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
    },
    indoorOutdoor: {
      type: String,
      enum: ['Indoor', 'Outdoor', 'Both'],
    },
    venueSuggestionsNeeded: Boolean,
    bookingSupportNeeded: Boolean,
    coreServices: [{
      type: String,
      enum: ['Venue Booking', 'A/V Setup', 'Catering', 'Stage Design'],
    }],
    additionalServices: [{
      type: String,
      enum: ['Branding & Printing', 'Decoration', 'Entertainment/Speakers', 'Guest Management', 'Transportation', 'Security', 'Photography/Videography', 'Other'],
    }],
    estimatedBudget: Number,
    additionalNotes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
