import { createContext, ReactNode, useState } from "react";


interface UserProviderProps {
    children: ReactNode;
}

type UserContextData = {
    aluno: string;
    qtdAlunos: number;
}

export const UserContext = createContext({} as UserContextData);


function UserProvider({children}: UserProviderProps) {

    const [aluno, setAluno] = useState("Yan Graim");
    const [qtdAlunos, setQtdAlunos] = useState(40);

    return (
        <UserContext.Provider value={{aluno, qtdAlunos}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;