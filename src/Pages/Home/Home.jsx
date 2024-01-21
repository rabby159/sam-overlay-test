import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import Banner from "./Banner";


const Home = () => {
    return (
        <div className="bg-slate-800">
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;