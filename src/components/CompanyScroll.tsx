"use client";
import React, { ReactNode, useEffect, useMemo, useRef } from "react";
import {
  Avatar,
  Box,
  BoxProps,
  Card,
  Center,
  chakra,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

const dbzDialogsMdData = [
  {
    characterImage:
      "https://images.crowdspring.com/blog/wp-content/uploads/2016/06/27132348/netflix-new-logo.png",
    seasonName: "Season 1",
    dialog: "Netflix",
  },
  {
    characterImage:
      "https://e7.pngegg.com/pngimages/448/137/png-clipart-facebook-logo-computer-icons-email-facebook-login-bluetie-inc-facebook-icon-miscellaneous-web-design.png",
    seasonName: "Season 1",
    dialog: "Facebook",
  },
  {
    characterImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
    seasonName: "Season 1",
    dialog: "Instagram",
  },
  {
    characterImage:
      "https://www.dherbal.in/wp-content/uploads/2018/02/Flipkart-logo.png",
    seasonName: "Season 1",
    dialog: "Flipkart",
  },
  {
    characterImage:
      "https://images.crowdspring.com/blog/wp-content/uploads/2016/06/27132348/netflix-new-logo.png",
    seasonName: "Season 1",
    dialog: "Netflix",
  },
  {
    characterImage:
      "https://e7.pngegg.com/pngimages/448/137/png-clipart-facebook-logo-computer-icons-email-facebook-login-bluetie-inc-facebook-icon-miscellaneous-web-design.png",
    seasonName: "Season 1",
    dialog: "Facebook",
  },
  {
    characterImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
    seasonName: "Season 1",
    dialog: "Instagram",
  },
  {
    characterImage:
      "https://www.dherbal.in/wp-content/uploads/2018/02/Flipkart-logo.png",
    seasonName: "Season 1",
    dialog: "Flipkart",
  },
];

export default function CompanyScroll() {
  return (
    <>
    <Heading as="h2" textAlign={'center'} mb={8} fontSize="4xl" h={'fit-content'} fontWeight="bold">
      Companies we work with
    </Heading>
    <Center width="full" py={20}>
      <InfiniteHorizontalScroll
        gap={36}
        direction="left"
        duration={60}
        pauseOnHover
      >
        {dbzDialogsMdData.map((item, index) => (
          <Box
            key={index}
            as={Stack}
            spacing={6}
            my={2}
            background={"none"}
            p={8}
            flexShrink={0}
          >
            <Avatar
              alignItems={"center"}
              src={item.characterImage}
              boxSize={20}
              borderRadius="full"
            />

            <Text fontSize="md">{item.dialog}</Text>
          </Box>
        ))}
      </InfiniteHorizontalScroll>
    </Center>
    </>
  );
}

interface InfiniteHorizontalScrollProps extends BoxProps {
  children: ReactNode[];
  gap?: number;
  direction?: "left" | "right";
  duration?: number;
  pauseOnHover?: boolean;
}

const InfiniteHorizontalScroll = ({
  children,
  gap = 28,
  direction = "left",
  duration = 35,
  pauseOnHover = false,
  ...props
}: InfiniteHorizontalScrollProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const halfGap = gap / 2;
  const start = 0;
  const end = `calc(-50% - ${halfGap}px)`;

  const controlStart = useMemo(
    () => ({
      x: direction === "left" ? end : start,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
      },
    }),
    [direction, duration, start, end]
  );

  useEffect(() => {
    controls.start(controlStart);
  }, [controlStart, controls]);

  return (
    <MotionBox width="100%" mx="auto" overflow="hidden" {...props}>
      <MotionFlex
        ref={scrollerRef}
        flexWrap="nowrap"
        width="max-content"
        gap={`${gap}px`}
        initial={{ x: direction === "left" ? start : end }}
        _hover={{ cursor: pauseOnHover ? "pointer" : "default" }}
        onHoverStart={() => pauseOnHover && controls.stop()}
        onHoverEnd={() => pauseOnHover && controls.start(controlStart)}
        animate={controls}
      >
        {children}
        {children}
      </MotionFlex>
    </MotionBox>
  );
};

const MotionFlex = motion(Flex);
const MotionBox = motion(chakra.div);
