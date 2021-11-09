import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import HeaderL from "./components/HeaderL";
import ConstructionPrompt from "./components/ConstructionPrompt";

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Header />
				<Home />
			</Route>
			<Route exact path="/login">
				<Header />
				<Login />
			</Route>
			<Route exact path="/features">
				<Header />
				<ConstructionPrompt />
			</Route>
			<Route exact path="/about">
				<Header />
				<ConstructionPrompt />
			</Route>
			<Route exact path="/contact">
				<Header />
				<ConstructionPrompt />
			</Route>
			<Route exact path="/contributors">
				<Header />
				<ConstructionPrompt />
			</Route>
			<Route exact path="/dashboard">
				<HeaderL />
				<Dashboard />
			</Route>
			<Route exact path="/class">
				<HeaderL />
				
				<ConstructionPrompt />
			</Route>
			<Route exact path="/code">
				<HeaderL />
				<ConstructionPrompt />
			</Route>
			<Route exact path="/history">
				<HeaderL />
				<ConstructionPrompt />
			</Route>
			<Route exact path="/cheatsheet">
				<HeaderL />
				<ConstructionPrompt />
			</Route>
			<Route exact path="/performance">
				<HeaderL />
				<ConstructionPrompt />
			</Route>
			<Route exact path="/settings">
				<HeaderL />
				<ConstructionPrompt />
			</Route>
			<Route>
				<Header />
				<NotFound />
			</Route>
		</Switch>
	);
}
