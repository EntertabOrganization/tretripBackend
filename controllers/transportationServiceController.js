const TransportationService = require('../models/TransportationService');

// CREATE
exports.createTransportationService = async (req, res) => {
  try {
    const transportation = new TransportationService(req.body);
    await transportation.save();
    res.status(201).json({
      success: true,
      message: 'Transportation Service request created successfully',
      data: transportation,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ALL
exports.getAllTransportationServices = async (req, res) => {
  try {
    const transportations = await TransportationService.find();
    res.status(200).json({
      success: true,
      count: transportations.length,
      data: transportations,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ONE
exports.getTransportationServiceById = async (req, res) => {
  try {
    const transportation = await TransportationService.findById(req.params.id);
    if (!transportation) {
      return res.status(404).json({
        success: false,
        message: 'Transportation Service not found',
      });
    }
    res.status(200).json({
      success: true,
      data: transportation,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
exports.updateTransportationService = async (req, res) => {
  try {
    const transportation = await TransportationService.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!transportation) {
      return res.status(404).json({
        success: false,
        message: 'Transportation Service not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Transportation Service updated successfully',
      data: transportation,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
exports.deleteTransportationService = async (req, res) => {
  try {
    const transportation = await TransportationService.findByIdAndDelete(req.params.id);
    if (!transportation) {
      return res.status(404).json({
        success: false,
        message: 'Transportation Service not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Transportation Service deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
