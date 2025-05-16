/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import { Button, Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import { InventoryDropdown } from "./InventoryDropdown";
import { ShoppingCart } from "./ShoppingCart";
import "./css/Navbar.css";
import { SideMenu } from "./SideMenu";
import { LoginForms } from "./LoginForms";
import { Link } from "react-router";

export const Navbar = () => {
  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (card) => {
    setActiveCard(activeCard === card ? null : card);
  };

  return (
    <Flex className="navbar">
      <SideMenu />
      <Link to="/">
        <Image
          display="block"
          margin="0 auto"
          boxSize="25%"
          src="../../../img/logo.png"
          alt="Logo perfumeria PyG"
        ></Image>
      </Link>

      <Flex>
        <Button
          background="white"
          size="lg"
        >
          <Link to="/inventory">
            <img
              className="navbar__button_img"
              src="./img/inventory.png"
              alt="Icon inventory"
            />
          </Link>
        </Button>

        <Button
          background="white"
          size="lg"
          onClick={() => toggleCard("shopping")}
        >
          <img
            className="navbar__button_img"
            src="./img/cart.png"
            alt="Icon cart"
          />
        </Button>
        <Button
          background="white"
          size="lg"
          onClick={() => toggleCard("profile")}
        >
          <img
            className="navbar__button_img"
            src="./img/user.png"
            alt="Icon user"
          ></img>
        </Button>
      </Flex>
      {activeCard === "profile" && <LoginForms />}
      {activeCard === "shopping" && <ShoppingCart />}
      {activeCard === "Inventory" && <InventoryDropdown />}
    </Flex>
  );
};
