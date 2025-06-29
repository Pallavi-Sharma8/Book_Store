import React from 'react'
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

const Logout = () => {
  const [ user, setuser] = useAuth();
  const handlelogout =  () => {
    try {
      setuser({
        ...user, 
        value : null,

      });
      localStorage.removeItem("userInfo");
      toast.success("Logout successful!");
      window.location.reload();
    } catch (error) {
      console.error("Error during logout:", error);
     toast.error("Logout failed. Please try again.");
      
    }
  }
  return (
    <div>

     <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handlelogout}>Logout</button>
      </div> 
    </div>
  );
  };

export default Logout