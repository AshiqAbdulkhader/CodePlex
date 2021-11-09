import styled from 'styled-components';

export const Wrapper = styled.div`
	background: #202124;
	min-height: calc(100vh - 102px);
	width: 139px;
	position: absolute;
    left: 0px;
	z-index:10;
    border-right: 1px solid rgba(229, 229, 229, 0.2);
	display: flex;
    max-width: var(--maxWidth);
`;

export const Container = styled.div`
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
	width: 100%;
	height: 100%;
	padding-top: 20px;
`;