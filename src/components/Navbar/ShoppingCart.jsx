import {
  Box,
  Button,
  Drawer,
  Flex,
  Grid,
  Image,
  Input,
  Portal,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";

export const ShoppingCart = ({ handleCard }) => {
  const [cart, setCart] = useState({
    1: { id: 1, name: "Susurros de Noche", amount: 1 },
    2: { id: 2, name: "la vida es bella", amount: 2 },
    3: { id: 3, name: "good girl", amount: 2 },
    4: { id: 4, name: "Susurros de Noche", amount: 2 },
  });

  const handleRemove = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id].amount === 1) {
        delete newCart[id];
      } else {
        newCart[id].amount -= 1;
      }
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleAdd = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[id].amount += 1;
      window.localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const cartItems = Object.values(cart);



  return (
    <Flex
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      background="white"
      flexDirection="column"
      position="fixed"
      top="12"
      right="0"
      width={{ base: "90%", md: "500px" }}
      overflowY="auto"
      zIndex="modal"
      boxShadow="xl"
      gap="4"
    >
      <Flex justifyContent={"space-between"}>
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="black"
          textAlign="center"
          fontFamily="cursive"
        >
          Carrito de compras
        </Text>
        <Button
          color="red.400"
          size="sm"
          onClick={() => handleCard("shopping")}
        >
          <MdOutlineClose />
        </Button>
      </Flex>
      <Box maxH="400px" overflowY="auto">
        {cartItems.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        ))}
      </Box>
      <Text fontSize="lg" fontWeight="bold" color="black" textAlign="end">
        Subtotal del carrito: {}
      </Text>
      <Button color="teal" width="full">
        Finalizar compra
      </Button>
    </Flex>
  );
};

const ProductCard = ({ item, onAdd, onRemove }) => {
  return (
    <Grid
      mt="4"
      p="4"
      w="100%"
      borderWidth="1px"
      borderRadius="lg"
      background="white"
    >
      <Flex align="center">
        <Image
          width="100px"
          height="120px"
          src="https://sp.victoriassecret.com/p/380x507/tif/62/09/620970966f984559b80ea0c21f658445/111893792457_OF_F.jpg"
          alt={item.name}
        />
        <Grid ml="4">
          <Text fontSize="md" fontWeight="bold">
            {item.name}
          </Text>
          <Text fontSize="md" color="black">
            Precio: {"123.000"}
          </Text>
        </Grid>
      </Flex>
      <Box mt="2" display="flex" alignItems="center">
        <Button color="black" onClick={() => onRemove(item.id)} size="sm">
          -
        </Button>
        <Input
          placeholder="Cantidad"
          width="50%"
          textAlign="center"
          value={item.amount}
          readOnly
          mx="2"
        />
        <Button onClick={() => onAdd(item.id)} color="black" size="sm">
          +
        </Button>
        <Button
          onClick={() => onRemove(item.id)}
          color="red"
          colorScheme="red"
          ml={2}
        >
          <BsTrash />
        </Button>
      </Box>
    </Grid>
  );
};
