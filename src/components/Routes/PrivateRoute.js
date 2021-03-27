import React from "react";
import { useHistory, Route } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.utils";

function PrivateRoute({ path, exact, children }) {
  const { user } = useAuth();
  const {push}= useHistory()
  
  if (!user.isLogged) {
    push("/login")
  }

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
