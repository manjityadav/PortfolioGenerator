import { useState } from "react";

export default function PortfolioSection({ data, setData }) {
  const [description, setDescription] = useState("");

  const addProject = () => {
    const text = description.trim();
    if (!text) return;
    setData((prev) => ({
      ...prev,
      portfolio: Array.isArray(prev.portfolio) ? [...prev.portfolio, { description: text }] : [{ description: text }],
    }));
    setDescription("");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Portfolio</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Project description"
          className="border px-3 py-1 rounded w-full"
        />
        <button type="button" onClick={addProject} className="bg-blue-600 text-white px-4 rounded">
          Add
        </button>
      </div>

      <ul className="mt-3 list-disc pl-5">
        {(data.portfolio || []).map((p, idx) => (
          <li key={idx}>{p.description}</li>
        ))}
      </ul>
    </div>
  );
}
