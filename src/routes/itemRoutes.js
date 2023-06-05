const express = require('express')
const {getAllItems, createItems, getItemById} = require("../controllers/itemController") 
const router = express.Router();

router.route("/create/items").post(createItems);
router.route("/get/items").get(getAllItems);
router.route("/getbyid/:id").get(getItemById);


module.exports = router
