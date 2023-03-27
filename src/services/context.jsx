import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

export function Context() {
  const [user, setUser] = useState();

  useEffect(() => {
    const loadUser = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid);
          setUser(user);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    };
    loadUser();
  }, []);

  return user
}

const AppContext = React.createContext();

const AppProvider = props => {
  return <AppContext.Provider value={{...Context()}}>{props.children}</AppContext.Provider>;
};

