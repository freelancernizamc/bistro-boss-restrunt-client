import logo from '../../../assets/bistrobossrestaurant.png';

const Navbar = () => {

    const navOptions = <>
        <li><a>HOME</a></li>
        <li><a>CONTACT US</a></li>


        <li><a>DASHBOARD</a></li>
        <li><a>OUR MENU</a></li>
        <li><a>OUR SHOP</a></li>
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-[#000000] bg-opacity-30 max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                    <a className="btn">Get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;