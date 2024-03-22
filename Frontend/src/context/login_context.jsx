import { createContext, useState, useContext } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);
    const [uname, setUname] = useState("");
    const [uemail, setUemail] = useState("");

    return (
        <>
            <LoginContext.Provider value={{ isLogin, setIsLogin, uname, setUname, uemail, setUemail}}>
                {children}
            </LoginContext.Provider>
        </>
    )
};

const useLoginContext = () => {
    return useContext(LoginContext);
}

export { LoginProvider, useLoginContext };