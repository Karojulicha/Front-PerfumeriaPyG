/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { Box } from "@chakra-ui/react";
import "./header.css";
import { useEffect, useMemo, useState } from "react";

const Header = ({}) => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://localhost:7075/api/perfume");
        setProducts(response.data);
      } catch (err) {
        setError("Error al cargar perfumes");
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  return (
    <div className="main__header">
      <img
        className="main__header_img"
        src="./img/portada_1.jpg"
        alt="img_frond_page"
      ></img>
      <div className="main__header_text">
        <h2 className="main__header_h2">
          Descubre tu aroma perfecto, ¡Tu aroma, tu firma!
        </h2>
        <br />
      </div>
      <div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="main__header_input"
          type="text"
          placeholder="Busca tu fragancia"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Box>
          <ul>
            {filteredProducts.map((product) => {
              <il key={product.id}>product.name</il>;
            })}
          </ul>
        </Box>
      </div>
    </div>
  );
};

export default Header;
