import React, { useEffect, useState, useContext, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import LoadingSpinner from "../Components/LoadingSpinner";

const CampaignDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [donationAmount, setDonationAmount] = useState("");
  const [showNote, setShowNote] = useState(false);
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

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
    if (!donationAmount) {
      setShowNote(true);
      return;
    }

    if (parseFloat(donationAmount) < parseFloat(campaign.minDonation)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Donation",
        text: `Donation amount must be greater than $${campaign.minDonation}.`,
      });
      return;
    }

    const donationData = {
      campaignId: campaign._id,
      userEmail: user.email,
      userName: user.displayName,
      title: campaign.title,
      amount: donationAmount,
    };

    try {
      const response = await fetch("http://localhost:5000/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donationData),
      });

      const data = await response.json();

      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Donation Successful!",
          text: "Thank you for your donation.",
        });
        setDonationAmount("");
        setShowNote(false);
        closeModal();
      } else {
        Swal.fire({
          icon: "error",
          title: "Donation Failed",
          text: data.message || "An error occurred.",
        });
        closeModal();
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

  const openModal = () => {
    document.getElementById("my_modal_5").showModal();
    firstFocusableRef.current.focus();
  };

  const closeModal = () => {
    document.getElementById("my_modal_5").close();
    setDonationAmount("");
    setShowNote(false);
  };

  const handleKeyDown = (event) => {
    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.key === "Tab") {
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!campaign) {
    return <div className="text-center text-4xl p-9">Campaign not found.</div>;
  }

  // Check if the deadline has passed
  const isDeadlinePassed = new Date(campaign.deadline) < new Date();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto campaign-details">
      <img
        src={campaign.thumbnail}
        alt={campaign.title}
        className="w-full h-[300px] object-cover rounded-lg mb-4"
      />
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">{campaign.title}</h1>
        <div className="text-lg font-medium text-gray-600">
          <span className="mr-2 text-blue-600 font-semibold">Deadline:</span>
          <span className="text-gray-800">
            {new Date(campaign.deadline).toLocaleDateString()}
          </span>
        </div>
      </div>
      <p className="text-lg mb-2">
        <strong className="text-gray-800">Type:</strong> {campaign.type}
      </p>
      <p className="text-lg mb-2 description">
        <strong className="text-gray-800">Description:</strong>{" "}
        {campaign.description}
      </p>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-bold text-blue-600">
          <strong>Minimum Donation:</strong> ${campaign.minDonation}
        </p>
      </div>
      {isDeadlinePassed ? (
        <div className="text-red-600 text-center mt-4 flex flex-col gap-5">
          <p>
            Unfortunately, the deadline for this campaign has passed. You cannot
            make a donation at this time.
          </p>
          <div >
            <button className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-lg w-full shadow-md">
              <Link to="/all-campaigns">Back to Campaigns</Link>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={openModal}
          className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-lg w-full shadow-md"
        >
          Donate
        </button>
      )}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
        ref={modalRef}
        onKeyDown={handleKeyDown}
      >
        <div className="modal-box p-6 rounded-lg shadow-lg bg-white">
          <h3 className="font-bold text-lg text-center">
            Enter Donation Amount
          </h3>
          <input
            type="number"
            value={donationAmount}
            onChange={(e) => {
              setDonationAmount(e.target.value);
              setShowNote(false);
            }}
            className="input input-bordered w-full mt-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            ref={firstFocusableRef}
          />
          {showNote && (
            <div className="mt-2 text-red-600 text-center">
              <p>Please enter a donation amount.</p>
            </div>
          )}
          <div className="modal-action mt-4">
            <button
              className="btn bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleDonate}
            >
              Confirm Donation
            </button>
            <button
              className="btn bg-gray-300 text-gray-700 hover:bg-gray-400"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CampaignDetails;
