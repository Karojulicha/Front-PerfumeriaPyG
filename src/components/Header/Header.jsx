/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

// src/components/Header.js
import React from "react";
import "./header.css";
import { CardHeader, Flex } from "@chakra-ui/react";
import { IoSearchSharp } from "react-icons/io5";

const Header = ({ cart }) => {
  const totalItems = Object.values(cart).reduce(
    (acc, item) => acc + item.amount,
    0
  );

  return (
    <div class="main__header">
      <img
        class="main__header_img"
        src="./img/portada_1.jpg"
        alt="img_frond_page"
      ></img>
      <div class="main__header_text">
        <h2 class="main__header_h2">
          Descubre tu aroma perfecto, ¡Tu aroma, tu firma!
        </h2>
        <br />
      </div>
      <div>
        <input
          class="main__header_input"
          type="text"
          placeholder="Busca tu fragancia"
        ></input>
      </div>
    </div>
  );
};

export default Header;
