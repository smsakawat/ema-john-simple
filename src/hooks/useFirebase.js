import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firabase/firebase.iinit";
// initializing firebase
initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();

  const signInUsingGoogle = () => {
    // signInWithPopup(auth,googleProvider)
    // .then(result=>{
    //   setUser(result.user)
    // })
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // get jwt token and set it to localstorage
        // getIdToken(user).then((idToken) =>
        //   localStorage.setItem("idToken", idToken)
        // );
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribe;
  }, [auth]);

  return {
    user,
    error,
    signInUsingGoogle,
    logOut,
    setError,
  };
};

export default useFirebase;
