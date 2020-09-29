import React, { useContext } from 'react';
import { SmurfContext } from '../context/smurfcontext';


const SmurfList = () => {
    const smurfs = useContext(SmurfContext);

    return (
        <div className="smurf-list">
            <>
            <div>
            {smurfs.map(char => (
                <h3 key ={char.key}>Hola. Soy {char.name}. Tengo {char.age} años y tengo {char.height} de altura!</h3>
                ))}            
                </div>
            </>
            </div>
        );
    };
    export default SmurfList;