import React from "react";

//Assets
import '../../fonts.css';
import CodePlexLogo from "../../images/logo.svg";
import CodePlexText from "../../images/Codeplex.svg";
import Search from "../../images/search.svg";

//Components
import {Wrapper, Container,  LogoImg, LogoText, HeaderLink, Content, SearchButton, SearchImg} from './Header.styles';
import { GenericButton } from "../GenericButton/GenericButton.styles";
import {LinkContainer} from "react-router-bootstrap";

const Header: React.FC = () => (
		<Wrapper>
			<Content>
				<LinkContainer to='/'>
					<Container>
						<LogoImg src={CodePlexLogo} alt="logo"/>
						<LogoText src={CodePlexText} alt="logo-text"/>
					</Container>
				</LinkContainer>
				<LinkContainer to='/features'>
					<HeaderLink>Features</HeaderLink>
				</LinkContainer>
				<LinkContainer to='/about'>
					<HeaderLink>About</HeaderLink>
				</LinkContainer>
				<LinkContainer to='/contact'>
					<HeaderLink>Contact</HeaderLink>
				</LinkContainer>
				<LinkContainer to='/contributors'>
					<HeaderLink>Contributors</HeaderLink>
				</LinkContainer>
				<SearchButton>
					<SearchImg src={Search} alt="Search button"/>
				</SearchButton>
				<LinkContainer to='/login'>
					<GenericButton>Sign In</GenericButton>
				</LinkContainer>
			</Content>
		</Wrapper>
	);

export default Header;
