import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";

const AboutSection = ({ theme, typewriter }) => {
  return (
    <section
      className={`${theme === "light" ? "bg-white" : "bg-gray-900"} py-12`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <Slide direction="up">
          <h2
            className={`${
              theme === "light" ? "text-slate-600" : "text-white"
            } text-4xl font-bold text-center mb-6`}
          >
            About Crowd Cube
          </h2>
        </Slide>

        <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          <Slide direction="left">
            <div className=" mb-8 md:mb-0">
              <img
                src="https://i.ibb.co/n64QBTw/freepik-the-style-is-candid-image-photography-with-natural-52445.jpg"
                alt="Crowd Cube Fundraising"
                className="rounded-lg shadow-lg w-[800px] h-auto transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </Slide>

          <Slide direction="right">
            <div className=" md:p-20">
              <div className="flex justify-center my-12">
                <h1
                  className={`text-4xl font-bold ${
                    theme === "light" ? "text-gray-800" : "text-white"
                  }`}
                >
                  <Typewriter
                    words={[
                      "Welcome to Crowd Cube!",
                      "Join Us in Making a Difference!",
                      "Support Your Community!",
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
              </div>
              <p
                className={`${
                  theme === "light" ? "text-gray-500" : "text-gray-400"
                } text-md mb-6 font-semibold px-16`}
              >
                Our mission is to empower individuals and communities through
                fundraising initiatives that create lasting change. We believe
                that together, we can make a significant impact on the lives of
                those in need.
              </p>
              <p
                className={`${
                  theme === "light" ? "text-gray-500" : "text-gray-400"
                } text-md mb-6 font-semibold px-16`}
              >
                Crowd Cube connects passionate fundraisers with generous donors,
                fostering a community of support and compassion.
              </p>
            </div>
          </Slide>
        </div>

        <Slide direction="up">
          <div
            className={`mb-8 p-6 ${
              theme === "light" ? "bg-blue-50" : "bg-blue-800"
            } rounded-lg shadow-md`}
          >
            <h3
              className={`${
                theme === "light" ? "text-blue-600" : "text-blue-300"
              } text-3xl font-semibold mb-4`}
            >
              Our Mission
            </h3>
            <p
              className={`${
                theme === "light" ? "text-gray-500" : "text-gray-400"
              } text-md mb-4`}
            >
              We strive to create a platform where every fundraiser can thrive.
              By providing resources, support, and a community of like-minded
              individuals, we aim to help you achieve your fundraising goals and
              make a difference in the world.
            </p>
          </div>
        </Slide>

        <Slide direction="up">
          <div
            className={`mb-8 p-6 ${
              theme === "light" ? "bg-green-50" : "bg-green-800"
            } rounded-lg shadow-md`}
          >
            <h3
              className={`${
                theme === "light" ? "text-green-600" : "text-green-300"
              } text-3xl font-semibold mb-4`}
            >
              How You Can Help
            </h3>
            <ul
              className={`${
                theme === "light" ? "text-gray-500" : "text-gray-400"
              } list-disc list-inside`}
            >
              <li className="mb-2">
                💖 <strong>Start a Fundraiser:</strong> Create your own
                fundraising campaign and rally support for a cause you care
                about.
              </li>
              <li className="mb-2">
                🤝 <strong>Donate:</strong> Contribute to existing campaigns and
                help individuals and communities in need.
              </li>
              <li className="mb-2">
                📣 <strong>Spread the Word:</strong> Share our mission with your
                network. The more people know about Crowd Cube, the more we can
                achieve together.
              </li>
              <li className="mb-2">
                💵 <strong>Financial Contributions:</strong> Your monetary
                donations will directly support our operational efforts and help
                fund various initiatives.
              </li>
            </ul>
          </div>
        </Slide>

        <Slide direction="up">
          <div
            className={`mb-8 p-6 ${
              theme === "light" ? "bg-yellow-50" : "bg-yellow-800"
            } rounded-lg shadow-md`}
          >
            <h3
              className={`${
                theme === "light" ? "text-yellow-600" : "text-yellow-300"
              } text-3xl font-semibold mb-4`}
            >
              Join Us in Making a Difference
            </h3>
            <p
              className={`${
                theme === "light" ? "text-gray-500" : "text-gray-400"
              } text-md mb-6`}
            >
              Together, we can create a supportive community where everyone
              feels empowered to make a difference. Thank you for being part of
              Crowd Cube, where your contributions can truly change lives. Let’s
              work together to support those in need!
            </p>
          </div>
        </Slide>

        <div className="text-center">
          <Slide direction="up">
            <Link
              to="/all-campaigns"
              className={`btn ${
                theme === "light" ? "bg-blue-600" : "bg-blue-800"
              } text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:${
                theme === "light" ? "bg-blue-500" : "bg-blue-700"
              } transition duration-300 transform hover:scale-105`}
            >
              Get Involved
            </Link>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
