import React, {useEffect, useState} from 'react';
import Button from "../../../elements/Button";
import Dash from "../../common/Dash/Dash";
import Typed from "typed.js";
import {scrollToElement} from "../../../utils/scrollToElement";
import {Link} from "react-router-dom";
import {MainTag} from "./Main.styles";




const Main = () => {
    const el = React.useRef(null);
    const typed = React.useRef(null);
    const [infinityAnim, setInfinityAnim] = useState(true)
    useEffect(() => {
        const options = {
            strings: [
                '<span style="color: #1E4FCD">[web.сервисы]</span>',
                '<span style="color: #1E4FCD">[web.сайты]</span>'

            ],
            typeSpeed: 90,
            backSpeed: 90,
            onComplete: () => {
                setTimeout(() => {
                    setInfinityAnim(!infinityAnim)
                }, 3000)
            }
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    }, [infinityAnim])

    return (
        <MainTag>

            <div className="scroll" onClick={() => scrollToElement('main-second')}>
                <div className="scrollOutside">
                </div>
                <div className="scrollInner">
                    <div className="scrollCircle"></div>
                </div>
                <p className="scrollText">scroll</p>
            </div>
            <div className="container">
                <Dash color={'#000000'} countBefore={0} countAfter={7} bottom={'0px'}/>
                <div className="wrapper">
                    <div className="left">
                        <h1 className="subtitle">
                            DIGITAL-агентство полного цикла STUDIO NAME
                        </h1>
                        <h2 className="title">
                            <span className="titleSpan">Сайты под ключ и <br/><span ref={el}></span></span>
                        </h2>
                        <div className="btnWrapper">
                            <Button btnColor='#000000' btnStyles={[{
                                background: '#1E4FCD',
                                color: '#fff',
                                border: 'none'
                            }, {background: '#fff', color: '#1a1a1a', border: '1px solid #1a1a1a'}]}
                            />
                        </div>
                        <div className="stacks">
                            <div className="stack programLang" data-aos='fade-down' >
                                <div className="stackItem">
                                    <div className="stackText">Python</div>
                                </div>
                                <div className="stackItem stackItemActive">
                                    <div className="stackText bold">JavaScript</div>
                                </div>
                                <div className="stackItem">
                                    <div className="stackText">Node</div>
                                </div>
                            </div>
                            <div className="stack frameworks" data-aos='fade-down' data-aos-delay='400'>
                                <div className="stackItem stackItemActive">
                                    <div className="stackText bold">Django</div>
                                </div>
                                <div className="stackItem">
                                    <div className="stackText">React</div>
                                </div>
                                <div className="stackItem">
                                    <div className="stackText">Next</div>
                                </div>
                                <div className="stackItem">
                                    <div className="stackText">Vue</div>
                                </div>
                            </div>
                            <div className="stack cms" data-aos='fade-down' data-aos-delay='800'>
                                <div className="stackItem">
                                    <div className="stackText">Wordpress</div>
                                </div>
                                <div className="stackItem stackItemActive">
                                    <div className="stackText bold">Tilda</div>
                                </div>
                                <div className="stackItem">
                                    <div className="stackText">Ghost</div>
                                </div>
                                <div className="stackItem">Others...</div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="rightInner">
                            <h3 className="websites rightTitle">
                                <span className='rightTitleSpan' onClick={() => setTimeout(() => scrollToElement('#landings'), 1000)}>
                                    websites
                                </span>
                            </h3>
                            <h3 className="applications rightTitle">
                                <span className='rightTitleSpan'>
                                    <Link to='/apps'>
                                        applications
                                    </Link>
                                </span>
                            </h3>
                            <h3 className="marketing rightTitle">
                                <span className='rightTitleSpan'>
                                    <Link to='/branding'>
                                        marketing
                                    </Link>
                                </span>
                            </h3>
                            <h3 className="smm rightTitle">
                                <span className='rightTitleSpan'>
                                    <Link to='/smm'>
                                        smm
                                    </Link>
                                </span>
                            </h3>
                            <h3 className="webDevelopment rightTitle">
                                <span className='rightTitleSpan'>
                                    <Link to='/systems'>
                                        webdevelopment
                                    </Link>
                                </span>
                            </h3>
                            <h3 className="seo rightTitle">
                                <span className='rightTitleSpan'>
                                    <Link to='/seo'>
                                        seo
                                    </Link>
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </MainTag>
    );
};

export default Main;
