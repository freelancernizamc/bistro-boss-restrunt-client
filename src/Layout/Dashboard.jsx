import { FaBook, FaCalendar, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import logo from '../assets/bistrobossrestaurant.png';
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";


const Dashboard = () => {

    const [cart] = useCart();
    const { user, logOut } = useAuth();

    // TODO: load data from the server to have dynamic isAdmin based on this page
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    console.log(isAdmin);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#650305fb] text-white">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="mt-2 pl-5"><img className='h-[30px]' src={logo} alt="logo" /></div>
                <ul className="menu p-4 w-80 text-white">
                    <div>

                        <div className='flex flex-col items-center mt-6 -mx-2 '>
                            <Link to='/dashboard'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font-medium  hover:underline text-white'>
                                    {user?.displayName}
                                </h4>
                            </Link>
                            <Link to='/dashboard'>
                                <p className='mx-2 mt-1 text-sm font-medium text-gray-300  hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>
                        </div>
                    </div>

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/home"><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to="/reservation"><FaUtensils /> Add Items</NavLink></li>
                            <li><NavLink to="/history"><FaWallet /> Manage Items</NavLink></li>
                            <li><NavLink to="/history"><FaBook /> Manage Bookings</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers /> All Users</NavLink></li>

                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                            <li><NavLink to="/menu">OUR MENU</NavLink></li>
                            <li><NavLink to='/order/salad'>ORDER FOOD</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashboard/home"><FaHome /> User Home</NavLink></li>
                            <li><NavLink to="/reservation"><FaCalendar /> Reservation</NavLink></li>
                            <li><NavLink to="/history"><FaWallet /> Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/mycart'><FaShoppingCart /> My Cart</NavLink>
                                <div className="badge badge-secondary">+{cart?.length || 0}</div></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                            <li><NavLink to="/menu">OUR MENU</NavLink></li>
                            <li><NavLink to='/order/salad'>ORDER FOOD</NavLink></li>


                        </>

                    }

                    <li> <NavLink onClick={handleLogOut} >Log Out</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;