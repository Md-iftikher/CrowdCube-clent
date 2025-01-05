import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddNewCampaign = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    type: "",
    description: "",
    minDonation: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(formData);

    const title = formData.title;
    const type = formData.type;
    const description = formData.description;
    const minDonation = formData.minDonation;
    const deadline = formData.deadline;
    const userEmail = user.email;
    const userName = user.displayName;
    const thumbnail = formData.image;

    const newCampaign = {
      title,
      type,
      description,
      minDonation,
      deadline,
      userEmail,
      userName,
      thumbnail,
    };
    console.log(newCampaign);

    fetch("http://localhost:5000/Addcampaigns", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Campaign Added!",
            text: "Your campaign has been successfully added.",
          });
        }
      });

    // navigate("/dashboard");
  };

  return (
    <div className="bg-blue-100 p-6">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Add New Campaign
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
              placeholder="Enter image URL"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Campaign Title</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
              placeholder="Enter campaign title"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Campaign Type</span>
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="select select-bordered w-full"
            >
              <option value="">Select type</option>
              <option value="personal issue">Personal Issue</option>
              <option value="startup">Startup</option>
              <option value="business">Business</option>
              <option value="creative ideas">Creative Ideas</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="textarea textarea-bordered w-full"
              placeholder="Enter campaign description"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Minimum Donation Amount</span>
            </label>
            <input
              type="number"
              name="minDonation"
              value={formData.minDonation}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
              placeholder="Enter minimum donation amount"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="input input-bordered w-full"
            />
          </div>
          <button
            type="submit"
            className="btn bg-blue-600 text-white hover:bg-blue-700 transition duration-300 w-full"
          >
            Add Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewCampaign;
