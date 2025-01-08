import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../Components/LoadingSpinner";
import moment from 'moment';

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("https://crowdcube-server-ruddy.vercel.app/campaigns");
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load campaigns.",
        });
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchCampaigns();
  }, []);

  // Function to handle sorting
  const handleSort = () => {
    const sortedCampaigns = [...campaigns].sort((a, b) => {
      return sortOrder === "asc"
        ? a.minDonation - b.minDonation
        : b.minDonation - a.minDonation;
    });
    setCampaigns(sortedCampaigns);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-700 tracking-wide mb-2">
            All Campaigns
          </h1>
          <p className="text-gray-600 text-lg">
            Browse through our active campaigns and contribute to a cause you
            believe in.
          </p>
          <button
            onClick={handleSort}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Sort by Minimum Donation ({sortOrder === "asc" ? "Ascending" : "Descending"})
          </button>
        </div>

        {loading ? (
          <div className="text-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-blue-50">
                <tr className="text-left">
                  <th className="px-6 py-4 font-medium text-gray-800 uppercase tracking-wider border">
                    Title
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-800 uppercase tracking-wider border">
                    Type
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-800 uppercase tracking-wider border">
                    Minimum Donation
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-800 uppercase tracking-wider border">
                    Created At
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-800 uppercase tracking-wider border">
                    Deadline
                  </th>
                  <th className="px-6 py-4 font-medium text-gray-800 uppercase tracking-wider border">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign, index) => (
                  <tr
                    key={campaign._id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : ""
                    } hover:bg-blue-50 transition duration-200`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap border">
                      {campaign.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border">
                      {campaign.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border">
                      ${campaign.minDonation}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border">
                      {campaign.createdAt ? moment(campaign.createdAt).format('MMMM Do YYYY') : 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border">
                      {new Date(campaign.deadline).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border">
                      <Link to={`/details/${campaign._id}`}>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200">
                          See More
                        </button>
                      </Link>
                    </td>
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

export default AllCampaigns;