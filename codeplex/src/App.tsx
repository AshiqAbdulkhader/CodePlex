import React from 'react';

//Routing
import {BrowserRouter as Router} from 'react-router-dom';

//Components
import Header from './components/Header';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Flare from './components/Flare';

// Styles
import { GlobalStyle } from './GlobalStyle';

const App: React.FC = () => (
	<Router>
		<Flare/>
		<Header/>
		<Page1/>
		<Page2/>
		<Page3/>
		<GlobalStyle/>
  	</Router>
);

export default App;