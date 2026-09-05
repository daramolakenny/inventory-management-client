import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        return Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: data.message,
        });
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        text: data.message,
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.name,
        text: error.message,
      });
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmitForm}
        className="w-100 bg-white text-black flex flex-col px-6 py-6 shadow-2xl rounded-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        <label className="py-2">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
          className="border p-2 rounded-md"
          required
        />

        <label className="py-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="border p-2 rounded-md"
          required
        />

        <label className="py-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="border p-2 rounded-md"
          required
        />

        <label className="py-2">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="border p-2 rounded-md"
        >
          <option value="user">User</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md mt-6 hover:bg-blue-700"
        >
          Sign Up
        </button>

        <div className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;