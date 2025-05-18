/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { Button, Icon } from "@chakra-ui/react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Router } from "./Router";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router";
export const App = () => {
  const phoneNumber = "573052584552";
  const whatsappMessage = "Hola, me interesa más información";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  return (
    <div className="main">
      <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Button
          position="fixed"
          bottom="20px"
          right="20px"
          zIndex="tooltip"
          color="green.600"
          borderRadius="50%"
          boxShadow="lg"
          size="400px"
          minW="30px"
          minH="30px"
          w="80px"
          h="80px"
          p="0"
          _hover={{
            bg: "green.400",
            transform: "scale(1.05)",
          }}
          transition="all 0.2s"
        >
          <Icon as={FaWhatsapp} fontSize="60px" />
        </Button>
      </Link>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
