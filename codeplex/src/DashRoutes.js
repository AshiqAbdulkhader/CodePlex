import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ConstructionPrompt from "./components/ConstructionPrompt";
import Playground from "./components/Playground";

export default function DashRoutes() {
	return (
		<Switch>
			<Route exact path="/dashboard">
				<Dashboard />
			</Route>
			<Route exact path="/class">
				<ConstructionPrompt />
			</Route>
			<Route exact path="/code">
				<Playground />
			</Route>
			<Route exact path="/history">
				<ConstructionPrompt />
			</Route>
			<Route exact path="/cheat">
				<ConstructionPrompt />
			</Route>
			<Route exact path="/performance">
				<ConstructionPrompt />
			</Route>
			<Route exact path="/settings">
				<ConstructionPrompt />
			</Route>
		</Switch>
	);
}
