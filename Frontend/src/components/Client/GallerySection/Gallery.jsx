import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("photos");
  const [displayedImages, setDisplayedImages] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  const photos = [
    { id: 1, src: "https://cdn.pixabay.com/photo/2016/11/20/09/05/yoga-1842292_640.jpg", alt: "Photo 1" },
    { id: 2, src: "https://cdn.pixabay.com/photo/2016/03/27/07/08/man-1282232_640.jpg", alt: "Photo 2" },
    { id: 3, src: "https://cdn.pixabay.com/photo/2018/01/01/01/57/woman-3053492_960_720.jpg", alt: "Photo 3" },
    { id: 4, src: "https://cdn.pixabay.com/photo/2019/06/26/09/52/yoga-4300033_640.jpg", alt: "Photo 4" },
    { id: 5, src: "https://cdn.pixabay.com/photo/2020/02/15/00/33/yoga-4849681_1280.jpg", alt: "Photo 5" },
    { id: 6, src: "https://cdn.pixabay.com/photo/2016/01/18/09/46/yoga-1146277_640.jpg", alt: "Photo 6" },
    { id: 7, src: "https://cdn.pixabay.com/photo/2017/03/26/21/54/yoga-2176668_640.jpg", alt: "Photo 7" },
    { id: 8, src: "https://cdn.pixabay.com/photo/2022/09/19/14/53/monk-7465763_640.jpg", alt: "Photo 8" },
    { id: 9, src: "https://cdn.pixabay.com/photo/2017/08/06/00/27/yoga-2587066_640.jpg", alt: "Photo 9" },
    { id: 10, src: "https://cdn.pixabay.com/photo/2019/07/12/20/56/zumba-4333580_640.jpg", alt: "Photo 10" },
    { id: 11, src: "https://cdn.pixabay.com/photo/2019/12/31/16/06/yoga-4732209_640.jpg", alt: "Photo 11" },
    { id: 12, src: "https://cdn.pixabay.com/photo/2021/03/27/10/43/yoga-6128116_640.jpg", alt: "Photo 12" },
  ];

  const videos = [
    { id: 1, src: "https://cdn.pixabay.com/video/2023/11/16/189349-885460889_tiny.mp4", alt: "Video 1" },
    { id: 2, src: "https://cdn.pixabay.com/video/2024/03/30/206257_tiny.mp4", alt: "Video 2" },
    { id: 3, src: "https://cdn.pixabay.com/video/2020/06/11/41724-430090688_tiny.mp4", alt: "Video 3" },
    { id: 4, src: "https://cdn.pixabay.com/video/2023/08/12/175740-854057997_tiny.mp4", alt: "Video 4" },
    { id: 5, src: "https://cdn.pixabay.com/video/2024/07/04/219499_tiny.mp4", alt: "Video 5" },
    { id: 6, src: "https://cdn.pixabay.com/video/2023/10/08/184120-872701374_large.mp4", alt: "Video 6" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomPhotos = [];
      while (randomPhotos.length < 6) {
        const randomIndex = Math.floor(Math.random() * photos.length);
        if (!randomPhotos.includes(photos[randomIndex])) {
          randomPhotos.push(photos[randomIndex]);
        }
      }
      setDisplayedImages(randomPhotos);
    }, 3000);

    const initialPhotos = [];
    while (initialPhotos.length < 6) {
      const randomIndex = Math.floor(Math.random() * photos.length);
      if (!initialPhotos.includes(photos[randomIndex])) {
        initialPhotos.push(photos[randomIndex]);
      }
    }
    setDisplayedImages(initialPhotos);

    return () => clearInterval(interval);
  }, []);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="mt-5 mb-5 p-4 sm:p-8 bg-gray-100 min-h-screen">
      <div className="text-center mb-6">
        <h1 className="italic text-4xl font-bold text-blue-600">Our Gallery</h1>
      </div>

      <div className="flex justify-center space-x-40 mb-6">
        <button
          className={`px-10 py-2 font-bold text-white rounded-md ${activeTab === "photos" ? "bg-blue-600" : "bg-gray-400"}`}
          onClick={() => setActiveTab("photos")}
        >
          Photos
        </button>
        <button
          className={`px-10 py-2 font-bold text-white rounded-md ${activeTab === "videos" ? "bg-blue-600" : "bg-gray-400"}`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {activeTab === "photos" && displayedImages.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-md overflow-hidden">
            <div className="transition-transform transform hover:scale-105">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-40 object-cover rounded-md cursor-pointer"
                onClick={() => openModal(item.src)}
              />
            </div>
          </div>
        ))}
        {activeTab === "videos" && videos.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-md overflow-hidden">
            <video controls className="w-full h-auto rounded-md">
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleOverlayClick}
        >
          <div className="relative bg-white rounded-md p-4">
            <button className="absolute top-2 right-2 text-black" onClick={closeModal}>
              &times;
            </button>
            <img src={modalImage} alt="Modal" className="w-full h-auto rounded-md" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
