import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks]= useState([]);

    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
           <div>
                <h2 className="text-center text-3xl my-10">Books</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-5">
            {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
            }
           </div>
        </div>
    );
};

export default Books;