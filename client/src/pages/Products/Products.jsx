import { useState } from "react"
import Button from "../../components/Atoms/Button/Button"
import Form from "../../components/Atoms/Form/Form"
import TextInput from "../../components/Atoms/TextInput/TextInput"
import * as Styled from "./Products.styled"

const Products = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  function onSubmit(event) {
    event.preventDefault()
    console.log(name, price, description)
  }

  return (
    <Styled.Container>
      <h1>Cadastro de Produtos</h1>
      <Form onSubmit={onSubmit} direction="column">
        <TextInput 
          label="Nome do produto" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput 
          label="Preço" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextInput 
          label="Descrição" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Styled.Container>
  )
}

export default Products