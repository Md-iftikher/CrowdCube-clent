import { FaHandsHelping, FaUsers, FaClipboardList } from 'react-icons/fa';

const CommunityImpactSection = ({ theme }) => {
  return (
    <div className={`py-12 ${theme === "light" ? "bg-gray-50" : "bg-gray-900"}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-4xl font-bold mb-8 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
          Our Community Impact
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className={`  p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border border-gray-200 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <div className="flex items-center justify-center mb-4">
              <FaHandsHelping className="h-12 w-12 text-blue-500" />
            </div>
            <h3 className={`text-3xl font-bold ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>50,000+</h3>
            <p className={`text-gray-600 ${theme === "light" ? "text-gray-600" : "text-gray-200"}`}>Total Contributions Made</p>
          </div>
          <div className={`p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border border-gray-200 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <div className="flex items-center justify-center mb-4">
              <FaUsers className="h-12 w-12 text-green-500" />
            </div>
            <h3 className={`text-3xl font-bold ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>10,000+</h3>
            <p className={`text-gray-600 ${theme === "light" ? "text-gray-600" : "text-gray-200"}`}>Individuals Supported</p>
          </div>
          <div className={`p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 border border-gray-200 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
            <div className="flex items-center justify-center mb-4">
              <FaClipboardList className="h-12 w-12 text-yellow-500" />
            </div>
            <h3 className={`text-3xl font-bold ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>500+</h3>
            <p className={`text-gray-600 ${theme === "light" ? "text-gray-600" : "text-gray-200"}`}>Campaigns Launched</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityImpactSection;