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
  const [error, setError] = useState({name: false, email: false, password: false, passwordCheck: false})
  const navigate = useNavigate();

  const checkForErrors = () => {
    let errorPayload = {};
    Object.assign(errorPayload, error);

    if(name.length === 0) {
      errorPayload.name = true
    }
    if(email.length === 0) {
      errorPayload.email = true
    }
    if(password.length === 0) {
      errorPayload.password = true
    }
    if(passwordCheck.length === 0) {
      errorPayload.passwordCheck = true
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
          error={error.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => clearErrorField("name")}
        />
        <TextInput 
          label="E-mail" 
          error={error.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => clearErrorField("email")}
        />
        <TextInput 
          label="Password" 
          error={error.password}
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => clearErrorField("password")}
        />
        <TextInput 
          label="Re-enter password" 
          error={error.passwordCheck}
          value={passwordCheck}
          type="password"
          onChange={(e) => setPasswordCheck(e.target.value)}
          onFocus={() => clearErrorField("passwordCheck")}
        />
        <Button type="submit">Register</Button>
      </Form>
    </Styled.Container>
  )
}

export default Register