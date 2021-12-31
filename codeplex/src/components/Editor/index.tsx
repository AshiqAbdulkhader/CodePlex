import React, { useState } from "react";

import { Wrapper, EditorHeading, ThemeSelect, ModeSelect, DownloadCode } from "./Editor.styles";
import { UnControlled as CodeMirror } from "react-codemirror2";

import "./index.css";
require('codemirror/mode/clike/clike');
require('codemirror/mode/go/go');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/php/php');
require('codemirror/mode/python/python');
require('codemirror/mode/swift/swift');
require('codemirror/mode/xml/xml');
var FileSaver = require('file-saver');

const Editor: React.FC = () => {
	const getInitialState = () => {
		const mode = "javascript";
		const theme = "the-matrix";
		const value = 
		`function who(){
	console.log("I am the one");
}`;
		return { mode, theme, value };
	}

	const [mode, setMode] = useState(getInitialState().mode);
	const [theme, setTheme] = useState(getInitialState().theme);
	const [value, setValue] = useState(getInitialState().value);

	var lang = "";

	const ThemeChange = (e: any) => {
		setTheme(e.target.value);
	}

	const ModeChange = (e: any) => {
		lang = e.target.value;
		if(lang === "c" || lang === "cpp" || lang === "java" || lang === "kotlin"){
			setMode("clike");
		}
		else{
			setMode(e.target.value);
		}
	}

	function extensionFinder(lang: string){
		interface extDict {
			[key: string]: string;
		}
		
		const fileExtensionDict: extDict = {
			"c": "c",
			"cpp": "cpp",
			"go": "go",
			"java": "java",
      		"javascript": "js",
      		"kotlin": "kt",
			"php": "php",
      		"python": "py",
      		"swift": "SWIFT",
			"xml":"html"
    	};
    	return fileExtensionDict[lang];
	}

	document.getElementById("btn-download")?.addEventListener("click", () => {
		document.getElementById("btn-download")?.classList.add("downloaded");
		setTimeout(
            function() {
                document.getElementById("btn-download")?.classList.remove("downloaded");
            }, 1500);
	});

	const saveFile = () => {
		const ext = extensionFinder(lang);
		const blob = new Blob([value], { type: "text/plain;charset=utf-8" });
		const name = "" + Date.now() + "." + ext;
		FileSaver.saveAs(blob, `${name}`);
	}
	return(
		<Wrapper>
			<EditorHeading>
				<DownloadCode id="btn-download" onClick={saveFile}>
					<svg width="22px" height="16px" viewBox="0 0 22 16">
                      <path d="M2,10 L6,13 L12.8760559,4.5959317 C14.1180021,3.0779974 16.2457925,2.62289624 18,3.5 L18,3.5 C19.8385982,4.4192991 21,6.29848669 21,8.35410197 L21,10 C21,12.7614237 18.7614237,15 16,15 L1,15" id="check"></path>
                      <polyline points="4.5 8.5 8 11 11.5 8.5" className="svg-out"></polyline>
                      <path d="M8,1 L8,11" className="svg-out"></path>
                    </svg>
				</DownloadCode>
				<ThemeSelect onChange={ThemeChange} value={theme}>
                	<option value="blackboard">Blackboard</option>
                	<option value="colorforth">Colorforth</option>
                	<option value="isotope">Isotope</option>
                	<option value="moxer">Moxer</option>
                	<option value="night">Night</option>
                	<option value="panda-syntax">Panda syntax</option>
                	<option value="shadowfox">Shadowfox</option>
                	<option value="the-matrix" selected>The Matrix</option>
                	<option value="vibrant-ink">Vibrant ink</option>
            	</ThemeSelect>
            	<ModeSelect onChange={ModeChange} value={mode}>
					<option value="c">C</option>
					<option value="cpp">C++</option>
					<option value="go">Go</option>
                	<option value="java">Java</option>
					<option value="javascript">Javascript</option>
					<option value="kotlin">Kotlin</option>
					<option value="php">PHP</option>
					<option value="python">Python</option>
					<option value="swift">Swift</option>
                	<option value="xml">XML</option>
            	</ModeSelect>
			</EditorHeading>
			<CodeMirror
				value = {value}
				options={{
					mode: mode,
					theme: theme,
					lineNumbers: true,
					indentWithTabs: true,
					tabSize: 4,
					indentUnit: 4,
				}}
				onChange={(editor, data, value) => {}}
			/>
		</Wrapper>
	);
};

export default Editor;
