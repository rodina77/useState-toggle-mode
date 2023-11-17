
import './App.css';
import { useState } from 'react';
function App() {
  const [mode,setMode]=useState(true);
  function toggle(){
    setMode((v)=>!v);
  }
  return (
    <div className="App">
      <header className="App-header" style={{background:mode? 'white' :'black',color:mode? 'black' : ' white'}}>
      <i class="bi bi-moon-stars-fill" onClick={toggle}></i>
      <h1>here is your prefer mode</h1>
      <p>click on the alarm to toggle mode even dark or white as you like</p>
      </header>
    </div>
  );
}

export default App;
