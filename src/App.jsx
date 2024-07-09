import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')
  return (
    <>
      <input className="input container" placeholder="Insira o nome de usúario do Git que deseja pesquisar" type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario= {nomeUsuario} />
          <ReposList nomeUsuario= {nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
