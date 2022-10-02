import React from 'react';
import {SuccessModalTag} from "./SuccessModal.styles";
import {useDispatch, useSelector} from "react-redux";
import close from "../../../images/modal/close.svg";

const SuccessModal = () => {
    const dispatch = useDispatch()
    const isModal = useSelector(state => state.contactModal.isModal)
    return (
        <>
            {isModal === 2 &&
                <SuccessModalTag onClick={(e) => e.currentTarget === e.target && dispatch({type: 'CLOSE_MODAL'})}>
                    <div className="contentWrapper" onClick={(e) => e.currentTarget === e.target && dispatch({type: 'CLOSE_MODAL'})}>
                        <div className="content">
                            <div className="close" onClick={() => dispatch({type: 'CLOSE_MODAL'})}>
                                <img src={close} alt="close"/>
                            </div>
                            <p className="subtitle">
                                Спасибо за обращение!
                            </p>
                        </div>
                    </div>
                </SuccessModalTag>
            }
        </>
    );
};

export default SuccessModal;
