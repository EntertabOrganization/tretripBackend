const Event = require('../models/Event');
const Client = require('../models/Client');

// CREATE
exports.createEvent = async (req, res) => {
  try {
    const client = await Client.findById(req.body.clientId);
    if (!client) {
      return res.status(404).json({
        success: false,
        message: 'Client not found',
      });
    }

    const event = new Event(req.body);
    await event.save();

    const populatedEvent = await Event.findById(event._id).populate(
      'clientId',
      'fullName phoneNumber emailAddress status'
    );

    res.status(201).json({
      success: true,
      message: 'Event created successfully',
      data: populatedEvent,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ALL
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate(
      'clientId',
      'fullName phoneNumber emailAddress status'
    );
    res.status(200).json({
      success: true,
      count: events.length,
      data: events,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ONE
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate(
      'clientId',
      'fullName phoneNumber emailAddress status'
    );
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }
    res.status(200).json({
      success: true,
      data: {
        event,
        client: event.clientId,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
exports.updateEvent = async (req, res) => {
  try {
    if (req.body.clientId) {
      const client = await Client.findById(req.body.clientId);
      if (!client) {
        return res.status(404).json({
          success: false,
          message: 'Client not found',
        });
      }
    }

    const event = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('clientId', 'fullName phoneNumber emailAddress status');
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Event updated successfully',
      data: event,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Event deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
