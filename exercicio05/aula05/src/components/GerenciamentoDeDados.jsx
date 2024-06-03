import { useState, useEffect } from 'react'

const url = "http://localhost:3000/alunos"

const GerenciamentoDeDados = ({}) => {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url)

            const data = await response.json()

            setAlunos(data)
        }
        fetchData()
    }, []);


  return (
    <div className='centralizar'>

        <table border='2px'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Curso</th>
                </tr>
            </thead>
            <tbody>
                {
                    alunos.map((aluno) => (
                        <tr key ={aluno.id}>
                            <td>{aluno.nome}</td>
                            <td>{aluno.email}</td>
                            <td>{aluno.curso}</td>
                        </tr>

                    ))
                }
            </tbody>
        </table>

    </div>
  )
};

export default GerenciamentoDeDados