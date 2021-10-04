import styled from 'styled-components';

export const Wrapper = styled.div`
	background: #202020;
	height: 100px;
	padding: 0 20px;
	border-bottom: 1px solid rgba(229, 229, 229, 0.2);
	position: relative;
	top: 0;
	width: 100vw;
	z-index:10;
	box-shadow: 0 1px 13px 7px rgba(0,0,0,0.08);
`;

export const Container = styled.div`
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 10px 0;
  margin: 0 auto;
  height: 100%;
`;

export const LogoImg = styled.img`
	height: 56px;
	width: 56px;
`;

export const LogoText = styled.img`
	height: 47px;
	width: 218px;
	margin-left: 20px;
	position: relative;
	left: 0px;
`;

export const HeaderLink = styled.h2`
    text-decoration: none;
	color: #fff;
	font-family: Josefin Sans;
	font-style: normal;
	font-weight: 300;
	font-size: 32px;
	line-height: 32px;
	
	height: 32px;
	padding: 0px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const SearchButton = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 30px;
	background-color: #5E5E5E;
	margin-left: 10%;
	cursor: pointer;
`;

export const SearchImg = styled.img`
	height: 50%;

	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;