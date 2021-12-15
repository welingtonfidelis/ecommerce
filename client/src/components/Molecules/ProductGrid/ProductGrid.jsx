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
        {list.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </Styled.Grid>
    </Styled.Container>
  );
};

export default Grid;
