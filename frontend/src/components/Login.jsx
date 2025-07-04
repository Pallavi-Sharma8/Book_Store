import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm} from "react-hook-form"
 
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
   const onSubmit  =  async (data) => {
    const userInfo = {
    
      email:data.email,
      password:data.password
    }
    
    await axios.post("https://book-store-1-wryr.onrender.com/user/login", userInfo)
    .then((res) => {
      console.log(res.data);
      if (res.data) {
       toast.success("Login successful!");
       navigate("/");
      window.location.reload();
      } 
      localStorage.setItem("userInfo", JSON.stringify(res.data.user));
    }).catch((err) => {
      console.error("Error during signup:", err);
      toast.error("Login failed. Please try again.");
    });
    console.log(data)}
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link to={"/"}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
         </Link>
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
            
            {...register("email", { required: true })}
            />
            <br />
 {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            
          </div>
         
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
          
            {...register("password", { required: true })}
            />
            <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
