import React from "react";

function EyesOnMe() {
    function handleBlur(e){
        console.log('Hey! Eyes on me!')
    }
    function handleFocus(e){
        console.log('Good!')
    }
    return(
        <button onFocus={handleFocus} onBlur={handleBlur}>'Eyes on me'</button>
    )
}

export default EyesOnMe;