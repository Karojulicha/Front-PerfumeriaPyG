/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import {
  Button,
  Grid,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@mui/material";
import { useState } from "react"; 

export const LoginForms = () => {
  const [isRegistering, setIsRegistering] = useState(true);

  return isRegistering ? (
    <RegisterForm />
  ) : (
    <LoginForm setIsRegistering={setIsRegistering} />
  );
};

export const LoginForm = ({ setIsRegistering }) => {
  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <Grid
      background="white"
      p="3"
      position="fixed"
      borderRadius="2%"
      zIndex="1"
      mt="30%"
      ml="48%"
      transform="translate(150%, -10%)"
    >
      <Heading as="h2" size="md" textAlign="center">
        Iniciar Sesión en perfumería P&G
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="email" isRequired>
            <FormLabel textAlign="center">Correo Electrónico</FormLabel>
            <Input type="email" placeholder="tu-email@example.com" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel textAlign="center">Contraseña</FormLabel>
            <Input type="password" placeholder="********" />
          </FormControl>
          <Button type="submit" colorScheme="gray" width="full">
            Iniciar Sesión
          </Button>
          <Button type="submit" colorScheme="gray" width="full">
            Iniciar Sesión con Google
          </Button>
          <Button
            onClick={() => setIsRegistering(true)} // Cambiar a formulario de registro
            colorScheme="teal"
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
      mt="30%"
      p="6"
      borderWidth="1px"
      borderRadius="lg"
      background="white"
      position="fixed"
      gap="4"
      ml="50%"
      transform="translate(70%, 12%)"
    >
      <Heading as="h2" size="lg">
        Regístrate en perfumería P&G
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel textAlign="center" htmlFor="nombre">
              Nombre
            </FormLabel>
            <Input type="text" placeholder="Ingresa tu nombre" />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel textAlign="center" htmlFor="Correo">
              Correo Electrónico
            </FormLabel>
            <Input type="email" placeholder="tu-email@example.com" />
          </FormControl>

          <FormControl id="telefonico" isRequired>
            <FormLabel textAlign="center">Número Telefónico</FormLabel>
            <Input type="tel" placeholder="+00 000-0000-000" />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel textAlign="center">Crear Contraseña</FormLabel>
            <Input type="password" placeholder="crear contraseña" />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel textAlign="center">Confirmar Contraseña</FormLabel>
            <Input type="password" placeholder="crear contraseña" />
          </FormControl>

          <Button type="submit" colorScheme="teal" width="full">
            Registrarse
          </Button>
        </Stack>
      </form>
    </Grid>
  );
};
 