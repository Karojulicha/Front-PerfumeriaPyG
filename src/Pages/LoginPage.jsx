/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { Button, Toaster } from "@chakra-ui/react";
import { LoginForms } from "../components/Navbar/LoginForms";
import { Navigate } from "react-router";
import { useState } from "react";
import axios from "axios";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();
    
    try {
      const response = await axios.post(
        "https://localhost:7075/api/auth/login",
        {
          email,
          password,
        }
      );
      
      const { token } = response.data;
      console.log(token);

      localStorage.setItem("token", token); // save token
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <LoginForms
        handleLogin={handleLogin}
        setPassword={setPassword}
        setEmail={setEmail}
      />
      {error && (
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            Toaster.error({
              description: error,
              type: "info",
            })
          }
        ></Button>
      )}
    </>
  );
};
