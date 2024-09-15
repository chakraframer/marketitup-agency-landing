import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  FlexProps,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { CgMenuOreos } from "react-icons/cg";
import UnderlinedLink from "../util/UnderlinedLink";
import Logo from "./Logo";
import MyContainer from "./MyContainer";
import { header_links } from "@/data/links.data";

interface Props extends FlexProps {}

export default function Header({ ...props }: Props) {
  return (
    <Box as="section">
      <MyContainer
        as={HStack}
        justifyContent="space-between"
        alignItems={"center"}
        gap={8}
        py={2}
      >
        <HStack gap={4} justifyContent={"space-between"} width={"full"} py={2}>
          <HStack
            gap={2}
            as={Link}
            href="/"
            _hover={{
              textDecoration: "none",
            }}
          >
            <Logo />
           
          </HStack>
          <MobileDrawer />
          <ButtonGroup
            hideBelow={"lg"}
            variant="text"
            colorScheme="gray"
            gap={1}
            alignItems={"center"}
          >
            {header_links.map((link, index) => (
              <>
                {/* <Button key={link.name} size={'md'}>
                  {link.name}
                </Button> */}
                <UnderlinedLink
                  key={index}
                  href={link.href}
                  label={link.name}
                  paddingX={"6"}
                  fontWeight={"600"}
                />

                {index < header_links.length - 1 && (
                  <Text as={"span"} color={"gray.300"} fontSize={"xl"}>
                    |
                  </Text>
                )}
              </>
            ))}
          </ButtonGroup>
          <Button
            hideBelow={"lg"}
            as={Link}
            href="#"
            border="1px"
            rounded="full"
            colorScheme="orange"
            _hover={{ textDecoration: "none", bg: "orange.400" }}
          >
            Contact Us
          </Button>
        </HStack>
      </MyContainer>
    </Box>
  );
}

const MobileDrawer = () => {
  const btnRef = useRef<any>();

  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="Menu"
        ref={btnRef}
        onClick={onOpen}
        variant="solid"
        icon={<CgMenuOreos />}
        hideFrom={"lg"}
        colorScheme="orange"
        isRound={true}
        fontSize="20px"
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"orange.200"} color={"black"}>
          <DrawerCloseButton />
          <DrawerBody mt={8} px={10}>
            <Stack fontSize={"2xl"} fontWeight={"bold"}>
              {header_links.map((link, index) => (
                <UnderlinedLink
                  key={index}
                  href={link.href}
                  label={link.name}
                  underlineColor={"black"}
                />
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
