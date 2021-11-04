import styled from 'styled-components';

export const Wrapper = styled.div`
	background: #131516;
	height: calc(100vh - 100px);
	padding: 10px 20px;
	border-bottom: 1px solid rgba(229, 229, 229, 0.2);
	position: relative;
	width: 100vw;
	display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
`;

export const Container = styled.div`
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
    color: #fff;
    font-size: 40px;
`;

