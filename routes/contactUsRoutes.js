const express = require('express');
const router = express.Router();
const contactUsController = require('../controllers/contactUsController');

/**
 * @swagger
 * /api/contact-us:
 *   post:
 *     summary: Create a new contact message
 *     tags: [Contact Us]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - emailAddress
 *               - serviceType
 *               - message
 *             properties:
 *               fullName:
 *                 type: string
 *               emailAddress:
 *                 type: string
 *               phoneNumber:
 *                 type: string
 *               serviceType:
 *                 type: string
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contact message created successfully
 */
router.post('/', contactUsController.createContact);

/**
 * @swagger
 * /api/contact-us:
 *   get:
 *     summary: Get all contact messages
 *     tags: [Contact Us]
 *     responses:
 *       200:
 *         description: List of all contact messages
 */
router.get('/', contactUsController.getAllContacts);

/**
 * @swagger
 * /api/contact-us/{id}:
 *   get:
 *     summary: Get a specific contact message
 *     tags: [Contact Us]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact message details
 *       404:
 *         description: Contact message not found
 */
router.get('/:id', contactUsController.getContactById);

/**
 * @swagger
 * /api/contact-us/{id}:
 *   put:
 *     summary: Update a contact message
 *     tags: [Contact Us]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Contact message updated successfully
 *       404:
 *         description: Contact message not found
 */
router.put('/:id', contactUsController.updateContact);

/**
 * @swagger
 * /api/contact-us/{id}:
 *   delete:
 *     summary: Delete a contact message
 *     tags: [Contact Us]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contact message deleted successfully
 *       404:
 *         description: Contact message not found
 */
router.delete('/:id', contactUsController.deleteContact);

module.exports = router;
