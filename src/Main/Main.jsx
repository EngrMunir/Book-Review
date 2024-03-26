import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Main = () => {
    return (
        <div className="max-w-6xl mx-auto mt-5">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;