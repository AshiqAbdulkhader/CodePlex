import React from "react";
//assets
import '../../fonts.css';
import p3i1 from '../../images/p3i1.svg';

//components
import {Wrapper, BackLogo, Line, Texcon, SmallerText} from './Page3.styles';

const Page2: React.FC = () => (
    <Wrapper>
        <BackLogo src={p3i1}/>
        <Line/>
        <Texcon>An improvement oriented<br/> ranking system that encourages<br/> you to better yourself apart from<br/> compete with others.</Texcon>
        <SmallerText>A detailed performance analysis<br/> helps you find out where you need to improve.</SmallerText>
    </Wrapper>

    );

export default Page2;