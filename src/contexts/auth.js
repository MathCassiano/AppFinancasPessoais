import React, {createContext, useState} from "react";


export const AuthContext = createContext({});

//Provider: prover as informações para todas as telas, garantindo que todas as telas tenham acesso às informações deixadas
function AuthProvider({children}){
    const [user, setUser] = useState({
        nome: "Matheus Teste"
    });

    return(
                                //todo mundo terá acesso ao que eu passar dentro do value
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;