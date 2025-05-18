/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import Header from "../components/Header/Header";
import ProductsCardList from "../components/Products/ProductsCardList";

export const HomePage = () => {
  const products = {
    id: 1,
    name: "Product 1",
    price: 10.99,
  };

  return (
    <div>
      <Header cart={0} />
      <ProductsCardList products={products} />
    </div>
  );
};
