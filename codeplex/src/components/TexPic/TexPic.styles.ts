import styled from 'styled-components';

type Props = {
    top: number;
    left: number;
}

export const Wrapper = styled.div<Props>`
	height: 15%;
    width: 50%;
    position: relative;
    top: ${p=>p.top}%;
    left: ${p=>p.left}%;
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding: 0px;
`;

export const Ltext = styled.div`
    width: 70%;
    height: 100%;
    float: left;

    font-family: Josefin Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 100%;

    text-align: right;
    letter-spacing: 0.065em;

    color: #FFFFFF;
`;

export const Simg = styled.img`
    // width: 25%;
    height: 90%;
    float: right;
`;