import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { firebase, auth } from "../app/firebaseApp";

console.log('firebase', firebase);
// Configure FirebaseUI
const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
}

function SignInScreen() {
    return (
        <div
            style={{
                maxWidth:"320px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1>Pineapple Login</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
    );
}

export default SignInScreen;