import { useState } from 'react';



const Counter = () => {
    let [count, setCount] = useState(0);
    return (
        <section className='counter'>
            <h1 className='counter__hl'>COUNTER: {count}</h1>
            <button className='counter__btn' onClick={() => setCount(count + 1)}>+1</button>
            <button className='counter__btn' onClick={() => setCount(count - 1)}>-1</button>
            <button className='counter__btn counter__btn--reset' onClick={() => setCount(count = 0)}>reset</button>
        </section>
    );
};

export default Counter;