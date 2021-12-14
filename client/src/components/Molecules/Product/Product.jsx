import { FaInfoCircle } from "react-icons/fa"
import { RiDeleteBin7Fill } from "react-icons/ri"
import Button from "../../Atoms/Button/Button";

import * as Styled from "./Product.styled"

const Product = ({id, name, price, image}) => {
  return (
    <Styled.Container>
      <Styled.Image src={image}></Styled.Image>
      <Styled.Text>{name}</Styled.Text>
      <Styled.Footer>
        <Styled.Text>$ {price.toFixed(2)}</Styled.Text>
        <Styled.Actions>
          <Button variant="icon"><RiDeleteBin7Fill /></Button>
          <Button variant="icon"><FaInfoCircle /></Button>
        </Styled.Actions>
      </Styled.Footer>
    </Styled.Container>
  )
}

export default Product;