
import "./css/sideMenu.css";
import { Button, Flex, Menu } from "@chakra-ui/icons";

export const SideMenu = () => {
  return (
    <Flex className="sideMenu">
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="outline">Edit</Button>
        </Menu.Trigger>
      </Menu.Root>
    </Flex>
  );
};
