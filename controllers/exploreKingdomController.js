const ExploreKingdom = require('../models/ExploreKingdom');

// CREATE
exports.createExploreKingdom = async (req, res) => {
  try {
    const explore = new ExploreKingdom(req.body);
    await explore.save();
    res.status(201).json({
      success: true,
      message: 'Explore the Kingdom booking created successfully',
      data: explore,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ALL
exports.getAllExploreKingdom = async (req, res) => {
  try {
    const explores = await ExploreKingdom.find();
    res.status(200).json({
      success: true,
      count: explores.length,
      data: explores,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ONE
exports.getExploreKingdomById = async (req, res) => {
  try {
    const explore = await ExploreKingdom.findById(req.params.id);
    if (!explore) {
      return res.status(404).json({
        success: false,
        message: 'Explore the Kingdom booking not found',
      });
    }
    res.status(200).json({
      success: true,
      data: explore,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
exports.updateExploreKingdom = async (req, res) => {
  try {
    const explore = await ExploreKingdom.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!explore) {
      return res.status(404).json({
        success: false,
        message: 'Explore the Kingdom booking not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Explore the Kingdom booking updated successfully',
      data: explore,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
exports.deleteExploreKingdom = async (req, res) => {
  try {
    const explore = await ExploreKingdom.findByIdAndDelete(req.params.id);
    if (!explore) {
      return res.status(404).json({
        success: false,
        message: 'Explore the Kingdom booking not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Explore the Kingdom booking deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
