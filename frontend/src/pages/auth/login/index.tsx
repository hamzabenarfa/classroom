import Navbar from "@/components/navbar";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toast from "react-hot-toast";
import axios from "axios";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("user", JSON.stringify(response.data));
      switch (response.data.userInfo.role) {
        case "student":
          navigate("/student");
          break;
        case "teacher":
          navigate("/teacher");
          break;
        default:
          Toast.error("Invalid role");
          break;
      }
      Toast.success("Logged in successfully");
    } catch (err) {
      Toast.error(err.response.data);
    }
  };

  return (
    <div className=" ">
      <Navbar />

      <div className=" flex items-center justify-around flex-col-reverse md:flex-row  min-h-screen ">
        <img src="./svg/education.svg" alt="edu" className="w-3/4 md:w-1/4" />

        <div className=" flex items-center justify-center p-4 md:p-0">
          <div className="flex flex-col text-black p-8 rounded-xl shadow-xl  bg-opacity-10 backdrop-blur-md w-full max-w-md">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="mb-4 p-2 rounded border border-gray-300 text-black w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className="mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mb-4 p-2 rounded border border-gray-300 text-black w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <div className="text-center mt-4">
              <p>
                You dont have an account?{" "}
                <Link to="/register" className="text-blue-500 underline">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
