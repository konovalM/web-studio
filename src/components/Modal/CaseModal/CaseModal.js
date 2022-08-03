import React, {useEffect, useRef} from 'react';
import {ModalTag} from "./Modal.styles";
import {useDispatch, useSelector} from "react-redux";
import prevArrow from '../../../images/modal/prev.svg'
import nextArrow from '../../../images/modal/next.svg'
import closeBlack from '../../../images/modal/closeBlack.svg'
import closeWhiteTest from '../../../images/developer.jpg'

export const CaseModal = () => {
    const ref = useRef()
    const {isModal, activeCase, cases, typeOfCase} = useSelector((state) => state.caseModal)
    const dispatch = useDispatch()
    useEffect(() => {
        if (isModal){
            document.querySelector('body').style.overflow = 'hidden'
        } else document.querySelector('body').style.overflow = 'visible'
    })
    useEffect(() => {
        if (isModal){
            ref.current.scrollTop = 0
        }
    }, [activeCase])
    return (
        <>
            {
                isModal &&
                <ModalTag ref={ref} onClick={(e) => e.currentTarget === e.target && dispatch({type: 'CLOSE_CASE'})}>
                    <div className="contentWrapper">
                        <div className='content'>
                            <img src={cases[typeOfCase][activeCase]} alt="case"/>
                        </div>
                    </div>
                    <button className="prev btn" onClick={() => dispatch({type: 'PREV_CASE'})}>
                        <img src={prevArrow} alt="prevCase"/>
                    </button>
                    <button className="next btn" onClick={() => dispatch({type: 'NEXT_CASE'})}>
                        <img src={nextArrow} alt="nextCase"/>
                    </button>
                    <button className="close" onClick={() => dispatch({type: 'CLOSE_CASE'})}>
                        <img src={closeWhiteTest} alt="close"/>
                    </button>
                </ModalTag>
            }
        </>
    );
};

// dispatch({type: 'CLOSE_MODAL'})
export default CaseModal;
