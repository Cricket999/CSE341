const router = require("express").Router();
const controller = require("../controllers/index");

router.get("/", controller.buildW1Index);
router.use("/contacts", require("./contacts"));
router.use("/swagger", require("./swagger"));
module.exports = router;