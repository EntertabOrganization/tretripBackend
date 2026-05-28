const express = require('express');
const router = express.Router();
const shippingServiceController = require('../controllers/shippingServiceController');

/**
 * @swagger
 * /api/shipping-services:
 *   post:
 *     summary: Create a new shipping service request
 *     tags: [Shipping Services]
 */
router.post('/', shippingServiceController.createShippingService);

/**
 * @swagger
 * /api/shipping-services:
 *   get:
 *     summary: Get all shipping service requests
 *     tags: [Shipping Services]
 */
router.get('/', shippingServiceController.getAllShippingServices);

/**
 * @swagger
 * /api/shipping-services/{id}:
 *   get:
 *     summary: Get a specific shipping service request
 *     tags: [Shipping Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get('/:id', shippingServiceController.getShippingServiceById);

/**
 * @swagger
 * /api/shipping-services/{id}:
 *   put:
 *     summary: Update a shipping service request
 *     tags: [Shipping Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.put('/:id', shippingServiceController.updateShippingService);

/**
 * @swagger
 * /api/shipping-services/{id}:
 *   delete:
 *     summary: Delete a shipping service request
 *     tags: [Shipping Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.delete('/:id', shippingServiceController.deleteShippingService);

module.exports = router;
