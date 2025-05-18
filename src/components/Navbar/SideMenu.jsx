import "./css/sideMenu.css";
import { Button, Flex, Menu } from "@chakra-ui/icons";
import { Portal } from "@mui/material";
import { useState } from "react";
import { FcMenu } from "react-icons/fc";

const styleButtonMenu = { backgroundColor: "gray.400", color: "white" }

export const SideMenu = () => {
  // [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Flex className="sideMenu">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">
            <FcMenu />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="Lanzamiento" _hover={styleButtonMenu}>
                Nuevos lanzamientos
              </Menu.Item>
              <Menu.Item value="promociones" _hover={styleButtonMenu}>
                Promociones
              </Menu.Item>
              <Menu.Root positioning={{ placement: "right-start", gutter: 3 }}>
                <Menu.TriggerItem _hover={styleButtonMenu}>
                  Genero
                </Menu.TriggerItem>
                <Portal>
                  <Menu.Positioner>
                    <Menu.Content>
                      <Menu.Item value="Mujer" _hover={styleButtonMenu} v>
                        Mujer
                      </Menu.Item>
                      <Menu.Item value="Hombre" _hover={styleButtonMenu}>
                        Hombre
                      </Menu.Item>
                      <Menu.Item value="Unisex" _hover={styleButtonMenu}>
                        Unisex
                      </Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Portal>
              </Menu.Root>
              <Menu.Item value="nicho" _hover={styleButtonMenu}>
                Perfumes de Nicho
              </Menu.Item>
              <Menu.Item value="Árabes" _hover={styleButtonMenu}>
                Perfumes Árabes
              </Menu.Item>
              <Menu.Item value="Comerciales" _hover={styleButtonMenu}>
                Perfumes Comerciales
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Flex>
  );
};
