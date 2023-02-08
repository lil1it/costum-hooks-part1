import { useState} from "react";

const useCounter = (initialState , incrementLevel , decrementLevel) => {
  const [counter, setCounter] = useState(initialState || 0);

const resetHandler = ()=>{
    setCounter (0)
}

  const increment = () => {
   

      setCounter((prevCounter) => prevCounter + (incrementLevel || 1));
    } 
    
    const decrement =()=> {

    


      setCounter((prevCounter) => {
        if (prevCounter > 0 ) {
          return (prevCounter - (decrementLevel || 1));
        }
        return prevCounter;
      });
    }


    //
  
  return { counter , increment , decrement ,resetHandler}
};

export default useCounter;
