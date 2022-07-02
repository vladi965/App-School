import { auth } from "../../../services/firebase-config";
import React, { useEffect, useState } from "react";
import { LogoutNavigator, MainStackNavigator } from "./StackNavigator";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);

  useEffect(() => auth.onAuthStateChanged((user) => userHandler(user)), []);

  return <>{!currentUser ? <MainStackNavigator /> : <LogoutNavigator />}</>;
};

export default AuthNavigation;
