const {Book} = require('../models');

exports.getBooks = async (req, res) => {
    const { author, title, publicationYear } = req.query;
    const filter = {};
    if (author) filter.author = { $regex: author, $options: 'i' };
    if (title) filter.title = { $regex: title, $options: 'i' };
    if (publicationYear) filter.publicationYear = publicationYear;

    try {
      const books = await Book.find(filter).sort({ date: -1 });
      res.json(books);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }


exports.addBooks = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, author, publicationYear } = req.body;

    try {
      const newBook = new Book({
        title,
        author,
        publicationYear,
      });

      const book = await newBook.save();

      res.json(book);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }

exports.deleteBook = async (req, res) => {
    try {
      let book = await Book.findById(req.params.id);
  
      if (!book) return res.status(404).json({ msg: 'Book not found' });
  
      await Book.findByIdAndRemove(req.params.id);
  
      res.json({ msg: 'Book removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }