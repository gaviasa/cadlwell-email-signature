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

export const V1_2 = () => (
  <Row align="left" className="font-sans text-text">
    <Column className="w-[135px]">
      <Link href="http://caldwelldrillingandblasting.com">
        <Img
          src="https://github.com/gaviasa/cadlwell-email-signature/blob/main/emails/static/vertical-light-bg.png?raw=true"
          alt="Caldwell Logo"
        />
      </Link>
    </Column>
    <Column valign="top" className="w-[7px]">
      <div className="w-px bg-brand h-[132px] mr-[6px]"></div>
    </Column>
    <Column>
      <Row className="mb-3 font-sans text-text text-[16px]">
        <Column>
          <Row className="mb-1">
            <Column>
              <span className="text-brand"><strong>Jonathan Meisner</strong></span>
            </Column>
          </Row>
          <Row className="text-[13px]">
            <Column><strong>Caldwell Drilling and Blasting</strong> | Owner</Column>
          </Row>
        </Column>
      </Row>

      <Row className="mb-px font-sans text-sm">
        <Column valign="top" className="w-[16px]">
          <Img
            className="mt-[2.5px]"
            src="https://github.com/gaviasa/cadlwell-email-signature/blob/main/emails/static/phone-fill-red.png?raw=true"
            width="16"
            alt="Phone"
          />
        </Column>
        <Column valign="top" className="w-[4px]">
          <span className="mx-0.5">:</span>
        </Column>
        <Column valign="top">
          <Link className="text-text text-[13px]" href="tel:704.441.3954">
            704.441.3954
          </Link>
        </Column>
      </Row>

      <Row className="mb-px font-sans text-sm">
        <Column valign="top" className="w-[16px]">
          <Img
            className="mt-[2.5px]"
            src="https://github.com/gaviasa/cadlwell-email-signature/blob/main/emails/static/envelope-fill-red.png?raw=true"
            width="16"
            alt="Email"
          />
        </Column>
        <Column valign="top" className="w-[4px]">
          <span className="mx-0.5">:</span>
        </Column>
        <Column valign="top">
          <Link
            className="text-text break-words text-[13px]"
            href="mailto:Jonathan@DrillBlast.com"
          >
            Jonathan@DrillBlast.com
          </Link>
        </Column>
      </Row>

      <Row className="mb-px font-sans text-sm">
        <Column valign="top" className="w-[16px]">
          <Img
            className="mt-[2.5px]"
            src="https://github.com/gaviasa/cadlwell-email-signature/blob/main/emails/static/globe-fill-red.png?raw=true"
            width="16"
            alt="Website"
          />
        </Column>
        <Column valign="top" className="w-[4px]">
          <span className="mx-0.5">:</span>
        </Column>
        <Column valign="top" className=" break-all">
          <Link
            className="text-text text-[13px]"
            href="http://www.CaldwellDrillingAndBlasting.com/"
          >
            www.caldwelldrillingandblasting.com
          </Link>
        </Column>
      </Row>
    </Column>
  </Row>
);
