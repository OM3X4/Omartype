import { FaBackspace } from "react-icons/fa"; 
import { AiFillEyeInvisible } from "react-icons/ai"; 
import { IoIosHand } from "react-icons/io"; 
/* eslint-disable */
import React from 'react';
import {useEffect , useState , useContext} from "react"
import { Settings } from './App';

const themesLibrary = [
    {
        name: "Default",
        primaryColor: "#ff9900",
        backgroundColor: "#0e0e0e",
        paragraphColor: "#2f2f2f",
        settingsbarColor: "#151515"
    },
    {
        name: "Modern Ink",
        primaryColor: "#ff360d",
        backgroundColor: "#ffffff",
        paragraphColor: "#b7b7b7",
        settingsbarColor: "#ececec"
    },
    {
        name: "Mexican",
        primaryColor: "#b12189",
        paragraphColor: "#333333",
        backgroundColor: "#f8ad34",
        settingsbarColor: "#f9b951"
    },
    {
        name: "English Red",
        primaryColor: "#fcd116",
        paragraphColor: "#6d0f19",
        backgroundColor: "#ce1226",
        settingsbarColor: "#9f1020"
    },
    {
        name: "Sweden",
        primaryColor: "#ffcc02",
        paragraphColor: "#57abdb",
        backgroundColor: "#0058a3",
        settingsbarColor: "#024f8e"
    },
    {
        name: "Carbon",
        primaryColor: "#f66e0d",
        paragraphColor: "#616161",
        backgroundColor: "#313131",
        settingsbarColor: "#2b2b2b"
    },
    {
        name: "Mint",
        primaryColor: "#5cdb95",
        paragraphColor: "#20688a",
        backgroundColor: "#05385b",
        settingsbarColor: "#07324e"
    },
    {
        name: "Chaos Theory",
        primaryColor: "#fd77d7",
        paragraphColor: "#676e8a",
        backgroundColor: "#141221",
        settingsbarColor: "#1e1d2f"
    },
    {
        name: "Matrix",
        primaryColor: "#15ff00",
        paragraphColor: "#006500",
        backgroundColor: "#000000",
        settingsbarColor: "#032000"
    },
    {
        name: "Vs Code",
        primaryColor: "#007acc",
        paragraphColor: "#4d4d4d",
        backgroundColor: "#1e1e1e",
        settingsbarColor: "#191919"
    },
]

const soundLibrary = [
    {
        
    }
]


function SettingsPage() {

    
    const [settings , setSettings] = useContext(Settings)

    const [isOpacity0 , setIsOpacity0] = useState(true)
    const [chosenTheme , setChosenTheme] = useState("Modern Ink")


    useEffect(() => {
        setIsOpacity0(true)
        setTimeout(() => {
            setIsOpacity0(false)
        } , 300)
    } , [])



    return (
    <>
        {/* ------------------Themes------------------- */}
        <div className={` w-[80%] mx-auto mt-16 transition-all ${isOpacity0 ? "opacity-0" : "opacity-100"}`}>
            <h1 className=' text-7xl font-semibold mb-3' style={{color:settings.primaryColor}} >Themes</h1>
            <div className=' flex items-center justify-center flex-wrap'>
                {themesLibrary.map((theme) => {
                    return (
                        <div className='cursor-pointer rounded-md m-3 w-[45%] flex items-center justify-center py-2 font-semibold hover:scale-110 transition-all' style={{color:theme.primaryColor , backgroundColor:theme.backgroundColor , borderColor:theme.primaryColor , border:(theme.name == chosenTheme ? `2px ${theme.primaryColor} solid` : "")}}
                        onClick={() => {setChosenTheme(theme.name);setSettings(prev => {return {...prev , primaryColor:theme.primaryColor , backgroundColor:theme.backgroundColor , paragraphColor:theme.paragraphColor , settingsbarColor:theme.settingsbarColor}})}}>
                            {theme.name}
                        </div>
                    )
                })}
            </div>
            <h1 className=' text-7xl font-semibold mb-3 mt-10' style={{color:settings.primaryColor}} >Settings</h1>
            <div>
                <div className='flex items-center justify-between mt-10'>
                    <div>
                        <h1 className='font-bold text-xl flex items-center gap-2' style={{color:settings.primaryColor}}><AiFillEyeInvisible />Blind Mode</h1>
                        <p style={{color:settings.paragraphColor}}>No errors or incorrect words are highlighted. Helps you to focus on raw speed. </p>
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <div className='text-3xl font-semibold rounded-md px-10 py-3 cursor-pointer hover:scale-1' style={{background:(!settings.blindMode ? settings.primaryColor : settings.paragraphColor)}} onClick={() => setSettings(prev => {return {...prev , blindMode:false}})}>Off</div>
                        <div className='text-3xl font-semibold rounded-md px-10 py-3 cursor-pointer hover:scale-1' style={{background:(settings.blindMode ? settings.primaryColor : settings.paragraphColor)}} onClick={() => setSettings(prev => {return {...prev , blindMode:true}})}>On</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-between mt-10'>
                    <div>
                        <h1 className='font-bold text-xl flex items-center gap-2' style={{color:settings.primaryColor}}><IoIosHand />Stop On Error</h1>
                        <p style={{color:settings.paragraphColor}}>This mode will stop input when pressing any incorrect letters.</p>
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <div className='text-3xl font-semibold rounded-md px-10 py-3 cursor-pointer hover:scale-1' style={{background:(!settings.stopOnError ? settings.primaryColor : settings.paragraphColor)}} onClick={() => setSettings(prev => {return {...prev , stopOnError:false}})}>Off</div>
                        <div className='text-3xl font-semibold rounded-md px-10 py-3 cursor-pointer hover:scale-1' style={{background:(settings.stopOnError ? settings.primaryColor : settings.paragraphColor)}} onClick={() => setSettings(prev => {return {...prev , stopOnError:true}})}>On</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-between mt-10'>
                    <div>
                        <h1 className='font-bold text-xl flex items-center gap-2' style={{color:settings.primaryColor}}><FaBackspace />Confidence Mode</h1>
                        <p style={{color:settings.paragraphColor}}>When enabled, you will not be able to go back to previous words to fix mistakes. When turned up to the max, you won't be able to backspace at all. </p>
                    </div>
                    <div className='flex items-center justify-center gap-5'>
                        <div className='text-3xl font-semibold rounded-md px-10 py-3 cursor-pointer hover:scale-1' style={{background:(!settings.confidenceMode ? settings.primaryColor : settings.paragraphColor)}} onClick={() => setSettings(prev => {return {...prev , confidenceMode:false}})}>Off</div>
                        <div className='text-3xl font-semibold rounded-md px-10 py-3 cursor-pointer hover:scale-1' style={{background:(settings.confidenceMode ? settings.primaryColor : settings.paragraphColor)}} onClick={() => setSettings(prev => {return {...prev , confidenceMode:true}})}>On</div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default SettingsPage;