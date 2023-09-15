const router = require("express").Router();
const controller = require("../controllers/index");

router.get("/", controller.buildW1Index);

module.exports = router;