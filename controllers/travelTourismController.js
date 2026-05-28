const TravelTourism = require('../models/TravelTourism');

// CREATE
exports.createTravelTourism = async (req, res) => {
  try {
    const travel = new TravelTourism(req.body);
    await travel.save();
    res.status(201).json({
      success: true,
      message: 'Travel Tourism booking created successfully',
      data: travel,
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
    const travels = await TravelTourism.find();
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
    const travel = await TravelTourism.findById(req.params.id);
    if (!travel) {
      return res.status(404).json({
        success: false,
        message: 'Travel Tourism booking not found',
      });
    }
    res.status(200).json({
      success: true,
      data: travel,
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
    const travel = await TravelTourism.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
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
