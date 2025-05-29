/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import { Button, Flex, Image, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

import { ShoppingCart } from "./ShoppingCart";
import "./css/Navbar.css";
import { SideMenu } from "./SideMenu";
import { Link } from "react-router";
import { LoginPage } from "../../Pages/LoginPage";
import { CardProfile } from "../Profile/CardProfile";

export const Navbar = () => {
  const [activeCard, setActiveCard] = useState(null);


  const toggleCard = (card) => {
    console.log(card)
    setActiveCard(activeCard === card ? null : card);
  };

  const handleCardProfile = () => {

    const token = localStorage.getItem("token");

    if (token) {
      toggleCard("Profile")
    }else {
      toggleCard("Login")
    }

  }

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
        <Button background="white" size="lg">
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
          onClick={() => handleCardProfile()}
        >
          <img
            className="navbar__button_img"
            src="./img/user.png"
            alt="Icon user"
          ></img>
        </Button>
      </Flex>
      {activeCard === "Login" && <LoginPage handleCard={toggleCard} />}
      {activeCard === "shopping" && <ShoppingCart handleCard={toggleCard} />}
      {activeCard === "Profile" && <CardProfile handleCard={toggleCard} />}
    </Flex>
  );
};
