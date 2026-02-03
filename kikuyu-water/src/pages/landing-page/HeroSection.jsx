import React from "react";
import { useNavigate } from "react-router-dom";
import heroVideo from "../../assets/Slow Motion Water Droplet Falling Breaks Surface Tension and Makes Ripples in HD YouTube Video View - stepvideolabs (1080p, h264).mp4";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section
      id="hero-section"
      className="bg-gradient-to-br from-primary to-blue-800 text-white relative overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-blue-900/70"></div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 sm:mb-6">
              <span className="text-sm sm:text-base font-bold">
                Serving Kenyans Since 2006
              </span>
            </div>
            <h1 className="text-4xl font-black leading-tight mb-4 sm:mb-6">
              Clean Water and Reliable Sewerage Services for Kikuyu
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              Serving households and businesses in with safe, affordable,
              and sustainable water and sewerage services.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => navigate('/new-connection')}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition w-full sm:w-auto text-center"
              >
                Apply for New Connection
              </button>
              <a href="/payment" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition w-full sm:w-auto text-center inline-block">
                Pay Your Water Bill
              </a>
            </div>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                <i className="fa-solid fa-phone text-2xl mr-3"></i>
                <div>
                  <p className="text-sm text-blue-200">24/7 Emergency</p>
                  <p className="font-bold text-lg">+254728578098</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-clock text-2xl mr-3"></i>
                <div>
                  <p className="text-sm text-blue-200">Service Hours</p>
                  <p className="font-bold text-lg">Mon-Fri: 8AM-5PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-white/20 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                  <i className="fa-solid fa-users text-3xl sm:text-4xl mb-2 sm:mb-3"></i>
                  <p className="text-2xl sm:text-3xl font-black mb-1">
                    10,000+
                  </p>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Active Connections
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                  <i className="fa-solid fa-map-marked-alt text-3xl sm:text-4xl mb-2 sm:mb-3"></i>
                  <p className="text-2xl sm:text-3xl font-black mb-1">
                    250 km²
                  </p>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Coverage Area
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                  <i className="fa-solid fa-water text-3xl sm:text-4xl mb-2 sm:mb-3"></i>
                  <p className="text-2xl sm:text-3xl font-black mb-1">31</p>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Water Sources
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-4 sm:p-6 rounded-xl">
                  <i className="fa-solid fa-shield-halved text-3xl sm:text-4xl mb-2 sm:mb-3"></i>
                  <p className="text-2xl sm:text-3xl font-black mb-1">94.0%</p>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Water Quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
