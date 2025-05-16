/**
 * @license
 * Copyright 2024 Perfumeria P&G
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

import { useState } from "react";
import { Box, Button, Grid, Input } from "@chakra-ui/react";
import { FormControl, FormLabel, Modal } from "@mui/material";

const ProductFormModal = ({ isOpen, onClose, onSave, product }) => {
  const [formData, setFormData] = useState({
    name: product?.name || "",
    image: product?.image || "",
    sizes: product?.sizes?.join(", ") || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const formattedData = {
      ...formData,
      sizes: formData.sizes.split(",").map((size) => size.trim()),
    };
    onSave(formattedData);
    onClose();
  };

  return (
    <Modal open={true}>
      <Grid gap={"5"} p={5} bg="white" borderRadius="md">
        {product ? "Editar Perfume" : "Agregar Perfume"}
        <FormControl mb={4}>
          <FormLabel>Nombre</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nombre del perfume"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Imagen (URL)</FormLabel>
          <Input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="URL de la imagen"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Tamaños (separados por comas)</FormLabel>
          <Input
            name="sizes"
            value={formData.sizes}
            onChange={handleChange}
            placeholder="Ejemplo: 50ml, 100ml, 250ml"
          />
        </FormControl>
        <Button variant="ghost" colorScheme="blue" onClick={handleSave}>
          Guardar
        </Button>
        <Button variant="ghost" onClick={onClose}>
          Cancelar
        </Button>
      </Grid>
    </Modal>
  );
};

export default ProductFormModal;
