import React, {useState, useEffect} from 'react';
import PricesComponent from "./PricesComponent";
import {PricesTag} from "./Prices.styles";
import {Element} from 'react-scroll'
import {SliderMockData} from "./Slider/Slider.mock";

const Prices = () => {
    return (
        <PricesTag name='#prices'>
            <Element >
                <div className="wrapperPrices">
                    <div className="container">
                        <h2 className="title" data-aos='fade-down'>Кейсы и цены</h2>
                        <div className="description" data-aos='fade-down'>Создаем магазины, лендинги, корпоративные сайты,
                            криптосервисы, сайты мероприятий, а также сайты под нестандартные задачи.
                        </div>
                    </div>
                    <Element name='#landings'>
                        <PricesComponent title='лендинги визитки' price='70 000' content={landing} id={1}
                                         typeOfCase='landings' sliderData={SliderMockData.landings}/>
                    </Element>
                    <Element name='shops'>
                        <PricesComponent title='online магазины' margin='225px' price='150 000' content={shops} id={2}
                                         typeOfCase='shops' sliderData={SliderMockData.shops}/>
                    </Element>
                    <Element name='sites'>
                        <PricesComponent title='многостраничные сайты' size={true} margin='225px' price='100 000'
                                         content={sites} id={3} typeOfCase='multipage'
                                         sliderData={SliderMockData.multipage}/>
                    </Element>
                </div>
            </Element>
        </PricesTag>
    );
};

const landing = {
    left: ['Подключение статистики', 'Анализ конкурентов', 'Система управления сайтом'],
    right: ['Возможность “мультистраничности”', 'Индивидуальный дизайн', 'Адаптивность под планшеты и смартфоны']
}
const shops = {
    left: ['Интеграция с вашими базами данных', 'Система управления сайтом', 'Автоматические продажи'],
    right: ['Простота доработок', 'Никаких шаблонных решений', 'Система акций и промокодов']
}
const sites = {
    left: ['Сложные web-сервисы', 'Корпоративная стилистика', 'SEO-ориентированность'],
    right: ['Система управления сайтом', 'Простота масштабируемости', 'Привычный пользователю формат']
}

export default Prices;