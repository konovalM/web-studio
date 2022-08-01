import React from 'react';
import {SystemsAnimationTag} from "./SystemsAnimation.styles";

const SystemsAnimation = () => {
    return (
        <SystemsAnimationTag>
            <div className="group1">
                <div className="line first"><span className='blue'>&lt;!--</span> &lt;div <span className='blue'>class=&quot;preloader&quot;&gt;</span></div>
                <div className="line second">&lt;div <span className='blue'>class=&quot;preloader__row&quot;&gt;</span></div>
                <div className="line third">&lt;div <span className='blue'>class=&quot;preloader__item&quot;&gt;</span>&lt;/div&gt;</div>
                <div className="line fourth">&lt;div <span className='blue'>class=&quot;preloader__item&quot;&gt;</span>&lt;/div&gt;</div>
                <div className="line fifth">&lt;/div&gt;</div>
                <div className="line sixth">&lt;/div&gt; <span className='blue'>--&gt;</span></div>
            </div>
            <div className="group2">
                <div className="line first"><span className='blue'>&lt;!--</span> &lt;div <span className='blue'>class=&quot;preloader&quot;&gt;</span></div>
                <div className="line second">&lt;div <span className='blue'>class=&quot;preloader__row&quot;&gt;</span></div>
                <div className="line third">&lt;div <span className='blue'>class=&quot;preloader__item&quot;&gt;</span>&lt;/div&gt;</div>
                <div className="line fourth">&lt;div <span className='blue'>class=&quot;preloader__item&quot;&gt;</span>&lt;/div&gt;</div>
                <div className="line fifth">&lt;/div&gt;</div>
                <div className="line sixth">&lt;/div&gt; <span className='blue'>--&gt;</span></div>
            </div>
        </SystemsAnimationTag>
    );
};

export default SystemsAnimation;