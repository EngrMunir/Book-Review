import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const Book = ({book}) => {
    const {bookId, bookName, author, image, review,totalPages,rating,category,tags,publisher,yearOfPublishing } = book;
    return (
        <Link to={`/book/${bookId}`}>
          <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div className="flex gap-5 text-red-600">
                  <p>{tags[0]}</p>
                  <p>{tags[1]}</p>
                </div>
                <h2 className="card-title">{bookName}</h2>
                <p className="ml-2">By: {author}</p>
                <div className="flex gap-8">
                  <p>{category}</p>
                  <div className="flex">
                  <p>{rating}</p>
                  <IoIosStarOutline className="my-1" />
                  </div>
                </div>
  </div>
</div>
        </Link>
    );
};

export default Book;