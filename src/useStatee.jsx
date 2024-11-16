import { useState } from "react";

function App2(){

     let [counter , setCounter] = useState(true)

    const TrueFalse = () => {
       console.log(counter)
       if (counter === true){
           setCounter(false)
       }else if (counter === false){
           setCounter(true);
       }
    }
    
    function TrueFals(){
        return 10000;
    }
    
    
    return(
    <>
        <h1> Monika Chahar </h1>
        <h2> counter Value: {counter===true?"True":"False"} </h2>
        <button onClick = {TrueFalse} >   Change Value  </button>
    </>
    );

    
}

export default App2;