const express = require('express');
const router = express.Router();
const exploreUSAController = require('../controllers/exploreUSAController');

/**
 * @swagger
 * /api/programs/explore-usa:
 *   post:
 *     summary: Create a new Explore the USA booking
 *     tags: [Programs - Explore USA]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - emailAddress
 *               - phoneNumber
 *               - preferredContactMethod
 *               - tripStartDate
 *               - tripEndDate
 *               - numberOfTravelers
 *               - tripType
 *               - preferredGuidingLanguage
 *               - domesticFlightsNeeded
 *               - hotelAccommodationNeeded
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: John Smith
 *               emailAddress:
 *                 type: string
 *                 format: email
 *                 example: john@example.com
 *               phoneNumber:
 *                 type: string
 *                 example: +12025550123
 *               preferredContactMethod:
 *                 type: string
 *                 enum: [Email, Phone Number, Whatsapp]
 *               tripStartDate:
 *                 type: string
 *                 format: date
 *               tripEndDate:
 *                 type: string
 *                 format: date
 *               numberOfTravelers:
 *                 type: integer
 *                 example: 3
 *               tripType:
 *                 type: string
 *                 enum: [One Way, Round Trip, Hourly]
 *               preferredDestinations:
 *                 type: array
 *                 items:
 *                   type: string
 *                   enum: [Boston, San Francisco, Las Vegas, Hawaii, Houston, Texas, Miami Beaches, Grand Canyon, Walt Disney World, Yosemite National Park, White House, Other]
 *                 example: [Boston, Yosemite National Park]
 *               otherDestination:
 *                 type: string
 *                 example: New York City
 *               preferredGuidingLanguage:
 *                 type: string
 *                 enum: [English, Arabic, French, Spanish, German]
 *               budgetRange:
 *                 type: string
 *                 example: 3000-5000 USD
 *               domesticFlightsNeeded:
 *                 type: boolean
 *                 example: true
 *               hotelAccommodationNeeded:
 *                 type: boolean
 *                 example: true
 *               notesAndSpecialRequests:
 *                 type: string
 *                 example: Need wheelchair-friendly hotels and private transfer
 *               needAccommodation:
 *                 type: boolean
 *                 example: true
 */
router.post('/', exploreUSAController.createExploreUSA);

/**
 * @swagger
 * /api/programs/explore-usa:
 *   get:
 *     summary: Get all Explore the USA bookings
 *     tags: [Programs - Explore USA]
 */
router.get('/', exploreUSAController.getAllExploreUSA);

/**
 * @swagger
 * /api/programs/explore-usa/{id}:
 *   get:
 *     summary: Get a specific Explore the USA booking
 *     tags: [Programs - Explore USA]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get('/:id', exploreUSAController.getExploreUSAById);

/**
 * @swagger
 * /api/programs/explore-usa/{id}:
 *   put:
 *     summary: Update an Explore the USA booking
 *     tags: [Programs - Explore USA]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.put('/:id', exploreUSAController.updateExploreUSA);

/**
 * @swagger
 * /api/programs/explore-usa/{id}:
 *   delete:
 *     summary: Delete an Explore the USA booking
 *     tags: [Programs - Explore USA]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.delete('/:id', exploreUSAController.deleteExploreUSA);

module.exports = router;
