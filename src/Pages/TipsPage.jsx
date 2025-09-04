// src/pages/TipsPage.jsx
import React from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";

function TipsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold">Health Tips</h1>
        <p className="mt-2 text-lg">Practical advice for eating smarter and living better.</p>
      </main>
      <Footer />
    </div>
  );
}

export default TipsPage;
