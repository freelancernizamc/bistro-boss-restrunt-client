import { useState, useEffect } from 'react';
import axios from 'axios';

const usePayment = (currentUserEmail) => {
    const [payments, setPayments] = useState([]);
    const [totalOrders, setTotalOrders] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(payments);
    useEffect(() => {
        // Fetch user's payments
        axios.get(`https://bistro-boss-server-azure.vercel.app/payments?email=${currentUserEmail}`)
            .then(response => {
                setPayments(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });

        // Fetch total order count for the user
        axios.get(`https://bistro-boss-server-azure.vercel.app/totalOrders?email=${currentUserEmail}`)
            .then(response => {
                console.log(response.data)
                setTotalOrders(response.data);
            })
            .catch(error => {
                console.error('Error fetching total order count:', error);
            });
    }, [currentUserEmail]);

    return {
        payments,
        totalOrders,
        loading,
        error
    };
};

export default usePayment;
