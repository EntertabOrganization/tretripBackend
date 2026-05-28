const ShippingService = require('../models/ShippingService');

// CREATE
exports.createShippingService = async (req, res) => {
  try {
    const shipping = new ShippingService(req.body);
    await shipping.save();
    res.status(201).json({
      success: true,
      message: 'Shipping Service request created successfully',
      data: shipping,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ALL
exports.getAllShippingServices = async (req, res) => {
  try {
    const shippings = await ShippingService.find();
    res.status(200).json({
      success: true,
      count: shippings.length,
      data: shippings,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ONE
exports.getShippingServiceById = async (req, res) => {
  try {
    const shipping = await ShippingService.findById(req.params.id);
    if (!shipping) {
      return res.status(404).json({
        success: false,
        message: 'Shipping Service not found',
      });
    }
    res.status(200).json({
      success: true,
      data: shipping,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
exports.updateShippingService = async (req, res) => {
  try {
    const shipping = await ShippingService.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!shipping) {
      return res.status(404).json({
        success: false,
        message: 'Shipping Service not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Shipping Service updated successfully',
      data: shipping,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
exports.deleteShippingService = async (req, res) => {
  try {
    const shipping = await ShippingService.findByIdAndDelete(req.params.id);
    if (!shipping) {
      return res.status(404).json({
        success: false,
        message: 'Shipping Service not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Shipping Service deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
