import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firabase/firebase.iinit";

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
    signOut(auth)
    .then(() => {
      
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
     
    });
  }, []);

  return {
    user,
    error,
    signInUsingGoogle,
    logOut
  };
};

export default useFirebase;
