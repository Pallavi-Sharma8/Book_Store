import mongoose from 'mongoose';

const bookschema = mongoose.Schema({
  id: Number,
    name : String  ,
    Price : Number ,
    category : String ,
    image : String
});

const Book = mongoose.model('Book', bookschema);
export default Book;