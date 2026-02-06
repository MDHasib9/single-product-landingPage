import React from "react";
import { ArrowRight, Mouse } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Centralized content configuration for the Hero section.
 * This keeps text, links, and assets decoupled from layout logic,
 * making future updates and A/B testing easier.
 */
const heroContent = {
  subtitle: "Transform Your Workspace Instantly",
  title:
    "Experience unparalleled clarity and comfort with precision-engineered audio technology designed for professionals who demand excellence.",
  primaryAction: { text: "Buy Now", link: "#buy-now" },
  secondaryAction: { text: "Learn More", link: "#learn-more" },
  imageUrl: "headphone.jpeg",
  imageAlt:
    "A pair of premium black over-ear headphones displayed on a floating polaroid card.",
};

/**
 * HeroSection
 * Primary above-the-fold marketing component.
 * Combines motion, responsive layout, and strong visual hierarchy
 * to communicate value proposition quickly.
 */
const HeroSection = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center font-inter text-white p-4 sm:p-8 lg:p-0">
      {/* Main grid container: text on the left, visual on the right */}
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* LEFT COLUMN: Copy & CTA */}
        <motion.div
          className="flex flex-col justify-center py-20 px-4 md:px-12 lg:min-h-screen lg:pr-20"
          initial={{ opacity: 0, x: -50 }}         // Entrance animation from left
          whileInView={{ opacity: 1, x: 0 }}       // Animate once when in viewport
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <p className="text-sm font-semibold tracking-widest uppercase mb-4 opacity-70">
            {heroContent.subtitle}
          </p>

          {/* Main headline */}
          <h1 className="text-lg md:text-2xl lg:text-3xl leading-relaxed max-w-lg mb-10">
            {heroContent.title}
          </h1>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-8 space-y-4 sm:space-y-0">
            
            {/* Primary CTA */}
            <a
              href={heroContent.primaryAction.link}
              className="group flex items-center justify-center px-8 py-3 rounded-xl bg-amber-500/80 hover:bg-amber-600 transition duration-300 shadow-xl shadow-amber-900/50 text-black font-semibold text-base"
            >
              {heroContent.primaryAction.text}
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                <ArrowRight />
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href={heroContent.secondaryAction.link}
              className="text-white opacity-80 hover:opacity-100 transition duration-300 relative text-base font-medium"
            >
              {heroContent.secondaryAction.text}
              {/* Underline hover indicator */}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white opacity-30 group-hover:opacity-60 transition-opacity"></span>
            </a>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Product visual */}
        <motion.div
          className="relative flex items-center justify-center lg:min-h-screen p-6 md:p-16 overflow-hidden"
          initial={{ opacity: 0, x: 50 }}          // Entrance animation from right
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image wrapper with hover scale interaction */}
          <div className="relative w-full max-w-md h-auto aspect-square bg-purple-600 flex items-center justify-center text-white font-bold rounded-lg transform transition-transform duration-300 hover:scale-110">
            
            {/* Polaroid-style background card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white shadow-2xl rounded-lg rotate-1 -z-0"></div>

            {/* Product image */}
            <img
              src={heroContent.imageUrl}
              alt={heroContent.imageAlt}
              className="relative w-full h-full object-cover rounded-xl transform rotate-3 scale-110 z-10"
              onError={(e) => {
                // Fallback image in case the primary asset fails to load
                e.currentTarget.onerror = null;
                e.currentTarget.src = "aa.png";
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator for visual affordance */}
      <motion.div
        className="absolute bottom-[-20px] sm:bottom-8 left-1/2 -translate-x-1/2 z-50"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Mouse className="w-8 h-8 text-gray-400" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
