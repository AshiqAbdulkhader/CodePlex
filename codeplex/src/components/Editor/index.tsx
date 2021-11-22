import React, {useState} from "react";

import { Wrapper } from "./Editor.styles";
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-one_dark'
import 'ace-builds/src-noconflict/ext-language_tools'
import 'ace-builds/src-noconflict/ext-beautify'

import "./index.css";

const Editor: React.FC = () => {
	const [code, setCode] = useState(`function hello() {console.log("Hello World!");}`)
		
		return(<Wrapper>
			<AceEditor
			style={{
                height: '100%',
                width: '100%',
            }}
            placeholder='Start Coding'
            mode='javascript'
            theme='one_dark'
            name='basic-code-editor'
            onChange={currentCode => setCode(currentCode)}
            fontSize={20}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={code}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 4,
            }}/>
		</Wrapper>);
};

export default Editor;