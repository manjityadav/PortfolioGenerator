import { useState } from "react";

export default function ServicesSection({ data, setData }) {
  const [service, setService] = useState({ name: "", description: "" });

  const addService = () => {
    if (service.name.trim()) {
      setData((prev) => ({
        ...prev,
        services: [...prev.services, service],
      }));
      setService({ name: "", description: "" });
    }
  };

  return (
    <div className="space-y-4">
      <input
        name="name"
        value={service.name}
        onChange={(e) => setService({ ...service, name: e.target.value })}
        placeholder="Service Name"
        className="border p-2 w-full rounded"
      />
      <textarea
        name="description"
        value={service.description}
        onChange={(e) => setService({ ...service, description: e.target.value })}
        placeholder="Service Description"
        className="border p-2 w-full rounded"
      />
      <button
        type="button"
        onClick={addService}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Service
      </button>

      <ul className="list-disc pl-5">
        {data.services.map((s, i) => (
          <li key={i}>{s.name} — {s.description}</li>
        ))}
      </ul>
    </div>
  );
}
