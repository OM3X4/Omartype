/* eslint-disable */
import React , {useEffect , useState , useRef} from 'react';
import { useNavigate , useLocation } from 'react-router';

function Results() {

    const navigate = useNavigate()
    const location = useLocation()

    const data = location.state

    const [isOpacity0 , setIsOpacity0] = useState(false)


    useEffect(() => {
        setIsOpacity0(true)
        setTimeout(() => {
            setIsOpacity0(false)
        } , 300)
    } , [])

    useEffect(() => {

        const handleTab = (event) => {
            event.preventDefault()
            if(event.key == "Tab"){
                navigate("/")
            }
        }



        addEventListener("keydown" , handleTab)

        return () => {
            removeEventListener("keydown" , handleTab)
        }
    } , [])



    return (
    <>
        <div className={` transition-all text-white mx-32 mt-20 flex gap-16 justify-center items-center flex-wrap ${isOpacity0 ? "opacity-0" : ""}`}>
            <div>
                <h1 className='text-zinc-600 text-5xl text-center'>wpm</h1>
                <h1 className='text-orange-500 text-9xl font-semibold text-center'>{(data.speed).toFixed(1)}</h1>
            </div>
            <div>
                <h1 className='text-zinc-600 text-5xl text-center'>acc</h1>
                <h1 className='text-orange-500 text-9xl font-semibold text-center'>{data.accuracy.toFixed(1)}%</h1>
            </div>
            <div>
                <h1 className='text-zinc-600 text-2xl text-center'>test type</h1>
                <h1 className='text-orange-500 text-3xl font-semibold text-center'>{data.testType} words</h1>
            </div>
            <div>
                <h1 className='text-zinc-600 text-2xl text-center'>raw</h1>
                <h1 className='text-orange-500 text-4xl font-semibold text-center'>{data.rawWpm.toFixed(1)}</h1>
            </div>
            <div>
                <h1 className='text-zinc-600 text-5xl'>time</h1>
                <h1 className='text-orange-500 text-9xl font-semibold'>{(data.time).toFixed(1)}s</h1>
            </div>
        </div>
        <div className=" text-white flex items-center justify-center mt-10 absolute bottom-10 left-[calc(45%)]">
            <div className=" text-black bg-[#555555] rounded-sm px-1 m-2">tab </div>
            <div className=" text-[#555555]">- restart test</div>
        </div>
    </>
    );
}

export default Results;