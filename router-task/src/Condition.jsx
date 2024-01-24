import React from 'react'
import { Link, useParams } from 'react-router-dom'


function Condition() {

    const {id} = useParams()

  return (
        <>

            <h2>You clicked Button {id}</h2>
            <Link to={'/second'}>
                <button>Go Back</button>
            </Link>
            
        </>
  )
}

export default Condition