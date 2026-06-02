const express = require('express');
const router = express.Router();
const hajjUmrahController = require('../controllers/hajjUmrahController');

/**
 * @swagger
 * /api/programs/hajj-umrah:
 *   post:
 *     summary: Create a new Hajj & Umrah booking
 *     tags: [Programs - Hajj & Umrah]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - emailAddress
 *               - phoneNumber
 *               - passportNumber
 *               - pilgrimageDate
 *               - accommodationClass
 *               - groupSize
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: Ahmed Ali
 *               emailAddress:
 *                 type: string
 *                 format: email
 *                 example: ahmed@example.com
 *               phoneNumber:
 *                 type: string
 *                 example: +201001234567
 *               preferredContactMethod:
 *                 type: string
 *                 enum: [Email, Phone Number, Whatsapp]
 *               passportNumber:
 *                 type: string
 *                 example: A12345678
 *               pilgrimageDate:
 *                 type: string
 *                 format: date
 *               accommodationClass:
 *                 type: string
 *                 enum: [Economy / Budget Class, Standard / 3-Star Class, Premium / 4-Star Class, Luxury / 5-Star Class]
 *               groupSize:
 *                 type: string
 *                 enum: [1 Person, 2-4 People, 5-8 People, 9-12 People, 13+ People]
 *               notes:
 *                 type: string
 *                 example: Need assistance for elderly traveler
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
