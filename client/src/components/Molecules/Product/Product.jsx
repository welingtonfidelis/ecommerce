import { FaInfoCircle } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";
import Button from "../../Atoms/Button/Button";
import { useCart } from "../../../store/cart-context";
import ProductDetail from "../../Molecules/productDetail/ProductDetail";
import Modal from "../../Atoms/Modal/Modal";

import * as Styled from "./Product.styled";
import { useState } from "react";
import { maskValue } from "../../../util";

const Product = ({ id, name, price, image, description }) => {
  const [showModal, setShowModal] = useState(false);
  const { onAddToCart } = useCart();

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <Styled.Container>
        <Styled.Image src={image}></Styled.Image>
        <Styled.Text>{name}</Styled.Text>
        <Styled.Footer>
          <Styled.Text>{maskValue(price)}</Styled.Text>
          <Styled.Actions>
            <Button
              variant="icon"
              onClick={() => onAddToCart({ id, name, price, image, description })}
            >
              <RiAddCircleFill />
            </Button>
            <Button variant="icon" onClick={handleShowModal}>
              <FaInfoCircle />
            </Button>
          </Styled.Actions>
        </Styled.Footer>
      </Styled.Container>

      <Modal isActive={showModal}>
      <ProductDetail detailedProduct={{id, name, price, image, description}} onClose={handleShowModal} />
      </Modal>
    </>
  );
};

export default Product;
