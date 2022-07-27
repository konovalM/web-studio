import React, {Fragment} from 'react';
import Slider from "./Slider";
import {useEffect, useState, useRef} from "react";
import Button from "../../elements/Button";
import styles from './PricesComponent.module.css'
import Dash from "../common/Dash/Dash";
import useWindowSize from "../../hooks/useWindowSize";



const PricesComponent = ({title, margin, price, size, content, id}) => {
    const ref = useRef(null)
    let defaultTitle = null
    const [settings, setSettings] = useState({width: null, left: null, height: null})
    const [topForPrice, setTopForPrice] = useState(null)
    let width = useWindowSize()


    useEffect(() => {
        let coordinatesSection = document.querySelector('.wrapperPrices').getBoundingClientRect()
        let sectionHeightFrom = coordinatesSection.top
        let heightFrom = ref.current.getBoundingClientRect().top
        const top = heightFrom - sectionHeightFrom
        let widthFrom= ref.current.getBoundingClientRect().left
        let position = {width: widthFrom-15, left: ref.current.offsetLeft, height: ref.current.clientHeight}
        setSettings(position)
        if (width > 1250){
            setTopForPrice(top + 7)
        } else if (width > 767){
            setTopForPrice(top + 350)
        } else if (width > 520){
            setTopForPrice(top + 240)
        }else if (width <= 520){
            setTopForPrice(top + 190)
        }
    }, [width])


    if (size){
        defaultTitle = <div><span className={styles.first}>многостраничные</span><span className={styles.second}>сайты</span></div>
    }
    return (
        <div className={margin ? 'pricesComponentWrapper' : ''}>
            <div className="price" style={{top: topForPrice}} data-aos='fade-left'>
                <div className="priceInner">
                    <div className="cost">Стоимость от <br/><span className='bold'>{price} руб.</span></div>
                    <div className="descr">Срок выполнения от 2 недель</div>
                </div>
            </div>
            <div className="container" style={{position: 'static'}}>
                <Dash color={'#ffffff'} countBefore={4} countAfter={3} top={'-200px'}/>
                <h3 className="product" style={{position: 'relative'}} ref={ref}>
                    <div className="whiteLine" style={{width: settings.width, height: settings.height, top: 0, left: -settings.left, display: 'inline-block' }} data-aos='fade-right'></div>
                    <span style={{display: 'inline-block'}}  data-aos='fade-right'>
                        {defaultTitle || title}
                    </span>
                </h3>
                <div className="flexWrapper">
                    <div className="flexList" data-aos='fade-right'>
                        {content.left.map(text => {
                            return (
                                <div className="flexItem" key={text}>{text}</div>
                            )
                        })}
                    </div>
                    <div className="flexList" data-aos='fade-right'>
                        {content.right.map((text, i) => {
                            return (
                                <div className="flexItem" key={text}>{text}</div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <Slider/>
            <div className="container">
                <div className="btnWrapper" data-aos='fade-right'>
                    <Button btnColor='#ffffff' btnStyles={[{background: '#1E4FCD', color: '#fff'}, {background: '#fff', color: '#1E4FCD', border: 'none'}]}/>
                </div>
            </div>
        </div>
    );
};



export default PricesComponent;