import React from "react";
import {Wrapper, CodeSide, OutputSide} from "./Playground.styles";
import Editor from "../Editor";
import OutputTile from "../OutputTile";

const Playground: React.FC = () => {

	const getInitialState = () => {
		const output = "";
		const status = 1;
		return { output, status };
	}

	const [output, setOutput] = React.useState(getInitialState().output);
	const [status, setStatus] = React.useState(getInitialState().status);


	const handleCallback = (response: any) => {
		const responseData = JSON.parse(response);
		setOutput(responseData.output);
		setStatus(responseData.status);
	}

	return(
		<Wrapper>
			<CodeSide>
				<Editor response = {handleCallback}/>
			</CodeSide>
			<OutputSide>
				<OutputTile output = {output} status = {status}/>
			</OutputSide>
		</Wrapper>);
};

export default Playground;