import React from 'react';

export const ChildComponent = ({ count, setCount }) => {
    return (
        <button 
            onClick={() => setCount(count + 1)}
            // style={{
            //     padding: '10px 15px',
            //     fontSize: '16px',
            //     borderRadius: '5px',
            //     backgroundColor: '#007bff',
            //     color: 'white',
            //     border: 'none',
            //     cursor: 'pointer',
            // }}
        >
            Increment
        </button>
    )
}