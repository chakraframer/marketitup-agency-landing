import { Image, ImageProps } from "@chakra-ui/react";

export default function Logo(props: ImageProps) {
  return (
    <Image
      flex={1}
      height={30}
      width={"auto"}
      objectFit={"contain"}
      src="/assets/logo1.png"
      alt="Logo"
      tranformStyle="preserve-3d"
      {...props}
    />
  );
}
