import React, {Fragment} from 'react';
import Slider from "./Slider";
import {useEffect, useState, useRef} from "react";
import Button from "../../elements/Button";
import styles from './PricesComponent.module.css'
import Dash from "../common/Dash/Dash";
import useWindowSize from "../../hooks/useWindowSize";



const PricesComponent = ({title, margin, price, size, content}) => {
    const ref = useRef(null)
    let defaultTitle = null
    const [settings, setSettings] = useState({width: null, top: null, height: null})
    const [titlePosition, setTitlePosition] = useState(null)
    const [topForPrice, setTopForPrice] = useState(null)
    let width = useWindowSize()


    useEffect(() => {
        let coordinatesSection = document.querySelector('.wrapperPrices').getBoundingClientRect()
        let sectionHeightFrom = coordinatesSection.top

        let widthFrom= ref.current.getBoundingClientRect().left
        let heightFrom = ref.current.getBoundingClientRect().top
        let position = {width: widthFrom-15, top: heightFrom - sectionHeightFrom, height: ref.current.clientHeight}
        setSettings(position)

        if (width > 1250){
            setTopForPrice(position.top + 7)
        } else if (width > 767){
            setTopForPrice(position.top + 350)
        } else if (width > 520){
            setTopForPrice(position.top + 240)
        }else if (width <= 520){
            setTopForPrice(position.top + 190)
        }
    }, [width])



    /*useEffect(() => {
        let coordinatesSection = document.querySelector('.wrapperPrices').getBoundingClientRect()
        let sectionHeightFrom = coordinatesSection.top

        let widthFrom= +ref.current.getBoundingClientRect().left+100
        let heightFrom = ref.current.getBoundingClientRect().top
        let position = {width: widthFrom-15, top: heightFrom - sectionHeightFrom, height: document.querySelector('.product').clientHeight}
        setSettings(position)
        if (width > 1250){
            setTopForPrice(position.top + 7)
        } else if (width > 767){
            setTopForPrice(position.top + 350)
        } else if (width > 520){
            setTopForPrice(position.top + 240)
        }else if (width <= 520){
            setTopForPrice(position.top + 190)
        }
    }, [])*/
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
            <div className="container">
                <Dash color={'#ffffff'} countBefore={4} countAfter={3} top={'-200px'}/>
                <h3 className="product" ref={ref}>
                    <span data-aos='fade-right' style={{display: 'inline-block'}}>
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
            <div className="whiteLine" style={{width: settings.width, height: settings.height, top: settings.top, left: 0 }} data-aos='fade-right'></div>
        </div>
    );
};



export default PricesComponent;