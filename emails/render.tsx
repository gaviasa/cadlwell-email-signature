import {
  Head,
  Html,
  Body,
  Container,
  CodeBlock,
  dracula,
} from "@react-email/components";
import * as React from "react";
import EmailSignature from "./email-signature";
import { render } from "@react-email/render";

const code = render(<EmailSignature />, {
  pretty: true,
});

export function Render() {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <CodeBlock code={code} theme={dracula} language="html" />
        </Container>
      </Body>
    </Html>
  );
}

export default Render;
