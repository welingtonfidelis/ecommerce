import { FaInfoCircle } from "react-icons/fa"
import { RiDeleteBin7Fill } from "react-icons/ri"
import Button from "../../Atoms/Button/Button";
import { useCart } from "../../../store/cart-context"

import * as Styled from "./Product.styled"

const Product = ({id, name, value, image}) => {
  const { onAddToCart } = useCart();

  return (
    <Styled.Container>
      <Styled.Image src={image}></Styled.Image>
      <Styled.Text>{name}</Styled.Text>
      <Styled.Footer>
        <Styled.Text>$ {value.toFixed(2)}</Styled.Text>
        <Styled.Actions>
          <Button variant="icon" onClick={() => onAddToCart({ id, name, value, image })}><RiDeleteBin7Fill /></Button>
          <Button variant="icon"><FaInfoCircle /></Button>
        </Styled.Actions>
      </Styled.Footer>
    </Styled.Container>
  )
}

export default Product;