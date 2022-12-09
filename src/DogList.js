import React from 'react';
import {NavLink } from 'react-router-dom';
import './DogList.css'

const DogList = ({dogs}) => {
    return (
        <div className='DogList'>
            <div className='row'>
                <div>
                    <h1 className='text-center'> DOGS FOR ADOPTION! CLICK FOR MORE DETAILS</h1>
                </div>
            </div>
            <div className='row'>
                {dogs.map(d => (
                    <div className='col-text-center' key={d.name}>
                        
                        <h3 className='mt-3'>
                            <NavLink to={`/dogs/${d.name.toLowerCase()}`}>
                                {d.name}
                            </NavLink>
                        </h3>
                        <img src={d.src} alt={d.name}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DogList;