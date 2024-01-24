

import Home from './Home'

import { Route, Routes } from 'react-router-dom'
import SecondPage from './SecondPage'
import Condition from './Condition'

function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='second' element={<SecondPage></SecondPage>}></Route>
          <Route path='condition/:id' element={<Condition></Condition>}></Route>
      </Routes>
     
    </>
  )
}

export default App
