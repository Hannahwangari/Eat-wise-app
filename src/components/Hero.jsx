function Hero() {
  return (
    <div className="min-h-screen bg-green-600 flex flex-col items-center justify-center text-center px-6">
      {/* Hero Image */}
      <img 
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600" 
        alt="Healthy Meal"
        className="rounded-xl shadow-lg mb-6 w-full max-w-sm md:max-w-md lg:max-w-lg"
      />

      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
        Take Control of Your Health Today
      </h1>

      {/* Subtitle */}
      <p className="text-white text-sm md:text-lg mb-6 max-w-md">
        EATWISE helps in guiding your food choices and tracking your nutrition.
      </p>

      {/* CTA Button */}
      <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-full shadow hover:bg-gray-100 transition">
        Get Started
      </button>
    </div>
  );
}

export default Hero;
