import { createContext, useState, useContext, useEffect } from "react";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {

    const [loginState, setLoginState] = useState(false);
    const [adminname, setAdminName] = useState("");
    const [adminemail, setAdminEmail] = useState("");
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {

        if(localStorage.getItem("ADMIN_TOKEN"))
        {
            setLoginState(true);
            setAdminName(localStorage.getItem("ADMINNAME"));
            setAdminEmail(localStorage.getItem("ADMINEMAIL"));
        }

    }, [])


    return (
        <>
            <AdminContext.Provider value={{ loginState, setLoginState, adminname, setAdminName, adminemail, setAdminEmail, isActive, setIsActive }}>
                {children}
            </AdminContext.Provider>
        </>
    )
};

const useAdminContext = () => {
    return useContext(AdminContext);
}

export { AdminProvider, useAdminContext };
