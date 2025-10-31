import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Tabs from "../components/Tabs";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import ProfileCard from "../components/ProfileCard";

export default function PortfolioForm() {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ get selected template from navigation state
  const selectedTemplate = location.state?.template || "Template1";

  const [activeTab, setActiveTab] = useState("Hero");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ initialize form data
  const [formData, setFormData] = useState({
    hero: { name: "", title: "", tagline: "", profileImage: "" },
    about: { bio: "", email: "", phone: "", location: "", socials: "" },
    skills: [],
    services: [],
    portfolio: [],
    testimonials: [],
    blog: [],
    contact: { address: "", email: "", phone: "" },
    template: selectedTemplate, // ✅ correct key name
  });

  // ✅ (Optional) update if user changed template in localStorage
  useEffect(() => {
    const storedTemplate = localStorage.getItem("Template");
    if (storedTemplate) {
      setFormData((prev) => ({ ...prev, template: storedTemplate })); // ✅ lowercase key
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post("https://portfoliogenerator-1-2sdn.onrender.com/api/portfolio", formData);
      console.log(" Saved:", res.data);

    
      localStorage.setItem("PortfolioData", JSON.stringify(res.data));

      setIsSubmitted(true);

      setTimeout(() => {
        navigate("/"); // ✅ go back to home after submit
      }, 1000);
    } catch (err) {
      console.error("❌ Error saving:", err);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <ProfileCard data={formData} />
      </div>
    );
  }

  const renderSection = () => {
    switch (activeTab) {
      case "Hero": return <HeroSection data={formData} setData={setFormData} />;
      case "About": return <AboutSection data={formData} setData={setFormData} />;
      case "Skills": return <SkillsSection data={formData} setData={setFormData} />;
      case "Services": return <ServicesSection data={formData} setData={setFormData} />;
      case "Portfolio": return <PortfolioSection data={formData} setData={setFormData} />;
      case "Testimonials": return <TestimonialsSection data={formData} setData={setFormData} />;
      case "Blog": return <BlogSection data={formData} setData={setFormData} />;
      case "Contact": return <ContactSection data={formData} setData={setFormData} />;
      default: return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg mt-4 space-y-6">
        {renderSection()}
        {activeTab === "Contact" && (
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Submit Portfolio
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
