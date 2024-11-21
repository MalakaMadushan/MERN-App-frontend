import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();
  return (
    <div className="App">
      <header className='App-header'>
      <h2> Welcome to MERN Projcet </h2>
      <button className='User-button' onClick={()=> navigate('/users')}>User</button>
      </header>
    </div>
  );
}

export default App;
