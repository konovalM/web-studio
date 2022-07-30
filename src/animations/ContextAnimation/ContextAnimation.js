import React from 'react';
import {AnimationTag} from "./ContextAnimation.styles";
import {GoogleSvg} from "../../icons/components/GoogleSvg";
import {YandexSvg} from "../../icons/components/YandexSvg";

const ContextAnimation = () => {
    return (
        <AnimationTag>
            <div className="top">
                <div className="one" />
                <div className="two" />
            </div>
            <div className="bottom">
                <div className="one" />
                <div className="two" />
            </div>
            <GoogleSvg className='google'/>
            <YandexSvg className='yandex'/>
        </AnimationTag>
    );
};

export default ContextAnimation;