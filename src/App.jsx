/* eslint-disable */
import { SiMonkeytype } from "react-icons/si";
import { IoMdSettings } from "react-icons/io"; 
import { FaCrown } from "react-icons/fa"; 
import { FaKeyboard } from "react-icons/fa"; 
import { useState , createContext , useContext , useEffect } from 'react'
import { Routes , Route , Link } from "react-router";
import Test from "./test";
import Results from "./results";
import SettingsPage from "./settings";
import LeaderBoardPage from "./leaderBoard";

export const Settings = createContext()
export const LeaderBoard = createContext()



function App() {

  const [settings , setSettings] = useState(() => {
    const savedSettings = JSON.parse(window.localStorage.getItem("settings"));
    return savedSettings || { 
        backgroundColor:"#0e0e0e", 
        primaryColor:"#ff9900", 
        paragraphColor:"#4e4e4e", 
        errorColor:"#b13535", 
        settingsbarColor:"#151515", 
        blindMode:false, 
        confidenceMode:false, 
        stopOnError:false, 
        audio:0 
    };
  });  
const [leaderBoard , setLeaderBoard] = useState(JSON.parse(window.localStorage.getItem("leaderBoard")) || [])
  
  useEffect(() => {
    const storedSettings = JSON.parse(window.localStorage.getItem("settings"));
    if (JSON.stringify(settings) !== JSON.stringify(storedSettings)) {
      window.localStorage.setItem("settings", JSON.stringify(settings));
    }
  }, [settings]);

    
  useEffect(() => {
    const storedSettings = JSON.parse(window.localStorage.getItem("settings"));
    if (JSON.stringify(settings) !== JSON.stringify(storedSettings)) {
      window.localStorage.setItem("settings", JSON.stringify(settings));
    }
  }, [settings]);
  
  useEffect(() => {
    const storedLeaderBoard = JSON.parse(window.localStorage.getItem("leaderBoard"));
    if (JSON.stringify(leaderBoard) !== JSON.stringify(storedLeaderBoard)) {
      window.localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard));
    }
  }, [leaderBoard]);





  return (
    <>
      <div className="min-h-screen" style={{backgroundColor:settings.backgroundColor}}>
          {/* ---------------- header(logo) ----------------- */}
          <div className=" flex items-center ml-32 gap-5 pt-8">
            {/* -------------- logo ------------ */}
            <div className=" flex items-center justify-center cursor-pointer">
              <SiMonkeytype  className="text-white text-5xl" style={{color:settings.primaryColor}}/>
              <h1 className=" text-white text-4xl ml-3 font-semibold" style={{color:settings.primaryColor}}>omartype</h1>
            </div>
            {/* ----------------- nav bar ------------------- */}
            <div className="flex items-center justify-center gap-5 text-2xl ml-1 pt-5 cursor-pointer" style={{color:settings.paragraphColor}}>
              <Link to={"/"}><FaKeyboard className="hover:text-white transition-all"/></Link>
              <Link to="/leaderBoard"><FaCrown className="hover:text-white transition-all"/></Link>
              <Link to={"/settings"}><IoMdSettings className="hover:text-white transition-all"/></Link>
            </div>
          </div>
          <div>
              <Settings.Provider value={[settings , setSettings , leaderBoard , setLeaderBoard]} >
                <Routes>
                  <Route path="/" element={<Test />}/>
                  <Route path="/results" element={<Results />}/>
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/leaderBoard" element={<LeaderBoardPage />} />
                </Routes>
              </Settings.Provider>
          </div>
      </div>
    </>
  )
}

export default App
