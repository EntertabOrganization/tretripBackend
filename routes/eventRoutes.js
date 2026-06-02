const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

/**
 * @swagger
 * /api/events:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clientId
 *               - organization
 *               - position
 *               - eventName
 *               - eventType
 *               - preferredDate
 *               - duration
 *               - expectedAttendees
 *               - targetAudience
 *               - city
 *               - country
 *               - indoorOutdoor
 *               - venueSuggestionsNeeded
 *               - bookingSupportNeeded
 *             properties:
 *               clientId:
 *                 type: string
 *                 example: 665c8c7c3d1b4f0012345678
 *               organization:
 *                 type: string
 *                 example: Tretrip
 *               position:
 *                 type: string
 *                 example: Marketing Manager
 *               eventName:
 *                 type: string
 *                 example: Annual Business Summit 2026
 *               eventType:
 *                 type: string
 *                 enum: [Corporate, Wedding, Conference, Exhibition, Cultural Event, Private Party, Other]
 *               theme:
 *                 type: string
 *                 example: Innovation and Growth
 *               preferredDate:
 *                 type: string
 *                 format: date
 *               duration:
 *                 type: string
 *                 example: 4 hours
 *               expectedAttendees:
 *                 type: string
 *                 enum: [1-50, 51-100, 101-250, 251-500, 501-1000, 1000+]
 *               targetAudience:
 *                 type: string
 *                 example: Corporate partners and executive clients
 *               preferredVenue:
 *                 type: string
 *                 example: Ritz-Carlton Ballroom
 *               city:
 *                 type: string
 *                 example: Riyadh
 *               country:
 *                 type: string
 *                 example: Saudi Arabia
 *               indoorOutdoor:
 *                 type: string
 *                 enum: [Indoor, Outdoor, Both]
 *               venueSuggestionsNeeded:
 *                 type: boolean
 *                 example: true
 *               bookingSupportNeeded:
 *                 type: boolean
 *                 example: true
 *               coreServices:
 *                 type: array
 *                 items:
 *                   type: string
 *                   enum: [Venue Booking, A/V Setup, Catering, Stage Design]
 *                 example: [Venue Booking, A/V Setup]
 *               additionalServices:
 *                 type: array
 *                 items:
 *                   type: string
 *                   enum: [Branding & Printing, Decoration, Entertainment/Speakers, Guest Management, Transportation, Security, Photography/Videography, Other]
 *                 example: [Transportation, Security, Other]
 *               additionalServicesOther:
 *                 type: string
 *                 example: Live translation support
 *               estimatedBudget:
 *                 type: number
 *                 minimum: 0
 *                 example: 25000
 *               additionalNotes:
 *                 type: string
 *                 example: Need VIP guest handling and branded registration desk
 *     responses:
 *       201:
 *         description: Event created successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Client not found
 */
router.post('/', eventController.createEvent);

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: List of events with linked client details
 */
router.get('/', eventController.getAllEvents);

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     summary: Get a specific event
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Event with linked client details
 *       404:
 *         description: Event not found
 */
router.get('/:id', eventController.getEventById);

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     summary: Update an event
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Event updated successfully
 *       404:
 *         description: Event or client not found
 */
router.put('/:id', eventController.updateEvent);

/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     summary: Delete an event
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Event deleted successfully
 *       404:
 *         description: Event not found
 */
router.delete('/:id', eventController.deleteEvent);

module.exports = router;
