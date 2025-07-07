import React, { useState } from "react";

const ServicesScreen = () => {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCountry = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${query}`
      );

      if (!response.ok) {
        throw new Error("Country not found");
      }

      const data = await response.json();
      setCountries(data);
    } catch (err) {
      setError(err.message);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCountry();
  };

  return (
    <div className="min-h-[500px] py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-6 text-blue-700">
        Country Search
      </h2>

      {/* Search Box */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex items-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Enter country name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Search
        </button>
      </form>

      {/* Loading/Error */}
      {loading && (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Results */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <div
            key={country.cca3}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            {console.log("vzzz", country.flags.svg)}
            <img
              src={country.flags.svg}
              // alt={country.name.common}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {country.name.common}
            </h3>
            <p>
              <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
            </p>
            <p>
              <strong>Region:</strong> {country.region}
            </p>
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Area:</strong> {country.area.toLocaleString()} km²
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesScreen;
