/* eslint-disable */
import { wordsOrigin } from "./assets/200word";
import { VscDebugRestart } from "react-icons/vsc";
import { RiRestartLine } from "react-icons/ri"; 
import { TbLetterA } from "react-icons/tb"; 
import { BiHash } from "react-icons/bi"; 
import { BiAt } from "react-icons/bi"; 
import React , { useEffect, useState ,useRef , useContext } from 'react';
import { useNavigate } from "react-router";

import { Settings } from "./App";









function Test() {
    
    const [settings , setSettings] = useContext(Settings)
    console.log(settings.primaryColor)

    const navigate = useNavigate()
    
    const currentLetterRef = useRef(null)
    const leaderRef = useRef(null)
    const wordAreaRef = useRef(null)
    const [leaderPos , setLeaderPos] = useState({top:0 , left:0})
    const [startDate , setStartDate] = useState()
    const [takenTime, setTakenTime] = useState()
    const [wpm , setWpm] = useState()
    const [rawWpm , setRawWpm] = useState()
    const [rightLetters , setRightLetters] = useState(0)
    
    const keys = [
        'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F',
        'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L',
        'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R',
        's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X',
        'y', 'Y', 'z', 'Z'
    ]
    const [isPunc , setIsPunc] = useState(false)
    const [isNum , setIsNum] = useState(false)
    const [wordNum , setWordNum] = useState(10)
    const [isOpacity0 , setIsOpacity0] = useState(true)
    const [isTapeMode , setIsTapeMode] = useState(false)
    const [words , setWords] = useState([
        'v' , 'e' , 'r' ,'y' , ' ' , 'b' , 'u' , 't' ,' ' , 'e' , 'v' , 'e' , 'n' , ' ', 'w' , 'r' , 'i' , 't' , 'e' , ' ' , 't' , 'a' , 'k'
        ,'e' , ' ' , 'g' , 'i' , 'v' , 'e' , ' ' , 't' , 'h' , 'e' , 'y' , ' ' , 's' , 'i' , 'n' , 'c' , 'e' , ' ' , 's' , 'c' , 'h'
        , 'o' , 'o' , 'l' , ' ' , 'w' , 'a' , 'n' , 't' , ' ' , 'v' , 'e' , 'r' ,'y' , ' ' , 'b' , 'u' , 't' ,' ' , 'e' , 'v' , 'e' , 'n' , ' ', 'w' , 'r' , 'i' , 't' , 'e' , ' ' , 't' , 'a' , 'k'
        ,'e' , ' ' , 'g' , 'i' , 'v' , 'e' , ' ' , 't' , 'h' , 'e' , 'y' , ' ' , 's' , 'i' , 'n' , 'c' , 'e' , ' ' , 's' , 'c' , 'h'
        , 'o' , 'o' , 'l' , ' ' , 'w' , 'a' , 'n' , 't' , ' ' , 'v' , 'e' , 'r' ,'y' , ' ' , 'b' , 'u' , 't' ,' ' , 'e' , 'v' , 'e' , 'n' , ' ', 'w' , 'r' , 'i' , 't' , 'e' , ' ' , 't' , 'a' , 'k'
        ,'e' , ' ' , 'g' , 'i' , 'v' , 'e' , ' ' , 't' , 'h' , 'e' , 'y' , ' ' , 's' , 'i' , 'n' , 'c' , 'e' , ' ' , 's' , 'c' , 'h'
        , 'o' , 'o' , 'l' , ' ' , 'w' , 'a' , 'n' , 't' , ' ' , 'v' , 'e' , 'r' ,'y' , ' ' , 'b' , 'u' , 't' ,' ' , 'e' , 'v' , 'e' , 'n' , ' ', 'w' , 'r' , 'i' , 't' , 'e' , ' ' , 't' , 'a' , 'k'
        ,'e' , ' ' , 'g' , 'i' , 'v' , 'e' , ' ' , 't' , 'h' , 'e' , 'y' , ' ' , 's' , 'i' , 'n' , 'c' , 'e' , ' ' , 's' , 'c' , 'h'
        , 'o' , 'o' , 'l' , ' ' , 'w' , 'a' , 'n' , 't' , ' ' , 'v' , 'e' , 'r' ,'y' , ' ' , 'b' , 'u' , 't' ,' ' , 'e' , 'v' , 'e' , 'n' , ' ', 'w' , 'r' , 'i' , 't' , 'e' , ' ' , 't' , 'a' , 'k'
        ,'e' , ' ' , 'g' , 'i' , 'v' , 'e' , ' ' , 't' , 'h' , 'e' , 'y' , ' ' , 's' , 'i' , 'n' , 'c' , 'e' , ' ' , 's' , 'c' , 'h'
        , 'o' , 'o' , 'l' , ' ' , 'w' , 'a' , 'n' , 't' , ' ' , 'v' , 'e' , 'r' ,'y' , ' ' , 'b' , 'u' , 't' ,' ' , 'e' , 'v' , 'e' , 'n' , ' ', 'w' , 'r' , 'i' , 't' , 'e' , ' ' , 't' , 'a' , 'k'
        ,'e' , ' ' , 'g' , 'i' , 'v' , 'e' , ' ' , 't' , 'h' , 'e' , 'y' , ' ' , 's' , 'i' , 'n' , 'c' , 'e' , ' ' , 's' , 'c' , 'h'
        , 'o' , 'o' , 'l' , ' ' , 'w' , 'a' , 'n' , 't' , ' ' , 'v' , 'e' , 'r' ,'y' , ' ' , 'b' , 'u' , 't' ,' ' , 'e' , 'v' , 'e' , 'n' , ' ', 'w' , 'r' , 'i' , 't' , 'e' , ' ' , 't' , 'a' , 'k'
        ,'e' , ' ' , 'g' , 'i' , 'v' , 'e' , ' ' , 't' , 'h' , 'e' , 'y' , ' ' , 's' , 'i' , 'n' , 'c' , 'e' , ' ' , 's' , 'c' , 'h'
        , 'o' , 'o' , 'l' , ' ' , 'w' , 'a' , 'n' , 't' ,
    ])

    useEffect(() => {
        setStartDate()
        setTakenTime()
        setWpm(0)
        setRawWpm(0)
        setRightLetters(0)
    } , [])

    function changeModeHandler(number){
        let result = []
        for(let i = 0;i < number; i++){
            if(i > 0){
                result.push(' ')
            }
            const randomNumber = Math.floor(Math.random() * 138);
            result.push(...wordsOrigin[randomNumber])
        }
        
        setIsOpacity0(true);
            setTimeout(() => {
                setWords(result)
                wordAreaRef.current.scrollTop = 0
                setRightLetters(0)
                setCurrentLetter(0);
                setPressed(wordsMap)
                if (wordAreaRef) {
                    setIsTapeMode(
                        wordAreaRef.current.scrollHeight > wordAreaRef.current.clientHeight
                    );
                }
                setIsOpacity0(false)
                
            } , 400)
        
    }
    
    function makeNewWords(number){
        let result = []
        for(let i = 0;i < number; i++){
            if(i > 0){
                result.push(' ')
            }
            const randomNumber = Math.floor(Math.random() * 138);
            result.push(...wordsOrigin[randomNumber])
        }
        setWords(result)
        if (wordAreaRef) {
            setIsTapeMode(
                wordAreaRef.current.scrollHeight > wordAreaRef.current.clientHeight
            );
        }
    }
    

    const wordsMap = new Map()
    words.map((letter , index) => wordsMap.set(index , 0))

    const [currentLetter , setCurrentLetter] = useState(0)
    const [pressed , setPressed] = useState(wordsMap)

    function tapeModeHandler(){
        if (wordAreaRef) {
            setIsTapeMode(
                wordAreaRef.current.scrollHeight > wordAreaRef.current.clientHeight
            );
        }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
        if(keys.includes(event.key)) event.preventDefault();

        if (keys.includes(event.key) && words[currentLetter] != ' ') {
            // Check if the typed letter matches the current letter
            if (event.key == words[currentLetter]) {
              // Create a new map with updated state
                setPressed((prev) => new Map(prev).set(currentLetter, 1)); // Correct
                
                setRightLetters(prev => prev + 1)

                setCurrentLetter((prev) => prev + 1);
                if(wordAreaRef.current && currentLetterRef.current){
                    wordAreaRef.current.scrollLeft += currentLetterRef.current.offsetWidth
                }
            }else if(settings.stopOnError){

            }else {
              // Create a new map with updated state
                setPressed((prev) => new Map(prev).set(currentLetter, (settings.blindMode ? 1 : 2))); // Incorrect
                
                setCurrentLetter((prev) => prev + 1);
                if(wordAreaRef.current && currentLetterRef.current){
                    wordAreaRef.current.scrollLeft += currentLetterRef.current.offsetWidth
                }
            
            }
            
            
        }else if(event.key == ' ' && words[currentLetter] == ' '){
            event.preventDefault()
            setRightLetters(prev => prev + 1)
            wordAreaRef.current.scrollLeft += currentLetterRef.current.offsetWidth
            setPressed((prev) => new Map(prev).set(currentLetter, 1)); // Correct
            setCurrentLetter((prev) => prev + 1);
        }
        else if(event.key == "Backspace" && currentLetter > 0 && !settings.confidenceMode){
            wordAreaRef.current.scrollLeft -= currentLetterRef.current.offsetWidth
            const omar = currentLetter
            setCurrentLetter(prev => prev - 1)
            if(pressed.get(omar - 1) == 1){
                setRightLetters(prev => prev - 1)
            }
            setPressed(prev => new Map(prev).set(omar -1  , 0))
        }else if(event.key == "Tab"){
            
            event.preventDefault();
            wordAreaRef.current.scrollTop = 0
            setRightLetters(0)
            setCurrentLetter(0);
            setPressed(wordsMap)
            setIsOpacity0(true);
            setTimeout(() => {
                setIsOpacity0(false)
                makeNewWords(wordNum)
            } , 400)
            wordAreaRef.current.scrollLeft = 0
        }
        // console.log(event.key == ' ' , words[currentLetter] == ' ' , keys.includes(event.key))
    
        };
    
        // Add event listener
        window.addEventListener("keydown", handleKeyDown);
    
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentLetter, keys, words]);

    useEffect(() => {
        if(currentLetter == 1){
            setStartDate(new Date())
        }else if(currentLetter >= words.length){
            const omar = new Date()
            setTakenTime((omar.getTime() - startDate.getTime()) / 1000)
            setWpm((rightLetters * 12) / ((omar.getTime() - startDate.getTime()) / 1000))
            setRawWpm((words.length * 12) / ((omar.getTime() - startDate.getTime()) / 1000))
            console.log()
            navigate("/results" , {state: {
                speed: (rightLetters * 12) / ((omar.getTime() - startDate.getTime()) / 1000) , 
                rawWpm:(words.length * 12) / ((omar.getTime() - startDate.getTime()) / 1000),
                time: (omar.getTime() - startDate.getTime()) / 1000,
                accuracy: (rightLetters / words.length) * 100,
                testType: wordNum
            }})
            console.log((rightLetters * 12) / ((omar.getTime() - startDate.getTime()) / 1000))
        }
        try{
            setLeaderPos({top:leaderRef.current.getBoundingClientRect().top , left:leaderRef.current.getBoundingClientRect().left})
        }catch(e){
            // console.log("problem with the caret")
        }
    } , [currentLetter])

    useEffect(() => {
        if (wordAreaRef) {
            setIsTapeMode(
                wordAreaRef.current.scrollHeight > wordAreaRef.current.clientHeight
            );
        }
    } , [words])

    useEffect(() => {
        setCurrentLetter(0)
        setRightLetters(0)
        setPressed(wordsMap)
        setIsOpacity0(true)
        setTimeout(() => {
            setIsOpacity0(false)
        } , 300)
        makeNewWords(wordNum)

    } , [])








    return (
    <div className={` pt-5 ${isOpacity0 ? "opacity-0" : ""} transition-all`}>
        {/* --------------- Settings Bar -------------------- */}
        <div className=" flex items-center w-fit mx-auto py-3 px-10 rounded-xl" style={{backgroundColor:settings.settingsbarColor}}>
            {/* ------------------- punc and numbers ---------------- */}
            <div className=" flex items-center justify-center gap-5">
                <div className={`flex items-center justify-center gap-1 hover:text-white transition-all cursor-pointer`} onClick={() => setIsPunc(prev => !prev)} style={{color:(!isPunc ? settings.paragraphColor : settings.primaryColor)}}><BiAt />Punctuation</div>
                <div className={`flex items-center justify-center gap-1 hover:text-white transition-all cursor-pointer`} onClick={() => setIsNum(prev => !prev)} style={{color:(!isNum ? settings.paragraphColor : settings.primaryColor)}}><BiHash />Numbers</div>
            </div>
            <div className=" w-1 h-6 rounded-full  mx-5" style={{backgroundColor:settings.paragraphColor}}></div>
            {/* ----------------- Mode ---------------- */}
            <div className=" flex items-center justify-center gap-5">
                <div className={` flex items-center justify-center gap-1 hover:text-white transition-all cursor-pointer`} style={{color:settings.primaryColor}}><TbLetterA />Words</div>
            </div>
            <div className=" w-1 h-6 rounded-full bg-black mx-5"  style={{backgroundColor:settings.paragraphColor}}></div>
                <div className=" flex items-center justify-center gap-7 cursor-pointer font-semibold">
                    <div className={` hover:text-white transition-all`} onClick={() => {setWordNum(10);changeModeHandler(10);tapeModeHandler()}} style={{color:(wordNum == 10 ? settings.primaryColor : settings.paragraphColor)}}>10</div>
                    <div className={` hover:text-white transition-all`} onClick={() => {setWordNum(25);changeModeHandler(25);tapeModeHandler()}} style={{color:wordNum == 25 ? settings.primaryColor : settings.paragraphColor}}>25</div>
                    <div className={` hover:text-white transition-all`} onClick={() => {setWordNum(50);changeModeHandler(50);tapeModeHandler()}} style={{color:wordNum == 50 ? settings.primaryColor : settings.paragraphColor}}>50</div>
                    <div className={` hover:text-white transition-all`} onClick={() => {setWordNum(100);changeModeHandler(100);tapeModeHandler()}} style={{color:wordNum == 100 ? settings.primaryColor : settings.paragraphColor}}>100</div>
                </div>
        </div>
        {/* ------------------- Words ---------------------- */}
        <div id="wordArea" className={`${isOpacity0 ? "opacity-0" : "opacity-100"} "opacity-0" duration-150 transition-all flex  text-6xl text-white max-w-[90%] mx-auto mt-10 font-semibold overflow-x-auto no-scrollbar max-h-[40vh] flex-wrap ${!isTapeMode ? "max-h-[40vh] ":"flex-nowrap pl-64"}`} ref={wordAreaRef}>
            <div className={`z-50 bg-orange-500 w-1 h-[5rem] rounded-full ${currentLetter == 0 ? "animate-fadeInOut" : ""} absolute transition-all`}
            style={{left:leaderPos.left , top:leaderPos.top}}></div>
            {words.map((letter , index) => {
                return(
                    <div className=" flex items-center justify-center relative">
                        {index == currentLetter ? <div className={` bg-orange- w-1 h-[80%] rounded-full ${currentLetter == 0 ?  "animate-fadeInOut" : ""} absolute left-0 transition-all`} ref={leaderRef}></div> : ""}
                        <div className={`py-3  transition-all duration-150 text-6xl font-semibold`} ref={currentLetter == index ? currentLetterRef : null} style={{color:(pressed.get(index) == 1 ? settings.primaryColor : (pressed.get(index) == 2 ?  settings.errorColor : settings.paragraphColor))}}>
                            {letter == ' ' ? '\u00A0' : letter}
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="text-5xl text-white flex items-center justify-center mt-32 " onClick={(e) => {setCurrentLetter(0);
            wordAreaRef.current.scrollTop += 10
            setPressed(wordsMap)
            setIsOpacity0(true);
            setTimeout(() => {
                setIsOpacity0(false)
            } , 400)}}>
            <VscDebugRestart className={`hover:text-white text-[#4e4e4e] hover:-rotate-[200deg] transition-all duration-300 font-black`}/>
        </div>
        <div className={`${isOpacity0 ? "opacity-0" : ""} transition-all text-white flex items-center justify-center mt-10 absolute bottom-10 left-[calc(45%)]`}>
            <div className=" text-black bg-[#555555] rounded-sm px-1 m-2">tab </div>
            <div className=" text-[#555555]">- restart test</div>
        </div>
    </div>
    );
}

export default Test;