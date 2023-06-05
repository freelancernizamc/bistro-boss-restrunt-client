import { useState, useEffect } from "react";
import useAxiosSecure from "./useAxiosSecure";

const usePayment = () => {
    const [payments, setPayments] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axiosSecure.post("/payments", { data: payments });


                const paymentData = response.data;
                console.log("Payment Data:", paymentData);
                console.log("Paid Payments:", paidPayments);
                const paidPayments = paymentData.filter((payment) => payment.paid);
                setPayments(paidPayments);
            } catch (error) {
                console.error("Error fetching payment data:", error);
            }
        };

        fetchPayments();
    }, [axiosSecure]);

    return [payments];
};

export default usePayment;
