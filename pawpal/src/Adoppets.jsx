import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Adoppets = () => {
  const API_KEY =
    "live_MkDRyh5rEpBEPkDD6QDoOcEYUDstK7E7hY2EcHyN4y0ouV8D3OxJKqoVe3mpqxva";

  const navigate = useNavigate();

  // Dogs state
  const [dogs, setDogs] = useState([]);
  const [dogLoading, setDogLoading] = useState(true);
  const [dogError, setDogError] = useState(null);

  // Cats state
  const [cats, setCats] = useState([]);
  const [catLoading, setCatLoading] = useState(true);
  const [catError, setCatError] = useState(null);

  // Fetch Dogs
  useEffect(() => {
    async function getRandomDogs() {
      try {
        const response = await fetch(
          "https://api.thedogapi.com/v1/images/search?limit=20",
          { headers: { "x-api-key": API_KEY } }
        );
        if (!response.ok) throw new Error("Failed to fetch dogs");
        const data = await response.json();
        setDogs(data);
      } catch (err) {
        setDogError(err.message);
      } finally {
        setDogLoading(false);
      }
    }
    getRandomDogs();
  }, []);

  // Fetch Cats
  useEffect(() => {
    async function getRandomCats() {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=20",
          { headers: { "x-api-key": API_KEY } }
        );
        if (!response.ok) throw new Error("Failed to fetch cats");
        const data = await response.json();
        setCats(data);
      } catch (err) {
        setCatError(err.message);
      } finally {
        setCatLoading(false);
      }
    }
    getRandomCats();
  }, []);

  return (
    <div>
      {/* Pets type menu */}
      <div className="pets-types">
        <h2 className="pets-head">AVAILABLE PETS TO ADOPT 🐾</h2>
        <ul className="petsUl-type">
          <li >🐶 Dogs</li>
          <li >🐱 Cats</li>
        </ul>
      </div>

      {/* Dog Section */}
      <div className="catmain-container">
        <h1 className="pets-name">🐶 Available Dogs</h1>
        {dogLoading && <p className="loading-cat">Loading dogs...</p>}
        {dogError && <p className="loading-cat">{dogError}</p>}

        <div className="cat-grid">
          {dogs.map((dog) => (
            <div
              key={dog.id}
              className="border rounded p-2 shadow cursor-pointer"
              onClick={() => navigate(`/order/dog/${dog.id}`)} // 👈 navigate to order page
            >
              <img
                src={dog.url}
                alt={`Dog ${dog.id}`}
                className="w-full h-40 object-cover rounded"
              />
              <p className="mt-2 text-center">Dog ID: {dog.id}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cat Section */}
      <div className="catmain-container">
        <h1 className="pets-name">🐱 Available Cats</h1>
        {catLoading && <p className="loading-cat">Loading cats...</p>}
        {catError && <p className="loading-cat">{catError}</p>}

        <div className="cat-grid">
          {cats.map((cat) => (
            <div
              key={cat.id}
              className="border rounded p-2 shadow cursor-pointer"
              onClick={() => navigate(`/order/cat/${cat.id}`)} // 👈 navigate to order page
            >
              <img
                src={cat.url}
                alt={`Cat ${cat.id}`}
                className="w-full h-40 object-cover rounded"
              />
              <p className="mt-2 text-center">Cat ID: {cat.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Adoppets;
