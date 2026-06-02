const express = require('express');
const router = express.Router();
const travelTourismController = require('../controllers/travelTourismController');

/**
 * @swagger
 * /api/travel-tourism:
 *   post:
 *     summary: Create a new travel tourism booking
 *     tags: [Travel Tourism]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clientId
 *               - tripType
 *               - cabinClass
 *               - leavingFrom
 *               - goingTo
 *               - departingDate
 *             properties:
 *               clientId:
 *                 type: string
 *                 example: 665c8c7c3d1b4f0012345678
 *               tripType:
 *                 type: string
 *                 enum: [One Way, Round Trip, Multiple Destinations]
 *               cabinClass:
 *                 type: string
 *                 enum: [Economy, Premium, Business, First]
 *               leavingFrom:
 *                 type: string
 *                 example: Cairo
 *               goingTo:
 *                 type: string
 *                 example: Paris
 *               multipleDestinations:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: [Dubai, Paris, Rome]
 *               departingDate:
 *                 type: string
 *                 format: date
 *               returnDate:
 *                 type: string
 *                 format: date
 *               airline:
 *                 type: string
 *                 example: Emirates
 *               stops:
 *                 type: integer
 *                 minimum: 0
 *                 example: 0
 *               destinationFocus:
 *                 type: string
 *                 example: Leisure and shopping
 *               adult:
 *                 type: integer
 *                 minimum: 1
 *                 example: 2
 *               children:
 *                 type: integer
 *                 minimum: 0
 *                 example: 1
 *               infants:
 *                 type: integer
 *                 minimum: 0
 *                 example: 0
 *               preferredHotel:
 *                 type: string
 *                 example: Hilton Paris Opera
 *               roomType:
 *                 type: string
 *                 example: Double
 *               nights:
 *                 type: integer
 *                 minimum: 0
 *                 example: 5
 *               checkInDate:
 *                 type: string
 *                 format: date
 *               checkOutDate:
 *                 type: string
 *                 format: date
 *               mealPreference:
 *                 type: string
 *                 example: Breakfast
 *               pickupLocation:
 *                 type: string
 *                 example: Cairo International Airport
 *               dropoffLocation:
 *                 type: string
 *                 example: Hilton Paris Opera
 *               pickupDate:
 *                 type: string
 *                 format: date
 *               pickupTime:
 *                 type: string
 *                 example: 09:30 AM
 *               carRentalPickupDate:
 *                 type: string
 *                 format: date
 *               carRentalDropoffDate:
 *                 type: string
 *                 format: date
 *               carType:
 *                 type: string
 *                 example: SUV
 *               driverAge:
 *                 type: integer
 *                 minimum: 18
 *                 example: 32
 *               specialRequests:
 *                 type: string
 *                 example: Need baby seat and late hotel check-in
 *     responses:
 *       201:
 *         description: Travel booking created successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Client not found
 */
router.post('/', travelTourismController.createTravelTourism);

/**
 * @swagger
 * /api/travel-tourism:
 *   get:
 *     summary: Get all travel tourism bookings
 *     tags: [Travel Tourism]
 *     responses:
 *       200:
 *         description: List of travel bookings with linked client details
 */
router.get('/', travelTourismController.getAllTravelTourism);

/**
 * @swagger
 * /api/travel-tourism/{id}:
 *   get:
 *     summary: Get a specific travel tourism booking
 *     tags: [Travel Tourism]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Travel booking with linked client details
 *       404:
 *         description: Travel booking not found
 */
router.get('/:id', travelTourismController.getTravelTourismById);

/**
 * @swagger
 * /api/travel-tourism/{id}:
 *   put:
 *     summary: Update a travel tourism booking
 *     tags: [Travel Tourism]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Travel booking updated successfully
 *       404:
 *         description: Travel booking or client not found
 */
router.put('/:id', travelTourismController.updateTravelTourism);

/**
 * @swagger
 * /api/travel-tourism/{id}:
 *   delete:
 *     summary: Delete a travel tourism booking
 *     tags: [Travel Tourism]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Travel booking deleted successfully
 *       404:
 *         description: Travel booking not found
 */
router.delete('/:id', travelTourismController.deleteTravelTourism);

module.exports = router;
