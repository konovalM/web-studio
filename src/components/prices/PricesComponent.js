import React, {Fragment} from 'react';
import Slider from "./Slider";
import {useEffect, useState, useRef} from "react";



const PricesComponent = ({title, margin, price, size, content}) => {
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
        let position = {width: widthFrom-15, top: heightFrom - sectionHeightFrom, height: document.querySelector('.product').clientHeight}
        setSettings(position)
    }, [width])


    if (size){
        defaultTitle = <div><span style={{fontSize: '59px', display: 'block', lineHeight: '59px', marginBottom: '40px'}}>многостраничные</span><span style={{fontSize: '144px', display: 'block'}}>сайты</span></div>
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
                        {content.left.map(text => {
                            return (
                                <div className="flexItem" key={text}>{text}</div>
                            )
                        })}
                    </div>
                    <div className="flexList">
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
                <div className="btnWrapper">
                    <button className="btn">Получить консультацию</button>
                </div>
            </div>
            <div className="whiteLine" style={{width: settings.width, height: settings.height, top: settings.top, left: 0 }}></div>
        </div>
    );
};



export default PricesComponent;