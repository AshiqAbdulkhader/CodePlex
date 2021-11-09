import React, {useState} from "react";

//Assets
import '../../fonts.css';

//Components
import { Wrapper, Container} from './SideNav.styles';
import SideNavItem from '../NavItem';

interface Props {
	  list: Array<{
			name: string,
			text: string,
			icon: string,
			iconS: string,
			id: number
	  }>,
	  selected: number
}

const SideNav: React.FC<Props> = ({list}: Props) => {
const [activated, setActivated] = useState<number>(1);
return(
	<Wrapper>
		<Container>
			{list.map((item) => {
				if(activated === item.id) {
					return <Container onClick={() => setActivated(item.id)}><SideNavItem key={item.name} icon={item.icon} iconS={item.iconS} text={item.text} selected={true}/></Container>
				} else {
					return <Container onClick={() => setActivated(item.id)}><SideNavItem key={item.name} icon={item.icon} iconS={item.iconS} text={item.text} selected={false}/></Container>
				}
		})}
		</Container>
	</Wrapper>
)
};

export default SideNav;
