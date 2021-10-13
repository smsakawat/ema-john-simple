import { initializeApp } from "firebase/app";
import firebaseConfig from "./firabase.config";

const initializeAuthentication=()=>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;


/* 
/steps for authentication
----------------
Step-1:Initial Setup
1.firebase:create a project 
2.create a web app
3.get configuration
4.initalize firebase
5.enable auth method

Step-2:Login and Regsiter
1.Create Login Component
2.Create Register Component
3.Create Route for login and register

step-3:set up firebase
1.set user state
2.set up sign in method
3.set up logout method
4.set an observer

step-4:set context for auth (useAuth)
1.create auth context 
2.create context provider(AuthProvider)
3.set value of context provider
4.create use auth
5.use Auth Provider

step-5:Private route
1.create private route
2.set private route in app.js

step-6: Redirect user to wanted url
1.get location and history from react-router useing their hooks
2.set up history after login user


*/