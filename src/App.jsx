import { useState } from 'react'

import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!username) return;
    setError('');
    setUserData(null);
    setLoading(true);
    try{
      const response = await
        fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error();
      const data = await response.json();
      setUserData(data);
    } catch {
      setError('Nenhum perfil foi encontrado com ese nome de usuário. Tente novamente');
    } finally {
      setLoading(false);
    }
  };

  

}
export default App
