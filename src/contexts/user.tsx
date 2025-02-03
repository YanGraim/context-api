import { createContext, ReactNode } from "react";


interface UserProviderProps {
    children: ReactNode;
}

type UserContextData = {
    aluno: string;
    qtdAlunos: number;
}

export const UserContext = createContext({} as UserContextData);

// proviver que vai envolver a aplicação

function UserProvider({children}: UserProviderProps) {
    return (
        <UserContext.Provider value={{aluno, qtdAlunos}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;