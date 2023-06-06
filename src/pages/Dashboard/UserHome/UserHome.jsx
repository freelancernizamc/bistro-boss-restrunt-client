import { HiPhone, HiShoppingBag, HiShoppingCart, HiStar, HiWallet } from "react-icons/hi2";
import useAuth from "../../../hooks/useAuth";
import useMenu from "../../../hooks/useMenu";
// import useCart from "../../../hooks/useCart";
import usePayment from "../../../hooks/usePayment";

const UserHome = () => {
    const { user } = useAuth();
    const [menu] = useMenu();
    // const [cart] = useCart();
    const { totalOrders, payments } = usePayment(user.email);
    console.log(payments);
    console.log(totalOrders);

    return (
        <div className="w-full ml-10 uppercase my-4">
            <h2 className="text-3xl">Hi, {user.displayName} Welcome Back</h2>
            <div className="stats shadow my-4">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <HiWallet />
                    </div>
                    <div className="stat-value">{menu.length}</div>
                    <div className="stat-title">Menu</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <HiShoppingBag />
                    </div>
                    <div className="stat-value">{totalOrders.length}</div>
                    <div className="stat-title">Your Order</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary w-30">
                        <HiPhone />
                    </div>
                    <div className="stat-value">03</div>
                    <div className="stat-title">Contact</div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="w-1/2 h-[300px] bg-[#D1A054]">
                    <div className="w-1/3 h-1/2 mx-auto mt-20">
                        <img className='rounded-full' src={user.photoURL} />
                    </div>
                    <h2 className="text-2xl text-center font-semibold mt-1">{user.displayName}</h2>
                </div>
                <div className="w-1/2 bg-[#FEF9C3] text-center">
                    <h2 className="uppercase text-3xl mt-20 mb-4 text-center text-cyan-300">Your Activities</h2>
                    <div className="flex justify-center items-center text-orange-400">
                        <HiShoppingCart />
                        <p> Orders: {totalOrders.length}</p>
                    </div>
                    <div className="flex justify-center items-center text-lime-600">
                        <HiStar />
                        <p> Reviews: 3</p>
                    </div>
                    <div className="flex justify-center items-center text-red-800">
                        <HiShoppingCart />
                        <p> Bookings: 6</p>
                    </div>
                    <div className="flex justify-center items-center text-green-400">
                        <HiWallet />
                        <p> Payment: {payments?.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
