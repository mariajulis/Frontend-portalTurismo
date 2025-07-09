import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LoginForm from "../components/loginForm";

const LoginPage =() => {

    return (
        <>
        <div ClassName="flex flex-col min-h-screen">
            <Navbar />
            <div 
            className="flex-grow flex items-center justify-center ">
             <LoginForm/>
            </div>
            <Footer />
        </div>
     
        </>

    )

}
export default LoginPage;