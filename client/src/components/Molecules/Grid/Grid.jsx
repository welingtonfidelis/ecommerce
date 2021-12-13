import { useEffect, useState } from "react"
import TextInput from "../../Atoms/TextInput/TextInput"
import Product from "../Product/Product"
import * as Styled from "./Grid.styled"

const Grid = () => {
  const [search, setSearch] = useState("")
  const [list, setList] = useState([])

  useEffect(() => {
    const tmpArray = [];

    for (let i = 1; i <= 11; i += 1) {
      tmpArray.push({
        id: i,
        name: "Produto " + i,
        value: 2.5,
        quantity: i,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
      });
    }

    setList(tmpArray);
  }, []);

  return (
    <Styled.Container>
      <TextInput  
        label="Search products" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Styled.Grid>
        {list.map(item => <Product key={item.id} id={item.id} name={item.name} price={item.value} image={item.image} />)}
      </Styled.Grid>
    </Styled.Container>
  )
}

export default Grid