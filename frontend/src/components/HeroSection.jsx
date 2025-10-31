export default function HeroSection({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, hero: { ...prev.hero, [name]: value } }));
  };

  return (
    <div className="space-y-4">
      <input name="name" value={data.hero.name} onChange={handleChange} placeholder="Your Name" className="border p-2 w-full rounded" />
      <input name="title" value={data.hero.title} onChange={handleChange} placeholder="Your Title" className="border p-2 w-full rounded" />
      <input name="tagline" value={data.hero.tagline} onChange={handleChange} placeholder="Tagline" className="border p-2 w-full rounded" />
      <input name="profileImage" value={data.hero.profileImage} onChange={handleChange} placeholder="Profile Image URL" className="border p-2 w-full rounded" />
    </div>
  );
}
