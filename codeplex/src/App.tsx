import React from 'react';

//Routing
import Routes from "./Routes";

//Components
import Header from './components/Header';

const App: React.FC = () => (
	<div>
		<Header/>
		<Routes/>
	</div>
);

export default App;