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

    const delivery = await Delivery.findById(id).populate("package_id")

    if (delivery.status == "open" && status == "picked-up") {
        delivery.pickup_time = date_time
    }
    
    if (delivery.status == "picked-up" && status == "in-transit") {
        delivery.start_time =  date_time
    }
    
    if (delivery.status == "in-transit" && (status == "delivered" || status == "failed")) {
        delivery.end_time = date_time
    }
    
    delivery.status = status
    return await delivery.save();
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