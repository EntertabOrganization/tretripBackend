const express = require('express');
const router = express.Router();
const exploreUSAController = require('../controllers/exploreUSAController');

/**
 * @swagger
 * /api/programs/explore-usa:
 *   post:
 *     summary: Create a new Explore the USA booking
 *     tags: [Programs - Explore USA]
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
