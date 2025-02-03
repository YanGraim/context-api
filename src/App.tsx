import { useState } from "react"
import { Alunos } from "./components/Alunos"


function App() {
  
  const [nome, setNome] = useState('Yan Graim')

  return (
    <div>
      <h1>Contex Api</h1>
      <br />
      <hr />

      <Alunos alunoNome={nome}/>

    </div>
  )
}

export default App
