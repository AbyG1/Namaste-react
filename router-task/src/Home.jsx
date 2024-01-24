import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import reactLogo from './assets/react.svg'

function Home() {
  return (
        <>
            <div>
            
                            <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} className="logo react" alt="React logo" />
                            </a>

                            <div>
                                <Link to={'/second'}>
                                    <button>Click Me</button>
                                </Link>
                               

                                <h3>to see react router in action!</h3>
                             </div>
        
         </div>
        
        
        
        </>
  )
}

export default Home