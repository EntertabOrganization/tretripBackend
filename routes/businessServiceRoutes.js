const express = require('express');
const router = express.Router();
const businessServiceController = require('../controllers/businessServiceController');

/**
 * @swagger
 * /api/business-services:
 *   post:
 *     summary: Create a new business service request
 *     tags: [Business Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - dateOfBirth
 *               - passportNumber
 *               - gender
 *               - countryOfDeparture
 *               - destinationCountryCity
 *               - jobTitle
 *               - companyName
 *               - preferredDepartureDate
 *               - travelAlone
 *             properties:
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *               passportNumber:
 *                 type: string
 *                 example: A12345678
 *               gender:
 *                 type: string
 *                 enum: [Male, Female]
 *               countryOfDeparture:
 *                 type: string
 *                 example: Egypt
 *               destinationCountryCity:
 *                 type: string
 *                 example: Riyadh, Saudi Arabia
 *               jobTitle:
 *                 type: string
 *                 example: Sales Director
 *               companyName:
 *                 type: string
 *                 example: Tretrip
 *               companyIndustry:
 *                 type: string
 *                 example: Travel and tourism
 *               preferredDepartureDate:
 *                 type: string
 *                 format: date
 *               preferredReturnDate:
 *                 type: string
 *                 format: date
 *               travelAlone:
 *                 type: boolean
 *                 example: true
 *               specialInstructions:
 *                 type: string
 *                 example: Need support for a corporate event and hotel near venue
 *               requiredSupportServices:
 *                 type: array
 *                 items:
 *                   type: string
 *                   enum: [Venue Booking, A/V Setup, Branding & Printing, Decoration, Catering, Stage Design, Transportation, Security]
 *                 example: [Venue Booking, A/V Setup, Transportation]
 *               additionalNotes:
 *                 type: string
 *                 example: VIP airport pickup required
 */
router.post('/', businessServiceController.createBusinessService);

/**
 * @swagger
 * /api/business-services:
 *   get:
 *     summary: Get all business service requests
 *     tags: [Business Services]
 */
router.get('/', businessServiceController.getAllBusinessServices);

/**
 * @swagger
 * /api/business-services/{id}:
 *   get:
 *     summary: Get a specific business service request
 *     tags: [Business Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get('/:id', businessServiceController.getBusinessServiceById);

/**
 * @swagger
 * /api/business-services/{id}:
 *   put:
 *     summary: Update a business service request
 *     tags: [Business Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.put('/:id', businessServiceController.updateBusinessService);

/**
 * @swagger
 * /api/business-services/{id}:
 *   delete:
 *     summary: Delete a business service request
 *     tags: [Business Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.delete('/:id', businessServiceController.deleteBusinessService);

module.exports = router;
