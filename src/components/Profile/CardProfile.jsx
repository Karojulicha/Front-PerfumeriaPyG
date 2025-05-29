import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Grid,
  Link,
  Text,
} from "@chakra-ui/react";
import { FcMenu } from "react-icons/fc";
import { MdOutlineClose } from "react-icons/md";

/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

export const CardProfile = ({ handleCard }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");

    handleCard("Login");
  };

  const styleButtonMenu = { backgroundColor: "gray.400", color: "white" };
  return (
    <Grid
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      background="white"
      flexDirection="column"
      position="fixed"
      top="12"
      right="0"
      width={{ base: "90%", md: "400px" }}
      overflowY="auto"
      zIndex="modal"
      boxShadow="xl"
      gap="4"
    >
      <Button
        color="red.400"
        size="sm"
        justifySelf={"end"}
        onClick={() => handleCard("Profile")}
      >
        <MdOutlineClose />
      </Button>
      <Grid justifyContent="center" gap={5}>
        <Text> Hola {"Karol"}</Text>
        <AvatarGroup>
          <Avatar.Root size={"2xl"}>
            <Avatar.Fallback name="User new" />
            <Avatar.Image src="" />
          </Avatar.Root>
        </AvatarGroup>
      </Grid>
      <Link justifyContent="center">Mis compras</Link>
      <Link justifyContent="center">Información personal</Link>

      <Button color={"red.400"} onClick={handleLogout}>
        Cerrar sesión
      </Button>
    </Grid>
  );
};
