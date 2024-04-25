const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { bookController } = require('../controllers');

router.get('/', auth, bookController.getBooks);

router.post('/', auth, bookController.addBooks);

router.delete('/:id', auth, bookController.deleteBook);

module.exports = router;

