import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
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
          title: "Login Failed",
          text: data.message,
        });
      }

      localStorage.setItem("token", data.data.accessToken);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: data.message,
      }).then(() => {
        if (data.data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
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
        onSubmit={handleSubmit}
        className="w-100 bg-white shadow-2xl rounded-md px-6 py-6 flex flex-col"
      >
        {/* <h2 className="text-2xl font-bold text-center mb-6 text-black">
           In
        </h2> */}

        <label className="py-2 text-black">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="border p-2 rounded-md text-black"
          required
        />

        <label className="py-2 text-black">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="border p-2 rounded-md text-black"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white rounded-md p-2 mt-6 hover:bg-blue-700"
        >
          Sign In
        </button>

        <div className="text-center mt-4 text-black">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;