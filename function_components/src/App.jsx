import { useState } from 'react'

// export default function App(){
//   const [input, setInput] = useState('')
//   const handleinput = (e) => {
//     setInput(e.target.value)
//   }
//   return(
//     <>
//   <form>
//     <input type="text" name="demo" id="demo" value={input} onChange={handleinput} />
//   </form>
//   {input}
//     </>
//   )
// }

export default function App(){
  const [list, setList] = useState([])
  const [input, setInput] = useState({name:'',age:''})
  const handleInput = (e) => {
        console.log(e.target);
        const {name, value} = e.target
        setInput((prv)=>({...prv, [name]:value}))
        console.log(input);
      }
      return(
      <>
        <form>
          <input type="text" name="name" id="name"  placeholder='name' value={input.name} onChange={handleInput} />
          <input type="number" name="age" id="age" placeholder='age'  value={input.age} onChange={handleInput} />
          <input type="submit" value="Add" />
        </form>
            </>
            )
}

