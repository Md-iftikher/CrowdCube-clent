import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaUsers, FaRocket, FaStar } from "react-icons/fa";
import Banner from "../Components/Banner";
import CommunityImpactSection from "../HomeComponents/CommunityImpactSection";
import AboutSection from "../HomeComponents/AboutSection";
import TestimonialsSection from "../HomeComponents/TestimonialsSection";
import { ThemeContext } from "../Components/ThemeContext";
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';

const HomePage = () => {
  const { theme } = useContext(ThemeContext);
  const [runningCampaigns, setRunningCampaigns] = useState([]);

  useEffect(() => {
    const fetchRunningCampaigns = async () => {
      try {
        const response = await fetch(
          "https://crowdcube-server-ruddy.vercel.app/campaigns?status=running&limit=6"
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
    <div
      className={`flex flex-col ${
        theme === "light" ? "bg-gray-50" : "bg-gray-900 text-white"
      }`}
    >
      {/* Banner/Slider Section */}
      <Banner />

      <AboutSection theme={theme} />

      {/* Typewriter Effect for Headline */}
      <div className="flex justify-center my-12">
        <h1 className={`text-4xl font-bold ${theme === "light" ? "text-gray-800" : "text-white"}`}>
          <Typewriter
            words={['Welcome to Crowd Cube!', 'Join Us in Making a Difference!', 'Support Your Community!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </div>

      {/* Running Campaigns Section */}
      <section className="running-campaigns my-12 px-4 sm:px-8 lg:px-16 w-11/12 mx-auto">
        <h3
          className={`text-3xl font-bold ${
            theme === "light" ? "text-gray-800" : "text-gray-200"
          } mb-6 text-center`}
        >
          Running Campaigns
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {runningCampaigns.length > 0 ? (
            runningCampaigns.map((campaign) => (
              <Fade key={campaign._id} duration={1000}>
                <div
                  className={`card ${
                    theme === "light" ? "bg-blue-100" : "bg-slate-700"
                  } p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105`}
                >
                  <img
                    src={campaign.thumbnail}
                    alt={campaign.title}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                  <h4
                    className={`font-semibold text-xl ${
                      theme === "light" ? "text-gray-800" : "text-gray-200"
                    } mb-2`}
                  >
                    {campaign.title}
                  </h4>
                  <p
                    className={`text-gray-600 mb-4 line-clamp-3 ${
                      theme === "light" ? "text-gray-600" : "text-white"
                    }`}
                  >
                    {campaign.description}
                  </p>
                  <p
                    className={`text-gray-700 font-medium mb-4 ${
                      theme === "light" ? "text-gray-700" : "text-white"
                    }`}
                  >
                    Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                  </p>
                  <Link
                    to={`/details/${campaign._id}`}
                    className={`inline-block ${
                      theme === "light" ? "bg-blue-600" : "bg-blue-500"
                    } text-white px-4 py-2 rounded-md hover:bg-blue-700 transition `}
                  >
                    View Details
                  </Link>
                </div>
              </Fade>
            ))
          ) : (
            <p className="text-center text-gray-500">No running campaigns available.</p>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className={`extra-section-1 ${
          theme === "light" ? "bg-gray-100" : "bg-gray-900"
        } py-12 px-4 sm:px-8 lg:px-16`}
      >
        <h3
          className={`text-3xl font-bold ${
            theme === "light" ? "text-gray-800" : "text-gray-200"
          } mb-6 text-center`}
        >
          Why Choose Us?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              theme === "light" ? "bg-white" : "bg-slate-700"
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <FaCheckCircle className="text-blue-600 text-6xl" />
            </div>
            <h4
              className={`text-xl font-semibold mb-2 text-center ${
                theme === "light" ? "text-gray-800" : "text-gray-200"
              }`}
            >
              Trusted Platform
            </h4>
            <p
              className={`text-gray-700 text-center ${
                theme === "light" ? "text-gray-700" : "text-gray-100"
              }`}
            >
              We are a trusted platform connecting people to impactful projects.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              theme === "light" ? "bg-white" : "bg-slate-700"
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <FaUsers className="text-blue-600 text-6xl" />
            </div>
            <h4
              className={`text-xl font-semibold mb-2 text-center ${
                theme === "light" ? "text-gray-800" : "text-gray-200"
              }`}
            >
              Community Focused
            </h4>
            <p
              className={`text-gray-700 text-center ${
                theme === "light" ? "text-gray-700" : "text-gray-100"
              }`}
            >
              Join a community that shares your passion for change.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              theme === "light" ? "bg-white" : "bg-slate-700"
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <FaRocket className="text-blue-600 text-6xl" />
            </div>
            <h4
              className={`text-xl font-semibold mb-2 text-center ${
                theme === "light" ? "text-gray-800" : "text-gray-200"
              }`}
            >
              Fast Growth
            </h4>
            <p
              className={`text-gray-700 text-center ${
                theme === "light" ? "text-gray-700" : "text-white"
              }`}
            >
              See your campaigns grow with support from our network.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection theme={theme} />

      {/* Community impact Section */}
      <CommunityImpactSection theme={theme} />

      {/* Call-to-Action Section */}
      <section
        className={`cta-section ${
          theme === "light" ? "bg-gray-200" : "bg-gray-800"
        } py-12 px-4 sm:px-8 lg:px-16`}
      >
        <div
          className={`py-10 flex flex-col items-center text-center gap-5 ${
            theme === "light" ? "bg-gray-200" : "bg-gray-800"
          }`}
        >
          <div>
            <h1
              className={`text-xl sm:text-3xl md:text-4xl font-bold ${
                theme === "light" ? "text-blue-900" : "text-blue-300"
              } mb-2 whitespace-pre`}
            >
              We have over{" "}
              <span className=" text-orange-500 underline">a million</span>{" "}
              members <br />
              helping to drive growth & innovation for <br /> businesses across
              the continent
            </h1>
          </div>

          {/* Trustpilot Rating */}
          <div className="flex items-center space-x-2 mt-4">
            <p
              className={`text-lg font-semibold ${
                theme === "light" ? "text-green-600" : "text-green-400"
              }`}
            >
              Excellent
            </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`text-green-600 text-xl`} />
              ))}
            </div>
            <p
              className={`${
                theme === "light" ? "text-gray-700" : "text-gray-400"
              }`}
            >
              8,430 reviews on
            </p>

            <span
              className={`font-semibold ${
                theme === "light" ? "text-green-600" : "text-green-400"
              }`}
            >
              Trustpilot
            </span>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col gap-3">
            <p
              className={`mt-6 text-xl md:text-2xl font-medium ${
                theme === "light" ? "text-gray-800" : "text-gray-300"
              }`}
            >
              Why not join them?
            </p>
            <button className="mt-4 px-6 py-3 bg-orange-500 text-white font-bold text-lg rounded-full hover:bg-orange-600 transition">
              Get started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;