const router = require("express").Router();
const controller = require("../controllers/contacts");

router.get("/all", controller.getAll);
router.get("/:id", controller.getOne);

router.post("/add", controller.addContact);

router.put("/:id", controller.editContact);

router.delete("/:id", controller.deleteContact);

module.exports = router;