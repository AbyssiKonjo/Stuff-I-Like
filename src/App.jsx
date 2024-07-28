import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
// import { HashRouter } from 'react-router-dom';
import Links from './routes/Links';
// import {Link} from "react-router-dom"
import Header from './components/nav/Header'

const App = () => {
  return (
    <HashRouter>
      <Header/>
      <Links/>
    </HashRouter>
  );
}

export default App
