'use client'
import React, { useEffect } from 'react';
import { preLoaderAnim } from '../Animation/preloader';

const Preloader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div className='text-container text-xl flex justify-center items-center h-screen gap-20 font-bold'>
            <span>Step.</span>
            <span>Into.</span>
            <span>Horizon.</span>
        </div>
    );
};

export default Preloader;
