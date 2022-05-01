import React, {Fragment} from 'react';
import Slider from "./Slider";
import {useEffect, useState, useRef} from "react";



const PricesComponent = ({title, margin, price, size}) => {
    const ref = useRef(null)
    let defaultTitle = null
    const [settings, setSettings] = useState({width: null, top: null, height: null})
    function useWindowSize() {
        const [size, setSize] = useState(window.innerWidth)
        useEffect(() => {
            const handleResize = () => {
                setSize(window.innerWidth)
            }
            window.addEventListener('resize', handleResize)
        }, [])
        return size
    }
    let width = useWindowSize()
    useEffect(() => {
        // let coordinates = document.querySelectorAll('.product')
        // let needed = coordinates[nkey].getBoundingClientRect()
        let coordinatesSection = document.querySelector('.wrapperPrices').getBoundingClientRect()
        let sectionHeightFrom = coordinatesSection.top
        // let widthFrom = needed.left
        // let heightFrom = needed.top

        // let position = {width: widthFrom-15, top: heightFrom - sectionHeightFrom, height: document.querySelector('.product').clientHeight}
        let widthFrom= ref.current.getBoundingClientRect().left
        let heightFrom = ref.current.getBoundingClientRect().top
        console.log(widthFrom, heightFrom)
        // console.log(position)
        let position = {width: widthFrom-15, top: heightFrom - sectionHeightFrom, height: document.querySelector('.product').clientHeight}
        setSettings(position)
    }, [width])


    if (size){
        defaultTitle = <div style={{fontSize: '59px'}}>многостраничные<div style={{fontSize: '144px'}}>сайты</div></div>
    }
    return (
        <div style={{marginTop: margin ? margin : '0'}}>
            <div className="price" style={{top: settings.top + 7}}>
                <div className="priceInner">
                    <div className="cost">Стоимость от {price} руб.</div>
                    <div className="descr">Срок выполнения от 2 недель</div>
                </div>
            </div>
            <div className="container">
                <h3 className="product" ref={ref}>{defaultTitle ||title}</h3>
                <div className="flexWrapper">
                    <div className="flexList">
                        <div className="flexItem">Подключение статистики</div>
                        <div className="flexItem">Анализ конкурентов</div>
                        <div className="flexItem">Система управления сайтом</div>
                    </div>
                    <div className="flexList">
                        <div className="flexItem">Возможность “мультистраничности”</div>
                        <div className="flexItem">Индивидуальный дизайн</div>
                        <div className="flexItem">Адаптивность под планшеты и смартфоны</div>
                    </div>
                </div>
            </div>

            <Slider/>
            <div className="container">
                <div className="btnWrapper">
                    <button className="btn">Получить консультацию</button>
                </div>
            </div>
            <div className="whiteLine" style={{width: settings.width, height: settings.height, top: settings.top, left: 0 }}></div>
        </div>
    );
};

export default PricesComponent;