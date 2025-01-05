import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaignDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/campaigns/${id}`);
        const data = await response.json();
        setCampaign(data);
      } catch (error) {
        console.error("Error fetching campaign details:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to load campaign details.",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCampaignDetails();
  }, [id]);

  const handleDonate = async () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Not Logged In",
        text: "Please log in to donate.",
      });
      return;
    }

    const donationData = {
      campaignId: campaign._id,
      userEmail: user.email,
      userName: user.displayName,
      title: campaign.title,
      amount: campaign.minDonation, // Assuming you want to donate the minimum amount
    };

    try {
      const response = await fetch("http://localhost:5000/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donationData),
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Donation Successful!",
          text: "Thank you for your donation.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Donation Failed",
          text: result.message,
        });
      }
    } catch (error) {
      console.error("Error processing donation:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to process donation.",
      });
    }
  };

  if (loading) {
    return <div className="text-center">Loading campaign details...</div>;
  }

  if (!campaign) {
    return <div className="text-center">Campaign not found.</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{campaign.title}</h1>
      <p className="text-lg mb-2"><strong>Type:</strong> {campaign.type}</p>
      <p className="text-lg mb-2"><strong>Description:</strong> {campaign.description}</p>
      <p className="text-lg mb-2"><strong>Minimum Donation:</strong> ${campaign.minDonation}</p>
      <p className="text-lg mb-2"><strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}</p>
      <img src={campaign.thumbnail} alt={campaign.title} className="w-full h-auto rounded-lg mb-4" />
      <button
        onClick={handleDonate}
        className="btn bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
      >
        Donate
      </button>
      <Link to="/campaigns">
        <button className="btn btn-ghost mt-4">Back to All Campaigns</button>
      </Link>
    </div>
  );
};

export default CampaignDetails;