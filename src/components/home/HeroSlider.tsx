"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Sample slider data using placeholder images
  const slides = [
    {
      id: 1,
      title: "Next-Generation Audio",
      subtitle:
        "Experience sound like never before with our new wireless series.",
      ctaText: "Shop Earbuds",
      ctaLink: "/shop/audio",
      // Using a Unsplash placeholder for demonstration
      bgImage:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Capture Every Moment",
      subtitle:
        "Pro-grade cameras in the palm of your hand. Discover the Alpha series.",
      ctaText: "Explore Phones",
      ctaLink: "/shop/phones",
      bgImage:
        "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Work Smart, Play Hard",
      subtitle:
        "Ergonomic setups designed for peak performance and ultimate comfort.",
      ctaText: "View Workspace",
      ctaLink: "/shop/workspace",
      bgImage:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isHovered) {
      const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
      return () => clearInterval(slideInterval);
    }
  }, [isHovered, nextSlide]);

  return (
    <div
      className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative flex items-center justify-center"
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 opacity-0 animate-fade-in-up">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl opacity-0 animate-fade-in-up delay-100">
                {slide.subtitle}
              </p>
              <Link
                href={slide.ctaLink}
                className="inline-block bg-white text-gray-900 font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200 shadow-lg opacity-0 animate-fade-in-up delay-200"
              >
                {slide.ctaText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all focus:outline-none"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all focus:outline-none"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
