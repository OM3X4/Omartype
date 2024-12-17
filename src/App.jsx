/* eslint-disable */
import { IoMdSettings } from "react-icons/io"; 
import { FaCrown } from "react-icons/fa"; 
import { FaKeyboard } from "react-icons/fa"; 
import { useState , createContext , useContext , useEffect } from 'react'
import { Routes , Route , Link } from "react-router";
import Test from "./test";
import Results from "./results";
import SettingsPage from "./settings";

export const Settings = createContext()




function App() {

  const [settings , setSettings] = useState({backgroundColor:"#0e0e0e" , primaryColor:"#ff9900" , paragraphColor:"#4e4e4e" , errorColor:"#b13535" , blindMode:false , confidenceMode:false , stopOnError:false})


  useEffect(() => {
      console.log(settings)
  })




  return (
    <>
      <div className="min-h-screen" style={{backgroundColor:settings.backgroundColor}}>
          {/* ---------------- header(logo) ----------------- */}
          <div className=" flex items-center ml-32 gap-5 pt-8">
            {/* -------------- logo ------------ */}
            <div className=" flex items-center justify-center cursor-pointer">
              <FaKeyboard className="text-white text-5xl" style={{color:settings.primaryColor}}/>
              <h1 className=" text-white text-4xl ml-3 font-semibold" style={{color:settings.primaryColor}}>omartype</h1>
            </div>
            {/* ----------------- nav bar ------------------- */}
            <div className="flex items-center justify-center gap-5 text-2xl ml-1 pt-5 cursor-pointer" style={{color:settings.paragraphColor}}>
              <Link to={"/"}><FaKeyboard className="hover:text-white transition-all"/></Link>
              <FaCrown className="hover:text-white transition-all"/>
              <Link to={"/settings"}><IoMdSettings className="hover:text-white transition-all"/></Link>
            </div>
          </div>
          <div>
            <Settings.Provider value={[settings , setSettings]} >
              <Routes>
                <Route path="/" element={<Test />}/>
                <Route path="/results" element={<Results />}/>
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </Settings.Provider>
          </div>
      </div>
    </>
  )
}

export default App
