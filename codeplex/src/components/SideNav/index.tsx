import React, {useState} from "react";

//Assets
import '../../fonts.css';

//Components
import { Wrapper, Container} from './SideNav.styles';
import NavItem from '../NavItem';


import NavClass from '../../images/navClass.svg';
import NavClassS from '../../images/navClassS.svg';
import NavCode from '../../images/navCode.svg';
import NavCodeS from '../../images/navCodeS.svg';
import NavHistory from '../../images/navHistory.svg';
import NavHistoryS from '../../images/navHistoryS.svg';
import NavCheat from '../../images/navCheat.svg';
import NavCheatS from '../../images/navCheatS.svg';
import NavPerformance from '../../images/navPerformance.svg';
import NavPerformanceS from '../../images/navPerformanceS.svg';
import NavSettings from '../../images/navSettings.svg';
import NavSettingsS from '../../images/navSettingsS.svg';
import { LinkContainer } from "react-router-bootstrap";

const list = [
	{
		name: 'Class',
		text: 'Class',
		icon: NavClass,
		iconS: NavClassS,
		id: 1,
		link: '/class'
	},
	{
		name: 'Code',
		text: 'Code',
		icon: NavCode,
		iconS: NavCodeS,
		id: 2,
		link: '/code'
	},
	{
		name: 'History',
		text: 'History',
		icon: NavHistory,
		iconS: NavHistoryS,
		id: 3,
		link: '/history'
	},
	{
		name: 'Cheat',
		text: 'Cheatsheet',
		icon: NavCheat,
		iconS: NavCheatS,
		id: 4,
		link: '/cheat'
	},
	{
		name: 'Performance',
		text: 'Performance',
		icon: NavPerformance,
		iconS: NavPerformanceS,
		id: 5,
		link: '/performance'
	},
	{
		name: 'Settings',
		text: 'Settings',
		icon: NavSettings,
		iconS: NavSettingsS,
		id: 6,
		link: '/settings'
	}
];

interface Props {
	selected: number;
}

const SideNav: React.FC<Props> = ({selected}: Props) => {
const [activated, setActivated] = useState<number>(selected);
return(
	<Wrapper>
		<Container>
			{list.map((item) => {
				if(activated === item.id) {
					return <LinkContainer to = {item.link}><Container onClick={() => setActivated(item.id)}><NavItem key={item.name} icon={item.icon} iconS={item.iconS} text={item.text} selected={true} id={item.id}/></Container></LinkContainer>
				} else {
					return <LinkContainer to = {item.link}><Container onClick={() => setActivated(item.id)}><NavItem key={item.name} icon={item.icon} iconS={item.iconS} text={item.text} selected={false} id={item.id}/></Container></LinkContainer>
				}
		})}
		</Container>
	</Wrapper>
)
};

export default SideNav;
