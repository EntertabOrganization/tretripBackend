const HajjUmrah = require('../models/HajjUmrah');

// CREATE
exports.createHajjUmrah = async (req, res) => {
  try {
    const hajj = new HajjUmrah(req.body);
    await hajj.save();
    res.status(201).json({
      success: true,
      message: 'Hajj & Umrah booking created successfully',
      data: hajj,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ALL
exports.getAllHajjUmrah = async (req, res) => {
  try {
    const hajjs = await HajjUmrah.find();
    res.status(200).json({
      success: true,
      count: hajjs.length,
      data: hajjs,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ONE
exports.getHajjUmrahById = async (req, res) => {
  try {
    const hajj = await HajjUmrah.findById(req.params.id);
    if (!hajj) {
      return res.status(404).json({
        success: false,
        message: 'Hajj & Umrah booking not found',
      });
    }
    res.status(200).json({
      success: true,
      data: hajj,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
exports.updateHajjUmrah = async (req, res) => {
  try {
    const hajj = await HajjUmrah.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!hajj) {
      return res.status(404).json({
        success: false,
        message: 'Hajj & Umrah booking not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Hajj & Umrah booking updated successfully',
      data: hajj,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
exports.deleteHajjUmrah = async (req, res) => {
  try {
    const hajj = await HajjUmrah.findByIdAndDelete(req.params.id);
    if (!hajj) {
      return res.status(404).json({
        success: false,
        message: 'Hajj & Umrah booking not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Hajj & Umrah booking deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
