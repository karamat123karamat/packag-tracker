const Package = require('../models/Package')

const getAllPackages = async () => {
    return await Package.find();
};
   
const createPackage = async (package) => {
    return await Package.create(package);
};

const getPackageById = async (id) => {
    return await Package.findById(id).populate("active_delivery_id");
};

const updatePackage = async (id, package) => {
    return await Package.findByIdAndUpdate(id, package, {new: true});
};

const deletePackage = async (id) => {
    return await Package.findByIdAndDelete(id);
};

module.exports = {
    getAllPackages,
    createPackage,
    getPackageById,
    updatePackage,
    deletePackage
}