const express = require('express');
const router = express.Router();
const transportationServiceController = require('../controllers/transportationServiceController');

/**
 * @swagger
 * /api/transportation-services:
 *   post:
 *     summary: Create a new transportation service request
 *     tags: [Transportation Services]
 */
router.post('/', transportationServiceController.createTransportationService);

/**
 * @swagger
 * /api/transportation-services:
 *   get:
 *     summary: Get all transportation service requests
 *     tags: [Transportation Services]
 */
router.get('/', transportationServiceController.getAllTransportationServices);

/**
 * @swagger
 * /api/transportation-services/{id}:
 *   get:
 *     summary: Get a specific transportation service request
 *     tags: [Transportation Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get('/:id', transportationServiceController.getTransportationServiceById);

/**
 * @swagger
 * /api/transportation-services/{id}:
 *   put:
 *     summary: Update a transportation service request
 *     tags: [Transportation Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.put('/:id', transportationServiceController.updateTransportationService);

/**
 * @swagger
 * /api/transportation-services/{id}:
 *   delete:
 *     summary: Delete a transportation service request
 *     tags: [Transportation Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.delete('/:id', transportationServiceController.deleteTransportationService);

module.exports = router;
