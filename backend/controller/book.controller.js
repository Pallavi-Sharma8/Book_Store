// import Book from "../model/book.model.js";
// export const getBooks = async(req, res) => {
// try {
//   const book = await Book.find();
//   res.status(200).json(book);
// } catch (error) {
//   console.error("Error fetching books:", error);
//   res.status(500).json({ message: "Internal server error" });
  
// }
// }
import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};