import Head from "next/head";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Card } from "@/components/Card";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@/components/Text";
import Image from "next/image";
import Link from "next/link";
import { formatDistance, subYears } from "date-fns";

export default function Home() {
  const workingYears = formatDistance(new Date("2011-01-01"), new Date());

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
            <Text fontSize="6xl" lineHeight="6xl" fontWeight="extrabold">
              Douglas
            </Text>
            <Text fontSize="5xl" lineHeight="5xl" fontWeight="extrabold">
              Fernandes
            </Text>
            <Text
              fontSize="2xl"
              m={10}
              fontWeight="semibold"
              textAlign="justify"
            >
              a Software Engineer living in Brazil that has been working with
              app development 12 years. Here you can find some of my original
              ideias. Contact to bring yours to life.
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
          <Card
            title="Coffing"
            subtitle="Create your own home office envionment"
            href="https://www.coffing.app"
          >
            <Image
              src="/apps/coffing.png"
              alt="Logo Coffing"
              width={200}
              height={200}
            />
          </Card>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card
            title="Dupla de Dois"
            subtitle="Generate couples for your tournament"
            href="https://apps.apple.com/br/app/dupla-de-dois/id6450417982"
          >
            <Image
              src="/apps/ddd.png"
              alt="Logo Dupla de Dois"
              width={200}
              height={200}
            />
          </Card>
        </GridItem>

        {/* <GridItem rowSpan={1} colSpan={1}>
          <Card
            title="WhatsPrinter"
            subtitle="Get orders from WhatsApp and print in real-time on your restaurant"
          ></Card>
        </GridItem> */}

        <GridItem rowSpan={1} colSpan={1}>
          <Card
            title="TL;DR"
            subtitle="Paste a long text or a huge .pdf to receive a summarize in seconds."
            href="https://apps.apple.com/br/app/tl-dr-too-long-dindt-read/id6449942477"
          >
            <Image
              src="/apps/tldr.png"
              alt="Logo TL;DR"
              width={200}
              height={200}
              style={{
                boxShadow: "0px 2px 8px -1px #0000001a",
              }}
            />
          </Card>
        </GridItem>

        {/* <GridItem rowSpan={1} colSpan={1}>
          <Card
            title="Hackings"
            subtitle="First class social media services"
            href="https://www.hackings.com.br"
          ></Card>
        </GridItem> */}

        {/* <GridItem rowSpan={1} colSpan={1}>
          <Card title="Singular"></Card>
        </GridItem> */}

        {/* <GridItem rowSpan={1} colSpan={1}>
          <Card title="Robotz"></Card>
        </GridItem> */}
      </Grid>
    </>
  );
}
