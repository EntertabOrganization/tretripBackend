const express = require('express');
const router = express.Router();
const exploreKingdomController = require('../controllers/exploreKingdomController');

/**
 * @swagger
 * /api/programs/explore-kingdom:
 *   post:
 *     summary: Create a new Explore the Kingdom booking
 *     tags: [Programs - Explore Kingdom]
 */
router.post('/', exploreKingdomController.createExploreKingdom);

/**
 * @swagger
 * /api/programs/explore-kingdom:
 *   get:
 *     summary: Get all Explore the Kingdom bookings
 *     tags: [Programs - Explore Kingdom]
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
 */
router.delete('/:id', exploreKingdomController.deleteExploreKingdom);

module.exports = router;
