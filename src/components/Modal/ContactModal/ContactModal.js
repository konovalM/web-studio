import React, {useEffect, useReducer} from 'react';
import {ModalTag} from "./Modal.styles";
import {useDispatch, useSelector} from "react-redux";
import Form from "../../Main/Form/Form";
import close from '../../../images/modal/close.svg'

const ContactModal = () => {
    const isModal = useSelector((state) => state.contactModal.isModal)
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
                    <div className="contentWrapper">
                        <div className="content">
                            <div className="close" onClick={() => dispatch({type: 'CLOSE_MODAL'})}>
                                <img src={close} alt="close"/>
                            </div>
                            <h3 className="title">
                                Остались вопросы?
                            </h3>
                            <p className="subtitle">
                                Пишите или звоните. Отвечаем круглосуточно.
                            </p>
                            <Form />
                        </div>
                    </div>
                </ModalTag>
            }
        </>

    );
};

export default ContactModal;