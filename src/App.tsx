import { Alunos } from "./components/Alunos";

import UserProvider from "./contexts/user";


function App() {

  return (
    <UserProvider>
      <div>
        <h1>Contex Api</h1>
        <br />
        <hr />
        <Alunos/>
      </div>
    </UserProvider>
  )
}

export default App
