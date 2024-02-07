import { AnimatedCard } from "@/components/AnimatedCard";
import { Card } from "@/components/Card";
import { Flex, Grid, GridItem, Image } from "@chakra-ui/react";
import { Text } from "@/components/Text";
// import Image from "next/image";
import Link from "next/link";
import { formatDistance } from "date-fns";
import BgParticles from "@/components/BgParticles";
import { Badge } from "@/components/Badge";

export default function Home() {
  const workingYears = formatDistance(new Date("2011-01-01"), new Date());
  const sizesSocialLogo = [30, 50];

  return (
    <Flex overflowX="hidden" paddingBottom={[200, 0]}>
      <BgParticles />
      <Grid
        height="100%"
        // templateRows={"repeat(2, 1fr)"}
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        padding={8}
        gap={5}
        zIndex={2}
      >
        <GridItem
          rowSpan={1}
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
            height: "300px",
            zIndex: -1,
          }}
        >
          <AnimatedCard>
            <Text fontSize={["2xl", "4xl"]}>👾</Text>
            <Text
              fontSize={["2xl", "5xl"]}
              lineHeight={["2xl", "5xl"]}
              fontWeight="extrabold"
            >
              Douglas Fernandes
            </Text>
            <Text
              fontSize={["lg", "1xl"]}
              m={2}
              display={["none", "block"]}
              fontWeight="semibold"
              textAlign="justify"
            >
              me.summary
            </Text>
            <Flex flexDirection="row" mt="10px" columnGap={[4, 5]}>
              <Link
                href="https://api.whatsapp.com/send?phone=5534999551889"
                target="_blank"
              >
                <Image
                  src="/icons/whatsapp.svg"
                  alt="Logo WhatsApp"
                  draggable={false}
                  width={sizesSocialLogo}
                  height={sizesSocialLogo}
                  transition="all .2s ease-in-out"
                  _hover={{
                    cursor: "pointer",
                    transition: "all .2s ease-in-out",
                    transform: "scale(1.1)",
                  }}
                />
              </Link>
              <Link href="https://github.com/ifdouglas" target="_blank">
                <Image
                  src="/icons/github.svg"
                  alt="Logo GitHub"
                  draggable={false}
                  width={sizesSocialLogo}
                  height={sizesSocialLogo}
                  transition="all .2s ease-in-out"
                  _hover={{
                    cursor: "pointer",
                    transition: "all .2s ease-in-out",
                    transform: "scale(1.1)",
                  }}
                />
              </Link>
              <Link href="https://x.com/ifdouglas" target="_blank">
                <Image
                  src="/icons/x.svg"
                  alt="Logo X"
                  draggable={false}
                  width={sizesSocialLogo}
                  height={sizesSocialLogo}
                  transition="all .2s ease-in-out"
                  _hover={{
                    cursor: "pointer",
                    transition: "all .2s ease-in-out",
                    transform: "scale(1.1)",
                  }}
                />
              </Link>
              <Link href="https://instagram.com/ifdouglas" target="_blank">
                <Image
                  src="/icons/instagram.svg"
                  alt="Logo Instagram"
                  draggable={false}
                  width={sizesSocialLogo}
                  height={sizesSocialLogo}
                  transition="all .2s ease-in-out"
                  _hover={{
                    cursor: "pointer",
                    transition: "all .2s ease-in-out",
                    transform: "scale(1.1)",
                  }}
                />
              </Link>
            </Flex>
          </AnimatedCard>
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card
            name="Moj"
            title="moj.title"
            hrefWeb="https://moj.ifdouglas.com"
            src="/apps/moj.png"
            alt="Logo Moj"
            badges={[
              <Badge key="badge.moj.new" colorScheme="green" value="new" />,
              <Badge key="badge.moj.app" value="app" />,
            ]}
          />
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card
            name="Technical Interview Buddy"
            title="tib.title"
            hrefGpt="https://gptstore.ai/gpts/JkO0B4aT4C-tech-interview-buddy"
            src="/apps/tib.png"
            alt="Logo TIB"
            badges={[
              <Badge key="badge.tib.new" colorScheme="green" value="new" />,
              <Badge key="badge.tib.gpt" colorScheme="blue" value="GPT" />,
            ]}
          />
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card
            name="Coffing"
            title="coffing.title"
            hrefWeb="https://www.coffing.app"
            hrefApple="https://apps.apple.com/br/app/coffing-pomodoro-bird-water/id1606988176"
            src="/apps/coffing.png"
            alt="Logo Coffing"
            badges={[<Badge key="badge.coffing.app" value="app" />]}
          />
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card
            name="ddd.name"
            title="ddd.title"
            hrefApple="https://apps.apple.com/br/app/dupla-de-dois/id6450417982"
            hrefGoogle="https://play.google.com/store/apps/details?id=br.com.hackings.dupla_de_dois"
            src="/apps/ddd.png"
            alt="Logo Dupla de Dois"
            badges={[<Badge key="badge.ddd.app" value="app" />]}
          />
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card
            name="TL;DR"
            title="tldr.title"
            hrefApple="https://apps.apple.com/br/app/tl-dr-too-long-dindt-read/id6449942477"
            src="/apps/tldr.png"
            alt="Logo TL;DR"
            badges={[<Badge key="badge.tldr.app" value="app" />]}
          />
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card
            name="Formatagram"
            title="formatagram.title"
            hrefApple="https://apps.apple.com/br/app/formatagram/id1500141159"
            hrefGoogle="https://play.google.com/store/apps/details?id=app.tuntz.formatagram"
            src="/apps/formatagram.png"
            alt="Logo Formatagram"
            badges={[<Badge key="badge.formatagram.app" value="app" />]}
          />
        </GridItem>

        <GridItem rowSpan={1} colSpan={1}>
          <Card
            name="gic.name"
            title="gic.title"
            hrefGpt="https://gptstore.ai/gpts/KqpQRPwrd6-gerador-infinito-de-cartas"
            src="/apps/gic.png"
            alt="Logo GIC"
            badges={[
              <Badge key="badge.gic.new" colorScheme="green" value="new" />,
              <Badge key="badge.gic.gpt" colorScheme="blue" value="GPT" />,
            ]}
          />
        </GridItem>
      </Grid>
    </Flex>
  );
}
