import React from "react";

import { Img, Text, Line, Button, Input, List, Slider } from "components";

const LandpgvOnePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <header className="bg-white_A700 flex flex-col md:flex-row md:gap-[1px] items-center md:items-start justify-center md:justify-start md:m-[4px] md:px-[20px] md:relative w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center mx-[auto] px-[15px] w-[75%]">
            <div className="header-row mt-[14px] mb-[18px]">
              <Img
                src="images/img_svg_blue_a200.svg"
                className="h-[37px] w-[177px]"
                alt="svg"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <ul className="flex flex-row sm:hidden items-center justify-center md:ml-[0] ml-[202px] p-[26px] sm:px-[20px] md:w-[100%] w-[38%] common-row-list">
              <li className="ml-[21px] sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                <a
                  className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_600 text-left tracking-[0.10px]"
                  href="javascript:"
                >
                  Proxy
                </a>
              </li>
              <li className="mt-[1px] mb-[2px] ml-[80px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_600 text-left tracking-[0.10px]"
                  href="javascript:"
                >
                  Web Data
                </a>
              </li>
              <li className="mb-[2px] ml-[84px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_600 text-left tracking-[0.10px]"
                  href="javascript:"
                >
                  Resources
                </a>
              </li>
              <li className="ml-[81px] mr-[20px] sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                <a
                  className="cursor-pointer font-normal not-italic text-[12px] text-bluegray_600 text-left tracking-[0.10px]"
                  href="javascript:"
                >
                  Pricing
                </a>
              </li>
            </ul>
            <div className="flex flex-row gap-[14px] sm:hidden items-start justify-start md:ml-[0] ml-[184px] pb-[23.81px] pt-[23.8px] self-stretch w-[auto]">
              <div className="flex flex-row items-center justify-evenly py-[2px] w-[68%]">
                <Text
                  className="font-normal not-italic text-bluegray_600 text-left tracking-[0.10px] uppercase w-[auto]"
                  variant="body44"
                >
                  en
                </Text>
                <Img
                  src="images/img_arrowdown_bluegray_200.svg"
                  className="h-[6px] w-[auto]"
                  alt="arrowdown"
                />
              </div>
              <Line className="bg-bluegray_101 h-[30px] w-[1px]" />
            </div>
            <div className="flex flex-row sm:hidden items-center justify-between pl-[17px] py-[17px] md:w-[100%] w-[20%]">
              <Text
                className="font-medium text-blue_A200 text-center tracking-[0.10px] w-[auto]"
                variant="body47"
              >
                Contact sales
              </Text>
              <Text
                className="font-medium text-blue_A200 text-left tracking-[0.10px] w-[auto]"
                variant="body47"
              >
                Log in
              </Text>
              <Button className="bg-white_A700 border-[1px] border-blue_A200 border-solid cursor-pointer font-medium min-w-[81px] my-[4px] pl-[16px] pr-[17.42px] py-[2px] rounded-[14px] text-[13px] text-blue_A200 text-center tracking-[0.10px] w-[auto]">
                Sign up
              </Button>
            </div>
          </div>
        </header>
        <div className="h-[5711px] sm:h-[6165px] md:h-[7291px] md:px-[20px] relative w-[100%]">
          <div className="md:h-[189px] h-[73px] ml-[auto] mt-[124px] rotate-[-90deg] w-[2%]">
            <div className="absolute bg-indigo_700 bottom-[0] h-[65px] inset-x-[0] mx-[auto] rotate-[-90deg] rounded-[5px] w-[100%]"></div>
            <div className="absolute md:h-[64px] h-[70px] inset-x-[0] mx-[auto] top-[0] w-[87%]">
              <div className="absolute border-[2px] border-solid border-white_A700 bottom-[0] h-[64px] inset-x-[0] mx-[auto] w-[100%]"></div>
              <Text
                className="absolute font-medium left-[0] text-center text-white_A700 top-[0] tracking-[0.20px] sm:w-[100%] w-[37%]"
                variant="body51"
              >
                Accessibility
              </Text>
            </div>
          </div>
          <div className="absolute flex flex-col md:gap-[40px] gap-[70px] h-[100%] inset-[0] items-center justify-center m-[auto] py-[10px] w-[100%]">
            <div className="flex flex-col gap-[231px] md:gap-[40px] items-center justify-start md:w-[100%] w-[99%]">
              <div className="md:h-[759px] h-[779px] p-[10px] relative w-[100%]">
                <Img
                  src="images/img_logosimageherosvg.svg"
                  className="absolute h-[759px] inset-y-[0] my-[auto] right-[2%] w-[auto]"
                  alt="logosimageheros"
                />
                <div className="absolute bottom-[14%] flex flex-col items-start justify-start left-[18%] w-[35%]">
                  <Img
                    src="images/img_ul.svg"
                    className="h-[39px] w-[auto]"
                    alt="ul"
                  />
                  <div className="flex items-start justify-start mt-[29px] pb-[0.59px] pr-[156px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                    <Text
                      className="leading-[41.00px] text-bluegray_801 text-left tracking-[0.76px]"
                      variant="body18"
                    ></Text>
                  </div>
                  <div className="flex items-start justify-start mt-[30px] self-stretch sm:w-[100%] w-[auto]">
                    <Text
                      className="font-light leading-[30.00px] text-bluegray_600 text-left tracking-[0.20px]"
                      variant="body33"
                    >
                      <>
                        Award-winning proxy networks, powerful web scrapers, and
                        ready-to-use datasets for download.
                        <br />
                        Welcome to the world’s #1 web data platform.
                      </>
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start mt-[50px] pr-[4.92px] self-stretch sm:w-[100%] w-[auto]">
                    <div className="bg-white_A700 flex items-start justify-start pb-[11.8px] pl-[56.67px] pr-[46.67px] pt-[12px] sm:px-[20px] md:px-[40px] rounded-[22px] self-stretch shadow-bs w-[auto]">
                      <div className="flex flex-row gap-[5.56px] items-center justify-start ml-[auto] pt-[1.09px] self-stretch w-[auto]">
                        <Text
                          className="font-normal not-italic text-blue_A200 text-center tracking-[0.10px] w-[auto]"
                          variant="body41"
                        >
                          Start free trial
                        </Text>
                        <Img
                          src="images/img_arrowright_blue_a200.svg"
                          className="h-[17px] w-[17px]"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                    <Input
                      wrapClassName="bg-blue_A200 flex pb-[11.98px] pl-[72px] pr-[45.08px] pt-[12px] rounded-[23px] shadow-bs1 sm:w-[100%] w-[53%]"
                      className="font-normal md:px-[40px] not-italic p-[0] placeholder:text-white_A700 sm:px-[20px] text-[16px] text-center text-white_A700 tracking-[0.10px] w-[100%]"
                      name="a"
                      placeholder="Sign up with Google"
                      prefix={
                        <Img
                          src="images/img_signal_white_a700_35x35.svg"
                          className="my-[auto]"
                          alt="signal"
                        />
                      }
                    ></Input>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[36px] sm:pr-[20px] pr-[25px] py-[25px] w-[100%]">
                    <div className="flex sm:flex-1 flex-row items-start justify-between pr-[3px] sm:w-[100%] w-[28%]">
                      <Button className="bg-blue_50 flex h-[22px] items-center justify-center p-[3px] rounded-[50%] w-[22px]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[12px]"
                          alt="checkmark"
                        />
                      </Button>
                      <Text
                        className="font-bold mt-[2px] text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                        variant="body42"
                      >
                        15,000+
                      </Text>
                      <Text
                        className="font-light mt-[2px] text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                        variant="body43"
                      >
                        Customers
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-row items-start justify-center sm:ml-[0] ml-[20px] sm:w-[100%] w-[23%]">
                      <Button className="bg-blue_50 flex h-[22px] items-center justify-center p-[3px] rounded-[50%] w-[22px]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[12px]"
                          alt="checkmark_One"
                        />
                      </Button>
                      <Text
                        className="font-bold ml-[8px] text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                        variant="body42"
                      >
                        99.99%
                      </Text>
                      <Text
                        className="font-light ml-[2px] mt-[3px] text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                        variant="body42"
                      >
                        Uptime
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-row items-start justify-center sm:ml-[0] ml-[19px] sm:w-[100%] w-[33%]">
                      <Button className="bg-blue_50 flex h-[22px] items-center justify-center p-[3px] rounded-[50%] w-[22px]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[12px]"
                          alt="checkmark_Two"
                        />
                      </Button>
                      <Text
                        className="font-bold ml-[8px] text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                        variant="body43"
                      >
                        CCPA & GDPR
                      </Text>
                      <Text
                        className="font-light ml-[5px] mt-[3px] text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                        variant="body42"
                      >
                        Compliant
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex items-center justify-start pb-[60px] sm:px-[20px] md:px-[40px] px-[60px] w-[100%]">
                <div className="flex flex-col gap-[40px] items-center justify-start p-[10px] md:w-[100%] w-[68%]">
                  <div className="flex items-start justify-start mt-[9px] pb-[0.59px] pl-[175.16px] pr-[176.84px] sm:px-[20px] md:px-[40px] self-stretch md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_801 text-center tracking-[1.14px] w-[auto]"
                      variant="body19"
                    ></Text>
                  </div>
                  <List
                    className="flex-col gap-[20px] grid items-center mb-[10px] p-[10px] w-[99%]"
                    orientation="vertical"
                  >
                    <div className="flex md:flex-col flex-row gap-[20px] items-center justify-start p-[10px] w-[100%]">
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start md:ml-[0] ml-[40px] p-[10px] rounded-[8px] shadow-bs2 md:w-[100%] w-[14%]">
                        <div className="flex flex-col items-start justify-start my-[16px] pb-[15.39px] pl-[23.17px] pr-[23.83px] pt-[102.39px] sm:px-[20px] self-stretch w-[auto]">
                          <Img
                            src="images/img_ecommercesvg.svg"
                            className="h-[88px] w-[130px]"
                            alt="ecommercesvg"
                          />
                          <Text
                            className="font-medium text-bluegray_801 text-center tracking-[0.32px] w-[auto]"
                            variant="body43"
                          >
                            E-commerce
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[10px] rounded-[8px] shadow-bs2 md:w-[100%] w-[14%]">
                        <div className="flex flex-col items-start justify-start my-[5px] pb-[15.78px] pl-[8.89px] pr-[8.71px] pt-[102.39px] self-stretch w-[auto]">
                          <Img
                            src="images/img_socialmediafo.svg"
                            className="h-[88px] w-[136px]"
                            alt="socialmediafo"
                          />
                          <Text
                            className="font-medium leading-[22.00px] md:max-w-[100%] max-w-[118px] text-bluegray_801 text-center tracking-[0.32px]"
                            variant="body41"
                          >
                            Social Media for Marketing
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[10px] rounded-[8px] shadow-bs2 md:w-[100%] w-[14%]">
                        <div className="flex flex-col items-start justify-start my-[16px] pb-[15.39px] pl-[25.8px] pr-[26.2px] pt-[102.39px] sm:px-[20px] self-stretch w-[auto]">
                          <Img
                            src="images/img_searchenginer.svg"
                            className="h-[88px] w-[132px]"
                            alt="searchenginer"
                          />
                          <Text
                            className="font-medium text-bluegray_801 text-center tracking-[0.32px] w-[auto]"
                            variant="body43"
                          >
                            SERP & SEO
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 items-center justify-start p-[10px] rounded-[8px] shadow-bs2 md:w-[100%] w-[14%]">
                        <div className="flex flex-col items-start justify-start my-[16px] pb-[15.39px] pl-[39.97px] pr-[39.03px] pt-[102.39px] sm:px-[20px] self-stretch w-[auto]">
                          <Img
                            src="images/img_adtechsvg.svg"
                            className="h-[88px] w-[130px]"
                            alt="adtechsvg"
                          />
                          <Text
                            className="font-medium text-bluegray_801 text-center tracking-[0.32px] w-[auto]"
                            variant="body43"
                          >
                            Ad Tech
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-center p-[10px] rounded-[8px] shadow-bs2 md:w-[100%] w-[30%]">
                        <Img
                          src="images/img_discoveryzonebadgesvg.svg"
                          className="h-[24px] mt-[14px] w-[auto]"
                          alt="discoveryzoneba"
                        />
                        <div className="flex flex-col gap-[-1px] items-center justify-start mb-[12px] mt-[5px] pb-[0.39px] pl-[48.23px] pr-[47.77px] sm:px-[20px] md:px-[40px] self-stretch w-[auto]">
                          <Img
                            src="images/img_discoveryzoneimgsvg.svg"
                            className="h-[95px] w-[190px]"
                            alt="discoveryzoneim"
                          />
                          <Text
                            className="font-medium text-bluegray_801 text-center tracking-[0.10px] w-[auto]"
                            variant="body47"
                          >
                            Developer Projects & Tutorials Videos
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="gap-[20px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-start p-[10px] w-[100%]">
                      <div className="bg-white_A700 flex flex-1 items-center justify-start p-[10px] rounded-[8px] shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-start justify-start my-[11px] pb-[15.39px] pl-[8.66px] pr-[9.34px] pt-[102.39px] self-stretch w-[auto]">
                          <Img
                            src="images/img_marketresearchsvg.svg"
                            className="h-[88px] w-[130px]"
                            alt="marketresearchs"
                          />
                          <Text
                            className="font-medium text-bluegray_801 text-center tracking-[0.32px] w-[auto]"
                            variant="body43"
                          >
                            Market Research
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 items-center justify-start p-[10px] rounded-[8px] shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-start justify-start my-[11px] pb-[15.39px] pl-[46.97px] pr-[46.03px] pt-[102.39px] sm:px-[20px] md:px-[40px] self-stretch w-[auto]">
                          <Img
                            src="images/img_travelsvg.svg"
                            className="h-[88px] w-[130px]"
                            alt="travelsvg"
                          />
                          <Text
                            className="font-medium text-bluegray_801 text-center tracking-[0.32px] w-[auto]"
                            variant="body43"
                          >
                            Travel
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 items-center justify-start p-[10px] rounded-[8px] shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-start justify-start pb-[15.78px] pl-[35.3px] pr-[35.1px] pt-[102.39px] sm:px-[20px] self-stretch w-[auto]">
                          <Img
                            src="images/img_financialservicesdatasvg.svg"
                            className="h-[88px] w-[130px]"
                            alt="financialservic"
                          />
                          <Text
                            className="font-medium leading-[22.00px] md:max-w-[100%] max-w-[65px] text-bluegray_801 text-center tracking-[0.32px]"
                            variant="body43"
                          >
                            Financial Services
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 items-center justify-start p-[10px] rounded-[8px] shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-start justify-start my-[11px] pb-[15.39px] pl-[29.53px] pr-[30.47px] pt-[102.39px] sm:px-[20px] self-stretch w-[auto]">
                          <Img
                            src="images/img_usecaseimgsvg.svg"
                            className="h-[88px] w-[130px]"
                            alt="usecaseimgsvg"
                          />
                          <Text
                            className="font-medium text-bluegray_801 text-center tracking-[0.32px] w-[auto]"
                            variant="body43"
                          >
                            Healthcare
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 items-center justify-start p-[10px] rounded-[8px] shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-start justify-start my-[11px] pb-[15.39px] pl-[28.97px] pr-[29.03px] pt-[102.39px] sm:px-[20px] self-stretch w-[auto]">
                          <Img
                            src="images/img_realestate1svg.svg"
                            className="h-[88px] w-[130px]"
                            alt="realestate1svg"
                          />
                          <Text
                            className="font-medium text-bluegray_801 text-center tracking-[0.32px] w-[auto]"
                            variant="body43"
                          >
                            Real Estate
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 items-center justify-start p-[10px] rounded-[8px] shadow-bs2 w-[100%]">
                        <div className="flex flex-col items-start justify-start my-[11px] pb-[15.39px] pl-[16.02px] pr-[15.98px] pt-[102.39px] self-stretch w-[auto]">
                          <Img
                            src="images/img_dataforgoodnsvg.svg"
                            className="h-[88px] w-[130px]"
                            alt="dataforgoodnsvg"
                          />
                          <Text
                            className="font-medium text-bluegray_801 text-center tracking-[0.32px] w-[auto]"
                            variant="body42"
                          >
                            Data for Good
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="bg-gray_50 flex items-center justify-end py-[40px] w-[100%]">
                <div className="flex flex-col gap-[42px] items-center justify-start mt-[10px] pb-[20px] px-[20px] w-[100%]">
                  <Text
                    className="font-normal leading-[45.00px] not-italic text-bluegray_801 text-center tracking-[1.14px] sm:w-[100%] w-[23%]"
                    variant="body19"
                  >
                    Fresh, accurate, and compatible with any tool
                  </Text>
                  <Img
                    src="images/img_hpintegrationsimgsvg.svg"
                    className="h-[177px] w-[auto]"
                    alt="hpintegrationsi"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[50px] items-center justify-start md:ml-[0] ml-[375px] mt-[119px] md:w-[100%] w-[61%]">
                <div className="flex items-center justify-start w-[100%]">
                  <Text
                    className="font-normal leading-[45.00px] not-italic text-bluegray_801 text-center tracking-[1.14px]"
                    variant="body19"
                  ></Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly pb-[20px] w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start md:w-[100%] w-[25%]">
                    <Img
                      src="images/img_reliablesvg.svg"
                      className="h-[160px] w-[160px]"
                      alt="reliablesvg"
                    />
                    <div className="flex flex-col gap-[11px] items-center justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_801 text-center tracking-[0.20px] w-[auto]"
                        variant="body37"
                      >
                        Most reliable
                      </Text>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-light leading-[22.00px] text-bluegray_600 text-center tracking-[0.10px] sm:w-[100%] w-[98%]"
                          variant="body41"
                        >
                          Highest quality data, best network uptime, fastest
                          output
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start md:w-[100%] w-[25%]">
                    <Img
                      src="images/img_flexiblesvg.svg"
                      className="h-[160px] w-[160px]"
                      alt="flexiblesvg"
                    />
                    <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_801 text-center tracking-[0.20px] w-[auto]"
                        variant="body37"
                      >
                        Most flexible
                      </Text>
                      <Text
                        className="font-light leading-[22.00px] text-bluegray_600 text-center tracking-[0.10px] sm:w-[100%] w-[75%]"
                        variant="body41"
                      >
                        Unlimited scale and customizing possibilities
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start md:w-[100%] w-[25%]">
                    <Img
                      src="images/img_compliantsvg.svg"
                      className="h-[160px] w-[160px]"
                      alt="compliantsvg"
                    />
                    <div className="flex flex-col gap-[9px] items-center justify-start pt-[3px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_801 text-center tracking-[0.20px] w-[auto]"
                        variant="body37"
                      >
                        Fully compliant
                      </Text>
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-light leading-[22.00px] text-bluegray_600 text-center tracking-[0.10px] sm:w-[100%] w-[81%]"
                          variant="body41"
                        >
                          Transparent and enterprise-friendly infrastructure
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start md:w-[100%] w-[25%]">
                    <Img
                      src="images/img_efficientsvg.svg"
                      className="h-[160px] w-[160px]"
                      alt="efficientsvg"
                    />
                    <div className="flex flex-col gap-[14px] items-center justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_801 text-center tracking-[0.20px] w-[auto]"
                        variant="body37"
                      >
                        Most efficient
                      </Text>
                      <Text
                        className="font-light text-bluegray_600 text-center tracking-[0.10px] w-[auto]"
                        variant="body43"
                      >
                        Minimum in-house resources needed
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-bluegray_905 flex items-center justify-start mt-[100px] p-[10px] w-[100%]">
                <div className="bg-bluegray_905 flex items-start justify-start px-[15px] py-[10px] self-stretch md:w-[100%] w-[auto]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[48%]">
                      <div className="md:h-[496px] h-[497px] relative w-[100%]">
                        <Img
                          src="images/img_maskgroup_indigo_300.png"
                          className="h-[496px] m-[auto] object-cover w-[auto]"
                          alt="maskgroup"
                        />
                        <div
                          className="absolute bg-cover bg-no-repeat flex md:h-[250px] h-[284px] inset-[0] justify-end m-[auto] p-[7px] sm:w-[100%] w-[85%]"
                          style={{
                            backgroundImage: "url('images/img_group96.svg')",
                          }}
                        >
                          <div className="h-[246px] md:h-[250px] mb-[4px] mt-[auto] mx-[auto] sm:w-[100%] w-[96%]">
                            <div className="absolute h-[246px] inset-[0] justify-center m-[auto] w-[100%]">
                              <div className="h-[246px] m-[auto] w-[100%]">
                                <div className="absolute h-[246px] inset-[0] justify-center m-[auto] w-[100%]">
                                  <div className="absolute h-[246px] inset-[0] justify-center m-[auto] w-[100%]">
                                    <div className="h-[246px] m-[auto] w-[100%]">
                                      <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                                        <div className="flex flex-col gap-[28px] justify-start w-[100%]">
                                          <Img
                                            src="images/img_vector_gray_52.svg"
                                            className="h-[104px] md:ml-[0] ml-[31px] w-[auto]"
                                            alt="vector"
                                          />
                                          <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between shadow-bs3 w-[100%]">
                                            <div className="flex sm:flex-1 items-center justify-start shadow-bs4 sm:w-[100%] w-[auto]">
                                              <Img
                                                src="images/img_vector_112x145.png"
                                                className="h-[112px] md:h-[auto] object-cover w-[100%]"
                                                alt="vector_One"
                                              />
                                            </div>
                                            <Img
                                              src="images/img_group.svg"
                                              className="h-[112px] w-[auto]"
                                              alt="group"
                                            />
                                            <div className="h-[112px] md:h-[66px] relative sm:w-[100%] w-[31%]">
                                              <div className="h-[112px] md:h-[66px] m-[auto] w-[100%]">
                                                <div className="h-[112px] md:h-[57px] m-[auto] w-[100%]">
                                                  <div className="h-[112px] md:h-[45px] m-[auto] w-[100%]">
                                                    <div className="absolute h-[112px] md:h-[45px] inset-[0] justify-center m-[auto] w-[100%]">
                                                      <div className="absolute h-[67px] right-[0] top-[0] w-[95%]">
                                                        <Img
                                                          src="images/img_vector_bluegray_906.svg"
                                                          className="h-[45px] mb-[-0.18px] ml-[3px] w-[auto] z-[1]"
                                                          alt="vector_Three"
                                                        />
                                                        <Img
                                                          src="images/img_vector_yellow_802.svg"
                                                          className="h-[22px] mt-[auto] mx-[auto] w-[auto]"
                                                          alt="vector_Two"
                                                        />
                                                      </div>
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[45px] inset-x-[0] items-center justify-start mx-[auto] pb-[3px] px-[3px] w-[69%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group104.svg')",
                                                        }}
                                                      >
                                                        <Img
                                                          src="images/img_arrowdown_bluegray_908.svg"
                                                          className="h-[40px] w-[auto]"
                                                          alt="arrowdown_One"
                                                        />
                                                      </div>
                                                      <div
                                                        className="absolute bg-cover bg-no-repeat flex left-[0] pt-[10px] px-[10px] top-[36%] w-[88%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group107.svg')",
                                                        }}
                                                      >
                                                        <div className="flex flex-row items-center justify-center ml-[23px] mt-[auto] w-[38%]">
                                                          <div className="flex relative w-[76%]">
                                                            <div className="h-[12px] my-[auto] w-[71%]">
                                                              <Img
                                                                src="images/img_location.svg"
                                                                className="absolute h-[12px] inset-y-[0] left-[0] my-[auto] w-[13px]"
                                                                alt="location"
                                                              />
                                                              <div
                                                                className="absolute bg-cover bg-no-repeat flex h-[100%] inset-y-[0] items-center justify-end my-[auto] p-[2px] right-[0] w-[11px]"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_group108.svg')",
                                                                }}
                                                              >
                                                                <Img
                                                                  src="images/img_vector_yellow_803.svg"
                                                                  className="h-[7px] w-[auto]"
                                                                  alt="vector_Four"
                                                                />
                                                              </div>
                                                            </div>
                                                            <div
                                                              className="bg-cover bg-no-repeat flex h-[11px] items-end justify-start ml-[-0.55px] my-[auto] p-[2px] w-[10px] z-[1]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_arrowdown_bluegray_908.svg')",
                                                              }}
                                                            >
                                                              <Img
                                                                src="images/img_vector_yellow_804.svg"
                                                                className="h-[2px] mb-[4px] w-[2px]"
                                                                alt="vector_Five"
                                                              />
                                                            </div>
                                                          </div>
                                                          <Img
                                                            src="images/img_volume.svg"
                                                            className="h-[12px] w-[auto]"
                                                            alt="volume"
                                                          />
                                                        </div>
                                                        <Img
                                                          src="images/img_checkmark_bluegray_913.svg"
                                                          className="h-[11px] ml-[-2.12px] mr-[24px] mt-[auto] w-[auto] z-[1]"
                                                          alt="checkmark_Three"
                                                        />
                                                      </div>
                                                    </div>
                                                    <Img
                                                      src="images/img_airplane.svg"
                                                      className="absolute bottom-[36%] h-[22px] right-[0] w-[23px]"
                                                      alt="airplane"
                                                    />
                                                    <Img
                                                      src="images/img_vector_white_a700_41x107.svg"
                                                      className="absolute h-[41px] inset-x-[0] mx-[auto] top-[3%] w-[auto]"
                                                      alt="vector_Six"
                                                    />
                                                  </div>
                                                  <div className="absolute bottom-[4%] flex flex-col gap-[5px] inset-x-[0] items-start justify-start mx-[auto] w-[64%]">
                                                    <div className="flex flex-row gap-[56px] items-center justify-start md:w-[100%] w-[88%]">
                                                      <Img
                                                        src="images/img_vector.svg"
                                                        className="h-[12px] w-[auto]"
                                                        alt="vector_Seven"
                                                      />
                                                      <Img
                                                        src="images/img_location.svg"
                                                        className="h-[12px] w-[auto]"
                                                        alt="location_One"
                                                      />
                                                    </div>
                                                    <div
                                                      className="bg-cover bg-no-repeat flex h-[40px] items-center justify-start p-[8px] w-[100%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group105.svg')",
                                                      }}
                                                    >
                                                      <div className="flex flex-row items-center justify-center mb-[13px] md:w-[100%] w-[44%]">
                                                        <Img
                                                          src="images/img_question.svg"
                                                          className="h-[10px] w-[auto]"
                                                          alt="question"
                                                        />
                                                        <div
                                                          className="bg-cover bg-no-repeat flex h-[10px] items-center justify-start p-[2px] w-[23%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group110.svg')",
                                                          }}
                                                        >
                                                          <Img
                                                            src="images/img_vector_bluegray_916.svg"
                                                            className="h-[5px] w-[auto]"
                                                            alt="vector_Eight"
                                                          />
                                                        </div>
                                                        <Img
                                                          src="images/img_question_white_a700.svg"
                                                          className="h-[10px] w-[auto]"
                                                          alt="question_One"
                                                        />
                                                        <Img
                                                          src="images/img_vector_white_a700.svg"
                                                          className="h-[9px] w-[auto]"
                                                          alt="vector_Nine"
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="absolute flex flex-col inset-x-[0] items-end justify-start mx-[auto] top-[4%] w-[78%]">
                                                  <div
                                                    className="bg-cover bg-no-repeat flex flex-row h-[40px] items-center justify-start p-[5px] w-[100%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group106.svg')",
                                                    }}
                                                  >
                                                    <div className="h-[20px] md:h-[28px] my-[4px] relative w-[20px]">
                                                      <div className="flex h-[100%] items-center justify-start m-[auto] w-[20px]">
                                                        <div className="flex flex-row h-[20px] items-start justify-evenly w-[20px]">
                                                          <div className="flex flex-col items-end justify-start mt-[2px] w-[70%]">
                                                            <Img
                                                              src="images/img_vector_yellow_805.svg"
                                                              className="h-[5px] w-[auto]"
                                                              alt="vector_Ten"
                                                            />
                                                            <Img
                                                              src="images/img_vector_light_blue_900.svg"
                                                              className="h-[13px] w-[auto]"
                                                              alt="vector_Eleven"
                                                            />
                                                          </div>
                                                          <Img
                                                            src="images/img_vector_blue_301.svg"
                                                            className="h-[20px] w-[auto]"
                                                            alt="vector_Twelve"
                                                          />
                                                        </div>
                                                      </div>
                                                      <Img
                                                        src="images/img_vector_red_403.svg"
                                                        className="absolute h-[3px] left-[0] top-[35%] w-[auto]"
                                                        alt="vector_Thirteen"
                                                      />
                                                    </div>
                                                    <Img
                                                      src="images/img_vector_white_a700_17x72.svg"
                                                      className="h-[17px] w-[auto]"
                                                      alt="vector_Fourteen"
                                                    />
                                                  </div>
                                                  <div className="flex flex-row gap-[8px] items-center justify-end ml-[auto] mt-[5px] md:w-[100%] w-[24%]">
                                                    <Img
                                                      src="images/img_group108.svg"
                                                      className="h-[11px] w-[auto]"
                                                      alt="globe"
                                                    />
                                                    <Img
                                                      src="images/img_bookmark.svg"
                                                      className="h-[11px] w-[auto]"
                                                      alt="bookmark"
                                                    />
                                                  </div>
                                                  <Img
                                                    src="images/img_vector_pink_901.svg"
                                                    className="h-[5px] mt-[5px] w-[auto]"
                                                    alt="vector_Fifteen"
                                                  />
                                                </div>
                                              </div>
                                              <Img
                                                src="images/img_vector_pink_902.svg"
                                                className="absolute h-[5px] left-[10%] top-[36%] w-[auto]"
                                                alt="vector_Sixteen"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <Img
                                        src="images/img_contrast.svg"
                                        className="absolute h-[83px] left-[7%] top-[0] w-[82px]"
                                        alt="contrast"
                                      />
                                    </div>
                                    <div
                                      className="absolute bg-cover bg-no-repeat flex flex-col gap-[5px] h-[104px] items-center justify-center left-[7%] p-[10px] top-[0] w-[19%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group98.svg')",
                                      }}
                                    >
                                      <div className="md:h-[32px] h-[44px] mt-[20px] relative w-[97%]">
                                        <div className="absolute md:h-[12px] h-[44px] inset-[0] justify-center m-[auto] w-[100%]">
                                          <div className="absolute bottom-[0] flex left-[0] w-[84%]">
                                            <div className="flex my-[auto] w-[94%]">
                                              <div className="flex flex-row items-center justify-evenly my-[auto] w-[92%]">
                                                <div className="flex relative w-[75%]">
                                                  <div className="flex items-center justify-start my-[auto] w-[91%]">
                                                    <div className="flex flex-row items-center justify-evenly w-[100%]">
                                                      <Img
                                                        src="images/img_vector_bluegray_920.svg"
                                                        className="h-[3px] w-[2px]"
                                                        alt="vector_Seventeen"
                                                      />
                                                      <Img
                                                        src="images/img_vector_bluegray_921.svg"
                                                        className="h-[3px] w-[2px]"
                                                        alt="vector_Eighteen"
                                                      />
                                                      <Img
                                                        src="images/img_vector_bluegray_922.svg"
                                                        className="h-[3px] w-[2px]"
                                                        alt="vector_Nineteen"
                                                      />
                                                      <Img
                                                        src="images/img_vector_bluegray_923.svg"
                                                        className="h-[3px] w-[2px]"
                                                        alt="vector_Twenty"
                                                      />
                                                      <Img
                                                        src="images/img_vector_bluegray_922.svg"
                                                        className="h-[3px] w-[2px]"
                                                        alt="vector_TwentyOne"
                                                      />
                                                      <Img
                                                        src="images/img_vector_bluegray_925.svg"
                                                        className="h-[3px] w-[2px]"
                                                        alt="vector_TwentyTwo"
                                                      />
                                                      <Img
                                                        src="images/img_vector_bluegray_926.svg"
                                                        className="h-[3px] w-[2px]"
                                                        alt="vector_TwentyThree"
                                                      />
                                                      <Img
                                                        src="images/img_vector_bluegray_923.svg"
                                                        className="h-[3px] w-[2px]"
                                                        alt="vector_TwentyFour"
                                                      />
                                                      <Img
                                                        src="images/img_vector_bluegray_928.svg"
                                                        className="h-[3px] w-[4px]"
                                                        alt="vector_TwentyFive"
                                                      />
                                                    </div>
                                                  </div>
                                                  <Img
                                                    src="images/img_vector_bluegray_929.svg"
                                                    className="h-[3px] ml-[-0.24px] my-[auto] w-[3px] z-[1]"
                                                    alt="vector_TwentySix"
                                                  />
                                                </div>
                                                <div className="flex flex-row items-center justify-evenly w-[24%]">
                                                  <Img
                                                    src="images/img_vector_bluegray_930.svg"
                                                    className="h-[3px] w-[2px]"
                                                    alt="vector_TwentySeven"
                                                  />
                                                  <Img
                                                    src="images/img_vector_bluegray_921.svg"
                                                    className="h-[3px] w-[2px]"
                                                    alt="vector_TwentyEight"
                                                  />
                                                  <Img
                                                    src="images/img_vector_bluegray_929.svg"
                                                    className="h-[3px] w-[3px]"
                                                    alt="vector_TwentyNine"
                                                  />
                                                </div>
                                              </div>
                                              <Img
                                                src="images/img_vector_bluegray_928.svg"
                                                className="h-[3px] ml-[-0.37px] my-[auto] w-[4px] z-[1]"
                                                alt="vector_Thirty"
                                              />
                                            </div>
                                            <Img
                                              src="images/img_vector_bluegray_929.svg"
                                              className="h-[3px] ml-[-0.25px] my-[auto] w-[3px] z-[1]"
                                              alt="vector_ThirtyOne"
                                            />
                                          </div>
                                          <div className="absolute bottom-[0] flex flex-row items-center justify-evenly right-[0] w-[15%]">
                                            <Img
                                              src="images/img_vector_bluegray_930.svg"
                                              className="h-[3px] w-[2px]"
                                              alt="vector_ThirtyTwo"
                                            />
                                            <Img
                                              src="images/img_vector_bluegray_936.svg"
                                              className="h-[3px] w-[2px]"
                                              alt="vector_ThirtyThree"
                                            />
                                            <Img
                                              src="images/img_vector_bluegray_922.svg"
                                              className="h-[3px] w-[2px]"
                                              alt="vector_ThirtyFour"
                                            />
                                          </div>
                                          <Img
                                            src="images/img_volume_bluegray_938.svg"
                                            className="absolute h-[12px] left-[7%] top-[0] w-[auto]"
                                            alt="volume_One"
                                          />
                                        </div>
                                        <div className="absolute flex flex-row items-start justify-center left-[22%] top-[7%] w-[30%]">
                                          <Img
                                            src="images/img_eye.svg"
                                            className="h-[9px] w-[8px]"
                                            alt="eye"
                                          />
                                          <Img
                                            src="images/img_user.svg"
                                            className="h-[12px] w-[auto]"
                                            alt="user"
                                          />
                                        </div>
                                        <Img
                                          src="images/img_vector_bluegray_941.svg"
                                          className="absolute h-[12px] right-[23%] top-[0] w-[auto]"
                                          alt="vector_ThirtyFive"
                                        />
                                        <Img
                                          src="images/img_lock.svg"
                                          className="absolute h-[12px] right-[8%] top-[0] w-[auto]"
                                          alt="lock"
                                        />
                                      </div>
                                      <div className="flex flex-row items-center justify-center mb-[5px] md:w-[100%] w-[34%]">
                                        <Img
                                          src="images/img_vector_bluegray_943.svg"
                                          className="h-[7px] w-[auto]"
                                          alt="vector_ThirtySix"
                                        />
                                        <Img
                                          src="images/img_vector_bluegray_944.svg"
                                          className="h-[7px] w-[auto]"
                                          alt="vector_ThirtySeven"
                                        />
                                        <Img
                                          src="images/img_vector_bluegray_943.svg"
                                          className="h-[7px] w-[auto]"
                                          alt="vector_ThirtyEight"
                                        />
                                        <Img
                                          src="images/img_vector_bluegray_946.svg"
                                          className="h-[7px] w-[auto]"
                                          alt="vector_ThirtyNine"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat md:h-[11px] h-[20px] left-[14%] p-[3px] top-[0] w-[19px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group101.svg')",
                                    }}
                                  >
                                    <div className="absolute flex items-center justify-start right-[15%] top-[15%] w-[27%]">
                                      <div className="flex flex-col items-start justify-start w-[100%]">
                                        <Img
                                          src="images/img_vector_white_a700_3x2.svg"
                                          className="h-[3px] w-[2px]"
                                          alt="vector_Forty"
                                        />
                                        <Img
                                          src="images/img_vector_white_a700_5x5.svg"
                                          className="h-[5px] w-[5px]"
                                          alt="vector_FortyOne"
                                        />
                                      </div>
                                    </div>
                                    <Img
                                      src="images/img_volume_white_a700.svg"
                                      className="absolute h-[11px] inset-y-[0] left-[15%] my-[auto] w-[auto]"
                                      alt="volume_Two"
                                    />
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex h-[14px] items-center justify-end left-[6%] p-[2px] top-[21%] w-[21%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group102.svg')",
                                    }}
                                  >
                                    <div className="flex flex-row items-start justify-start md:w-[100%] w-[79%]">
                                      <Img
                                        src="images/img_vector_white_a700_6x4.svg"
                                        className="h-[6px] w-[auto]"
                                        alt="vector_FortyTwo"
                                      />
                                      <Img
                                        src="images/img_vector_white_a700_6x5.svg"
                                        className="h-[6px] w-[5px]"
                                        alt="vector_FortyThree"
                                      />
                                      <Img
                                        src="images/img_vector_white_a700_6x4.svg"
                                        className="h-[6px] w-[auto]"
                                        alt="vector_FortyFour"
                                      />
                                      <Img
                                        src="images/img_vector_6x5.svg"
                                        className="h-[6px] w-[5px]"
                                        alt="vector_FortyFive"
                                      />
                                      <Img
                                        src="images/img_vector_6x4.svg"
                                        className="h-[6px] ml-[2px] w-[auto]"
                                        alt="vector_FortySix"
                                      />
                                      <Img
                                        src="images/img_vector_white_a700_4x4.svg"
                                        className="h-[4px] w-[4px]"
                                        alt="vector_FortySeven"
                                      />
                                      <Img
                                        src="images/img_vector_white_a700_4x6.svg"
                                        className="h-[4px] w-[auto]"
                                        alt="vector_FortyEight"
                                      />
                                      <Img
                                        src="images/img_vector_3.svg"
                                        className="h-[6px] w-[auto]"
                                        alt="vector_FortyNine"
                                      />
                                      <Img
                                        src="images/img_vector_4x4.svg"
                                        className="h-[4px] w-[4px]"
                                        alt="vector_Fifty"
                                      />
                                      <Img
                                        src="images/img_vector_4.svg"
                                        className="h-[4px] w-[4px]"
                                        alt="vector_FiftyOne"
                                      />
                                      <Img
                                        src="images/img_vector_white_a700_6x1.svg"
                                        className="h-[6px] w-[auto]"
                                        alt="vector_FiftyTwo"
                                      />
                                      <Img
                                        src="images/img_vector_5.svg"
                                        className="h-[4px] w-[4px]"
                                        alt="vector_FiftyThree"
                                      />
                                      <Img
                                        src="images/img_vector_6.svg"
                                        className="h-[4px] w-[4px]"
                                        alt="vector_FiftyFour"
                                      />
                                    </div>
                                  </div>
                                  <Img
                                    src="images/img_bookmark_white_a700.svg"
                                    className="absolute h-[98px] inset-x-[0] mx-[auto] top-[1%] w-[auto]"
                                    alt="bookmark_One"
                                  />
                                </div>
                                <Img
                                  src="images/img_volume_gray_101.svg"
                                  className="absolute h-[100px] inset-x-[0] mx-[auto] top-[1%] w-[auto]"
                                  alt="volume_Three"
                                />
                                <div
                                  className="absolute bg-cover bg-no-repeat flex h-[104px] inset-x-[0] items-center justify-start mx-[auto] pb-[16px] px-[16px] top-[0] w-[19%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group97.svg')",
                                  }}
                                >
                                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[96%]">
                                    <Img
                                      src="images/img_folder.svg"
                                      className="h-[20px] w-[19px]"
                                      alt="folder"
                                    />
                                    <Img
                                      src="images/img_vector_bluegray_947.svg"
                                      className="h-[25px] mt-[5px] w-[auto]"
                                      alt="vector_FiftyFive"
                                    />
                                    <Img
                                      src="images/img_settings.svg"
                                      className="h-[10px] mt-[24px] w-[auto]"
                                      alt="settings"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="absolute flex flex-row items-start justify-between right-[6%] top-[1%] w-[54%]">
                                <div
                                  className="bg-cover bg-no-repeat flex h-[14px] items-center justify-end mt-[51px] p-[3px] w-[auto]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group103.svg')",
                                  }}
                                >
                                  <Img
                                    src="images/img_rewind.svg"
                                    className="h-[7px] w-[auto]"
                                    alt="rewind"
                                  />
                                </div>
                                <Img
                                  src="images/img_bookmark_white_a700.svg"
                                  className="h-[97px] w-[auto]"
                                  alt="bookmark_Two"
                                />
                              </div>
                            </div>
                            <Img
                              src="images/img_volume_gray_101.svg"
                              className="absolute h-[99px] right-[6%] top-[2%] w-[auto]"
                              alt="volume_Four"
                            />
                            <div
                              className="absolute bg-cover bg-no-repeat flex h-[103px] items-center justify-end p-[17px] right-[6%] top-[0] w-[19%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group97.svg')",
                              }}
                            >
                              <Img
                                src="images/img_settings.svg"
                                className="h-[10px] mt-[58px] w-[auto]"
                                alt="settings_One"
                              />
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex h-[69px] items-center justify-end p-[3px] right-[8%] top-[9%] w-[20%]"
                            style={{
                              backgroundImage: "url('images/img_group100.svg')",
                            }}
                          >
                            <div className="flex flex-col gap-[8px] items-center justify-start mt-[35px] md:w-[100%] w-[63%]">
                              <Img
                                src="images/img_settings_bluegray_950.svg"
                                className="h-[12px] w-[auto]"
                                alt="settings_Two"
                              />
                              <Img
                                src="images/img_rewind.svg"
                                className="h-[6px] w-[auto]"
                                alt="rewind_One"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      activeIndex={sliderState}
                      responsive={{
                        0: { items: 1 },
                        550: { items: 1 },
                        1050: { items: 1 },
                      }}
                      onSlideChanged={(e) => {
                        setsliderState(e?.item);
                      }}
                      ref={sliderRef}
                      className="pb-[70px] pr-[15px] self-stretch w-[auto]"
                      items={[...Array(3)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <div className="flex flex-col gap-[30px] items-start justify-start mx-[10px]">
                            <div className="flex items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="font-normal leading-[47.00px] md:max-w-[100%] max-w-[510px] not-italic text-left text-white_A700 tracking-[0.76px]"
                                variant="body15"
                              ></Text>
                            </div>
                            <div className="flex items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="font-light leading-[30.00px] text-left text-white_A700 tracking-[0.20px]"
                                variant="body39"
                              ></Text>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[345px] mt-[129px] self-stretch md:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[45px] items-start justify-start pb-[16px] self-stretch md:w-[100%] w-[auto]">
                  <div className="flex items-start justify-start pl-[243.94px] pr-[243.06px] sm:px-[20px] md:px-[40px] self-stretch md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_801 text-center tracking-[0.10px] w-[auto]"
                      variant="body20"
                    ></Text>
                  </div>
                  <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 items-start justify-start pb-[6px] sm:pr-[20px] pr-[30px] self-stretch md:w-[100%] w-[auto]">
                    <div className="flex flex-row gap-[-0.61px] items-start justify-start pb-[23.17px] sm:pr-[20px] md:pr-[40px] pr-[60px] self-stretch w-[100%]">
                      <Line className="bg-bluegray_101 h-[89px] w-[1px]" />
                      <div className="flex flex-col relative w-[100%]">
                        <Text
                          className="font-bold mx-[auto] text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                          variant="body42"
                        >
                          You ask, we develop
                        </Text>
                        <Text
                          className="font-light leading-[22.00px] mt-[-0.01px] text-bluegray_600 text-left tracking-[0.10px] z-[1]"
                          variant="body43"
                        >
                          <>
                            New feature releases
                            <br />
                            every day
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start pb-[23.17px] sm:pr-[20px] md:pr-[40px] pr-[57px] self-stretch w-[100%]">
                      <div className="flex flex-row gap-[14px] items-start justify-start w-[100%]">
                        <Line className="bg-bluegray_101 h-[89px] w-[1px]" />
                        <div className="flex flex-col items-center justify-start mt-[2px] w-[auto]">
                          <Text
                            className="font-bold text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                            variant="body42"
                          >
                            24/7 global support
                          </Text>
                          <Text
                            className="font-light leading-[22.00px] text-bluegray_600 text-left tracking-[0.10px]"
                            variant="body44"
                          >
                            <>
                              To answer any questions
                              <br />
                              right when you need it
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-start pb-[23.17px] sm:pr-[20px] md:pr-[40px] pr-[50px] self-stretch w-[100%]">
                      <div className="flex flex-row gap-[14px] items-start justify-start w-[100%]">
                        <Line className="bg-bluegray_101 h-[89px] w-[1px]" />
                        <div className="flex flex-col items-start justify-start mt-[2px] w-[auto]">
                          <Text
                            className="font-bold text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                            variant="body43"
                          >
                            Full transparency
                          </Text>
                          <Text
                            className="font-light leading-[22.00px] text-bluegray_600 text-left tracking-[0.10px]"
                            variant="body43"
                          >
                            <>
                              Real-time network
                              <br />
                              performance dashboard
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-start pb-[0.78px] sm:pr-[20px] md:pr-[40px] pr-[68.78px] self-stretch w-[100%]">
                      <div className="flex flex-row gap-[14px] items-center justify-start w-[100%]">
                        <Line className="bg-bluegray_101 h-[89px] w-[1px]" />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-bold leading-[22.00px] text-bluegray_600 text-left tracking-[0.10px] w-[100%]"
                            variant="body42"
                          >
                            Dedicated Account Managers
                          </Text>
                          <Text
                            className="font-light leading-[22.00px] text-bluegray_600 text-left tracking-[0.10px]"
                            variant="body43"
                          >
                            <>
                              To optimize your
                              <br />
                              performance
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start justify-start pb-[23.17px] sm:pr-[20px] md:pr-[40px] pr-[86px] self-stretch w-[100%]">
                      <div className="flex flex-row gap-[14px] items-start justify-start w-[100%]">
                        <Line className="bg-bluegray_101 h-[89px] w-[1px]" />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-bold text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                            variant="body43"
                          >
                            Tailored solutions
                          </Text>
                          <Text
                            className="font-light leading-[22.00px] mt-[3px] text-bluegray_600 text-left tracking-[0.10px]"
                            variant="body44"
                          >
                            <>
                              To meet your data
                              <br />
                              collection goals
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[636px] relative w-[100%]">
                  <div className="absolute flex flex-col h-[100%] inset-[0] items-center justify-start m-[auto] self-stretch w-[auto]">
                    <div className="flex items-start justify-start self-stretch md:w-[100%] w-[auto]">
                      <div className="flex md:flex-col flex-row gap-[34px] items-start justify-start pt-[40px] sm:px-[20px] md:px-[40px] px-[42px] self-stretch w-[auto]">
                        <div className="bg-white_A700 flex items-center justify-start rounded-[19px] w-[100%]">
                          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly py-[48px] rounded-[19px] w-[100%]">
                            <div className="h-[458px] relative sm:w-[100%] w-[458px]">
                              <Img
                                src="images/img_sarahmelvillepng.png"
                                className="h-[458px] m-[auto] object-cover w-[458px]"
                                alt="sarahmelvillepn"
                              />
                              <Img
                                src="images/img_div_white_a700.svg"
                                className="absolute h-[58px] left-[0] top-[4%] w-[auto]"
                                alt="div"
                              />
                              <div className="absolute border-[2px] border-solid border-white_A700 h-[60px] inset-[0] justify-center m-[auto] rounded-[50%] w-[60px]"></div>
                            </div>
                            <div className="flex md:flex-1 flex-col items-start justify-end pl-[3px] py-[3px] md:w-[100%] w-[59%]">
                              <div className="flex items-start justify-start md:ml-[0] ml-[46px] mt-[55px] pb-[31px] pr-[1.74px] self-stretch md:w-[100%] w-[auto]">
                                <Text
                                  className="leading-[35.00px] md:max-w-[100%] max-w-[606px] text-bluegray_801 text-left tracking-[0.56px]"
                                  variant="body27"
                                ></Text>
                              </div>
                              <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[46px] pb-[30px] sm:pr-[20px] pr-[343.8px] md:pr-[40px] self-stretch md:w-[100%] w-[auto]">
                                <div className="flex items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_600 text-left tracking-[0.20px] w-[auto]"
                                    variant="body37"
                                  >
                                    Sarah Melville,
                                  </Text>
                                </div>
                                <Text
                                  className="font-light text-bluegray_600 text-left tracking-[0.40px] w-[auto]"
                                  variant="body39"
                                >
                                  Media Director at YouGov Sport
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[12px] items-end justify-start md:ml-[0] ml-[46px] mr-[auto] md:w-[100%] w-[16%]">
                                <a
                                  className="font-medium text-[15px] text-bluegray_600 text-left tracking-[0.10px] underline w-[auto]"
                                  href="javascript:"
                                >
                                  Watch now
                                </a>
                                <Img
                                  src="images/img_arrowright_bluegray_600.svg"
                                  className="h-[8px] mb-[3px] mt-[7px] w-[8px]"
                                  alt="arrowright_One"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrowright_bluegray_200.svg"
                          className="h-[13px] w-[auto]"
                          alt="arrowright_Two"
                        />
                      </div>
                    </div>
                    <div className="flex items-start justify-start py-[6px] rounded-[21px] self-stretch w-[auto]">
                      <div className="flex flex-row gap-[6.58px] items-center justify-start self-stretch w-[auto]">
                        <Text
                          className="font-medium text-blue_A200 text-center tracking-[0.20px] w-[auto]"
                          variant="body37"
                        >
                          More customer stories
                        </Text>
                        <Img
                          src="images/img_arrowleft.svg"
                          className="h-[7px] w-[auto]"
                          alt="arrowleft"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_arrowdown_bluegray_200.svg"
                    className="absolute h-[13px] inset-y-[0] left-[0] my-[auto] w-[auto]"
                    alt="arrowleft_One"
                  />
                </div>
              </div>
              <Text
                className="font-light md:ml-[0] ml-[375px] mt-[49px] text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                variant="body43"
              >
                Trustpilot
              </Text>
              <div className="bg-gray_911 flex items-center justify-start mt-[51px] p-[90px] sm:px-[20px] md:px-[40px] w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] gap-[60px] items-center justify-start pr-[10px] py-[10px] self-stretch md:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row gap-[19px] items-start justify-between px-[10px] self-stretch sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[20.78px] items-start justify-start pb-[24px] pt-[9px] w-[100%]">
                      <Text
                        className="font-normal leading-[45.00px] md:max-w-[100%] max-w-[428px] not-italic text-left text-white_A700 tracking-[1.14px]"
                        variant="body19"
                      >
                        Tap into the power of public web data with our best
                        in-class solutions
                      </Text>
                      <div className="flex items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                        <Text
                          className="font-light leading-[30.00px] text-left text-white_A700 tracking-[0.20px]"
                          variant="body39"
                        >
                          <>
                            Download pre-packaged datasets,
                            <br />
                            use our self-service collection tools,
                            <br />
                            or utilize our infrastructure to build your own
                          </>
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-white_A700_4c sm:h-[1px] h-[280px] sm:w-[100%] w-[1px]" />
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-[40px] gap-[70px] grid sm:grid-cols-1 grid-cols-2 justify-start p-[10px] self-stretch sm:w-[100%] w-[auto]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start py-[10px] w-[100%]">
                      <Img
                        src="images/img_powerofdatap.svg"
                        className="h-[80px] w-[80px]"
                        alt="powerofdatap"
                      />
                      <Text
                        className="font-medium mt-[21px] text-left text-white_A700 tracking-[0.20px] w-[auto]"
                        variant="body37"
                      >
                        Proxy Infrastructure
                      </Text>
                      <div className="flex items-start justify-start mt-[21px] self-stretch w-[auto]">
                        <Text
                          className="font-light leading-[30.00px] text-left text-white_A700 tracking-[0.20px]"
                          variant="body37"
                        >
                          <>
                            The industry’s most
                            <br />
                            popular proxy networks
                          </>
                        </Text>
                      </div>
                      <div className="bg-cyan_400 flex items-start justify-start mt-[34px] pb-[11.98px] md:pl-[40px] pl-[42.13px] pr-[32.14px] pt-[12px] sm:px-[20px] rounded-[23px] self-stretch shadow-bs5 w-[auto]">
                        <div className="flex flex-row gap-[6.64px] items-center justify-start ml-[auto] self-stretch w-[auto]">
                          <Text
                            className="font-normal not-italic text-center text-white_A700 tracking-[0.10px] w-[auto]"
                            variant="body41"
                          >
                            Start now
                          </Text>
                          <Img
                            src="images/img_arrowright_white_a700.svg"
                            className="h-[17px] w-[17px]"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-[10px] w-[100%]">
                      <Img
                        src="images/img_calculator.svg"
                        className="h-[80px] w-[80px]"
                        alt="calculator"
                      />
                      <Text
                        className="font-medium mt-[20px] text-left text-white_A700 tracking-[0.20px] w-[auto]"
                        variant="body37"
                      >
                        Web Data
                      </Text>
                      <div className="flex items-start justify-start mt-[22px] self-stretch w-[auto]">
                        <Text
                          className="font-light leading-[30.00px] text-left text-white_A700 tracking-[0.20px]"
                          variant="body39"
                        >
                          <>
                            Structured public web
                            <br />
                            data on-demand
                          </>
                        </Text>
                      </div>
                      <div className="bg-deep_purple_300 flex items-start justify-start mt-[34px] pb-[11.98px] md:pl-[40px] pl-[45.44px] pr-[35.44px] pt-[12px] sm:px-[20px] rounded-[23px] self-stretch shadow-bs6 w-[auto]">
                        <div className="flex flex-row gap-[5.03px] items-center justify-start ml-[auto] self-stretch w-[auto]">
                          <Text
                            className="font-normal not-italic text-center text-white_A700 tracking-[0.10px] w-[auto]"
                            variant="body39"
                          >
                            Get data
                          </Text>
                          <Img
                            src="images/img_arrowright_white_a700.svg"
                            className="h-[17px] w-[17px]"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col justify-start mt-[10px] py-[60px] w-[100%]">
                <div className="flex md:flex-col flex-row gap-[40px] items-center justify-start md:ml-[0] ml-[375px] p-[10px] self-stretch md:w-[100%] w-[auto]">
                  <div className="flex flex-col gap-[19px] items-start justify-start pb-[24px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_thebrightinit.svg"
                      className="h-[104px] w-[271px]"
                      alt="thebrightinit"
                    />
                    <div className="flex items-start justify-start pb-[0.78px] sm:pr-[20px] pr-[255px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                      <Text
                        className="font-light leading-[22.00px] text-bluegray_600 text-left tracking-[0.10px]"
                        variant="body43"
                      >
                        <>
                          A pro bono program using web data and data
                          <br />
                          expertise to drive change across the world
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start justify-start pr-[9px] py-[9px] md:w-[100%] w-[49%]">
                    <div className="sm:gap-[20px] grid sm:grid-cols-1 grid-cols-3 mb-[15px] min-h-[auto] w-[91%]">
                      <div className="hover:cursor-pointer flex flex-col gap-[-0.61px] items-start justify-start pb-[0.78px] sm:pr-[20px] md:pr-[40px] pr-[41.61px] self-stretch hover:shadow-bs1 hover:w-[100%] w-[100%]">
                        <Text
                          className="font-bold text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                          variant="body42"
                        >
                          600+
                        </Text>
                        <Text
                          className="font-light leading-[22.00px] md:max-w-[100%] max-w-[94px] text-bluegray_600 text-left tracking-[0.10px]"
                          variant="body43"
                        >
                          Partner Organizations
                        </Text>
                      </div>
                      <div className="hover:cursor-pointer flex flex-col gap-[-0.61px] items-start justify-start pb-[0.78px] sm:pr-[20px] md:pr-[40px] pr-[63.03px] self-stretch hover:shadow-bs1 hover:w-[100%] w-[100%]">
                        <Text
                          className="font-bold text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                          variant="body42"
                        >
                          250+
                        </Text>
                        <Text
                          className="font-light leading-[22.00px] md:max-w-[100%] max-w-[73px] text-bluegray_600 text-left tracking-[0.10px]"
                          variant="body43"
                        >
                          Academic Institutions
                        </Text>
                      </div>
                      <div className="hover:cursor-pointer flex flex-col gap-[-0.61px] items-start justify-start pb-[0.78px] sm:pr-[20px] md:pr-[40px] pr-[41.61px] self-stretch hover:shadow-bs1 hover:w-[100%] w-[100%]">
                        <Text
                          className="font-bold text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                          variant="body42"
                        >
                          200+
                        </Text>
                        <Text
                          className="font-light leading-[22.00px] md:max-w-[100%] max-w-[94px] text-bluegray_600 text-left tracking-[0.10px]"
                          variant="body43"
                        >
                          Nonprofit Organizations
                        </Text>
                      </div>
                      <div className="hover:cursor-pointer flex flex-col gap-[-0.61px] items-start justify-start pb-[0.39px] sm:pr-[20px] md:pr-[40px] pr-[94.5px] self-stretch hover:shadow-bs1 hover:w-[100%] w-[100%]">
                        <Text
                          className="font-bold text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                          variant="body42"
                        >
                          135+
                        </Text>
                        <Text
                          className="font-light text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                          variant="body42"
                        >
                          NGOs
                        </Text>
                      </div>
                      <div className="hover:cursor-pointer flex flex-col gap-[-0.61px] items-start justify-start pb-[0.39px] sm:pr-[20px] md:pr-[40px] pr-[43.5px] self-stretch hover:shadow-bs1 hover:w-[100%] w-[100%]">
                        <Text
                          className="font-bold text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                          variant="body43"
                        >
                          Public Sector
                        </Text>
                        <Text
                          className="font-light text-bluegray_600 text-left tracking-[0.10px] w-[auto]"
                          variant="body43"
                        >
                          Bodies
                        </Text>
                      </div>
                      <div className="bg-blue_A200 hover:cursor-pointer flex items-start justify-start pb-[8.31px] pl-[34.66px] pr-[24.66px] pt-[9px] sm:px-[20px] rounded-[19px] self-stretch hover:shadow-bs1 shadow-bs1 hover:w-[100%] w-[100%]">
                        <div className="flex flex-row gap-[7.5px] items-center justify-start ml-[auto] pl-[2px] self-stretch w-[auto]">
                          <Text
                            className="font-normal not-italic text-center text-white_A700 tracking-[0.10px] w-[auto]"
                            variant="body43"
                          >
                            Learn more
                          </Text>
                          <Img
                            src="images/img_arrowright_white_a700.svg"
                            className="h-[15px] w-[15px]"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mr-[224px] mt-[60px] overflow-x-auto w-[96%]">
                  <div className="flex md:flex-col flex-row gap-[28px] items-start justify-start pt-[14px] px-[14px] self-stretch w-[auto]">
                    <div className="bg-white_A700 h-[140px] rounded-[5px] shadow-bs7 w-[9%]"></div>
                    <div className="bg-white_A700 flex items-start justify-start sm:px-[20px] md:px-[40px] px-[44px] py-[56px] rounded-[5px] self-stretch shadow-bs7 w-[auto]">
                      <Img
                        src="images/img_universityethsvg.svg"
                        className="h-[28px] w-[142px]"
                        alt="universityethsv"
                      />
                    </div>
                    <div className="bg-white_A700 flex items-center justify-start p-[44px] sm:px-[20px] md:px-[40px] rounded-[5px] shadow-bs7 md:w-[100%] w-[14%]">
                      <Img
                        src="images/img_universityprincetonpng.png"
                        className="h-[44px] md:h-[auto] my-[4px] object-cover w-[100%]"
                        alt="universityprinc"
                      />
                    </div>
                    <div className="bg-white_A700 flex items-start justify-start sm:px-[20px] md:px-[40px] px-[44px] py-[50px] rounded-[5px] self-stretch shadow-bs7 w-[auto]">
                      <Img
                        src="images/img_universityoxfordsvg.svg"
                        className="h-[40px] w-[140px]"
                        alt="universityoxfor"
                      />
                    </div>
                    <div className="bg-white_A700 flex items-center justify-center p-[44px] sm:px-[20px] md:px-[40px] rounded-[5px] shadow-bs7 md:w-[100%] w-[13%]">
                      <Img
                        src="images/img_universitysandiegopng.png"
                        className="h-[27px] md:h-[auto] my-[12px] object-cover w-[100%]"
                        alt="universitysandi"
                      />
                    </div>
                    <div className="bg-white_A700 flex items-start justify-start sm:px-[20px] md:px-[40px] px-[44px] py-[46.5px] rounded-[5px] self-stretch shadow-bs7 w-[auto]">
                      <Img
                        src="images/img_globe.svg"
                        className="h-[47px] w-[47px]"
                        alt="globe_One"
                      />
                    </div>
                    <div className="bg-white_A700 flex items-start justify-start sm:px-[20px] md:px-[40px] px-[44px] py-[58px] rounded-[5px] self-stretch shadow-bs7 w-[auto]">
                      <Img
                        src="images/img_universitychicagosvg.svg"
                        className="h-[24px] w-[127px]"
                        alt="universitychica"
                      />
                    </div>
                    <Img
                      src="images/img_div_white_a700_140x165.svg"
                      className="h-[140px] rounded-[5px] w-[165px]"
                      alt="div_Two"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[28px] items-start justify-start ml-[auto] mt-[24px] pl-[14px] sm:pr-[20px] md:pr-[40px] pr-[720px] pt-[14px] self-stretch md:w-[100%] w-[auto]">
                  <Img
                    src="images/img_div_white_a700_140x165.svg"
                    className="h-[140px] rounded-[5px] w-[257px]"
                    alt="div_Three"
                  />
                  <div className="bg-white_A700 flex items-center justify-start p-[38px] sm:px-[20px] rounded-[5px] shadow-bs7 md:w-[100%] w-[47%]">
                    <Img
                      src="images/img_universitynyupng.png"
                      className="h-[64px] md:h-[auto] object-cover w-[64px]"
                      alt="universitynyupn"
                    />
                  </div>
                  <div className="bg-white_A700 flex items-start justify-start sm:px-[20px] md:px-[40px] px-[44px] py-[46.5px] rounded-[5px] self-stretch shadow-bs7 w-[auto]">
                    <Img
                      src="images/img_grid.svg"
                      className="h-[47px] w-[69px]"
                      alt="grid"
                    />
                  </div>
                  <Img
                    src="images/img_div_white_a700_140x165.svg"
                    className="h-[140px] rounded-[5px] w-[166px]"
                    alt="div_Four"
                  />
                  <Img
                    src="images/img_div_white_a700_140x202.png"
                    className="h-[140px] md:h-[auto] object-cover rounded-[5px] sm:w-[100%] w-[202px]"
                    alt="div_Five"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-gray_911 flex md:hidden items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] gap-[75px] items-center justify-center ml-[147px] mr-[255px] mt-[59px] w-[80%]">
            <Img
              src="images/img_facebook.svg"
              className="h-[58px] w-[auto]"
              alt="facebook"
            />
            <div className="md:h-[1015px] sm:h-[360px] h-[631px] relative md:w-[100%] w-[94%]">
              <div className="absolute flex md:flex-col flex-row md:gap-[40px] items-start justify-between left-[0] pb-[10px] px-[10px] top-[0] w-[85%]">
                <div className="flex flex-col gap-[-0.11px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-bluegray_300 text-left tracking-[0.10px] uppercase w-[auto]"
                    variant="body47"
                  >
                    Products
                  </Text>
                  <ul className="flex flex-col gap-[-0.11px] items-start justify-start pb-[0.89px] sm:pr-[20px] md:pr-[40px] pr-[78.19px] self-stretch md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-left text-white_A700 tracking-[0.10px]"
                        variant="body47"
                      >
                        Datasets
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Web Scraper IDE
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        SERP API
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Bright Insights
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Web Unlocker
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Proxy Manager
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Proxy Browser Extension
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Proxy API
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[-0.11px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-medium text-bluegray_300 text-left tracking-[0.10px] uppercase w-[auto]"
                    variant="body47"
                  >
                    Proxy Services
                  </Text>
                  <ul className="flex flex-col gap-[-0.11px] items-start justify-start pb-[0.89px] pr-[111.19px] sm:pr-[20px] md:pr-[40px] self-stretch md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-left text-white_A700 tracking-[0.10px]"
                        variant="body47"
                      >
                        Residential Proxies
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Mobile Proxies
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        ISP Proxies
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Datacenter Proxies
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Proxy Servers
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Proxy IP Locations
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Proxy Solutions
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-[23px] items-center justify-start pb-[23px] md:w-[100%] w-[19%]">
                  <div className="flex flex-col gap-[-0.11px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-bluegray_300 text-left tracking-[0.10px] uppercase w-[auto]"
                      variant="body44"
                    >
                      Pricing
                    </Text>
                    <ul className="flex flex-col gap-[-0.11px] items-start justify-start pb-[0.89px] pr-[124.19px] sm:pr-[20px] md:pr-[40px] self-stretch md:w-[100%] w-[auto] common-column-list">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-left text-white_A700 tracking-[0.10px]"
                          variant="body47"
                        >
                          Proxy Network
                        </Text>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                          href="javascript:"
                        >
                          Web Scraper IDE
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                          href="javascript:"
                        >
                          Datasets
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[-0.11px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-bluegray_300 text-left tracking-[0.10px] uppercase w-[auto]"
                      variant="body44"
                    >
                      Programs
                    </Text>
                    <ul className="flex flex-col gap-[-0.11px] items-start justify-start pb-[0.89px] sm:pr-[20px] md:pr-[40px] pr-[89.19px] self-stretch md:w-[100%] w-[auto] common-column-list">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-left text-white_A700 tracking-[0.10px]"
                          variant="body47"
                        >
                          Impact Report 2022
                        </Text>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                          href="javascript:"
                        >
                          Affiliate Program
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                          href="javascript:"
                        >
                          Partners
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                          href="javascript:"
                        >
                          SDK
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                          href="javascript:"
                        >
                          Security Vulnerabilities
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-[23px] items-center justify-start pb-[23px] md:w-[100%] w-[19%]">
                  <div className="flex flex-col gap-[-0.11px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-bluegray_300 text-left tracking-[0.10px] uppercase w-[auto]"
                      variant="body47"
                    >
                      Learning Center
                    </Text>
                    <ul className="flex flex-col gap-[-0.11px] items-start justify-start pb-[0.89px] pr-[113.19px] sm:pr-[20px] md:pr-[40px] self-stretch md:w-[100%] w-[auto] common-column-list">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-left text-white_A700 tracking-[0.10px]"
                          variant="body47"
                        >
                          Data Documentary
                        </Text>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                          href="javascript:"
                        >
                          Iron Analyst
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                          href="javascript:"
                        >
                          Learning Hub
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[13px] text-left text-white_A700 tracking-[0.10px]"
                          href="javascript:"
                        >
                          FAQ
                        </a>
                      </li>
                      <li className="w-[auto]">
                        <a
                          className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                          href="javascript:"
                        >
                          Webinars
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-[-0.11px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-bluegray_300 text-left tracking-[0.10px] uppercase w-[auto]"
                      variant="body47"
                    >
                      Legal
                    </Text>
                    <div className="flex flex-col gap-[-0.11px] items-start justify-start pb-[0.89px] sm:pr-[20px] md:pr-[40px] pr-[67.19px] self-stretch w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 tracking-[0.10px] w-[auto]"
                        variant="body47"
                      >
                        Privacy Policy
                      </Text>
                      <Text
                        className="font-normal not-italic text-left text-white_A700 tracking-[0.10px] w-[auto]"
                        variant="body47"
                      >
                        Don’t Sell My Personal Info
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[-0.11px] items-start justify-start mb-[13px] self-stretch w-[auto]">
                  <Text
                    className="font-medium text-bluegray_300 text-left tracking-[0.10px] uppercase w-[auto]"
                    variant="body44"
                  >
                    Company
                  </Text>
                  <ul className="flex flex-col gap-[-0.11px] items-start justify-start pb-[0.89px] sm:pr-[20px] md:pr-[40px] pr-[74.19px] self-stretch md:w-[100%] w-[auto] common-column-list">
                    <li className="w-[auto]">
                      <Text
                        className="cursor-pointer font-normal not-italic text-left text-white_A700 tracking-[0.10px]"
                        variant="body44"
                      >
                        About
                      </Text>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[13px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Use Cases
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Bright Data for Enterprise
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Case Studies
                      </a>
                    </li>
                    <li className="sm:hidden w-[auto]">
                      <a
                        className="cursor-pointer font-normal sm:hidden not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Trust Center
                      </a>
                    </li>
                    <li className="sm:hidden w-[auto]">
                      <a
                        className="cursor-pointer font-normal sm:hidden not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Testimonials
                      </a>
                    </li>
                    <li className="sm:hidden w-[auto]">
                      <a
                        className="cursor-pointer font-normal sm:hidden not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="sm:hidden w-[auto]">
                      <a
                        className="cursor-pointer font-normal sm:hidden not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Career Journeys
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Contact
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[11px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Press Kit
                      </a>
                    </li>
                    <li className="w-[auto]">
                      <a
                        className="cursor-pointer font-normal not-italic text-[12px] text-left text-white_A700 tracking-[0.10px]"
                        href="javascript:"
                      >
                        Network Status
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute h-[630px] inset-[0] justify-center m-[auto] w-[100%]">
                <div className="flex flex-col gap-[33px] justify-start mb-[-259.84px] ml-[auto] mr-[10px] mt-[auto] pt-[2px] w-[15%] z-[1]">
                  <Text
                    className="font-medium md:ml-[0] ml-[10px] text-bluegray_300 text-left tracking-[0.28px] uppercase w-[auto]"
                    variant="body47"
                  >
                    Contact Us
                  </Text>
                  <ul className="flex flex-col items-start justify-start w-[100%] common-column-list">
                    <li className="w-[100%]">
                      <Img
                        src="images/img_div_white_a700_40x200.svg"
                        className="cursor-pointer h-[40px] w-[200px]"
                        alt="div_Six"
                      />
                    </li>
                    <li className="mt-[42px] ml-[10px] w-[auto]">
                      <a
                        className="cursor-pointer font-medium text-[12px] text-bluegray_300 text-left tracking-[0.28px] uppercase"
                        href="javascript:"
                      >
                        Follow Us
                      </a>
                    </li>
                    <li className="mt-[33px] w-[100%]">
                      <Img
                        src="images/img_div_40x200.svg"
                        className="cursor-pointer h-[40px]"
                        alt="div_Seven"
                      />
                    </li>
                    <li className="mt-[40px] ml-[10px] w-[90%]">
                      <Img
                        src="images/img_div_white_a700_358x180.svg"
                        className="cursor-pointer h-[358px] w-[180px]"
                        alt="div_Eight"
                      />
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-start mt-[auto] mx-[auto] w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="border-solid border-white_A700_19 border-y-[1px] flex items-center justify-start p-[21px] sm:px-[20px] w-[100%]">
                      <Text
                        className="font-medium mb-[108px] text-bluegray_300 text-center tracking-[0.42px] uppercase w-[auto]"
                        variant="body47"
                      >
                        Partnerships
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between py-[29px] w-[100%]">
                      <Text
                        className="font-light text-bluegray_301 text-left tracking-[0.10px] w-[auto]"
                        variant="body51"
                      >
                        © Copyright 2023 Bright Data Ltd. | All rights reserved
                      </Text>
                      <div className="flex sm:flex-1 flex-col gap-[-0.61px] items-start justify-start pb-[0.39px] sm:pr-[20px] pr-[25.34px] self-stretch sm:w-[100%] w-[auto]">
                        <Text
                          className="font-light text-bluegray_301 text-left tracking-[0.10px] w-[auto]"
                          variant="body51"
                        >
                          Bright Data Ltd. (Headquarters), 4 Hamahshev St.,
                          Netanya 4250714, Israel (POB 8025)
                        </Text>
                        <Text
                          className="font-light text-bluegray_301 text-left tracking-[0.10px] w-[auto]"
                          variant="body51"
                        >
                          229 W 36th St., New York, NY 10018, United States.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandpgvOnePage;
