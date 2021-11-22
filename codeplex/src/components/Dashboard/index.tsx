import React from "react";

//Assets
import '../../fonts.css';

//Components
import { Wrapper, Container} from './Dashboard.styles';

const Header: React.FC = () => (
	<Wrapper>
		<Container>
            Logged In
        </Container>
	</Wrapper>
);

export default Header;
