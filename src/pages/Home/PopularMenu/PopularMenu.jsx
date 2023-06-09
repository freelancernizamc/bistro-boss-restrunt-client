
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');



    return (
        <section className="mb-12">
            <SectionTitle
                subHeading="Check It Out"
                heading="From Our Menu"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-5">
                <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>

            </div>
            <div className="w-[1320px] h-[250px] mx-auto bg-black text-white mt-20 flex items-center" >
                <p className="text-center text-3xl m-auto">Call Us: +88 01819968181</p>
            </div>
        </section>
    );
};

export default PopularMenu;