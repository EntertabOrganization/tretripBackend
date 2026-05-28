const MedicalTourism = require('../models/MedicalTourism');

// CREATE
exports.createMedicalTourism = async (req, res) => {
  try {
    const medical = new MedicalTourism(req.body);
    await medical.save();
    res.status(201).json({
      success: true,
      message: 'Medical Tourism booking created successfully',
      data: medical,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ALL
exports.getAllMedicalTourism = async (req, res) => {
  try {
    const medicals = await MedicalTourism.find();
    res.status(200).json({
      success: true,
      count: medicals.length,
      data: medicals,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// READ ONE
exports.getMedicalTourismById = async (req, res) => {
  try {
    const medical = await MedicalTourism.findById(req.params.id);
    if (!medical) {
      return res.status(404).json({
        success: false,
        message: 'Medical Tourism booking not found',
      });
    }
    res.status(200).json({
      success: true,
      data: medical,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE
exports.updateMedicalTourism = async (req, res) => {
  try {
    const medical = await MedicalTourism.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!medical) {
      return res.status(404).json({
        success: false,
        message: 'Medical Tourism booking not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Medical Tourism booking updated successfully',
      data: medical,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE
exports.deleteMedicalTourism = async (req, res) => {
  try {
    const medical = await MedicalTourism.findByIdAndDelete(req.params.id);
    if (!medical) {
      return res.status(404).json({
        success: false,
        message: 'Medical Tourism booking not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Medical Tourism booking deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
