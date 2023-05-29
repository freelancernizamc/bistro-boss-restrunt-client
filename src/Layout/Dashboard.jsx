import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import logo from '../assets/bistrobossrestaurant.png';


const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#650305fb] text-white">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="mt-2 pl-5"><img src={logo} alt="logo" /></div>
                <ul className="menu p-4 w-80 text-white">

                    <li><NavLink to="/dashboard/home"><FaHome /> User Home</NavLink></li>
                    <li><NavLink to="/reservation"><FaCalendar /> Reservation</NavLink></li>
                    <li><NavLink to="/history"><FaWallet /> Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart /> My Cart</NavLink>
                        <div className="badge badge-secondary">+{cart?.length || 0}</div></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                    <li><NavLink to="/menu">OUR MENU</NavLink></li>
                    <li><NavLink to='/order/salad'>ORDER FOOD</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;