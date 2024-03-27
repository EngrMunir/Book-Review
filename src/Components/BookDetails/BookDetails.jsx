import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredReadList, saveReadList, saveWishList } from "../Utility/localStorage";


const BookDetails = () => {
    const { id } = useParams();
    const idx = parseInt(id);
    const books  = useLoaderData();
    const book = books.find(Book => Book.bookId === idx)
    // console.log(job);
    const {  bookName, author, image, review,totalPages,rating,category,tags,publisher,yearOfPublishing } = book;
    
    const handleReadList =()=>{
        saveReadList(idx);
        toast('Book added to read list')
    }

    const handleWishList = ()=>{
        const readIds= getStoredReadList()
       if(readIds){
        // checking this book exists in read book
        const isReadBook = readIds.includes(idx);
        if(isReadBook){
            toast('This book already read')
        }
        else{
            saveWishList(idx)
            toast('Book added to wish list')
        }
       }
       else{
        // if read list not exists directly added to wishlist
        saveWishList(idx)
        toast('Book added to wish list')
       }
    }

    return (
        <div className="grid grid-cols-2">
                <img className="ml-20" src={image} alt="" />
            <div>
                <h2>{bookName}</h2>
                <p>By: {author}</p>
                <div className="divider"></div> 
                <p>{category}</p>
                <div className="divider"></div> 
                <p><span className="font-bold">Review:</span> {review}</p>
                <p><span className="font-bold">Tag:</span> #{tags[0]}   #{tags[1]}</p>
                <div className="divider"></div> 
                <p>Number of pages: <span className="font-bold">{totalPages}</span></p>
                <p>Publisher: <span className="font-bold">{publisher}</span></p>
                <p>Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
                <p>Rating: <span className="font-bold">{rating}</span></p>
                <div>
                    <button onClick={handleReadList} className="btn btn-outline">Read</button>
                    <button onClick={handleWishList} className="btn btn-secondary ml-4">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;