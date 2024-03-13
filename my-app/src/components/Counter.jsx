import React,{useState,useEffect} from 'react'

function Counter() {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log('MOUNTING>>>');
        console.log('Updating'+count);
    },[count])
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Count</button>
            <h1>
                Helloo {count}
            </h1>
        </div>
    )s
    }

export default Counter
