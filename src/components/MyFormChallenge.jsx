import { useRef, useState} from 'react';
import BoxColor from "./BoxColor";

function MyForm() {
  const [value, setValue] = useState('');
  const inputRef = useRef('');
  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  return (
    <>
      <input 
        type='text'
        placeholder='choose a color'
        value={value}
        ref={inputRef}
        onChange={() => setValue(inputRef.current.value)}
      />
      <div className="container">
        {colors.map((color, index) => (
            <BoxColor key={index} color={color} value={value} />
        ))}
      </div>

    </>
  )
}
export default MyForm;
