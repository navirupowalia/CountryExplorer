import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Banner Section */}
      <div
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1743376272672-c130603a3af2?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}>
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Discover the World
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Explore countries, learn about their cultures, flags, populations,
            and more. Let’s make geography fun!
          </p>
          <Link to="/explore">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
              🌍 Explore Countries
            </button>
          </Link>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-12 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Why Use Country Explorer?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          This app helps you learn about different countries of the world with
          rich data including capital, population, region, flags, and more. It's
          perfect for students, travelers, and curious minds.
        </p>
      </section>
    </div>
  );
};

export default Home;
