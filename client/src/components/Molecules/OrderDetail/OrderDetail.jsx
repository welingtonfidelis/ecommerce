import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from "react-icons/ri"
import { useOrder } from "../../../store/order-context"

import Button from "../../Atoms/Button/Button"
import ProductTable from "../ProductTable/ProductTable"

import * as Styled from "./OrderDetail.styled"

const OrderDetail = ({isAdmin, detailedOrder, onClose}) => {
  const {user, products, order} = detailedOrder
  const { onApproveOrder } = useOrder()

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
      <ProductTable list={products} />
      <Styled.ActionsContainer>
        {(isAdmin > 0 && order.approved === false) && <Button onClick={() => onApproveOrder(order.id)}>Aprovar Pedido</Button>}
        <Button onClick={onClose}>Fechar</Button>
      </Styled.ActionsContainer>
    </Styled.Container>
  )
}

export default OrderDetail