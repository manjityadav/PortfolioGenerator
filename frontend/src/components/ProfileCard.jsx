import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileCard({ data }) {
  const { hero, about, skills, portfolio } = data;
  const navigate = useNavigate();

  // Handle both string and array skill formats
  const skillList = Array.isArray(skills)
    ? skills
    : typeof skills === "string"
    ? skills.split(",")
    : [];

  // 🔹 Handle View Portfolio click
  const handleViewPortfolio = () => {
    // Save selected portfolio data in localStorage
    localStorage.setItem("PortfolioData", JSON.stringify(data));
    navigate("/portfolio");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center transition-all hover:scale-105 duration-200">
      {/* Profile Image */}
      <img
        src={hero?.profileImage || "https://via.placeholder.com/150"}
        alt="Profile"
        className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-blue-500 shadow-md"
      />

      {/* Hero Info */}
      <h2 className="text-2xl font-bold mt-4 text-gray-800">
        {hero?.name || "Your Name"}
      </h2>
      <p className="text-gray-600">{hero?.title || "Your Role"}</p>

      {/* About Section */}
      <p className="text-gray-700 mt-3 italic">
        {about?.bio || "Short bio goes here..."}
      </p>

      {/* Skills Section */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {skillList.length > 0 ? (
          skillList.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {skill.trim()}
            </span>
          ))
        ) : (
          <p className="text-gray-400 text-sm">No skills added</p>
        )}
      </div>

      {/* 🔹 Portfolio Section */}
      <div className="mt-6 text-left">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
          Projects
        </h3>
        {portfolio && portfolio.length > 0 ? (
          <ul className="list-disc pl-6 text-gray-700 text-sm text-left inline-block">
            {portfolio.map((project, idx) => (
              <li key={idx}>{project.description || "Untitled project"}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-sm text-center">
            No projects added yet
          </p>
        )}
      </div>

      {/* View Portfolio Button */}
      <button
        className="mt-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-200"
        onClick={handleViewPortfolio}
      >
        View Portfolio →
      </button>
    </div>
  );
}
