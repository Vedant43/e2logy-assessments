import { useState } from 'react'
import { ParentComponent } from './components/ParentComponent';

const App = () => {
  const [count, setCount] = useState(0)

  return (
      <div>
          <h1>Counter: {count}</h1>
          <ParentComponent count={count} setCount={setCount} />
      </div>
  );
};

export default App
