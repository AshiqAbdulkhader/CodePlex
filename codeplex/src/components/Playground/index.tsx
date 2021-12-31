import React from "react";
import {Wrapper, CodeSide} from "./Playground.styles";
import { GenericButton } from "../GenericButton/GenericButton.styles";
import Editor from "../Editor";

const Playground: React.FC = () => (
		<Wrapper>
			<CodeSide>
				<Editor/>
				<GenericButton>Run</GenericButton>
			</CodeSide>
		</Wrapper>
);

export default Playground;