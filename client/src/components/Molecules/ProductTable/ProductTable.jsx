import { FaTrashAlt } from "react-icons/fa";

import { maskValue } from "../../../util";

import * as Styled from "./ProductTable.styled"

const ProductTable = ({list, onRemoveAction}) => {
  return (
    <Styled.TableContainer>
          <Styled.Table>
            <tr>
              <Styled.TableTh>Imagem</Styled.TableTh>
              <Styled.TableTh>Nome</Styled.TableTh>
              <Styled.TableTh>Preço</Styled.TableTh>
              <Styled.TableTh>Quantidade</Styled.TableTh>
              {onRemoveAction && <Styled.TableTh>Ação</Styled.TableTh>}
            </tr>
            {list.map((product) => {
              return (
                <tr>
                  <Styled.TableTd width={"10%"}>
                    <img src={product.image} alt={product.name} image />
                  </Styled.TableTd>
                  <Styled.TableTd>{product.name}</Styled.TableTd>
                  <Styled.TableTd width={"15%"}>
                    {maskValue(product.price)}
                  </Styled.TableTd>
                  <Styled.TableTd width={"10%"}>
                    {product.quantity}
                  </Styled.TableTd>
                  {onRemoveAction &&
                    <Styled.TableTd width={"10%"}>
                      <FaTrashAlt
                        title="Remover do carrinho"
                        onClick={() => onRemoveAction(product.id)}
                      />
                    </Styled.TableTd>
                  }
                </tr>
              );
            })}
          </Styled.Table>
        </Styled.TableContainer>
  )
}

export default ProductTable;