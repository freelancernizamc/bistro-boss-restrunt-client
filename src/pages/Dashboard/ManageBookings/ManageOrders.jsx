import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageOrders = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: orders = [], refetch } = useQuery("orders", async () => {
        const res = await axiosSecure.get(`/orders/${user.email}`);
        return res.data;
    });

    const handleDelete = (order) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-azure.vercel.app/orders/${order._id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire("Deleted!", "Your booking has been deleted.", "success");
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="overflow-x-auto ml-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Email</th>
                            <th>Order Date</th>
                            <th>Order Time</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.userEmail}</td>
                                <td>{order.orderDate}</td>
                                <td>{order.orderTime}</td>
                                <td>{order.status}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(order)}
                                        className="btn btn-ghost btn-sm bg-red-600 text-white"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;
