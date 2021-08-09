import React from "react";
import { Link } from 'react-router-dom';

import '../../fonts.css';
import CodePlexLogo from "../../images/logo.svg";
import CodePlexText from "../../images/Codeplex.svg";
import Search from "../../images/search.svg";
import {Wrapper, LogoImg, LogoText, HeaderLink, Content, SearchButton, SearchImg, SignIn} from './Header.styles';

const Header: React.FC = () => (
		<Wrapper>
			<Content>
				<Link to='/'>
					<div>
						<LogoImg src={CodePlexLogo} alt="logo"/>
						<LogoText src={CodePlexText} alt="logo-text"/>
					</div>
				</Link>
				<HeaderLink href={`#`}>Features</HeaderLink>
				<HeaderLink href={`#`}>About</HeaderLink>
				<HeaderLink href={`#`}>Contact</HeaderLink>
				<HeaderLink href={`#`}>Contributors</HeaderLink>
					<SearchButton>
						<SearchImg src={Search} alt="Search button"/>
					</SearchButton>
					<SignIn>Sign In</SignIn>
			</Content>
		</Wrapper>
	);

export default Header;
