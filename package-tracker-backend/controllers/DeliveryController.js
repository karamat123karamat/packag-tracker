const DeliveryService = require("../services/DeliveryService");
 
const getAllDeliveries = async (req, res) => {
  try {
    const deliveries = await DeliveryService.getAllDeliveries();
    res.json({ data: deliveries, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
const createDelivery = async (req, res) => {
  try {
    const delivery = await DeliveryService.createDelivery(req.body);
    res.json({ data: delivery, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
const getDeliveryById = async (req, res) => {
  try {
    const delivery = await DeliveryService.getDeliveryById(req.params.id);
    res.json({ data: delivery, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
const updateDelivery = async (req, res) => {
  try {
    const delivery = await DeliveryService.updateDelivery(req.params.id, req.body);
    res.json({ data: delivery, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateDeliveryStatus = async (req, res) => {
  try {
    const delivery = await DeliveryService.updateDeliveryStatus(req.params.id, req.body.status);
    res.json({ data: delivery, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

 
const deleteDelivery = async (req, res) => {
  try {
    const delivery = await DeliveryService.deleteDelivery(req.params.id);
    res.json({ data: delivery, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllDeliveries,
  createDelivery,
  getDeliveryById,
  updateDelivery,
  updateDeliveryStatus,
  deleteDelivery
}