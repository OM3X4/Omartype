import { RiRestartLine } from "react-icons/ri"; 
import { TbLetterA } from "react-icons/tb"; 
import { AiFillClockCircle } from "react-icons/ai"; 
import { BiHash } from "react-icons/bi"; 
import { BiAt } from "react-icons/bi"; 
/* eslint-disable */
import React , { useEffect, useState ,useRef } from 'react';

function Test() {

    const leaderRef = useRef(null)
    const wordAreaRef = useRef(null)
    const [leaderPos , setLeaderPos] = useState({top:0 , left:0})
    const [lastTop , setLastTop] = useState({top:0 , left:0})
    let intialTopOfTheLeader
    let intialLeftOfTheLeader

    useEffect(() => {
        intialTopOfTheLeader = leaderRef.current.getBoundingClientRect().top
        intialLeftOfTheLeader = leaderRef.current.getBoundingClientRect().left
    } , [])


    const keys = [
        'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F',
        'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L',
        'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R',
        's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X',
        'y', 'Y', 'z', 'Z'
    ]
    const [isTime , setIsTime] = useState(true)
    const [isPunc , setIsPunc] = useState(false)
    const [isNum , setIsNum] = useState(false)
    const [wordNum , setWordNum] = useState(0)
    const [isOpacity0 , setIsOpacity0] = useState(false)

    const words = [
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
    ]

    const wordsMap = new Map()
    words.map((letter , index) => wordsMap.set(index , 0))

    const [currentLetter , setCurrentLetter] = useState(0)
    const [pressed , setPressed] = useState(wordsMap)


    useEffect(() => {
        const handleKeyDown = (event) => {
        if (keys.includes(event.key) && words[currentLetter] != ' ') {
            // Check if the typed letter matches the current letter
            if (event.key == words[currentLetter]) {
              // Create a new map with updated state
              setPressed((prev) => new Map(prev).set(currentLetter, 1)); // Correct
            } else {
              // Create a new map with updated state
              setPressed((prev) => new Map(prev).set(currentLetter, 2)); // Incorrect
            }
            // Move to the next letter
            setCurrentLetter((prev) => prev + 1);
            
        }else if(event.key == ' ' && words[currentLetter] == ' '){
            event.preventDefault()
            setPressed((prev) => new Map(prev).set(currentLetter, 1)); // Correct
            setCurrentLetter((prev) => prev + 1);
        }
        else if(event.key == "Backspace"){
            const omar = currentLetter
            setCurrentLetter(prev => prev - 1)
            setPressed(prev => new Map(prev).set(omar -1  , 0))
        }else if(event.key == "Tab"){
            event.preventDefault();
            wordAreaRef.current.scrollTop = 0
            setCurrentLetter(0);
            setPressed(wordsMap)
            setIsOpacity0(true);
            setTimeout(() => {
                setIsOpacity0(false)
            } , 400)
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
        try{
            if(leaderPos == {top:0 , left:0}){
                setLastTop({top:leaderRef.current.getBoundingClientRect().top , left:leaderRef.current.getBoundingClientRect().left})
            }else{
                setLastTop(leaderPos)
            }
            setLeaderPos({top:leaderRef.current.getBoundingClientRect().top , left:leaderRef.current.getBoundingClientRect().left})
            // console.log(leaderPos)
        }catch(e){
            console.log("problem with the caret")
        }
    } , [currentLetter])






    return (
    <div className=" pt-10">
        {/* --------------- Settings Bar -------------------- */}
        <div className=" flex items-center justify- bg-[#151515] w-fit mx-auto py-3 px-10 rounded-xl">
            {/* ------------------- punc and numbers ---------------- */}
            <div className=" flex items-center justify-center gap-5">
                <div className={`${!isPunc ? "text-[#555555]" : "text-orange-500"} flex items-center justify-center gap-1 hover:text-white transition-all cursor-pointer`} onClick={() => setIsPunc(prev => !prev)}><BiAt />Punctuation</div>
                <div className={`${!isNum ? "text-[#555555]" : "text-orange-500"} flex items-center justify-center gap-1 hover:text-white transition-all cursor-pointer`} onClick={() => setIsNum(prev => !prev)}><BiHash />Numbers</div>
            </div>
            <div className=" w-1 h-6 rounded-full bg-black mx-5"></div>
            {/* ----------------- Mode ---------------- */}
            <div className=" flex items-center justify-center gap-5">
                <div className={`${!isTime ? "text-[#555555]" : "text-orange-500"} flex items-center justify-center gap-1 hover:text-white transition-all cursor-pointer`} onClick={() => setIsTime(prev => !prev)}><AiFillClockCircle />Time</div>
                <div className={`${isTime ? "text-[#555555]" : "text-orange-500"} flex items-center justify-center gap-1 hover:text-white transition-all cursor-pointer`} onClick={() => setIsTime(prev => !prev)}><TbLetterA />Words</div>
            </div>
            <div className=" w-1 h-6 rounded-full bg-black mx-5"></div>
            {/* ------------------Time or Words ---------------- */}
            
                {
                isTime ?
                <div className=" flex items-center justify-center gap-7 text-[#555555] cursor-pointer font-semibold">
                    <div className={`${wordNum == 0 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => setWordNum(0)}>15</div>
                    <div className={`${wordNum == 1 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => setWordNum(1)}>30</div>
                    <div className={`${wordNum == 2 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => setWordNum(2)}>60</div>
                    <div className={`${wordNum == 3 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => setWordNum(3)}>120</div>
                </div>
                    :
                <div className=" flex items-center justify-center gap-7 text-[#555555] cursor-pointer font-semibold">
                    <div className={`${wordNum == 0 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => setWordNum(0)}>10</div>
                    <div className={`${wordNum == 1 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => setWordNum(1)}>25</div>
                    <div className={`${wordNum == 2 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => setWordNum(2)}>50</div>
                    <div className={`${wordNum == 3 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => setWordNum(3)}>100</div>
                </div>
                }
            
        </div>
        {/* ------------------- Words ---------------------- */}
        <div className={`${isOpacity0 ? "opacity-0" : "opacity-100"} "opacity-0" duration-150 transition-all flex flex-wrap text-6xl text-white w-[80%] mx-auto mt-16 font-semibold `} ref={wordAreaRef}>
            <div className={`z-50 bg-orange-500 w-1 h-[5rem] rounded-full ${currentLetter == 0 ? "animate-fadeInOut" : ""} absolute transition-all`}
            style={{left:leaderPos.left , top:leaderPos.top}}></div>
            {words.map((letter , index) => {
                return(
                    <div className=" flex items-center justify-center relative">
                        {index == currentLetter ? <div className={` bg-orange- w-1 h-[80%] rounded-full ${currentLetter == 0 ?  "animate-fadeInOut" : ""} absolute left-0 transition-all`} ref={leaderRef}></div> : ""}
                        <div className={`py-3 ${pressed.get(index) == 1 ? "text-orange-500" : (pressed.get(index) == 2 ?  "text-red-800" : "text-[#555555]")} transition-all duration-150 text-6xl font-semibold`}>
                            {letter == ' ' ? '\u00A0' : letter}
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="text-5xl text-white flex items-center justify-center mt-20 " onClick={(e) => {setCurrentLetter(0);
            wordAreaRef.current.scrollTop += 10
            setPressed(wordsMap)
            setIsOpacity0(true);
            setTimeout(() => {
                setIsOpacity0(false)
            } , 400)}}>
            <RiRestartLine className="hover:text-orange-500 hover:rotate-[200deg] transition-all duration-300"/>
        </div>
    </div>
    );
}

export default Test;