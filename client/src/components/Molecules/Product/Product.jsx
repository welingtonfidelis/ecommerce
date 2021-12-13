import { FaInfoCircle } from "react-icons/fa"
import { RiDeleteBin7Fill } from "react-icons/ri"
import Button from "../../Atoms/Button/Button";

import * as Styled from "./Product.styled"

const Product = ({id, name, value, image}) => {
  return (
    <Styled.Container>
      <Styled.Image src={image}></Styled.Image>
      <Styled.Name>{name}</Styled.Name>
      <Styled.Actions>
        <Button variant="icon"><RiDeleteBin7Fill /></Button>
        <Button variant="icon"><FaInfoCircle /></Button>
      </Styled.Actions>
    </Styled.Container>
  )
}

export default Product;