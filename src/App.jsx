import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png';
import { Search } from 'lucide-react';

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

return (
  <div className='app'>
    <div className='card'>
      <h1 className='title'> <img src={logo} alt="logo" />
        Perfil GitHub</h1>

      <div className='search-box'>
        <input type="text" placeholder="Digite um usuário do Github" value={username}
        onChange={(e) => setUsername(e.target.value)}/>
        <button onClick={handleSearch}>
          <Search color='white' size={20} />
        </button>
      </div>
      
      {loading && <p className="info">Carregando...</p>}
        {error && <p className="error">{error}</p>}
        {userData && (
          <div className="profile">
            <img className="avatar" src={userData.avatar_url} alt={userData.name} />
            <div className="info-box">
              <h2>{userData.name || userData.login}</h2>
              <p>{userData.bio || 'Este usuário não possui bio.'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

};
export default App
