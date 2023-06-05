import { HiPhone, HiShoppingBag, HiShoppingCart, HiStar, HiWallet } from "react-icons/hi2";
import useAuth from "../../../hooks/useAuth";
import useMenu from "../../../hooks/useMenu";
import useCart from "../../../hooks/useCart";
import usePayment from "../../../hooks/usePayment";

const UserHome = () => {
    const { user } = useAuth();
    const [menu] = useMenu();
    const [cart] = useCart();
    const [payments] = usePayment();
    console.log("Payments:", payments);
    return (
        <div className="w-full ml-10 uppercase my-4">
            <h2 className="text-3xl">Hi, {user.displayName} Welcome Back</h2>
            <div className="stats shadow my-4 mx-20 gap-10">

                <div className="stat">
                    <div className="stat-figure text-secondary shadow">
                        <HiWallet />
                    </div>
                    <div className="stat-value">{menu.length}</div>
                    <div className="stat-title">Menu</div>

                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <HiShoppingBag />
                    </div>
                    <div className="stat-value">{cart.length}</div>
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
                    <div className="w-1/3 h-1/2 mx-auto mt-20"><img className='rounded-full' src={user.photoURL} /></div>
                    <h2 className="text-2xl text-center font-semibold mt-1">{user.displayName}</h2>
                </div>
                <div className="w-1/2 bg-[#FEF9C3] text-center">
                    <h2 className="uppercase text-3xl mt-20 text-center">Your Activities</h2>
                    <div className="flex justify-center items-center text-orange-800"><HiShoppingCart /><p> Orders: {cart.length}</p></div>
                    <div className="flex justify-center items-center text-emerald-500"><HiStar /><p> Reviews: 3</p></div>
                    <div className="flex justify-center items-center text-indigo-600"><HiShoppingCart /><p> Bookings: 6</p></div>
                    <div className="flex justify-center items-center text-green-800"><HiWallet /><p> Payment: {payments.length}</p></div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;