import React, { useState, useEffect } from "react";
import ListItem from './ListItem'

import "./styles.css";
import api from "./services/api";


function App() {
  const [ repositories, setRepositories ] = useState([])
  
  useEffect( () => {
    api.get('repositories').then( response => {
      setRepositories(response.data)
    })
  }, [])
  
  async function handleAddRepository() {
    const response = await api.post('repositories', { 
      title: ` Novo projeto ${Date.now()} `,
      owner: "Gabriel Dantas"
    })
    setRepositories([...repositories, response.data])
  }

  async function handleRemoveRepository(id) {    
    const selectRepo = repositories.filter( repo => repo.id === id )
    console.log(selectRepo)
    api.delete(`repositories/${id}`)
    const otherRepos = repositories.filter( repo => repo.id !== id )
    setRepositories(otherRepos)
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map( repository => <ListItem key={repository.id} removeBtn={handleRemoveRepository} info={repository} /> ) }
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
