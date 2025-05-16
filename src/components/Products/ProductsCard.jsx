/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  SmallCloseIcon,
  Text,
} from "@chakra-ui/icons";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const ProductsCard = ({
  product,
  addToCart,
  hasDescription = false,
  widthImg,
  heightImg,
}) => {
  return (
    <Grid w="30%" h="30%">
      <Box margin="2">
        <Image
          width={widthImg}
          height={heightImg}
          className="cart__product_img"
          src={
            "https://sp.victoriassecret.com/p/380x507/tif/62/09/620970966f984559b80ea0c21f658445/111893792457_OF_F.jpg"
          }
          alt=""
        />
      </Box>
      <Box margin="2">
        <Text fontSize="md" fontWeight="bold">
          {"Susurros de Noche"} {"100"}ml
        </Text>
        {hasDescription && (
          <Text fontSize="md">
            {
              "Susurros de Noche es un perfume que captura la esencia de una velada mágica. Es ideal para una noche de gala o una cena romántica, evocando emociones y dejando una impresión duradera. Perfecto para quienes buscan una fragancia que combine frescura y sensualidad."
            }
          </Text>
        )}

        <Text fontSize="md">Precio {"123.000"}</Text>

        <Button gap="3" margin="2">
          <IoCartOutline />
          Añadir al carrito
        </Button>
      </Box>
    </Grid>
  );
};

export default ProductsCard;
