import React, { useEffect, useState } from 'react'
import axios from "../../config/axios"
import { assets } from "../../assets/assets";

function Home() {
    const [advice, setAdvice] = useState({});
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    const pattern_design = windowWidth <= 640 ? assets.mobile_pattern : assets.desktop_pattern;

    const fetchDataHandler = async () => {
        await axios.get()
            .then(res => setAdvice(res.data.slip))
            .catch(err => console.log(err.message))
    };
    useEffect(() => {
        (async () => {
            await axios.get()
                .then(res => setAdvice(res.data.slip))
                .catch(err => console.log(err.message))
        })();
    }, [])
    return (
        <div className='bg-dark-grayish-blue  text-light-cyan px-12 py-8 rounded-lg relative mx-4'>
            <p className='uppercase text-center text-neon-green tracking-widder font-semibold text-opacity-75'>advice #{advice.id}</p>
            <p className='text-center text-xl max-w-md py-6 font-bold'>“{advice.advice}”</p>
            <img src={pattern_design} alt="" className='mx-auto pb-6' />
            <div className='btn_dic' onClick={fetchDataHandler}>
                <img src={assets.icon_dice} alt="dice_icon" />
            </div>  
        </div>
    )
}

export default Home;