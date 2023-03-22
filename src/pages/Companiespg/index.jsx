import React from "react";

import { Img, Text, Button, List, Line, Input } from "components";

const CompaniespgPage = () => {
  return (
    <>
      <div className="bg-gray_109 flex font-roboto items-center justify-start mx-[auto] px-[13px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[1894px] mx-[auto] md:px-[20px] px-[397px] w-[100%]">
          <div className="border-b-[1px] border-gray_307 border-solid flex md:flex-col flex-row md:gap-[20px] items-center justify-center py-[26px] w-[100%]">
            <div className="flex md:flex-1 md:flex-col flex-row gap-[26px] items-start justify-between pb-[3px] md:w-[100%] w-[78%]">
              <Img
                src="images/img_ycombinatorlog.png"
                className="h-[60px] md:h-[auto] object-cover w-[60px]"
                alt="ycombinatorlog"
              />
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center sm:justify-between justify-start pr-[19px] py-[19px] md:w-[100%] w-[auto]">
                <Text
                  className="font-thin text-gray_912 text-left w-[auto]"
                  variant="body41"
                >
                  Accelerator
                </Text>
                <Text
                  className="font-thin md:ml-[0] ml-[18px] text-gray_912 text-left w-[auto]"
                  variant="body41"
                >
                  Companies
                </Text>
                <Text
                  className="font-thin md:ml-[0] ml-[16px] text-gray_912 text-left w-[auto]"
                  variant="body41"
                >
                  Startup Jobs
                </Text>
                <Text
                  className="font-thin sm:hidden md:ml-[0] ml-[15px] text-gray_912 text-left w-[auto]"
                  variant="body41"
                >
                  Startup School
                </Text>
                <Text
                  className="font-thin sm:hidden md:ml-[0] ml-[17px] text-gray_912 text-left w-[auto]"
                  variant="body41"
                >
                  Library
                </Text>
                <Text
                  className="font-thin md:ml-[0] ml-[15px] text-gray_912 text-left w-[auto]"
                  variant="body41"
                >
                  SAFE
                </Text>
                <Text
                  className="font-thin md:ml-[0] ml-[16px] text-gray_912 text-left w-[auto]"
                  variant="body42"
                >
                  Resources
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-row gap-[13px] items-center justify-between py-[10px] md:w-[100%] w-[23%]">
              <div className="flex items-start justify-start pl-[6px] pr-[0.06px] self-stretch w-[auto]">
                <Text
                  className="font-thin text-black_900 text-right w-[auto]"
                  variant="body41"
                ></Text>
              </div>
              <Button className="bg-orange_A200 cursor-pointer font-bold min-w-[69px] pb-[5.8px] pl-[13px] pr-[10.7px] pt-[4px] rounded-[6px] text-[18px] text-center text-white_A700 w-[auto]">
                Apply
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="border-b-[1px] border-gray_307 border-solid flex items-center justify-start py-[36px] w-[100%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <Text
                  className="text-black_900 text-left w-[auto]"
                  variant="body17"
                >
                  Startup Directory
                </Text>
                <Text
                  className="font-thin mt-[32px] text-black_900 text-left w-[auto]"
                  variant="body41"
                >
                  Since 2005, we have invested in over 4,000 companies that have
                  a combined valuation of over $600B.
                </Text>
                <div className="flex items-start justify-end mt-[24px] pr-[3px] py-[3px] w-[100%]">
                  <Text
                    className="font-thin text-black_900 text-left w-[auto]"
                    variant="body41"
                  ></Text>
                </div>
                <div className="flex items-center justify-start mt-[20px] pr-[4px] py-[4px] w-[100%]">
                  <Text
                    className="font-thin leading-[28.00px] text-black_900 text-left sm:w-[100%] w-[99%]"
                    variant="body41"
                  ></Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[20px] px-[12px] w-[100%]">
                  <div className="flex flex-row gap-[4.31px] items-center justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-blue_602 text-left w-[auto]"
                      variant="body41"
                    >
                      YC Top companies
                    </Text>
                    <Img
                      src="images/img_search_blue_602.svg"
                      className="h-[20px] w-[20px]"
                      alt="search"
                    />
                  </div>
                  <div className="flex flex-row gap-[14.48px] items-center justify-start md:ml-[0] ml-[16px] self-stretch w-[auto]">
                    <Text
                      className="font-medium text-blue_602 text-left w-[auto]"
                      variant="body42"
                    >
                      Black-founded companies
                    </Text>
                    <Img
                      src="images/img_search_blue_602.svg"
                      className="h-[20px] w-[20px]"
                      alt="search_One"
                    />
                  </div>
                  <div className="flex flex-row gap-[5.81px] items-center justify-start md:ml-[0] ml-[16px] self-stretch w-[auto]">
                    <Text
                      className="font-medium text-blue_602 text-left w-[auto]"
                      variant="body41"
                    >
                      Hispanic & Latino-founded companies
                    </Text>
                    <Img
                      src="images/img_search_blue_602.svg"
                      className="h-[20px] w-[20px]"
                      alt="search_Two"
                    />
                  </div>
                  <div className="flex flex-row gap-[5.81px] items-center justify-start md:ml-[0] ml-[16px] self-stretch w-[auto]">
                    <Text
                      className="font-medium text-blue_602 text-left w-[auto]"
                      variant="body41"
                    >
                      Women-founded companies
                    </Text>
                    <Img
                      src="images/img_search_blue_602.svg"
                      className="h-[20px] w-[20px]"
                      alt="search_Three"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-[1px] border-gray_307 border-solid flex font-inter items-center justify-end py-[35px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[25px] items-start justify-between w-[100%]">
                <div className="bg-gray_53 border-[1px] border-gray_402 border-solid flex md:flex-1 flex-col items-center justify-start mb-[11601px] p-[21px] sm:px-[20px] rounded-[8px] md:w-[100%] w-[28%]">
                  <div className="flex flex-row items-start justify-start w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                    <Text
                      className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                      variant="body49"
                    >
                      💎 Top Companies
                    </Text>
                    <Text
                      className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[12px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                      as="h2"
                      variant="h2"
                    >
                      342
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                    <Text
                      className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                      variant="body47"
                    >
                      Is Hiring
                    </Text>
                    <Text
                      className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[8px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[33px]"
                      variant="body50"
                    >
                      1024
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                    <Text
                      className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                      variant="body47"
                    >
                      Nonprofit
                    </Text>
                    <Text
                      className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[8px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                      as="h2"
                      variant="h2"
                    >
                      43
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[41px] w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                    <Text
                      className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                      variant="body47"
                    >
                      Black-founded
                    </Text>
                    <Text
                      className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                      as="h2"
                      variant="h2"
                    >
                      236
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                    <Text
                      className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                      variant="body47"
                    >
                      Hispanic & Latino-founded
                    </Text>
                    <Text
                      className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[12px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                      as="h2"
                      variant="h2"
                    >
                      405
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                    <Text
                      className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                      variant="body47"
                    >
                      Women-founded
                    </Text>
                    <Text
                      className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[11px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                      as="h2"
                      variant="h2"
                    >
                      609
                    </Text>
                  </div>
                  <List
                    className="flex-col gap-[30.5px] grid items-center mt-[41px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 items-center justify-start w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                          <Text
                            className="font-medium text-bluegray_954 text-left tracking-[0.16px] w-[auto]"
                            variant="body44"
                          >
                            Batch
                          </Text>
                          <Img
                            src="images/img_menu_bluegray_105.svg"
                            className="h-[18px] w-[auto]"
                            alt="menu"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[9px] w-[100%]">
                          <div className="bg-blue_A702 border-[1px] border-gray_308 border-solid flex items-center justify-start p-[5px] rounded-[4px] w-[9%]">
                            <Img
                              src="images/img_checkmark_white_a700.svg"
                              className="h-[8px] w-[auto]"
                              alt="checkmark"
                            />
                          </div>
                          <Text
                            className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            All batches
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[8px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[33px]"
                            variant="body50"
                          >
                            4179
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Text
                            className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            W23
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[4px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            as="h2"
                            variant="h2"
                          >
                            264
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Text
                            className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body49"
                          >
                            S22
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[5px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            as="h2"
                            variant="h2"
                          >
                            232
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Text
                            className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            W22
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[4px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            as="h2"
                            variant="h2"
                          >
                            398
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Text
                            className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            S21
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[6px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            variant="body50"
                          >
                            391
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Text
                            className="font-thin ml-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body44"
                          >
                            W21
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[6px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            as="h2"
                            variant="h2"
                          >
                            334
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Text
                            className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body49"
                          >
                            S20
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[5px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            as="h2"
                            variant="h2"
                          >
                            207
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Text
                            className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            W20
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[4px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            as="h2"
                            variant="h2"
                          >
                            227
                          </Text>
                        </div>
                        <a
                          className="font-thin mt-[5px] text-[12px] text-blue_602 text-left tracking-[0.16px] underline w-[auto]"
                          href="javascript:"
                        >
                          See all options
                        </a>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-gray_503 w-[100%]" />
                    <div className="flex flex-1 items-center justify-start pt-[2px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                          <Text
                            className="font-medium text-bluegray_954 text-left tracking-[0.16px] w-[auto]"
                            variant="body44"
                          >
                            Industry
                          </Text>
                          <Img
                            src="images/img_menu_bluegray_105.svg"
                            className="h-[18px] w-[auto]"
                            alt="menu"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[9px] w-[100%]">
                          <div className="bg-blue_A702 border-[1px] border-gray_308 border-solid flex items-center justify-start p-[5px] rounded-[4px] w-[9%]">
                            <Img
                              src="images/img_checkmark_white_a700.svg"
                              className="h-[8px] w-[auto]"
                              alt="checkmark"
                            />
                          </div>
                          <Text
                            className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            All industries
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[33px]"
                            variant="body50"
                          >
                            4179
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-start ml-[3px] mt-[2px] w-[66%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              B2B Software and Services
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[6px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[33px]"
                            variant="body48"
                          >
                            1821
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Text
                            className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            Education
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[8px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            variant="body50"
                          >
                            184
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[29%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame_One"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Consumer
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            variant="body50"
                          >
                            762
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[52%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame_Two"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Financial Technology
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            variant="body48"
                          >
                            517
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[30%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame_Three"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Healthcare
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            as="h2"
                            variant="h2"
                          >
                            500
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-start ml-[3px] mt-[2px] w-[70%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame_Four"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Real Estate and Construction
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[11px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            variant="body50"
                          >
                            127
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[29%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame_Five"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Industrials
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            as="h2"
                            variant="h2"
                          >
                            224
                          </Text>
                        </div>
                        <a
                          className="font-thin mt-[5px] text-[12px] text-blue_602 text-left tracking-[0.16px] underline w-[auto]"
                          href="javascript:"
                        >
                          See all options
                        </a>
                      </div>
                    </div>
                  </List>
                  <div className="flex items-center justify-start mt-[41px] pt-[2px] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                        <Text
                          className="font-medium text-bluegray_954 text-left tracking-[0.16px] w-[auto]"
                          variant="body44"
                        >
                          Region
                        </Text>
                        <Img
                          src="images/img_menu_bluegray_105.svg"
                          className="h-[18px] w-[auto]"
                          alt="menu"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[9px] w-[100%]">
                        <div className="bg-blue_A702 border-[1px] border-gray_308 border-solid flex items-center justify-start p-[5px] rounded-[4px] w-[9%]">
                          <Img
                            src="images/img_checkmark_white_a700.svg"
                            className="h-[8px] w-[auto]"
                            alt="checkmark"
                          />
                        </div>
                        <Text
                          className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Anywhere
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[33px]"
                          variant="body50"
                        >
                          4179
                        </Text>
                      </div>
                      <List
                        className="flex-col gap-[5px] grid items-center mt-[5px] w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Img
                            src="images/img_frame_gray_403.svg"
                            className="h-[13px] ml-[3px] mt-[2px] w-[auto]"
                            alt="frame"
                          />
                          <Text
                            className="font-thin ml-[5px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            America / Canada
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[11px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[33px]"
                            as="h2"
                            variant="h2"
                          >
                            3045
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Img
                            src="images/img_frame_gray_403.svg"
                            className="h-[13px] ml-[3px] mt-[2px] w-[auto]"
                            alt="frame"
                          />
                          <Text
                            className="font-thin ml-[5px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            Remote
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[33px]"
                            as="h2"
                            variant="h2"
                          >
                            2634
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Img
                            src="images/img_frame_gray_403.svg"
                            className="h-[13px] ml-[3px] mt-[2px] w-[auto]"
                            alt="frame"
                          />
                          <Text
                            className="font-thin ml-[5px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body44"
                          >
                            Europe
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[4px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            variant="body50"
                          >
                            374
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Img
                            src="images/img_frame_gray_403.svg"
                            className="h-[13px] ml-[3px] mt-[2px] w-[auto]"
                            alt="frame"
                          />
                          <Text
                            className="font-thin ml-[5px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            South Asia
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            as="h2"
                            variant="h2"
                          >
                            244
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Img
                            src="images/img_frame_gray_403.svg"
                            className="h-[13px] ml-[3px] mt-[2px] w-[auto]"
                            alt="frame"
                          />
                          <Text
                            className="font-thin ml-[5px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            Latin America
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            as="h2"
                            variant="h2"
                          >
                            226
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Img
                            src="images/img_frame_gray_403.svg"
                            className="h-[13px] ml-[3px] mt-[2px] w-[auto]"
                            alt="frame"
                          />
                          <Text
                            className="font-thin ml-[5px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            Southeast Asia
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] pl-[5px] pr-[9px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                            variant="body48"
                          >
                            111
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Img
                            src="images/img_frame_gray_403.svg"
                            className="h-[13px] ml-[3px] mt-[2px] w-[auto]"
                            alt="frame"
                          />
                          <Text
                            className="font-thin ml-[5px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            Middle East and North Africa
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[13px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            variant="body50"
                          >
                            87
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Img
                            src="images/img_frame_gray_403.svg"
                            className="h-[13px] ml-[3px] mt-[2px] w-[auto]"
                            alt="frame"
                          />
                          <Text
                            className="font-thin ml-[5px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            Africa
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[6px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            as="h2"
                            variant="h2"
                          >
                            86
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Img
                            src="images/img_frame_gray_403.svg"
                            className="h-[13px] ml-[3px] mt-[2px] w-[auto]"
                            alt="frame"
                          />
                          <Text
                            className="font-thin ml-[5px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            East Asia
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            as="h2"
                            variant="h2"
                          >
                            32
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <Img
                            src="images/img_frame_gray_403.svg"
                            className="h-[13px] ml-[3px] mt-[2px] w-[auto]"
                            alt="frame"
                          />
                          <Text
                            className="font-thin ml-[5px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            Oceania
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[8px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            variant="body48"
                          >
                            19
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="flex items-center justify-start mt-[41px] pt-[3px] w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                        <Text
                          className="font-medium text-bluegray_954 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Tags
                        </Text>
                        <Img
                          src="images/img_menu_bluegray_105.svg"
                          className="h-[18px] w-[auto]"
                          alt="menu_One"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[9px] w-[100%]">
                        <div className="bg-blue_A702 border-[1px] border-gray_308 border-solid flex items-center justify-start p-[5px] rounded-[4px] w-[9%]">
                          <Img
                            src="images/img_checkmark_white_a700.svg"
                            className="h-[8px] w-[auto]"
                            alt="checkmark_One"
                          />
                        </div>
                        <Text
                          className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          All tags
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[33px]"
                          variant="body50"
                        >
                          4179
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Crypto / Web3
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                          variant="body48"
                        >
                          110
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          SaaS
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[4px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                          as="h2"
                          variant="h2"
                        >
                          933
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          B2B
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[4px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                          variant="body50"
                        >
                          745
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Fintech
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[6px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                          as="h2"
                          variant="h2"
                        >
                          638
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Developer Tools
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[10px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                          as="h2"
                          variant="h2"
                        >
                          366
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Marketplace
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[8px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                          variant="body50"
                        >
                          321
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Artificial Intelligence
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[11px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                          as="h2"
                          variant="h2"
                        >
                          280
                        </Text>
                      </div>
                      <a
                        className="font-thin mt-[5px] text-[12px] text-blue_602 text-left tracking-[0.16px] underline w-[auto]"
                        href="javascript:"
                      >
                        See all options
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-start mt-[41px] pt-[2px] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                        <Text
                          className="font-medium text-bluegray_954 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Status
                        </Text>
                        <Img
                          src="images/img_menu_bluegray_105.svg"
                          className="h-[18px] w-[auto]"
                          alt="menu_Two"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[9px] w-[100%]">
                        <div className="bg-blue_A702 border-[1px] border-gray_308 border-solid flex items-center justify-start p-[5px] rounded-[4px] w-[9%]">
                          <Img
                            src="images/img_checkmark_white_a700.svg"
                            className="h-[8px] w-[auto]"
                            alt="checkmark_Two"
                          />
                        </div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          All states
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[33px]"
                          variant="body50"
                        >
                          4179
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Active
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[6px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[33px]"
                          variant="body50"
                        >
                          3041
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Public
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[6px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                          variant="body48"
                        >
                          16
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Acquired
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                          variant="body50"
                        >
                          476
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Inactive
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[6px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                          as="h2"
                          variant="h2"
                        >
                          646
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[41px] pr-[2px] py-[2px] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_954 text-left tracking-[0.16px] w-[auto]"
                      variant="body44"
                    >
                      Company Size
                    </Text>
                    <Text
                      className="font-thin mt-[11px] text-black_900 text-left tracking-[0.16px] w-[auto]"
                      variant="body47"
                    >
                      1 - 1,000+
                    </Text>
                    <div className="bg-gray_54 border-[1px] border-bluegray_106 border-solid flex items-center justify-start mb-[10px] md:ml-[0] ml-[14px] mt-[7px] rounded-[2px] shadow-bs23 md:w-[100%] w-[90%]">
                      <Img
                        src="images/img_div_teal_300.svg"
                        className="h-[2px] w-[auto]"
                        alt="div"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[41px] w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                    <Text
                      className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                      variant="body47"
                    >
                      Public Application Video
                    </Text>
                    <Text
                      className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[14px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                      as="h2"
                      variant="h2"
                    >
                      44
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                    <Text
                      className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                      variant="body47"
                    >
                      Public Demo Day Video
                    </Text>
                    <Text
                      className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[12px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                      variant="body48"
                    >
                      110
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                    <Text
                      className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                      variant="body47"
                    >
                      Has Application Answers
                    </Text>
                    <Text
                      className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[11px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                      variant="body50"
                    >
                      78
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start my-[5px] w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                    <Text
                      className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                      variant="body47"
                    >
                      Has Bonus Questions
                    </Text>
                    <Text
                      className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                      variant="body48"
                    >
                      41
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[71%]">
                  <div className="bg-gray_53 border-[1px] border-gray_402 border-solid flex items-start justify-start p-[21px] sm:px-[20px] rounded-[8px] self-stretch md:w-[100%] w-[auto]">
                    <Input
                      wrapClassName="bg-white_A700 border-[1px] border-bluegray_102 border-solid p-[11px] rounded-[4px] shadow-bs20 w-[100%]"
                      className="font-thin leading-[normal] p-[0] placeholder:text-gray_608 text-[15px] text-gray_608 text-left w-[100%]"
                      name="input_TwentyOne"
                      placeholder="Search..."
                    ></Input>
                  </div>
                  <Text
                    className="font-thin mt-[27px] text-gray_801 text-left w-[auto]"
                    variant="body44"
                  >
                    Showing 100 of 1,000+ companies
                  </Text>
                  <div className="bg-gray_53 border-[1px] border-gray_402 border-solid flex flex-col items-start justify-start mt-[6px] rounded-[8px] self-stretch md:w-[100%] w-[auto]">
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[361.7px] md:pr-[40px] py-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_3e9a0092bee2ccf.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="3e9a0092bee2ccf"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[75%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[155.3px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[5px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Book accommodations around the world.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[4px] sm:pr-[20px] md:pr-[40px] pr-[61.8px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[25%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              W09
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[60px] pl-[10px] pr-[8.89px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Travel
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[9.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Marketplace
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[385.02px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_d13287c52acc969.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="d13287c52acc969"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[74%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[110.98px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Restaurant delivery.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[21%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_One"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S13
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[97px] pl-[10px] pr-[10.25px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            E-commerce
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[9.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Marketplace
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[374.25px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_d583cc2bc592ccc.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="d583cc2bc592ccc"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[74%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[91.75px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Buy, sell, and manage cryptocurrencies.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[113.86px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[32%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Two"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S12
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[107px] pl-[10px] pr-[16.17px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Crypto / Web3
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[405.06px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_f09464ae6ddf165.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="f09464ae6ddf165"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start pb-[5px] w-[72%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[99.94px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Backup and share files in the cloud.
                        </Text>
                        <div className="bg-gray_311 flex flex-row items-center justify-start mt-[10px] rounded-[4px] md:w-[100%] w-[22%]">
                          <Img
                            src="images/img_television_deep_orange_a201.svg"
                            className="h-[15px] ml-[2px] w-[auto]"
                            alt="television_Three"
                          />
                          <Text
                            className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            S07
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[209.45px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_af0d32f65e9007b.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="af0d32f65e9007b"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[82%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[275.55px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          A complete DevOps platform delivered as a single
                          application.
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] md:pr-[40px] pr-[55.73px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-start justify-start rounded-[4px] sm:w-[100%] w-[15%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Four"
                            />
                            <Text
                              className="font-thin mt-[2px] text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W15
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[10.03px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Open Source
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[126px] pl-[10px] pr-[9.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Developer Tools
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[86px] pl-[10px] pr-[9.45px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            DevSecOps
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[244.66px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_d8427e9e647b115.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="d8427e9e647b115"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[81%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[195.34px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Our mission is to make biology easier to engineer.
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[14%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Five"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S14
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[137px] pl-[10px] pr-[19.06px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Synthetic Biology
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[97px] pl-[10px] pr-[12.3px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Automation
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[98px] pl-[10px] pr-[11.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Diagnostics
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[200.38px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_18fd6f870541d23.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="18fd6f870541dTwentyThree"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[83%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[290.63px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Real-time visibility into critical apps and services
                          all in one place.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[228.2px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[24%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Six"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S10
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[95px] pl-[10px] pr-[12.78px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Monitoring
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[64px] pl-[10px] pr-[10.92px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            DevOps
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[373.38px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_fa98c8a53255b3f.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="fa98c8a53255b3f"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[75%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[86.63px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Digital Analytics Platform
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[177.22px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[55%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Seven"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W12
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[179.77px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_b271a79c3b59d63.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="b271a79c3b59dSixtyThree"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[83%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[323.23px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Turn physical objects and environments into 3D models
                          in seconds.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[286.77px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[31%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Eight"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W12
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[124px] pl-[10px] pr-[17.88px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Computer Vision
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[298.34px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_5d33fe7ddb69049.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="5d33fe7ddb69049"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[79%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[255.66px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Customer communication and payments platform.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[244.23px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[51%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Nine"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W14
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[229.13px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_8b5a274b2f4aec4.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="8b5a274b2f4aecFour"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[82%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[269.88px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Digital meets physical for big chain restaurants
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[13%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Ten"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S10
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[126px] pl-[10px] pr-[17px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Restaurant Tech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[228px] pl-[10px] pr-[11.16px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Food Service Robots & Machines
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[381.2px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_d917bc9763d052f.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="d917bc9763d052f"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[74%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[10.8px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body42"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Quantum coherent supercomputing.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] md:pr-[40px] pr-[62.44px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[26%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Eleven"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S14
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_311 font-thin pl-[10px] pr-[9.64px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                            variant="body51"
                          >
                            Quantum Computing
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[303.09px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_7a90b132bd3ef57.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="7a90b132bd3efFiftySeven"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[79%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[93.91px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[5px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          We break viruses
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[4px] pr-[112.89px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[23%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Twelve"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              S20
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[103px] pl-[10px] pr-[15.13px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Therapeutics
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[70px] pl-[10px] pr-[11.17px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Biotech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[339.75px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_7f54038f84e639b.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="7f54038f84e639b"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[77%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[88.25px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Self-driving semi trucks.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] md:pr-[40px] pr-[86.7px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[25%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Thirteen"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[164px] pl-[10px] pr-[9.95px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Autonomous Trucking
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[153.11px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_a9e04d61888abfa.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="a9e04d61888abfa"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[346.89px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The space infrastructure services company
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[11%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Fourteen"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S18
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[137px] pl-[10px] pr-[10.67px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Space Exploration
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[100px] pl-[10px] pr-[9.67px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Solar Power
                          </Button>
                          <Input
                            wrapClassName="bg-gray_311 pl-[10px] pr-[22.83px] py-[4px] rounded-[4px] sm:w-[100%] w-[38%]"
                            className="font-thin p-[0] placeholder:text-black_900 sm:pr-[20px] text-[9px] text-black_900 text-left tracking-[1.00px] uppercase w-[100%]"
                            name="span_Twenty"
                            placeholder="Commercial Space Launch"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[350.27px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_c16f624e7c7aac9.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="c16f624e7c7aacNine"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[76%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[136.73px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Next generation infectious disease test kits
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[40.3px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-start justify-start rounded-[4px] w-[22%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Fifteen"
                            />
                            <Text
                              className="font-thin mt-[2px] text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W15
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[98px] pl-[10px] pr-[11.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Diagnostics
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[96px] pl-[10px] pr-[15.58px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Health Tech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[308.33px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_e5ccedd9995f652.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="e5ccedd9995f652"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[78%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[180.67px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[4px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Economic infrastructure for the internet.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[4px] pr-[6px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[16%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Sixteen"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              S09
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[151px] pl-[10px] pr-[10.25px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Banking as a Service
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[334.13px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_9750fca21baaee7.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="9750fca21baaeeSeven"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[77%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[134.88px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Marketplace for grocery delivery and pickup
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[17%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Seventeen"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S12
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[97px] pl-[10px] pr-[10.25px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            E-commerce
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[73px] pl-[10px] pr-[10.56px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Grocery
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[72px] pl-[10px] pr-[13.34px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Delivery
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[211px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_b9aae9ad065dcf8.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="b9aae9ad065dcfEight"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[82%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[275px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Self-driving cars.
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[14%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Eighteen"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W14
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[159px] pl-[10px] pr-[10.47px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Autonomous Delivery
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[134px] pl-[10px] pr-[11.56px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Machine Learning
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[10.38px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Climate
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[159.11px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_be12a7a3bea1060.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="be12a7a3bea1060"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[152.89px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          OpenSea is the world’s leading peer-to-peer
                          marketplace for NFTs
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[170.02px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[18%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Nineteen"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W18
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[42px] pl-[10px] pr-[10.09px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            NFT
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[107px] pl-[10px] pr-[16.17px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Crypto / Web3
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[9.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Marketplace
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[100.3px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_3ccfa8cd66f2a1d.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="3ccfa8cd66f2a1d"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[85%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[180.7px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The global online platform empowering independent
                          retail.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[326.72px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[26%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Twenty"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W17
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[9.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Marketplace
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[57px] pl-[10px] pr-[9.38px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Retail
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[156.31px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_72237ca3782563f.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="72237ca3782563f"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[343.69px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Business accounts, corporate cards, and spend
                          management software.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[366.22px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[44%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_TwentyOne"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W17
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[238.98px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_9152bb798308624.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="9152bb798308624"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[81%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[261.02px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The all-in-one HR platform for global teams.
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[14%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_TwentyTwo"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W19
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[13.69px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            HR Tech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[95px] pl-[10px] pr-[11.22px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Compliance
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[392.02px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_2758f61527dbe7c.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="2758f61527dbe7c"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[73%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[82.98px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Magically Simplify Your HR & IT
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[130.7px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[44%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_TwentyThree"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W17
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[13.69px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            HR Tech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[196.08px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_2f5bed7ab9abb66.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="2f5bed7ab9abbSixtySix"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[83%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[322.92px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The frontpage of the internet.
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[12%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_TwentyFour"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              S05
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[90px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Community
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[61px] pl-[10px] pr-[10.39px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Social
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[10.67px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Social Media
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[121px] pl-[10px] pr-[11.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Social Network
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[156.64px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_6ce7845c2e26852.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="6ce7845c2e26852"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[333.36px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Provides growing businesses with everything to take
                          care of their team
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[181.88px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[19%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_TwentyFive"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W12
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[13.13px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Payroll
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[131px] pl-[10px] pr-[17.95px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Health Insurance
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[345.73px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_897ef3a983ed364.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="897ef3a983ed364"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[76%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[128.27px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Platform for global logistics.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[19%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_TwentySix"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W14
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[99px] pl-[10px] pr-[13.61px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Supply Chain
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[79px] pl-[10px] pr-[9.23px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Logistics
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[167.06px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_b6a6aaf9a84fa4b.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="b6a6aaf9a84fa4b"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[312.94px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          India&#39;s leading financial platform for all things
                          payments & banking…
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[210.8px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-start justify-start rounded-[4px] w-[21%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_TwentySeven"
                            />
                            <Text
                              className="font-thin mt-[2px] text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W15
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[70px] pl-[10px] pr-[10.55px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Finance
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[78px] pl-[10px] pr-[14.75px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Payments
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[52px] pl-[10px] pr-[11.25px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            India
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[210.39px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_8c45a78eb56f4a9.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="8c45a78eb56f4aNine"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[82%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[265.61px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Data-centric infrastructure to accelerate the
                          development of AI
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[212.88px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[23%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_TwentyEight"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[31px] pl-[10px] pr-[11.45px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            AI
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[134px] pl-[10px] pr-[11.56px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Machine Learning
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start p-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_56dfbb621883fb6.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="56dfbb621883fbSix"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[87%]">
                        <div className="flex items-start justify-start pb-[0.59px] pr-[12.53px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold leading-[28.00px] md:max-w-[100%] max-w-[622px] text-black_900 text-left"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Unlocking the power of biotech with modern software
                          for modern science
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[403.47px] md:pr-[40px] py-[6px] self-stretch md:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[23%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_TwentyNine"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S12
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[70px] pl-[10px] pr-[11.17px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Biotech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[264.78px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_d6b5710a13038fe.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="d6b5710a13038fe"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[80%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[165.22px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[5px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The leader in automated data movement
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[4px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[15%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Thirty"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W13
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[131px] pl-[10px] pr-[12.92px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Data Engineering
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[81px] pl-[10px] pr-[13.06px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Analytics
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[226.09px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_44285cf605c3f1d.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="44285cf605c3f1d"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[82%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[229.91px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          On-demand delivery and financial services for Latin
                          America.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[105.11px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[18%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_ThirtyOne"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[72px] pl-[10px] pr-[13.34px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Delivery
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[106px] pl-[10px] pr-[9.98px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Latin America
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[354.08px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_211825b572def7b.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="211825b572def7b"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[76%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[126.92px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          People infrastructure for the future of work
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[29.14px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[20%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_ThirtyTwo"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S14
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[73px] pl-[10px] pr-[12.39px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Security
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[95px] pl-[10px] pr-[11.22px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Compliance
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[31px] pl-[10px] pr-[11.45px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            AI
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[375.08px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_d5d8aefda7d4e7f.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="d5d8aefda7d4e7f"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[74%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[109.92px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The easiest way to automate your work.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[124.56px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[35%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_ThirtyThree"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S12
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[263.38px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_ab92d5d14988836.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="ab92d5d14988836"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[80%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[226.63px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Democratizing internet commerce for everyone in India
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[171.28px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[25%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_ThirtyFour"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[57px] pl-[10px] pr-[9.38px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Retail
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[97px] pl-[10px] pr-[10.25px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            E-commerce
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start p-[20px] w-[100%]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_b1262acc9e79773.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="b1262acc9e79773"
                        />
                      </div>
                      <div className="flex flex-col gap-[2px] items-start justify-start pb-[0.8px] self-stretch w-[auto]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[111.78px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          A bank as smart as your phone.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start p-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_69fc3eaa7d024cb.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="69fc3eaa7d024cb"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[87%]">
                        <div className="flex items-start justify-start pb-[0.59px] sm:pr-[20px] pr-[28.05px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold leading-[28.00px] md:max-w-[100%] max-w-[606px] text-black_900 text-left"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Building humanity’s multiplanetary future.
                        </Text>
                        <div className="flex items-start justify-end mt-[3px] pr-[6px] py-[6px] w-[100%]">
                          <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] w-[81%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <div className="bg-gray_311 flex sm:flex-1 flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_television_deep_orange_a201.svg"
                                  className="h-[15px] ml-[2px] w-[auto]"
                                  alt="television_ThirtyFive"
                                />
                                <Text
                                  className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                                  variant="body51"
                                >
                                  W16
                                </Text>
                              </div>
                              <Button className="bg-gray_311 cursor-pointer font-thin min-w-[92px] pl-[10px] pr-[15.17px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                                3D Printing
                              </Button>
                              <Button className="bg-gray_311 cursor-pointer font-thin min-w-[78px] pl-[10px] pr-[9.64px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                                Rocketry
                              </Button>
                              <Button className="bg-gray_311 cursor-pointer font-thin min-w-[137px] pl-[10px] pr-[10.67px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                                Space Exploration
                              </Button>
                              <Button className="bg-gray_311 cursor-pointer font-thin min-w-[118px] pl-[10px] pr-[10.94px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                                Manufacturing
                              </Button>
                            </div>
                            <Button className="bg-gray_311 cursor-pointer font-thin min-w-[134px] pl-[10px] pr-[11.56px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                              Machine Learning
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[280.03px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_d6483c7eecc5184.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="d6483c7eecc5184"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[80%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[189.97px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Professional website design and publishing platform.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[104.73px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[20%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_ThirtySix"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S13
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[86px] pl-[10px] pr-[10.63px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Marketing
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[63px] pl-[10px] pr-[11.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Design
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[242.03px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_563bc6514eab1cc.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="563bc6514eab1cc"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[81%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[211.97px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The world’s largest omnichannel communications
                          platform
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[221.31px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[28%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_ThirtySeven"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[87px] pl-[10px] pr-[10.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Messaging
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[38px] pl-[10px] pr-[10.2px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            API
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[210.61px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_8cc4364cbc36079.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="8cc4364cbc36079"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[82%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[267.39px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Whatnot is the largest livestream shopping platform in
                          the U.S.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[176.53px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[22%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_ThirtyEight"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              W20
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[9.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Marketplace
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[97px] pl-[10px] pr-[10.25px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            E-commerce
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[221.34px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_ee69b5c90508828.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="ee69b5c90508828"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[82%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[250.66px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The first public safety operating system that
                          eliminates crime.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] md:pr-[40px] pr-[95.16px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[16%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_ThirtyNine"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S17
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[83px] pl-[10px] pr-[11.39px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Hardware
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[134px] pl-[10px] pr-[11.56px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Machine Learning
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start p-[20px] w-[100%]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_627387718c7fc43.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="627387718c7fcFortyThree"
                        />
                      </div>
                      <div className="flex flex-col gap-[2px] items-start justify-start pb-[0.8px] self-stretch w-[auto]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[195.53px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The world&#39;s most efficient digital freight
                          network.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[336.56px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_ad05853522c217d.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="ad05853522c217d"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[77%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[96.44px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Cloud solutions for the construction industry.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[144.11px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-start justify-start rounded-[4px] w-[33%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Forty"
                            />
                            <Text
                              className="font-thin mt-[2px] text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W15
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[110px] pl-[10px] pr-[9.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Construction
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[172.59px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_4f3a455935f36a6.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="4f3a455935f36aSix"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[205.41px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Platform for the greatest products from the past,
                          present and future.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[317.8px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[35%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FortyOne"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W11
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[9.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Marketplace
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] md:pr-[40px] pr-[454.48px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_0a4773159389a2b.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="0a4773159389a2b"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[67%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[65.52px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[4px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Build internal tools fast.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[4px] pr-[10.19px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[31%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FortyTwo"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W17
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[126px] pl-[10px] pr-[9.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Developer Tools
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[154.33px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_a10cd6dd027a6f9.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="a10cd6dd027a6fNine"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[294.67px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Technology enabler and digital transformer of American
                          food supply…
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[38.47px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-start justify-start rounded-[4px] sm:w-[100%] w-[13%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FortyThree"
                            />
                            <Text
                              className="font-thin mt-[2px] text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W15
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[96px] pl-[10px] pr-[15.56px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Agriculture
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[87px] pl-[10px] pr-[11.19px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Food Tech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[97px] pl-[10px] pr-[10.25px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            E-commerce
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[99px] pl-[10px] pr-[13.61px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Supply Chain
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[211.14px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_99f5abd1f15fa4c.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="99f5abd1f15fa4c"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[82%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[257.86px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Software and APIs to collect, clean, and control
                          customer data.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[288.5px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[35%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FortyFour"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S11
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[344.97px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_617ef74a3e62398.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="617ef74a3e62398"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[76%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[130.03px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Digital contracting platform for legal teams.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[110.91px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[27%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FortyFive"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S15
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[84px] pl-[10px] pr-[9.58px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            LegalTech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[143.98px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_a1078b114f17bc0.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="a1078b114f17bcZero"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[325.02px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Helping businesses make and accept payments from
                          anywhere in Africa.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[382.42px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[42%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FortySix"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[199.95px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_d90bc164db5dd25.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="d90bc164db5ddTwentyFive"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[83%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[316.05px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          A communication, marketing, and payments platform for
                          local…
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[220.94px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[25%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FortySeven"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[297.97px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_82971ab934851a5.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="82971ab934851aFive"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[79%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[177.03px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Provides payment infrastructure for Southeast Asia
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[143.69px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[25%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FortyEight"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S15
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[78px] pl-[10px] pr-[14.75px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Payments
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[341.91px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_e864a7ba119bd07.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="e864a7ba119bdSeven"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[77%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[26.09px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Investing made simple for everyone in India.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[110.55px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[29%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FortyNine"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W18
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[52px] pl-[10px] pr-[11.25px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            India
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[80px] pl-[10px] pr-[9.7px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Investing
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[219.44px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_8d4f5bc63953a48.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="8d4f5bc63953aFortyEight"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[82%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[240.56px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          A live online learning platform that empowers kids
                          ages 3–18.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[178.09px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[23%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Fifty"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[86px] pl-[10px] pr-[10.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Education
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[9.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Marketplace
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[376.02px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_a3bbe5d7f8ca797.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="a3bbe5d7f8ca797"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[74%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[107.98px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Modern people management platform.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[146.7px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[44%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FiftyOne"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[13.69px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            HR Tech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[347.86px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_b5119e7d1a68505.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="b5119e7d1a68505"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[76%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[86.14px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Building the world&#39;s first fusion power plant
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] md:pr-[40px] pr-[61.67px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[22%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FiftyTwo"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S14
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[111px] pl-[10px] pr-[9.38px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fusion Energy
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[10.38px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Climate
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[299.52px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_0ccdabab089f9b8.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="0ccdabab089f9bEight"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[79%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[112.48px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          We’re building the world’s bank payment network.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[142.14px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[25%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FiftyThree"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S11
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[78px] pl-[10px] pr-[14.75px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Payments
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[252.2px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_3957efb32806e40.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="3957efb32806eForty"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[81%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[123.8px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          A developer-friendly and enterprise-grade search API.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[110.83px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[20%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FiftyFour"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W14
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[126px] pl-[10px] pr-[9.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Developer Tools
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[366.52px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_8f74c3796e1b767.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="8f74c3796e1b767"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[75%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[148.48px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          App store for server configurations.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[19%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FiftyFive"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S10
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[64px] pl-[10px] pr-[10.92px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            DevOps
                          </Button>
                          <Input
                            wrapClassName="bg-gray_311 pl-[10px] pr-[19.84px] py-[4px] rounded-[4px] w-[54%]"
                            className="font-thin p-[0] placeholder:text-black_900 text-[9px] text-black_900 text-left tracking-[1.00px] uppercase w-[100%]"
                            name="span_TwentyOne"
                            placeholder="Enterprise Software"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[381.44px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_ce6ff3e82371f1e.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="ce6ff3e82371f1e"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[74%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[85.56px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Modern insurance brokerage.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] md:pr-[40px] pr-[49.78px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[26%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FiftySix"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W18
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[85px] pl-[10px] pr-[9.31px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Insurance
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] md:pr-[40px] pr-[70.31px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_8d4235cadbab6a5.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="8d4235cadbab6aFive"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[86%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[425.69px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Decarbonizing the chemicals industry.
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[10%] sm:w-[100%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FiftySeven"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W17
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[119px] pl-[10px] pr-[12.16px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Biotechnology
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[98px] pl-[10px] pr-[16.31px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            ClimateTech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[86px] pl-[10px] pr-[14.31px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Industrial
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[118px] pl-[10px] pr-[10.94px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Manufacturing
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[10.38px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Climate
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[171.73px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_e1004ce910aafa7.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="e1004ce910aafaSeven"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[264.27px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          A learning platform that enables you to train your
                          staff or customers.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[338.95px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[37%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FiftyEight"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S15
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[84px] pl-[10px] pr-[10.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            eLearning
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[268.78px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_faca4c2138bb38f.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="faca4c2138bb38f"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[80%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[245.22px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          International banking infrastructure for global
                          startups.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[172.88px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[25%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_FiftyNine"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              S20
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[78px] pl-[10px] pr-[14.75px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Payments
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[313.09px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_a530f58c560c991.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="a530f58c560c991"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[78%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[99.91px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Payment operations tools for money movement.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[169.11px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[31%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Sixty"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S18
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[38px] pl-[10px] pr-[10.2px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            API
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[342.66px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_c14ca2790645cac.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="c14ca2790645cac"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[77%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[164.34px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Powering the animal health supply chain.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[18%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SixtyOne"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[92px] pl-[10px] pr-[9.8px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Healthcare
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[9.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Marketplace
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[229.61px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_a7fe6af4f0d7680.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="a7fe6af4f0d7680"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[82%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[269.39px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Providing Amazon level logistics to e-commerce
                          businesses.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[183.19px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[22%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SixtyTwo"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S14
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[79px] pl-[10px] pr-[9.23px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Logistics
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[97px] pl-[10px] pr-[10.25px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            E-Commerce
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[288.31px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_218a1e71ef58cf5.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="218a1e71ef58cfFive"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[79%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[186.69px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          We make robots for biologists.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[16%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SixtyThree"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[77px] pl-[10px] pr-[10.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Robotics
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[137px] pl-[10px] pr-[19.06px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Synthetic Biology
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[70px] pl-[10px] pr-[11.17px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Biotech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[278.2px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_4eb5f9ca677956a.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="4eb5f9ca677956a"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[80%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[228.8px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The Leader in Digital Trust & Safety
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[15%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SixtyFour"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S11
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[134px] pl-[10px] pr-[11.56px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Machine Learning
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[382.94px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_7bb010b1c1951d3.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="7bb010b1c1951dThree"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[74%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[89.06px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Mobile money app for Africa
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[139.59px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[44%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SixtyFive"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W12
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start p-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_bf249c52ada525d.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="bf249c52ada525d"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[87%]">
                        <div className="flex items-start justify-start pb-[0.59px] sm:pr-[20px] pr-[37.58px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold leading-[28.00px] md:max-w-[100%] max-w-[597px] text-black_900 text-left"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Customer communications hub for building strong
                          relationships
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] md:pr-[40px] pr-[526.45px] py-[6px] self-stretch md:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[49%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SixtySix"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S14
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start p-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_467c166ddaf90fc.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="467c166ddaf90fc"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[87%]">
                        <div className="flex items-start justify-start pb-[0.59px] sm:pr-[20px] md:pr-[40px] pr-[44.46px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold leading-[28.00px] md:max-w-[100%] max-w-[590px] text-black_900 text-left"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Helps simplify and centralize security for
                          organizations of all sizes
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[349.98px] md:pr-[40px] py-[6px] self-stretch md:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[20%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SixtySeven"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W18
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[73px] pl-[10px] pr-[12.39px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Security
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[95px] pl-[10px] pr-[11.22px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Compliance
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[369.84px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_c4a973a0300bcf1.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="c4a973a0300bcfOne"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[75%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[121.16px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[4px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          API-connected healthcare infrastructure.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[4px] sm:pr-[20px] pr-[38.34px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[22%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SixtyEight"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S17
                            </Text>
                          </div>
                          <Input
                            wrapClassName="bg-gray_311 pl-[10px] pr-[21.09px] py-[4px] rounded-[4px] w-[76%]"
                            className="font-thin p-[0] placeholder:text-black_900 sm:pr-[20px] text-[9px] text-black_900 text-left tracking-[1.00px] uppercase w-[100%]"
                            name="span_TwentyTwo"
                            placeholder="Consumer Health Services"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[172.66px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_b36a8ba8f46bbf8.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="b36a8ba8f46bbfEight"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[250.34px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Plan, communicate, and benchmark your compensation in
                          real-time.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[279.06px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[27%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SixtyNine"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              S20
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[13.69px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            HR Tech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[182.97px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_a1439ba0d083719.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="a1439ba0d083719"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[83%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[276.03px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          We use solar and wind power to make zero net carbon
                          electrofuels
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[212.23px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[22%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Seventy"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W19
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[121px] pl-[10px] pr-[10.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Energy Storage
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[10.38px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Climate
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[233.44px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_a333c6fd617000a.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="a333c6fd617000a"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[82%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[137.56px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Video infrastructure for developers
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[125.81px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[20%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SeventyOne"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[55px] pl-[10px] pr-[11.22px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Video
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[38px] pl-[10px] pr-[10.2px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            API
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[126px] pl-[10px] pr-[9.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Developer Tools
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[127.58px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_18b90074b86630e.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="18b90074b86630e"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[85%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[281.42px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Jasper is a leader in creating content using
                          Artificial Intelligence
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[11%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SeventyTwo"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W18
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_311 font-thin pl-[10px] pr-[20.55px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Artificial Intelligence
                          </Text>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[104px] pl-[10px] pr-[10.78px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Generative AI
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[31px] pl-[10px] pr-[11.45px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            AI
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[138px] pl-[10px] pr-[11.05px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Conversational AI
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[190px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_9cccd2e88dc540e.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="9cccd2e88dc540e"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[83%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[286px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Digital tools for healthcare providers
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[12%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SeventyThree"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[92px] pl-[10px] pr-[9.8px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Healthcare
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[96px] pl-[10px] pr-[15.58px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Health Tech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[70px] pl-[10px] pr-[11.17px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Biotech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[121px] pl-[10px] pr-[9.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Medical Devices
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[381.09px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_4391e46749d4be8.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="4391e46749d4beEight"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[74%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[80.91px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Snapdocs digitizes real estate closings
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[35.55px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[25%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SeventyFour"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W14
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[73px] pl-[10px] pr-[10.13px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Housing
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[355.33px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_37f58af9ede4117.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="37f58af9ede4117"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[76%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[111.67px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The shipping infrastructure of the internet.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] md:pr-[40px] pr-[55.11px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[22%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SeventyFive"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S13
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[79px] pl-[10px] pr-[9.23px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Logistics
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[99px] pl-[10px] pr-[13.61px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Supply Chain
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[275.64px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_3d684926422fe82.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="3d684926422feEightyTwo"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[80%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[211.36px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Apollo helps engineering teams accelerate delivery
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[15%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SeventySix"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S11
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_311 font-thin justify-center pl-[10px] pr-[10.88px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                            variant="body51"
                          >
                            GraphQL
                          </Text>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[126px] pl-[10px] pr-[9.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Developer Tools
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[10.03px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Open Source
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start p-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_bd7ff2b3db9bbbc.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="bd7ff2b3db9bbbc"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[87%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[472px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Self-Checkout using Computer Vision.
                        </Text>
                        <div className="flex items-start justify-end mt-[3px] pr-[6px] py-[6px] w-[100%]">
                          <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] w-[76%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <div className="bg-gray_311 flex sm:flex-1 flex-row items-start justify-start rounded-[4px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_television_deep_orange_a201.svg"
                                  className="h-[15px] ml-[2px] w-[auto]"
                                  alt="television_SeventySeven"
                                />
                                <Text
                                  className="font-thin mt-[2px] text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                                  variant="body51"
                                >
                                  W15
                                </Text>
                              </div>
                              <Button className="bg-gray_311 cursor-pointer font-thin min-w-[124px] pl-[10px] pr-[17.88px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                                Computer Vision
                              </Button>
                              <Text
                                className="bg-gray_311 font-thin pl-[10px] pr-[20.55px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Artificial Intelligence
                              </Text>
                              <Button className="bg-gray_311 cursor-pointer font-thin min-w-[110px] pl-[10px] pr-[10.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                                Deep Learning
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-start md:w-[100%] w-[53%]">
                              <Button className="bg-gray_311 cursor-pointer font-thin min-w-[160px] pl-[10px] pr-[19.05px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                                Cashierless Checkout
                              </Button>
                              <Button className="bg-gray_311 cursor-pointer font-thin min-w-[83px] pl-[10px] pr-[11.39px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                                Hardware
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[377.5px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_59164e3d525f6f1.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="59164e3d525f6fOne"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start pb-[4px] sm:w-[100%] w-[74%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[88.5px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          On-demand prescription delivery.
                        </Text>
                        <div className="bg-gray_311 flex flex-row items-start justify-start mt-[10px] rounded-[4px] md:w-[100%] w-[21%]">
                          <Img
                            src="images/img_television_deep_orange_a201.svg"
                            className="h-[15px] ml-[2px] w-[auto]"
                            alt="television_SeventyEight"
                          />
                          <Text
                            className="font-thin mt-[2px] text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                            variant="body51"
                          >
                            W15
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start p-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_5fb14cdcb75e548.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="5fb14cdcb75e548"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[87%]">
                        <div className="flex items-start justify-start pb-[0.59px] pr-[6.92px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold leading-[28.00px] md:max-w-[100%] max-w-[628px] text-black_900 text-left"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          AI-powered identity verification solution for fraud
                          prevention.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] md:pr-[40px] pr-[447.7px] py-[6px] self-stretch md:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[31%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_SeventyNine"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W18
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] md:pr-[40px] pr-[434.73px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_36e20f89b10663b.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="36e20f89b10663b"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[70%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[74.27px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The future of B2B spend
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[8.64px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[26%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Eighty"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              S20
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[105px] pl-[10px] pr-[9.09px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Procurement
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[213.72px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_fc4c9a8bb7a853c.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="fc4c9a8bb7a853c"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[82%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[266.28px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[5px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Open-source EL(T) platform
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[14%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_EightyOne"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              W20
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[126px] pl-[10px] pr-[9.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Developer Tools
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[10.03px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Open Source
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[131px] pl-[10px] pr-[12.92px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Data Engineering
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[285.23px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_8b6b5d357c2bb55.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="8b6b5d357c2bbFiftyFive"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[79%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[188.77px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          One-stop-shop for flexible family care
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[15%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_EightyTwo"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S18
                            </Text>
                          </div>
                          <Input
                            wrapClassName="bg-gray_311 pl-[10px] pr-[21.09px] py-[4px] rounded-[4px] w-[52%]"
                            className="font-thin p-[0] placeholder:text-black_900 sm:pr-[20px] text-[9px] text-black_900 text-left tracking-[1.00px] uppercase w-[100%]"
                            name="span_TwentySix"
                            placeholder="Consumer Health Services"
                          ></Input>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[110px] pl-[10px] pr-[9.95px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Digital Health
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[186.97px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_ee67d3955bee952.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="ee67d3955bee952"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[83%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[140.03px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Protects organizations from getting breached through
                          their APIs.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[295.11px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[33%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_EightyThree"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[109px] pl-[10px] pr-[14.33px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Cybersecurity
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[358.5px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_6afe4b664eab03f.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="6afe4b664eab03f"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[76%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[147.5px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The next generation of internet satellites.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[20%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_EightyFour"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[83px] pl-[10px] pr-[13.23px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Satellites
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[137px] pl-[10px] pr-[10.67px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Space Exploration
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[199.69px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_172469006c88092.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="172469006c88092"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[83%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[248.31px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The gold standard in cryptocurrency portfolio tracking
                          and taxes
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] md:pr-[40px] pr-[64.53px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[15%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_EightyFive"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W18
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[84px] pl-[10px] pr-[10.31px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Consumer
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[107px] pl-[10px] pr-[16.17px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Crypto / Web3
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start p-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_e00070fbe06d18d.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="e00070fbe06d18d"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[87%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[440px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Connects healthcare facilities with nurses nearby.
                        </Text>
                        <div className="flex items-start justify-end mt-[3px] pr-[6px] py-[6px] w-[100%]">
                          <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] w-[89%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <div className="bg-gray_311 flex sm:flex-1 flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[auto]">
                                <Img
                                  src="images/img_television_deep_orange_a201.svg"
                                  className="h-[15px] ml-[2px] w-[auto]"
                                  alt="television_EightySix"
                                />
                                <Text
                                  className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                                  variant="body51"
                                >
                                  W17
                                </Text>
                              </div>
                              <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[9.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                                Marketplace
                              </Button>
                              <Input
                                wrapClassName="bg-gray_311 sm:flex-1 pl-[10px] pr-[21.09px] py-[4px] rounded-[4px] sm:w-[100%] w-[auto]"
                                className="font-thin p-[0] placeholder:text-black_900 sm:pr-[20px] text-[9px] text-black_900 text-left tracking-[1.00px] uppercase w-[100%]"
                                name="span_TwentySeven"
                                placeholder="Consumer Health Services"
                              ></Input>
                              <Button className="bg-gray_311 cursor-pointer font-thin min-w-[96px] pl-[10px] pr-[15.58px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                                Health Tech
                              </Button>
                              <Button className="bg-gray_311 cursor-pointer font-thin min-w-[92px] pl-[10px] pr-[9.8px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                                Healthcare
                              </Button>
                            </div>
                            <Button className="bg-gray_311 cursor-pointer font-thin min-w-[110px] pl-[10px] pr-[9.95px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                              Digital Health
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[400.02px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_fae52e07d79df34.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="fae52e07d79dfThirtyFour"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[72%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[78.98px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Live your best financial life
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[122.52px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[44%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_EightySeven"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[141.27px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_d6335987a80e28f.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="d6335987a80e28f"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[307.73px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Agile commission software to design, deploy & adapt
                          commission plans.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[401.31px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[52%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_EightyEight"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W18
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[144.75px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_5880942a2efc612.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="5880942a2efc612"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[316.25px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Communication app for K-8 teachers, kids, and families
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[12%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_EightyNine"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              IK12
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[84px] pl-[10px] pr-[10.31px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Consumer
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[84px] pl-[10px] pr-[9.52px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Metaverse
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[86px] pl-[10px] pr-[10.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Education
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[45px] pl-[10px] pr-[9.69px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Kids
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[115px] px-[10px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Entertainment
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[399.47px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_6a37f8c6b6d3cdd.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="6a37f8c6b6d3cdd"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[73%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[99.53px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Talent engagement platform
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[22%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_Ninety"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S17
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[40px] pl-[10px] pr-[10.81px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            B2B
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[88px] pl-[10px] pr-[15.17px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Recruiting
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[310.78px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_8f57f5afcce30f3.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="8f57f5afcce30fThree"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[78%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[118.22px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          A mental health benefits platform for employers.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[32.36px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[19%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_NinetyOne"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W18
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[145px] pl-[10px] pr-[19.69px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Mental Health Tech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[96px] pl-[10px] pr-[15.58px] py-[4px] rounded-[4px] text-[9px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Health Tech
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[170.14px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_232b4ff716a738c.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="232b4ff716a738c"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[84%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[324.86px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The easiest, most secure way to access all your
                          infrastructure
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[12%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_NinetyTwo"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S15
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[86px] pl-[10px] pr-[9.45px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            DevSecOps
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[126px] pl-[10px] pr-[9.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Developer Tools
                          </Button>
                          <Input
                            wrapClassName="bg-gray_311 pl-[10px] pr-[21.95px] py-[4px] rounded-[4px] sm:w-[100%] w-[41%]"
                            className="font-thin p-[0] placeholder:text-black_900 sm:pr-[20px] text-[9px] text-black_900 text-left tracking-[1.00px] uppercase w-[100%]"
                            name="span_TwentyEight"
                            placeholder="Next-gen Network Security"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] pr-[205.63px] sm:pr-[20px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_99fad830d694e29.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="99fad830d694eTwentyNine"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[83%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[231.38px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Economically and environmentally sustainable
                          supersonic travel
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[171.72px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[21%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_NinetyThree"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              W16
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[86px] pl-[10px] pr-[11.44px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Aerospace
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[121px] pl-[10px] pr-[10.63px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Transportation
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[356.28px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_3adc2d7230f0a2c.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="3adc2d7230f0a2c"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start pb-[4px] sm:w-[100%] w-[76%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[164.72px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body37"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          The core engine of supply chain in LATAM
                        </Text>
                        <div className="bg-gray_311 flex flex-row items-center justify-start mt-[10px] rounded-[4px] md:w-[100%] w-[20%]">
                          <Img
                            src="images/img_television_deep_orange_a201.svg"
                            className="h-[15px] ml-[2px] w-[auto]"
                            alt="television_NinetyFour"
                          />
                          <Text
                            className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                            variant="body51"
                          >
                            W19
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] md:pr-[40px] pr-[432.59px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_de26262abf4718d.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="de26262abf4718d"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[70%]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[79.41px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Titan is building a new Schwab.
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] sm:pr-[20px] pr-[38.98px] py-[6px] self-stretch w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[29%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_NinetyFive"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S18
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 border-b-[1px] border-bluegray_102 border-solid flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[259.28px] md:pr-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_d79adb13b4acb20.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="d79adb13b4acbTwenty"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start sm:w-[100%] w-[81%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[206.72px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Marketplace connecting consumers to financial advisors
                        </Text>
                        <div className="flex flex-row gap-[6px] items-start justify-start mt-[3px] pr-[160.11px] sm:pr-[20px] md:pr-[40px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] w-[23%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_NinetySix"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S12
                            </Text>
                          </div>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[68px] pl-[10px] pr-[9.88px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Fintech
                          </Button>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[101px] pl-[10px] pr-[9.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            Marketplace
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray_53 flex sm:flex-col flex-row gap-[20px] items-center justify-start pl-[20px] sm:pr-[20px] pr-[275.83px] md:pr-[40px] py-[20px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-gray_206 flex h-[78px] items-center justify-start rounded-[50%] w-[78px]">
                        <Img
                          src="images/img_aa9f2a7f1990911.png"
                          className="h-[78px] md:h-[auto] rounded-[50%] w-[78px]"
                          alt="aa9f2a7f1990911"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:w-[100%] w-[80%]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[192.17px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body43"
                          ></Text>
                        </div>
                        <Text
                          className="font-thin mt-[6px] text-black_900 text-left w-[auto]"
                          variant="body42"
                        >
                          Harnesses business activity to unlock growth.
                        </Text>
                        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mt-[3px] pr-[6px] py-[6px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="bg-gray_311 flex flex-row items-center justify-start rounded-[4px] sm:w-[100%] w-[15%]">
                            <Img
                              src="images/img_television_deep_orange_a201.svg"
                              className="h-[15px] ml-[2px] w-[auto]"
                              alt="television_NinetySeven"
                            />
                            <Text
                              className="font-thin text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                              variant="body51"
                            >
                              S16
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_311 font-thin pl-[10px] pr-[20.55px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left tracking-[1.00px] uppercase w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Artificial Intelligence
                          </Text>
                          <Button className="bg-gray_311 cursor-pointer font-thin min-w-[48px] pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center tracking-[1.00px] uppercase w-[auto]">
                            SaaS
                          </Button>
                          <Input
                            wrapClassName="bg-gray_311 pl-[10px] pr-[14.08px] py-[4px] rounded-[4px] sm:w-[100%] w-[24%]"
                            className="font-thin p-[0] placeholder:text-black_900 text-[9px] text-black_900 text-left tracking-[1.00px] uppercase w-[100%]"
                            name="span_Thirty"
                            placeholder="Enterprise"
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-thin text-black_900 text-left w-[auto]"
                    variant="body42"
                  >
                    Loading more...
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-start py-[59px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
              <Img
                src="images/img_ycombinatorlog.png"
                className="h-[60px] md:h-[auto] sm:hidden md:mt-[0] mt-[5px] object-cover w-[60px]"
                alt="ycombinatorlog_One"
              />
              <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-[40px] gap-[64px] items-start justify-start md:ml-[0] ml-[64px] md:mt-[0] mt-[5px] self-stretch sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start pb-[140px] self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-black_900 text-left tracking-[0.80px] w-[auto]"
                    variant="body41"
                  >
                    Programs
                  </Text>
                  <div className="flex flex-col sm:flex-row gap-[8px] items-start sm:justify-between justify-start pr-[1.86px] py-[2px] self-stretch w-[auto]">
                    <Text
                      className="font-light text-black_900 text-left w-[auto]"
                      variant="body43"
                    >
                      YC Program
                    </Text>
                    <Text
                      className="font-light text-black_900 text-left w-[auto]"
                      variant="body43"
                    >
                      Startup School
                    </Text>
                    <Text
                      className="font-light text-black_900 text-left w-[auto]"
                      variant="body43"
                    >
                      Work at a Startup
                    </Text>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-[40px] gap-[64px] grid grid-cols-2 sm:w-[100%] w-[60%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.80px] w-[auto]"
                      variant="body41"
                    >
                      Company
                    </Text>
                    <div className="flex flex-col gap-[8px] items-start justify-start pr-[5.02px] py-[2px] self-stretch w-[auto]">
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body43"
                      >
                        YC Blog
                      </Text>
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body43"
                      >
                        Contact
                      </Text>
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body44"
                      >
                        Press
                      </Text>
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body43"
                      >
                        People
                      </Text>
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body43"
                      >
                        Careers
                      </Text>
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body44"
                      >
                        Privacy Policy
                      </Text>
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body43"
                      >
                        Security
                      </Text>
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body44"
                      >
                        Terms of Use
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start pb-[28px] self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.80px] w-[auto]"
                      variant="body41"
                    >
                      Resources
                    </Text>
                    <div className="flex flex-col gap-[8px] items-start justify-start pr-[2.23px] py-[2px] self-stretch w-[auto]">
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body43"
                      >
                        Startup Directory
                      </Text>
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body43"
                      >
                        Startup Library
                      </Text>
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body44"
                      >
                        Investors
                      </Text>
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body43"
                      >
                        SAFE
                      </Text>
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body43"
                      >
                        Hacker News
                      </Text>
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body43"
                      >
                        Launch YC
                      </Text>
                      <Text
                        className="font-light text-black_900 text-left w-[auto]"
                        variant="body43"
                      >
                        YC Deals
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex md:flex-1 flex-row gap-[8px] items-center justify-end mb-[5px] pb-[213px] sm:pl-[20px] pl-[213px] md:pl-[40px] md:w-[100%] w-[50%]">
                <Text
                  className="text-black_900 text-right w-[auto]"
                  variant="body36"
                >
                  Make something people want.
                </Text>
                <Button className="bg-orange_A200 cursor-pointer font-bold min-w-[69px] pb-[5.8px] pl-[13px] pr-[10.7px] pt-[4px] rounded-[6px] text-[18px] text-center text-white_A700 w-[auto]">
                  Apply
                </Button>
              </div>
            </div>
            <div className="border-gray_207 border-solid border-t-[1px] flex flex-row md:gap-[40px] items-start justify-between mb-[5px] pt-[33px] w-[100%]">
              <Text
                className="font-thin text-black_900 text-left w-[auto]"
                variant="body41"
              >
                © 2023 Y Combinator.
              </Text>
              <Img
                src="images/img_div_black_900_24x216.svg"
                className="h-[24px] w-[216px]"
                alt="div_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompaniespgPage;
