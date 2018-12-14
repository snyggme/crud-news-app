import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isSigned } = rest.auth;

	return (
	    <Route 
	    	{...rest}
	      	render={props =>
	        	isSigned
		        	? <Component  {...rest} {...props} />
		        	: <Redirect
		            		to={{
		              			pathname: "/news"
		            		}}
		          		/>
	      	}
	    />
  	);
}

export default PrivateRoute;