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
 *               - clientId
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
 *               clientId:
 *                 type: string
 *                 example: 665c8c7c3d1b4f0012345678
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
 *     responses:
 *       201:
 *         description: Business service request created successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Client not found
 */
router.post('/', businessServiceController.createBusinessService);

/**
 * @swagger
 * /api/business-services:
 *   get:
 *     summary: Get all business service requests
 *     tags: [Business Services]
 *     responses:
 *       200:
 *         description: List of business requests with linked client details
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
 *     responses:
 *       200:
 *         description: Business request with linked client details
 *       404:
 *         description: Business request not found
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
 *     responses:
 *       200:
 *         description: Business request updated successfully
 *       404:
 *         description: Business request or client not found
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
 *     responses:
 *       200:
 *         description: Business request deleted successfully
 *       404:
 *         description: Business request not found
 */
router.delete('/:id', businessServiceController.deleteBusinessService);

module.exports = router;
