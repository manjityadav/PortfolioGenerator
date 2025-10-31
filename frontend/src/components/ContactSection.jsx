export default function ContactSection({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      contact: { ...prev.contact, [name]: value },
    }));
  };

  return (
    <div className="space-y-4">
      <input
        name="address"
        value={data.contact.address}
        onChange={handleChange}
        placeholder="Address"
        className="border p-2 w-full rounded"
      />
      <input
        name="email"
        value={data.contact.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 w-full rounded"
      />
      <input
        name="phone"
        value={data.contact.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="border p-2 w-full rounded"
      />
    </div>
  );
}
