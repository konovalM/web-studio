import React, {useEffect} from 'react';
import {ModalTag} from "./Modal.styles";
import {useDispatch, useSelector} from "react-redux";
import case1 from '../../images/cases/case.jpg'

export const Modal = () => {
    const isModal = useSelector((state) => state.modal.isModal)
    const dispatch = useDispatch()
    useEffect(() => {
        if (isModal){
            document.querySelector('body').style.overflow = 'hidden'
        } else document.querySelector('body').style.overflow = 'visible'
    })
    return (
        <>
            {
                isModal &&
                <ModalTag onClick={(e) => e.currentTarget === e.target && dispatch({type: 'CLOSE_MODAL'})}>
                    <div className='content'>
                        <img src={case1} alt="case"/>
                    </div>
                </ModalTag>
            }
        </>
    );
};

// dispatch({type: 'CLOSE_MODAL'})
export default Modal;
