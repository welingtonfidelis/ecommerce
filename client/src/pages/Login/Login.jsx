import { useState } from "react"
import Button from "../../components/Atoms/Button/Button"
import Form from "../../components/Atoms/Form/Form"
import TextInput from "../../components/Atoms/TextInput/TextInput"
import * as Styled from "./Login.styled"
import { useAuth } from '../../store/auth-context';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { onLogin } = useAuth();

  const onSubmit = async (event) => {
    event.preventDefault()

    try {
      await onLogin({
        email: email,
        password: password,
      });

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Styled.Container>
      <h1>Fazer Login</h1>
      <Form onSubmit={onSubmit} direction="column">
        <TextInput 
          label="E-mail" 
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextInput 
          label="Senha" 
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Acessar</Button>
      </Form>
    </Styled.Container>
  )
}

export default Login