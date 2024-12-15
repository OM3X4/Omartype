/* eslint-disable */
import { IoMdSettings } from "react-icons/io"; 
import { FaCrown } from "react-icons/fa"; 
import { FaKeyboard } from "react-icons/fa"; 
import { useState } from 'react'
import Test from "./test";




function App() {


  return (
    <>
      <div className="min-h-screen bg-[#0e0e0e]">
          {/* ---------------- header(logo) ----------------- */}
          <div className=" flex items-center ml-32 gap-5 pt-8">
            {/* -------------- logo ------------ */}
            <div className=" flex items-center justify-center cursor-pointer">
              <FaKeyboard className="text-white text-5xl"/>
              <h1 className=" text-white text-4xl ml-3 font-semibold">omar<span className="text-orange-700">type</span></h1>
            </div>
            {/* ----------------- nav bar ------------------- */}
            <div className="flex items-center justify-center text-[#555555] gap-5 text-2xl ml-1 pt-5 cursor-pointer">
              <FaKeyboard className="hover:text-orange-700 transition-all"/>
              <FaCrown className="hover:text-orange-700 transition-all"/>
              <IoMdSettings className="hover:text-orange-700 transition-all"/>
            </div>
          </div>
          <div>
            <Test />
          </div>
      </div>
    </>
  )
}

export default App
