import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishlist } from "../Utility/localStorage";

const ListedBooks = () => {
    const books = useLoaderData();
    const [listedWishBooks, setListedWishBooks]= useState([])
    // console.log(books);
    useEffect(()=>{
        const storedWishListIds = getStoredWishlist();
        if(books.length){
            // const listedWishBooks = books.filter( book => storedWishListIds.includes(book.bookId))
            // console.log(listedWishBooks)

            const wishListedBooks = [];
            for(const id of storedWishListIds){
                const book= books.find(book => book.bookId === id);
                wishListedBooks.push(book);
            }
            setListedWishBooks(wishListedBooks);
        }
    },[])
    return (
        <div>
           <div className="bg-cyan-100">
                <h2 className="text-3xl text-center py-5 rounded-lg">Books:{listedWishBooks.length}</h2>
           </div>
        </div>
    );
};

export default ListedBooks;