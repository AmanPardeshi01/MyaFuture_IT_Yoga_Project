import React, { useState } from "react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const photos = [
    { id: 1, src: "https://cdn.pixabay.com/photo/2016/11/18/15/05/beach-1835213_640.jpg", alt: "Photo 1" },
    { id: 2, src: "https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_640.jpg", alt: "Photo 2" },
    { id: 3, src: "https://cdn.pixabay.com/photo/2018/01/01/01/57/woman-3053492_960_720.jpg", alt: "Photo 3" },
    { id: 4, src: "https://cdn.pixabay.com/photo/2019/06/26/09/52/yoga-4300033_640.jpg", alt: "Photo 4" },
    { id: 5, src: "https://cdn.pixabay.com/photo/2020/02/15/00/33/yoga-4849681_1280.jpg", alt: "Photo 5" },
    { id: 6, src: "https://cdn.pixabay.com/photo/2016/01/18/09/46/yoga-1146277_640.jpg", alt: "Photo 6" },
  ];

  const videos = [
    { id: 1, src: "https://cdn.pixabay.com/video/2023/11/16/189349-885460889_tiny.mp4", alt: "Video 1" },
    { id: 2, src: "https://cdn.pixabay.com/video/2024/03/30/206257_tiny.mp4", alt: "Video 2" },
    { id: 3, src: "https://cdn.pixabay.com/video/2020/06/11/41724-430090688_tiny.mp4", alt: "Video 3" },
    { id: 4, src: "https://cdn.pixabay.com/video/2023/08/12/175740-854057997_tiny.mp4", alt: "Video 4" },
    { id: 5, src: "https://cdn.pixabay.com/video/2024/07/04/219499_tiny.mp4", alt: "Video 5" },
    { id: 6, src: "https://cdn.pixabay.com/video/2023/10/08/184120-872701374_large.mp4", alt: "Video 6" },
  ];

  return (
    <div className=" mt-5 mb-5 p-4 sm:p-8 bg-gray-100 min-h-screen">
      {/* Heading Section */}
      <div className="text-center mb-6">
        <h1 className="italic... text-4xl font-bold text-blue-600">Our Gallery</h1>
      </div>

      {/* Button Section */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold text-white rounded-md ${activeTab === "photos" ? "bg-blue-600" : "bg-gray-400"}`}
          onClick={() => setActiveTab("photos")}
        >
          Photos
        </button>
        <button
          className={`px-4 py-2 font-semibold text-white rounded-md ${activeTab === "videos" ? "bg-blue-600" : "bg-gray-400"}`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {(activeTab === "photos" ? photos : videos).map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-md overflow-hidden">
            {activeTab === "photos" ? (
              <div className="transition-transform transform hover:scale-105">
                <img src={item.src} alt={item.alt} className="w-full h-auto rounded-md" />
              </div>
            ) : (
              <video controls className="w-full h-auto rounded-md">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
