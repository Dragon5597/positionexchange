import React from "react";
import { Redirect, Route } from "react-router-dom";
import { pathRouter } from "../../constants";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isAuth = localStorage.getItem("firstLogin");
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuth ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: pathRouter.login, state: { form: props.location } }} />
				)
			}
		/>
	);
};

export default PrivateRoute;
