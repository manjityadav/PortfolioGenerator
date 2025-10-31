import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [template, setTemplate] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const selectedTemplate = localStorage.getItem("Template");
    const userData = JSON.parse(localStorage.getItem("PortfolioData"));
    setTemplate(selectedTemplate || "Template1"); // ✅ default to Template1
    setData(userData);
  }, []);

  if (!data) {
    return (
      <div className="text-center mt-20 text-gray-600">
        <h2 className="text-2xl font-bold">No Portfolio Data Found</h2>
        <p>Please go back and fill your portfolio details first.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {template === "Template2" ? (
        <Template2 data={data} />
      ) : (
        <Template1 data={data} /> // ✅ default render Template1
      )}
    </div>
  );
};

export default Portfolio;

//
// ---------------- Template 1 ----------------
//
const Template1 = ({ data }) => {
  const { hero, about, skills, portfolio } = data || {};

  const skillList = Array.isArray(skills)
    ? skills
    : typeof skills === "string"
    ? skills.split(",")
    : [];

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-red-500">{hero?.name}</h1>
          <p className="text-gray-600">{hero?.title}</p>
        </div>
        <img
          src={hero?.profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-yellow-400 mt-5 sm:mt-0"
        />
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-semibold border-b-2 border-yellow-400 mb-2">
            About Me
          </h2>
          <p className="text-gray-700 mb-2">{about?.bio}</p>
          <p className="text-sm text-gray-600">📧 {about?.email}</p>
          <p className="text-sm text-gray-600">📞 {about?.phone}</p>
          <p className="text-sm text-gray-600">📍 {about?.location}</p>
          <p className="text-sm text-gray-600">🔗 {about?.socials}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b-2 border-yellow-400 mb-2">
            Skills
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            {skillList.length > 0
              ? skillList.map((skill, i) => <li key={i}>{skill.trim()}</li>)
              : ["", "", ""].map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </section>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold border-b-2 border-yellow-400 mb-3">
          Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {(portfolio || [{ description: "" }]).map((proj, i) => (
            <div
              key={i}
              className="p-4 bg-gray-100 rounded-lg hover:shadow-md transition"
            >
              <p className="text-gray-600 text-sm mt-1">
                {proj.description || "No project description"}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

//
// ---------------- Template 2 ----------------
//
const Template2 = ({ data }) => {
  const { hero, about, skills, portfolio } = data || {};

  const skillList = Array.isArray(skills)
    ? skills
    : typeof skills === "string"
    ? skills.split(",")
    : [];

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-10">
        <h1 className="text-5xl font-bold">{hero?.name || "Jane Smith"}</h1>
        <p className="text-lg">{hero?.title || ""}</p>
      </div>

      <div className="p-10 grid sm:grid-cols-3 gap-8">
        <div className="sm:col-span-1">
          <h2 className="text-2xl font-bold mb-3 text-purple-600">About</h2>
          <p className="text-gray-700 mb-2">{about?.bio}</p>
          <p className="text-sm text-gray-600">📧 {about?.email}</p>
          <p className="text-sm text-gray-600">📞 {about?.phone}</p>
          <p className="text-sm text-gray-600">📍 {about?.location}</p>
          <p className="text-sm text-gray-600">🔗 {about?.socials}</p>

          <h2 className="text-2xl font-bold mt-6 mb-3 text-purple-600">
            Skills
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            {skillList.length > 0
              ? skillList.map((skill, i) => <li key={i}>{skill.trim()}</li>)
              : ["", "", "", ""].map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>

        <div className="sm:col-span-2">
          <h2 className="text-2xl font-bold mb-3 text-purple-600">Projects</h2>
          <div className="grid gap-5">
            {(portfolio || [{ description: "" }]).map((proj, i) => (
              <div
                key={i}
                className="border border-gray-200 p-5 rounded-lg hover:shadow-lg transition"
              >
                <p className="text-gray-600 text-sm mt-1">
                  {proj.description || "No project description"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
