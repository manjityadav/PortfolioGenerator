import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "../components/ProfileCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [portfolios, setPortfolios] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // ✅ Fetch all portfolios from backend
  useEffect(() => {
    axios
 
      .get("http://localhost:8080/api/portfolio")

      .then((res) => setPortfolios(res.data))
      .catch((err) => console.error("Error fetching portfolios:", err));
  }, []);

  // ✅ Navigate to form with template name (no localStorage)
  const handleTemplateSelect = (templateName) => {
    navigate("/form", { state: { template: templateName } });
  };

  // ✅ Filter portfolios by hero name
  const filteredPortfolios = portfolios.filter((p) =>
    p.hero?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center p-5 w-full bg-gray-50 min-h-screen">
      {/* -------------------- HEADER -------------------- */}
      <div className="text-center px-5 mt-4">
        <h1 className="font-bold text-3xl">
          Choose Your <span className="text-red-500">Template</span>
        </h1>
        <p className="text-sm font-light mt-2 text-gray-600">
          Select a professional template and customize it to your needs.
        </p>
      </div>

      {/* -------------------- TEMPLATE CARDS -------------------- */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-8 justify-center w-full max-w-6xl">
        {/* Template 1 */}
        <div className="w-full sm:w-1/2 shadow bg-white rounded-xl overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-64 object-cover"
              src="https://media.istockphoto.com/id/506673736/photo/laptop-computer-with-notepad-pen-on-ivory-table.jpg?s=612x612&w=0&k=20&c=T1sEfP2ZDdqIp9TIfdByDOW60-Ww6GeDBy5YaP_s-MQ="
              alt="Template 1"
            />
            <p className="absolute bottom-3 left-3 text-white font-medium drop-shadow-lg">
              Template 1
            </p>
          </div>
          <div className="p-5">
            <p className="text-gray-600">
              A clean layout with a bright hero section and grid-based portfolio.
            </p>

            <ul className="list-disc grid grid-cols-2 ml-5 mt-3 list-inside text-gray-800">
              <li className="marker:text-red-500">Yellow Hero Section</li>
              <li className="marker:text-red-500">Grid Portfolio</li>
              <li className="marker:text-red-500">Testimonials</li>
              <li className="marker:text-red-500">Contact Form</li>
            </ul>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleTemplateSelect("Template1")}
                className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition-all"
              >
                Customize Template →
              </button>
            </div>
          </div>
        </div>

        {/* Template 2 */}
        <div className="w-full sm:w-1/2 shadow bg-white rounded-xl overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-64 object-cover"
              src="https://images.unsplash.com/photo-1650978813673-df28319b04f5?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
              alt="Template 2"
            />
            <p className="absolute bottom-3 left-3 text-white font-medium drop-shadow-lg">
              Template 2
            </p>
          </div>
          <div className="p-5">
            <p className="text-gray-600">
              A bold split-screen layout with timeline skills and blog section.
            </p>

            <ul className="list-disc grid grid-cols-2 ml-5 mt-3 list-inside text-gray-800">
              <li className="marker:text-red-500">Split Hero Layout</li>
              <li className="marker:text-red-500">Timeline Skills</li>
              <li className="marker:text-red-500">Masonry Portfolio</li>
              <li className="marker:text-red-500">Blog Section</li>
            </ul>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleTemplateSelect("Template2")}
                className="bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition-all"
              >
                Customize Template →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- SAVED PORTFOLIOS -------------------- */}
      <div className="mt-10 w-full max-w-6xl">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
          Saved Portfolios
        </h2>

        {/* 🔍 Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-full px-5 py-2 w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {filteredPortfolios.length === 0 ? (
          <p className="text-center text-gray-500">No portfolios found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolios.map((portfolio) => (
              <ProfileCard key={portfolio._id} data={portfolio} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
