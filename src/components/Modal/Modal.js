import React from 'react';
import {ModalTag} from "./Modal.styles";
import {useDispatch, useSelector} from "react-redux";

export const Modal = () => {
    const isModal = useSelector((state) => state.modal.isModal)
    const dispatch = useDispatch()
    return (
        <>
            {
                isModal &&
                <ModalTag onClick={(e) => e.currentTarget === e.target && dispatch({type: 'CLOSE_MODAL'})}>
                    <div className='container'>
                        <div className='content'>
                            test
                        </div>
                    </div>
                </ModalTag>
            }
        </>
    );
};

// dispatch({type: 'CLOSE_MODAL'})
export default Modal;
