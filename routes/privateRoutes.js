const express = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const ensureRol = require("../middlewares/ensureRol");
const authenticationController = require("../controllers/authenticationController");
const articleController = require("../controllers/articleController");
const router = express.Router();

router.get("/");
router.get("/logout", ensureAuthenticated, authenticationController.logOut);

router.get("/admin", ensureAuthenticated, ensureRol([2, 3, 4]), articleController.index);

router.get("/crear", ensureAuthenticated, ensureRol([2, 3, 4]), articleController.create);
router.post("/crear", ensureAuthenticated, ensureRol([2, 3, 4]), articleController.store);

router.get("/:id/editar", ensureAuthenticated, ensureRol([2, 3, 4]), articleController.edit);
router.patch("/:id", ensureAuthenticated, ensureRol([2, 3, 4]), articleController.update);

router.delete("/:id", ensureAuthenticated, ensureRol([2, 3, 4]), articleController.destroy);

module.exports = router;
