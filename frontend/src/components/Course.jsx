import React from 'react'
 
import Cards from './Cards'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { getBook } from '../../../backend/controller/book.controller'
import axios from 'axios'
const Course = () => {

  const [books, setbooks] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:4000/book");
       
        setbooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBook();
  }, []);
  return (
   <>
   
  <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="pt-30 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
      <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {books.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Course