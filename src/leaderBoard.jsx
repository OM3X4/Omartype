/* eslint-disable */
import React, { useContext , useState , useEffect } from 'react';

import { Settings } from './App';

function LeaderBoardPage() {

    const [settings,setSettings , leaderBoard , setLeaderBoard] = useContext(Settings)

    const [isOpacity0 , setIsOpacity0] = useState(false)


    useEffect(() => {
        setIsOpacity0(true)
        setTimeout(() => {
            setIsOpacity0(false)
        } , 300)
    } , [])


    return (
    <>
        <div className='mt-20 w-4/5 mx-auto p-10 rounded-xl' style={{backgroundColor:settings.settingsbarColor , opacity:(isOpacity0 ? 0 : 100)}}>
            <h1 className='text-6xl font-semibold text-center' style={{color:settings.primaryColor}}>This is you history</h1>
            <div className='mt-10'>
                {leaderBoard.length ?
                    
                    leaderBoard.sort((a , b) => b.wpm - a.wpm).map((score , index) => {
                        return(
                        <>
                            <div className=' flex items-center ml-10 gap-5 border m-3 p-4 rounded-xl' style={{borderColor:settings.primaryColor}}>
                                <span className='text-5xl font-black'  style={{color:settings.primaryColor}}>{index + 1}</span>
                                <span className=' text-2xl font-semibold' style={{color:settings.primaryColor}}><span style={{color:settings.paragraphColor}}>wpm: </span>{score.wpm.toFixed(2)}</span>
                                <span className=' text-2xl font-semibold' style={{color:settings.primaryColor}}><span style={{color:settings.paragraphColor}}>raw wpm: </span>{score.rawWpm.toFixed(2)}</span>
                                <span className=' text-2xl font-semibold' style={{color:settings.primaryColor}}><span style={{color:settings.paragraphColor}}>acc: </span>{score.accuracy.toFixed(1)}</span>
                                <span className=' text-2xl font-semibold' style={{color:settings.paragraphColor}}>{score.date}</span>
                            </div>

                        </>
                        )
                    })
                : <div className=' text-6xl text-center font-bold' style={{color:settings.errorColor}}>No history</div>
                }
            </div>
        </div>
    </>
    );
}

export default LeaderBoardPage;