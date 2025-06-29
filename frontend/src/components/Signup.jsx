import React, { use } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import { useForm} from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Signup = () => {
 const navigate = useNavigate();
 const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()
  const onSubmit  =  async (data) => {
    const userInfo = {
      name:data.name,
      email:data.email,
      password:data.password
    }
    
    await axios.post("http://localhost:4000/user/signup", userInfo)
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        toast.success("Signup successful! Please login.");
        navigate("/ ");
      } 
      localStorage.setItem("userInfo", JSON.stringify(res.data.user));
    }).catch((err) => {
      console.error("Error during signup:", err);
      toast.error("Signup failed. Please try again.");
    });
    console.log(data)}

    const [open, setOpen] = React.useState(false);

  const openLoginModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal && typeof modal.showModal === "function") {
      modal.showModal();
      setOpen(true);

      modal.addEventListener("close", () => {
        setOpen(false);
      },      { once: true });
    
    }
  };


  return (
    <>
      <div className={`flex h-screen items-center justify-center transition-all duration-300 ${open ? 'blur-sm brightness-75' : ''}`}>
               <div className="border-2 border-gray-200 shadow-md p-5 w-[600px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link to={"/"}>
                <button className="btn    btn-ghost absolute right-10 top-10 text-white bg-gray-600">
                  {" "}
                  ← Back to home
                </button>
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Full name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                />
                <br />

                {/* <span className="text-sm text-red-500">This field is required</span> */}
              </div>

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
                  Signup
                </button>
                <span>
                  <p>Already registered? </p>

                  <button
                    type="button"
                    onClick={openLoginModal}
                    className="text-blue-500 underline cursor-pointer"
                  >
                    Login
                  </button>
                </span>
              </div>
            </form>
            <Login />
          </div>
    
      </div>
    </>
  );
};

export default Signup;

// import React from "react";
// import Login from "./Login";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const openLoginModal = () => {
//     const modal = document.getElementById("my_modal_3");
//     if (modal && typeof modal.showModal === "function") {
//       modal.showModal();
//     }
//   };

//   return (
//     <>
//       <div className="flex h-screen items-center justify-center">
//         <div className="border-2 border-gray-200 shadow-md p-5 w-[600px]">
//           <form>
//             <Link to="/">
//               <button className="btn btn-ghost absolute right-10 top-10 text-white bg-gray-600">
//                 ← Back to home
//               </button>
//             </Link>

//             <h3 className="font-bold text-lg">Signup</h3>

//             <div className="mt-4 space-y-2">
//               <span>Name</span>
//               <input
//                 type="text"
//                 placeholder="Enter your Full name"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//               />
//             </div>

//             <div className="mt-4 space-y-2">
//               <span>Email</span>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//               />
//               <span className="text-sm text-red-500">This field is required</span>
//             </div>

//             <div className="mt-4 space-y-2">
//               <span>Password</span>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//               />
//             </div>

//             <div className="flex justify-around mt-6">
//               <button
//                 type="submit"
//                 className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
//               >
//                 Signup
//               </button>

//               <div>
//                 <p>Already registered?</p>
//                 <button
//                   type="button"
//                   onClick={openLoginModal}
//                   className="text-blue-500 underline cursor-pointer"
//                 >
//                   Login
//                 </button>

//               </div>
//             </div>
//           </form>
//            <Login />
//         </div>
//       </div>

//       {/* ✅ Login modal (outside main form/page) */}

//     </>
//   );
// };

// export default Signup;
