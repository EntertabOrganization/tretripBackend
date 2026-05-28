const express = require('express');
const router = express.Router();
const travelTourismController = require('../controllers/travelTourismController');

/**
 * @swagger
 * /api/travel-tourism:
 *   post:
 *     summary: Create a new travel tourism booking
 *     tags: [Travel Tourism]
 */
router.post('/', travelTourismController.createTravelTourism);

/**
 * @swagger
 * /api/travel-tourism:
 *   get:
 *     summary: Get all travel tourism bookings
 *     tags: [Travel Tourism]
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
 */
router.delete('/:id', travelTourismController.deleteTravelTourism);

module.exports = router;
