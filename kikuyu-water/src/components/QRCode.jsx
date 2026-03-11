import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeComponent = ({ 
  url = "https://kikuyuwater.co.ke", 
  size = 300, 
  showLabel = true,
  label = "Scan to visit Kikuyu Water",
  isProfilePicture = false,
  showControls = true
}) => {
  const qrRef = React.useRef();
  const highResRef = React.useRef();
  const [format, setFormat] = useState("jpeg");
  const [sizePreset, setSizePreset] = useState(isProfilePicture ? "profile" : "medium");
  
  const sizeMap = {
    small: 200,
    medium: 300,
    large: 400,
    profile: 600
  };

  // If size prop is provided explicitly, use it (for backward compatibility)
  const displaySize = size !== 300 ? size : sizeMap[sizePreset];
  const downloadSize = isProfilePicture ? 1024 : displaySize * 2;

  const downloadQRCode = () => {
    // Use the high-res ref for download
    const canvas = highResRef.current.querySelector("canvas");
    let dataUrl;
    let filename;

    if (format === "jpeg") {
      dataUrl = canvas.toDataURL("image/jpeg", 0.99);
      filename = isProfilePicture ? "kikuyu-water-profile.jpeg" : "kikuyu-water-qr-code.jpeg";
    } else {
      dataUrl = canvas.toDataURL("image/png");
      filename = isProfilePicture ? "kikuyu-water-profile.png" : "kikuyu-water-qr-code.png";
    }

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div 
        ref={qrRef}
        className="bg-white p-4 rounded-lg shadow-lg border-2 border-primary/20"
      >
        <QRCodeCanvas
          value={url}
          size={displaySize}
          level="H"
          includeMargin={true}
          fgColor="#003366"
          bgColor="#ffffff"
        />
      </div>

      {/* High-resolution version for download (hidden) */}
      <div ref={highResRef} style={{ display: "none" }}>
        <QRCodeCanvas
          value={url}
          size={downloadSize}
          level="H"
          includeMargin={true}
          fgColor="#003366"
          bgColor="#ffffff"
        />
      </div>

      {showLabel && showControls && (
        <div className="text-center">
          <p className="text-gray-700 font-semibold mb-2">{label}</p>
          <p className="text-sm text-gray-600 mb-3">{url}</p>
          <div className="flex flex-col gap-3 items-center">
            <div className="flex gap-2 flex-wrap justify-center">
              <select
                value={sizePreset}
                onChange={(e) => setSizePreset(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:border-primary"
              >
                <option value="small">Small (200px)</option>
                <option value="medium">Medium (300px) - Default</option>
                <option value="large">Large (400px)</option>
                <option value="profile">Profile Picture (600px)</option>
              </select>
              <select
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold focus:outline-none focus:border-primary"
              >
                <option value="jpeg">JPEG (Recommended)</option>
                <option value="png">PNG (Transparent)</option>
              </select>
            </div>
            <div className="flex gap-2 flex-wrap justify-center w-full">
              <button
                onClick={downloadQRCode}
                className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-sm flex-1 sm:flex-none"
              >
                <i className="fa-solid fa-download mr-2"></i>
                Download ({displaySize * 2}x{displaySize * 2}px)
              </button>
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    `🌊 Check out Kikuyu Water!\n\nVisit our website: ${url}\n\nScan this QR code or click the link to learn more about our water and sewerage services.`
                  );
                  window.open(`https://wa.me/?text=${message}`, "_blank");
                }}
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition text-sm flex-1 sm:flex-none"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i>
                Share Me
              </button>
            </div>
            {isProfilePicture && (
              <p className="text-xs text-gray-500">Perfect for WhatsApp profile picture</p>
            )}
          </div>
        </div>
      )}

      {showLabel && !showControls && (
        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-400">Scan to visit our website</p>
        </div>
      )}
    </div>
  );
};

export default QRCodeComponent;
