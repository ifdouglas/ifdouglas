import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Card } from "@/components/Card";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@/components/Text";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
            <h2 className={inter.className}>Douglas Fernandes</h2>
          </AnimatedCard>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card title="Coffing" href="https://www.coffing.app">
            <Text>Coffing</Text>
          </Card>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card title="Calyptus"></Card>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card title="Moj"></Card>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card title="Moj"></Card>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card title="Moj"></Card>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card title="Moj"></Card>
        </GridItem>
      </Grid>
    </>
  );
}
