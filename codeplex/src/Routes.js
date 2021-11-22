import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Header from "./components/Header";
import HeaderL from "./components/HeaderL";
import ConstructionPrompt from "./components/ConstructionPrompt";
import SideNav from "./components/SideNav";

//Routing
import DashRoutes from "./DashRoutes";

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
			{[
				"/dashboard",
				"/class",
				"/code",
				"/history",
				"/cheat",
				"/performance",
				"/settings",
			].map((path, index) => (
				<Route path={path}>
					<HeaderL />
					<SideNav selected={index} />
					<DashRoutes />
				</Route>
			))}
			<Route>
				<Header />
				<NotFound />
			</Route>
		</Switch>
	);
}
