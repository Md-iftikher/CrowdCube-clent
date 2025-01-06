import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import moment from 'moment'; 
import LoadingSpinner from "../Components/LoadingSpinner"; 
const MyCampaigns = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyCampaigns = async () => {
      try {
        const response = await fetch(`http://localhost:5000/Campaigns/email/${user.email}`);
        const data = await response.json();

        // Check if data is an array
        if (Array.isArray(data)) {
          setCampaigns(data);
        } else {
          console.error("Expected an array but got:", data);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to load your campaigns. Please try again later.",
          });
        }
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load your campaigns.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchMyCampaigns();
  }, [user.email]);

  const handleDelete = async (campaignId) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete your campaign.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    });

    if (confirmDelete.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:5000/campaigns/${campaignId}`, {
          method: "DELETE",
        });
        const result = await response.json();
        if (result.success) {
          Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
          setCampaigns(campaigns.filter(campaign => campaign._id !== campaignId));
        } else {
          Swal.fire("Error!", result.message, "error");
        }
      } catch (error) {
        console.error("Error deleting campaign:", error);
        Swal.fire("Error!", "Failed to delete the campaign.", "error");
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-700 tracking-wide mb-2">
            My Campaigns
          </h1>
          <p className="text-gray-600 text-lg">
            Here are your active campaigns.
          </p>
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
                  <th className="px-6 py-4 font-medium text-gray- 800 uppercase tracking-wider border">
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
                    <td className="px-6 py-4 whitespace-nowrap border flex space-x-2">
                      <Link to={`/update-campaign/${campaign._id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                        Update
                      </Link>
                      <button
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                        onClick={() => handleDelete(campaign._id)}
                      >
                        Delete
                      </button>
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

export default MyCampaigns;