import React from 'react';
import styled from 'styled-components'
import useWindowSize from "../../../hooks/useWindowSize";

const DashTag = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    row-gap: 7px;
    top: ${props => props.top ? props.top : 'none'};
    bottom: ${props => props.bottom ? props.bottom : 'none'};
    right: 10px;
    align-items: center;
`

const Square = ({color}) => {
    return (
        <div style={{ width: '4px', height: '4px', backgroundColor: color,}}></div>
    )
}

const Dash = ({color, bottom, top, countBefore,countAfter}) => {
    const countStart = () => {
        const arr = []

        for (let i = 0; i < countBefore; i++){
            arr.push(<Square color={color} key={countBefore + i}/>)
        }
        return arr
    }

    const countEnd = () => {
        const arr = []
        for (let i = 0; i < countAfter; i++){
            arr.push(<Square color={color} key={countAfter + i}/>)
        }
        return arr
    }
    const width = useWindowSize()
    if (width > 700){
        return (
            <DashTag bottom={bottom} top={top}>
                {countStart()}
                <div style={{height: '44px', width: '2px', backgroundColor: color}}></div>
                {countEnd()}
            </DashTag>
        )
    } else return <></>
};

export default Dash;