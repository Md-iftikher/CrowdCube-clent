import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider'; 
import Swal from 'sweetalert2';
import LoadingSpinner from '../Components/LoadingSpinner';


const MyDonations = () => {
    const { user } = useContext(AuthContext); 
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const response = await fetch(`https://crowdcube-server-ruddy.vercel.app/donations/${user.email}`); 
                const data = await response.json();
                if (Array.isArray(data)) {
                    setDonations(data);
                } else {
                    throw new Error('Unexpected response format');
                }
            } catch (error) {
                console.error("Error fetching donations:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to load your donations.',
                });
            } finally {
                setLoading(false);
            }
        };

        fetchDonations();
    }, [user.email]);

    if (loading) {
        return <LoadingSpinner />; 
    }

    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-extrabold text-blue-700 tracking-wide mb-6 text-center">
                    My Donations
                </h1>
                {donations.length === 0 ? (
                    <p className="text-center text-gray-600 text-xl">You have not made any donations yet.</p>
                ) : (
                    <div className="overflow-x-auto rounded-lg shadow-md">
                        <table className="w-full table-auto border-collapse border border-gray-300">
                            <thead className="bg-blue-50">
                                <tr className="text-left">
                                    <th className="px-6 py-4 font-medium text-gray-800 uppercase tracking-wider border">Campaign Title</th>
                                    <th className="px-6 py-4 font-medium text-gray-800 uppercase tracking-wider border">Amount Donated</th>
                                    <th className="px-6 py-4 font-medium text-gray-800 uppercase tracking-wider border">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {donations.map((donation, index) => (
                                    <tr key={donation._id} className={`${index % 2 === 0 ? 'bg-gray-50' : ''} hover:bg-blue-50 transition duration-200`}>
                                        <td className="px-6 py-4 whitespace-nowrap border">{donation.title}</td>
                                        <td className="px-6 py-4 whitespace-nowrap border">${donation.amount}</td>
                                        <td className="px-6 py-4 whitespace-nowrap border">{new Date(donation.donationDate).toLocaleDateString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyDonations;