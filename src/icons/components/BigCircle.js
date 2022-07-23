import {BaseSVGIcon} from "./BaseSvgIcon";
import React from "@types/react";

export const BigCircle = (props) => (
    <BaseSVGIcon
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="transparent"
        {...props}
    >
        <path d="M89.5 6.5H0M0 6.5L6.5 0M0 6.5L6.5 13" stroke="white"/>
    </BaseSVGIcon>
);
