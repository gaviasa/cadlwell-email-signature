import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Link,
  Img,
  Heading,
  Hr,
  Row,
  Column,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
import { FirstVersion } from "./versions/First";
import { V1_1 } from "./versions/V1_1";


export const EmailSignature = () => (
  <Html>
    <Head />
    <Body>
      <Container>
        <Tailwind
          config={{
            theme: {
              extend: {
                colors: {
                  brand: "#D91414",
                  text: "#1A1A1A",
                },
              },
              fontSize: {
                xs: ["12px", { lineHeight: "16px" }],
                sm: ["14px", { lineHeight: "20px" }],
                base: ["16px", { lineHeight: "24px" }],
                lg: ["18px", { lineHeight: "28px" }],
                xl: ["20px", { lineHeight: "28px" }],
                "2xl": ["24px", { lineHeight: "32px" }],
                "3xl": ["30px", { lineHeight: "36px" }],
                "4xl": ["36px", { lineHeight: "36px" }],
                "5xl": ["48px", { lineHeight: "1" }],
                "6xl": ["60px", { lineHeight: "1" }],
                "7xl": ["72px", { lineHeight: "1" }],
                "8xl": ["96px", { lineHeight: "1" }],
                "9xl": ["144px", { lineHeight: "1" }],
              },
              spacing: {
                px: "1px",
                0: "0",
                0.5: "2px",
                1: "4px",
                1.5: "6px",
                2: "8px",
                2.5: "10px",
                3: "12px",
                3.5: "14px",
                4: "16px",
                5: "20px",
                6: "24px",
                7: "28px",
                8: "32px",
                9: "36px",
                10: "40px",
                11: "44px",
                12: "48px",
                14: "56px",
                16: "64px",
                20: "80px",
                24: "96px",
                28: "112px",
                32: "128px",
                36: "144px",
                40: "160px",
                44: "176px",
                48: "192px",
                52: "208px",
                56: "224px",
                60: "240px",
                64: "256px",
                72: "288px",
                80: "320px",
              },
            },
          }}
        >

          <V1_1 />

          <Row>
            <Column><div className="h-8"></div></Column>
          </Row>


        </Tailwind>
      </Container>
    </Body>
  </Html>
);

export default EmailSignature;
