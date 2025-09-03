import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Rehome = () => {
  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    location: "",
    contact: "",
    photo: null,
  });

  const [pets, setPets] = useState([]);
  const [notification, setNotification] = useState("");
      const navigate = useNavigate();

  // handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handle file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, photo: reader.result }); // Base64 string
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.photo) {
      alert("Please upload a pet photo!");
      return;
    }

    setPets([...pets, { ...formData, id: Date.now() }]);
    setFormData({ name: "", owner: "", location: "", contact: "", photo: null });

    // ✅ show notification
    setTimeout(() => {
      setNotification("🎉 Pet added successfully!");
      
    }, 2000);

  
  };

  return (
    <div className="rehome-container">
      <h1 className="title">🐾 PETS INFO </h1>

      {/* Notification */}
      {notification && <div className="notification">{notification}</div>}

      {/* Form */}
      <form className="rehome-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Pet Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="owner"
          placeholder="Owner Name"
          value={formData.owner}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input type="file" accept="image/*" onChange={handleFileChange} required />
        <button type="submit">Add Pet</button>
      </form>

      {/* Pets List (still inside same component) */}
      <h2 className="subtitle">🐶🐱HEART GIVE THANKS</h2>
      <div className="pet-grid">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            {pet.photo && <img src={pet.photo} alt={pet.name} className="pet-photo" />}
            <h3>{pet.name}</h3>
            <p>👤 Owner: {pet.owner}</p>
            <p>📍 Location: {pet.location}</p>
            <p>📞 Contact: {pet.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rehome;
