import styled, {keyframes} from 'styled-components';

export const Wrapper = styled.div`
	background: #131516;
	height: 100px;
	padding: 10px 20px;
	border-bottom: 1px solid rgba(229, 229, 229, 0.2);
	position: relative;
	top: 0;
	width: 100vw;
	z-index:10;
	box-shadow: 0 1px 13px 7px rgba(0,0,0,0.08);

	display: flex;
  align-items: center;
  max-width: var(--maxWidth);
`;

export const Container = styled.div`
	box-sizing: border-box;
	padding: 0px;
	margin: 0px;
`;

export const Logout = styled.button`
	height: 60px;
	font: 'Josefin Sans';
	font-size: 29px;
	border-radius: 30px;
	padding-left: 30px;
	padding-right: 30px;
	font-weight: 700;
	background: linear-gradient(90deg, #3DB2A2 -5.73%, #FDD273 100%);
	border: 0px;
	cursor: pointer;
	margin: 0px;
	margin-right: 20px;
	position: absolute;
	top: 50px;
	right: 0px;
	transform: translateY(-50%);
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

const focus = keyframes`
  from {
    border-width: 0 0 0 0;
  }

  to {
    border-width: 0 0 2px 0;
	border-style: solid;
	border-color: #3d3f40;
  }
`;

export const HeaderLink = styled.h2`
// [Might want to have a 100% height and have the underline show up just above the bottom border of parent element.]
    text-decoration: none;
	display: block;
	padding: 0px;
	
	color: #fff;
	font-family: Josefin Sans;
	font-style: normal;
	font-weight: 300;
	font-size: 32px;
	cursor: pointer;

	&:hover {
		transform:translateY(2px);
		animation: ${focus} 0s linear;
		animation-fill-mode: forwards;
	}

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const SearchButton = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 30px;
	background-color: #5E5E5E;
	cursor: pointer;
	// [Hardcoded position for now. Likely to break in screens with weird resolutions or scaling.]
	position: absolute;
	right: 160px;
	margin-right: 40px;
`;

export const SearchImg = styled.img`
	height: 50%;
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;