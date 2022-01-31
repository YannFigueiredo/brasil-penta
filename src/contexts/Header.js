import { useState, createContext } from 'react';

export const HeaderContext = createContext({});

function HeaderProvider({children}){
    const [estadoMenu, setEstado] = useState(false);
    const [paginaAtiva, setAtiva] = useState(null);
    
    return(
        <HeaderContext.Provider value={{estadoMenu, setEstado, paginaAtiva, setAtiva}}>
            {children}
        </HeaderContext.Provider>
    );
}

export default HeaderProvider;