import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = ({ theme }) => {
  return (
    <section className={`${theme === "light" ? "bg-white" : "bg-gray-900"} py-12`}>
      <div className="container mx-auto px-6 md:px-12">
        <h2 className={`${theme === "light" ? "text-slate-600" : "text-white"} text-4xl font-bold text-center mb-6`}>
          About Crowd Cube
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img 
              src="https://i.ibb.co.com/n64QBTw/freepik-the-style-is-candid-image-photography-with-natural-52445.jpg"
              alt="Crowd Cube Fundraising" 
              className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 h-[500px] w-[400px]"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <p className={`${theme === "light" ? "text-gray-600" : "text-gray-300"} text-2xl mb-4`}>
              <strong>Welcome to Crowd Cube!</strong>
            </p>
            <p className={`${theme === "light" ? "text-gray-500" : "text-gray-400"} text-md mb-6 font-semibold`}>
              Our mission is to empower individuals and communities through fundraising initiatives that create lasting change. We believe that together, we can make a significant impact on the lives of those in need.
            </p>
            <p className={`${theme === "light" ? "text-gray-500" : "text-gray-400"} text-md mb-6 font-semibold`}>
              Crowd Cube connects passionate fundraisers with generous donors, fostering a community of support and compassion.
            </p>
          </div>
        </div>

        <div className={`mb-8 p-6 ${theme === "light" ? "bg-blue-50" : "bg-blue-800"} rounded-lg shadow-md`}>
          <h3 className={`${theme === "light" ? "text-blue-600" : "text-blue-300"} text-3xl font-semibold mb-4`}>Our Mission</h3>
          <p className={`${theme === "light" ? "text-gray-500" : "text-gray-400"} text-md mb-4`}>
            We strive to create a platform where every fundraiser can thrive. By providing resources, support, and a community of like-minded individuals, we aim to help you achieve your fundraising goals and make a difference in the world.
          </p>
        </div>

        <div className={`mb-8 p-6 ${theme === "light" ? "bg-green-50" : "bg-green-800"} rounded-lg shadow-md`}>
          <h3 className={`${theme === "light" ? "text-green-600" : "text-green-300"} text-3xl font-semibold mb-4`}>How You Can Help</h3>
          <ul className={`${theme === "light" ? "text-gray-500" : "text-gray-400"} list-disc list-inside`}>
            <li className="mb-2">💖 <strong>Start a Fundraiser:</strong> Create your own fundraising campaign and rally support for a cause you care about.</li>
            <li className="mb-2">🤝 <strong>Donate:</strong> Contribute to existing campaigns and help individuals and communities in need.</li>
            <li className="mb-2">📣 <strong>Spread the Word:</strong> Share our mission with your network. The more people know about Crowd Cube, the more we can achieve together.</li>
            <li className="mb-2">💵 <strong>Financial Contributions:</strong> Your monetary donations will directly support our operational efforts and help fund various initiatives.</li>
          </ul>
        </div>

        <div className={`mb-8 p-6 ${theme === "light" ? "bg-yellow-50" : "bg-yellow-800"} rounded-lg shadow-md`}>
          <h3 className={`${theme === "light" ? "text-yellow-600" : "text-yellow-300"} text-3xl font-semibold mb-4`}>Join Us in Making a Difference</ h3>
          <p className={`${theme === "light" ? "text-gray-500" : "text-gray-400"} text-md mb-6`}>
            Together, we can create a supportive community where everyone feels empowered to make a difference. Thank you for being part of Crowd Cube, where your contributions can truly change lives. Let’s work together to support those in need!
          </p>
        </div>

        <div className="text-center">
          <Link to="/all-campaigns" className={`btn ${theme === "light" ? "bg-blue-600" : "bg-blue-800"} text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:${theme === "light" ? "bg-blue-500" : "bg-blue-700"} transition duration-300 transform hover:scale-105`}>
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;