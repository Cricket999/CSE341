const router = require("express").Router();
const controller = require("../controllers/contacts");

router.get("/all", controller.getAll);
router.get("/:id", controller.getOne);

module.exports = router;