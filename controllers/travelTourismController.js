const TravelTourism = require('../models/TravelTourism');
const Client = require('../models/Client');

// CREATE
exports.createTravelTourism = async (req, res) => {
  try {
    const client = await Client.findById(req.body.clientId);
    if (!client) {
      return res.status(404).json({
        success: false,
        message: 'Client not found',
      });
    }

    const travel = new TravelTourism(req.body);
    await travel.save();

    const populatedTravel = await TravelTourism.findById(travel._id).populate(
      'clientId',
      'fullName phoneNumber emailAddress status'
    );

    res.status(201).json({
      success: true,
      message: 'Travel Tourism booking created successfully',
      data: populatedTravel,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ALL
exports.getAllTravelTourism = async (req, res) => {
  try {
    const travels = await TravelTourism.find().populate(
      'clientId',
      'fullName phoneNumber emailAddress status'
    );
    res.status(200).json({
      success: true,
      count: travels.length,
      data: travels,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ONE
exports.getTravelTourismById = async (req, res) => {
  try {
    const travel = await TravelTourism.findById(req.params.id).populate(
      'clientId',
      'fullName phoneNumber emailAddress status'
    );
    if (!travel) {
      return res.status(404).json({
        success: false,
        message: 'Travel Tourism booking not found',
      });
    }
    res.status(200).json({
      success: true,
      data: {
        travel,
        client: travel.clientId,
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
exports.updateTravelTourism = async (req, res) => {
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

    const travel = await TravelTourism.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('clientId', 'fullName phoneNumber emailAddress status');
    if (!travel) {
      return res.status(404).json({
        success: false,
        message: 'Travel Tourism booking not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Travel Tourism booking updated successfully',
      data: travel,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
exports.deleteTravelTourism = async (req, res) => {
  try {
    const travel = await TravelTourism.findByIdAndDelete(req.params.id);
    if (!travel) {
      return res.status(404).json({
        success: false,
        message: 'Travel Tourism booking not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Travel Tourism booking deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
