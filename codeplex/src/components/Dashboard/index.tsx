import React from "react";

//Assets
import '../../fonts.css';
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

//Components
import { Wrapper, Container} from './Dashboard.styles';
import SideNav from "../SideNav";

const menuList = [
	{
		name: 'Class',
		text: 'Class',
		icon: NavClass,
		iconS: NavClassS,
		id: 1
	},
	{
		name: 'Code',
		text: 'Code',
		icon: NavCode,
		iconS: NavCodeS,
		id: 2
	},
	{
		name: 'History',
		text: 'History',
		icon: NavHistory,
		iconS: NavHistoryS,
		id: 3
	},
	{
		name: 'Cheat',
		text: 'Cheatsheet',
		icon: NavCheat,
		iconS: NavCheatS,
		id: 4
	},
	{
		name: 'Performance',
		text: 'Performance',
		icon: NavPerformance,
		iconS: NavPerformanceS,
		id: 5
	},
	{
		name: 'Settings',
		text: 'Settings',
		icon: NavSettings,
		iconS: NavSettingsS,
		id: 6
	}
];



const Header: React.FC = () => (
	<Wrapper>
		<SideNav list={menuList} selected={1}/>
		<Container>
            Logged In
        </Container>
	</Wrapper>
);

export default Header;
