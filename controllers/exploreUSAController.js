const ExploreUSA = require('../models/ExploreUSA');

// CREATE
exports.createExploreUSA = async (req, res) => {
  try {
    const explore = new ExploreUSA(req.body);
    await explore.save();
    res.status(201).json({
      success: true,
      message: 'Explore the USA booking created successfully',
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
exports.getAllExploreUSA = async (req, res) => {
  try {
    const explores = await ExploreUSA.find();
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
exports.getExploreUSAById = async (req, res) => {
  try {
    const explore = await ExploreUSA.findById(req.params.id);
    if (!explore) {
      return res.status(404).json({
        success: false,
        message: 'Explore the USA booking not found',
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
exports.updateExploreUSA = async (req, res) => {
  try {
    const explore = await ExploreUSA.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!explore) {
      return res.status(404).json({
        success: false,
        message: 'Explore the USA booking not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Explore the USA booking updated successfully',
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
exports.deleteExploreUSA = async (req, res) => {
  try {
    const explore = await ExploreUSA.findByIdAndDelete(req.params.id);
    if (!explore) {
      return res.status(404).json({
        success: false,
        message: 'Explore the USA booking not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Explore the USA booking deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
