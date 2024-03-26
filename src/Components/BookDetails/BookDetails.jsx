import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
    const {bookId} = useParams();
    console.log(bookId);
    const jobs  = useLoaderData();
    console.log(jobs);
    return (
        <div>
            <h2>Book details page</h2>
        </div>
    );
};

export default BookDetails;