const express = require('express');
const router = express.Router();
const hajjUmrahController = require('../controllers/hajjUmrahController');

/**
 * @swagger
 * /api/programs/hajj-umrah:
 *   post:
 *     summary: Create a new Hajj & Umrah booking
 *     tags: [Programs - Hajj & Umrah]
 */
router.post('/', hajjUmrahController.createHajjUmrah);

/**
 * @swagger
 * /api/programs/hajj-umrah:
 *   get:
 *     summary: Get all Hajj & Umrah bookings
 *     tags: [Programs - Hajj & Umrah]
 */
router.get('/', hajjUmrahController.getAllHajjUmrah);

/**
 * @swagger
 * /api/programs/hajj-umrah/{id}:
 *   get:
 *     summary: Get a specific Hajj & Umrah booking
 *     tags: [Programs - Hajj & Umrah]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get('/:id', hajjUmrahController.getHajjUmrahById);

/**
 * @swagger
 * /api/programs/hajj-umrah/{id}:
 *   put:
 *     summary: Update a Hajj & Umrah booking
 *     tags: [Programs - Hajj & Umrah]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.put('/:id', hajjUmrahController.updateHajjUmrah);

/**
 * @swagger
 * /api/programs/hajj-umrah/{id}:
 *   delete:
 *     summary: Delete a Hajj & Umrah booking
 *     tags: [Programs - Hajj & Umrah]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.delete('/:id', hajjUmrahController.deleteHajjUmrah);

module.exports = router;
