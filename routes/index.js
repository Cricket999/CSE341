const router = require("express").Router();
const controller = require("../controllers/index");

router.get("/", controller.buildW1Index);
router.use("/contacts", require("./contacts"));

module.exports = router;