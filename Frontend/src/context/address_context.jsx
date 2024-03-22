import { createContext,useContext, useEffect, useState } from "react";
import AuthHeader from "../Helpers/AuthHeader";
import axios from "axios";
import { useLoginContext } from "./login_context";

const AddressContext = createContext();

const AddressProvider = ({children}) => {

    const {isLogin} = useLoginContext();

    const [name, setName] = useState("");
        const [mobileno, setMobileno] = useState("");
        const [pincode, setPincode] = useState("");
        const [address, setAddress] = useState("");
        const [locality, setLocality] = useState("");
        const [district, setDistrict] = useState("");
        const [state, setState] = useState("");
        const [saveaddress, setsaveaddress] = useState("home");
        let [id, setId] = useState(0);

        useEffect(()=>{


            const getAddressData = async () => {

                try{
                    
                    const headers = AuthHeader();
    
                    const res = await axios.get(import.meta.env.VITE_url + `/addr/checkAddr`, { headers });
        
                    let data = res.data;

        
                    if(data !== "")
                    {
                        setId(data.id);
                        setName(data.name);
                        setMobileno(data.mobile_no);
                        setPincode(data.pincode);
                        setAddress(data.addr);
                        setLocality(data.town);
                        setState(data.state);
                        setDistrict(data.city);

                    }
                    else 
                    {
                        setId(0);
                    }
        
                }catch(error)
                {
                    console.log(error);
                }

            }


            getAddressData();            
    
        },[isLogin])



    return (
        <>
            <AddressContext.Provider value={{name,setName,mobileno,setMobileno,pincode,setPincode,address,setAddress,locality,setLocality,district,setDistrict, state,setState,saveaddress, setsaveaddress, id, setId}}>
                {children}
            </AddressContext.Provider>
        </>
    )
}

const useAddressContext = () => {
    return useContext(AddressContext);
}

export { AddressProvider, useAddressContext };