const router = require("express").Router();
const bookModel = require("../models/book.models");

//POST REQUEST
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBook = new bookModel(data);
    
    await newBook.save().then(() => {
      res.status(200).json({ message: "BOOK ADDED SUCCESSFULLY" });
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/getAllBooks", async (req, res) => {
  try {
    const books = await bookModel.find(); // Fetch all books from DB

    if (books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }

    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const updateData = req.body;

    const updateBook = await bookModel.findByIdAndUpdate(bookId, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updateBook) {
      return res.status(404).json({ message: "BOOK NOT FOUND" });
    }
    res
      .status(200)
      .json({ message: "BOOK UPDATED SUCCESSFULLY", book: updateBook });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const bookId = req.params.id;

    const deleteBook = await bookModel.findByIdAndDelete(bookId);

    if (!deleteBook) {
      return res
        .status(404)
        .json({ message: "BOOK IS NOT DELETED SUCCESSFULLY" });
    }

    res
      .status(200)
      .json({ message: "BOOK DELETED SUCCESSFULLY", book: deleteBook });
  } catch (error) {
    console.log("ERROR IN DELETING BOOK", error);
    res
      .status(200)
      .json({ messgae: "INTERNAL SERVER ERROR", error: error.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const bookId = req.params.id; 
    const updatedData = req.body; 

    const updatedBook = await bookModel.findByIdAndUpdate(
      bookId,
      { $set: updatedData }, 
      { new: true, runValidators: true } 
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res
      .status(200)
      .json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    console.error("Error updating book:", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = router;
