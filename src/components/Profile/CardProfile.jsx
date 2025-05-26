import { Avatar, AvatarGroup, Button, Flex, Grid, Link } from "@chakra-ui/react";
import { FcMenu } from "react-icons/fc";

/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

export const CardProfile = (handleCard) => {
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
      <Flex justifyContent="center" mb={4}>
        <AvatarGroup>
          <Avatar.Root size={"2xl"}>
            <Avatar.Fallback name="User new" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>
        </AvatarGroup>
      </Flex>

      <Grid className="sideMenu">
        <Link>Mis compras</Link>
        <Link>Información personal</Link>
      </Grid>
      <Button color={"red.400"}>Cerrar sesión</Button>
    </Grid>
  );
};
