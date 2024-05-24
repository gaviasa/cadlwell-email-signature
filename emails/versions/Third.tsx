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

  export const ThirdVersion = () => (
    <Row align="left" className="font-sans text-text max-w-[360px]">
            <Column valign="top" className="w-[100px]">
              <Link href="http://caldwelldrillingandblasting.com">
                <Img
                  width="100"
                  src="/static/vertical-light-bg.png"
                  alt="Caldwell Logo"
                />
              </Link>
            </Column>
            <Column valign="top">
              <div className="w-px bg-brand h-[120px] ml-[2px] mr-[6px]"></div>
            </Column>
            <Column>
              <Row className="mb-2 font-sans text-sm">
                <Column>
                  <Row>
                    <Column>
                      <span className="text-text text-[15px]">
                        <strong>Jonathan Meisner</strong>
                      </span>
                    </Column>
                  </Row>
                  <Row>
                    <Column>Owner</Column>
                  </Row>
                </Column>
              </Row>

              <Row className="mb-px font-sans text-sm">
                <Column className="w-[20px]">
                  <Img src="/static/phone-fill-red.png" width="16" alt="Phone" />
                </Column>
                <Column>
                  <Link className="text-text text-[13px]" href="tel:704.441.3954">
                    : 704.441.3954
                  </Link>
                </Column>
              </Row>

              <Row className="mb-px font-sans text-sm">
                <Column className="w-[20px]">

                  <Img src="/static/envelope-fill-red.png" width="16" alt="Email" />
                </Column>
                <Column>
                  <Link
                    className="text-text text-[13px]"
                    href="mailto:Jonathan@DrillBlast.com"
                  >
                    : Jonathan@DrillBlast.com
                  </Link>
                </Column>
              </Row>

              <Row className="mb-px font-sans text-sm">
                <Column className="w-[20px]">
                  <Img src="/static/globe-fill-red.png" width="16" alt="Website" />
                </Column>
                <Column>
                  <Link
                    className="text-text break-words text-[13px]"
                    href="http://caldwelldrillingandblasting.com/"
                  >
                    : caldwelldrillingandblasting.com
                  </Link>
                </Column>
              </Row>
            </Column>
          </Row>
  )