import React, {useState} from 'react'
import GerenciamentoDeDados from './components/GerenciamentoDeDados'
import AdicionandoDados from './components/AdicionandoDados'

const App = () => {
  const [alunos, setAlunos] = useState([]);

  return (
    <div>
      <GerenciamentoDeDados alunos={alunos}/>
      <AdicionandoDados setAlunos={setAlunos} />
    </div>
  );
}

export default App