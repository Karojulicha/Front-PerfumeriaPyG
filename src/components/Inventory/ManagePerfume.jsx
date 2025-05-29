import {
  Box,
  Button,
  FileUpload,
  Flex,
  Input,
  Fieldset,
  Field,
  Stack,
  NativeSelect,
  For,
  Text,
  NumberInput,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { HiUpload } from "react-icons/hi";
import { LuFileImage } from "react-icons/lu";

export const ManagePerfumes = () => {
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  return (
    <Box w="76vw" h="80vh" py="20" px="10">
      <Flex justify="space-between" w="100%">
        <Fieldset.Root>
          <Stack>
            <Fieldset.Legend as="h1" fontSize="3xl">
              Administrar perfumes
            </Fieldset.Legend>
            <Fieldset.HelperText fontSize="md">
              Puedes agregar o actualizar un perfume
            </Fieldset.HelperText>

            <Fieldset.Content>
              <Field.Root>
                <Field.Label fontSize="md">Nombre</Field.Label>
                <Input type="text" />
              </Field.Root>

              <Field.Root>
                <Field.Label fontSize="md">Marca</Field.Label>
                <Input type="text" />
              </Field.Root>

              <Field.Root>
                <Field.Label fontSize="md">Descripción</Field.Label>
                <Input type="text" />
              </Field.Root>

              <Field.Root>
                <Field.Label fontSize="md">Precio</Field.Label>
                <Input type="number" />
              </Field.Root>

              <Field.Root>
                <Field.Label fontSize="md">Categoria</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field name="country">
                    <For each={["Arabe", "Comercial", "Nicho"]}>
                      {(item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      )}
                    </For>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Field.Root>

              <Field.Root>
                <Field.Label fontSize="md">Genero</Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field name="country">
                    <For each={["Mujer", "Unisex", "Hombre"]}>
                      {(item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      )}
                    </For>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Field.Root>
            </Fieldset.Content>
          </Stack>
        </Fieldset.Root>
        <Box py="20" px="10">
          <Text fontSize="md">Agrega las imagenes</Text>
          <FileUpload.Root accept={["image/png"]}>
            <FileUpload.HiddenInput />
            <FileUpload.Trigger asChild>
              <Button variant="outline" size="sm">
                <LuFileImage /> Upload Images
              </Button>
            </FileUpload.Trigger>
            <FileUpload.List />
          </FileUpload.Root>

          <Button my="20"  color="gray.600" bg="blue.100" type="submit" alignSelf="flex-end">
            Guardar Perfume
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
