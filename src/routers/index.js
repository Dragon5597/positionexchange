import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { map } from "lodash";
import { pathRouter } from "../constants";
import PrivateRoute from "../pages/Common/PrivateRoute";
import PublicRoute from "../pages/Common/PublicRoute";
import NotFoundPage from "../components/NotFound";
import HomePage from "../pages/home";
import PolicyPage from "../pages/policy";
import TermPage from "../pages/terms";
import LibraryPage from "../pages/library";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

import "../scss/main.scss";

const router = [
	{
		key: pathRouter.home,
		exact: true,
		path: pathRouter.home,
		component: HomePage,
		auth: false
	},
	{
		key: pathRouter.policy,
		exact: true,
		path: pathRouter.policy,
		component: PolicyPage,
		auth: false
	},
	{
		key: pathRouter.terms,
		exact: true,
		path: pathRouter.terms,
		component: TermPage,
		auth: false
	},
	{
		key: pathRouter.library,
		exact: true,
		path: pathRouter.library,
		component: LibraryPage,
		auth: false
	}
];

const renderRouter = () => {
	return map(router, (route) => {
		if (route.auth) {
			return <PrivateRoute key={route.key} path={route.path} component={route.component} exact={route.exact} />;
		}
		return <Route key={route.key} path={route.path} component={route.component} exact={route.exact} />;
	});
};

const AppRouter = () => {
	// console.log(renderRouter());
	return (
		<Router>
			<Header />
			<div className="main">
				<Switch>
					{renderRouter()}
					<Route path={pathRouter.notfound} exact component={NotFoundPage} />
				</Switch>
			</div>
			{/* <Footer /> */}
			<ScrollToTop />
		</Router>
	);
};

export default AppRouter;
