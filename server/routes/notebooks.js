const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getNotebooks,
  getNotebook,
  getByChapter,
  createNotebook,
  updateNotebook,
  deleteNotebook,
  getSharedNotebook,
  updateSharedNotebook,
  toggleShare,
} = require("../controllers/notebookController");

router.get("/", protect, getNotebooks);
router.get("/chapter", protect, getByChapter);
router.get("/shared/:id", protect, getSharedNotebook);
router.put("/shared/:id", protect, updateSharedNotebook);
router.get("/:id", protect, getNotebook);
router.post("/", protect, createNotebook);
router.put("/:id/share", protect, toggleShare);
router.put("/:id", protect, updateNotebook);
router.delete("/:id", protect, deleteNotebook);

module.exports = router;
