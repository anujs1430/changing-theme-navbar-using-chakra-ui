import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        colorScheme="purple"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        pos={'fixed'}
        top={'4'}
        left={'4'}
        onClick={onOpen}
        zIndex={3}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navbar</DrawerHeader>

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/about'}>About</Link>
              </Button>
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/contact'}>Contact</Link>
              </Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <HStack justifyContent={'space-evenly'} w={'100%'}>
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to={'/login'}>LogIn</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to={'/signup'}>SignUp</Link>
              </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
