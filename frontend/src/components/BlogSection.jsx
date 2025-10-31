import { useState } from "react";

export default function BlogSection({ data, setData }) {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  const addBlog = () => {
    if (blog.title.trim()) {
      setData((prev) => ({
        ...prev,
        blog: [...prev.blog, blog],
      }));
      setBlog({ title: "", content: "" });
    }
  };

  return (
    <div className="space-y-4">
      <input
        name="title"
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        placeholder="Blog Title"
        className="border p-2 w-full rounded"
      />
      <textarea
        name="content"
        value={blog.content}
        onChange={(e) => setBlog({ ...blog, content: e.target.value })}
        placeholder="Blog Content"
        className="border p-2 w-full rounded"
      />
      <button
        type="button"
        onClick={addBlog}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Blog
      </button>

      <ul className="list-disc pl-5">
        {data.blog.map((b, i) => (
          <li key={i}>{b.title}</li>
        ))}
      </ul>
    </div>
  );
}
