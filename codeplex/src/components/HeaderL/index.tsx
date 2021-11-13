import React from "react";

//Assets
import '../../fonts.css';
import CodePlexLogo from "../../images/logo.svg";
import CodePlexText from "../../images/Codeplex.svg";
import Search from "../../images/search.svg";

//Components
import { Wrapper, Container, LogoImg, LogoText, SearchButton, SearchImg, Logout } from './HeaderL.styles';
import { LinkContainer } from "react-router-bootstrap";
import {
	logout
} from "../../Firebase";

const Header: React.FC = () => (
	<Wrapper>
		<LinkContainer to='/'>
			<Container>
				<LogoImg src={CodePlexLogo} alt="logo" />
				<LogoText src={CodePlexText} alt="logo-text" />
			</Container>
		</LinkContainer>
		<SearchButton>
			<SearchImg src={Search} alt="Search button" />
		</SearchButton>
		<LinkContainer onClick={() => logout()}to='/login'>
			<Logout>Logout</Logout>
		</LinkContainer>
	</Wrapper>
);

export default Header;
