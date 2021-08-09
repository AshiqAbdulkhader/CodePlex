import React from "react";
//assets
import '../../fonts.css';
import TexPic from '../TexPic';
import Page2Img from '../../images/pg2_ckt.svg';
import p2i1 from '../../images/p2i1.svg';
import p2i2 from '../../images/p2i2.svg';
import p2i3 from '../../images/p2i3.svg';

//components
import {Wrapper, BackLogo} from './Page2.styles';

const Page2: React.FC = () => (
		<Wrapper>
				<BackLogo src={Page2Img}/>
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
        </Wrapper>
	);

export default Page2;