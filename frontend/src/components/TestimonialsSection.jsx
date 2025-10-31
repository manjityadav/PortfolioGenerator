import { useState } from "react";

export default function TestimonialsSection({ data, setData }) {
  const [testimonial, setTestimonial] = useState({
    name: "",
    feedback: "",
  });

  const addTestimonial = () => {
    if (testimonial.name.trim()) {
      setData((prev) => ({
        ...prev,
        testimonials: [...prev.testimonials, testimonial],
      }));
      setTestimonial({ name: "", feedback: "" });
    }
  };

  return (
    <div className="space-y-4">
      <input
        name="name"
        value={testimonial.name}
        onChange={(e) => setTestimonial({ ...testimonial, name: e.target.value })}
        placeholder="Client Name"
        className="border p-2 w-full rounded"
      />
      <textarea
        name="feedback"
        value={testimonial.feedback}
        onChange={(e) => setTestimonial({ ...testimonial, feedback: e.target.value })}
        placeholder="Feedback"
        className="border p-2 w-full rounded"
      />
      <button
        type="button"
        onClick={addTestimonial}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Testimonial
      </button>

      <ul className="list-disc pl-5">
        {data.testimonials.map((t, i) => (
          <li key={i}>{t.name}: “{t.feedback}”</li>
        ))}
      </ul>
    </div>
  );
}
