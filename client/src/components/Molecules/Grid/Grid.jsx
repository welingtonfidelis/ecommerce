import { useState } from "react"
import TextInput from "../../Atoms/TextInput/TextInput"
import Product from "../Product/Product"
import * as Styled from "./Grid.styled"

const Grid = ({products}) => {
  const [search, setSearch] = useState("")
  return (
    <Styled.Container>
      <TextInput  
        label="Search products" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Styled.Grid>
        {products && products.filter(p => p.name.toLowerCase().includes(search.toLocaleLowerCase())).map(item => <Product key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} />)}
      </Styled.Grid>
    </Styled.Container>
  )
}

export default Grid