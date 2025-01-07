import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import LoadingSpinner from "./LoadingSpinner";
import moment from 'moment'

const UpdateCampaign = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    minDonation: "",
    deadline: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await fetch(`http://localhost:5000/campaigns/${id}`);
        const data = await response.json();
        if (data) {
          setCampaign(data);
          setFormData({
            title: data.title,
            type: data.type,
            minDonation: data.minDonation,
            deadline: moment(data.deadline).format('YYYY-MM-DD'),
          });
        }
      } catch (error) {
        console.error("Error fetching campaign:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load campaign data.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/campaigns/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userName: user.displayName,
          userEmail: user.email,
        }),
      });
      const result = await response.json();
      if (result.modifiedCount) {
        Swal.fire("Updated!", "Your campaign has been updated.", "success");
        navigate("/my-campaigns");
      } else {
        Swal.fire("Error!", result.message, "error");
      }
    } catch (error) {
      console.error("Error updating campaign:", error);
      Swal.fire("Error!", "Failed to update the campaign.", "error");
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="bg-blue-200 min-h-screen px-8 py-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg px-8 pb-8 pt-6">
        <h1 className="text-3xl font-bold text-sky-700 tracking-wide mb-6 text-center">
          Update Campaign
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 focus:outline-none focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm rounded-md border border-gray-300 p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Type
            </label>
            <input
              type="text"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 focus:outline-none focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm rounded-md border border-gray-300 p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="minDonation"
              className="block text-sm font-medium text-gray-700"
            >
              Minimum Donation
            </label>
            <input
              type="number"
              id="minDonation"
              name="minDonation"
              value={formData.minDonation}
              onChange={handleChange}
              className="mt-1 focus:outline-none focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm rounded-md border border-gray-300 p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="mt-1 focus:outline-none focus:ring-sky-500 focus:border-sky-500 block w-full sm:text-sm rounded-md border border-gray-300 p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
              User Name
            </label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="mt-1 block w-full sm:text-sm rounded-md border border-gray-300 p-2.5 bg-gray-100 cursor-not-allowed" // Added cursor style
            />
          </div>
          <div className="mb-8">
            {" "}
            {/* Increased bottom margin for more spacing */}
            <label className="block text-sm font-medium text-gray-700">
              User Email
            </label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="mt-1 block w-full sm:text-sm rounded-md border border-gray-300 p-2.5 bg-gray-100 cursor-not-allowed" // Added cursor style
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-2.5 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition duration-300" // Improved button styles
          >
            Update Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCampaign;
