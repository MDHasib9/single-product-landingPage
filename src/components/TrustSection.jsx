import React from "react";

/**
 * SVG ICON COMPONENTS
 * -------------------
 * Inline SVGs are used instead of icon libraries to:
 * - Avoid extra dependencies
 * - Maintain full styling control
 * - Ensure consistent rendering across environments
 */

// Shield Lock Icon — represents secure payments
const ShieldLockIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

// Refresh icon — represents return / refund policy
const RefreshCwIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.75 2.81m0 0V3m0 2.81h2.81" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.75-2.81m0 0V21m0-2.81h-2.81" />
  </svg>
);

// Truck icon — represents shipping
const TruckIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 17H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
    <path d="M18 8h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1" />
    <path d="M10 10V5" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </svg>
);

// Star icon — used for rating visualization
const StarIcon = ({ filled }) => (
  <svg
    className={`w-4 h-4 transition duration-200 ${
      filled ? "text-amber-500" : "text-gray-600"
    }`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.986 6.095a1 1 0 00.95.691h6.417c.969 0 1.371 1.243.588 1.81l-5.195 3.778a1 1 0 00-.364 1.118l1.986 6.095c.3.921-.755 1.688-1.54 1.118L10 18.23l-5.195 3.778c-.785.57-1.84-.197-1.54-1.118l1.986-6.095a1 1 0 00-.364-1.118L2.094 11.523c-.783-.567-.38-1.81.588-1.81h6.417a1 1 0 00.95-.691l1.986-6.095z" />
  </svg>
);

/**
 * DATA CONFIGURATION
 * ------------------
 * Keeping UI data separate from rendering logic
 * improves maintainability and scalability.
 */

const featuresData = [
  {
    Icon: ShieldLockIcon,
    title: "Secure Payment",
    subtitle: "256-bit SSL encryption",
  },
  {
    Icon: RefreshCwIcon,
    title: "30-Day Returns",
    subtitle: "Money-back guarantee",
  },
  {
    Icon: TruckIcon,
    title: "Free Shipping",
    subtitle: "Worldwide delivery",
  },
];

const testimonialsData = [
  {
    stars: 5,
    quote:
      "Absolutely transformed my daily workflow. The quality is unmatched.",
    name: "Sarah Mitchell",
    title: "Creative Director",
    avatar: "https://placehold.co/100x100/A0AEC0/FFFFFF?text=SM",
  },
  {
    stars: 5,
    quote: "Professional grade equipment that delivers on every promise.",
    name: "Marcus Chen",
    title: "Audio Engineer",
    avatar: "https://placehold.co/100x100/63B3ED/FFFFFF?text=MC",
  },
  {
    stars: 5,
    quote: "Best investment I've made for my home office this year.",
    name: "Emma Rodriguez",
    title: "Product Designer",
    avatar: "https://placehold.co/100x100/F6AD55/FFFFFF?text=ER",
  },
];

/**
 * FEATURE CARD
 * Displays a single trust feature with icon and description.
 */
const FeatureCard = ({ Icon, title, subtitle }) => (
  <div className="flex flex-col items-center text-center p-8 rounded-xl bg-[#141824] transition duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50">
    <div className="p-4 rounded-full bg-amber-700/10 mb-4">
      <Icon className="w-6 h-6 text-amber-500" />
    </div>
    <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
    <p className="text-sm text-gray-400">{subtitle}</p>
  </div>
);

/**
 * TESTIMONIAL CARD
 * Displays a user review including rating, quote, and profile info.
 */
const TestimonialCard = ({ stars, quote, name, title, avatar }) => (
  <div className="flex flex-col p-6 rounded-xl bg-[#141824] border border-transparent hover:border-amber-700/50 transition duration-300">
    {/* Star rating */}
    <div className="flex space-x-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < stars} />
      ))}
    </div>

    {/* Testimonial text */}
    <p className="text-base italic text-gray-200 mb-6">
      &ldquo;{quote}&rdquo;
    </p>

    {/* Author info */}
    <div className="flex items-center mt-auto">
      <img
        src={avatar}
        alt={`Avatar of ${name}`}
        className="w-10 h-10 rounded-full object-cover mr-4"
        onError={(e) => {
          // Fallback avatar in case remote image fails
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://placehold.co/100x100/444444/FFFFFF?text=NA";
        }}
      />
      <div>
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-gray-400">{title}</p>
      </div>
    </div>
  </div>
);

/**
 * MAIN SECTION COMPONENT
 * Combines trust indicators and testimonials
 * to reinforce credibility below the hero section.
 */
const TrustSection = () => {
  return (
    <section className="py-20 lg:py-32 font-inter text-white px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Trust features */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 lg:mb-32">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Testimonials header */}
        <h2 className="text-xl font-light text-center tracking-wider uppercase text-gray-300 mb-12">
          Loved by Professionals
        </h2>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;


