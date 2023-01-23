import { createContext } from "react";


export const AuthContext = createContext();

const initState = {
    first_name:'',
    last_name:'',
    email:'',
    password:''
};

const AuthContextProvider = ({children}) => {
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
};

export default AuthContextProvider;