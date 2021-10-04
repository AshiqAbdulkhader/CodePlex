import React from "react";
import {Link} from "react-router-dom";

// asset imports
import '../../fonts.css';
import BgImg from '../../images/Flare.svg';
import Page2Img from '../../images/pg2_ckt.svg';
import p2i1 from '../../images/p2i1.svg';
import p2i2 from '../../images/p2i2.svg';
import p2i3 from '../../images/p2i3.svg';
import MainLogo from '../../images/main_logo.svg';
import p3i1 from '../../images/p3i1.svg';

// global components
import TexPic from '../TexPic';

//specific components
import {WrapperMain, BgBlur, WrapperV1, WrapperV2, WrapperV3, BackLogoV1, BackLogoV2, BackLogoV3, PopHead, PopPara, GetStarted, Demo, FLspan, Line, Texcon, SmallerText} from './Home.styles';

const Home: React.FC = () => (
    <WrapperMain>
        <BgBlur src={BgImg}/>
        <WrapperV1>
		    <BackLogoV1 src={MainLogo}/>
            <PopHead><FLspan>G</FLspan>et <FLspan>C</FLspan>ode <FLspan>D</FLspan>one.</PopHead>
            <PopPara>CodePlex is an all-in-one online code editor that helps you learn to code smarter, faster and better in a fun and engaging environment.</PopPara>
            <Link to='/'>
                <GetStarted>Get Started</GetStarted>
            </Link>
            <Link to='/'>
                <Demo>View Demo</Demo>
            </Link>
        </WrapperV1>
        <WrapperV2>
			<BackLogoV2 src={Page2Img}/>
            <TexPic
                image={p2i1}
                text={'Code in the most popular programming languages'}
                left={60}
                top={15}
            />
            <TexPic
                image={p2i2}
                text={'The perfect environment to take your classes and conduct tests'}
                left={30}
                top={30}
            />
            <TexPic
                image={p2i3}
                text={'Post questions, share your screen, view workspaces, chat and much more'}
                left={60}
                top={45}
            />
        </WrapperV2>
        <WrapperV3>
            <BackLogoV3 src={p3i1}/>
            <Line/>
            <Texcon>An improvement oriented<br/> ranking system that encourages<br/> you to better yourself apart from<br/> compete with others.</Texcon>
            <SmallerText>A detailed performance analysis<br/>that helps you find out where you need to improve.</SmallerText>
        </WrapperV3>
    </WrapperMain>
);

export default Home;