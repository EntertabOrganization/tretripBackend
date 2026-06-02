const express = require('express');
const router = express.Router();
const exploreKingdomController = require('../controllers/exploreKingdomController');

/**
 * @swagger
 * /api/programs/explore-kingdom:
 *   post:
 *     summary: Create a new Explore the Kingdom booking
 *     tags: [Programs - Explore Kingdom]
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
 *                 example: Sara Khaled
 *               emailAddress:
 *                 type: string
 *                 format: email
 *                 example: sara@example.com
 *               phoneNumber:
 *                 type: string
 *                 example: +966500000000
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
 *                 example: 4
 *               tripType:
 *                 type: string
 *                 enum: [One Way, Round Trip, Hourly]
 *               preferredDestinations:
 *                 type: array
 *                 items:
 *                   type: string
 *                   enum: [Al Souda, Ragal Almaa, AlUla, Mecca, Diriyah, Medina, Other]
 *                 example: [AlUla, Diriyah]
 *               otherDestination:
 *                 type: string
 *                 example: Tabuk
 *               preferredGuidingLanguage:
 *                 type: string
 *                 enum: [Arabic, English, French, Spanish, German]
 *               budgetRange:
 *                 type: string
 *                 example: 5000-7000 SAR
 *               domesticFlightsNeeded:
 *                 type: boolean
 *                 example: true
 *               hotelAccommodationNeeded:
 *                 type: boolean
 *                 example: true
 *               notesAndSpecialRequests:
 *                 type: string
 *                 example: Need family-friendly itinerary
 *     responses:
 *       201:
 *         description: Explore the Kingdom booking created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', exploreKingdomController.createExploreKingdom);

/**
 * @swagger
 * /api/programs/explore-kingdom:
 *   get:
 *     summary: Get all Explore the Kingdom bookings
 *     tags: [Programs - Explore Kingdom]
 *     responses:
 *       200:
 *         description: List of Explore the Kingdom bookings
 */
router.get('/', exploreKingdomController.getAllExploreKingdom);

/**
 * @swagger
 * /api/programs/explore-kingdom/{id}:
 *   get:
 *     summary: Get a specific Explore the Kingdom booking
 *     tags: [Programs - Explore Kingdom]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Explore the Kingdom booking details
 *       404:
 *         description: Explore the Kingdom booking not found
 */
router.get('/:id', exploreKingdomController.getExploreKingdomById);

/**
 * @swagger
 * /api/programs/explore-kingdom/{id}:
 *   put:
 *     summary: Update an Explore the Kingdom booking
 *     tags: [Programs - Explore Kingdom]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Explore the Kingdom booking updated successfully
 *       404:
 *         description: Explore the Kingdom booking not found
 */
router.put('/:id', exploreKingdomController.updateExploreKingdom);

/**
 * @swagger
 * /api/programs/explore-kingdom/{id}:
 *   delete:
 *     summary: Delete an Explore the Kingdom booking
 *     tags: [Programs - Explore Kingdom]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Explore the Kingdom booking deleted successfully
 *       404:
 *         description: Explore the Kingdom booking not found
 */
router.delete('/:id', exploreKingdomController.deleteExploreKingdom);

module.exports = router;
