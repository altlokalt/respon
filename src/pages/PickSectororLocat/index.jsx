import React from "react";

import { Img, Text, Button, Input, List } from "components";

const PickSectororLocatPage = () => {
  return (
    <>
      <div className="bg-light_green_50 flex font-notosanskr items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start pb-[273px] w-[100%]">
          <header className="bg-gray_929 flex flex-col items-center justify-center md:px-[20px] w-[100%]">
            <div className="border-b-[1px] border-light_green_50_3f border-solid md:h-[220px] sm:h-[90px] h-[91px] relative w-[100%]">
              <div className="header-row absolute my-[21px] inset-y-[23%]">
                <Img
                  src="images/img_svg_light_green_50.svg"
                  className="h-[48px] m-[auto]"
                  alt="svg"
                />
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-[40px] h-[max-content] sm:hidden inset-[0] items-center justify-center m-[auto] w-[93%]">
                <div className="flex sm:flex-col flex-row gap-[39.98px] items-start justify-start py-[34.5px] self-stretch w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-between sm:w-[100%] w-[33%]">
                    <Text
                      className="font-normal not-italic text-left text-light_green_50 tracking-[2.40px] uppercase w-[auto]"
                      variant="body41"
                    >
                      Portfolio
                    </Text>
                    <Img
                      src="images/img_mail.svg"
                      className="h-[6px] w-[auto]"
                      alt="mail"
                    />
                  </div>
                  <div className="flex flex-row gap-[22px] items-center justify-between sm:w-[100%] w-[58%]">
                    <Text
                      className="font-normal not-italic text-left text-light_green_50 tracking-[2.40px] uppercase w-[auto]"
                      variant="body41"
                    >
                      Venture Education
                    </Text>
                    <Img
                      src="images/img_mail.svg"
                      className="h-[6px] w-[auto]"
                      alt="mail_One"
                    />
                  </div>
                </div>
                <ul className="flex sm:flex-col flex-row sm:hidden items-center justify-between sm:pr-[20px] pr-[23px] py-[23px] md:w-[100%] w-[35%] common-row-list">
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[9px]">
                    <a
                      className="cursor-pointer font-normal not-italic text-[16px] text-left text-light_green_50 tracking-[2.40px] uppercase"
                      href="javascript:"
                    >
                      BLOG:TheGlobalVC
                    </a>
                  </li>
                  <li className="sm:w-[100%] w-[auto] my-[10px]">
                    <div className="flex flex-row gap-[13px] items-center justify-center">
                      <a
                        className="cursor-pointer font-normal not-italic text-[15px] text-left text-light_green_50 tracking-[2.40px] uppercase w-[auto]"
                        href="javascript:"
                      >
                        About
                      </a>
                      <Img
                        src="images/img_mail.svg"
                        className="h-[6px] w-[auto]"
                        alt="mail_Two"
                      />
                    </div>
                  </li>
                  <li className="mb-[1px] mr-[16px] sm:w-[100%] sm:my-[10px]">
                    <Button className="bg-white_A700 cursor-pointer font-normal not-italic pb-[13.02px] pl-[42px] pr-[43.73px] pt-[14px] sm:px-[20px] md:px-[40px] rounded-[21px] text-[16px] text-center text-gray_929 tracking-[2.40px] uppercase">
                      Get in Touch
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="bg-orange_100 flex flex-col md:gap-[40px] gap-[60px] items-center justify-start p-[103px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex flex-col gap-[29px] items-center justify-start max-w-[1480px] mx-[auto] px-[191px] sm:px-[20px] md:px-[40px] w-[100%]">
                <Text
                  className="font-normal font-notosanskr not-italic text-center text-gray_929 tracking-[2.10px] uppercase w-[auto]"
                  variant="body43"
                >
                  Our Companies
                </Text>
                <Text
                  className="font-nanummyeongjo leading-[160.00px] not-italic text-center text-gray_929 tracking-[-3.20px] w-[100%]"
                  variant="body40"
                >
                  A national force for innovation
                </Text>
              </div>
              <div className="flex items-center justify-start mb-[56px] pt-[4px] px-[4px] md:w-[100%] w-[auto]">
                <Text
                  className="font-normal not-italic text-center text-gray_929 w-[auto]"
                  variant="body31"
                >
                  Our goal is to back the best wherever they’re based.
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-nanummyeongjo gap-[160px] md:gap-[40px] justify-start mt-[239px] w-[100%]">
              <div className="flex items-end justify-start md:ml-[0] ml-[68px] pl-[68px] md:px-[20px] md:w-[100%] w-[auto]">
                <Text
                  className="leading-[136.00px] not-italic text-gray_929 text-left tracking-[-2.72px] w-[100%]"
                  variant="body45"
                >
                  Exceptional. Global. Backed by people like you.
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                <div className="bg-green_603 flex md:flex-1 items-center justify-center p-[120px] md:px-[20px] md:w-[100%] w-[50%]">
                  <div className="flex flex-col md:gap-[40px] gap-[64px] items-center justify-start my-[32px] w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <Img
                        src="images/img_carbonhealthlogosvg.svg"
                        className="h-[18px] w-[auto]"
                        alt="carbonhealthlog"
                      />
                      <Text
                        className="mt-[27px] not-italic text-gray_929 text-left tracking-[-1.28px] w-[auto]"
                        variant="body3"
                      >
                        Carbon Health
                      </Text>
                      <div className="flex flex-col items-center justify-start mt-[39px] w-[100%]">
                        <div className="border-b-[1px] border-gray_310 border-solid flex sm:flex-col flex-row gap-[147px] sm:gap-[40px] items-center justify-start sm:pr-[20px] pr-[39px] py-[39px] w-[100%]">
                          <Text
                            className="font-normal font-notosanskr not-italic text-gray_929 text-left tracking-[3.00px] uppercase w-[auto]"
                            variant="body33"
                          >
                            Sector
                          </Text>
                          <Text
                            className="font-nanummyeongjo mb-[16px] not-italic text-gray_929 text-left tracking-[-1.60px] w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Healthtech
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[123px] sm:gap-[40px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[41px] py-[41px] w-[100%]">
                          <Text
                            className="font-normal font-notosanskr not-italic text-gray_929 text-left tracking-[3.00px] uppercase w-[auto]"
                            variant="body33"
                          >
                            Location
                          </Text>
                          <Text
                            className="font-nanummyeongjo sm:mt-[0] mt-[7px] not-italic text-gray_929 text-left tracking-[-1.60px] w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Norway
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_div_light_green_50.svg"
                      className="h-[63px] w-[auto]"
                      alt="div"
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col font-notosanskr gap-[56px] items-center justify-start p-[58px] md:px-[20px] md:w-[100%] w-[50%]">
                  <div className="h-[35px] relative w-[44%]">
                    <div className="absolute border-b-[1px] border-gray_929 border-solid h-[35px] inset-[0] justify-center m-[auto] w-[98%]"></div>
                    <Text
                      className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-gray_929 text-left tracking-[3.00px] uppercase w-[max-content]"
                      variant="body33"
                    >
                      Selected Nok1B+ companies
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[47px] items-center justify-start mb-[15px] md:w-[100%] w-[86%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="border-b-[1px] border-gray_310 border-solid flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[44px] sm:px-[20px] md:px-[40px] w-[100%]">
                        <Img
                          src="images/img_canvalogosvg.svg"
                          className="h-[39px] sm:ml-[0] ml-[4px] w-[auto]"
                          alt="canvalogosvg"
                        />
                        <Text
                          className="font-normal sm:ml-[0] ml-[88px] not-italic text-gray_929 text-left w-[auto]"
                          variant="body32"
                        >
                          SaaS
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[204px] not-italic text-gray_929 text-left w-[auto]"
                          variant="body31"
                        >
                          Norway
                        </Text>
                      </div>
                      <div className="border-b-[1px] border-gray_310 border-solid flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] w-[100%]">
                        <Img
                          src="images/img_solanalogosvg.svg"
                          className="h-[33px] w-[auto]"
                          alt="solanalogosvg"
                        />
                        <Text
                          className="font-normal sm:ml-[0] ml-[88px] not-italic text-gray_929 text-left w-[auto]"
                          variant="body29"
                        >
                          Web 3
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[187px] not-italic text-gray_929 text-left w-[auto]"
                          variant="body32"
                        >
                          Bo
                        </Text>
                      </div>
                      <div className="border-b-[1px] border-gray_310 border-solid flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[48px] sm:px-[20px] md:px-[40px] w-[100%]">
                        <Img
                          src="images/img_talkdesklogosvg.svg"
                          className="h-[29px] w-[auto]"
                          alt="talkdesklogosvg"
                        />
                        <Text
                          className="font-normal sm:ml-[0] ml-[88px] not-italic text-gray_929 text-left w-[auto]"
                          variant="body32"
                        >
                          SaaS
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[204px] not-italic text-gray_929 text-left w-[auto]"
                          variant="body32"
                        >
                          Os
                        </Text>
                      </div>
                      <div className="border-b-[1px] border-gray_310 border-solid flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[44px] sm:px-[20px] md:px-[40px] w-[100%]">
                        <div className="flex sm:flex-1 items-center justify-start sm:ml-[0] ml-[4px] sm:px-[20px] px-[31px] sm:w-[100%] w-[29%]">
                          <Img
                            src="images/img_redditlogosvg.svg"
                            className="h-[39px] w-[auto]"
                            alt="redditlogosvg"
                          />
                        </div>
                        <Text
                          className="font-normal sm:ml-[0] ml-[88px] not-italic text-gray_929 text-left w-[auto]"
                          variant="body31"
                        >
                          Media
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[192px] not-italic text-gray_929 text-left w-[auto]"
                          variant="body32"
                        >
                          Os
                        </Text>
                      </div>
                      <div className="border-b-[1px] border-gray_310 border-solid flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[44px] sm:px-[20px] md:px-[40px] w-[100%]">
                        <Img
                          src="images/img_cars24logosvg.svg"
                          className="h-[39px] sm:ml-[0] ml-[4px] w-[auto]"
                          alt="cars24logosvg"
                        />
                        <Text
                          className="font-normal sm:ml-[0] ml-[88px] not-italic text-gray_929 text-left w-[auto]"
                          variant="body29"
                        >
                          Ecommerce
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[126px] not-italic text-gray_929 text-left w-[auto]"
                          variant="body32"
                        >
                          Berg
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_div_gray_929.svg"
                      className="h-[63px] w-[143px]"
                      alt="div_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-notosanskr items-center justify-start mt-[240px] sm:px-[20px] md:px-[40px] px-[68px] w-[100%]">
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start max-w-[1784px] mx-[auto] sm:pr-[20px] md:pr-[40px] pr-[447px] w-[100%]">
                <Input
                  wrapClassName="bg-gray_929 flex sm:flex-1 pr-[51.98px] rounded-[31px] sm:w-[100%] w-[auto]"
                  className="font-normal md:pr-[40px] not-italic p-[0] placeholder:text-light_green_50 self-stretch sm:pr-[20px] text-[20px] text-left text-light_green_50 tracking-[3.00px] uppercase w-[100%]"
                  name="div_Two"
                  placeholder="Filter by Location"
                  suffix={
                    <div className="mt-[8px] mb-[12px] ml-[35px] sm:w-[100%] sm:mx-[0] w-[1%] bg-light_green_50">
                      <Img
                        src="images/img_mail.svg"
                        className="my-[auto]"
                        alt="mail"
                      />
                    </div>
                  }
                ></Input>
                <Input
                  wrapClassName="bg-gray_929 flex sm:flex-1 sm:ml-[0] ml-[15px] pr-[51.98px] rounded-[31px] sm:w-[100%] w-[auto]"
                  className="font-normal md:pr-[40px] not-italic p-[0] placeholder:text-light_green_50 self-stretch sm:pr-[20px] text-[20px] text-left text-light_green_50 tracking-[3.00px] uppercase w-[100%]"
                  name="div_Three"
                  placeholder="Filter by Industry"
                  suffix={
                    <div className="mt-[8px] mb-[9px] ml-[35px] sm:w-[100%] sm:mx-[0] w-[1%] bg-light_green_50">
                      <Img
                        src="images/img_mail.svg"
                        className="my-[auto]"
                        alt="mail"
                      />
                    </div>
                  }
                ></Input>
                <Input
                  wrapClassName="bg-gray_929 flex sm:flex-1 sm:ml-[0] ml-[15px] pr-[51.98px] rounded-[31px] sm:w-[100%] w-[auto]"
                  className="font-normal md:pr-[40px] not-italic p-[0] placeholder:text-light_green_50 self-stretch sm:pr-[20px] text-[20px] text-left text-light_green_50 tracking-[3.00px] uppercase w-[100%]"
                  name="div_Four"
                  placeholder="Filter by Sub-industry"
                  suffix={
                    <div className="mt-[8px] mb-[9px] ml-[35px] sm:w-[100%] sm:mx-[0] w-[1%] bg-light_green_50">
                      <Img
                        src="images/img_mail.svg"
                        className="my-[auto]"
                        alt="mail"
                      />
                    </div>
                  }
                ></Input>
              </div>
              <div className="flex flex-row sm:gap-[20px] items-center sm:justify-between justify-start max-w-[1784px] mt-[95px] mx-[auto] sm:pr-[20px] pr-[343px] md:pr-[40px] w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_929 text-left tracking-[2.10px] uppercase w-[auto]"
                  variant="body43"
                >
                  Company Name
                </Text>
                <Text
                  className="font-normal ml-[328px] not-italic text-gray_929 text-left tracking-[2.10px] uppercase w-[auto]"
                  variant="body43"
                >
                  Industry
                </Text>
                <Text
                  className="font-normal ml-[374px] not-italic text-gray_929 text-left tracking-[2.10px] uppercase w-[auto]"
                  variant="body43"
                >
                  Sub-Industry
                </Text>
                <Text
                  className="font-normal ml-[334px] not-italic text-gray_929 text-left tracking-[2.10px] uppercase w-[auto]"
                  variant="body44"
                >
                  Country
                </Text>
              </div>
              <div className="flex items-center justify-start max-w-[1784px] mx-[auto] w-[100%]">
                <List
                  className="flex-col gap-[1px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 flex-row sm:gap-[20px] items-start sm:justify-between justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[60px] py-[60px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_929 text-left w-[auto]"
                      variant="body32"
                    >
                      1Huddle
                    </Text>
                    <Text
                      className="font-normal ml-[372px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      Consumer
                    </Text>
                    <Text
                      className="sm:flex-1 font-normal leading-[32.00px] ml-[346px] my-[3px] not-italic text-gray_929 text-left sm:w-[100%] w-[20%]"
                      variant="body28"
                    >
                      Gaming & eSports, Job & Career Service
                    </Text>
                    <Text
                      className="font-normal ml-[116px] mt-[3px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Norway
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 flex-row sm:gap-[20px] items-start sm:justify-between justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[56px] py-[56px] w-[100%]">
                    <Text
                      className="font-normal mt-[6px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      Oto Capital
                    </Text>
                    <Text
                      className="font-normal ml-[336px] mt-[7px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Financial Technology
                    </Text>
                    <Text
                      className="font-normal ml-[240px] mt-[7px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Credit & Lending
                    </Text>
                    <Text
                      className="font-normal ml-[286px] mt-[4px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body32"
                    >
                      India
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 flex-row sm:gap-[20px] items-center sm:items-start justify-start sm:justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[58px] py-[58px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      3D Look
                    </Text>
                    <Text
                      className="font-normal ml-[369px] mt-[2px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      Consumer
                    </Text>
                    <Text
                      className="font-normal ml-[346px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Fashion
                    </Text>
                    <Text
                      className="font-normal ml-[377px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      United States
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-start justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[56px] py-[56px] w-[100%]">
                    <Text
                      className="font-normal sm:mt-[0] my-[3px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      3desk
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[394px] sm:mt-[0] my-[3px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Software and Services
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[231px] sm:mt-[0] mt-[7px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Human Resources & Recruiting
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[143px] sm:mt-[0] mt-[7px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      United Kingdom
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 flex-row sm:gap-[20px] items-center sm:justify-between justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[57px] py-[57px] w-[100%]">
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      3TEN8
                    </Text>
                    <Text
                      className="font-normal ml-[389px] my-[3px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Software and Services
                    </Text>
                    <Text
                      className="font-normal ml-[231px] mt-[6px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Developer Tools
                    </Text>
                    <Text
                      className="font-normal ml-[292px] my-[3px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      United States
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 flex-row sm:gap-[20px] items-center sm:justify-between justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[58px] py-[58px] w-[100%]">
                    <Text
                      className="font-normal mt-[2px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      4Vets
                    </Text>
                    <Text
                      className="font-normal ml-[397px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      Consumer
                    </Text>
                    <Text
                      className="font-normal ml-[346px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body32"
                    >
                      Animals
                    </Text>
                    <Text
                      className="font-normal ml-[377px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Brazil
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 flex-row sm:gap-[20px] items-center sm:justify-between justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[56px] py-[56px] w-[100%]">
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      8sec
                    </Text>
                    <Text
                      className="font-normal ml-[407px] my-[2px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      Consumer
                    </Text>
                    <Text
                      className="font-normal ml-[346px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Gaming & eSports
                    </Text>
                    <Text
                      className="font-normal ml-[274px] mt-[4px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      France
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 flex-row sm:gap-[20px] items-start sm:justify-between justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[56px] py-[56px] w-[100%]">
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      9FIN
                    </Text>
                    <Text
                      className="font-normal ml-[407px] mt-[7px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Financial Technology
                    </Text>
                    <Text
                      className="font-normal ml-[240px] mt-[8px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Asset Management
                    </Text>
                    <Text
                      className="font-normal ml-[262px] mt-[7px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      United Kingdom
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 flex-row sm:gap-[20px] items-center sm:justify-between justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[56px] py-[56px] w-[100%]">
                    <Text
                      className="font-normal my-[2px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body28"
                    >
                      9GAG
                    </Text>
                    <Text
                      className="font-normal ml-[395px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      Consumer
                    </Text>
                    <Text
                      className="font-normal ml-[346px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Social, Entertainment
                    </Text>
                    <Text
                      className="font-normal ml-[235px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Hong Kong
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 flex-row sm:gap-[20px] items-center sm:justify-between justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[58px] py-[58px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      9Slides
                    </Text>
                    <Text
                      className="font-normal ml-[382px] mt-[2px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      Consumer
                    </Text>
                    <Text
                      className="font-normal ml-[346px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      Media Content
                    </Text>
                    <Text
                      className="font-normal ml-[300px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      United States
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-start justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[61px] py-[61px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_929 text-left w-[auto]"
                      variant="body32"
                    >
                      15Five
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[393px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Software and Services
                    </Text>
                    <Text
                      className="sm:flex-1 font-normal leading-[32.00px] sm:ml-[0] ml-[231px] sm:mt-[0] my-[2px] not-italic text-gray_929 text-left sm:w-[100%] w-[20%]"
                      variant="body28"
                    >
                      Human Resources & Recruiting, Collaboration
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[126px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      United States
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 flex-row sm:gap-[20px] items-center sm:justify-between justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[56px] py-[56px] w-[100%]">
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      Perromart
                    </Text>
                    <Text
                      className="font-normal ml-[347px] my-[2px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      Consumer
                    </Text>
                    <Text
                      className="font-normal ml-[346px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body32"
                    >
                      Animals
                    </Text>
                    <Text
                      className="font-normal ml-[377px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Singapore
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 flex-row sm:gap-[20px] items-center sm:justify-between justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[56px] py-[56px] w-[100%]">
                    <Text
                      className="font-normal my-[3px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      28 labs
                    </Text>
                    <Text
                      className="font-normal ml-[383px] my-[3px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Healthcare
                    </Text>
                    <Text
                      className="font-normal ml-[344px] mt-[7px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Medical Device & Monitoring
                    </Text>
                    <Text
                      className="font-normal ml-[169px] my-[3px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      United States
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 flex-row sm:gap-[20px] items-center sm:justify-between justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[58px] py-[58px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      33Cube
                    </Text>
                    <Text
                      className="font-normal ml-[375px] mt-[2px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      Consumer
                    </Text>
                    <Text
                      className="font-normal ml-[346px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Social
                    </Text>
                    <Text
                      className="font-normal ml-[393px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      United States
                    </Text>
                  </div>
                  <div className="border-b-[1px] border-gray_310 border-solid flex flex-1 sm:flex-col flex-row sm:gap-[20px] items-start sm:justify-between justify-start my-[0] sm:pr-[20px] md:pr-[40px] pr-[55px] py-[55px] w-[100%]">
                    <Text
                      className="font-normal sm:mt-[0] mt-[5px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      37Coins
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[373px] sm:mt-[0] mt-[8px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Financial Technology
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[240px] sm:mt-[0] mt-[7px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body29"
                    >
                      Payments, Cryptocurrency
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[176px] sm:mt-[0] mt-[8px] not-italic text-gray_929 text-left w-[auto]"
                      variant="body31"
                    >
                      Singapore
                    </Text>
                  </div>
                </List>
              </div>
              <div className="flex flex-row sm:gap-[20px] items-start justify-end max-w-[1784px] mt-[80px] mx-[auto] sm:px-[20px] md:px-[40px] px-[537px] w-[100%]">
                <Text
                  className="border-b-[1px] border-gray_900_87 border-solid font-normal not-italic pb-[9px] pl-[10px] pr-[10.41px] self-stretch text-center text-gray_929 tracking-[3.00px] uppercase w-[auto]"
                  variant="body33"
                >
                  ← Prev
                </Text>
                <Text
                  className="border-b-[1px] border-gray_929 border-solid font-normal ml-[63px] not-italic pb-[9px] pl-[18.3px] pr-[18.7px] self-stretch text-center text-gray_929 tracking-[3.00px] uppercase w-[auto]"
                  variant="body33"
                >
                  1
                </Text>
                <Text
                  className="font-normal ml-[18px] not-italic text-center text-gray_929 tracking-[3.00px] uppercase w-[auto]"
                  variant="body33"
                >
                  2
                </Text>
                <Text
                  className="font-normal ml-[36px] not-italic text-center text-gray_929 tracking-[3.00px] uppercase w-[auto]"
                  variant="body33"
                >
                  3
                </Text>
                <Text
                  className="font-normal ml-[35px] not-italic text-center text-gray_929 tracking-[3.00px] uppercase w-[auto]"
                  variant="body33"
                >
                  4
                </Text>
                <Text
                  className="font-normal ml-[35px] not-italic text-center text-gray_929 tracking-[3.00px] uppercase w-[auto]"
                  variant="body33"
                >
                  5
                </Text>
                <Text
                  className="font-normal ml-[38px] mt-[6px] not-italic text-center text-gray_929 tracking-[3.00px] uppercase w-[auto]"
                  variant="body33"
                >
                  ...
                </Text>
                <Text
                  className="font-normal ml-[32px] not-italic text-center text-gray_929 tracking-[3.00px] uppercase w-[auto]"
                  variant="body33"
                >
                  191
                </Text>
                <Text
                  className="border-b-[1px] border-gray_929 border-solid font-normal ml-[75px] not-italic pb-[9px] pl-[10px] pr-[9.41px] self-stretch text-center text-gray_929 tracking-[3.00px] uppercase w-[auto]"
                  variant="body33"
                >
                  Next →
                </Text>
              </div>
            </div>
            <div className="bg-cyan_102 flex flex-col items-center justify-start mt-[239px] p-[150px] sm:px-[20px] md:px-[40px] w-[100%]">
              <Text
                className="font-nanummyeongjo not-italic text-center text-gray_929 tracking-[-1.92px] w-[auto]"
                as="h1"
                variant="h1"
              >
                Job Board
              </Text>
              <Text
                className="font-normal font-notosanskr leading-[32.00px] mt-[56px] not-italic text-center text-gray_929 sm:w-[100%] w-[52%]"
                variant="body31"
              >
                We’re investing in some of the world’s most promising companies,
                and you’ll love working for them. Here are a list of open
                positions at our portfolio companies.
              </Text>
              <Button className="bg-lime_A200 cursor-pointer font-normal font-notosanskr mb-[18px] min-w-[273px] mt-[52px] not-italic pb-[18px] pl-[59.98px] pr-[60.39px] pt-[18.98px] sm:px-[20px] md:px-[40px] rounded-[28px] text-[20px] text-center text-gray_929 tracking-[3.00px] uppercase w-[auto]">
                Apply today
              </Button>
            </div>
            <div className="flex flex-col font-notosanskr gap-[36px] items-center justify-start mt-[120px] md:px-[20px] md:w-[100%] w-[46%]">
              <Text
                className="font-normal not-italic text-center text-gray_929 tracking-[3.00px] uppercase w-[auto]"
                variant="body33"
              >
                Disclaimer
              </Text>
              <div className="flex flex-col gap-[34px] items-center justify-start pr-[2px] py-[2px] w-[100%]">
                <Text
                  className="font-normal leading-[18.00px] not-italic text-gray_929 text-left tracking-[2.10px] uppercase w-[100%]"
                  variant="body43"
                >
                  1. AS OF 31 MARCH 2022. ALL FIGURES ARE BASED ON INTERNAL DATA
                  AND THIRD PARTY DATA WHICH MAY NOT HAVE BEEN EXTERNALLY
                  VERIFIED. PORTFOLIO COMPANIES DISPLAYED ON THIS PAGE ARE NOT
                  NECESSARILY REPRESENTATIVE OF ALL INVESTMENTS IN VEHICLES
                  MANAGED BY 500 STARTUPS MANAGEMENT COMPANY, L.L.C. (TOGETHER
                  WITH ITS AFFILIATES, “500 GLOBAL”) AND THERE CAN BE NO
                  ASSURANCE THAT THE INVESTMENTS WILL BE PROFITABLE OR THAT
                  OTHER INVESTMENTS MADE IN THE FUTURE WILL HAVE SIMILAR
                  CHARACTERISTICS OR RESULTS. THIS LIST INCLUDES CURRENT AND
                  FORMER 500 GLOBAL PORTFOLIO COMPANIES WHICH HAVE BEEN ACQUIRED
                  AS WELL AS COMPANIES WHICH HAVE UNDERGONE AN INITIAL PUBLIC
                  OFFERING, AND MAY INCLUDE COMPANIES THAT ARE NO LONGER
                  OPERATING OR HAVE CHANGED SECTOR, REGION OR TECHNOLOGY. THIS
                  LIST IS UPDATED PERIODICALLY AND AS SUCH MAY NOT REFLECT
                  RECENT 500 GLOBAL INVESTMENTS. PAST RESULTS OF 500 GLOBAL
                  INVESTMENTS, POOLED INVESTMENT VEHICLES, OR INVESTMENT
                  STRATEGIES ARE NOT NECESSARILY INDICATIVE OF FUTURE RESULTS.
                  THE SECTOR, REGION AND TECHNOLOGY CATEGORIZATIONS SHOWN ON
                  THIS PAGE HAVE BEEN MADE BY 500 GLOBAL, ARE SUBJECT TO CHANGE
                  AND MAY NOT ALIGN WITH INDUSTRY STANDARDS OR THE
                  CHARACTERIZATION OF OTHER INVESTORS OR THE COMPANIES LISTED ON
                  THIS PAGE. NO CONTENT ON THIS PAGE SHOULD BE CONSIDERED AS AN
                  OFFER TO SELL OR SOLICITATION OF INTEREST TO PURCHASE ANY
                  SECURITIES, CONSTRUCTED AS FUND MARKETING MATERIALS BY
                  PROSPECTIVE INVESTORS CONSIDERING AN INVESTMENT INTO ANY 500
                  GLOBAL FUND, OR USED AS THE BASIS FOR ANY INVESTMENT
                  DECISIONS. ALL LOGOS, NAMES, AND TRADEMARKS OF THIRD PARTIES
                  REFERENCED HEREIN ARE THE TRADEMARKS AND LOGOS OF THEIR
                  RESPECTIVE OWNERS. ANY INCLUSION OF SUCH TRADEMARKS OR LOGOS
                  DOES NOT IMPLY OR CONSTITUTE ANY APPROVAL, ENDORSEMENT OR
                  SPONSORSHIP OF 500 GLOBAL BY SUCH OWNERS.
                </Text>
                <Text
                  className="font-normal leading-[18.00px] not-italic text-gray_929 text-left tracking-[2.10px] uppercase sm:w-[100%] w-[98%]"
                  variant="body43"
                >
                  2. AS OF 31 DECEMBER 2021. UNICORNS (VALUED AT $1B+) AND
                  CENTAURS (VALUED AT $100M+) ARE AGGREGATED ACROSS ALL FUNDS
                  ADVISED BY 500 STARTUPS MANAGEMENT COMPANY, L.L.C. AND ITS
                  AFFILIATES, AND ARE BASED ON INTERNAL DATA THAT HAS NOT BEEN
                  EXTERNALLY VERIFIED. THESE VALUATIONS RELATE TO SELECTED
                  PORTFOLIO COMPANIES AND ARE ESTIMATED IN ACCORDANCE WITH 500
                  GLOBAL’S VALUATION POLICY, AND ARE SUBJECT TO CHANGE. PAST
                  PERFORMANCE DOES NOT GUARANTEE FUTURE RETURNS. SOME UNICORNS
                  AND CENTAURS IN THE 500 GLOBAL PORTFOLIO HAVE NOT PUBLICLY
                  DISCLOSED THEIR VALUATIONS AND ARE NOT LISTED ON THIS PAGE.
                </Text>
              </div>
            </div>
          </div>
          <div className="md:h-[746px] h-[808px] hidden mt-[118px] md:px-[20px] relative w-[100%]">
            <div className="absolute bg-gray_929 h-[620px] sm:hidden inset-x-[0] mx-[auto] top-[0] w-[100%]"></div>
            <div className="absolute bottom-[0] flex items-center justify-start right-[1%] w-[93%]">
              <div className="flex flex-col gap-[283px] md:gap-[40px] items-start justify-start w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] sm:hidden items-start justify-start w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[42px] items-start justify-start md:mt-[0] mt-[30px] pr-[2px] py-[2px] md:w-[100%] w-[32%]">
                    <Text
                      className="font-normal leading-[21.00px] not-italic text-left text-light_green_50 tracking-[2.40px] uppercase sm:w-[100%] w-[79%]"
                      variant="body41"
                    >
                      Sign up to stay up to date on global innovation
                    </Text>
                    <Button className="bg-lime_A200 cursor-pointer font-normal mb-[7px] min-w-[211px] not-italic pb-[18px] pl-[58.98px] pr-[57.8px] pt-[18.98px] sm:px-[20px] md:px-[40px] rounded-[28px] text-[20px] text-center text-gray_929 tracking-[3.00px] uppercase w-[auto]">
                      Sign up
                    </Button>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start sm:px-[20px] px-[24px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-green_603 text-left tracking-[2.40px] uppercase w-[auto]"
                      variant="body41"
                    >
                      Do Not Sell/Share My Info
                    </Text>
                    <Text
                      className="font-normal mt-[32px] not-italic text-green_603 text-left tracking-[2.40px] uppercase w-[auto]"
                      variant="body41"
                    >
                      Privacy Policy
                    </Text>
                    <Text
                      className="font-normal mt-[33px] not-italic text-green_603 text-left tracking-[2.40px] uppercase w-[auto]"
                      variant="body41"
                    >
                      Terms of Use
                    </Text>
                    <Text
                      className="font-normal mt-[33px] not-italic text-green_603 text-left tracking-[2.40px] uppercase w-[auto]"
                      variant="body41"
                    >
                      Code of Conduct
                    </Text>
                    <Text
                      className="font-normal mt-[33px] not-italic text-green_603 text-left tracking-[2.40px] uppercase w-[auto]"
                      variant="body41"
                    >
                      Directory
                    </Text>
                    <Text
                      className="font-normal mt-[33px] not-italic text-green_603 text-left tracking-[2.40px] uppercase w-[auto]"
                      variant="body41"
                    >
                      Accessibility
                    </Text>
                  </div>
                  <div className="flex md:flex-1 font-nanummyeongjo items-center justify-start md:ml-[0] ml-[53px] md:mt-[0] mt-[20px] md:w-[100%] w-[32%]">
                    <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="not-italic text-left text-light_green_50 tracking-[-0.96px] w-[auto]"
                          variant="body9"
                        >
                          Linkedin
                        </Text>
                        <Text
                          className="mt-[25px] not-italic text-left text-light_green_50 tracking-[-0.96px] w-[auto]"
                          variant="body10"
                        >
                          Facebook
                        </Text>
                        <Text
                          className="font-normal mt-[31px] not-italic text-left text-light_green_50 tracking-[-0.96px] w-[auto]"
                          variant="body8"
                        >
                          Instagram
                        </Text>
                        <Text
                          className="mt-[20px] not-italic text-left text-light_green_50 tracking-[-0.96px] w-[auto]"
                          variant="body10"
                        >
                          Twitter
                        </Text>
                      </div>
                      <Img
                        src="images/img_svg_white_a700.svg"
                        className="h-[144px] mt-[9px] w-[144px]"
                        alt="svg_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex sm:hidden items-start justify-end pr-[3px] pt-[3px] rotate-[180deg] md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal mt-[602px] not-italic rotate-[180deg] text-left text-light_green_50 tracking-[2.10px] uppercase w-[auto]"
                    variant="body49"
                  >
                    ©500 GLOBAL 2023
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PickSectororLocatPage;
