import { useState } from "react"
import Button from "../../components/Atoms/Button/Button"
import Form from "../../components/Atoms/Form/Form"
import TextInput from "../../components/Atoms/TextInput/TextInput"
import * as Styled from "./Register.styled"
import { api } from "../../services/api";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("")
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault()

    if (password !== passwordCheck) {
      toast.error('Passwords must match.', {
        position: "top-right",
      });
      return;
    }

    try {
      const { data } = await api.post("/users", {
          name: name,
          email: email,
          password: password,
          is_admin: false
      });

      if (data && data.id) {
        toast.success('Successfully registered user account', {
          position: "top-right",
        });
        navigate("/signin");
      }
    } catch (error) {
      toast.error('An error occurred', {
        position: "top-right",
      });
    }
  }

  return (
    <Styled.Container>
      <h1>Create Account</h1>
      <Form onSubmit={onSubmit} direction="column">
        <TextInput 
          label="Your Name" 
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
          label="Password" 
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <TextInput 
          label="Re-enter password" 
          value={passwordCheck}
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
          required
        />
        <Button type="submit">Register</Button>
      </Form>
    </Styled.Container>
  )
}

export default Register