export default function AboutSection({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, about: { ...prev.about, [name]: value } }));
  };

  return (
    <div className="space-y-4">
      <textarea name="bio" value={data.about.bio} onChange={handleChange} placeholder="Your Bio" className="border p-2 w-full rounded" />
      <input name="email" value={data.about.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full rounded" />
      <input name="phone" value={data.about.phone} onChange={handleChange} placeholder="Phone" className="border p-2 w-full rounded" />
      <input name="location" value={data.about.location} onChange={handleChange} placeholder="Location" className="border p-2 w-full rounded" />
      <input name="socials" value={data.about.socials} onChange={handleChange} placeholder="Social Links" className="border p-2 w-full rounded" />
    </div>
  );
}
