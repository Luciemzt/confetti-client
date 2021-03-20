import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.utils";

function AnonRoute({ path, exact, children }) {
  const { user } = useAuth();
  console.log("user",user)
  if (user.isLogged) {
    return <Redirect to="/place" />;
  }

  return (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
}

export default AnonRoute;
