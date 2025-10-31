import { useState } from "react";

export default function SkillsSection({ data, setData }) {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (!skill.trim()) return;
    setData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill.trim()],
    }));
    setSkill("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Skills</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Enter a skill"
          className="border px-3 py-1 rounded w-full"
        />
        <button
          type="button"
          onClick={addSkill}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {data.skills.map((s, idx) => (
          <span key={idx} className="bg-gray-100 px-3 py-1 rounded-full">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
