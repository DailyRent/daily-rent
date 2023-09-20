"use client";
import React from 'react';
import { signIn } from 'next-auth/react';


const LoginPage = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => signIn('google')}>Login with Google</button>
        </div>
    )
}


export default LoginPage;