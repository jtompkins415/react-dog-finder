import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './DogDetails.css'



const DogDetails = ({dog}) => {
    if (!dog) return <Redirect to="/dogs" />

    return (
      <div className='DogDetails'>
        <div>
          <img className="DogDetails-img"src={dog.src} alt={dog.name} />
          <h2>{dog.name}</h2>
          <h3>Age: {dog.age}</h3>
            {dog.facts.map((fact, i) => (
              <p key={i}>{fact}</p>
            ))}
          <Link to="/dogs">Back to dogs</Link>
        </div>
      </div>
    )
}

export default DogDetails;