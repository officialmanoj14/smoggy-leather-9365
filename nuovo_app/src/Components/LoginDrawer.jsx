
import React from "react";
import Login from "./Login";
import { RxAvatar } from 'react-icons/rx';
import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  // Avatar, Wrap, WrapItem 
} from "@chakra-ui/react";

function LoginDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <>
      {/* <Wrap onClick={onOpen}>
        <WrapItem>
        <Avatar src='https://bit.ly/broken-link' />
        </WrapItem>
      </Wrap> */}
      <RxAvatar onClick={onOpen} size='2.5rem'/>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Login your Nuovo shopping account
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="30px">
              <Login />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default LoginDrawer;
