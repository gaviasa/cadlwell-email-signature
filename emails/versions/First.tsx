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

export const FirstVersion = () => (
  <Row align="left" className="font-sans text-text max-w-[360px]">
          <Column valign="top" className="w-[100px]">
            <Link href="http://caldwelldrillingandblasting.com">
              <Img
                width="100"
                src="https://raw.githubusercontent.com/gaviasa/cadlwell-email-signature/main/emails/static/vertical-light-bg.png"
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
                  <Column>Caldwell Drilling and Blasting | Owner</Column>
                </Row>
              </Column>
            </Row>

            <Row className="mb-px font-sans text-sm">
              <Column className="w-[36px]">
                <span className="text-[12px]">
                  <strong>TEL</strong>
                </span>
                {/* <Img src="https://raw.githubusercontent.com/gaviasa/cadlwell-email-signature/main/emails/static/phone-fill.png" width="16" alt="Phone" /> */}
              </Column>
              <Column>
                <Link className="text-text text-[13px]" href="tel:704.441.3954">
                  : 704.441.3954
                </Link>
              </Column>
            </Row>

            <Row className="mb-px font-sans text-sm">
              <Column className="w-[36px]">
                <span className="text-[12px]">
                  <strong>MAIL</strong>
                </span>
                {/* <Img src="https://raw.githubusercontent.com/gaviasa/cadlwell-email-signature/main/emails/static/envelope-fill.png" width="16" alt="Email" /> */}
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
              <Column className="w-[36px]">
                <span className="text-[12px]">
                  <strong>SITE</strong>
                </span>
                {/* <Img src="https://raw.githubusercontent.com/gaviasa/cadlwell-email-signature/main/emails/static/globe-fill.png" width="16" alt="Website" /> */}
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