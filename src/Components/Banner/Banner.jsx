
const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/s28yMLN/book1.jpg" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-primary">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;