const BusinessService = require('../models/BusinessService');

// CREATE
exports.createBusinessService = async (req, res) => {
  try {
    const business = new BusinessService(req.body);
    await business.save();
    res.status(201).json({
      success: true,
      message: 'Business Service request created successfully',
      data: business,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ALL
exports.getAllBusinessServices = async (req, res) => {
  try {
    const businesses = await BusinessService.find();
    res.status(200).json({
      success: true,
      count: businesses.length,
      data: businesses,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ONE
exports.getBusinessServiceById = async (req, res) => {
  try {
    const business = await BusinessService.findById(req.params.id);
    if (!business) {
      return res.status(404).json({
        success: false,
        message: 'Business Service not found',
      });
    }
    res.status(200).json({
      success: true,
      data: business,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
exports.updateBusinessService = async (req, res) => {
  try {
    const business = await BusinessService.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!business) {
      return res.status(404).json({
        success: false,
        message: 'Business Service not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Business Service updated successfully',
      data: business,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
exports.deleteBusinessService = async (req, res) => {
  try {
    const business = await BusinessService.findByIdAndDelete(req.params.id);
    if (!business) {
      return res.status(404).json({
        success: false,
        message: 'Business Service not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Business Service deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
