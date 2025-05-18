/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { Box, Image, Text, Button, HStack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@mui/material";

export const InventoryProductCard = ({ product }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      boxShadow="sm"
    >
      <Image src={product.image} alt={product.name} mb={3} />
      <Text fontWeight="bold" fontSize="lg" mb={2}>
        {product.name}
      </Text>
      <Text mb={2}>Tamaño:</Text>
      <RadioGroup defaultValue={product.sizes[0]} mb={3}>
        <HStack spacing={4}>
          {product.sizes.map((size) => (
            <Radio key={size} value={size}>
              <Text>{size}</Text>
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
      <Button color="teal" width="full">
        Agregar otro tamaño
      </Button>
    </Box>
  );
};
