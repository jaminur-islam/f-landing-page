/* eslint-disable react/no-unescaped-entities */
import HeroForm from '@/components/common/HeroForm';
import dynamic from 'next/dynamic';
import * as React from 'react';

interface IMissionProps {
}

const HeroVideo = dynamic(() => import("@/components/common/HeroVideo"), {
    ssr: false,
});


const Mission: React.FunctionComponent<IMissionProps> = (props) => {
    return <div className='container px-1'>
        <div className='my-4 pb-8'>
            <h2 className='h1 text-[24px] md:text-[48px] w-max mx-auto pb-6'>Our Mission</h2>
            <p className='p  md:w-[90%] mx-auto text-[13px] md:text-[20px] my-3  md:text-center text-justify md:px-7'>We believe everyone has a creative spark. Our mission is to make building applications so simple that anyone can do it, not just developers. We want everyone worldwide to feel like a programmer, turning ideas into reality effortlessly.</p>
            <p className='p md:w-[75%]  mx-auto  text-[13px]  my-8 text-justify  md:text-[14px]
            '>We see a world where technology is a tool for all, not just a select few. Beyond simplifying app development, we're committed to fostering a community of creators who support and inspire each other. As we continue on this journey, our aim is to evolve alongside the needs of our users, consistently innovating to make the world of creating even more accessible. Together, let's redefine what's possible and build a future where anyone, regardless of background or expertise, can contribute to the digital landscape with confidence and creativity.</p>
            <div className='text-center py-6'>
                <HeroForm />
            </div>
        </div>
        <div className='hidden md:block text-center'>
            <HeroVideo
                center={true}
            />
        </div>

    </div>
};

export default Mission;
