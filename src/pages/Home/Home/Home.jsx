import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Content from "../Content/Content";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommends from "../Recommends/Recommends";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <Content />
            <PopularMenu />
            <Recommends />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;