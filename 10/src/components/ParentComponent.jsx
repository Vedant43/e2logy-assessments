import React from 'react';
import { ChildComponent } from './ChildComponent';

export const ParentComponent = ({ count, setCount }) => {
    return (
        <div>
            <ChildComponent count={count} setCount={setCount} />
        </div>
    )
}