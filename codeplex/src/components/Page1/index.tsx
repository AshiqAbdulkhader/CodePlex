import React from "react";
import { Link } from 'react-router-dom';

import '../../fonts.css';
import MainLogo from '../../images/main_logo.svg';
import {Wrapper, BackLogo, PopHead, PopPara, GetStarted, Demo, FLspan} from './Page1.styles';

const Page1: React.FC = () => (
	<Wrapper>
		<BackLogo src={MainLogo}/>
                <PopHead><FLspan>G</FLspan>et <FLspan>C</FLspan>ode <FLspan>D</FLspan>one.</PopHead>
                <PopPara>CodePlex is an all-in-one online code editor that helps you learn to code smarter, faster and better in a fun and engaging environment.</PopPara>
                <Link to='/'>
                        <GetStarted>Get Started</GetStarted>
                </Link>
                <Link to='/'>
                        <Demo>View Demo</Demo>
                </Link>
        </Wrapper>
	);

export default Page1;