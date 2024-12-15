/* eslint-disable */
import { wordsOrigin } from "./assets/200word";
import { RiRestartLine } from "react-icons/ri"; 
import { TbLetterA } from "react-icons/tb"; 
import { AiFillClockCircle } from "react-icons/ai"; 
import { BiHash } from "react-icons/bi"; 
import { BiAt } from "react-icons/bi"; 
import React , { useEffect, useState ,useRef } from 'react';

function Test() {

    const currentLetterRef = useRef(null)
    const leaderRef = useRef(null)
    const wordAreaRef = useRef(null)
    const [leaderPos , setLeaderPos] = useState({top:0 , left:0})
    const [isTimeStarted , setIsTimeStarted] = useState(false)
    
    
    const keys = [
        'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F',
        'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L',
        'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R',
        's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X',
        'y', 'Y', 'z', 'Z'
    ]
    const [wordsChanges , setWordsChanges] = useState(0)
    const [isTime , setIsTime] = useState(true)
    const [isPunc , setIsPunc] = useState(false)
    const [isNum , setIsNum] = useState(false)
    const [wordNum , setWordNum] = useState(10)
    const [isOpacity0 , setIsOpacity0] = useState(false)
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
    
    function makeNewWords(){
        let result = []
        for(let i = 0;i < wordNum; i++){
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



    useEffect(() => {
        const handleKeyDown = (event) => {
            event.preventDefault()
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
            wordAreaRef.current.scrollLeft += currentLetterRef.current.offsetWidth

            
        }else if(event.key == ' ' && words[currentLetter] == ' '){
            event.preventDefault()
            wordAreaRef.current.scrollLeft += currentLetterRef.current.offsetWidth
            console.log(currentLetterRef.current.offsetWidth)
            setPressed((prev) => new Map(prev).set(currentLetter, 1)); // Correct
            setCurrentLetter((prev) => prev + 1);
        }
        else if(event.key == "Backspace"){
            wordAreaRef.current.scrollLeft -= currentLetterRef.current.offsetWidth
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
                makeNewWords()
            } , 400)
            setWordsChanges(prev => prev + 1)
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
        try{
            setLeaderPos({top:leaderRef.current.getBoundingClientRect().top , left:leaderRef.current.getBoundingClientRect().left})
            // console.log(leaderPos)
        }catch(e){
            console.log("problem with the caret")
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
        makeNewWords()
    } , [])

    useEffect(() => {
        
    })






    return (
    <div className=" pt-5">
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
                    <div className={`${wordNum == 10 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => setWordNum(0)}>15</div>
                    <div className={`${wordNum == 25 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => setWordNum(1)}>30</div>
                    <div className={`${wordNum == 50 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => setWordNum(2)}>60</div>
                    <div className={`${wordNum == 100 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => setWordNum(3)}>120</div>
                </div>
                    :
                <div className=" flex items-center justify-center gap-7 text-[#555555] cursor-pointer font-semibold">
                    <div className={`${wordNum == 10 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => {setWordNum(10);makeNewWords()}}>10</div>
                    <div className={`${wordNum == 25 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => {setWordNum(25);makeNewWords()}}>25</div>
                    <div className={`${wordNum == 50 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => {setWordNum(50);makeNewWords()}}>50</div>
                    <div className={`${wordNum == 100 ? "text-orange-500" : "text-[#555555]"} hover:text-white transition-all`} onClick={() => {setWordNum(100);makeNewWords()}}>100</div>
                </div>
                }
            
        </div>
        {/* ------------------- Words ---------------------- */}
        <div className={`${isOpacity0 ? "opacity-0" : "opacity-100"} "opacity-0" duration-150 transition-all flex  text-6xl text-white w-[80%] mx-auto mt-10 font-semibold overflow-x-auto no-scrollbar max-h-[40vh] flex-wrap ${!isTapeMode ? "max-h-[40vh] ":"flex-nowrap pl-64"}`} ref={wordAreaRef}>
            <div className={`z-50 bg-orange-500 w-1 h-[5rem] rounded-full ${currentLetter == 0 ? "animate-fadeInOut" : ""} absolute transition-all`}
            style={{left:leaderPos.left , top:leaderPos.top}}></div>
            {words.map((letter , index) => {
                return(
                    <div className=" flex items-center justify-center relative">
                        {index == currentLetter ? <div className={` bg-orange- w-1 h-[80%] rounded-full ${currentLetter == 0 ?  "animate-fadeInOut" : ""} absolute left-0 transition-all`} ref={leaderRef}></div> : ""}
                        <div className={`py-3 ${pressed.get(index) == 1 ? "text-orange-500" : (pressed.get(index) == 2 ?  "text-red-800" : "text-[#555555]")} transition-all duration-150 text-6xl font-semibold`} ref={currentLetter == index ? currentLetterRef : null}>
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