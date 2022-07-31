import {BaseSVGIcon} from "./BaseSvgIcon";

export const CloseSvgIcon = ({fill= '#1A1A1A'}, ...props) => (
    <BaseSVGIcon
        width="38"
        height="37"
        viewBox="0 0 38 37"
        fill={fill}
        {...props}
    >
        <line x1="1.35355" y1="0.646447" x2="37.3536" y2="36.6464" stroke={fill}/>
        <line y1="-0.5" x2="50.9117" y2="-0.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 37 1)" stroke={fill}/>
    </BaseSVGIcon>
)