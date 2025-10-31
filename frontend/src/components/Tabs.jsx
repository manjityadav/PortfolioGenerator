const tabs = ["Hero", "About", "Skills", "Services", "Portfolio", "Testimonials", "Blog", "Contact"];

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
