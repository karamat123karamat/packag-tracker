const express = require("express");

const {
    getAllDeliveries,
    createDelivery,
    getDeliveryById,
    updateDelivery,
    updateDeliveryStatus,
    deleteDelivery,
} = require("../controllers/DeliveryController");

const router = express.Router();

router.route("/").get(getAllDeliveries).post(createDelivery);
router.route("/:id").get(getDeliveryById).put(updateDelivery).delete(deleteDelivery);
router.route("/:id/change-status").put(updateDeliveryStatus)
 
module.exports = router;