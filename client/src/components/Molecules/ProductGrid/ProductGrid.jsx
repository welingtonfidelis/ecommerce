import { useEffect, useState } from "react";
import TextInput from "../../Atoms/TextInput/TextInput";
import Product from "../Product/Product";
import { useProduct } from "../../../store/product-context";
import * as Styled from "./ProductGrid.styled";

const Grid = () => {
  const [search, setSearch] = useState("");
  const { list, onGetList } = useProduct();

  useEffect(() => {
    onGetList();
  }, [onGetList]);

  return (
    <Styled.Container>
      <TextInput
        label="Buscar Produto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Styled.Grid>
        {list && list.filter(l => l.name.toLowerCase().includes(search.toLocaleLowerCase())).map((item) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
          />
        ))}
      </Styled.Grid>
    </Styled.Container>
  );
};

export default Grid;
