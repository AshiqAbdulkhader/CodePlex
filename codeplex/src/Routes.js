import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import HeaderL from "./components/HeaderL";

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
			<Route exact path="/dashboard">
				<HeaderL />
				<Dashboard />
			</Route>
			<Route>
				<Header />
				<NotFound />
			</Route>
		</Switch>
	);
}
