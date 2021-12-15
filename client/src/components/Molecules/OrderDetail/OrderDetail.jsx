import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri"
import Button from "../../Atoms/Button/Button"

import * as Styled from "./OrderDetail.styled"

const OrderDetail = ({isAdmin, detailedOrder, onClose}) => {
  console.log(isAdmin, detailedOrder)
  const {user, products, order} = detailedOrder
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Text>Pedido nº {order.id}</Styled.Text>
        <Styled.Text>Status: {order.approved ? <RiCheckboxCircleFill/> : <RiCheckboxBlankCircleLine/>}</Styled.Text>
      </Styled.Header>
      {isAdmin > 0 &&
        <Styled.Client>
          <Styled.Text>{user.name}</Styled.Text>
        </Styled.Client>
      }
      <Button onClick={onClose}>Fechar</Button>
    </Styled.Container>
  )
}

export default OrderDetail