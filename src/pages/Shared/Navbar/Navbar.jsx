import { Link } from 'react-router-dom';
import logo from '../../../assets/bistrobossrestaurant.png';
import { FaShoppingCart } from "react-icons/fa";
import avatarImg from '../../../assets/icon/avatar.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const navOptions = <>
        <li><Link to="/">HOME</Link></li>
        <li><a>CONTACT US</a></li>

        {
            isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link></li> :

                <li><Link to="/dashboard/userhome">Dashboard</Link></li>
        }
        <li><Link to="/menu">OUR MENU</Link></li>
        <li><Link to='/order/salad'>ORDER FOOD</Link></li>
        <li><Link to='/dashboard/mycart'><div className=" gap-2 flex">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
        </div></Link></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <div className="navbar fixed z-10 md:bg-[#000000] bg-opacity-30 max-w-screen-xl md:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-light lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img src={logo} alt='logo' />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="btn bg-[#600303]">Log Out</button>
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </>
                            : <>
                                <Link to='/login' className="btn bg-[#660505] mr-1">Login</Link>
                                <div className="w-10 rounded-full">
                                    <img src={avatarImg} />
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;