import './App.css';
import Navbar from './componets/Navbar';
import Main from './componets/Main';
import React from 'react';

function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function handleClick(){
    setDarkMode(prevState => !prevState)
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleClick={handleClick}/>
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
