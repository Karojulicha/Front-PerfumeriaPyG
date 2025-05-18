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
  Text,
} from "@chakra-ui/icons";
import { IoCartOutline } from "react-icons/io5";

const ProductsCard = ({
  product,
  addToCart,
  hasDescription = false,
  widthImg,
  heightImg,
}) => {

  const price = 123000;
  const discount = 30;
  const percentagePrice = price * (discount / 100); 
  const priceWithOffert = price - percentagePrice;
  return (
    <Grid>
      <Flex justifyContent={"center"}>
        <Image
          width={widthImg}
          height={heightImg}
          className="cart__product_img"
          src={"../../../img/fragancia_2.jpg"}
          alt=""
        />
      </Flex>
      <Box>
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

        <Text fontSize="lg">Precio: ${priceWithOffert}</Text>
        <Text fontSize="md" textDecoration="line-through">
          ${price}
        </Text>

        <Button gap="3" margin="2" color={"gray.900"}>
          <IoCartOutline />
          Añadir al carrito
        </Button>
      </Box>
    </Grid>
  );
};

export default ProductsCard;
