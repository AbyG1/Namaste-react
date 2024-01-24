import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'

function SecondPage() {

    const navigate = useNavigate();

    const goTo = (button) => {
      if (button === 1) {
        navigate('/condition/1');
      } else {
        navigate('/condition/2');
      }
    };
    
  return (
    <>
        <Link to="/"><button>Go back</button></Link>

        <div>
            <h3>
                React Router is a library for navigating between different components in a React application. It's commonly used for creating single-page applications (SPAs) with multiple views.
            </h3>

            <div>
                    <button onClick={() => goTo(1)}>Button 1</button>
                    <button onClick={() => goTo(2)}>Button 2</button>

            </div>

        </div>
          
    
    </>
  
  )
}

export default SecondPage