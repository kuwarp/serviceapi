const express = require('express');
const bodyParser = require('body-parser');
const Book = require('../Database/schema')
const app = express();

app.use(bodyParser.json());

// Create a new Entry 
const createData = async (req, res) => {
  
  const { nameofpost, shortinfo, fees,category ,links,postdate} = req.body;
      const post = new Book({ nameofpost, shortinfo, fees,category ,links,postdate });
   
    try {
      const savedPost = await post.save();
      res.json(savedPost);
    } catch (error) {
      res.status(500).json({ error: 'Error saving the post' });
    }
 
};









// Get a list of all books
const getAllCourse = async (req, res) => {
  const {category}=req.body;
  if(category==='course'){
    try {
      const books = await Book.find({category: 'course'});
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch books' });
    }
  }
  
  else{
    res.status(400).json({ error: 'Invalid category' });
  }
};










// get a list of all jobs
const getAllJobs = async (req, res) => {
  const {category}=req.body;
  if(category==='job'){
  try {
    const books = await Book.find({category: 'job'});
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch books' });
  }
} else{
  res.status(400).json({ error: 'Invalid category' });
}
};








// Get a list of all results

const getAllresult = async (req, res) => {
  const {category}=req.body;
  if(category==='result'){
  try {
    const books = await Book.find({category: 'result'});
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch books' });
  }
}
else{
  res.status(400).json({ error: 'Invalid category' });
}
};










// Get details of a specific book by ID
const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.json(book);
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch the book' });
  }
};










// Update a book's details
const updateData = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.json(updatedBook);
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to update the book' });
  }
};











// Delete a book
const deleteData = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndRemove(req.params.id);
    if (!deletedBook) {
      res.status(404).json({ error: 'Book not found' });
    } else {
      res.json(deletedBook);
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to delete the book' });
  }
};

module.exports = {
  app,
  createData,
  getAllCourse,
  getAllJobs,
  getAllresult,
  getBookById,
  updateData,
  deleteData
};
