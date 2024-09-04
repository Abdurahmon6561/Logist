"use client";
import { useEffect, useRef } from "react";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import "./globals.css";
import Footer from "./components/Footer";

const Page = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      const location = { lat: 40.5710933, lng: -75.480487 }; // Replace with your location
      const map = new google.maps.Map(mapRef.current, {
        zoom: 17,
        center: location,
      });
      new google.maps.Marker({
        position: location,
        map: map,
      });
    };

    // Load the Google Maps script
    const script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBAyPREktJQRdD1BgbLjSKoQ9bLQiOniK4&callback=initMap";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Initialize the map after the script loads
      window.initMap = initMap;
    };
    document.body.appendChild(script);

    // Cleanup script on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Header />

      <section
        id="home"
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-15 text-white animate-slide-middle">
          {/* Content that slides from left to middle */}
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8 animate-slide-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            S.H GLOBAL LOGISTICS
          </h1>
          <p className="text-sm sm:text-lg md:text-xl mt-4">
            Delivering excellence in every mile
          </p>
          <a
            href="#"
            className="mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 hover:bg-blue-800 rounded-lg text-base sm:text-xl"
          >
            Get Started
          </a>
        </div>
      </section>

      <AboutUs />
      <Contact />

      <section className="bg-gray-300 text-white">
        <div ref={mapRef} className="w-full h-96"></div>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
