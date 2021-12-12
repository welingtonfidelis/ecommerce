import { useState } from "react"
import Button from "../../components/Atoms/Button/Button"
import Form from "../../components/Atoms/Form/Form"
import TextInput from "../../components/Atoms/TextInput/TextInput"
import * as Styled from "./Register.styled"
import { api } from "../../services/api";
import { useNavigate } from "react-router";

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("")
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault()

    if (password !== passwordCheck) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      const { data } = await api.post("/users", {
          name: name,
          email: email,
          password: password,
          isAdmin: false
      });

      if (data && data.id) {
        alert("Conta criada com sucesso");
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Styled.Container>
      <h1>Criar Conta</h1>
      <Form onSubmit={onSubmit} direction="column">
        <TextInput 
          label="Seu Nome" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <TextInput 
          label="Insira a senha nova mais uma vez" 
          value={passwordCheck}
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
          required
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Styled.Container>
  )
}

export default Register