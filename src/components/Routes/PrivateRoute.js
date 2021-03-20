import React from "react";
import { useHistory, Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.utils";

function PrivateRoute({ path, exact, children }) {
  const { user } = useAuth();
  console.log("privateuser",user)
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
