const express = require('express');
const router = express.Router();
const medicalTourismController = require('../controllers/medicalTourismController');

/**
 * @swagger
 * /api/medical-tourism:
 *   post:
 *     summary: Create a new medical tourism booking
 *     tags: [Medical Tourism]
 */
router.post('/', medicalTourismController.createMedicalTourism);

/**
 * @swagger
 * /api/medical-tourism:
 *   get:
 *     summary: Get all medical tourism bookings
 *     tags: [Medical Tourism]
 */
router.get('/', medicalTourismController.getAllMedicalTourism);

/**
 * @swagger
 * /api/medical-tourism/{id}:
 *   get:
 *     summary: Get a specific medical tourism booking
 *     tags: [Medical Tourism]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.get('/:id', medicalTourismController.getMedicalTourismById);

/**
 * @swagger
 * /api/medical-tourism/{id}:
 *   put:
 *     summary: Update a medical tourism booking
 *     tags: [Medical Tourism]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.put('/:id', medicalTourismController.updateMedicalTourism);

/**
 * @swagger
 * /api/medical-tourism/{id}:
 *   delete:
 *     summary: Delete a medical tourism booking
 *     tags: [Medical Tourism]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.delete('/:id', medicalTourismController.deleteMedicalTourism);

module.exports = router;
