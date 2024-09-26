import { useState } from 'react';
import './App.css';
import { PrimaryInput} from './components/Input/PrimaryInputs';
import { Button, Spacer } from '@chakra-ui/react';
import { useIdentityMutation } from './hooks/useIdentityMutation';


function App() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const {mutate} = useIdentityMutation()
  
  const submit = () => {
    const { email, firstName, lastName } = formData;
    mutate({
      email,
      firstName,
      lastName,
    });
  };
  

  return (
    
    <div className='container'>
      <form>

      <div className='name-form-container'>
        <Spacer height="4" />
        <PrimaryInput
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
          label="Nome"
          placeholder="Digite seu nome"
        />

        <PrimaryInput
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
          label="Sobrenome"
          placeholder='Digite seu Sobrenome'
        />
      </div>
      <PrimaryInput
        value={formData.email}
        onChange={handleChange}
        name="email"
        label="E-mail"
        placeholder='Digite seu email'
      />
      <Spacer height="4" />
      <Button onClick={submit}>Enviar</Button>

      </form>
      <Spacer width="4" maxWidth="4"/>
      <div className="product-details">
        <h2>Assinatura Mensal</h2>
        <Spacer height="4"/>
        <p>Você irá pagar</p>
        <span>R$ 250</span>
        <Spacer height="4"/>
        <p>Regras: Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel praesentium expedita earum, distinctio reprehenderit accusantium a rem nobis vero alias beatae! Est sint et itaque eius quam eveniet expedita quidem!</p>
      </div>
    </div>
  );
}

export default App;


