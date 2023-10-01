import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,mycount } from './Myslider';

function Myreduxpage() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button className='btn btn-primary'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className='p-3 h2'>{count}</span>
        <button className='btn btn-primary'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button className='btn btn-primary'
          aria-label="Decrement value"
          onClick={() => dispatch(mycount())}
        >
          custom function
        </button>
      </div>
    </div>
  )
}

export default Myreduxpage