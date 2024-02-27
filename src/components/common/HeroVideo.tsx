"use client";
import * as React from 'react';
import ReactPlayer from 'react-player';

interface IHeroVideoProps {
    center?: boolean
}

const HeroVideo: React.FunctionComponent<IHeroVideoProps> = (props) => {
    return <div className={`w-full  md:rounded-2xl  md:max-w-[1020px] overflow-hidden relative ${props.center ? 'mx-auto' : ''}`}>
        <ReactPlayer
            height="100%"
            width="100%"
            muted
            playing
            loop
            url="/hw.mp4"
        />
    </div>
};

export default HeroVideo;
