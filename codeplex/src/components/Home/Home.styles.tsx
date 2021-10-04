import styled from 'styled-components';
import { GenericButton } from '../GenericButton/GenericButton.styles';

export const WrapperMain = styled.div`
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    width: 100vw;
`;

export const Wrapper = styled.div`
	background: transparent;
	padding: 0 178px;
    width: 100vw;
    position: relative;
    top: 100px;
`;

export const BackLogo = styled.img`
    position: absolute;
    opacity: 25%;
`;

export const BgBlur = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height:300vh;
    opacity: 0.3;
`;

//View 1

export const WrapperV1 = styled(Wrapper)`
	height: calc(100vh - 100px);
`;

export const BackLogoV1 = styled(BackLogo)`
    left: 0%;
`;

export const PopHead = styled.div`
    border: 0px;
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 116px;
    line-height: 128px;
    letter-spacing: 0.015em;

    color: #FFFFFF;
    position: relative;
    top: 20%;
`;

export const PopPara = styled.div`
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 39px;
    line-height: 110%;

    letter-spacing: 0.015em;

    color: #FFFFFF;
    position: relative;
    top: 25%;
    left: 5%;
    max-width: 70%;
`;

export const GetStarted = styled(GenericButton)`
    position: relative;
    color: #2b2d2e;
    top: 35%;
    left: 5%;
`;

export const Demo = styled(GenericButton)`
    position: relative;
    color: #2b2d2e;
    top: 35%;
    margin-left: 10%;
    background: linear-gradient(270deg, #3DB2A2 -5.73%, #FDD273 100%);
`;

export const FLspan = styled.span`
    color: #d15f13;
`;

//View 2

export const WrapperV2 = styled(Wrapper)`
    height: 100vh;
`;

export const BackLogoV2 = styled(BackLogo)`
    top: 50%;
    left: 0%;
    height: 75%;
    opacity: 100%;
    transform: translateY(-50%);
`;

//View 3

export const WrapperV3 = styled(Wrapper)`
	height: 100vh;
    background: linear-gradient(180deg, rgb(0,0,0,0) 50%, rgb(34, 135, 186, 70) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 69px 59px rgba(0, 0, 0, 0.25);
`;

export const BackLogoV3 = styled(BackLogo)`
    left: 7%;
    top: 47%;
    transform: translateY(-50%);
`;

export const Line = styled.hr`
    width: 770px;
    position: relative;
    transform: translateX(-50%);
    left: 900px;
    top: 120px;
    color: #fff;
`;

export const Texcon = styled.div`
    position: relative;
    transform: translateX(-50%);
    left: 900px;
    top: 160px;
    font-family: Josefin Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 59px;
    text-align: right;
    color: #FFFFFF;
`;

export const SmallerText = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    text-align: right;
    color: #EFEFEF;
    
    position: relative;
    transform: translateX(-50%);
    left: 900px;
    top: 200px;
    font-weight: 400;
`;