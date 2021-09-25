import React from 'react';
import './Details.css'

const Details = (props) => {
    const {strMeal} = props.count
    return (
            <div className='details'>
                <ul>
                    <li>{strMeal}</li>
                </ul>
             </div>
    );
};

export default Details;