import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #131516;
	position: relative;
	width: calc(100vw - 140px);
	height: calc(100vh - 100px);
	float: right;
	padding: 0px;
	margin: 0px;
	text-align: center;
	box-sizing: border-box;
	color: #fff;
	font-size: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const CodeSide = styled.div`
    height: 100%;
    width: 65%;
    border-right: 1px solid rgba(229, 229, 229, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const OutputSide = styled.div`
    height: 100%;
    width: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Exec = styled.div`
    height: 13%;
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
