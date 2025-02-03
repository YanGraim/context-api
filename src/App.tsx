import { useState } from "react";
import { Alunos } from "./components/Alunos";

import UserProvider from "./contexts/user";


function App() {
  
  const [nome, setNome] = useState('Yan Graim')

  return (
    <UserProvider>
      <div>
        <h1>Contex Api</h1>
        <br />
        <hr />
        <Alunos alunoNome={nome}/>
      </div>
    </UserProvider>
  )
}

export default App
