import { Fragment } from "react";
import { Box, keyframes } from "@chakra-ui/react";

export default function BgParticles() {
  const animParticle = keyframes`
    from { transform: translateY(0px); }
    to   { transform: translateY(-2560px); }
  `;
  const smoothFadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: .3; }
  `;

  const particles = (max: number) => {
    let spacing = 2560;
    let colorParticle = "#fff";
    let val = `0px 0px ${colorParticle}`;

    for (let i = 1; i <= max; i++) {
      val += `, ${Math.random() * spacing}px ${
        Math.random() * spacing
      }px ${colorParticle}`;
    }

    console.log("val", val);

    return val;
  };

  return (
    <Fragment>
      <Box
        position="fixed"
        animation={`${smoothFadeIn} 6s ease-in forwards`}
        top={0}
        left={0}
        width="100%"
        height="100%"
        z-index={1}
      >
        <Box
          background="transparent"
          _after={{
            background: "transparent",
            position: "absolute",
            content: "''",
            top: "2560px",
            boxShadow: particles(600),
            height: "1px",
            width: "1px",
          }}
          animation={`${animParticle} 60s linear infinite`}
          sx={{
            boxShadow: particles(600),
          }}
          height="1px"
          width="1px"
        />
        <Box
          background="transparent"
          _after={{
            background: "transparent",
            position: "absolute",
            content: "''",
            top: "2560px",
            boxShadow: particles(200),
            height: "2px",
            width: "2px",
          }}
          animation={`${animParticle} 120s linear infinite`}
          sx={{
            boxShadow: particles(200),
          }}
          height="2px"
          width="2px"
        />
        <Box
          background="transparent"
          _after={{
            background: "transparent",
            position: "absolute",
            content: "''",
            top: "2560px",
            boxShadow: particles(100),
            height: "3px",
            width: "3px",
          }}
          animation={`${animParticle} 180s linear infinite`}
          sx={{
            boxShadow: particles(100),
          }}
          height="3px"
          width="3px"
        />
        <Box
          background="transparent"
          _after={{
            background: "transparent",
            position: "absolute",
            content: "''",
            top: "2560px",
            boxShadow: particles(400),
            height: "1px",
            width: "1px",
          }}
          animation={`${animParticle} 600s linear infinite`}
          sx={{
            boxShadow: particles(400),
          }}
          height="1px"
          width="1px"
        />
      </Box>
    </Fragment>
  );
}
