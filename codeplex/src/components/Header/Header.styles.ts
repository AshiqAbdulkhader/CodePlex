import styled from 'styled-components';

export const Wrapper = styled.div`
	background: #202020;
	padding: 0 178px;
	height: 100px;
	border-bottom: 1px solid rgba(229, 229, 229, 0.2);
	position: fixed;
	top: 0;
	width: 100%;
	z-index:10;
	box-shadow: 0 1px 13px 7px rgba(0,0,0,0.08);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
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

export const HeaderLink = styled.a`
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
`;

export const SearchImg = styled.img`
	height: 50%;

	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const SignIn = styled.button`
	height: 60px;
	font: 'Josefin Sans';
	font-size: 29px;
	border-radius: 30px;
	padding-left: 30px;
	padding-right: 30px;
	font-weight: 700;
	background: linear-gradient(90deg, #3DB2A2 -5.73%, #FDD273 100%);
	border: 0px;
`;
