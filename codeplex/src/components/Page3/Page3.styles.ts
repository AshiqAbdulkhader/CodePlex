import styled from 'styled-components';

export const Wrapper = styled.div`
	background: transparent;
	padding: 0 178px;
	height: 100vh;
	width: 100vw;
    position: relative;
    top: 100px;
    background: linear-gradient(180deg, rgb(0,0,0,0) 50%, rgb(34, 135, 186, 70) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 69px 59px rgba(0, 0, 0, 0.25);
`;

export const BackLogo = styled.img`
    position: absolute;
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