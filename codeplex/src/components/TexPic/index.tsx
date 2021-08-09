import React from "react";

//components
import {Wrapper, Ltext, Simg} from './TexPic.styles';

//types
type Props = {
  image: string;
  text: string;
  top: number;
  left: number;
}

const TexPic: React.FC<Props> = ({image, text, top, left}) => (
		<Wrapper top={top} left={left}>
            <Ltext>{text}</Ltext>
            <Simg src={image} />
        </Wrapper>
	);

export default TexPic;