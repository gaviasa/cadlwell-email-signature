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
  <Row align="left" className="border-collapse font-sans text-text">
    <Column valign="top" className="w-[135px] h-[118.8px]">
      <Link className="no-underline" href="http://caldwelldrillingandblasting.com">
        <Img
        className="w-[135px] h-[118.8px] object-contain"
          src="https://github.com/gaviasa/cadlwell-email-signature/blob/main/emails/static/vertical-light-bg-all-red.png?raw=true"
          alt="Caldwell Logo"
        />
      </Link>
    </Column>
    <Column valign="top" className="w-[7px] h-[118.8px]">
      <div className="w-px bg-brand h-[118.8px] ml-[6px] mr-[6px]"></div>
    </Column>
    <Column>
      <Row align="left" className="border-collapse mb-[8px] font-sans text-text text-left">
        <Column>
          <Row align="left" className="border-collapse text-[15px]">
            <Column>
              <span className="text-brand"><strong>Jonathan Meisner</strong></span>
            </Column>
          </Row>
          <Row align="left" className="border-collapse text-[12px]">
            <Column><strong>Caldwell Drilling and Blasting</strong> | Owner</Column>
          </Row>
        </Column>
      </Row>

      <Row align="left" className="border-collapse font-sans text-left">
        <Column valign="top" className="w-[15px]">
          <Img
            className="mt-[5px]"
            src="https://github.com/gaviasa/cadlwell-email-signature/blob/main/emails/static/phone-fill-red.png?raw=true"
            width="15"
            alt="Phone"
          />
        </Column>
        <Column valign="top" className="w-[4px]">
          <span className="mx-0.5">:</span>
        </Column>
        <Column>
          <Link className="text-text text-[12px] no-underline" href="tel:704.441.3954">
            704.441.3954
          </Link>
        </Column>
      </Row>

      <Row align="left" className="border-collapse font-sans text-left">
        <Column valign="top" className="w-[15px]">
          <Img
            className="mt-[5px]"
            src="https://github.com/gaviasa/cadlwell-email-signature/blob/main/emails/static/envelope-fill-red.png?raw=true"
            width="15"
            alt="Email"
          />
        </Column>
        <Column valign="top" className="w-[4px]">
          <span className="mx-0.5">:</span>
        </Column>
        <Column>
          <Link
            className="text-text break-words text-[12px] no-underline"
            href="mailto:Jonathan@DrillBlast.com"
          >
            Jonathan@DrillBlast.com
          </Link>
        </Column>
      </Row>

      <Row align="left" className="border-collapse font-sans text-left">
        <Column valign="top" className="w-[15px]">
          <Img
            className="mt-[5px]"
            src="https://github.com/gaviasa/cadlwell-email-signature/blob/main/emails/static/globe-fill-red.png?raw=true"
            width="15"
            alt="Website"
          />
        </Column>
        <Column valign="top" className="w-[4px]">
          <span className="mx-0.5">:</span>
        </Column>
        <Column className="break-all">
          <Link
            className="text-text text-[12px] no-underline"
            href="http://www.CaldwellDrillingAndBlasting.com/"
          >
            www.CaldwellDrillingAndBlasting.com
          </Link>
        </Column>
      </Row>
    </Column>
  </Row>
);
