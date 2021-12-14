import { useEffect, useState, useCallback  } from "react"
import Button from "../../components/Atoms/Button/Button"
import Form from "../../components/Atoms/Form/Form"
import TextInput from "../../components/Atoms/TextInput/TextInput"
import Grid from "../../components/Molecules/Grid/Grid"
import * as Styled from "./Products.styled"
import { api } from "../../services/api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Products = () => {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [products, setProducts] = useState([])

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await api.post("/products", {
          name: name,
          image: image,
          price: price,
          description: description,
      });

      if (data && data.id) {
        toast.success('Successfully registered product', {
          position: "top-right",
        });

        setName("");
        setImage("");
        setPrice("");
        setDescription("");
        fetchProductsHandler();
      }
    } catch (error) {
      toast.error('An error occurred', {
        position: "top-right",
      });
    }
  }

  const fetchProductsHandler = useCallback(async () => {
    const { data } =  await api.get('http://localhost:3001/products')
    setProducts(data);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);


  return (
    <Styled.Main>
      <h1>Product Registration</h1>
      <Styled.Container>
        <Styled.FormContainer>
          <Form onSubmit={onSubmit} direction="column">
            <TextInput 
              label="Product's name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextInput 
              label="Image URL" 
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <TextInput 
              label="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <TextInput 
              as="textarea"
              rows={4}
              label="Description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <Button variant="contained" type="submit">Register</Button>
          </Form>
        </Styled.FormContainer>
        <Grid products={products}/>
      </Styled.Container>
    </Styled.Main>
  )
}

export default Products