import React, { useState } from "react";
import Footer from "../layouts/Footer";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Prevent right-click on images
  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  // Prevent drag and drop
  const handleDragStart = (e) => {
    e.preventDefault();
    return false;
  };

  // Prevent printing
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent Ctrl+P, Cmd+P (print)
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        return false;
      }
      // Prevent F12 (developer tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      // Prevent Ctrl+Shift+I (inspect element)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Disable user selection on the page
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .gallery-protection {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
      }
      .gallery-protection img {
        pointer-events: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Gallery images from public folder
  const galleryImages = [
    {
      src: "/documents/gallery/Our team.jpg",
      title: "Our Dedicated Team",
    },
    {
      src: "/documents/gallery/Our team 2.jpg",
      title: "Team Building",
    },
    {
      src: "/documents/gallery/Uthiru Interconnection.jpeg",
      title: "Uthiru Interconnection",
    },
    {
      src: "/documents/gallery/Uthiru Master Meter.jpeg",
      title: "Uthiru Master Meter",
    },
    {
      src: "/documents/gallery/Uthiru Testing.jpeg",
      title: "Uthiru Testing",
    },
    {
      src: "/documents/gallery/WhatsApp Image 2023-03-26 at 12.14.41.jpeg",
      title: "Infrastructure Development",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-bold">PHOTO GALLERY</span>
            </div>
            <h1 className="text-5xl font-black leading-tight mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Explore moments from our journey of providing quality water and
              sewerage services to our community
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-neutral gallery-protection">
        <div className="max-w-7xl mx-auto px-6">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-2xl select-none"
                onClick={() => setSelectedImage(image)}
                onContextMenu={handleContextMenu}
                onDragStart={handleDragStart}
              >
                <div className="aspect-w-16 aspect-h-12 relative h-64">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    onContextMenu={handleContextMenu}
                    onDragStart={handleDragStart}
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold">{image.title}</h3>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-expand text-primary"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 gallery-protection"
          onClick={() => setSelectedImage(null)}
          onContextMenu={handleContextMenu}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-2xl transition"
            onClick={() => setSelectedImage(null)}
          >
            <i className="fa-solid fa-times"></i>
          </button>
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl pointer-events-none select-none"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
              draggable="false"
            />
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mt-4">
              <h2 className="text-2xl font-bold text-white">
                {selectedImage.title}
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl shadow-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Experience Quality Service
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers enjoying reliable water and
              sewerage services
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/new-connection"
                className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
              >
                Apply for Connection
              </a>
              <a
                href="/payment"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition"
              >
                Pay Your Bill
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GalleryPage;
