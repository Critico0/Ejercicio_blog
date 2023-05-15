const express = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const { isWriter, isEditor, isAdmin } = require("../middlewares/ensureRole");
const authenticationController = require("../controllers/authenticationController");
const articleController = require("../controllers/articleController");
const router = express.Router();

router.get("/");
router.get("/logout", ensureAuthenticated, authenticationController.logOut);

router.get("/admin", ensureAuthenticated, isWriter, articleController.index);
router.get("/crear", ensureAuthenticated, isWriter, articleController.create);
router.post("/crear", ensureAuthenticated, isWriter, articleController.store);

router.get("/:id/editar", ensureAuthenticated, isWriter, articleController.edit);
router.patch("/:id", ensureAuthenticated, isWriter, articleController.update);

router.delete("/:id", ensureAuthenticated, isWriter, articleController.destroy);

module.exports = router;
