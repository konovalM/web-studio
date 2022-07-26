import React, {useState, useEffect} from 'react';
import PricesComponent from "./PricesComponent";
import {PricesTag} from "./pricesStyled";
import { Element } from 'react-scroll'

const Prices = () => {
    return (
        <PricesTag>
            <div className="wrapperPrices">
                <div className="container">
                    <h2 className="title">Кейсы и цены</h2>
                    <div className="description">Создаем магазины, лендинги, корпоративные сайты, криптосервисы, сайты мероприятий, а также сайты под нестандартные задачи.</div>
                </div>
                <Element name='landings'>
                    <PricesComponent title='лендинги визитки' price='60 000' content={landing} />
                </Element>
                <Element name='shops'>
                    <PricesComponent title='online магазины' margin='225px' price='130 000' content={shops}/>
                </Element>
                <Element name='sites'>
                    <PricesComponent title='многостраничные сайты' size={true} margin='225px' price='180 000' content={sites}/>
                </Element>
            </div>
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