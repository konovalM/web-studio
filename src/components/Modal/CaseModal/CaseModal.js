import React, {useEffect, useRef} from 'react';
import {ModalTag} from "./Modal.styles";
import {useDispatch, useSelector} from "react-redux";
import prevArrow from '../../../images/modal/prev.svg'
import nextArrow from '../../../images/modal/next.svg'
import {CloseSvgIcon} from "../../../icons/components/CloseSvgIcon";

export const CaseModal = () => {
    const ref = useRef()
    const {isModal, activeCase, cases} = useSelector((state) => state.caseModal)
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
                    <div className='content'>
                        <img src={cases[activeCase]} alt="case"/>
                    </div>
                    <button className="prev btn" onClick={() => dispatch({type: 'PREV_CASE'})}>
                        <img src={prevArrow} alt="prevCase"/>
                    </button>
                    <button className="next btn" onClick={() => dispatch({type: 'NEXT_CASE'})}>
                        <img src={nextArrow} alt="nextCase"/>
                    </button>
                    <button className="close" onClick={() => dispatch({type: 'CLOSE_CASE'})}>
                        <CloseSvgIcon fill='#FFFFFF' />
                    </button>
                </ModalTag>
            }
        </>
    );
};

// dispatch({type: 'CLOSE_MODAL'})
export default CaseModal;
