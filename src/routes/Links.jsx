import {Routes, Route} from 'react-router-dom'
import Home from '../components/pages/Home'
import Albums from '../components/pages/Albums'
import {Link} from "react-router-dom"

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/albums' element={<Albums/>}/>
    </Routes>
  )
}

export default Links