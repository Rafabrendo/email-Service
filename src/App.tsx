import { SetStateAction, useState } from 'react'
import './App.css'
import PrimaryInput from './components/Input/PrimaryInputs'

function App() {
  const [email, setEmail] = useState('')
  


  return (
    <div className='container'>

      <PrimaryInput 
        value={email} 
        onChange={event => setEmail(event.target.value)} 
        name="email"
        label='Digite seu e-mail' 
      />
    </div>
  )
}

export default App
