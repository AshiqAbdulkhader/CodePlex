import React from "react";

//components
import {Wrapper, Ltext, Simg} from './NavItem.styles';

//types
type Props = {
	key: string;
	icon: string;
	iconS: string;
	text: string;
	selected: boolean;
	id: number;
}


function srcSetter(selected: boolean, icon: string, iconS: string) {
	if(selected){
		return `${iconS}`;
	}
	return `${icon}`;
}




const NavItem: React.FC<Props> = ({icon, iconS, text, selected}) => {	
	
	return (
		<Wrapper selected={selected} >
				<Simg src={srcSetter(selected, icon, iconS)}/>
				<Ltext selected={selected} >{text}</Ltext>
		</Wrapper>
	)
};

NavItem.defaultProps = {
	icon: '',
	iconS: '',
	text: '',
	selected: false
}

export default NavItem;