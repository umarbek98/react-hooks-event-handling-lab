import React from "react";

// Code Keypad Component Here

function Keypad (){
    function handleChange(e){
        console.log('Entering password...')
    }
    return (
        <div>
            <input onChange={handleChange} type='password' placeholder="Enter Password"/>
        </div>
    )
}

export default Keypad;