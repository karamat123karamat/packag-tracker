const Delivery = require('../models/Delivery')
const Package  = require('../models/Package')

const getAllDeliveries = async () => {
    return await Delivery.find();
  };
   
const createDelivery = async (deliveryBody) => {
    delivery = await Delivery.create(deliveryBody);
    await Package.findByIdAndUpdate(delivery.package_id, {active_delivery_id: delivery._id})
    return delivery
};
const getDeliveryById = async (id) => {
    return await Delivery.findById(id).populate("package_id");
};

const updateDeliveryStatus = async (id, status) => {
    var date_time = new Date();
    
    if (["in-transit", "failed"].includes("status")) {
        return await Delivery.findByIdAndUpdate(id, {status: status, end_time: date_time}, {new: true}).populate("package_id");
    } else {
        return await Delivery.findByIdAndUpdate(id, {status: status, picked_up: date_time, start_time: date_time}, {new: true}).populate("package_id");
    }
};

const updateDelivery = async (id, delivery) => {
    return await Delivery.findByIdAndUpdate(id, delivery, {new: true});
};

const deleteDelivery = async (id) => {
    return await Delivery.findByIdAndDelete(id);
};

module.exports = {
    getAllDeliveries,
    createDelivery,
    getDeliveryById,
    updateDelivery,
    updateDeliveryStatus,
    deleteDelivery
}