const express = require('express');
const router = express.Router();
const businessServiceController = require('../controllers/businessServiceController');

/**
 * @swagger
 * /api/business-services:
 *   post:
 *     summary: Create a new business service request
 *     tags: [Business Services]
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
