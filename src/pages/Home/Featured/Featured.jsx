import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';



const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="Check it Out"
                heading="Featured Items"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2030</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsam dicta dolores quibusdam a quisquam voluptatum consequuntur recusandae aliquid eligendi sequi placeat, at nobis. Omnis deleniti dolor optio eum ullam dolorem dicta illo odio molestiae, at nisi dignissimos quae, sapiente quaerat? Magnam, officia delectus architecto sit dolorem non reprehenderit in!</p>
                    <button className="btn btn-outline border-0 border-b-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;