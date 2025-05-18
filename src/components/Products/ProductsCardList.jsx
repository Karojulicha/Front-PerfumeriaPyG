/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import React from "react";
import ProductsCard from "./productsCard";
import { CardHeader, Flex, Grid, Heading } from "@chakra-ui/react";

const ProductsCardList = ({ products, addToCart }) => {
  return (
    <Grid gap={4} textAlign="center" p="20">
      <Heading as="h3" size="lg" fontFamily="fantasy">
        Perfumes recientes
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" alignItems={""}>
        <ProductsCard/>
        <ProductsCard />
        <ProductsCard />
      </Grid>
      <Heading as="h3" size="lg" fontFamily="fantasy">
        Perfumes nuevos
      </Heading>
      <Grid
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignContent="center"
        width="full"
        height="400px"
      >
        <ProductsCard />
        <ProductsCard />
        <ProductsCard />
      </Grid>
    </Grid>
  );
};

export default ProductsCardList;
