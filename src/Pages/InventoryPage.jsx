import React from "react";
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
      name: "212 VIP Black",
      image: "/images/212-vip-black.png",
      sizes: ["50ml", "100ml", "250ml"],
    },
    {
      id: 2,
      name: "212 Men Aqua",
      image: "/images/212-men-aqua.png",
      sizes: ["50ml", "100ml", "250ml"],
    },
    {
      id: 3,
      name: "212 VIP Men",
      image: "/images/212-vip-men.png",
      sizes: ["50ml", "100ml", "250ml"],
    },
  ];

  const handleSaveProduct = () => {
    console.log("Product saved");
  }

  return (
    <Box p={100}>
      {/* Barra de búsqueda */}
      <Input placeholder="Buscar..." mb={25} />

      <Flex direction={{ base: "column", md: "row" }} gap={8}>
        {/* Sección de Filtros */}
        <VStack align="start" w={{ base: "100%", md: "25%" }} spacing={4}>
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
            <Select placeholder="Selecciona una marca">
              <option value="carolina-herrera">Carolina Herrera</option>
              <option value="dior">Dior</option>
            </Select>
          </Box>
          <Box>
            <Text fontWeight="bold">Cantidad:</Text>
            <Select placeholder="Selecciona orden">
              <option value="asc">Menor a mayor</option>
              <option value="desc">Mayor a menor</option>
            </Select>
          </Box>
          <Button colorScheme="blue">Aplicar filtros</Button>
        </VStack>

        <Box flex="1">
          <Heading size="lg" mb={4}>
            Carolina Herrera
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
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
    </Box>
  );
};

export default InventoryPage;
