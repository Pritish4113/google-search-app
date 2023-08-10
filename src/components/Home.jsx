import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";

const Home = () => {
    return <div className="flex h-[100vh] flex-col">
        <HomeHeader/>
        <main className="grow flex justify-center">
            <div className="flex w-full flex-col items-center mt-44">
                <img className = "w-[172px] md:w-[272px] mb-8" src={Logo} alt="google_img" />
                <SearchInput/>
            </div>
        </main>
        <Footer></Footer>
    </div>;
};

export default Home;
