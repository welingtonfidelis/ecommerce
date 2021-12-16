import { maskValue } from "../../../util";
import Button from "../../Atoms/Button/Button";

import * as Styled from "./ProductDetail.styled";

const OrderDetail = ({ detailedProduct, onClose }) => {
  const { id, name, description, image, price } = detailedProduct;

  return (
    <Styled.Container>
      <Styled.Text>Produto nº {id}</Styled.Text>
      <Styled.Text>{name}</Styled.Text>
      <Styled.Image src={image} />

      <Styled.Text>{maskValue(price)}</Styled.Text>

      <Styled.DescriptionContainer>
        <Styled.Text>{description}</Styled.Text>
      </Styled.DescriptionContainer>

      <Styled.ButtonContainer>
        <Button onClick={onClose}>Fechar</Button>
      </Styled.ButtonContainer>
    </Styled.Container>
  );
};

export default OrderDetail;
