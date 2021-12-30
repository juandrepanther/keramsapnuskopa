import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {NavLink} from 'react-router-dom'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import DisplayPage from './DisplayPage'

function App() {
  const [inputName, setInputName] = useState('')
  const [izd, setIzd] = useState('')

  

  const handler = () => {
    fetch(`https://www.keramsapnuskopa.com/SELECT-kjhgfdkgJHUGUYTHV64623.php`)
    .then((res) => res.json())
    .then((res) => {
      if (res && res[0].user === inputName) {
        console.log('Login Successful')
      } else {
        console.log('Access is allowed only for Lolita')
      }
    })
  }
  
  const inputHandler = (e) => {
    e.preventDefault()
    setInputName(e.target.value)
  }

//setInterval(App, 5000)
const IzdFunction = (e) => {
  setIzd(e.target.value)
}
console.log(izd)
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" 
        >
          Learn React
        </a>
        <input type='text' onChange={inputHandler} placeholder='Login' />
        <button className='btn tooltipped' onClick={handler}
        data-position="bottom" data-tooltip="I am a tooltip"
        >Click me to console Log</button>
        <div>
        <form action='https://www.keramsapnuskopa.com/UPLOAD_IMAGES_fgsdfUTYUIY763.php' method='post' encType='multipart/form-data'>
          <input type='file' name='file' multiple placeholder='Upload files' accept='image/*'/>
            <input type='text' name='title' placeholder='Image Description'></input>
          <button type='submit' name='submit'>Upload selected images</button>
          <input type='text' onChange={IzdFunction} placeholder='Izdevateljstvo' />
        </form>
        </div>
        <Switch>
          <Route component ={DisplayPage} exact path='/display'/>
        </Switch>
        <NavLink to='/display'>Click Here to display images page</NavLink>
      </header>
      <input type='text' placeholder='Izdevateljstvo' />
    </div>
    </BrowserRouter>
  );
}


export default App;
