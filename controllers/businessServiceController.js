const BusinessService = require('../models/BusinessService');
const Client = require('../models/Client');

// CREATE
exports.createBusinessService = async (req, res) => {
  try {
    const client = await Client.findById(req.body.clientId);
    if (!client) {
      return res.status(404).json({
        success: false,
        message: 'Client not found',
      });
    }

    const business = new BusinessService(req.body);
    await business.save();

    const populatedBusiness = await BusinessService.findById(business._id).populate(
      'clientId',
      'fullName phoneNumber emailAddress status'
    );

    res.status(201).json({
      success: true,
      message: 'Business Service request created successfully',
      data: populatedBusiness,
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
    const businesses = await BusinessService.find().populate(
      'clientId',
      'fullName phoneNumber emailAddress status'
    );
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
    const business = await BusinessService.findById(req.params.id).populate(
      'clientId',
      'fullName phoneNumber emailAddress status'
    );
    if (!business) {
      return res.status(404).json({
        success: false,
        message: 'Business Service not found',
      });
    }
    res.status(200).json({
      success: true,
      data: {
        business,
        client: business.clientId,
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
exports.updateBusinessService = async (req, res) => {
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

    const business = await BusinessService.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('clientId', 'fullName phoneNumber emailAddress status');
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
