import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { IoAdd, IoRemove } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const jobListings = [
  { id: 1, title: "Product Designer", category: "Design" },
  { id: 2, title: "Engineering Manager", category: "Development" },
  { id: 3, title: "Customer Success Manager", category: "Customer Service" },
  { id: 4, title: "Account Executive", category: "Finance" },
  { id: 5, title: "SEO Marketing Manager", category: "Marketing" },
];

const categories = [
  "View all",
  "Development",
  "Design",
  "Marketing",
  "Customer Service",
  "Finance",
  "Management",
];

const Career = () => {
  const navigate = useNavigate();
  const [expandedJob, setExpandedJob] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("View all");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const toggleJobDetails = (jobId) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const filteredJobs =
    selectedCategory === "View all"
      ? jobListings
      : jobListings.filter((job) => job.category === selectedCategory);

  const openPopup = (job) => {
    setSelectedJob(job);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedJob(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      closePopup();
      navigate("/");
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow w-full mx-auto p-8 pt-36">
        <div className=" py-8 text-left">
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold border">
            We&apos;re hiring!
          </button>
          <h1 className="text-3xl md:text-5xl font-bold mt-4">
            Be part of our mission
          </h1>
          <p className="mt-4 text-gray-600 w-full max-w-2xl break-words">
            We&apos;re looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">Job Openings</h2>
        <div className="flex flex-wrap gap-2 mb-4 ">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 border rounded-full transition ${selectedCategory === category ? "bg-black text-white" : "bg-gray-200"
                }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="border rounded-lg p-6 shadow-md w-full">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleJobDetails(job.id)}
                >
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  {expandedJob === job.id ? <IoRemove size={24} /> : <IoAdd size={24} />}
                </div>
                {expandedJob === job.id && (
                  <div className="mt-3 text-gray-600">
                    <p className="break-words overflow-hidden max-w-full">
                      We&apos;re looking for a {job.title.toLowerCase()} to join our team.
                    </p>
                    <div className="mt-2 flex gap-3 flex-wrap">
                      <span className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
                        <IoLocationOutline /> 100% Remote
                      </span>
                      <span className="flex items-center gap-1 px-3 py-1 border rounded-full text-sm">
                        <IoMdTime /> Full-time
                      </span>
                    </div>
                    <button
                      className="mt-3 w-full bg-black text-white py-2 rounded-lg"
                      onClick={() => openPopup(job)}
                    >
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No openings available</p>
          )}
        </div>


        {/* Popup */}
        {isPopupOpen && selectedJob && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-500 hover:text-black"
              >
                &times;
              </button>

              {showThankYou ? (
                <h2 className="text-xl font-semibold text-center">
                  Thanks for connecting with us!
                </h2>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-4">
                    Apply for {selectedJob.title}
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="block text-sm font-medium">Full Name</label>
                      <input type="text" className="w-full p-2 border rounded" required />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium">Email</label>
                      <input type="email" className="w-full p-2 border rounded" required />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium">Current City</label>
                      <input type="text" className="w-full p-2 border rounded" required />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium">State</label>
                      <input type="text" className="w-full p-2 border rounded" required />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium">Resume</label>
                      <input type="file" className="w-full p-2 border rounded" required />
                    </div>
                    <button type="submit" className="w-full bg-black text-white py-2 rounded mt-3">
                      Submit Application
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Career;
