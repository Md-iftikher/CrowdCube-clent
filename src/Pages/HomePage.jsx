import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaUsers, FaRocket, FaLightbulb } from "react-icons/fa";
import Slider from "../Components/slider";


const HomePage = () => {
  const [runningCampaigns, setRunningCampaigns] = useState([]);

  useEffect(() => {
    const fetchRunningCampaigns = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/campaigns?status=running&limit=6"
        );
        const data = await response.json();
        setRunningCampaigns(data);
      } catch (error) {
        console.error("Error fetching running campaigns:", error);
      }
    };

    fetchRunningCampaigns();
  }, []);

  return (
    <div className="flex flex-col bg-gray-50 ">
      {/* Banner/Slider Section */}
      <Slider></Slider>
      {/* Running Campaigns Section */}
      <section className="running-campaigns my-12 px-4 sm:px-8 lg:px-16 w-11/12 mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Running Campaigns
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {runningCampaigns.length > 0 ? (
            runningCampaigns.map((campaign) => (
              <div
                key={campaign._id}
                className="card bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src={campaign.thumbnail}
                  alt={campaign.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h4 className="font-semibold text-xl text-gray-800 mb-2">
                  {campaign.title}
                </h4>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {campaign.description}
                </p>
                <p className="text-gray-700 font-medium mb-4">
                  Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                </p>
                <Link
                  to={`/details/${campaign._id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  See More
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center col-span-full">
              No running campaigns found.
            </p>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="extra-section-1 bg-blue-50 py-12 px-4 sm:px-8 lg:px-16 w-11/12 mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Why Choose Us?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <FaCheckCircle className="text-blue-600 text-6xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Trusted Platform</h4>
            <p className="text-gray-700">
              We are a trusted platform connecting people to impactful projects.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaUsers className="text-blue-600 text-6xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Community Focused</h4>
            <p className="text-gray-700">
              Join a community that shares your passion for change.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaRocket className="text-blue-600 text-6xl mb-4" />
            <h4 className="text-xl font-semibold mb-2">Fast Growth</h4>
            <p className="text-gray-700">
              See your campaigns grow with support from our network.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="extra-section-2 bg-gray-100 py-12 px-4 sm:px-8 lg:px-16 w-11/12 mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Success Stories
        </h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          Read about the successful campaigns that have made a difference in
          people's lives. See how your contributions can help create more
          success stories.
        </p>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12 px-4 sm:px-8 lg:px-16 w-11/12 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Start Your Campaign Today</h3>
          <p className="text-lg mb-6">
            Bring your ideas to life and connect with people who believe in your
            vision. Create your campaign now!
          </p>
          <Link
            to="/create-campaign"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
