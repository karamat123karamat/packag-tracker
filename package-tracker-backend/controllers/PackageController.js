const PackageService = require("../services/PackageService");
 
const getAllPackages = async (req, res) => {
  try {
    const packages = await PackageService.getAllPackages();
    res.json({ data: packages, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
const createPackage = async (req, res) => {
  try {
    const package = await PackageService.createPackage(req.body);
    res.json({ data: package, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
const getPackageById = async (req, res) => {
  try {
    const package = await PackageService.getPackageById(req.params.id);
    res.json({ data: package, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
const updatePackage = async (req, res) => {
  try {
    const package = await PackageService.updatePackage(req.params.id, req.body);
    res.json({ data: package, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
const deletePackage = async (req, res) => {
  try {
    const package = await PackageService.deletePackage(req.params.id);
    res.json({ data: package, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllPackages,
  createPackage,
  getPackageById,
  updatePackage,
  deletePackage
}