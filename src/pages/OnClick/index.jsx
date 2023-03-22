import React from "react";

import { Img, Text, Button, Line, List, SelectBox } from "components";

const OnClickPage = () => {
  return (
    <>
      <div className="flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-end w-[100%]">
          <header className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center sm:justify-between justify-center sm:m-[11px] md:px-[20px] w-[100%]">
            <div className="flex md:flex-1 flex-row gap-[8px] items-center justify-start md:ml-[0] ml-[16px] md:mt-[0] my-[16px] pr-[8px] md:w-[100%] w-[11%]">
              <div className="flex items-start justify-start w-[36px]">
                <Img
                  src="images/img_image_36x36.png"
                  className="h-[36px] md:h-[auto] object-cover w-[36px]"
                  alt="image"
                />
              </div>
              <Img
                src="images/img_span_indigo_904.svg"
                className="h-[21px] w-[141px]"
                alt="span"
              />
            </div>
            <div className="flex flex-row gap-[11px] items-center justify-start md:mt-[0] my-[13px] pl-[517.69px] pr-[528.69px] sm:px-[20px] md:px-[40px] self-stretch w-[auto]">
              <ul className="flex sm:flex-col flex-row sm:hidden items-center justify-center w-[85%] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] w-[24%] relative">
                  <div className="md:h-[20px] h-[42px] p-[8px] relative">
                    <a
                      className="hover:absolute absolute cursor-pointer font-medium left-[9%] text-[16px] text-bluegray_957 text-center top-[0] tracking-[-0.40px] w-[auto]"
                      href="javascript:"
                    >
                      Solutions
                    </a>
                    <Img
                      src="images/img_arrowdown_bluegray_957.svg"
                      className="absolute h-[20px] inset-y-[0] my-[auto] right-[9%] w-[20px]"
                      alt="arrowdown"
                    />
                  </div>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[22%] relative">
                  <div className="md:h-[20px] h-[42px] p-[8px] relative">
                    <a
                      className="hover:absolute absolute cursor-pointer font-medium left-[10%] text-[16px] text-bluegray_957 text-center top-[0] tracking-[-0.40px] w-[auto]"
                      href="javascript:"
                    >
                      Product
                    </a>
                    <Img
                      src="images/img_arrowdown_bluegray_957.svg"
                      className="absolute h-[20px] inset-y-[0] my-[auto] right-[10%] w-[20px]"
                      alt="arrowdown_One"
                    />
                  </div>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[24%] relative">
                  <div className="md:h-[20px] h-[42px] p-[10px] relative">
                    <a
                      className="hover:absolute absolute cursor-pointer font-medium left-[24%] text-[16px] text-bluegray_957 text-center top-[0] tracking-[-0.40px] w-[auto]"
                      href="javascript:"
                    >
                      Company
                    </a>
                    <Img
                      src="images/img_arrowdown_bluegray_957.svg"
                      className="absolute h-[20px] inset-y-[0] my-[auto] right-[24%] w-[20px]"
                      alt="arrowdown_Two"
                    />
                  </div>
                </li>
                <li className="mt-[11px] mb-[10px] ml-[10px] sm:w-[100%] sm:mt-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-medium text-[16px] text-bluegray_957 text-right"
                    href="javascript:"
                  >
                    Help & Support
                  </a>
                </li>
                <li className="ml-[9px] sm:w-[100%] sm:my-[10px] w-[3%] my-[11px]">
                  <div className="border-gray_312 border-r-[2px] border-solid h-[20px]"></div>
                </li>
              </ul>
              <div className="flex flex-row items-start justify-center w-[14%]">
                <Img
                  src="images/img_search_gray_609.svg"
                  className="h-[18px] mt-[2px] w-[18px]"
                  alt="search"
                />
                <Text
                  className="font-medium ml-[4px] text-bluegray_957 text-center tracking-[-0.40px] w-[auto]"
                  variant="body41"
                >
                  Search
                </Text>
              </div>
            </div>
            <Button className="border-[1px] border-bluegray_107 border-solid cursor-pointer font-normal leading-[normal] md:m-[0] m-[16px] min-w-[78px] not-italic pl-[17px] pr-[16.81px] py-[9px] rounded-[17px] text-[14px] text-blue_802 text-center w-[auto]">
              Sign In
            </Button>
          </header>
          <div className="border-gray_209 border-solid border-t-[1px] flex items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
              <div className="h-[359px] sm:h-[395px] pl-[330px] md:px-[20px] relative w-[100%]">
                <Img
                  src="images/img_divmaskgroup.png"
                  className="absolute h-[359px] inset-y-[0] my-[auto] object-cover right-[0] w-[72%]"
                  alt="divmaskgroup"
                />
                <div className="absolute flex flex-col h-[100%] inset-[0] items-start justify-center m-[auto] p-[13px] w-[66%]">
                  <Img
                    src="images/img_div_128x128.png"
                    className="h-[128px] md:h-[auto] md:ml-[0] ml-[16px] mt-[26px] object-cover rounded-[32px] w-[128px]"
                    alt="div_One"
                  />
                  <Text
                    className="font-bold md:ml-[0] ml-[16px] mt-[6px] text-bluegray_958 text-left tracking-[-1.20px] w-[auto]"
                    variant="body21"
                  >
                    NextUI
                  </Text>
                  <div className="flex flex-row items-start justify-start md:ml-[0] ml-[16px] mt-[28px] sm:pr-[20px] md:pr-[40px] pr-[984px] md:w-[100%] w-[98%]">
                    <Button className="bg-gray_209 cursor-pointer font-medium min-w-[97px] pl-[10px] pr-[6.53px] py-[3px] rounded-bl-[12px] rounded-br-[2px] rounded-tl-[12px] rounded-tr-[2px] text-[12px] text-bluegray_700 text-center tracking-[0.72px] uppercase w-[auto]">
                      COLLECTIVE
                    </Button>
                    <div className="border-gray_407 border-r-[1px] border-solid h-[22px] w-[6%]"></div>
                    <Button className="bg-bluegray_54 cursor-pointer font-medium min-w-[96px] ml-[10px] pl-[6px] pr-[9.97px] py-[3px] rounded-bl-[2px] rounded-br-[12px] rounded-tl-[2px] rounded-tr-[12px] text-[12px] text-bluegray_700 text-center tracking-[0.72px] w-[auto]">
                      Open source
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-end justify-start md:ml-[0] ml-[16px] sm:pr-[20px] md:pr-[40px] pr-[768px] md:w-[100%] w-[98%]">
                    <Img
                      src="images/img_div_white_a700_40x192.svg"
                      className="h-[40px] w-[192px]"
                      alt="div_Three"
                    />
                    <div className="flex flex-row items-start justify-start sm:ml-[0] ml-[4px] sm:mt-[0] mt-[19px] self-stretch w-[auto]">
                      <div className="h-[19px] relative w-[32%]">
                        <div className="absolute border-b-[2px] border-bluegray_700 border-solid h-[19px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                        <Text
                          className="absolute font-normal inset-x-[0] mx-[auto] not-italic text-bluegray_700 text-left top-[0] w-[max-content]"
                          variant="body43"
                        >
                          Fiscal Host
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                        variant="body43"
                      >
                        : Open Source Collective
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium md:ml-[0] ml-[16px] mt-[19px] text-bluegray_954 text-left tracking-[-0.40px] w-[auto]"
                    variant="body41"
                  >
                    Beautiful, modern and fast React UI library.
                  </Text>
                </div>
              </div>
              <div className="bg-white_A700 flex items-center justify-start sm:px-[20px] px-[330px] md:px-[40px] shadow-bs24 w-[100%]">
                <div className="flex items-center justify-start max-w-[1260px] mx-[auto] w-[100%]">
                  <div className="bg-white_A700 flex items-center justify-start sm:px-[20px] px-[30px] w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                      <div className="bg-white_A700 flex md:flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-start px-[4px] md:w-[100%] w-[74%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start sm:w-[100%] w-[17%]">
                          <Img
                            src="images/img_collectivenavba.png"
                            className="h-[32px] md:h-[auto] object-cover w-[32px]"
                            alt="collectivenavba"
                          />
                          <Text
                            className="font-medium text-bluegray_958 text-left tracking-[0.84px] uppercase w-[auto]"
                            variant="body43"
                          >
                            Contribute
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-center sm:ml-[0] ml-[24px] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_collectivenavba_32x32.png"
                            className="h-[32px] md:h-[auto] object-cover w-[32px]"
                            alt="collectivenavba_One"
                          />
                          <Text
                            className="font-medium text-bluegray_958 text-left tracking-[0.84px] uppercase w-[auto]"
                            variant="body43"
                          >
                            Budget
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[14px] items-start justify-end sm:ml-[0] ml-[20px] pt-[15px] sm:w-[100%] w-[14%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start md:ml-[0] ml-[4px] mr-[auto] md:w-[100%] w-[80%]">
                            <Img
                              src="images/img_collectivenavba_1.png"
                              className="h-[32px] md:h-[auto] object-cover w-[32px]"
                              alt="collectivenavba_Two"
                            />
                            <Text
                              className="font-medium text-bluegray_958 text-left tracking-[0.84px] uppercase w-[auto]"
                              variant="body43"
                            >
                              About
                            </Text>
                          </div>
                          <Line className="bg-blue_A401 h-[3px] w-[100%]" />
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-start justify-start self-stretch w-[auto]">
                        <div className="flex flex-row gap-[8px] items-start justify-start py-[16.41px] self-stretch w-[auto]">
                          <Button
                            className="bg-blue_54 cursor-pointer flex items-center justify-center min-w-[176px] pb-[7px] pl-[16px] pr-[15.69px] pt-[8.19px] rounded-[8px] w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_clock_indigo_905.svg"
                                className="mr-[8px] my-[1px]"
                                alt="clock"
                              />
                            }
                          >
                            <div className="font-medium text-[14px] text-center text-indigo_905 tracking-[0.14px] uppercase">
                              Submit Expense
                            </div>
                          </Button>
                          <Button
                            className="bg-blue_54 cursor-pointer flex items-center justify-center min-w-[123px] pb-[7px] pl-[16px] pr-[16.13px] pt-[8.19px] rounded-[8px] w-[auto]"
                            leftIcon={
                              <Img
                                src="images/img_mail_indigo_905.svg"
                                className="mr-[7px] my-[1px]"
                                alt="mail"
                              />
                            }
                          >
                            <div className="font-medium text-[14px] text-center text-indigo_905 tracking-[0.14px] uppercase">
                              Contact
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-start pb-[96px] w-[100%]">
                <div className="bg-gray_110 flex items-center justify-end p-[75px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex flex-col max-w-[1536px] mt-[26px] mx-[auto] relative w-[100%]">
                    <div className="h-[69px] md:h-[NaNpx] mt-[-NaNpx] mx-[auto] w-[100%] z-[1]">
                      <div className="h-[69px] md:h-[70px] my-[auto] w-[4%]">
                        <div className="absolute border-b-[4px] border-gray_309 border-r-[1px] border-solid bottom-[4%] h-[25px] inset-x-[0] mx-[auto] w-[100%]"></div>
                        <div className="absolute flex flex-col h-[100%] inset-[0] items-center justify-start m-[auto] px-[5px] py-[10px] self-stretch w-[auto]">
                          <div className="bg-gray_110 flex items-end justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-bluegray_700 text-right w-[auto]"
                              variant="body44"
                            >
                              Goal
                            </Text>
                          </div>
                          <div className="flex flex-col items-end justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="font-medium text-bluegray_700 text-right w-[auto]"
                              variant="body44"
                            >
                              $0
                            </Text>
                            <Text
                              className="font-normal mt-[2px] not-italic text-bluegray_202 text-right w-[auto]"
                              variant="body51"
                            >
                              per year
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute md:h-[67px] h-[69px] inset-[0] justify-center m-[auto] w-[100%]">
                        <div className="absolute border-b-[4px] border-gray_309 border-r-[1px] border-solid bottom-[4%] h-[25px] inset-x-[0] mx-[auto] w-[100%]"></div>
                        <div className="absolute flex flex-col gap-[-1px] h-[100%] inset-y-[0] items-center justify-start my-[auto] px-[5px] py-[10px] right-[0] self-stretch w-[auto]">
                          <div className="h-[19px] relative w-[100%]">
                            <div className="absolute bg-gray_110 h-[19px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                            <Text
                              className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-bluegray_700 text-right w-[max-content]"
                              variant="body44"
                            >
                              Mantainer&#39;s Budget
                            </Text>
                          </div>
                          <div className="flex flex-col items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[65.23px] pr-[0.06px] self-stretch w-[auto]">
                            <Text
                              className="font-medium text-bluegray_700 text-right w-[auto]"
                              variant="body44"
                            >
                              $66,000
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_202 text-right w-[auto]"
                              variant="body51"
                            >
                              per year
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="md:h-[41px] h-[54px] mt-[-7px] w-[8%] z-[1]">
                      <div className="absolute border-blue_702 border-r-[1px] border-solid border-t-[4px] h-[25px] left-[0] top-[0] w-[11%]"></div>
                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-end justify-start mx-[auto] p-[4px] w-[100%]">
                        <div className="h-[19px] md:h-[24px] mt-[5px] relative w-[99%]">
                          <div className="absolute bg-gray_110 h-[19px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                          <Text
                            className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-bluegray_958 text-right w-[max-content]"
                            variant="body44"
                          >
                            Today&#39;s Balance
                          </Text>
                        </div>
                        <Text
                          className="font-medium text-bluegray_958 text-right w-[auto]"
                          variant="body44"
                        >
                          $244.01
                        </Text>
                      </div>
                    </div>
                    <div className="h-[54px] md:h-[NaNpx] mt-[-NaNpx] w-[11%] z-[1]">
                      <div className="absolute border-blue_702 border-r-[1px] border-solid border-t-[4px] h-[50px] left-[0] top-[0] w-[13%]"></div>
                      <div className="absolute bottom-[0] flex flex-col gap-[-1px] inset-x-[0] items-end justify-end mx-[auto] px-[5px] py-[10px] self-stretch w-[auto]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="bg-gray_110 h-[1px] w-[100%]"></div>
                          <Text
                            className="font-normal mt-[2px] not-italic text-bluegray_958 text-right w-[auto]"
                            variant="body44"
                          >
                            Estimated Annual Budget
                          </Text>
                        </div>
                        <Text
                          className="font-medium text-bluegray_958 text-right w-[auto]"
                          variant="body44"
                        >
                          $465
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-center max-w-[1260px] mx-[auto] p-[30px] md:px-[20px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[34px] w-[100%]">
                    <div className="h-[48px] relative w-[48px]">
                      <div className="bg-blue_54 h-[30px] m-[auto] rounded-[50%] w-[30px]"></div>
                      <Img
                        src="images/img_collectivenavba.png"
                        className="absolute h-[48px] inset-[0] justify-center m-[auto] object-cover w-[48px]"
                        alt="collectivenavba_Three"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-row gap-[6px] items-center justify-center md:ml-[0] ml-[8px] py-[14px] md:w-[100%] w-[16%]">
                      <Text
                        className="font-normal not-italic text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                        variant="body21"
                      >
                        Contribute
                      </Text>
                      <Img
                        src="images/img_info.svg"
                        className="h-[18px] w-[18px]"
                        alt="info"
                      />
                    </div>
                    <Line className="bg-gray_313 h-[1px] mb-[31px] md:ml-[0] ml-[16px] md:mt-[0] mt-[35px] w-[79%]" />
                  </div>
                  <Text
                    className="font-normal mb-[15px] not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                    variant="body43"
                  >
                    Become a financial contributor.
                  </Text>
                </div>
                <div className="flex flex-col gap-[15px] justify-start mt-[24px] pb-[29px] w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[360px] not-italic text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                    variant="body21"
                  >
                    Financial Contributions
                  </Text>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[36px] items-center justify-between pl-[16px] py-[16px] w-[100%]">
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-[36px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 md:ml-[0] ml-[2px] md:px-[20px] md:w-[100%] w-[82%]"
                        orientation="horizontal"
                      >
                        <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-start rounded-[16px] w-[100%]">
                          <div className="bg-gradient28  flex items-start justify-end p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
                            <Button className="bg-white_A700 cursor-pointer font-bold min-w-[103px] md:ml-[0] ml-[8px] mt-[64px] pl-[8px] pr-[8.63px] py-[6px] rounded-[4px] text-[12px] text-bluegray_700 text-center tracking-[0.72px] uppercase w-[auto]">
                              Membership
                            </Button>
                          </div>
                          <div className="flex flex-col items-start justify-start p-[16px] self-stretch w-[auto]">
                            <div className="flex flex-col gap-[16px] items-start justify-start pb-[8px] pt-[4px] self-stretch w-[auto]">
                              <Text
                                className="font-bold text-gray_930 text-left w-[auto]"
                                variant="body33"
                              >
                                Hero Sponsor 🎖
                              </Text>
                              <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                                <div className="flex items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-normal leading-[22.00px] md:max-w-[100%] max-w-[228px] not-italic text-bluegray_700 text-left tracking-[-0.40px]"
                                    variant="body43"
                                  ></Text>
                                </div>
                                <div className="flex items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body28"
                                  ></Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pt-[16px] self-stretch w-[auto]">
                              <Button className="bg-gradient29  border-[1px] border-blue_702 border-solid cursor-pointer font-medium min-w-[246px] pl-[89.2px] pr-[88.8px] sm:px-[20px] md:px-[40px] py-[15px] rounded-[23px] text-[14px] text-center text-white_A700 tracking-[-0.40px] w-[auto]">
                                Contribute
                              </Button>
                              <div className="flex flex-col gap-[17.8px] items-start justify-start pb-[9.2px] self-stretch w-[auto]">
                                <div className="flex flex-row gap-[8.05px] items-center justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-medium text-bluegray_700 text-left tracking-[0.72px] uppercase w-[auto]"
                                    variant="body47"
                                  >
                                    Latest activity by
                                  </Text>
                                  <Line className="bg-gray_313 h-[1px] w-[42%]" />
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_611 text-left w-[auto]"
                                  variant="body43"
                                >
                                  Be the first one to contribute!
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-start rounded-[16px] w-[100%]">
                          <div className="bg-gradient28  flex items-start justify-end p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
                            <Button className="bg-white_A700 cursor-pointer font-bold min-w-[103px] md:ml-[0] ml-[8px] mt-[64px] pl-[8px] pr-[8.63px] py-[6px] rounded-[4px] text-[12px] text-bluegray_700 text-center tracking-[0.72px] uppercase w-[auto]">
                              Membership
                            </Button>
                          </div>
                          <div className="flex flex-col items-start justify-start p-[16px] self-stretch w-[auto]">
                            <div className="flex flex-col gap-[17px] items-start justify-start pb-[8px] pt-[4px] self-stretch w-[auto]">
                              <Text
                                className="font-bold text-gray_930 text-left w-[auto]"
                                variant="body35"
                              >
                                Platinum Sponsor ⭐️
                              </Text>
                              <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                                <div className="flex items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-normal leading-[22.00px] md:max-w-[100%] max-w-[228px] not-italic text-bluegray_700 text-left tracking-[-0.40px]"
                                    variant="body43"
                                  ></Text>
                                </div>
                                <div className="flex items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body28"
                                  ></Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pt-[16px] self-stretch w-[auto]">
                              <Button className="bg-gradient29  border-[1px] border-blue_702 border-solid cursor-pointer font-medium min-w-[246px] pl-[89.2px] pr-[88.8px] sm:px-[20px] md:px-[40px] py-[15px] rounded-[23px] text-[14px] text-center text-white_A700 tracking-[-0.40px] w-[auto]">
                                Contribute
                              </Button>
                              <div className="flex flex-col gap-[17.8px] items-start justify-start pb-[9.2px] self-stretch w-[auto]">
                                <div className="flex flex-row gap-[8.05px] items-center justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-medium text-bluegray_700 text-left tracking-[0.72px] uppercase w-[auto]"
                                    variant="body47"
                                  >
                                    Latest activity by
                                  </Text>
                                  <Line className="bg-gray_313 h-[1px] w-[42%]" />
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_611 text-left w-[auto]"
                                  variant="body43"
                                >
                                  Be the first one to contribute!
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-start rounded-[16px] w-[100%]">
                          <div className="bg-gradient28  flex items-start justify-end p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
                            <Button className="bg-white_A700 cursor-pointer font-bold min-w-[103px] md:ml-[0] ml-[8px] mt-[64px] pl-[8px] pr-[8.63px] py-[6px] rounded-[4px] text-[12px] text-bluegray_700 text-center tracking-[0.72px] uppercase w-[auto]">
                              Membership
                            </Button>
                          </div>
                          <div className="flex flex-col items-start justify-start p-[16px] self-stretch w-[auto]">
                            <div className="flex flex-col gap-[16px] items-start justify-start pb-[8px] pt-[4px] self-stretch w-[auto]">
                              <Text
                                className="font-bold text-gray_930 text-left w-[auto]"
                                variant="body33"
                              >
                                Gold Sponsor 🥇
                              </Text>
                              <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                                <div className="flex items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-normal leading-[22.00px] md:max-w-[100%] max-w-[239px] not-italic text-bluegray_700 text-left tracking-[-0.40px]"
                                    variant="body43"
                                  ></Text>
                                </div>
                                <div className="flex items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body28"
                                  ></Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pt-[16px] self-stretch w-[auto]">
                              <Button className="bg-gradient29  border-[1px] border-blue_702 border-solid cursor-pointer font-medium min-w-[246px] pl-[89.2px] pr-[88.8px] sm:px-[20px] md:px-[40px] py-[15px] rounded-[23px] text-[14px] text-center text-white_A700 tracking-[-0.40px] w-[auto]">
                                Contribute
                              </Button>
                              <div className="flex flex-col gap-[8px] items-start justify-start pb-[4px] self-stretch w-[auto]">
                                <div className="flex flex-row gap-[8.05px] items-center justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-medium text-bluegray_700 text-left tracking-[0.72px] uppercase w-[auto]"
                                    variant="body47"
                                  >
                                    Latest activity by
                                  </Text>
                                  <Line className="bg-gray_313 h-[1px] w-[42%]" />
                                </div>
                                <div className="flex flex-row gap-[8px] items-start justify-start pl-[4px] pr-[170px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                                  <Img
                                    src="images/img_div_32x32.png"
                                    className="h-[32px] md:h-[auto] object-cover rounded-[8px] w-[32px]"
                                    alt="div"
                                  />
                                  <Img
                                    src="images/img_div_2.png"
                                    className="h-[32px] md:h-[auto] object-cover rounded-[8px] w-[32px]"
                                    alt="div_One"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-start rounded-[16px] w-[100%]">
                          <div className="bg-gradient28  flex items-start justify-end p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
                            <Button className="bg-white_A700 cursor-pointer font-bold min-w-[103px] md:ml-[0] ml-[8px] mt-[64px] pl-[8px] pr-[8.63px] py-[6px] rounded-[4px] text-[12px] text-bluegray_700 text-center tracking-[0.72px] uppercase w-[auto]">
                              Membership
                            </Button>
                          </div>
                          <div className="flex flex-col items-start justify-start p-[16px] self-stretch w-[auto]">
                            <div className="flex flex-col gap-[16px] items-start justify-start pb-[8px] pt-[4px] self-stretch w-[auto]">
                              <Text
                                className="font-bold text-gray_930 text-left w-[auto]"
                                variant="body33"
                              >
                                Silver Sponsor 🥈
                              </Text>
                              <div className="flex flex-col gap-[46px] items-start justify-start self-stretch w-[auto]">
                                <Text
                                  className="font-normal leading-[22.00px] md:max-w-[100%] max-w-[240px] not-italic text-bluegray_700 text-left tracking-[-0.40px]"
                                  variant="body43"
                                >
                                  Your name or company name and logo will be put
                                  on NextUI repository Support section - Silver
                                  Sponsor category
                                </Text>
                                <div className="flex items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body28"
                                  ></Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pt-[16px] self-stretch w-[auto]">
                              <Button className="bg-gradient29  border-[1px] border-blue_702 border-solid cursor-pointer font-medium min-w-[246px] pl-[89.2px] pr-[88.8px] sm:px-[20px] md:px-[40px] py-[15px] rounded-[23px] text-[14px] text-center text-white_A700 tracking-[-0.40px] w-[auto]">
                                Contribute
                              </Button>
                              <div className="flex flex-col gap-[17.8px] items-start justify-start pb-[9.2px] self-stretch w-[auto]">
                                <div className="flex flex-row gap-[8.05px] items-center justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-medium text-bluegray_700 text-left tracking-[0.72px] uppercase w-[auto]"
                                    variant="body47"
                                  >
                                    Latest activity by
                                  </Text>
                                  <Line className="bg-gray_313 h-[1px] w-[42%]" />
                                </div>
                                <Text
                                  className="font-normal not-italic text-gray_611 text-left w-[auto]"
                                  variant="body43"
                                >
                                  Be the first one to contribute!
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-start rounded-[16px] w-[100%]">
                          <div className="bg-gradient28  flex items-start justify-end p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
                            <Button className="bg-white_A700 cursor-pointer font-bold min-w-[103px] md:ml-[0] ml-[8px] mt-[64px] pl-[8px] pr-[8.63px] py-[6px] rounded-[4px] text-[12px] text-bluegray_700 text-center tracking-[0.72px] uppercase w-[auto]">
                              Membership
                            </Button>
                          </div>
                          <div className="flex flex-col items-start justify-start p-[16px] self-stretch w-[auto]">
                            <div className="flex flex-col gap-[16px] items-start justify-start pb-[8px] pt-[4px] self-stretch w-[auto]">
                              <Text
                                className="font-bold text-gray_930 text-left w-[auto]"
                                variant="body33"
                              >
                                Bronze sponsor 🥉
                              </Text>
                              <div className="flex flex-col gap-[46px] items-start justify-start self-stretch w-[auto]">
                                <Text
                                  className="font-normal leading-[22.00px] md:max-w-[100%] max-w-[240px] not-italic text-bluegray_700 text-left tracking-[-0.40px]"
                                  variant="body43"
                                >
                                  Your name or company name and logo will be put
                                  on NextUI repository Support section - Bronze
                                  Sponsor category
                                </Text>
                                <div className="flex items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body28"
                                  ></Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pt-[16px] self-stretch w-[auto]">
                              <Button className="bg-gradient29  border-[1px] border-blue_702 border-solid cursor-pointer font-medium min-w-[246px] pl-[89.2px] pr-[88.8px] sm:px-[20px] md:px-[40px] py-[15px] rounded-[23px] text-[14px] text-center text-white_A700 tracking-[-0.40px] w-[auto]">
                                Contribute
                              </Button>
                              <div className="flex flex-col gap-[8px] items-start justify-start pb-[4px] w-[100%]">
                                <div className="flex flex-row gap-[8.05px] items-center justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-medium text-bluegray_700 text-left tracking-[0.72px] uppercase w-[auto]"
                                    variant="body47"
                                  >
                                    Latest activity by
                                  </Text>
                                  <Line className="bg-gray_313 h-[1px] w-[42%]" />
                                </div>
                                <Img
                                  src="images/img_div_3.png"
                                  className="h-[32px] md:h-[auto] md:ml-[0] ml-[4px] object-cover rounded-[8px] w-[32px]"
                                  alt="div"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex md:flex-1 flex-col items-center justify-start md:px-[20px] rounded-[16px] md:w-[100%] w-[15%]">
                        <div className="bg-gradient28  flex items-start justify-end p-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]">
                          <Button className="bg-white_A700 cursor-pointer font-bold min-w-[103px] md:ml-[0] ml-[8px] mt-[64px] pl-[8px] pr-[8.63px] py-[6px] rounded-[4px] text-[12px] text-bluegray_700 text-center tracking-[0.72px] uppercase w-[auto]">
                            Membership
                          </Button>
                        </div>
                        <div className="flex flex-col items-start justify-start p-[16px] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[16px] items-start justify-start pb-[8px] pt-[4px] self-stretch w-[auto]">
                            <Text
                              className="font-bold text-gray_930 text-left w-[auto]"
                              variant="body33"
                            >
                              Backer 🖤
                            </Text>
                            <div className="h-[166px] relative w-[246px]">
                              <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                                <div className="flex flex-col gap-[28px] items-center justify-start w-[100%]">
                                  <Text
                                    className="font-normal leading-[22.00px] not-italic text-bluegray_700 text-left tracking-[-0.40px] sm:w-[100%] w-[98%]"
                                    variant="body43"
                                  >
                                    Your name or company name and logo will be
                                    put on the NextUI repository Support section
                                    - Backer Sponsor category
                                  </Text>
                                  <div className="flex flex-col gap-[0.09px] items-start justify-start self-stretch w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] uppercase w-[auto]"
                                      variant="body51"
                                    >
                                      Starts at
                                    </Text>
                                    <div className="flex items-start justify-start self-stretch w-[auto]">
                                      <Text
                                        className="font-bold text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                                        variant="body28"
                                      ></Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Button className="absolute bg-white_A700 border-[1px] border-gray_313 border-solid bottom-[0] flex h-[42px] items-center justify-center p-[7px] right-[0] rounded-[50%] w-[42px]">
                                <Img
                                  src="images/img_arrowright_bluegray_958.svg"
                                  className="h-[26px]"
                                  alt="arrowright"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[24px] items-start justify-start pt-[16px] self-stretch w-[auto]">
                            <Button className="bg-gradient29  border-[1px] border-blue_702 border-solid cursor-pointer font-medium min-w-[246px] pl-[89.2px] pr-[88.8px] sm:px-[20px] md:px-[40px] py-[15px] rounded-[23px] text-[14px] text-center text-white_A700 tracking-[-0.40px] w-[auto]">
                              Contribute
                            </Button>
                            <div className="flex flex-col gap-[8px] items-start justify-start pb-[4px] self-stretch w-[auto]">
                              <div className="flex flex-row gap-[8.05px] items-center justify-start self-stretch w-[auto]">
                                <Text
                                  className="font-medium text-bluegray_700 text-left tracking-[0.72px] uppercase w-[auto]"
                                  variant="body47"
                                >
                                  Latest activity by
                                </Text>
                                <Line className="bg-gray_313 h-[1px] w-[42%]" />
                              </div>
                              <div className="flex flex-row items-center justify-start px-[4px] w-[100%]">
                                <Img
                                  src="images/img_div_4.png"
                                  className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                  alt="div_Four"
                                />
                                <Img
                                  src="images/img_div_5.png"
                                  className="h-[32px] md:h-[auto] ml-[8px] rounded-[50%] w-[32px]"
                                  alt="div_Five"
                                />
                                <Img
                                  src="images/img_div_6.png"
                                  className="h-[32px] md:h-[auto] ml-[8px] rounded-[50%] w-[32px]"
                                  alt="div_Six"
                                />
                                <Img
                                  src="images/img_div_7.png"
                                  className="h-[32px] md:h-[auto] ml-[8px] rounded-[50%] w-[32px]"
                                  alt="div_Seven"
                                />
                                <div className="flex items-start justify-start ml-[12px] pb-[11.31px] pt-[7.69px] self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-gray_611 text-left w-[auto]"
                                    variant="body49"
                                  >
                                    + 2
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex md:flex-1 items-end justify-start md:px-[20px] rounded-[3px] w-[1%] md:w-[100%]">
                        <Img
                          src="images/img_div_104x5.png"
                          className="h-[104px] md:h-[auto] mb-[397px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                          alt="div_Eight"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start max-w-[1260px] mt-[26px] mx-[auto] pb-[30px] md:px-[20px] px-[30px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                    variant="body21"
                  >
                    Top financial contributors
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[20px] items-start justify-start pb-[16px] self-stretch md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                        variant="body33"
                      >
                        Individuals
                      </Text>
                      <div className="flex items-start justify-start pb-[16px] pr-[16px] w-[100%]">
                        <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[77%]">
                          <List
                            className="flex-col gap-[16px] grid items-center w-[100%]"
                            orientation="vertical"
                          >
                            <div className="flex md:flex-1 md:flex-col flex-row gap-[24px] items-center justify-between mr-[8px] my-[0] md:w-[100%] w-[99%]">
                              <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between md:w-[100%] w-[66%]">
                                <div className="flex flex-row gap-[8px] items-center justify-between sm:w-[100%] w-[50%]">
                                  <div className="bg-white_A700 flex flex-row gap-[13px] items-center justify-center pl-[14px] rounded-[16px] w-[31%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_954 text-left w-[auto]"
                                      variant="body51"
                                    >
                                      1
                                    </Text>
                                    <Img
                                      src="images/img_div_8.png"
                                      className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                      alt="div"
                                    />
                                  </div>
                                  <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                                    <div className="flex items-center justify-start w-[100%]">
                                      <Text
                                        className="font-bold text-bluegray_958 text-left tracking-[-0.40px] w-[auto]"
                                        variant="body47"
                                      >
                                        PRISMA European Capacity Platform GmbH
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[1.94px] items-start justify-start sm:pr-[20px] pr-[26.06px] self-stretch w-[auto]">
                                      <div className="flex items-start justify-start self-stretch w-[auto]">
                                        <Text
                                          className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                          variant="body51"
                                        >
                                          $50
                                        </Text>
                                      </div>
                                      <Text
                                        className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                        variant="body51"
                                      >
                                        USD since Dec 2022
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row gap-[8px] items-center justify-between sm:w-[100%] w-[48%]">
                                  <div className="bg-white_A700 flex flex-row gap-[11px] items-center justify-center pl-[14px] rounded-[16px] w-[32%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_954 text-left w-[auto]"
                                      variant="body51"
                                    >
                                      2
                                    </Text>
                                    <Img
                                      src="images/img_div_9.png"
                                      className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                      alt="div_One"
                                    />
                                  </div>
                                  <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                                    <div className="flex items-start justify-start self-stretch w-[auto]">
                                      <Text
                                        className="font-bold text-bluegray_958 text-left tracking-[-0.40px] w-[auto]"
                                        variant="body47"
                                      >
                                        Dhananjay Senday
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[1.52px] items-start justify-start pr-[19.48px] self-stretch w-[auto]">
                                      <div className="flex items-start justify-start self-stretch w-[auto]">
                                        <Text
                                          className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                          variant="body51"
                                        >
                                          $10
                                        </Text>
                                      </div>
                                      <Text
                                        className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                        variant="body51"
                                      >
                                        USD since Mar 2022
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-between md:w-[100%] w-[31%]">
                                <div className="bg-white_A700 flex flex-row gap-[11px] items-center justify-center pl-[14px] rounded-[16px] w-[32%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_954 text-left w-[auto]"
                                    variant="body51"
                                  >
                                    3
                                  </Text>
                                  <Img
                                    src="images/img_div_10.png"
                                    className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                    alt="div_Two"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                                  <div className="flex items-start justify-start self-stretch w-[auto]">
                                    <Text
                                      className="font-bold text-bluegray_958 text-left tracking-[-0.40px] w-[auto]"
                                      variant="body47"
                                    >
                                      manuel-rw
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[1.52px] items-start justify-start sm:pr-[20px] pr-[21.48px] self-stretch w-[auto]">
                                    <div className="flex items-start justify-start self-stretch w-[auto]">
                                      <Text
                                        className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                        variant="body51"
                                      >
                                        $10
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                      variant="body51"
                                    >
                                      USD since Apr 2022
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 md:flex-col flex-row gap-[16px] items-center justify-between my-[0] w-[100%]">
                              <div className="flex md:flex-1 sm:flex-col flex-row gap-[24px] items-center justify-between md:w-[100%] w-[66%]">
                                <div className="flex flex-row gap-[8px] items-center justify-between sm:w-[100%] w-[47%]">
                                  <div className="bg-white_A700 flex flex-row gap-[11px] items-center justify-center pl-[14px] rounded-[16px] w-[32%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_954 text-left w-[auto]"
                                      variant="body51"
                                    >
                                      4
                                    </Text>
                                    <Img
                                      src="images/img_div_11.png"
                                      className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                      alt="div"
                                    />
                                  </div>
                                  <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                                    <div className="flex items-start justify-start self-stretch w-[auto]">
                                      <Text
                                        className="font-bold text-bluegray_958 text-left tracking-[-0.40px] w-[auto]"
                                        variant="body47"
                                      >
                                        jorge
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[1.09px] items-start justify-start sm:pr-[20px] pr-[24.91px] self-stretch w-[auto]">
                                      <div className="flex items-start justify-start w-[13px]">
                                        <Text
                                          className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                          variant="body51"
                                        >
                                          $5
                                        </Text>
                                      </div>
                                      <Text
                                        className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                        variant="body51"
                                      >
                                        USD since Feb 2022
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row gap-[8px] items-center justify-between sm:w-[100%] w-[49%]">
                                  <div className="bg-white_A700 flex flex-row gap-[11px] items-center justify-center pl-[14px] rounded-[16px] w-[31%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_954 text-left w-[auto]"
                                      variant="body51"
                                    >
                                      5
                                    </Text>
                                    <Img
                                      src="images/img_div_12.png"
                                      className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                      alt="div_One"
                                    />
                                  </div>
                                  <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                                    <div className="flex items-center justify-start w-[100%]">
                                      <Text
                                        className="font-bold text-bluegray_958 text-left tracking-[-0.40px] w-[auto]"
                                        variant="body47"
                                      >
                                        William Frank Monroy Mamani
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-[1.66px] items-start justify-start sm:pr-[20px] pr-[35.34px] self-stretch w-[auto]">
                                      <div className="flex items-start justify-start self-stretch w-[auto]">
                                        <Text
                                          className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                          variant="body51"
                                        >
                                          $1
                                        </Text>
                                      </div>
                                      <Text
                                        className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                        variant="body51"
                                      >
                                        USD since Oct 2022
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-row gap-[8px] items-center justify-between md:w-[100%] w-[32%]">
                                <div className="bg-white_A700 flex flex-row gap-[11px] items-center justify-center pl-[14px] rounded-[16px] w-[31%]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_954 text-left w-[auto]"
                                    variant="body51"
                                  >
                                    6
                                  </Text>
                                  <Img
                                    src="images/img_div_13.png"
                                    className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                    alt="div_Two"
                                  />
                                </div>
                                <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <Text
                                      className="font-bold text-bluegray_958 text-left tracking-[-0.40px] w-[auto]"
                                      variant="body47"
                                    >
                                      Rharison Lucas Moreira Abreu
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-[1.66px] items-start justify-start sm:pr-[20px] pr-[33.34px] self-stretch w-[auto]">
                                    <div className="flex items-start justify-start self-stretch w-[auto]">
                                      <Text
                                        className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                        variant="body51"
                                      >
                                        $1
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                      variant="body51"
                                    >
                                      USD since Mar 2023
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                          <List
                            className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-2 w-[65%]"
                            orientation="horizontal"
                          >
                            <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                              <div className="bg-white_A700 flex flex-row gap-[12px] items-center justify-center pl-[14px] rounded-[16px] w-[32%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_954 text-left w-[auto]"
                                  variant="body51"
                                >
                                  7
                                </Text>
                                <Img
                                  src="images/img_div_14.png"
                                  className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                  alt="div"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                                <div className="flex items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_958 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body47"
                                  >
                                    HighError
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[1.66px] items-start justify-start sm:pr-[20px] pr-[25.34px] self-stretch w-[auto]">
                                  <div className="flex items-start justify-start self-stretch w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                      variant="body51"
                                    >
                                      $1
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body51"
                                  >
                                    USD since Mar 2023
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                              <div className="bg-white_A700 flex flex-row gap-[11px] items-center justify-center pl-[14px] rounded-[16px] w-[32%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_954 text-left w-[auto]"
                                  variant="body51"
                                >
                                  8
                                </Text>
                                <Img
                                  src="images/img_div_15.png"
                                  className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                                  alt="div"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                                <div className="flex items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_958 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body47"
                                  >
                                    Kristof
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[1.66px] items-start justify-start sm:pr-[20px] pr-[25.34px] self-stretch w-[auto]">
                                  <div className="flex items-start justify-start self-stretch w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                      variant="body51"
                                    >
                                      $1
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body51"
                                  >
                                    USD since Mar 2023
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[20px] items-start justify-start pb-[16px] self-stretch w-[auto]">
                      <Text
                        className="font-medium text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                        variant="body33"
                      >
                        Organizations
                      </Text>
                      <List
                        className="flex-col gap-[16px] grid items-start pb-[16px] pr-[130px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row gap-[8px] items-center justify-start my-[0] w-[100%]">
                          <div className="bg-white_A700 flex flex-row gap-[13px] items-center justify-center pl-[14px] rounded-[16px] w-[32%]">
                            <Text
                              className="font-normal not-italic text-bluegray_954 text-left w-[auto]"
                              variant="body51"
                            >
                              1
                            </Text>
                            <Img
                              src="images/img_div_16.png"
                              className="h-[32px] md:h-[auto] object-cover rounded-[8px] w-[32px]"
                              alt="div"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                            <div className="flex items-start justify-start self-stretch w-[auto]">
                              <Text
                                className="font-bold text-bluegray_958 text-left tracking-[-0.40px] w-[auto]"
                                variant="body47"
                              >
                                Lowdefy
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[1.77px] items-start justify-start pr-[12.23px] self-stretch w-[auto]">
                              <div className="flex items-start justify-start self-stretch w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                  variant="body51"
                                >
                                  $200
                                </Text>
                              </div>
                              <Text
                                className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                variant="body51"
                              >
                                USD since Aug 2022
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start my-[0] w-[100%]">
                          <div className="bg-white_A700 flex flex-row gap-[11px] items-center justify-center pl-[14px] rounded-[16px] w-[32%]">
                            <Text
                              className="font-normal not-italic text-bluegray_954 text-left w-[auto]"
                              variant="body51"
                            >
                              2
                            </Text>
                            <Img
                              src="images/img_div_17.png"
                              className="h-[32px] md:h-[auto] object-cover rounded-[8px] w-[32px]"
                              alt="div"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                            <div className="flex items-start justify-start self-stretch w-[auto]">
                              <Text
                                className="font-bold text-bluegray_958 text-left tracking-[-0.40px] w-[auto]"
                                variant="body47"
                              >
                                LIKN
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[1.36px] items-start justify-start pr-[14.64px] self-stretch w-[auto]">
                              <div className="flex items-start justify-start self-stretch w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                  variant="body51"
                                >
                                  $100
                                </Text>
                              </div>
                              <Text
                                className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                variant="body51"
                              >
                                USD since Feb 2023
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start my-[0] w-[100%]">
                          <div className="bg-white_A700 flex flex-row gap-[11px] items-center justify-center pl-[14px] rounded-[16px] w-[32%]">
                            <Text
                              className="font-normal not-italic text-bluegray_954 text-left w-[auto]"
                              variant="body51"
                            >
                              3
                            </Text>
                            <Img
                              src="images/img_div_18.png"
                              className="h-[32px] md:h-[auto] object-cover rounded-[8px] w-[32px]"
                              alt="div"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                            <div className="flex items-start justify-start self-stretch w-[auto]">
                              <Text
                                className="font-bold text-bluegray_958 text-left tracking-[-0.40px] w-[auto]"
                                variant="body47"
                              >
                                Chartbrew
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[1.23px] items-start justify-start pr-[17.77px] self-stretch w-[auto]">
                              <div className="flex items-start justify-start self-stretch w-[auto]">
                                <Text
                                  className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                  variant="body51"
                                >
                                  $30
                                </Text>
                              </div>
                              <Text
                                className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                variant="body51"
                              >
                                USD since Dec 2022
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="h-[756px] md:h-[797px] mt-[41px] md:px-[20px] relative w-[100%]">
                  <div
                    className="absolute bg-cover bg-no-repeat flex h-[550px] inset-x-[0] items-center justify-start mx-[auto] pb-[229px] sm:px-[20px] px-[229px] md:px-[40px] top-[0] w-[90%]"
                    style={{ backgroundImage: "url('images/img_group34.svg')" }}
                  >
                    <div className="flex flex-col gap-[32px] items-center justify-start mb-[114px] w-[100%]">
                      <div className="flex flex-col items-start justify-start sm:px-[20px] px-[30px] w-[100%]">
                        <Text
                          className="font-bold text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                          variant="body8"
                        >
                          NextUI is all of us
                        </Text>
                        <div className="flex items-start justify-start mt-[9px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                            variant="body21"
                          ></Text>
                        </div>
                        <Text
                          className="font-normal mt-[14px] not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                          variant="body43"
                        >
                          Thank you for supporting NextUI.
                        </Text>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[4px] w-[100%]">
                        <Button className="bg-blue_54 border-[1px] border-light_blue_901 border-solid cursor-pointer font-normal min-w-[124px] sm:ml-[0] ml-[26px] not-italic pl-[15px] pr-[14.34px] py-[11px] rounded-[17px] text-[14px] text-center text-gray_931 tracking-[-0.40px] w-[auto]">
                          All contributors
                        </Button>
                        <Button className="bg-gray_55 border-[1px] border-solid border-white_A700 cursor-pointer font-normal min-w-[64px] sm:ml-[0] ml-[8px] not-italic pl-[15px] pr-[14.5px] py-[11px] rounded-[17px] text-[14px] text-bluegray_958 text-center tracking-[-0.40px] w-[auto]">
                          Team
                        </Button>
                        <Button className="bg-gray_55 border-[1px] border-solid border-white_A700 cursor-pointer font-normal min-w-[164px] sm:ml-[0] ml-[8px] not-italic pl-[15px] pr-[14.02px] py-[11px] rounded-[17px] text-[14px] text-bluegray_958 text-center tracking-[-0.40px] w-[auto]">
                          Financial contributors
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[4%] flex inset-x-[0] items-center justify-start mx-[auto] pb-[26px] sm:px-[20px] px-[26px] w-[100%]">
                    <div className="flex items-center justify-start pt-[26px] sm:px-[20px] px-[26px] md:w-[100%] w-[96%]">
                      <div className="flex flex-col gap-[26px] items-start justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex md:flex-1 flex-col items-center justify-center rounded-[8px] md:w-[100%] w-[9%]">
                            <div className="border-gray_202 border-solid border-t-[1px] flex items-center justify-start mt-[44px] sm:px-[20px] px-[39px] md:w-[100%] w-[99%]">
                              <Img
                                src="images/img_div_33x64.png"
                                className="h-[33px] md:h-[auto] object-cover rounded-[32px] w-[100%]"
                                alt="div_Nine"
                              />
                            </div>
                            <div className="flex flex-col gap-[9px] items-center justify-start mb-[65px] p-[8px] md:w-[100%] w-[99%]">
                              <Text
                                className="font-medium text-center text-gray_930 tracking-[-0.40px] w-[auto]"
                                variant="body43"
                              >
                                Junior Garcia
                              </Text>
                              <Button className="bg-gray_111 cursor-pointer font-normal mb-[12px] min-w-[49px] not-italic pl-[5px] pr-[5.47px] py-[5px] rounded-[4px] text-[12px] text-bluegray_700 text-center tracking-[0.72px] w-[auto]">
                                Admin
                              </Button>
                            </div>
                          </div>
                          <List
                            className="md:flex-1 sm:flex-col flex-row gap-[32px] grid grid-cols-2 md:w-[100%] w-[19%]"
                            orientation="horizontal"
                          >
                            <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-center sm:ml-[0] rounded-[8px] w-[100%]">
                              <div className="border-gray_202 border-solid border-t-[1px] flex items-center justify-start mt-[44px] sm:px-[20px] px-[39px] md:w-[100%] w-[99%]">
                                <Img
                                  src="images/img_div_19.png"
                                  className="h-[33px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                                  alt="div"
                                />
                              </div>
                              <div className="flex flex-col gap-[9px] items-center justify-start mb-[63px] p-[8px] md:w-[100%] w-[99%]">
                                <Text
                                  className="font-medium text-center text-gray_930 tracking-[-0.40px] w-[auto]"
                                  variant="body43"
                                >
                                  Lowdefy
                                </Text>
                                <div className="flex flex-col gap-[3.8px] items-end justify-start mb-[3px] self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_954 text-center tracking-[-0.40px] w-[auto]"
                                    variant="body47"
                                  >
                                    Gold Sponsor 🥇
                                  </Text>
                                  <div className="flex items-start justify-start pl-[14.38px] pr-[14.86px] self-stretch w-[auto]">
                                    <Text
                                      className="font-bold text-center text-gray_930 w-[auto]"
                                      variant="body47"
                                    ></Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-center sm:ml-[0] rounded-[8px] w-[100%]">
                              <div className="border-gray_202 border-solid border-t-[1px] flex items-center justify-start mt-[44px] sm:px-[20px] px-[39px] md:w-[100%] w-[99%]">
                                <Img
                                  src="images/img_div_20.png"
                                  className="h-[33px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                                  alt="div"
                                />
                              </div>
                              <div className="flex flex-col gap-[9px] items-center justify-start mb-[63px] p-[8px] md:w-[100%] w-[99%]">
                                <Text
                                  className="font-medium text-center text-gray_930 tracking-[-0.40px] w-[auto]"
                                  variant="body43"
                                >
                                  LIKN
                                </Text>
                                <div className="flex flex-col gap-[3.8px] items-end justify-start mb-[3px] self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_954 text-center tracking-[-0.40px] w-[auto]"
                                    variant="body47"
                                  >
                                    Gold Sponsor 🥇
                                  </Text>
                                  <div className="flex items-start justify-start pl-[15.22px] pr-[16.02px] self-stretch w-[auto]">
                                    <Text
                                      className="font-bold text-center text-gray_930 w-[auto]"
                                      variant="body47"
                                    ></Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                          <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex md:flex-1 flex-col items-center justify-center rounded-[8px] md:w-[100%] w-[9%]">
                            <div className="border-gray_202 border-solid border-t-[1px] flex items-center justify-start mt-[44px] sm:px-[20px] px-[39px] md:w-[100%] w-[99%]">
                              <Img
                                src="images/img_div_21.png"
                                className="h-[33px] md:h-[auto] object-cover rounded-[32px] w-[100%]"
                                alt="div_Ten"
                              />
                            </div>
                            <div className="flex flex-col gap-[9px] items-center justify-start mb-[81px] p-[8px] md:w-[100%] w-[99%]">
                              <Text
                                className="font-medium text-center text-gray_930 tracking-[-0.40px] w-[auto]"
                                variant="body43"
                              >
                                PRISMA Europe...
                              </Text>
                              <div className="flex items-start justify-start mb-[3px] self-stretch w-[auto]">
                                <Text
                                  className="font-bold text-center text-gray_930 w-[auto]"
                                  variant="body47"
                                ></Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex md:flex-1 flex-col items-center justify-center rounded-[8px] md:w-[100%] w-[9%]">
                            <div className="border-gray_202 border-solid border-t-[1px] flex items-center justify-start mt-[44px] sm:px-[20px] px-[39px] md:w-[100%] w-[99%]">
                              <Img
                                src="images/img_div_22.png"
                                className="h-[33px] md:h-[auto] object-cover rounded-[16px] w-[100%]"
                                alt="div_Eleven"
                              />
                            </div>
                            <div className="flex flex-col gap-[9px] items-center justify-start mb-[63px] p-[8px] md:w-[100%] w-[99%]">
                              <Text
                                className="font-medium text-center text-gray_930 tracking-[-0.40px] w-[auto]"
                                variant="body43"
                              >
                                Chartbrew
                              </Text>
                              <div className="flex flex-col gap-[3.8px] items-start justify-start mb-[3px] self-stretch w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_954 text-center tracking-[-0.40px] w-[auto]"
                                  variant="body47"
                                >
                                  bronze sponsor 🥉
                                </Text>
                                <div className="flex items-start justify-start pl-[24.13px] pr-[24.7px] sm:px-[20px] self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-center text-gray_930 w-[auto]"
                                    variant="body47"
                                  ></Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex md:flex-1 flex-col items-center justify-center rounded-[8px] md:w-[100%] w-[9%]">
                            <div className="border-gray_202 border-solid border-t-[1px] flex items-center justify-start mt-[44px] sm:px-[20px] px-[39px] md:w-[100%] w-[99%]">
                              <Img
                                src="images/img_div_23.png"
                                className="h-[33px] md:h-[auto] object-cover rounded-[32px] w-[100%]"
                                alt="div_Twelve"
                              />
                            </div>
                            <div className="flex flex-col gap-[9px] items-center justify-start mb-[81px] p-[8px] md:w-[100%] w-[99%]">
                              <Text
                                className="font-medium text-center text-gray_930 tracking-[-0.40px] w-[auto]"
                                variant="body43"
                              >
                                Dhananjay Senday
                              </Text>
                              <div className="flex items-start justify-start mb-[3px] self-stretch w-[auto]">
                                <Text
                                  className="font-bold text-center text-gray_930 w-[auto]"
                                  variant="body47"
                                ></Text>
                              </div>
                            </div>
                          </div>
                          <List
                            className="md:flex-1 sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 md:w-[100%] w-[39%]"
                            orientation="horizontal"
                          >
                            <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-center sm:ml-[0] rounded-[8px] w-[100%]">
                              <div className="border-gray_202 border-solid border-t-[1px] flex items-center justify-start mt-[44px] sm:px-[20px] px-[39px] md:w-[100%] w-[99%]">
                                <Img
                                  src="images/img_div_24.png"
                                  className="h-[33px] md:h-[auto] object-cover rounded-[32px] w-[100%]"
                                  alt="div"
                                />
                              </div>
                              <div className="flex flex-col gap-[9px] items-center justify-start mb-[63px] p-[8px] md:w-[100%] w-[99%]">
                                <Text
                                  className="font-medium text-center text-gray_930 tracking-[-0.40px] w-[auto]"
                                  variant="body43"
                                >
                                  manuel-rw
                                </Text>
                                <div className="flex flex-col gap-[3.8px] items-start justify-start mb-[3px] self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_954 text-center tracking-[-0.40px] w-[auto]"
                                    variant="body47"
                                  >
                                    Backer 🖤
                                  </Text>
                                  <div className="flex items-start justify-start pl-[1.19px] pr-[1.72px] self-stretch w-[auto]">
                                    <Text
                                      className="font-bold text-center text-gray_930 w-[auto]"
                                      variant="body47"
                                    ></Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-center sm:ml-[0] rounded-[8px] w-[100%]">
                              <div className="border-gray_202 border-solid border-t-[1px] flex items-center justify-start mt-[44px] sm:px-[20px] px-[39px] md:w-[100%] w-[99%]">
                                <Img
                                  src="images/img_div_25.png"
                                  className="h-[33px] md:h-[auto] object-cover rounded-[32px] w-[100%]"
                                  alt="div"
                                />
                              </div>
                              <div className="flex flex-col gap-[9px] items-center justify-start mb-[63px] p-[8px] md:w-[100%] w-[99%]">
                                <Text
                                  className="font-medium text-center text-gray_930 tracking-[-0.40px] w-[auto]"
                                  variant="body43"
                                >
                                  jorge
                                </Text>
                                <div className="flex flex-col gap-[3.8px] items-start justify-start mb-[3px] self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_954 text-center tracking-[-0.40px] w-[auto]"
                                    variant="body47"
                                  >
                                    Backer 🖤
                                  </Text>
                                  <div className="flex items-start justify-start pl-[5.39px] pr-[4.52px] self-stretch w-[auto]">
                                    <Text
                                      className="font-bold text-center text-gray_930 w-[auto]"
                                      variant="body47"
                                    ></Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-center sm:ml-[0] rounded-[8px] w-[100%]">
                              <div className="border-gray_202 border-solid border-t-[1px] flex items-center justify-start mt-[44px] sm:px-[20px] px-[39px] md:w-[100%] w-[99%]">
                                <Img
                                  src="images/img_div_26.png"
                                  className="h-[33px] md:h-[auto] object-cover rounded-[32px] w-[100%]"
                                  alt="div"
                                />
                              </div>
                              <div className="flex flex-col items-center justify-start mb-[7px] p-[8px] md:w-[100%] w-[99%]">
                                <Text
                                  className="font-medium text-center text-gray_930 tracking-[-0.40px] w-[auto]"
                                  variant="body43"
                                >
                                  William Frank...
                                </Text>
                                <div className="flex flex-col gap-[3.8px] items-start justify-start mt-[9px] self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_954 text-center tracking-[-0.40px] w-[auto]"
                                    variant="body47"
                                  >
                                    Backer 🖤
                                  </Text>
                                  <div className="flex items-start justify-start pl-[5.31px] pr-[5.59px] self-stretch w-[auto]">
                                    <Text
                                      className="font-bold text-center text-gray_930 w-[auto]"
                                      variant="body47"
                                    ></Text>
                                  </div>
                                </div>
                                <Text
                                  className="font-normal leading-[16.00px] my-[6px] not-italic text-bluegray_700 text-center sm:w-[100%] w-[87%]"
                                  variant="body47"
                                >
                                  Como estudiante y gran fan de NextUI quiero
                                  mos...
                                </Text>
                              </div>
                            </div>
                            <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-center sm:ml-[0] rounded-[8px] w-[100%]">
                              <div className="border-gray_202 border-solid border-t-[1px] flex items-center justify-start mt-[44px] sm:px-[20px] px-[39px] md:w-[100%] w-[99%]">
                                <Img
                                  src="images/img_div_27.png"
                                  className="h-[33px] md:h-[auto] object-cover rounded-[32px] w-[100%]"
                                  alt="div"
                                />
                              </div>
                              <div className="flex flex-col gap-[9px] items-center justify-start mb-[63px] p-[8px] md:w-[100%] w-[99%]">
                                <Text
                                  className="font-medium text-center text-gray_930 tracking-[-0.40px] w-[auto]"
                                  variant="body43"
                                >
                                  Rharison Luca...
                                </Text>
                                <div className="flex flex-col gap-[3.8px] items-start justify-start mb-[3px] self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-bluegray_954 text-center tracking-[-0.40px] w-[auto]"
                                    variant="body47"
                                  >
                                    Backer 🖤
                                  </Text>
                                  <div className="flex items-start justify-start pl-[5.31px] pr-[5.59px] self-stretch w-[auto]">
                                    <Text
                                      className="font-bold text-center text-gray_930 w-[auto]"
                                      variant="body47"
                                    ></Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-[32px] grid grid-cols-2 w-[19%]"
                          orientation="horizontal"
                        >
                          <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-center rounded-[8px] w-[100%]">
                            <div className="border-gray_202 border-solid border-t-[1px] flex items-center justify-start mt-[44px] sm:px-[20px] px-[39px] md:w-[100%] w-[99%]">
                              <Img
                                src="images/img_div_28.png"
                                className="h-[33px] md:h-[auto] object-cover rounded-[32px] w-[100%]"
                                alt="div"
                              />
                            </div>
                            <div className="flex flex-col gap-[9px] items-center justify-start mb-[63px] p-[8px] md:w-[100%] w-[99%]">
                              <Text
                                className="font-medium text-center text-gray_930 tracking-[-0.40px] w-[auto]"
                                variant="body43"
                              >
                                HighError
                              </Text>
                              <div className="flex flex-col gap-[3.8px] items-start justify-start mb-[3px] self-stretch w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_954 text-center tracking-[-0.40px] w-[auto]"
                                  variant="body47"
                                >
                                  Backer 🖤
                                </Text>
                                <div className="flex items-start justify-start pl-[5.31px] pr-[5.59px] self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-center text-gray_930 w-[auto]"
                                    variant="body47"
                                  ></Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-center rounded-[8px] w-[100%]">
                            <div className="border-gray_202 border-solid border-t-[1px] flex items-center justify-start mt-[44px] sm:px-[20px] px-[39px] md:w-[100%] w-[99%]">
                              <Img
                                src="images/img_div_29.png"
                                className="h-[33px] md:h-[auto] object-cover rounded-[32px] w-[100%]"
                                alt="div"
                              />
                            </div>
                            <div className="flex flex-col gap-[9px] items-center justify-start mb-[63px] p-[8px] md:w-[100%] w-[99%]">
                              <Text
                                className="font-medium text-center text-gray_930 tracking-[-0.40px] w-[auto]"
                                variant="body43"
                              >
                                Kristof
                              </Text>
                              <div className="flex flex-col gap-[3.8px] items-start justify-start mb-[3px] self-stretch w-[auto]">
                                <Text
                                  className="font-bold text-bluegray_954 text-center tracking-[-0.40px] w-[auto]"
                                  variant="body47"
                                >
                                  Backer 🖤
                                </Text>
                                <div className="flex items-start justify-start pl-[5.31px] pr-[5.59px] self-stretch w-[auto]">
                                  <Text
                                    className="font-bold text-center text-gray_930 w-[auto]"
                                    variant="body47"
                                  ></Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gradient30  h-[756px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                </div>
                <div className="flex flex-col gap-[7px] items-start justify-center max-w-[1260px] mx-[auto] p-[30px] md:px-[20px] w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[34px] w-[100%]">
                    <div className="h-[48px] relative w-[48px]">
                      <div className="bg-blue_54 h-[30px] m-[auto] rounded-[50%] w-[30px]"></div>
                      <Img
                        src="images/img_collectivenavba_32x32.png"
                        className="absolute h-[48px] inset-[0] justify-center m-[auto] object-cover w-[48px]"
                        alt="collectivenavba_Four"
                      />
                    </div>
                    <div className="flex md:flex-1 flex-row gap-[6px] items-center justify-center md:ml-[0] ml-[8px] py-[16px] md:w-[100%] w-[11%]">
                      <Text
                        className="font-normal not-italic text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                        variant="body21"
                      >
                        Budget
                      </Text>
                      <Img
                        src="images/img_info.svg"
                        className="h-[18px] w-[18px]"
                        alt="info_One"
                      />
                    </div>
                    <Line className="bg-gray_313 h-[1px] mb-[31px] md:ml-[0] ml-[16px] md:mt-[0] mt-[35px] w-[83%]" />
                  </div>
                  <Text
                    className="font-normal mb-[16px] not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                    variant="body43"
                  >
                    Transparent and open finances.
                  </Text>
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-start max-w-[1260px] mx-[auto] pb-[30px] md:px-[20px] px-[30px] w-[100%]">
                  <div className="flex flex-row gap-[8px] items-start justify-start p-[4px] self-stretch w-[auto]">
                    <Button className="bg-blue_54 border-[1px] border-light_blue_901 border-solid cursor-pointer font-normal min-w-[44px] not-italic pl-[14px] pr-[14.92px] py-[11px] rounded-[17px] text-[14px] text-center text-gray_931 tracking-[-0.40px] w-[auto]">
                      All
                    </Button>
                    <Button className="bg-gray_55 border-[1px] border-solid border-white_A700 cursor-pointer font-normal min-w-[90px] not-italic pl-[15px] pr-[14.41px] py-[11px] rounded-[17px] text-[14px] text-bluegray_958 text-center tracking-[-0.40px] w-[auto]">
                      Expenses
                    </Button>
                    <Button className="bg-gray_55 border-[1px] border-solid border-white_A700 cursor-pointer font-normal min-w-[110px] not-italic px-[14px] py-[11px] rounded-[17px] text-[14px] text-bluegray_958 text-center tracking-[-0.40px] w-[auto]">
                      Transactions
                    </Button>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mb-[2px] pb-[16px] w-[100%]">
                    <List
                      className="bg-white_A700 border-[1px] border-gray_313 border-solid md:flex-1 flex-col gap-[1px] grid rounded-[8px] md:w-[100%] w-[63%]"
                      orientation="vertical"
                    >
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start my-[0] w-[100%]">
                        <div className="flex flex-1 flex-col gap-[16px] items-center justify-start p-[16px] w-[100%]">
                          <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start md:w-[100%] w-[97%]">
                            <div className="flex flex-row gap-[16px] items-start justify-start pr-[208px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_40x40.png"
                                className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                                alt="div"
                              />
                              <div className="flex flex-col gap-[4px] items-start justify-start pb-[8px] self-stretch w-[auto]">
                                <Text
                                  className="font-medium text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                                  variant="body41"
                                >
                                  Financial contribution to NextUI (Backer 🖤)
                                </Text>
                                <div className="flex items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body47"
                                  ></Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[8px] items-end justify-start pt-[8px] self-stretch w-[auto]">
                              <div className="flex flex-row items-start justify-evenly w-[100%]">
                                <Text
                                  className="font-normal not-italic text-green_803 text-left tracking-[-0.40px] w-[auto]"
                                  variant="body41"
                                >
                                  +
                                </Text>
                                <Text
                                  className="font-bold text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                                  variant="body41"
                                >
                                  $1.00
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] uppercase w-[auto]"
                                  variant="body41"
                                >
                                  USD
                                </Text>
                              </div>
                              <Text
                                className="bg-green_51 font-bold justify-center pl-[6px] pr-[5.91px] py-[2px] rounded-[4px] self-stretch text-center text-teal_901 tracking-[0.72px] uppercase w-[auto]"
                                variant="body47"
                              >
                                Completed
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[25px] items-start justify-start pb-[4px] pr-[4px] md:w-[100%] w-[97%]">
                            <Text
                              className="bg-gray_313 font-semibold justify-center pl-[10px] pr-[5.72px] py-[3px] rounded-bl-[12px] rounded-br-[2px] rounded-tl-[12px] rounded-tr-[2px] self-stretch text-center text-gray_930 tracking-[0.60px] uppercase w-[auto]"
                              variant="body51"
                            >
                              Contribution #635608
                            </Text>
                            <div className="flex flex-row items-start justify-center mt-[4px] pt-[2px] w-[12%]">
                              <Text
                                className="font-medium text-blue_702 text-center tracking-[-0.40px] w-[auto]"
                                variant="body47"
                              >
                                View Details
                              </Text>
                              <Img
                                src="images/img_arrowdown_blue_702.svg"
                                className="h-[12px] w-[12px]"
                                alt="arrowdown"
                              />
                            </div>
                          </div>
                        </div>
                        <Line className="bg-gradient31  md:h-[2px] h-[92px] md:mt-[0] mt-[14px] md:w-[100%] w-[2px]" />
                      </div>
                      <div className="h-[133px] md:h-[316px] my-[0] relative w-[100%]">
                        <div className="absolute border-gray_202 border-solid border-t-[1px] h-[133px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                        <div className="absolute flex md:flex-col flex-row md:gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                          <div className="flex flex-1 flex-col gap-[16px] items-center justify-start p-[16px] w-[100%]">
                            <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start md:w-[100%] w-[97%]">
                              <div className="flex flex-row gap-[16px] items-start justify-start pr-[208px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_30.png"
                                  className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                                  alt="div"
                                />
                                <div className="flex flex-col gap-[4px] items-start justify-start pb-[8px] self-stretch w-[auto]">
                                  <Text
                                    className="font-medium text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body41"
                                  >
                                    Financial contribution to NextUI (Backer 🖤)
                                  </Text>
                                  <div className="flex items-start justify-start self-stretch w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                      variant="body47"
                                    ></Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[8px] items-end justify-start pt-[8px] self-stretch w-[auto]">
                                <div className="flex flex-row items-start justify-evenly w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-green_803 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body41"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="font-bold text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body41"
                                  >
                                    $1.00
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] uppercase w-[auto]"
                                    variant="body41"
                                  >
                                    USD
                                  </Text>
                                </div>
                                <Text
                                  className="bg-green_51 font-bold justify-center pl-[6px] pr-[5.91px] py-[2px] rounded-[4px] self-stretch text-center text-teal_901 tracking-[0.72px] uppercase w-[auto]"
                                  variant="body47"
                                >
                                  Completed
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[25px] items-start justify-start pb-[4px] pr-[4px] md:w-[100%] w-[97%]">
                              <Text
                                className="bg-gray_313 font-semibold justify-center pl-[10px] pr-[6.16px] py-[3px] rounded-bl-[12px] rounded-br-[2px] rounded-tl-[12px] rounded-tr-[2px] self-stretch text-center text-gray_930 tracking-[0.60px] uppercase w-[auto]"
                                variant="body51"
                              >
                                Contribution #633760
                              </Text>
                              <div className="flex flex-row items-start justify-center mt-[4px] pt-[2px] w-[12%]">
                                <Text
                                  className="font-medium text-blue_702 text-center tracking-[-0.40px] w-[auto]"
                                  variant="body47"
                                >
                                  View Details
                                </Text>
                                <Img
                                  src="images/img_arrowdown_blue_702.svg"
                                  className="h-[12px] w-[12px]"
                                  alt="arrowdown"
                                />
                              </div>
                            </div>
                          </div>
                          <Line className="bg-gradient31  md:h-[2px] h-[92px] md:mt-[0] mt-[14px] md:w-[100%] w-[2px]" />
                        </div>
                      </div>
                      <div className="h-[133px] md:h-[316px] my-[0] relative w-[100%]">
                        <div className="absolute border-gray_202 border-solid border-t-[1px] h-[133px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                        <div className="absolute flex md:flex-col flex-row md:gap-[20px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                          <div className="flex flex-1 flex-col gap-[16px] items-center justify-start p-[16px] w-[100%]">
                            <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start md:w-[100%] w-[97%]">
                              <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[77.72px] self-stretch sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_div_31.png"
                                  className="h-[40px] md:h-[auto] object-cover rounded-[10px] w-[40px]"
                                  alt="div"
                                />
                                <div className="flex flex-col gap-[4px] items-start justify-start pb-[8px] self-stretch sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-medium text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body41"
                                  >
                                    Monthly financial contribution to NextUI
                                    (bronze sponsor 🥉)
                                  </Text>
                                  <div className="flex items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] w-[auto]"
                                      variant="body47"
                                    ></Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[8px] items-end justify-start pt-[8px] self-stretch w-[auto]">
                                <div className="flex flex-row items-start justify-between w-[100%]">
                                  <Text
                                    className="font-normal not-italic text-green_803 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body41"
                                  >
                                    +
                                  </Text>
                                  <Text
                                    className="font-bold text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                                    variant="body41"
                                  >
                                    $10.00
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-bluegray_700 text-left tracking-[-0.40px] uppercase w-[auto]"
                                    variant="body41"
                                  >
                                    USD
                                  </Text>
                                </div>
                                <Text
                                  className="bg-green_51 font-bold justify-center pl-[6px] pr-[5.91px] py-[2px] rounded-[4px] self-stretch text-center text-teal_901 tracking-[0.72px] uppercase w-[auto]"
                                  variant="body47"
                                >
                                  Completed
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-row gap-[25px] items-start justify-start pb-[4px] pr-[4px] md:w-[100%] w-[97%]">
                              <Text
                                className="bg-gray_313 font-semibold justify-center pl-[10px] pr-[6.47px] py-[3px] rounded-bl-[12px] rounded-br-[2px] rounded-tl-[12px] rounded-tr-[2px] self-stretch text-center text-gray_930 tracking-[0.60px] uppercase w-[auto]"
                                variant="body51"
                              >
                                Contribution #605263
                              </Text>
                              <div className="flex flex-row items-start justify-center mt-[4px] pt-[2px] w-[12%]">
                                <Text
                                  className="font-medium text-blue_702 text-center tracking-[-0.40px] w-[auto]"
                                  variant="body47"
                                >
                                  View Details
                                </Text>
                                <Img
                                  src="images/img_arrowdown_blue_702.svg"
                                  className="h-[12px] w-[12px]"
                                  alt="arrowdown"
                                />
                              </div>
                            </div>
                          </div>
                          <Line className="bg-gradient31  md:h-[2px] h-[92px] md:mt-[0] mt-[14px] md:w-[100%] w-[2px]" />
                        </div>
                      </div>
                    </List>
                    <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex md:flex-1 flex-col items-center justify-start mb-[73px] rounded-[8px] md:w-[100%] w-[32%]">
                      <List
                        className="flex-col gap-[1px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="bg-gray_56 flex sm:flex-1 flex-col gap-[7px] items-start justify-start my-[0] sm:px-[20px] px-[32px] py-[16px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="flex flex-row gap-[7.55px] items-start justify-start pl-[1.45px] pr-[181.19px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                            <Text
                              className="font-medium text-bluegray_700 text-center uppercase w-[auto]"
                              variant="body49"
                            >
                              $
                            </Text>
                            <div className="h-[17px] relative w-[88%]">
                              <div className="absolute border-b-[2px] border-bluegray_700 border-solid h-[17px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                              <Text
                                className="absolute font-medium inset-x-[0] mx-[auto] text-bluegray_700 text-left top-[0] uppercase w-[max-content]"
                                variant="body47"
                              >
                                Today’s balance
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="font-bold text-gray_930 text-left w-[auto]"
                              variant="body41"
                            ></Text>
                          </div>
                        </div>
                        <div className="border-gray_313 border-solid border-t-[1px] flex sm:flex-1 flex-col gap-[8px] items-start justify-start my-[0] sm:px-[20px] px-[32px] py-[16px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="flex flex-row gap-[5px] items-end justify-start pr-[207.59px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                            <Img
                              src="images/img_checkmark_bluegray_700.svg"
                              className="h-[12px] w-[12px]"
                              alt="checkmark"
                            />
                            <div className="h-[17px] relative w-[83%]">
                              <div className="absolute border-b-[2px] border-bluegray_700 border-solid h-[17px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                              <Text
                                className="absolute font-medium inset-x-[0] mx-[auto] text-bluegray_700 text-left top-[0] uppercase w-[max-content]"
                                variant="body47"
                              >
                                Total raised
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="font-bold text-gray_930 text-left w-[auto]"
                              variant="body41"
                            ></Text>
                          </div>
                        </div>
                      </List>
                      <div className="border-gray_313 border-solid border-t-[1px] flex flex-col gap-[8px] items-start justify-start sm:px-[20px] px-[32px] py-[16px] self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[5px] items-end justify-start pr-[182px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Img
                            src="images/img_maximize_bluegray_700.svg"
                            className="h-[12px] w-[12px]"
                            alt="maximize"
                          />
                          <Text
                            className="font-medium text-bluegray_700 text-left uppercase w-[auto]"
                            variant="body47"
                          >
                            Total disbursed
                          </Text>
                        </div>
                        <div className="flex items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-bold text-gray_930 text-left w-[auto]"
                            variant="body41"
                          ></Text>
                        </div>
                      </div>
                      <div className="border-gray_313 border-solid border-t-[1px] flex flex-col gap-[8px] items-start justify-start sm:px-[20px] px-[32px] py-[16px] self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[5px] items-end justify-start pr-[118.06px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Img
                            src="images/img_calendar_bluegray_700.svg"
                            className="h-[12px] w-[12px]"
                            alt="calendar"
                          />
                          <div className="h-[17px] relative w-[92%]">
                            <div className="absolute border-b-[2px] border-bluegray_700 border-solid h-[17px] inset-[0] justify-center m-[auto] w-[100%]"></div>
                            <Text
                              className="absolute font-medium inset-x-[0] mx-[auto] text-bluegray_700 text-left top-[0] uppercase w-[max-content]"
                              variant="body47"
                            >
                              Estimated annual budget
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-bold text-gray_930 text-left w-[auto]"
                            variant="body41"
                          ></Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center max-w-[1200px] mt-[64px] mx-[auto] md:px-[20px] py-[10px] w-[100%]">
                  <div className="h-[48px] relative w-[48px]">
                    <div className="bg-blue_54 h-[30px] m-[auto] rounded-[50%] w-[30px]"></div>
                    <Img
                      src="images/img_collectivenavba_1.png"
                      className="absolute h-[48px] inset-[0] justify-center m-[auto] object-cover w-[48px]"
                      alt="collectivenavba_Five"
                    />
                  </div>
                  <Text
                    className="font-normal md:ml-[0] ml-[8px] not-italic text-gray_930 text-left tracking-[-0.40px] w-[auto]"
                    variant="body21"
                  >
                    About
                  </Text>
                  <Line className="bg-gray_313 h-[1px] mb-[21px] md:ml-[0] ml-[22px] md:mt-[0] mt-[25px] w-[86%]" />
                </div>
                <div className="flex flex-col items-center justify-start mt-[62px] md:px-[20px] md:w-[100%] w-[37%]">
                  <div className="flex items-center justify-start pr-[19px] py-[19px] w-[100%]">
                    <Text
                      className="font-bold leading-[24.00px] my-[8px] text-bluegray_954 text-left w-[100%]"
                      variant="body43"
                    ></Text>
                  </div>
                  <div className="flex items-center justify-start pr-[3px] py-[3px] w-[100%]">
                    <Text
                      className="font-normal leading-[24.00px] mb-[26px] not-italic text-bluegray_954 text-left sm:w-[100%] w-[98%]"
                      variant="body43"
                    ></Text>
                  </div>
                  <div className="flex items-start justify-start pr-[3px] py-[3px] w-[100%]">
                    <Text
                      className="font-normal mb-[26px] not-italic text-bluegray_954 text-left w-[auto]"
                      variant="body43"
                    >
                      Maintaining and developing new features takes a
                      considerable amount of time.
                    </Text>
                  </div>
                  <div className="flex items-center justify-start py-[3px] w-[100%]">
                    <Text
                      className="font-normal leading-[24.00px] mb-[26px] not-italic text-bluegray_954 text-left w-[100%]"
                      variant="body43"
                    >
                      While your financial contributions will help the effort on
                      the project, sponsors will be promoted in our docs and
                      Github repo.
                    </Text>
                  </div>
                  <div className="flex items-center justify-start pr-[3px] py-[3px] w-[100%]">
                    <Text
                      className="font-normal leading-[24.00px] mb-[26px] not-italic text-bluegray_954 text-left"
                      variant="body43"
                    ></Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[96px] pt-[2px] md:px-[20px] px-[2px] md:w-[100%] w-[37%]">
                  <Text
                    className="font-medium text-bluegray_700 text-center tracking-[-0.40px] w-[auto]"
                    variant="body33"
                  >
                    Our team
                  </Text>
                  <div className="bg-white_A700 border-[1px] border-gray_313 border-solid flex flex-col items-center justify-end mt-[50px] rounded-[8px] md:w-[100%] w-[21%]">
                    <div className="border-gray_202 border-solid border-t-[1px] flex items-center justify-start mt-[44px] sm:px-[20px] px-[39px] md:w-[100%] w-[99%]">
                      <Img
                        src="images/img_div_33x64.png"
                        className="h-[33px] md:h-[auto] object-cover rounded-[32px] w-[100%]"
                        alt="div_Fourteen"
                      />
                    </div>
                    <div className="flex flex-col gap-[9px] items-center justify-start p-[8px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_930 tracking-[-0.40px] w-[auto]"
                        variant="body43"
                      >
                        Junior Garcia
                      </Text>
                      <Text
                        className="bg-gray_111 font-normal justify-center mb-[12px] not-italic pl-[5px] pr-[5.47px] py-[5px] rounded-[4px] self-stretch text-bluegray_700 text-center tracking-[0.72px] w-[auto]"
                        variant="body47"
                      >
                        Admin
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="bg-white_A700 border-[1px] border-blue_A401 border-solid cursor-pointer flex items-center justify-center min-w-[190px] mt-[48px] px-[24px] py-[15px] rounded-[24px] w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_mail_blue_702.svg"
                        className="mt-[2px] mr-[8px]"
                        alt="mail"
                      />
                    }
                  >
                    <div className="font-medium sm:px-[20px] text-[14px] text-blue_702 text-center tracking-[-0.40px]">
                      Contact Collective
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 border-gray_209 border-solid border-t-[1px] flex items-center justify-end p-[10px] w-[100%]">
            <div className="flex items-center justify-start max-w-[1280px] mx-[auto] md:px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between px-[16px] w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[32px] items-center justify-end pt-[16px] md:w-[100%] w-[19%]">
                  <div className="flex flex-col gap-[13px] items-start justify-end pr-[2px] py-[2px] w-[100%]">
                    <div className="flex items-start justify-start mt-[10px] self-stretch w-[auto]">
                      <Img
                        src="images/img_image.png"
                        className="h-[28px] md:h-[auto] object-cover w-[167px]"
                        alt="image_Eight"
                      />
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_958 text-left tracking-[-0.04px] w-[auto]"
                      variant="body47"
                    >
                      Make your community sustainable.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-between w-[100%]">
                    <Button className="border-[1px] border-gray_313 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                      <Img
                        src="images/img_twitter_gray_610.svg"
                        className=""
                        alt="twitter"
                      />
                    </Button>
                    <Button className="border-[1px] border-gray_313 border-solid flex h-[36px] items-center justify-center p-[11px] rounded-[50%] w-[36px]">
                      <Img
                        src="images/img_clock_gray_610.svg"
                        className=""
                        alt="clock"
                      />
                    </Button>
                    <Button className="border-[1px] border-gray_313 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                      <Img
                        src="images/img_lightbulb.svg"
                        className="h-[15px]"
                        alt="lightbulb"
                      />
                    </Button>
                    <Button className="border-[1px] border-gray_313 border-solid flex h-[36px] items-center justify-center p-[11px] rounded-[50%] w-[36px]">
                      <Img
                        src="images/img_vector_gray_610.svg"
                        className="h-[14px]"
                        alt="vector"
                      />
                    </Button>
                    <Button className="border-[1px] border-gray_313 border-solid flex h-[36px] items-center justify-center p-[10px] rounded-[50%] w-[36px]">
                      <Img
                        src="images/img_mail_gray_610.svg"
                        className=""
                        alt="mail_One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start pb-[8px] self-stretch w-[auto]">
                    <div className="flex flex-row items-center justify-start pr-[8px] py-[8px] w-[100%]">
                      <Img
                        src="images/img_frame_bluegray_700.svg"
                        className="h-[20px] w-[20px]"
                        alt="frame"
                      />
                      <Text
                        className="font-semibold ml-[8px] text-bluegray_958 text-left tracking-[0.80px] uppercase w-[auto]"
                        variant="body51"
                      >
                        change language
                      </Text>
                      <Img
                        src="images/img_info_gray_612.svg"
                        className="h-[16px] ml-[8px] w-[16px]"
                        alt="info_Two"
                      />
                    </div>
                    <SelectBox
                      className="bg-white_A700 border-[1px] border-gray_313 border-solid font-normal leading-[normal] not-italic px-[10px] py-[9px] rounded-[4px] text-[12px] text-bluegray_954 text-left tracking-[-0.40px] w-[100%]"
                      placeholderClassName="text-bluegray_954"
                      name="language"
                      placeholder="English - English (100%)"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_102.svg"
                          className="h-[20px] mr-[0] w-[20px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-center pb-[16px] md:w-[100%] w-[65%]">
                  <List
                    className="sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[16px] items-start justify-start sm:ml-[0] pb-[63px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_958 text-left tracking-[0.80px] uppercase w-[auto]"
                        variant="body43"
                      >
                        Platform
                      </Text>
                      <div className="flex flex-col gap-[8px] items-start justify-start pb-[8px] pr-[8px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                          variant="body43"
                        >
                          Explainer video
                        </Text>
                        <Text
                          className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                          variant="body43"
                        >
                          How it works
                        </Text>
                        <Text
                          className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                          variant="body43"
                        >
                          Use cases
                        </Text>
                        <Text
                          className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                          variant="body43"
                        >
                          Sign up
                        </Text>
                        <Text
                          className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                          variant="body43"
                        >
                          Log in
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start sm:ml-[0] pb-[38px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_958 text-left tracking-[0.80px] uppercase w-[auto]"
                        variant="body43"
                      >
                        Join
                      </Text>
                      <div className="flex flex-col gap-[8px] items-start justify-start pb-[8px] pr-[8px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                          variant="body43"
                        >
                          Create a Collective
                        </Text>
                        <Text
                          className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                          variant="body43"
                        >
                          About Fiscal Hosting
                        </Text>
                        <Text
                          className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                          variant="body43"
                        >
                          Discover
                        </Text>
                        <Text
                          className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                          variant="body43"
                        >
                          Find a Fiscal Host
                        </Text>
                        <Text
                          className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                          variant="body43"
                        >
                          Become a sponsor
                        </Text>
                        <Text
                          className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                          variant="body43"
                        >
                          Become a Host
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col gap-[16px] items-start justify-start pb-[113px] md:w-[100%] w-[25%]">
                    <Text
                      className="font-medium text-bluegray_958 text-left tracking-[0.80px] uppercase w-[auto]"
                      variant="body43"
                    >
                      Community
                    </Text>
                    <div className="flex flex-col gap-[8px] items-start justify-start pb-[8px] pr-[8px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                        variant="body43"
                      >
                        Open Source
                      </Text>
                      <Text
                        className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                        variant="body43"
                      >
                        Slack
                      </Text>
                      <Text
                        className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                        variant="body43"
                      >
                        Docs & Help
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start pb-[13px] md:w-[100%] w-[25%]">
                    <Text
                      className="font-medium text-bluegray_958 text-left tracking-[0.80px] uppercase w-[auto]"
                      variant="body43"
                    >
                      Company
                    </Text>
                    <div className="flex flex-col gap-[8px] items-start justify-start pb-[8px] pr-[8px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                        variant="body43"
                      >
                        About
                      </Text>
                      <Text
                        className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                        variant="body43"
                      >
                        Blog
                      </Text>
                      <Text
                        className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                        variant="body43"
                      >
                        Hiring
                      </Text>
                      <Text
                        className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                        variant="body43"
                      >
                        Exit to Community #E2C
                      </Text>
                      <Text
                        className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                        variant="body43"
                      >
                        Terms of service
                      </Text>
                      <Text
                        className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                        variant="body43"
                      >
                        Privacy Policy
                      </Text>
                      <Text
                        className="font-medium text-bluegray_700 text-left tracking-[-0.10px] w-[auto]"
                        variant="body43"
                      >
                        Security Policy
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnClickPage;
