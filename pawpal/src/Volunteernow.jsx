import React, { useState } from "react";
import { motion } from "framer-motion";
import { db } from "./FireBase";
import { collection, addDoc } from "firebase/firestore";
import doghandimg from './assets/hand with dog.jpg'

const VolunteerNow = () => {
  const [form, setForm] = useState({ name: "", contact: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Save to Firestore
      await addDoc(collection(db, "volunteers"), {
        name: form.name,
        contact: form.contact,
        createdAt: new Date()
      });

      setSubmitted(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (error) {
      console.error("❌ Error saving volunteer:", error);
      alert("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="voluntree-page">
      {!submitted ? (
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-8 space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.h1 
            className="become-titele"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            🐾 Become a Volunteer, Change a Life
          </motion.h1>

          {/* Section 1 */}
          <div className="section-why">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="why-titele">❤️ Why Volunteer With Us?</h2>
               <img className="dog-hand-img" src={doghandimg} alt="dog-hand" loading="lazy"/>
            <p className="why-text">
              Volunteering with us means becoming part of a movement that saves
              countless lives every year. Every animal has a story—some are
              abandoned, some lost, and others in need of urgent care. By
              choosing to volunteer, you directly take part in rewriting these
              stories into ones filled with hope, love, and second chances.
            </p>
            <p className="why-text">
              Beyond caring for animals, volunteering brings a sense of
              fulfillment, joy, and purpose. The wag of a tail or a happy purr
              is often the greatest reward. You are not just giving your time —
              you are giving love, safety, and a brighter tomorrow.
              
            </p>
          </motion.div>
          </div>

          {/* Section 2 */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="what-titele">🌟 What Will You Do?</h2>
            <p className="why-text">
              As a volunteer, you’ll have the opportunity to explore different
              areas where your help is needed the most:
            </p>
            <ul className="why-text-ul">
              <li style={{textDecoration:"none"}}>Walking dogs and ensuring they stay active and healthy 🐕</li>
              <li>
                Feeding rescued pets and helping maintain their daily routines 🥩
              </li>
              <li>
                Assisting in medical check-ups, vaccinations, and recovery care
                💉
              </li>
              <li>
                Helping at adoption drives by guiding families to find their new
                best friend 🏡
              </li>
              <li>
                Spreading awareness in the community and educating people about
                responsible pet ownership 📢
              </li>
            </ul>
            <p className=" why-text">
              Whether you have a few hours or an entire weekend, your time makes
              a huge difference. Every act of kindness counts.
            </p>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="Biger-text">🌍 The Bigger Impact</h2>
            <p className="why-text">
              Our volunteer program isn’t just about animals — it’s about
              building a kinder society. When you join us, you inspire others
              around you to act with compassion. You become part of a global
              movement that envisions a world where no animal suffers and every
              pet finds a home.
            </p>
            <p className=" why-text">
              Together, we are not only rescuing animals but also creating a
              culture of care and empathy. Your involvement creates ripples of
              change that go far beyond the shelter walls.
            </p>
          </motion.div>

          {/* Section 4 (Form) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="Biger-text">
              📋 Join Our Volunteer Family
            </h2>
            <p className="why-text">
              We are thrilled to have you on this journey with us. Please fill
              out your details below and take your first step toward making a
              lasting difference.
            </p>

            <form onSubmit={handleSubmit} className="vol-form">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-500"
                required
                maxLength={20}
              />
              <input
                type="number"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Contact Details"
                className="contactVolentaier"
                required
                maxLength={12}
              />
              <button
                type="submit"
                className="vol-sub"
              >
                Submit & Volunteer
              </button>
            </form>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="bg-green-100 p-6 rounded-2xl shadow-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="Biger-text">
            🎉 Thank You for Volunteering!
          </h2>
          <p className="why-text">
            Your details have been submitted successfully. We will contact you
            soon. Redirecting to Home... 🏡
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default VolunteerNow;
