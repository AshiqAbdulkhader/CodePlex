import styled from 'styled-components';

export const Wrapper = styled.div`
	background: #131516;
	min-height: calc(100vh - 100px);
	border-bottom: 1px solid rgba(229, 229, 229, 0.2);
	position: relative;
	width: 100vw;
	max-width: var(--maxWidth);
`;

export const Container = styled.div`
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
    color: #fff;
    font-size: 40px;
	min-width: calc(100vw - 140px);
	height: 100%;
	min-height: calc(100vh - 100px);
	float: right;
	text-align: center;
`;