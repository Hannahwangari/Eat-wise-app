import backgroundImage from "./assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Logo / Header */}
      <header className="p-6">
        <h1 className="text-3xl font-extrabold text-white">EatWise</h1>
      </header>

      {/* Main Hero Content */}
      <main className="flex-grow flex flex-col md:flex-row items-center justify-center p-6">
        {/* Left side: Text content */}
        <div className="text-center md:text-left max-w-md space-y-6 bg-black/50 p-6 rounded-xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Take Control of Your Health Today
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            EATWISE helps in guiding your food choices and tracking your nutrition.
          </p>
          <button className="px-6 py-3 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:bg-green-100 transition">
            Get Started
          </button>
        </div>

        {/* Right side: Image */}
        <div className="mt-8 md:mt-0 md:ml-12">
          <img
            src="https://via.placeholder.com/300x200.png?text=Healthy+Food"
            alt="Healthy food"
            className="rounded-xl shadow-lg w-full max-w-sm"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
