const express = require("express");
const router = express.Router();
const multer = require("multer");
const { auth, adminAuth } = require("../middleware/auth");
const { bookController } = require("../controllers");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../public");
  },
});

const uploadPdf = multer({ storage }).single("pdf");
const uploadThumbnail = multer({ storage }).single("thumbnail");

router.get("/get", auth, bookController.getBooks);

router.post(
  "/add",
  auth,
  adminAuth,
  uploadPdf,
  uploadThumbnail,
  bookController.addBooks
);

router.delete("/delete/:id", auth, adminAuth, bookController.deleteBook);

router.patch("/edit/:id", auth, adminAuth, bookController.editBook);

router.get("/get/:id", auth, bookController.getBookById);

module.exports = router;
