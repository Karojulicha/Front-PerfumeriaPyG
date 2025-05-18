/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import {
  Box,
  Flex,
  Input,
  Button,
  Text,
  Grid,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { InventoryProductCard } from "../components/Inventory/InventoryProductCard";
import ProductFormModal from "../components/Inventory/ProductFormModal";
import { Select } from "@mui/material";

const InventoryPage = () => {
  const products = [
    {
      id: 1,
      name: "Dulce gabanna",
      image: "../../img/producto_1.jpg",
      sizes: ["50ml", "100ml", "250ml"],
    },
    {
      id: 2,
      name: "Dulce gabanna",
      image: "../../img/producto_2.jpg",
      sizes: ["50ml", "100ml", "250ml"],
    },
    {
      id: 3,
      name: "Dulce gabanna",
      image: "../../img/producto_3.jpg",
      sizes: ["50ml", "100ml", "250ml"],
    },
  ];

  const handleSaveProduct = () => {
    console.log("Product saved");
  };

  return (
    <Box pt={100}>
      <Grid direction={{ base: "column", md: "row" }} gap={8} p={10}>
        {/* Barra de búsqueda */}
        <Input placeholder="Buscar..." mb={20} />
        <Flex direction={{ base: "column", md: "row" }}>
          {/* Sección de Filtros */}
          <VStack align="start" w={{ base: "100%", md: "20%" }} spacing={4}>
            <Heading size="md">Filtro</Heading>
            <Box>
              <Text fontWeight="bold">Categoría:</Text>
              <Select placeholder="Selecciona una categoría">
                <option value="perfume">Perfume</option>
                <option value="cologne">Colonia</option>
              </Select>
            </Box>
            <Box>
              <Text fontWeight="bold">Marca:</Text>
              <Select placeholder="Selecciona una marca" w="full">
                <option value="carolina-herrera">Carolina Herrera</option>
                <option value="dior">Dior</option>
              </Select>
            </Box>
            <Box>
              <Text fontWeight="bold">Cantidad:</Text>
              <Select placeholder="Selecciona orden" w="full">
                <option value="asc">Menor a mayor</option>
                <option value="desc">Mayor a menor</option>
              </Select>
            </Box>
            <Button color="blue">Aplicar filtros</Button>
          </VStack>

          <Box flex="1">
            <Heading size="lg" mb={4}>
              Carolina Herrera
            </Heading>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={6}
            >
              {products.map((product) => (
                <InventoryProductCard key={product.id} product={product} />
              ))}
            </Grid>
            {/* <ProductFormModal
            isOpen={"isOpen"}
            onClose={"onClose"}
            onSave={handleSaveProduct}
            product={products}
            /> */}
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
};

export default InventoryPage;
