import styled from 'styled-components'
import {BLACK_MAIN} from "../../theme/colors/colors.constants";

export const ContentTag = styled.div`
    padding: 97px 0 167px;
    h3{
        font-family: 'Russo One';
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 36px;
        text-transform: uppercase;
        color: ${BLACK_MAIN};
        margin-bottom: 18px;
    }
    p{
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: ${BLACK_MAIN};
        margin-bottom: 30px;
    }
    h6{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: ${BLACK_MAIN};
        margin-bottom: 30px;
    }
    @media screen and (max-width: 550px){
        padding: 39px 0 150px;
        h3{
            font-size: 18px;
            line-height: 22px;
        }
        p{
            font-size: 14px;
            line-height: 150%;
        }
        h6{
            font-size: 14px;
            line-height: 150%;
        }
    }
`