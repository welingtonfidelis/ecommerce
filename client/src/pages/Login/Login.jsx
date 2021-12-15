import { useState } from "react"
import Button from "../../components/Atoms/Button/Button"
import Form from "../../components/Atoms/Form/Form"
import TextInput from "../../components/Atoms/TextInput/TextInput"
import { useAuth } from '../../store/auth-context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import * as Styled from "./Login.styled"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState({email: false, password: false})
  const { onLogin } = useAuth();

  const checkForErrors = () => {
    let errorPayload = {};
    Object.assign(errorPayload, error);

    if(email.length === 0) {
      errorPayload.email = true
    }
    if(password.length === 0) {
      errorPayload.password = true
    }

    setError(errorPayload)

    if(Object.values(errorPayload).some(item => item)) {
      return true
    }

    return false
  }

  const clearErrorField = (field) => {
    setError(prevState => { return {...prevState, [field]: null}})
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    if(checkForErrors()) {
      return
    }

    try {
      await onLogin({
        email: email,
        password: password,
      });

    } catch (error) {
      toast.error('Invalid e-mail or password', {
        position: "top-right",
      });
    }
  }

  return (
    <Styled.Container>
      <h1>Signin</h1>
      <Form onSubmit={onSubmit} direction="column">
        <TextInput 
          label="E-mail" 
          error={error.email}
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => clearErrorField("email")}

        />
        <TextInput 
          label="Senha" 
          error={error.password}
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => clearErrorField("password")}
        />
        <Button type="submit">Entrar</Button>
        <p>Ainda não tem uma conta? <a href="/register">Registre-se aqui</a></p>
      </Form>
    </Styled.Container>
  )
}

export default Login