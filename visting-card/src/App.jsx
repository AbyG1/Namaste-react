
import React, { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function App() {

  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  
  const [submit,setSubmit] = useState(false)

  const displayValue = () => {
    setSubmit(true)
  }

  return (
    <>
        <main>
            <div className="container ">
              <div className="one">
              <TextField  onChange= {(e) => {setName(e.target.value)}} id="outlined-basic" label="Name" variant="outlined" />
              </div>
              
              <div className="one">
                <TextField  id="outlined-basic" onChange={(e) => {setAge(e.target.value)}} label="Age" variant="outlined" />
              </div>
              <div className="one">
                <Button  onClick={displayValue}variant="contained">Submit</Button>
                </div>
            </div>

            <div className="container ">
                <h4>Visiting Card</h4>
                <p>Name: {submit && (
                  <>
                  {name}
                  </>
                 )}</p>
                  <p>Age: {submit && (
                  <>
                  {age}
                  </>
                 )}</p>
            </div>

        </main>


      
    </>
  )
}

export default App
