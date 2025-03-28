import { useState } from "react"

const ItemList = () => {
    const [items, setItems] = useState(['Apple', 'Banana', 'Cherry'])
  
    return (
        <ul>
            {items.map((item, index) => (
                <li 
                  key={index}
                >
                  {item}
                </li> 
            ))}
        </ul>
    )
}

export default ItemList