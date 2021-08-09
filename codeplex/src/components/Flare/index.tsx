import React from "react";
//assets
import '../../fonts.css';
import BgImg from "../../images/Flare.svg";

//components
import {BgBlur} from './Flare.styles';

const Flare: React.FC = () => (
    <BgBlur src={BgImg}/>
);

export default Flare;