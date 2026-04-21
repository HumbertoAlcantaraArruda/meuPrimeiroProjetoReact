import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import UserCard from './components/UserCard'
import './App.css'

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      id: Date.now(),
      name,
      email,
      age
    }

    console.log(newUser);

    setUsers([...users, newUser]);
  }

  return (
    <div className="app">
      <h1>Cadastro de usuário</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Idade"
          value={age}
          onChange={e => setAge(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
      <div className="user-list">
        {users.map( (user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default App
