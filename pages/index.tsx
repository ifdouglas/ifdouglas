import { AnimatedCard } from "@/components/AnimatedCard";
import { Card } from "@/components/Card";
import { Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import { Text } from "@/components/Text";
// import Image from "next/image";
import Link from "next/link";
import { formatDistance } from "date-fns";

export default function Home() {
  const workingYears = formatDistance(new Date("2011-01-01"), new Date());
  const sizesSocialLogo = [30, 50];

  return (
    <Flex overflowX="hidden">
      <Grid
        height={["100%", "100vh"]}
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
            <Text
              fontSize={["4xl", "6xl"]}
              lineHeight={["4xl", "6xl"]}
              fontWeight="extrabold"
            >
              Douglas
            </Text>
            <Text
              fontSize={["3xl", "5xl"]}
              lineHeight={["3xl", "5xl"]}
              fontWeight="extrabold"
            >
              Fernandes
            </Text>
            <Text
              fontSize={["lg", "2xl"]}
              m={10}
              fontWeight="semibold"
              textAlign="justify"
            >
              a Software Engineer living in Brazil that has been working with
              app development 12 years. Here you can find some of my original
              ideias. Contact to bring yours to life.
            </Text>
            <Flex
              marginTop={["10px", "50px"]}
              flexDirection="row"
              columnGap={[4, 5]}
            >
              <Link
                href="https://api.whatsapp.com/send?phone=5534999551889"
                target="_blank"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="Logo WhatsApp"
                  width={sizesSocialLogo}
                  height={sizesSocialLogo}
                />
              </Link>
              <Link href="https://github.com/ifdouglas" target="_blank">
                <Image
                  src="/icons/github.svg"
                  alt="Logo GitHub"
                  width={sizesSocialLogo}
                  height={sizesSocialLogo}
                />
              </Link>
              <Link href="https://twitter.com/ifdouglas" target="_blank">
                <Image
                  src="/icons/twitter.svg"
                  alt="Logo Twitter"
                  width={sizesSocialLogo}
                  height={sizesSocialLogo}
                />
              </Link>
              <Link href="https://instagram.com/ifdouglas" target="_blank">
                <Image
                  src="/icons/instagram.svg"
                  alt="Logo Instagram"
                  width={sizesSocialLogo}
                  height={sizesSocialLogo}
                />
              </Link>
            </Flex>
          </AnimatedCard>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card
            title="Coffing"
            subtitle="Create your own home office envionment"
            hrefWeb="https://www.coffing.app"
            src="/apps/coffing.png"
            alt="Logo Coffing"
            width={200}
            height={200}
          />
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card
            title="Dupla de Dois"
            subtitle="Generate couples for your tournament"
            hrefApple="https://apps.apple.com/br/app/dupla-de-dois/id6450417982"
            hrefGoogle="https://apps.apple.com/br/app/dupla-de-dois/id6450417982"
            src="/apps/ddd.png"
            alt="Logo Dupla de Dois"
            width={200}
            height={200}
          />
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card
            title="TL;DR"
            subtitle="Paste a long text or a huge .pdf to receive a summarize in seconds."
            hrefApple="https://apps.apple.com/br/app/tl-dr-too-long-dindt-read/id6449942477"
            src="/apps/tldr.png"
            alt="Logo TL;DR"
            width={200}
            height={200}
          />
        </GridItem>
      </Grid>
    </Flex>
  );
}
