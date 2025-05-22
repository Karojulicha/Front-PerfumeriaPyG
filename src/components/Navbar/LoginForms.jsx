/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { Button, Grid, Heading, Input, Stack } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@mui/material";
import { useState } from "react";

export const LoginForms = ({handleLogin, setPassword, setEmail}) => {
  const [isRegistering, setIsRegistering] = useState(false);

  return isRegistering ? (
    <RegisterForm />
  ) : (
    <LoginForm
      setIsRegistering={setIsRegistering}
      handleLogin={handleLogin}
      setPassword={setPassword}
      setEmail={setEmail}
    />
  );
};

export const LoginForm = ({ setIsRegistering, handleLogin, setPassword, setEmail }) => {
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
      <Heading as="h2" size="md" textalign="center">
        Iniciar Sesión en perfumería P&G
      </Heading>
      <form onSubmit={handleLogin}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel textalign="center">Correo Electrónico</FormLabel>
            <Input
              type="email"
              placeholder="tu-email@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel textalign="center">Contraseña</FormLabel>
            <Input
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" color="gray" width="full">
            Iniciar Sesión
          </Button>
          <Button type="submit" color="gray" width="full">
            Iniciar Sesión con Google
          </Button>
          <Button
            onClick={() => setIsRegistering(true)} // Cambiar a formulario de registro
            color="teal"
            width="full"
          >
            Crear cuenta nueva
          </Button>
        </Stack>
      </form>
    </Grid>
  );
};

export const RegisterForm = () => {
  const handleSubmit = () => {
    console.log("Form submitted");
  };

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
      <Heading as="h2" size="lg">
        Regístrate en perfumería P&G
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel textalign="center" htmlFor="nombre">
              Nombre
            </FormLabel>
            <Input type="text" placeholder="Ingresa tu nombre" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel textalign="center" htmlFor="Correo">
              Correo Electrónico
            </FormLabel>
            <Input type="email" placeholder="tu-email@example.com" />
          </FormControl>

          <FormControl id="telefonico" isRequired>
            <FormLabel textalign="center">Número Telefónico</FormLabel>
            <Input type="tel" placeholder="+00 000-0000-000" />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel textalign="center">Crear Contraseña</FormLabel>
            <Input type="password" placeholder="crear contraseña" />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel textalign="center">Confirmar Contraseña</FormLabel>
            <Input type="password" placeholder="crear contraseña" />
          </FormControl>

          <Button type="submit" color="teal" width="full">
            Registrarse
          </Button>
        </Stack>
      </form>
    </Grid>
  );
};
