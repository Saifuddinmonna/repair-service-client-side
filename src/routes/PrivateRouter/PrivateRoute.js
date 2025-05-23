import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../components/ContextProvider/ContextProvider";


const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	// console.log(location);
	if (loading) {
		return (
			<div>
				{" "}
				Loading....
				<progress className="progress w-56"></progress>
				<progress className="progress w-56"></progress>
				<progress className="progress w-56"></progress>
			</div>
		);
	}
	if (user && user?.uid) {
		return children;
	}
	return (
		<Navigate to={"/login"} state={{ from: location }} replace></Navigate>
	);
};

export default PrivateRoute;
