import { useState, useEffect } from 'react';

function useConsoledState(initialValue) {
    const [value, setValue] = useState(initialValue);


    useEffect(()=>{
        console.log(value);
    }, [value])

    return [value, setValue];
}

export default useConsoledState;
