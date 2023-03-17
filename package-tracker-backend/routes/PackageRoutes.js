const express = require("express");

const {
    getAllPackages,
    createPackage,
    getPackageById,
    updatePackage,
    deletePackage,
  } = require("../controllers/PackageController");

const router = express.Router();
 
router.route("/").get(getAllPackages).post(createPackage);
router.route("/:id").get(getPackageById).put(updatePackage).delete(deletePackage);
 
module.exports = router;