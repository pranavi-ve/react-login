import React from "react";
import { Redirect, Route } from "react-router-dom";
import {userService} from "../_services";

export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
  {...rest}
  render={(props) => {
      const user = userService.currentUserValue;
      if (!user)
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      if (roles && roles.indexOf(user.role) === -1)
        return <Redirect to={{ pathname: "/" }} />;
    
      return <Component {...props} />;
    }}
  />
);
