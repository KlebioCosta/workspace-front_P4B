import React, { useState } from 'react'

const url = "http://localhost:3000/alunos"

const AdicionandoDados = ({setAlunos}) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [curso, setCurso] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()

    const alunoToAdd = {nome, email, curso};
        
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(alunoToAdd)
    });

    const addedAluno = await response.json();
    if (setAlunos) {
        setAlunos((preAlunos) => [...preAlunos, addedAlunos])
    }
    setNome("");
    setEmail("");
    setCurso("");
};

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <label>
                Nome
            <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
            <br/>
            <label>
                Email
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br/>
            <label>
                Curso
                <input type='text' value={curso} onChange={(e) => setCurso(e.target.value)} />
            </label>
            <br/>
            <button  type='submit'>Adicionar</button >
        </form>
    </div>
  )
};

export default AdicionandoDados