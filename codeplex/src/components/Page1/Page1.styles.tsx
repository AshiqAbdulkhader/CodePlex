import styled from 'styled-components';

export const Wrapper = styled.div`
	background: transparent;
	padding: 0 178px;
	height: calc(100vh - 100px);
    width: 100vw;
    position: relative;
    top: 100px;
`;

export const BackLogo = styled.img`
    position: absolute;
    left: 0%;
    opacity: 25%;
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

export const GetStarted = styled.button`
    height: 60px;
	font: 'Josefin Sans';
	font-size: 29px;
	border-radius: 30px;
	padding-left: 30px;
	padding-right: 30px;
	font-weight: 700;
	background: linear-gradient(90deg, #3DB2A2 -5.73%, #FDD273 100%);
	border: 0px;

    position: relative;
    top: 35%;
    left: 5%;
`;

export const Demo = styled.button`
    height: 60px;
	font: 'Josefin Sans';
	font-size: 29px;
	border-radius: 30px;
	padding-left: 30px;
	padding-right: 30px;
	font-weight: 700;
	background: linear-gradient(270deg, #3DB2A2 -5.73%, #FDD273 100%);
	border: 0px;

    position: relative;
    top: 35%;
    margin-left: 10%;
`;

export const FLspan = styled.span`
    color: #d15f13;
`;

// In progress
// export const BackBlur = styled.div`
//     position: relative;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;

//     // background-color: #000;
//     filter: blur(1px);
// `;