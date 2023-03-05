import Head from "next/head";
import { Inter } from "@next/font/google";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Card } from "@/components/Card";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@/components/Text";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Douglas Fernandes</title>
        <meta name="description" content="Ready to build your idea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        templateRows={"repeat(2, 1fr)"}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        padding={8}
        gap={5}
      >
        <GridItem
          rowSpan={2}
          colSpan={1}
          position="relative"
          _after={{
            top: "-10%",
            left: "-20%",
            content: "''",
            position: "absolute",
            filter: "blur(45px)",
            transform: "translateZ(0)",
            background:
              "radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0))",
            width: "813px",
            height: "900px",
            zIndex: -1,
          }}
        >
          <AnimatedCard>
            <Text fontSize={50} fontWeight="extrabold">
              Douglas Fernandes
            </Text>
            <Text fontSize={33} fontWeight="extrabold">
              Software Engineer Specialist
            </Text>
            <Flex marginTop="50px" flexDirection="row" columnGap={5}>
              {/* <Link href="#" target="_blank">
                <Image
                  src="/icons/whatsapp.svg"
                  alt="Logo WhatsApp"
                  width={50}
                  height={50}
                />
              </Link> */}
              <Link href="https://github.com/ifdouglas" target="_blank">
                <Image
                  src="/icons/github.svg"
                  alt="Logo GitHub"
                  width={50}
                  height={50}
                />
              </Link>
              <Link href="https://twiiter.com/ifdouglas" target="_blank">
                <Image
                  src="/icons/twitter.svg"
                  alt="Logo Twitter"
                  width={50}
                  height={50}
                />
              </Link>
              <Link href="https://instagram.com/ifdouglas" target="_blank">
                <Image
                  src="/icons/instagram.svg"
                  alt="Logo Instagram"
                  width={50}
                  height={50}
                />
              </Link>
            </Flex>
          </AnimatedCard>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card title="Coffing" href="https://www.coffing.app"></Card>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card title="Hackings" href="https://www.hackings.com.br"></Card>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card title="Calyptus"></Card>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card title="Singular"></Card>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card title="Robotz"></Card>
        </GridItem>
      </Grid>
    </>
  );
}
