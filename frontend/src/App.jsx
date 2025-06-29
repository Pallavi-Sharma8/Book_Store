import React from 'react'
import Home from './home/Home';
import Courses from '../src/courses/Courses';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import ContactUs from './components/ContactUs';
import About from './components/About';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
const App = () => {

   const [user, setuser] = useAuth();
  return (
   

    <>
   <div className='dark:bg-slate-900 dark:text-white'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/>}></Route>
       <Route path='/courses' element={ user ? <Courses/> : <Navigate to={'/signup'}></Navigate>}></Route>
           <Route path='/signup' element={ <Signup/>}></Route>
           <Route path='/contactus' element={ <ContactUs/>}></Route>
           <Route path='/about' element={ <About/>}></Route>


    </Routes>
    </BrowserRouter>
      <Toaster />
 </div>
    </>
  )
}

export default App;