import React from "react";

import { Img, Text, Button, Line, List, Input } from "components";

const JobPage = () => {
  return (
    <>
      <div className="bg-gray_109 flex font-roboto items-center justify-start mx-[auto] px-[13px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[1894px] mx-[auto] md:px-[20px] px-[397px] w-[100%]">
          <div className="border-b-[1px] border-gray_307 border-solid flex md:flex-col flex-row md:gap-[20px] items-center justify-center py-[26px] w-[100%]">
            <div className="flex md:flex-1 md:flex-col flex-row gap-[26px] items-start justify-between pb-[3px] md:w-[100%] w-[78%]">
              <Img
                src="images/img_ycombinatorlog.png"
                className="h-[60px] md:h-[auto] sm:hidden object-cover w-[60px]"
                alt="ycombinatorlog"
              />
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center sm:items-stretch justify-start sm:justify-start pr-[19px] py-[19px] sm:relative md:w-[100%] w-[auto]">
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
                  className="font-thin md:ml-[0] ml-[15px] text-gray_912 text-left w-[auto]"
                  variant="body41"
                >
                  Startup School
                </Text>
                <Text
                  className="font-thin md:ml-[0] ml-[17px] text-gray_912 text-left w-[auto]"
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
                  className="font-thin text-gray_805 text-right w-[auto]"
                  variant="body41"
                ></Text>
              </div>
              <Button className="bg-orange_A200 cursor-pointer font-bold min-w-[69px] pb-[5.8px] pl-[13px] pr-[10.7px] pt-[4px] rounded-[6px] text-[18px] text-center text-white_A700 w-[auto]">
                Apply
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="border-b-[1px] border-gray_307 border-solid flex items-start justify-start sm:pr-[20px] pr-[36px] py-[36px] w-[100%]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[85%]">
                <Text
                  className="text-black_900 text-left w-[auto]"
                  variant="body17"
                >
                  Startup Library
                </Text>
                <Text
                  className="font-thin leading-[28.00px] mt-[32px] text-black_900 text-left sm:w-[100%] w-[93%]"
                  variant="body41"
                >
                  Over the past 15 years, we’ve created many videos, podcasts
                  and essays as resources for startup founders. We’ve now
                  consolidated them here in the YC Startup Library.
                </Text>
                <div className="flex items-center justify-start mt-[25px] pr-[4px] py-[4px] w-[100%]">
                  <Text
                    className="font-thin leading-[28.00px] text-black_900 text-left sm:w-[100%] w-[98%]"
                    variant="body41"
                  ></Text>
                </div>
                <div className="flex items-start justify-end mt-[20px] pr-[3px] py-[3px] w-[100%]">
                  <Text
                    className="font-thin text-black_900 text-left w-[auto]"
                    variant="body41"
                  ></Text>
                </div>
              </div>
            </div>
            <div className="border-b-[1px] border-gray_307 border-solid flex font-inter items-center justify-end py-[35px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[25px] sm:h-[] items-start justify-between sm:static w-[100%]">
                <div className="bg-gray_53 border-[1px] border-gray_402 border-solid flex md:flex-1 flex-col items-center justify-start mb-[25928px] p-[21px] sm:px-[20px] rounded-[8px] md:w-[100%] w-[28%]">
                  <div className="flex flex-row items-center justify-start pr-[163px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[24%]"></div>
                    <Text
                      className="font-thin ml-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                      variant="body47"
                    >
                      Bookmarked
                    </Text>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                    <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                    <Text
                      className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                      variant="body47"
                    >
                      Startup School
                    </Text>
                    <Text
                      className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[8px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                      as="h2"
                      variant="h2"
                    >
                      25
                    </Text>
                  </div>
                  <Line className="bg-gray_503 h-[1px] mt-[20px] w-[100%]" />
                  <div className="flex items-center justify-start mt-[20px] pt-[2px] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                        <Text
                          className="font-medium text-bluegray_954 text-left tracking-[0.16px] w-[auto]"
                          variant="body44"
                        >
                          Media Type
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
                          All media types
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[10px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                          variant="body50"
                        >
                          431
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body44"
                        >
                          Blog
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[5px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                          variant="body50"
                        >
                          120
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          External
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                          as="h2"
                          variant="h2"
                        >
                          88
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Podcast
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[5px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[15px]"
                          variant="body48"
                        >
                          4
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Video
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                          variant="body50"
                        >
                          219
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray_503 h-[1px] mt-[20px] w-[100%]" />
                  <div className="flex items-center justify-start mb-[5px] mt-[20px] pt-[2px] w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-between md:w-[100%] w-[98%]">
                        <Text
                          className="font-medium text-bluegray_954 text-left tracking-[0.16px] w-[auto]"
                          variant="body44"
                        >
                          Category
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
                          All categories
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[27px]"
                          variant="body50"
                        >
                          431
                        </Text>
                      </div>
                      <List
                        className="flex-col gap-[5px] grid items-center mt-[5px] w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[52%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Becoming a Founder
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[11px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            as="h2"
                            variant="h2"
                          >
                            46
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[43%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Business Models
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[8px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            as="h2"
                            variant="h2"
                          >
                            26
                          </Text>
                        </div>
                      </List>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Co-Founders
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[8px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                          as="h2"
                          variant="h2"
                        >
                          20
                        </Text>
                      </div>
                      <List
                        className="flex-col gap-[5px] grid items-center mt-[5px] w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[52%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Company Categories
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[11px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            as="h2"
                            variant="h2"
                          >
                            38
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[44%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Company Stages
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            as="h2"
                            variant="h2"
                          >
                            62
                          </Text>
                        </div>
                      </List>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Competition
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[10px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[15px]"
                          variant="body48"
                        >
                          3
                        </Text>
                      </div>
                      <List
                        className="flex-col gap-[5px] grid items-center mt-[5px] w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[30%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Customers
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            as="h2"
                            variant="h2"
                          >
                            46
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[21%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Design
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[15px]"
                            variant="body48"
                          >
                            4
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[23%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Finance
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[6px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            variant="body48"
                          >
                            21
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[51%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Founder Psychology
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            as="h2"
                            variant="h2"
                          >
                            39
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[41%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Founder Stories
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            as="h2"
                            variant="h2"
                          >
                            80
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[57%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Fundraising + Investors
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[11px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            variant="body48"
                          >
                            81
                          </Text>
                        </div>
                      </List>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Getting Started
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[15px]"
                          variant="body48"
                        >
                          4
                        </Text>
                      </div>
                      <List
                        className="flex-col gap-[5px] grid items-center mt-[5px] w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[22%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Growth
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            variant="body48"
                          >
                            81
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[33%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              International
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[15px]"
                            variant="body48"
                          >
                            5
                          </Text>
                        </div>
                      </List>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Legal
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[6px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[15px]"
                          variant="body48"
                        >
                          9
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[35%]">
                          <Img
                            src="images/img_frame_gray_403.svg"
                            className="h-[13px] w-[auto]"
                            alt="frame"
                          />
                          <Text
                            className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            Management
                          </Text>
                        </div>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[9px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                          as="h2"
                          variant="h2"
                        >
                          32
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Office Hours
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[15px]"
                          variant="body48"
                        >
                          2
                        </Text>
                      </div>
                      <List
                        className="flex-col gap-[5px] grid items-center mt-[5px] w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[21%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              People
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            as="h2"
                            variant="h2"
                          >
                            44
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                          <div className="flex flex-row items-start justify-center ml-[3px] mt-[2px] w-[23%]">
                            <Img
                              src="images/img_frame_gray_403.svg"
                              className="h-[13px] w-[auto]"
                              alt="frame"
                            />
                            <Text
                              className="font-thin ml-[5px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                              variant="body47"
                            >
                              Product
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[6px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            as="h2"
                            variant="h2"
                          >
                            48
                          </Text>
                        </div>
                      </List>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Regulated Markets
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] justify-center ml-[10px] px-[6px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[15px]"
                          variant="body48"
                        >
                          1
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Social Missions
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] justify-center ml-[7px] px-[6px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[15px]"
                          variant="body48"
                        >
                          1
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
                            className="font-thin ml-[5px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                            variant="body47"
                          >
                            Startup Ideas
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            as="h2"
                            variant="h2"
                          >
                            28
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
                            Technical
                          </Text>
                          <Text
                            className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[6px] px-[5px] py-[3px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                            as="h2"
                            variant="h2"
                          >
                            24
                          </Text>
                        </div>
                      </List>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Third Party Tools
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[7px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[15px]"
                          variant="body48"
                        >
                          2
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Text
                          className="font-thin ml-[3px] mt-[3px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          Working at a Startup
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[11px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[15px]"
                          variant="body48"
                        >
                          9
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start mt-[5px] w-[100%]">
                        <div className="bg-white_A700 border-[1px] border-gray_308 border-solid h-[20px] rounded-[4px] w-[9%]"></div>
                        <Img
                          src="images/img_frame_gray_403.svg"
                          className="h-[13px] ml-[3px] mt-[2px] w-[auto]"
                          alt="frame_One"
                        />
                        <Text
                          className="font-thin ml-[5px] mt-[2px] text-bluegray_956 text-left tracking-[0.16px] w-[auto]"
                          variant="body47"
                        >
                          YC
                        </Text>
                        <Text
                          className="bg-gray_206 border-[1px] border-gray_308 border-solid h-[19px] ml-[5px] px-[4px] py-[2px] rounded-[3px] text-gray_702 text-left tracking-[0.16px] w-[21px]"
                          variant="body48"
                        >
                          19
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[71%]">
                  <div className="bg-gray_53 border-[1px] border-gray_402 border-solid flex items-start justify-start p-[21px] sm:px-[20px] rounded-[8px] self-stretch md:w-[100%] w-[auto]">
                    <Input
                      wrapClassName="bg-white_A700 border-[1px] border-bluegray_102 border-solid p-[11px] rounded-[4px] shadow-bs20 w-[100%]"
                      className="font-thin leading-[normal] p-[0] placeholder:text-gray_608 text-[15px] text-gray_608 text-left w-[100%]"
                      name="input_Seventeen"
                      placeholder="Search..."
                    ></Input>
                  </div>
                  <Text
                    className="font-thin mt-[27px] text-gray_801 text-left w-[auto]"
                    variant="body44"
                  >
                    Showing 160 of 431 results
                  </Text>
                  <div className="bg-gray_53 border-[1px] border-gray_402 border-solid flex flex-col items-start justify-start mt-[6px] rounded-[8px] self-stretch md:w-[100%] w-[auto]">
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[458px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          YC’s Essential Startup Advice
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Geoff Ralston, Michael Seibel
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                          <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[89%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <Text
                                className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Becoming a Founder
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[88px] pl-[10px] pr-[14.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Early Stage
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Customers
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[16.31px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Talking to Users
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Growth
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Product
                              </Button>
                            </div>
                            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:w-[100%] w-[79%]">
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[136px] pl-[10px] pr-[18.16px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Product Market Fit
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[93px] sm:ml-[0] ml-[10px] pl-[10px] pr-[15.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Fundraising
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] sm:ml-[0] ml-[10px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Business Models
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[115px] sm:ml-[0] ml-[10px] pl-[10px] pr-[17.8px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Unit Economics
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[712px] text-gray_912 text-left"
                          variant="body44"
                        >
                          We’ve collected here what we at YC consider the most
                          important, most transformative advice for startups.
                          Whether common sense or counter-intuitive, the
                          guidance below will help most startups find their path
                          to success.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          How to Succeed With a Startup (SUS 2018)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_One"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[260px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Sam Altman
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[81%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                    startup school
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[96px] pl-[10px] pr-[15.5px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Staying Alive
                                  </Button>
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body51"
                                  >
                                    Founder Psychology
                                  </Text>
                                </div>
                                <Text
                                  className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                  variant="body49"
                                >
                                  Becoming a Founder
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[466px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Sam Altman, former President of Y Combinator,
                              shares his thoughts on how you can succeed with a
                              startup.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row gap-[392px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Elon Musk on How to Build the Future
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Two"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[136px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Elon Musk
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[11px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start pr-[124.45px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[80px] pl-[10px] pr-[13.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Technical
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[154px] pl-[10px] pr-[19.8px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Artificial Intelligence
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Startup Ideas
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[475px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Elon Musk discusses what high value ideas people
                              should work on today and what&#39;s important for
                              future of the humanity, including artificial
                              intelligence and genetics. And how to achieve
                              them.
                            </Text>
                          </div>
                          <div className="flex items-center justify-start outline outline-[1px] outline-gray_402 pb-[9px] md:w-[100%] w-[32%]">
                            <Img
                              src="images/img_maxresdefaultjpg_118x228.png"
                              className="h-[118px] md:h-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[465px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          A Guide to Seed Fundraising
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Three"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Geoff Ralston
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[256.45px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[93px] pl-[10px] pr-[15.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Fundraising
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[90px] pl-[10px] pr-[16.11px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Seed Round
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[78px] pl-[10px] pr-[13.72px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Investors
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          The most comprehensive guide on why, when and how to
                          raise money for your startup.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[288px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Fundraising Templates: Safe Financing Documents
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Four"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Carolynn Levy
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] sm:pr-[20px] pr-[28.07px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[127px] pl-[10px] pr-[18.41px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Fundraising Docs
                        </Button>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[694px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Y Combinator’s open-source simple agreement for future
                          equity. Four versions of the safe (simple agreement
                          for future equity) plus an optional side letter.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[357px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Build Your Seed Round Pitch Deck
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Five"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Aaron Harris
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[436.34px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[93px] pl-[10px] pr-[15.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Fundraising
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[83px] pl-[10px] pr-[14.19px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Pitch Deck
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[90px] pl-[10px] pr-[16.11px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Seed Round
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[713px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Y Combinator has helped thousands of founders create
                          pitch decks for their seed round fundraising. Here is
                          the YC Seed Deck Template that works.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[383px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Mark Zuckerberg on Building a Startup
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Six"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[135px] md:h-[260px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Mark Zuckerberg
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pr-[6.35px] py-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                              Founder Stories
                            </Button>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[473px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Mark Zuckerberg, co-founder & CEO of Facebook,
                              discusses his journey as a founder, including his
                              first idea of a course directory to the hardest
                              decisions he&#39;s had to make and more.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_128x228.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Two"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[215px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Set Up, Hire and Scale a Growth Strategy and
                          Team
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Seven"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Anu Hariharan
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[283.34px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            People
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.31px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Hiring
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[35px] pl-[10px] pr-[10.91px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            KPI
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.36px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Retention
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[722px] text-gray_912 text-left"
                          variant="body43"
                        >
                          What does a growth team do and why should we set up a
                          growth team? Growth experts on when to invest in
                          growth, what the right growth KPIs are, how to manage
                          growth, building a growth team how to get everyone in
                          the company to care about growth.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[342px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Biggest Mistakes First-Time Founders Make
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Eight"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[148px] h-[156px] md:h-[281px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[78%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Becoming a Founder
                                  </Text>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[99px] pl-[10px] pr-[15.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Co-Founders
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Startup Ideas
                                  </Button>
                                </div>
                                <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[130px] pl-[10px] pr-[17.89px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                  Problems to Solve
                                </Button>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[466px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Y Combinator CEO and Partner Michael Seibel on the
                              biggest mistakes he sees first-time founders make,
                              including not working on the right problems,
                              communication with co-founders, not launching and
                              more.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_1.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Three"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[369px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Split Equity Among Co-Founders
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Nine"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[260px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[86%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                    startup school
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[99px] pl-[10px] pr-[15.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Co-Founders
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    People
                                  </Button>
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[15.64px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body51"
                                  >
                                    Stock Equity
                                  </Text>
                                </div>
                                <Text
                                  className="bg-gray_309 font-thin justify-center pl-[10px] pr-[11.67px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                  variant="body49"
                                >
                                  Management
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[473px] text-gray_912 text-left"
                              variant="body44"
                            >
                              Founders often make mistakes when figuring out
                              equity for each co-founder. Equity should be split
                              equally because all the work is ahead of you.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_2.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Four"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[449px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Evaluate Startup Ideas
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Ten"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Kevin Hale
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start pr-[128.17px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                startup school
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Startup Ideas
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[117px] pl-[10px] pr-[17.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Getting Started
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[466px] text-gray_912 text-left"
                              variant="body43"
                            >
                              YC Partner Kevin Hale walks us through the process
                              of evaluating ideas and how founders should think
                              about their startups.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_3.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Five"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[416px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Design a Better Pitch Deck
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Eleven"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Kevin Hale
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[387.8px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[93px] pl-[10px] pr-[15.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Fundraising
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[83px] pl-[10px] pr-[14.19px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Pitch Deck
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[34px] pl-[10px] pr-[10.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            YC
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.59px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            YC Demo Day
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[713px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Investors invest in teams not slides. Your slides
                          should make your ideas more clear. Here are some
                          design principles to follow when creating your pitch
                          deck and story.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[344px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Find Product-Market Fit (SUS 2018)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Twelve"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[260px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          David Rusenko
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start sm:pr-[20px] pr-[25px] py-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                              Founder Stories
                            </Button>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[455px] text-gray_912 text-left"
                              variant="body43"
                            >
                              David Rusenko, Co-founder of Weebly (YC W07),
                              details the story of how Weebly developed one of
                              the most popular website creation and hosting
                              sites on the web today.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_4.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Six"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[425px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          What&#39;s Different About Unicorns?
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Thirteen"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[148px] h-[155px] md:h-[281px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Jessica Livingston
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[88%]">
                                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Founder Stories
                                  </Button>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.97px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Women Founders
                                  </Text>
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body51"
                                  >
                                    Founder Psychology
                                  </Text>
                                </div>
                                <Text
                                  className="bg-gray_309 font-thin justify-center pl-[10px] pr-[11.75px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                  variant="body49"
                                >
                                  Motivation
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[475px] text-gray_912 text-left"
                              variant="body44"
                            >
                              Jessica Livingston gives a talk on how to be not
                              just successful, but massively successful, and
                              points to women-founded billion dollar companies
                              as the next focus. Originally from Female Founders
                              Conference 2017.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_5.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Seven"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[530px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Plan an MVP
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Fourteen"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start pr-[20.89px] sm:pr-[20px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                startup school
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[117px] pl-[10px] pr-[17.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Getting Started
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Product
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[125px] pl-[10px] pr-[17.55px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Building Product
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[470px] text-gray_912 text-left"
                              variant="body43"
                            >
                              YC CEO and Partner Michael Seibel shares his
                              approach to building an MVP and getting your first
                              users as a pre-launch startup.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_6.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Eight"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[504px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Build the Future
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Fifteen"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[148px] h-[156px] md:h-[281px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Sam Altman
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-center justify-start md:w-[100%] w-[95%]">
                                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Becoming a Founder
                                  </Text>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[128px] pl-[10px] pr-[16px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    College Students
                                  </Button>
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body51"
                                  >
                                    Founder Psychology
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[99%]">
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.86px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Decision Making
                                  </Text>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[11.75px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Motivation
                                  </Text>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Startup Ideas
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[99px] pl-[10px] pr-[15.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Co-Founders
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[434px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Sam Altman gives advice to young people onhow to
                              pick something important to work on, who do you
                              work with, and what are the ways to accomplish big
                              things.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_7.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Nine"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col p-[15px] relative w-[100%]">
                      <div className="flex flex-col mx-[auto] md:w-[100%] w-[94%]">
                        <div className="flex sm:flex-col flex-row gap-[326px] sm:gap-[40px] items-start justify-between mx-[auto] self-stretch w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_912 text-left w-[auto]"
                            variant="body39"
                          >
                            A Conversation With Paul Graham (SUS 2018)
                          </Text>
                          <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                            <Img
                              src="images/img_bookmark_bluegray_102.svg"
                              className=""
                              alt="bookmark_Sixteen"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-thin mt-[-0.11px] text-gray_912 text-left w-[auto] z-[1]"
                          variant="body42"
                        >
                          Paul Graham and Geoff Ralston
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-[40px] gap-[96.81px] items-end justify-between mt-[-9.89px] mx-[auto] self-stretch w-[auto] z-[1]">
                        <div className="flex flex-col gap-[13px] items-start justify-start pb-[53px] pr-[13.19px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Founder Stories
                          </Button>
                          <Text
                            className="font-thin text-gray_912 text-left w-[auto]"
                            variant="body44"
                          >
                            YC President Geoff Ralston interviews YC Founder
                            Paul Graham.
                          </Text>
                        </div>
                        <div className="h-[128px] relative md:w-[100%] w-[32%]">
                          <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                          <Img
                            src="images/img_maxresdefaultjpg_8.png"
                            className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                            alt="maxresdefaultjp_Ten"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[465px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Building Product (SUS 2018)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Seventeen"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[158px] h-[166px] md:h-[291px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[85%]">
                                <div className="flex flex-row items-center justify-start md:w-[100%] w-[85%]">
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Becoming a Founder
                                  </Text>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] ml-[10px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Startup Ideas
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] ml-[10px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Product
                                  </Button>
                                </div>
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[125px] pl-[10px] pr-[17.55px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Building Product
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[42px] pl-[10px] pr-[10.63px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    MVP
                                  </Button>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Growth
                                  </Text>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[35px] pl-[10px] pr-[10.91px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    KPI
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Customers
                                  </Button>
                                </div>
                                <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[16.31px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                  Talking to Users
                                </Button>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[436px] text-gray_912 text-left"
                              variant="body43"
                            >
                              YC Partner Michael Seibel outlines how successful
                              startups think about building something people
                              want.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_9.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Eleven"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          How to Talk to Users
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Eighteen"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[135px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Eric Migicovsky
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[38.22px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                startup school
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Startup Ideas
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Product
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[125px] pl-[10px] pr-[17.55px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Building Product
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[443px] text-gray_912 text-left"
                              variant="body43"
                            >
                              YC Partner Eric Migicovsky shares a framework for
                              asking questions and collecting feedback from your
                              users.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_10.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Twelve"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[505px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Win (SUS 2018)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Nineteen"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Daniel Gross
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] pr-[6.53px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                              Founder Stories
                            </Button>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[473px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Daniel Gross, former YC Partner and Co-founder of
                              Cue (YC W10), shares his wisdom on how to survive
                              and thrive as a startup founder.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_11.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Thirteen"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[161px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Three Paths in the Tech Industry: Founder, Executive,
                          or Employee
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Twenty"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Michael Seibel
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[430.83px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Becoming a Founder
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[128px] pl-[10px] pr-[16px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            College Students
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          When thinking about tech as a career, there are three
                          paths. There are pros/cons and useful strategies for
                          each role.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[231px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          A Minimum Viable Product Is Not a Product, It&#39;s a
                          Process
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_TwentyOne"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Jim Brikman
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[333.48px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Product
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[125px] pl-[10px] pr-[17.55px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Building Product
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.59px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Experimentation
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[42px] pl-[10px] pr-[10.63px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            MVP
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[720px] text-gray_912 text-left"
                          variant="body43"
                        >
                          An MVP is a process that you repeat over and over
                          again: Identify your riskiest assumption, find the
                          smallest possible experiment to test that assumption,
                          and use the results of the experiment to course
                          correct.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[340px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Apply and Succeed at Y Combinator
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_TwentyTwo"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Dalton Caldwell
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start pr-[205.47px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                startup school
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[34px] pl-[10px] pr-[10.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                YC
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[106px] pl-[10px] pr-[15px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Applying to YC
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[467px] text-gray_912 text-left"
                              variant="body43"
                            >
                              YC Partner Dalton Caldwell gives insight into how
                              YC admissions works and what makes for a
                              successful YC experience.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_12.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Fourteen"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[474px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          COVID-19 Tips for Startups
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_TwentyThree"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[138px] h-[145px] md:h-[280px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Eric Migicovsky, Jared Friedman
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[259.03px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                startup school
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[96px] pl-[10px] pr-[15.5px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Staying Alive
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[468px] text-gray_912 text-left"
                              variant="body43"
                            >
                              YC Partners Eric Migicovsky and Jared Friedman
                              discuss strategies for navigating COVID as an
                              early stage startup. Questions from their
                              discussion came from the Startup School forum. For
                              more information about Startup School, visit
                              https://www.startupschool.org
                            </Text>
                          </div>
                          <div className="h-[128px] md:h-[137px] mb-[9px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_13.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Fifteen"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[484px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Pitch Your Startup
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_TwentyFour"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[138px] h-[146px] md:h-[280px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Kevin Hale
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[97.69px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                startup school
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[117px] pl-[10px] pr-[17.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Getting Started
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Growth
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[51px] pl-[10px] pr-[10.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Press
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[476px] text-gray_912 text-left"
                              variant="body43"
                            >
                              In this lecture, YC Partner Kevin Hale goes over
                              how to package up your idea and communicate it to
                              an investor. He shares his tips on how to craft
                              your pitch in a clear and concise way that
                              effectively grabs your audience&#39;s attention.
                            </Text>
                          </div>
                          <div className="h-[128px] md:h-[137px] mb-[9px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_14.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Sixteen"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[424px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Launch (Again and Again)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_TwentyFive"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Kat Manalac
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start pr-[148.23px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                startup school
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Product
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[125px] pl-[10px] pr-[17.55px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Building Product
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[425px] text-gray_912 text-left"
                              variant="body43"
                            >
                              YC Partner Kat Manalac presents on how startups
                              should think about launching and why you should do
                              it repeatedly.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_15.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Seventeen"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[474px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Prioritize Your Time
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_TwentySix"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[135px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Adora Cheung
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[11px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[69.33px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                startup school
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Growth
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Product
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[125px] pl-[10px] pr-[17.55px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Building Product
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[460px] text-gray_912 text-left"
                              variant="body44"
                            >
                              YC Partner Adora Cheung shares her framework for
                              how founders can efficiently make use of their
                              time. She covers ways to identify and prioritize
                              tasks, in addition to how you can measure their
                              impact on your company.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_16.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Eighteen"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[551px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          All About Pivoting
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_TwentySeven"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Dalton Caldwell
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[11px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[38.22px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                startup school
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Startup Ideas
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Product
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[125px] pl-[10px] pr-[17.55px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Building Product
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[479px] text-gray_912 text-left"
                              variant="body43"
                            >
                              YC Partner and Head of Admissions Dalton Caldwell
                              gives us the rundown on pivoting and shares his
                              advice on how founders should think about it for
                              their startups.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_17.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Nineteen"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col p-[15px] relative w-[100%]">
                      <div className="flex flex-col mx-[auto] md:w-[100%] w-[94%]">
                        <div className="flex flex-row sm:gap-[40px] gap-[533px] items-start justify-between mx-[auto] self-stretch w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_912 text-left w-[auto]"
                            variant="body39"
                          >
                            Growth for Startups
                          </Text>
                          <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                            <Img
                              src="images/img_bookmark_bluegray_102.svg"
                              className=""
                              alt="bookmark_TwentyEight"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-thin mt-[-0.11px] text-gray_912 text-left w-[auto] z-[1]"
                          variant="body42"
                        >
                          Gustaf Alströmer
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[15px] items-end justify-start mt-[-9.89px] mx-[auto] self-stretch w-[auto] z-[1]">
                        <div className="flex flex-col gap-[13px] items-start justify-start pb-[11px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[69.33px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                              startup school
                            </Button>
                            <Text
                              className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                              variant="body49"
                            >
                              Growth
                            </Text>
                            <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                              Product
                            </Button>
                            <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[125px] pl-[10px] pr-[17.55px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                              Building Product
                            </Button>
                          </div>
                          <Text
                            className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[476px] text-gray_912 text-left"
                            variant="body43"
                          >
                            YC Partner and growth expert Gustaf Alstromer talks
                            about how to measure product market fit, how to
                            decide on a growth channel, metrics that lie about
                            PMF and other mechanics of growth for startups.
                          </Text>
                        </div>
                        <div className="h-[128px] relative md:w-[100%] w-[32%]">
                          <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                          <Img
                            src="images/img_maxresdefaultjpg_18.png"
                            className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                            alt="maxresdefaultjp_Twenty"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          How to Set KPIs and Goals (SUS 2019)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_TwentyNine"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[135px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Adora Cheung
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start pr-[142.38px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                startup school
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[88px] pl-[10px] pr-[14.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Early Stage
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Growth
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[35px] pl-[10px] pr-[10.91px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                KPI
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[455px] text-gray_912 text-left"
                              variant="body44"
                            >
                              YC Partner Adora Cheung covers the importance of
                              defining and tracking KPIs to understand how
                              effectively your startup is reaching its goals.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_19.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_TwentyOne"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[512px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Work Together
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Thirty"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Kevin Hale
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[11px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start pr-[109.27px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                startup school
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[99px] pl-[10px] pr-[15.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Co-Founders
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                People
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[66px] pl-[10px] pr-[10.64px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Culture
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[454px] text-gray_912 text-left"
                              variant="body43"
                            >
                              YC Partner Kevin Hale talks about the importance
                              of building a successful working relationship with
                              your cofounders, and setting up processes to
                              optimize for the strengths of your team.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_20.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_TwentyTwo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[477px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Hiring your first employees
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_ThirtyOne"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Lindsay Amos
                      </Text>
                      <div className="flex flex-row gap-[10px] items-start justify-start mb-[14px] md:ml-[0] ml-[10px] pr-[10px] pt-[10px] self-stretch w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          People
                        </Button>
                        <Text
                          className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.31px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                          variant="body49"
                        >
                          Hiring
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[346px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Vanta and Zapier on disciplined fundraising
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_ThirtyTwo"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Lindsay Amos
                      </Text>
                      <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] mb-[14px] min-w-[93px] md:ml-[0] ml-[10px] mt-[8px] pl-[10px] pr-[15.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                        Fundraising
                      </Button>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          How To Sell Your Startup
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_ThirtyThree"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Bilal Mahmood
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start pr-[181.44px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body51"
                          >
                            Founder Psychology
                          </Text>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.86px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Decision Making
                          </Text>
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[10.64px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Closing Down
                          </Text>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Open-source protocol now for anyone who may be
                          navigating an acquisition for the first time
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[442px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Planning and Managing Layoffs
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_ThirtyFour"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        David Ulevitch
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex md:flex-col flex-row gap-[10px] items-start justify-start pr-[10px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[96px] pl-[10px] pr-[15.5px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Staying Alive
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[11.67px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Management
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[84px] pl-[10px] pr-[14px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Leadership
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            People
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[126px] pl-[10px] pr-[16.97px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Human Resources
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[82px] pl-[10px] pr-[14.77px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Employees
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Best practices and things to think through as you do a
                          layoff
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col p-[15px] relative w-[100%]">
                      <div className="flex flex-col mx-[auto] md:w-[100%] w-[94%]">
                        <div className="flex flex-row sm:gap-[40px] gap-[461px] items-start justify-between mx-[auto] self-stretch w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_912 text-left w-[auto]"
                            variant="body39"
                          >
                            Operating during a downturn
                          </Text>
                          <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                            <Img
                              src="images/img_bookmark_bluegray_102.svg"
                              className=""
                              alt="bookmark_ThirtyFive"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-thin mt-[-0.11px] text-gray_912 text-left w-[auto] z-[1]"
                          variant="body42"
                        >
                          David Sacks and Jeff Fluhr
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[15px] items-end justify-start mt-[-9.89px] mx-[auto] self-stretch w-[auto] z-[1]">
                        <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] self-stretch sm:w-[100%] w-[auto]">
                          <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[67.06px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                              Business Models
                            </Button>
                            <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[96px] pl-[10px] pr-[15.5px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                              Staying Alive
                            </Button>
                            <Text
                              className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                              variant="body49"
                            >
                              Finance
                            </Text>
                            <Text
                              className="bg-gray_309 font-thin justify-center pl-[10px] pr-[11.67px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                              variant="body49"
                            >
                              Management
                            </Text>
                          </div>
                          <Text
                            className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[476px] text-gray_912 text-left"
                            variant="body44"
                          >
                            Candid discussion with David Sacks and Jeff Fluhr on
                            public markets, venture capital and historic
                            outcomes of economic downturns from Craft Ventures
                          </Text>
                        </div>
                        <div className="h-[128px] relative md:w-[100%] w-[32%]">
                          <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                          <Img
                            src="images/img_maxresdefaultjpg_21.png"
                            className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                            alt="maxresdefaultjp_TwentyThree"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[301px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Save your Startup During an Economic Downturn
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_ThirtySix"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[148px] h-[156px] md:h-[281px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Dalton Caldwell and Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-center justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[99%]">
                                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Finance
                                  </Text>
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body51"
                                  >
                                    Founder Psychology
                                  </Text>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.86px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Decision Making
                                  </Text>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[11.67px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Management
                                  </Text>
                                </div>
                                <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[96px] pl-[10px] pr-[15.5px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                  Staying Alive
                                </Button>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[455px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Dalton Caldwell and Michael Seibel discuss Paul
                              Graham&#39;s essay &quot;Default Alive or Default
                              Dead.&quot; They share strategies to cut your
                              company&#39;s burn rate and keep your startup
                              alive to see another day.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_22.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_TwentyFour"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[250px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          The road to nirvana Or how to figure out your B2B GTM
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_ThirtySeven"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Caroline Clark
                      </Text>
                      <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start mb-[14px] md:ml-[0] ml-[10px] pr-[10px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Business Models
                        </Button>
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[63px] pl-[10px] pr-[13.42px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Pricing
                        </Button>
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Customers
                        </Button>
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[16.31px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Talking to Users
                        </Button>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[244px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Growth+Sales: The New Era of Enterprise Go-to-Market
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_ThirtyEight"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Peter Lauten, Martin Casado
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[295.59px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Business Models
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[39px] pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[74px] pl-[10px] pr-[11.23px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B Sales
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[695px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Exploring hidden traps to avoid with “growth+sales”
                          (the bottom-up growth motion eventually layered with
                          top-down sales).
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[253px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to pick the right GTM motion to reach $100M ARR
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_ThirtyNine"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        John Vrionis
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[475.64px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[39px] pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Business Models
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[717px] text-gray_912 text-left"
                          variant="body43"
                        >
                          An outline of the three most common go-to-market (GTM)
                          motions, their components, and how they will impact
                          the path to $100M ARR.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Success and Failure at Pebble
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Forty"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Eric Migicovsky
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[315.86px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.92px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Hardware
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Founder Stories
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Adapted from the founder of Pebble&#39;s talk on the
                          importance of learning from failure
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[237px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to make your co-founder matching profile stand out
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FortyOne"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Katherine Bernstein
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] sm:pr-[20px] pr-[26.08px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[99px] pl-[10px] pr-[15.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Co-Founders
                        </Button>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Learn how to improve your co-founder matching profile
                          to improve your match rate and avoid missed
                          connections.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[508px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Demand driving supply
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FortyTwo"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Brian Rothenberg and Lenny Rachitsky
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[445.14px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[103px] pl-[10px] pr-[15.14px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Marketplaces
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[675px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Demand driving supply: The little-understood growth
                          loop behind a surprising number of iconic
                          billion-dollar companies
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col gap-[1px] items-start justify-start sm:px-[20px] px-[25px] py-[15px] self-stretch md:w-[100%] w-[auto]">
                      <div className="flex flex-row gap-[409px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How people discover new products
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FortyThree"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin text-gray_912 text-left w-[auto]"
                        variant="body43"
                      >
                        Lenny Rachitsky
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="flex items-center justify-start pr-[10px] pt-[10px] w-[100%]">
                          <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[99%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Growth
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.38px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Marketing
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                SEO
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.64px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Social Media
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Advertising
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin pl-[10px] pr-[9.42px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Content Marketing
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Lead Generation
                              </Text>
                            </div>
                            <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[77px] pl-[10px] pr-[12.89px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                              Referrals
                            </Button>
                          </div>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          The seven places we learn about new stuff
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col gap-[1px] items-start justify-start sm:px-[20px] px-[25px] py-[15px] self-stretch md:w-[100%] w-[auto]">
                      <div className="flex sm:flex-col flex-row gap-[333px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to know if you&#39;ve got product-market fit
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FortyFour"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin text-gray_912 text-left w-[auto]"
                        variant="body43"
                      >
                        Lenny Rachitsky
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[491.03px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[136px] pl-[10px] pr-[18.16px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Product Market Fit
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[699px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Insights from Marc Andreessen, Elad Gil, Steve Blank,
                          Andy Rachleff, Michael Seibel, and many more on
                          product-market fit
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col gap-[1px] items-start justify-start sm:px-[20px] px-[25px] py-[15px] self-stretch md:w-[100%] w-[auto]">
                      <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          How today&#39;s fastest growing B2B businesses found
                          their first ten customers
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FortyFive"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin text-gray_912 text-left w-[auto]"
                        variant="body43"
                      >
                        Lenny Rachitsky
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[73.86px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[39px] pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Founder Stories
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[74px] pl-[10px] pr-[11.23px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B Sales
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Lessons from Figma, Stripe, Airtable, Shopify, Carta,
                          Gusto and many many more
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col gap-[1px] items-start justify-start sm:px-[20px] px-[25px] py-[15px] self-stretch md:w-[100%] w-[auto]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          The Transition: Layering sales onto a bottom-up
                          self-serve product
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FortySix"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin text-gray_912 text-left w-[auto]"
                        variant="body43"
                      >
                        Lenny Rachitsky
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[569.86px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[74px] pl-[10px] pr-[11.23px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B Sales
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[718px] text-gray_912 text-left"
                          variant="body43"
                        >
                          I have a self-serve bottom-up SaaS product, and
                          I&#39;m trying to decide if, when, and how I should
                          hire my first full-time salesperson.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col gap-[1px] items-start justify-start sm:px-[20px] px-[25px] py-[15px] self-stretch md:w-[100%] w-[auto]">
                      <div className="flex flex-row sm:gap-[40px] gap-[509px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Content-driven growth
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FortySeven"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin text-gray_912 text-left w-[auto]"
                        variant="body43"
                      >
                        Lenny Rachitsky
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start pr-[184.3px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[9.42px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Content Marketing
                          </Text>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Advice from HubSpot, Ahrefs, Intercom, Slidebean, and
                          Webflow
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col gap-[1px] items-start justify-start sm:px-[20px] px-[25px] py-[15px] self-stretch md:w-[100%] w-[auto]">
                      <div className="flex flex-row sm:gap-[40px] gap-[467px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          What is good monthly churn
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FortyEight"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin text-gray_912 text-left w-[auto]"
                        variant="body43"
                      >
                        Lenny Rachitsky
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[48.36px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Business Models
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[115px] pl-[10px] pr-[17.8px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Unit Economics
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[63px] pl-[10px] pr-[13.42px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Pricing
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.36px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Retention
                          </Text>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Benchmarks for good and great monthly churn, broken
                          down by segment and price point
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col gap-[1px] items-start justify-start sm:px-[20px] px-[25px] py-[15px] self-stretch md:w-[100%] w-[auto]">
                      <div className="flex md:flex-col flex-row gap-[2.92px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal md:max-w-[100%] max-w-[691px] not-italic text-gray_912 text-left"
                          variant="body37"
                        >
                          How to Kickstart and Scale a Marketplace Business –
                          Phase 1: Crack the Chicken-and-Egg Problem
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex items-center justify-center p-[7px] rounded-[4px] w-[4%]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FortyNine"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin text-gray_912 text-left w-[auto]"
                        variant="body43"
                      >
                        Lenny Rachitsky
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start sm:pr-[20px] pr-[29.71px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[103px] pl-[10px] pr-[15.14px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Marketplaces
                        </Button>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[693px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Insights from 17 of today&#39;s biggest marketplaces,
                          including Airbnb, DoorDash, Thumbtack, Etsy, Uber and
                          many more
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          50 Shades of Marketplaces
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Fifty"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Jeff Fluhr
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] pr-[7.08px] pt-[10px] self-stretch w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[103px] pl-[10px] pr-[15.14px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Marketplaces
                        </Button>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Defining all types of marketplaces
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[175px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Co-Founder Mistakes That Kill Companies & How To Avoid
                          Them
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FiftyOne"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Dalton Caldwell and Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[95.72px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Becoming a Founder
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[99px] pl-[10px] pr-[15.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Co-Founders
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Founder Stories
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[464px] text-gray_912 text-left"
                              variant="body43"
                            >
                              In the first episode of Rookie Mistakes, Dalton
                              Caldwell and Michael Seibel discuss co-founder
                              mistakes.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_23.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_TwentyFive"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[311px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          YC Founders Made These Fundraising Mistakes
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FiftyTwo"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[138px] h-[146px] md:h-[280px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Dalton Caldwell and Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start pr-[12.91px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Becoming a Founder
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Founder Stories
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[93px] pl-[10px] pr-[15.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Fundraising
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[78px] pl-[10px] pr-[13.72px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Investors
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[471px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Dalton and Michael talk about fundraising
                              mistakes. To create Rookies Mistakes we asked YC
                              founders: Is there a simple fact you wish you knew
                              when you started your company or a rookie mistake
                              you wish you could take back?
                            </Text>
                          </div>
                          <div className="h-[128px] md:h-[137px] mb-[9px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_24.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_TwentySix"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[348px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Understanding Investor Terms & Incentives
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FiftyThree"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[169px] h-[177px] md:h-[302px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Dalton Caldwell and Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[95%]">
                                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Becoming a Founder
                                  </Text>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[93px] pl-[10px] pr-[15.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Fundraising
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[78px] pl-[10px] pr-[13.72px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Investors
                                  </Button>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[11.69px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Negotiation
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] w-[49%]">
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Founder Stories
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[86px] pl-[10px] pr-[15.3px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Valuations
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[474px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Dalton Caldwell and Michael Seibel talk about
                              investor terms and incentives. To create Rookies
                              Mistakes we asked YC founders: Is there a simple
                              fact you wish you knew when you started your
                              company or a rookie mistake you wish you could
                              take back?
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_25.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_TwentySeven"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[429px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Should You Follow Your Passion?
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FiftyFour"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[148px] h-[156px] md:h-[281px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Dalton Caldwell and Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[86%]">
                                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Becoming a Founder
                                  </Text>
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body51"
                                  >
                                    Founder Psychology
                                  </Text>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[11.75px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Motivation
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-start md:w-[100%] w-[92%]">
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Founder Stories
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] ml-[10px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Startup Ideas
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[130px] ml-[10px] pl-[10px] pr-[17.89px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Problems to Solve
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[454px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Dalton Caldwell and Michael Seibel talk about
                              solutions in search of a problem, whether or not
                              to follow your passion, how to figure out what to
                              work on, and how to motivate yourself.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_26.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_TwentyEight"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[204px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Rookie Mistakes: Successful Founders Are OK With
                          Rejection
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FiftyFive"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[138px] h-[146px] md:h-[280px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Dalton Caldwell and Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start pr-[135.81px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Customers
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[16.31px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Talking to Users
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Founder Stories
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[480px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Dalton Caldwell and Michael Seibel on the
                              importance of talking to your users, why
                              successful founders are ok with rejection from
                              potential customers, and how protecting your ego
                              by not talking to your users can kill your
                              startup.
                            </Text>
                          </div>
                          <div className="h-[128px] md:h-[137px] mb-[9px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_27.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_TwentyNine"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[205px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Rookie Mistakes: Where Do Great Startup Ideas Come
                          From?
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FiftySix"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Dalton Caldwell and Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[11px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start pr-[110.03px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Founder Stories
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Startup Ideas
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[130px] pl-[10px] pr-[17.89px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Problems to Solve
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[469px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Dalton Caldwell and Michael Seibel talk about
                              where the ideas for Airbnb, Coinbase, and Stripe
                              came from. Then they discuss what you can learn
                              from these founders.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_28.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Thirty"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[186px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Rookie Mistakes: Simple Products That Became Big
                          Companies
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FiftySeven"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Dalton Caldwell and Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start pr-[123.23px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Becoming a Founder
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Founder Stories
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Product
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[448px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Dalton Caldwell and Michael Seibel talk about
                              OpenSea, Gusto, and the importance of building
                              simple products that solve a real problem.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_29.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_ThirtyOne"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[107px] md:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Rookie Mistakes: How To Change The World? Get The
                          Small Things Right
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FiftyEight"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Dalton Caldwell and Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[11px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[224.03px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Becoming a Founder
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Startup Ideas
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[454px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Dalton Caldwell and Michael Seibel talk about the
                              importance of understanding incentives and doing
                              research when it comes to building a
                              world-changing startup.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_30.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_ThirtyTwo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          The Gross Margin Problem: Lessons for Tech-Enabled
                          Startups
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_FiftyNine"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        David Sacks
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start pr-[10px] pt-[10px] self-stretch w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Business Models
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[115px] pl-[10px] pr-[17.8px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Unit Economics
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Finance
                          </Text>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Measuring gross margins
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Freemium vs Free Trial: Which is Better for SaaS
                          Startups?
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Sixty"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        David Sacks
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start pr-[10px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Business Models
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[63px] pl-[10px] pr-[13.42px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Pricing
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[39px] pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[74px] pl-[10px] pr-[11.23px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B Sales
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Evaluating which model is better — Freemium or Free
                          Trial
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[111px] md:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Enterprises vs SMBs: Who’s the Better Customer for B2B
                          SaaS Startups?
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SixtyOne"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        David Sacks
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[424.45px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[39px] pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[74px] pl-[10px] pr-[11.23px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B Sales
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[650px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Advice for B2B SaaS startups about deciding who to
                          make their initial customer: small businesses (SMBs),
                          enterprises, or something in between (mid-market).
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row gap-[399px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          BlitzFail: How Not to Go Off the Rails
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SixtyTwo"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        David Sacks
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex items-center justify-start pr-[10px] pt-[10px] w-[100%]">
                          <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Business Models
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[115px] pl-[10px] pr-[17.8px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Unit Economics
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[96px] pl-[10px] pr-[15.5px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Staying Alive
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Customers
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.36px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Retention
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Finance
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[81px] pl-[10px] pr-[13.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Cash Burn
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] w-[20%]">
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                People
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[66px] pl-[10px] pr-[10.64px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Culture
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Underlying causes and some common themes and patterns
                          for companies that fail.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[125px] md:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          The Burn Multiple: How Startups Should Think About
                          Capital Efficiency
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SixtyThree"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        David Sacks
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex md:flex-col flex-row gap-[10px] items-start justify-start pr-[10px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Business Models
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.06px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth Stage
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[136px] pl-[10px] pr-[18.16px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Product Market Fit
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Finance
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[81px] pl-[10px] pr-[13.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Cash Burn
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          This post provides a framework for how to think about
                          capital efficiency.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[457px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Measuring SaaS Engagement
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SixtyFour"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        David Sacks
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start pr-[104.2px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[39px] pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.06px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth Stage
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          How to measure engagement as a metric in B2B startups.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[146px] md:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Individuals or Teams: Who’s the Better Customer for
                          SaaS Products?
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SixtyFive"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        David Sacks
                      </Text>
                      <Text
                        className="font-thin leading-[21.00px] md:ml-[0] ml-[10px] mt-[12px] text-gray_912 text-left sm:w-[100%] w-[94%]"
                        variant="body43"
                      >
                        Evaluating the common dilemma for SaaS founders: whether
                        to focus on individual users or teams as the primary
                        customer
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          The SaaS Metrics That Matter
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SixtySix"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        David Sacks and Ethan Ruby
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start pr-[10px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[39px] pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.06px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth Stage
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[88px] pl-[10px] pr-[14.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Early Stage
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.36px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Retention
                          </Text>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[35px] pl-[10px] pr-[10.91px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            KPI
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          This post breaks down those key performance indicators
                          (KPIs) for SaaS companies.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[324px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Curated List of Go-To-Market GTM Resources
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SixtySeven"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Ninan Thampy
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start pr-[10px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[39px] pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[81px] pl-[10px] pr-[14.95px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Consumer
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.06px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth Stage
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[88px] pl-[10px] pr-[14.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Early Stage
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.38px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Marketing
                          </Text>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          A list of links to go-to-market advice
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[204px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Part 1: WTF is GTMF + PLG? Yes, Go-To-Market Fit is a
                          Thing
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SixtyEight"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Tom Humphrey
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[346.31px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[88px] pl-[10px] pr-[14.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Early Stage
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.06px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth Stage
                          </Text>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.38px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Marketing
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[706px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Part 1 of a four part series that dives deep into
                          go-to-market (GTM) and product-led growth (PLG),
                          adapted from a recent Blackbird Founder Academy
                          workshop
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[521px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Go to Market Nirvana
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SixtyNine"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Caroline Clark
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start pr-[10px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[88px] pl-[10px] pr-[14.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Early Stage
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[64px] pl-[10px] pr-[11.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Launch
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.38px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Marketing
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[39px] pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Advice for go to market strategies.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col gap-[1px] items-start justify-start sm:px-[20px] px-[25px] py-[15px] self-stretch md:w-[100%] w-[auto]">
                      <div className="flex flex-row sm:gap-[40px] gap-[510px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          What is good retention
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Seventy"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin text-gray_912 text-left w-[auto]"
                        variant="body43"
                      >
                        Lenny Rachitsky
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start self-stretch w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start pr-[16.58px] pt-[10px] self-stretch w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.36px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Retention
                          </Text>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Defining and tracking retention
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[468px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Startups for Students Guide
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SeventyOne"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Tamanna Khemani and Kat Mañalac
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[281.09px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Becoming a Founder
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[128px] pl-[10px] pr-[16px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            College Students
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[19.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body51"
                          >
                            Working at a Startup
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[709px] text-gray_912 text-left"
                          variant="body43"
                        >
                          The guide is informed by hundreds of hours of talks,
                          blog posts and essays we&#39;ve written for students
                          who are interested in starting or working at startups.
                          We talk about why (and why not) you should start a
                          startup, what to do in college if you&#39;re
                          interested in starting a company, and how to choose
                          which startup to work for.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[131px] md:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Does co-founder matching work? It did for these three
                          YC companies.
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SeventyTwo"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Catheryn Li
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[494.67px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Founder Stories
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[99px] pl-[10px] pr-[15.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Co-Founders
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[721px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Does co-founder matching work? It did for these three
                          YC companies. Read about how the founders of Seer,
                          Sequin, and Kiwi Biosciences used YC’s co-founder
                          matching platform to complete their founding team.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[464px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Weave (W14) is Going Public
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SeventyThree"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Geoff Ralston
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] pr-[8.33px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Founder Stories
                        </Button>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[714px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Today, Weave, which was part of YC’s W14 batch, is
                          going public. Brandon, Jared, and Clint worked
                          incredibly hard, stayed the course and, as a result,
                          Weave has become an extraordinary success.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col p-[15px] relative w-[100%]">
                      <div className="flex flex-col mx-[auto] md:w-[100%] w-[94%]">
                        <div className="flex flex-row sm:gap-[40px] gap-[419px] items-start justify-between mx-[auto] self-stretch w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_912 text-left w-[auto]"
                            variant="body39"
                          >
                            Embark Trucks’ (W16) Road to IPO
                          </Text>
                          <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                            <Img
                              src="images/img_bookmark_bluegray_102.svg"
                              className=""
                              alt="bookmark_SeventyFour"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-thin mt-[-0.11px] text-gray_912 text-left w-[auto] z-[1]"
                          variant="body42"
                        >
                          Geoff Ralston
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[15px] items-end justify-start mt-[-9.89px] mx-[auto] self-stretch w-[auto] z-[1]">
                        <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] sm:pr-[20px] pr-[32.83px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Founder Stories
                          </Button>
                          <Text
                            className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[447px] text-gray_912 text-left"
                            variant="body43"
                          >
                            Today, Embark Trucks, once a startup in YC’s W16
                            batch, is going public. Congrats to Alex, Brandon
                            and the entire Embark team.
                          </Text>
                        </div>
                        <div className="h-[128px] relative md:w-[100%] w-[32%]">
                          <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                          <Img
                            src="images/img_maxresdefaultjpg_31.png"
                            className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                            alt="maxresdefaultjp_ThirtyThree"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row gap-[385px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          What do people want in a co-founder?
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SeventyFive"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Catheryn Li, Katherine Bernstein
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] pr-[12.88px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[99px] pl-[10px] pr-[15.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Co-Founders
                        </Button>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[710px] text-gray_912 text-left"
                          variant="body44"
                        >
                          Since launching the Co-Founder Matching platform 3
                          months ago, we have seen 33,000 co-founder matches
                          made so far. We now have enough data to identify some
                          interesting trends among our co-founder profiles and
                          matches.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[521px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Gitlab from YC to IPO
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SeventySix"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Ali Rowghani, Simon Lu
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] sm:pr-[20px] pr-[31.97px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Founder Stories
                        </Button>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[691px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Congratulations Sid Sijbrandij, Dmitriy Zaporozhets,
                          and the entire GitLab Inc. team on today’s IPO! GitLab
                          Inc., from YC’s Winter 2015 batch, is YC’s first
                          open-source company to go public, the first alum of
                          the YC Growth Program to go public, and one of the
                          earliest investments made by the YC Continuity Fund.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[458px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          What Matters: Guide to OKRs
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SeventySeven"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        What Matters
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[479.33px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Business Models
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[35px] pl-[10px] pr-[10.91px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            KPI
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[711px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Resources to help guide you through objectives and key
                          results, based on John Doerr&#39;s bestselling book
                          &quot;Measure What Matters.&quot;
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[341px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Ginkgo Bioworks (S14) is going public today
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SeventyEight"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Jared Friedman
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[467.97px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Founder Stories
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.97px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Women Founders
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[702px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Ginkgo Bioworks is the first biotech company YC
                          funded, and today they are going public. To celebrate
                          their IPO, here&#39;s the story of how Ginkgo Bioworks
                          ended up in YC, and what their journey was like as
                          YC&#39;s first biotech startup.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[439px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Amplitude (W12) is going public
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_SeventyNine"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Geoff Ralston
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] sm:pr-[20px] md:pr-[40px] pr-[60.27px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Founder Stories
                        </Button>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[662px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Today, Amplitude, which was part of YC’s W12 batch, is
                          going public. Their story of grit, determination, and
                          creativity, is an epic one.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[320px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          One Order of Operations for Starting a Startup
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Eighty"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[281px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-[40px] gap-[96.77px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[53px] pr-[10.23px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                              Founder Stories
                            </Button>
                            <Text
                              className="font-thin text-gray_912 text-left w-[auto]"
                              variant="body44"
                            >
                              How to come up with startup ideas and get started
                              as a founder.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_32.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_ThirtyFour"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col gap-[1px] items-start justify-start sm:px-[20px] px-[25px] py-[15px] self-stretch md:w-[100%] w-[auto]">
                      <div className="flex sm:flex-col flex-row gap-[377px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Venture Debt 101: Basics and Approach
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_EightyOne"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin text-gray_912 text-left w-[auto]"
                        variant="body43"
                      >
                        Jon Levy
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[551.73px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[93px] pl-[10px] pr-[15.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Fundraising
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Finance
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[705px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Venture Debt 101: YC&#39;s Jon Levy talks about
                          venture debt -- what it is, the benefits and risks,
                          and how to approach taking it on. He also highlights
                          Brex&#39;s new venture debt offering.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[553px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Modeling Dilution
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_EightyTwo"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Pulley
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[336.64px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Becoming a Founder
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[52px] pl-[10px] pr-[11.41px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            SAFEs
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            People
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[15.64px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body51"
                          >
                            Stock Equity
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[721px] text-gray_912 text-left"
                          variant="body43"
                        >
                          From the Pulley blog, model equity so you understand:
                          How much of your company do you actually own? How much
                          will you own if you are acquired or IPO?
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start sm:px-[20px] px-[25px] py-[15px] self-stretch md:w-[100%] w-[auto]">
                      <div className="flex sm:flex-col flex-row gap-[340px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Entrepreneurial Seductions and Distractions
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_EightyThree"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin text-gray_912 text-left w-[auto]"
                        variant="body41"
                      >
                        Elad Gil
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[436.42px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body51"
                          >
                            Founder Psychology
                          </Text>
                          <Text
                            className="bg-gray_309 font-thin justify-center px-[10px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Time Management
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[695px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Elad Gil on common entrepreneurial distractions:
                          speaker events, excessive networking, press and PR,
                          corporate development, unnecessary fundraising
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Emmett Shear&#39;s Twitter thread of startup advice
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_EightyFour"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Emmett Shear
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[264.09px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Becoming a Founder
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          In honor of Twitch&#39;s 10th anniversary, Emmett
                          Shear tweets a list of his essential startup advice.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[257px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          The Startup Guide To Managing Your Email Reputation
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_EightyFive"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        John Egan
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[396.63px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            SEO
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[80px] pl-[10px] pr-[13.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Technical
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.61px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Engineering
                          </Text>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          How to set up your email DNS records, domains and IP
                          pools, and email list management to avoid the spam
                          folder.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[483px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Startup Growth Calculator
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_EightySix"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Trevor Blackwell
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[210.78px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[96px] pl-[10px] pr-[15.5px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Staying Alive
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[10.64px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Closing Down
                          </Text>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Finance
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[81px] pl-[10px] pr-[13.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Cash Burn
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Interactive calculator that will tell you whether, on
                          its current trajectory, your startup lives or dies.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[619px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Valuation
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_EightySeven"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Fred Wilson
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] pr-[16.63px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[86px] pl-[10px] pr-[15.3px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Valuations
                        </Button>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Fred Wilson&#39;s 2004 post on the concept of
                          valuation and determining the value of a business.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[427px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Elements of Enduring Companies
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_EightyEight"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Sequoia Capital
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[14px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        What a top VC firm looks for in the companies they fund.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[512px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Start a Startup
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_EightyNine"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[16px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        Build something users want, and spend less than you
                        make.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Later-stage Advice (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_Ninety"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Sam Altman
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex items-center justify-start pr-[10px] pt-[10px] w-[100%]">
                          <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[12.84px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Board Management
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[11.67px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Management
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[84px] pl-[10px] pr-[14px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Leadership
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body51"
                              >
                                Founder Psychology
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin justify-center px-[10px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Time Management
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                People
                              </Button>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[88%]">
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[126px] pl-[10px] pr-[16.97px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Human Resources
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin justify-center md:ml-[0] ml-[10px] pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Finance
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin justify-center md:ml-[0] ml-[10px] pl-[10px] pr-[9.63px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Legal
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin justify-center md:ml-[0] ml-[10px] pl-[10px] pr-[9.31px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Hiring
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin justify-center md:ml-[0] ml-[10px] pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Growth
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin md:ml-[0] ml-[10px] pl-[10px] pr-[9.42px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Content Marketing
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[51px] md:ml-[0] ml-[10px] pl-[10px] pr-[10.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Press
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Sam Altman wraps up the 2014 How to Start a Startup
                          course with advice for later stage startups.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[380px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to be a Great Founder (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_NinetyOne"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Reid Hoffman
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] sm:pr-[20px] pr-[23.03px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                          variant="body49"
                        >
                          Becoming a Founder
                        </Text>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Reid Hoffman, founder of LinkedIn and Partner at
                          Greylock Ventures, talks about what it takes to be a
                          great founder.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Competition is For Losers (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_NinetyTwo"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Peter Thiel
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] pr-[15.67px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.63px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                          variant="body49"
                        >
                          Competition
                        </Text>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Peter Thiel, founder of Paypal and Palantir, discusses
                          business strategy and monopoly theory.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Ideas, Products, Teams and Execution Part II (SUS
                          2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_NinetyThree"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Sam Altman
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                          <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[88%]">
                            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[99px] pl-[10px] pr-[15.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Co-Founders
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                People
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.31px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Hiring
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin pl-[10px] pr-[15.64px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body51"
                              >
                                Stock Equity
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[103px] pl-[10px] pr-[16.95px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Team Building
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[11.67px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Management
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.45px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                CEO
                              </Text>
                            </div>
                            <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[84px] pl-[10px] pr-[14px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                              Leadership
                            </Button>
                          </div>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Sam Altman talks about building a team and execution
                          in Lecture 2 of 2014&#39;s How to Start a Startup
                          course.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[451px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Hiring and Culture (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_NinetyFour"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Patrick Collison, John Collison, Ben Silbermann
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[493.2px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            People
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.31px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Hiring
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[92px] pl-[10px] pr-[14.13px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Agriculture
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[712px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Sam Altman leads a Q&A with the founders of Stripe --
                          John and Patrick Collison, and Ben Silbermann, the
                          founder of Pinterest. The panel talks about how they
                          thought about hiring and building culture in the early
                          days of their companies.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[499px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Talk to Investors
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_NinetyFive"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Michael Seibel
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[16px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        Michael Seibel, founder of Justin.tv and Socialcam and
                        Partner at Y Combinator, on how to talk to investors.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          How to Raise Money (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_NinetySix"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Marc Andreessen, Ron Conway, Parker Conrad
                      </Text>
                      <Text
                        className="font-thin leading-[21.00px] md:ml-[0] ml-[10px] mt-[11px] text-gray_912 text-left sm:w-[100%] w-[91%]"
                        variant="body43"
                      >
                        Sam Altman, former President of Y Combinator, leads a
                        panel on how to raise money. On the panel are Marc
                        Andreessen, Founder of Netscape and Andreessen Horowitz,
                        Ron Conway, Founder of SV Angel, and Parker Conrad,
                        Founder of Zenefits and Rippling.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Legal and Accounting Basics for Startups (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_NinetySeven"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Kirsty Nathoo, Carolynn Levy
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[591.47px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.63px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Legal
                          </Text>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Finance
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[718px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Getting the legal, finance (equity allocation,
                          vesting), and accounting right early on in your
                          startup&#39;s life will save you a lot of pain in the
                          long run. Kirsty Nathoo, CFO at Y Combinator, and
                          Carolynn Levy, General Counsel at Y Combinator, cover
                          these important topics in this lecture.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          How to Build Products Users Love (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_NinetyEight"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Kevin Hale
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[290.58px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[16.31px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Talking to Users
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Product
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[125px] pl-[10px] pr-[17.55px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Building Product
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[688px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Kevin Hale, founder of Wufoo and former Partner at Y
                          Combinator, explains how to build products that create
                          a passionate user base.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          How to Design Hardware Products (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_NinetyNine"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Hosain Rahman
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] sm:pr-[20px] pr-[25.45px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.92px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                          variant="body49"
                        >
                          Hardware
                        </Text>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Hosain Rahman, CEO and founder of Jawbone, on the
                          design process for building hardware products users
                          love.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[235px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Get Started, Doing Things that Don&#39;t Scale,
                          Press
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundred"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Walker Williams, Justin Kan, Stanley Tang
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[269.03px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[88px] pl-[10px] pr-[14.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Early Stage
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[16.31px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Talking to Users
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[51px] pl-[10px] pr-[10.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Press
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[715px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Stanley Tang, founder of Doordash, talks about how to
                          get started once you have a startup idea. Walker
                          Williams, founder of Teespring, talks about what it
                          means to do things that don&#39;t scale. And Justin
                          Kan, founder of Twitch and former partner at Y
                          Combinator, covers how startups should think about
                          press.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Sales and Marketing (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredOne"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Tyler Bosemeny
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[569.86px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[74px] pl-[10px] pr-[11.23px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B Sales
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[703px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Tyler Bosmeny, founder and CEO of Clever, gives an
                          overviews of the sales funnel, and talks about getting
                          to your first $1 Million.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          How to Run a User Interview (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredTwo"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Emmett Shear
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[507.88px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[16.31px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Talking to Users
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[722px] text-gray_912 text-left"
                          variant="body43"
                        >
                          What can you learn by talking to users that you can’t
                          learn by looking at data? What questions should you
                          ask? In this lecture, Emmett Shear, founder and CEO of
                          Justin.tv and Twitch, covers how to talk to users.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Ideas, Products, Teams and Execution Part I (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredThree"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Dustin Moskowvitz, Sam Altman
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[467.03px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Startup Ideas
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Becoming a Founder
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[717px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Sam Altman, former President of Y Combinator, and
                          Dustin Moskovitz, founder of Facebook, Asana, and Good
                          Ventures, kick off the 2014 How to Start a Startup
                          course. In this lecture, Sam talks about startup ideas
                          and products, and Dustin discusses why to start a
                          startup.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Culture (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFour"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Brian Chesky
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] sm:pr-[20px] pr-[29.11px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[92px] pl-[10px] pr-[14.13px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Agriculture
                        </Button>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Brian Chesky, founder and CEO of Airbnb, talks about
                          how he thought about building the company&#39;s
                          culture.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Growth (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFive"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Alex Schultz
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] pr-[12.91px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.06px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                          variant="body49"
                        >
                          Growth Stage
                        </Text>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Alex Schultz, VP of Growth at Facebook, gives an
                          overview of Growth for startups.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row gap-[388px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Building for the Enterprise (SUS 2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredSix"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Aaron Levie
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] pr-[19.34px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Founder Stories
                        </Button>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Aaron Levie, founder of Box, on why you may actually
                          want to build an enterprise company.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[220px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Building Product, Talking to Users and Growing (SUS
                          2014)
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredSeven"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Adora Cheung
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start pr-[174.52px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Product
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[125px] pl-[10px] pr-[17.55px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Building Product
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.06px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth Stage
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[16.31px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Talking to Users
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[695px] text-gray_912 text-left"
                          variant="body43"
                        >
                          How do you go from zero users to many users? Adora
                          Cheung, former YC partner and founder of Homejoy,
                          talks about building product, talking to users and
                          growing.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[516px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          The Application Video
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredEight"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Y Combinator
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[286.09px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[34px] pl-[10px] pr-[10.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            YC
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[106px] pl-[10px] pr-[15px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Applying to YC
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Here are tips for putting together a good video for
                          the YC application.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[449px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          YC Sales Agreement Template
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredNine"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Y Combinator
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[506.23px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.63px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Legal
                          </Text>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[74px] pl-[10px] pr-[11.23px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B Sales
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[695px] text-gray_912 text-left"
                          variant="body43"
                        >
                          When Y Combinator startups make their first sales, we
                          provide them with a sales template to make the legal
                          part easy. In 2015, Y Combinator open sourced its
                          sales template for the benefit of all startups.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Request for Startups
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredTen"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Y Combinator
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[482.09px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Startup Ideas
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[130px] pl-[10px] pr-[17.89px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Problems to Solve
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[707px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Many of the best ideas we’ve funded at YC were ones
                          that surprised us, not ones we were waiting for. There
                          are, however, some startups that we’re very interested
                          in seeing. Here are our most current Requests for
                          Startups (RFS), which outline some of those ideas in
                          general terms.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row gap-[389px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Pick Which Startup to Work At
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredEleven"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[135px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Justin Kan, Sam Altman
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] pr-[6.1px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_309 font-thin pl-[10px] pr-[19.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                              variant="body51"
                            >
                              Working at a Startup
                            </Text>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[473px] text-gray_912 text-left"
                              variant="body43"
                            >
                              YC alum Justin Kan and former YC President Sam
                              Altman talk about why you should or should not
                              work at a startup.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_33.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_ThirtyFive"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[352px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Find Investors and Get Email Intros
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredTwelve"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Justin Kan
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] pr-[9.56px] pt-[10px] self-stretch w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[78px] pl-[10px] pr-[13.72px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Investors
                        </Button>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Tips on how to meet (and how not to meet) investors
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[487px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Gitlab&#39;s Remote Playbook
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredThirteen"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Gitlab
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[378.33px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            People
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[103px] pl-[10px] pr-[16.95px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Team Building
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[11.5px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Remote Work
                          </Text>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Gitlab&#39;s open-source guide to remote work: how to
                          manage teams and workflows and build remote fluency
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[418px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Gitlab Handbook on Pricing Model
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFourteen"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Gitlab
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[318.55px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Business Models
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[63px] pl-[10px] pr-[13.42px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Pricing
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Gitlab&#39;s open-source handbook on pricing strategy,
                          philosophy, and methodology
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Enterprise Sales Basics
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFifteen"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Ash Rust
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start pr-[149.83px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[39px] pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                B2B
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Growth
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[74px] pl-[10px] pr-[11.23px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                B2B Sales
                              </Button>
                              <Input
                                wrapClassName="bg-gray_309 pl-[10px] pr-[14.44px] py-[4px] rounded-[4px] w-[36%]"
                                className="font-thin leading-[normal] p-[0] placeholder:text-black_900 text-[10px] text-black_900 text-left uppercase w-[100%]"
                                name="div_OneHundredTwentyNine"
                                placeholder="Enterprise Sales"
                              ></Input>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[458px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Ash Rust, YC W12 Managing Partner, Sterling Road
                              discusses the basics of enterprise sales.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_34.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_ThirtySix"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row gap-[409px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Competing with FAANG Companies
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredSixteen"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[135px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Harj Taggar
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start pr-[140.42px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                People
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Compensation
                              </Text>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.31px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Hiring
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[84px] pl-[10px] pr-[14px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Recruiting
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[478px] text-gray_912 text-left"
                              variant="body44"
                            >
                              Harj Taggar explains how a startup can compete
                              with FAANG Companies. Harj Taggar is a partner at
                              YC and was the CEO and co-founder of Triplebyte.
                            </Text>
                          </div>
                          <div className="flex items-start justify-start outline outline-[1px] outline-gray_402 pb-[38px] sm:pr-[20px] pr-[38px] md:w-[100%] w-[32%]">
                            <Img
                              src="images/img_maxresdefaultjpg_90x120.png"
                              className="h-[90px] md:h-[auto] object-cover w-[64%]"
                              alt="maxresdefaultjp_ThirtySeven"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[515px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Why Do Startups Fail?
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredSeventeen"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[158px] h-[165px] md:h-[291px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Harj Taggar
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[96%]">
                                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Becoming a Founder
                                  </Text>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Business Models
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Customers
                                  </Button>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Finance
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-start md:w-[100%] w-[76%]">
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body51"
                                  >
                                    Founder Psychology
                                  </Text>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] ml-[10px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Product
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] ml-[10px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Startup Ideas
                                  </Button>
                                </div>
                                <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[130px] pl-[10px] pr-[17.89px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                  Problems to Solve
                                </Button>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[433px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Harj Taggar talks about the reasons many startups
                              fail. Harj Taggar is a partner at YC and was the
                              CEO and co-founder of Triplebyte.
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-start outline outline-[1px] outline-gray_402 pb-[38px] sm:pr-[20px] pr-[38px] md:w-[100%] w-[32%]">
                            <Img
                              src="images/img_maxresdefaultjpg_90x120.png"
                              className="h-[90px] md:h-[auto] object-cover w-[64%]"
                              alt="maxresdefaultjp_ThirtyEight"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[449px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Choosing a Startup to Work At
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredEighteen"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[135px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Harj Taggar
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] pr-[3.28px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <Text
                              className="bg-gray_309 font-thin pl-[10px] pr-[19.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                              variant="body51"
                            >
                              Working at a Startup
                            </Text>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[476px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Harj Taggar advises on choosing a startup to work
                              at. Harj Taggar is a partner at YC and was the CEO
                              and co-founder of Triplebyte.
                            </Text>
                          </div>
                          <div className="flex items-start justify-start outline outline-[1px] outline-gray_402 pb-[38px] sm:pr-[20px] pr-[38px] md:w-[100%] w-[32%]">
                            <Img
                              src="images/img_maxresdefaultjpg_90x120.png"
                              className="h-[90px] md:h-[auto] object-cover w-[64%]"
                              alt="maxresdefaultjp_ThirtyNine"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[572px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          B2B Sales Q&A
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredNineteen"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Jaleh Rezaei
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[277.27px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[39px] pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                B2B
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Growth
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[74px] pl-[10px] pr-[11.23px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                B2B Sales
                              </Button>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[463px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Jaleh Rezaei, Co-Founder and CEO of Mutiny answers
                              questions about the B2B sales process from Startup
                              School founders.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_35.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_Forty"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[503px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Generate Leads
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredTwenty"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Jaleh Rezaei
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[10px] items-start justify-start pr-[146.31px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[39px] pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                B2B
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Growth
                              </Text>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[74px] pl-[10px] pr-[11.23px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                B2B Sales
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Lead Generation
                              </Text>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[425px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Jaleh Rezaei, Co-Founder and CEO of Mutiny shares
                              tips for startups generating B2B enterprise sales
                              leads.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_36.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_FortyOne"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[232px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How do you calculate burn rate, runway and growth
                          rate?
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredTwentyOne"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[169px] h-[176px] md:h-[302px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Tim Brady
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[83%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Business Models
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[88px] pl-[10px] pr-[14.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Early Stage
                                  </Button>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Finance
                                  </Text>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[81px] pl-[10px] pr-[13.73px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Cash Burn
                                  </Button>
                                </div>
                                <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] w-[59%]">
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body51"
                                  >
                                    Founder Psychology
                                  </Text>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Growth
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[467px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Tim Brady explains how to calculate your companies
                              burn rate, runway, and growth rate. Tim is a
                              partner at YC and was a Co-founder and Partner at
                              Imagine K12. Formerly CEO at QuestBridge and Chief
                              Product Officer at @yahoo.
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-start outline outline-[1px] outline-gray_402 pb-[38px] sm:pr-[20px] pr-[38px] md:w-[100%] w-[32%]">
                            <Img
                              src="images/img_maxresdefaultjpg_90x120.png"
                              className="h-[90px] md:h-[auto] object-cover w-[64%]"
                              alt="maxresdefaultjp_FortyTwo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[272px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How Much Equity Should I Give My First Employees?
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredTwentyTwo"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[179px] h-[186px] md:h-[312px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Tim Brady
                        </Text>
                        <div className="absolute flex md:flex-col flex-row gap-[15px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[92%]">
                                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Becoming a Founder
                                  </Text>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[99px] pl-[10px] pr-[15.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Co-Founders
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[88px] pl-[10px] pr-[14.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Early Stage
                                  </Button>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Finance
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[97%]">
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[10.58px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Accounting
                                  </Text>
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body51"
                                  >
                                    Founder Psychology
                                  </Text>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[11.67px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Management
                                  </Text>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.45px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    CEO
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-start md:w-[100%] w-[64%]">
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[84px] pl-[10px] pr-[14px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Leadership
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] ml-[10px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    People
                                  </Button>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center ml-[10px] pl-[10px] pr-[10.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Compensation
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[470px] text-gray_912 text-left"
                              variant="body44"
                            >
                              Tim Brady explains how much equity you should
                              offer your early employees. Tim is a partner at YC
                              and was a Co-founder and Partner at Imagine K12.
                              Formerly CEO at QuestBridge and Chief Product
                              Officer at @yahoo.
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-start outline outline-[1px] outline-gray_402 pb-[38px] sm:pr-[20px] pr-[38px] md:w-[100%] w-[32%]">
                            <Img
                              src="images/img_maxresdefaultjpg_90x120.png"
                              className="h-[90px] md:h-[auto] object-cover w-[64%]"
                              alt="maxresdefaultjp_FortyThree"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[526px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to set your KPI?
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredTwentyThree"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[148px] h-[156px] md:h-[281px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[71%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Business Models
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[88px] pl-[10px] pr-[14.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Early Stage
                                  </Button>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.06px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Growth Stage
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-start md:w-[100%] w-[82%]">
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body51"
                                  >
                                    Founder Psychology
                                  </Text>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center ml-[10px] pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Growth
                                  </Text>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[35px] ml-[9px] pl-[10px] pr-[10.91px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    KPI
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[455px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Michael Seibel, Managing Director at Y Combinator
                              and co-founder of Justin.tv/Twitch and Socialcam,
                              explains how to set your Key Performance
                              Indicator.
                            </Text>
                          </div>
                          <div className="flex md:flex-1 items-start justify-start outline outline-[1px] outline-gray_402 pb-[38px] sm:pr-[20px] pr-[38px] md:w-[100%] w-[32%]">
                            <Img
                              src="images/img_maxresdefaultjpg_90x120.png"
                              className="h-[90px] md:h-[auto] object-cover w-[64%]"
                              alt="maxresdefaultjp_FortyFour"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row gap-[399px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to get your first ten customers?
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredTwentyFour"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[158px] h-[166px] md:h-[291px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Michael Seibel
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start md:mt-[0] mt-[10px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[95%]">
                                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Becoming a Founder
                                  </Text>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[118px] pl-[10px] pr-[15.86px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Business Models
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[63px] pl-[10px] pr-[13.42px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Pricing
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[88px] pl-[10px] pr-[14.34px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Early Stage
                                  </Button>
                                </div>
                                <div className="flex flex-row items-center justify-start md:w-[100%] w-[81%]">
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Customers
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[136px] ml-[10px] pl-[10px] pr-[18.16px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Product Market Fit
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] ml-[10px] pl-[10px] pr-[16.31px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Talking to Users
                                  </Button>
                                </div>
                                <div className="flex flex-row items-center justify-start md:w-[100%] w-[70%]">
                                  <Text
                                    className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body51"
                                  >
                                    Founder Psychology
                                  </Text>
                                  <Text
                                    className="bg-gray_309 font-thin justify-center ml-[10px] pl-[10px] pr-[9.91px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                    variant="body49"
                                  >
                                    Growth
                                  </Text>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] ml-[9px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Product
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[436px] text-gray_912 text-left"
                              variant="body43"
                            >
                              Michael Seibel, Managing Director at Y Combinator
                              and co-founder of Justin.tv/Twitch and Socialcam,
                              on how to get early customers.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_37.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_FortyFive"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[305px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Book Summary of Atomic Habits by James Clear
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredTwentyFive"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        James Clear
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] pr-[19.56px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_309 font-thin pl-[10px] pr-[20.58px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                          variant="body51"
                        >
                          Founder Psychology
                        </Text>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          A guide to developing habits and becoming more
                          productive
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[323px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          The Founder’s Guide To Selling Your Company
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredTwentySix"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Justin Kan
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] pr-[15.25px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                        <Text
                          className="bg-gray_309 font-thin pl-[10px] pr-[10.64px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                          variant="body49"
                        >
                          Closing Down
                        </Text>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          When to sell your startup, acquisition talks, how your
                          startup is valued, offers, and closing
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[562px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Billionaires Build
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredTwentySeven"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[16px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        Paul Graham shares advice for acing the YC interview.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[512px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Fund a Startup
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredTwentyEight"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin leading-[21.00px] md:ml-[0] ml-[10px] mt-[12px] text-gray_912 text-left sm:w-[100%] w-[94%]"
                        variant="body43"
                      >
                        Paul Graham discusses five sources of startup funding
                        and traces the life of a hypothetical (fortunate)
                        startup as it shifts gears through successive rounds.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[477px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Convince Investors
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredTwentyNine"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[16px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        You need three things: formidable founders, a promising
                        market, and some evicence of success so far.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[570px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How Not to Die
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredThirty"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[16px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        If you&#39;re smart and working on a promising idea, all
                        you have to do is not give up.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[474px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Do Things That Don&#39;t Scale
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredThirtyOne"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin leading-[21.00px] md:ml-[0] ml-[10px] mt-[12px] text-gray_912 text-left sm:w-[100%] w-[95%]"
                        variant="body43"
                      >
                        Startups take off because the founders make them take
                        off. Almost all startups are fragile initially. It&#39;s
                        important to recruit users manually.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[461px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Default Alive or Default Dead
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredThirtyTwo"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin leading-[21.00px] md:ml-[0] ml-[10px] mt-[12px] text-gray_912 text-left sm:w-[100%] w-[89%]"
                        variant="body43"
                      >
                        Assuming expenses remain constant and revenue growth
                        continues on trend, will your company make it to
                        profitability on the money you have left? Are you
                        default alive or dead?
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Be Relentlessly Resourceful
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredThirtyThree"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[16px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        &#39;Make something people want&#39; is the destination,
                        but &#39;Be relentlessly resourceful&#39; is how you get
                        there.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[454px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          A Student&#39;s Guide to Startups
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredThirtyFour"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin leading-[21.00px] md:ml-[0] ml-[10px] mt-[12px] text-gray_912 text-left sm:w-[100%] w-[94%]"
                        variant="body43"
                      >
                        The pros and cons of starting a startup in or soon after
                        college. Pros: stamina, poverty, rootlessness,
                        colleagues, ignorance. Cons: building stuff that look
                        like class projects.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[463px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          A Fundraising Survival Guide
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredThirtyFive"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin leading-[21.00px] md:ml-[0] ml-[10px] mt-[12px] text-gray_912 text-left sm:w-[100%] w-[94%]"
                        variant="body44"
                      >
                        Have low expectations, keep working on your startup, be
                        conservative, be flexible, be independent, don&#39;t
                        take rejection personally, be able to downshift into
                        consulting, avoid inexperienced investors, know where
                        you stand.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[415px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Why Smart People Have Bad Ideas
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredThirtySix"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin leading-[21.00px] md:ml-[0] ml-[10px] mt-[12px] text-gray_912 text-left sm:w-[100%] w-[96%]"
                        variant="body43"
                      >
                        The still life effect: you come up with a random idea,
                        plunge into it, and then at each point (a day, a week, a
                        month) feel you&#39;ve put so much time into it that
                        this must be the idea.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Ideas for Startups
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredThirtySeven"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin leading-[21.00px] md:ml-[0] ml-[10px] mt-[12px] text-gray_912 text-left sm:w-[100%] w-[97%]"
                        variant="body43"
                      >
                        The initial startup idea is just a starting point -- not
                        a blueprint, but a question. It can be wrong, so long as
                        it&#39;s wrong in a way that leads to more ideas.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[491px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to get Startup Ideas
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredThirtyEight"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin leading-[21.00px] md:ml-[0] ml-[10px] mt-[12px] text-gray_912 text-left sm:w-[100%] w-[96%]"
                        variant="body43"
                      >
                        The very best startup ideas tend to have three things in
                        common: they&#39;re something the founders themselves
                        want, that they themselves can build, and that few
                        others realize are worth doing.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[544px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Before the Startup
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredThirtyNine"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin leading-[21.00px] md:ml-[0] ml-[10px] mt-[12px] text-gray_912 text-left sm:w-[100%] w-[96%]"
                        variant="body43"
                      >
                        Paul Graham posits that startups are counterintuive and
                        all-consuming and boils down his advice to two words:
                        just learn.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[445px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Why to Not Not Start a Startup
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredForty"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[16px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        Paul Graham discusses common reasons why people are
                        reluctant to start a company and which are
                        &#39;real&#39;.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          The Hardest Lessons for Startups to Learn
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFortyOne"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[16px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        Seven counterintuitive lessons about startups: from
                        releasing early to not getting your hopes up.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[436px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          The Hacker&#39;s Guide to Investors
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFortyTwo"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[16px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        Paul Graham lists important and surprising things about
                        investors, from angels to VCs.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[532px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          The Equity Equation
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFortyThree"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[16px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        Paul Graham introduces a general formula for deciding if
                        trading away stock in your company is worth it.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          The 18 Mistakes That Kill Startups
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFortyFour"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[16px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        Paul Graham on the biggest mistakes for startups, with
                        the most central being: not making something users want.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[553px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Startup = Growth
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFortyFive"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[16px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        A startup is a company designed to grow fast. Everything
                        else we associate with startups follows from growth.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[528px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Raise Money
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFortySix"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin leading-[21.00px] md:ml-[0] ml-[10px] mt-[12px] text-gray_912 text-left sm:w-[100%] w-[96%]"
                        variant="body43"
                      >
                        Paul Graham&#39;s gives many tips for fundraising. Among
                        them: Don&#39;t raise money unless you want it and it
                        wants you. Be in fundraising mode or not.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[470px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Present to Investors
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFortySeven"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Paul Graham
                      </Text>
                      <Text
                        className="font-thin mb-[2px] md:ml-[0] ml-[10px] mt-[16px] text-gray_912 text-left w-[auto]"
                        variant="body44"
                      >
                        Paul Graham gives advice on the demo day pitch for
                        investor.
                      </Text>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[489px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to prioritize features
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFortyEight"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Emmett Shear
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[312.27px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Product
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[20.41px] sm:pr-[20px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body51"
                          >
                            Feature Prioritization
                          </Text>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[125px] pl-[10px] pr-[17.55px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Building Product
                          </Button>
                        </div>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          Mental frameworks for prioritizing building features
                          that work to figure out what to build next on your
                          product.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[430px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          Letter to New Product Managers
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFortyNine"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Brian Armstrong
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[515.7px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[71px] pl-[10px] pr-[12.75px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Product
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[125px] pl-[10px] pr-[17.55px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Building Product
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[699px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Brian Armstrong, CEO of Coinbase, gives advice on how
                          to be a good product manager, from understanding the
                          customer deeply to being the communication hub.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[324px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          The Cadence: How to Operate a SaaS Startup
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFifty"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        David Sacks
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[567.34px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[39px] pl-[10px] pr-[9.59px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            B2B
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[10.06px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Growth Stage
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[683px] text-gray_912 text-left"
                          variant="body43"
                        >
                          David Sacks, co-founder and COO of PayPal, talks about
                          how to bring order instead of chaos to the four major
                          functions of a SaaS startup (Sales, Finance, Product,
                          Marketing) as you scale from 50 to 500.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start sm:px-[20px] px-[25px] py-[15px] self-stretch md:w-[100%] w-[auto]">
                      <div className="flex sm:flex-col flex-row gap-[260px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          When and How to Fire an Employee at a Small Startup
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFiftyOne"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin text-gray_912 text-left w-[auto]"
                        variant="body41"
                      >
                        Elad Gil
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[502.56px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[60px] pl-[10px] pr-[12.36px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            People
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[82px] pl-[10px] pr-[14.77px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Employees
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin justify-center pl-[10px] pr-[9.31px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Hiring
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[679px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Hiring is important for a startup, but so is firing.
                          Elad Gil, co-founder of Mixer Labs and Color Genomics,
                          gives reasons to fire an employee and tactical advice
                          on how to do it.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col gap-[1px] items-start justify-start sm:px-[20px] px-[25px] py-[15px] self-stretch md:w-[100%] w-[auto]">
                      <div className="flex sm:flex-col flex-row gap-[232px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          What It Feels Like When You&#39;ve Found
                          Product-Market Fit
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFiftyTwo"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin text-gray_912 text-left w-[auto]"
                        variant="body43"
                      >
                        Lenny Rachitsky
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[491.03px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[85px] pl-[10px] pr-[13.81px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Customers
                          </Button>
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[136px] pl-[10px] pr-[18.16px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Product Market Fit
                          </Button>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[698px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Lenny Rachitsky, ex-Airbnb PM and creator of
                          Lenny&#39;s Newsletter, discusses three signs of true
                          product-market fit with examples by founders from 25
                          iconic companies.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col p-[15px] relative w-[100%]">
                      <div className="flex flex-col mx-[auto] md:w-[100%] w-[94%]">
                        <div className="flex flex-row sm:gap-[40px] gap-[419px] items-start justify-between mx-[auto] self-stretch w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_912 text-left w-[auto]"
                            variant="body39"
                          >
                            Future Founders Track Conclusion
                          </Text>
                          <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                            <Img
                              src="images/img_bookmark_bluegray_102.svg"
                              className=""
                              alt="bookmark_OneHundredFiftyThree"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-thin mt-[-0.11px] text-gray_912 text-left w-[auto] z-[1]"
                          variant="body42"
                        >
                          Geoff Ralston
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[15px] items-end justify-start mt-[-9.89px] mx-[auto] self-stretch w-[auto] z-[1]">
                        <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] pr-[11.35px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                            startup school
                          </Button>
                          <Text
                            className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[468px] text-gray_912 text-left"
                            variant="body43"
                          >
                            YC President Geoff Ralston shares his parting
                            message with the participants of the future founder
                            track of Startup School.
                          </Text>
                        </div>
                        <div className="h-[128px] relative md:w-[100%] w-[32%]">
                          <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                          <Img
                            src="images/img_maxresdefaultjpg_38.png"
                            className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                            alt="maxresdefaultjp_FortySix"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col p-[15px] relative w-[100%]">
                      <div className="flex flex-col mx-[auto] md:w-[100%] w-[94%]">
                        <div className="flex flex-row sm:gap-[40px] gap-[434px] items-start justify-between mx-[auto] self-stretch w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_912 text-left w-[auto]"
                            variant="body39"
                          >
                            Future Founders Track Welcome
                          </Text>
                          <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                            <Img
                              src="images/img_bookmark_bluegray_102.svg"
                              className=""
                              alt="bookmark_OneHundredFiftyFour"
                            />
                          </Button>
                        </div>
                        <Text
                          className="font-thin mt-[-0.11px] text-gray_912 text-left w-[auto] z-[1]"
                          variant="body42"
                        >
                          Geoff Ralston
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[15px] items-end justify-start mt-[-9.89px] mx-[auto] self-stretch w-[auto] z-[1]">
                        <div className="flex flex-col gap-[13px] items-start justify-start pb-[32px] pr-[3.03px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                          <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                            startup school
                          </Button>
                          <Text
                            className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[476px] text-gray_912 text-left"
                            variant="body43"
                          >
                            YC President Geoff Ralston welcomes participants to
                            the future founder track of Startup School.
                          </Text>
                        </div>
                        <div className="h-[128px] relative md:w-[100%] w-[32%]">
                          <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                          <Img
                            src="images/img_maxresdefaultjpg_39.png"
                            className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                            alt="maxresdefaultjp_FortySeven"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[417px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Find the Right Co-Founder
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFiftyFive"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[135px] md:h-[261px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Harj Taggar
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start pb-[11px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start pr-[100.31px] sm:pr-[20px] md:pr-[40px] pt-[10px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                startup school
                              </Button>
                              <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[99px] pl-[10px] pr-[15.27px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                Co-Founders
                              </Button>
                              <Text
                                className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                variant="body49"
                              >
                                Becoming a Founder
                              </Text>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[471px] text-gray_912 text-left"
                              variant="body43"
                            >
                              YC Partner Harj Taggar shares advice on how to
                              find the right co-founder for your startup. This
                              lecture was filmed for the future founder track of
                              Startup School 2020.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_40.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_FortyEight"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-center justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] gap-[489px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Get Startup Ideas
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFiftySix"
                          />
                        </Button>
                      </div>
                      <div className="sm:h-[128px] h-[137px] md:h-[260px] relative md:w-[100%] w-[98%]">
                        <Text
                          className="absolute font-thin left-[0] text-gray_912 text-left top-[0] w-[auto]"
                          variant="body42"
                        >
                          Jared Friedman
                        </Text>
                        <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-end justify-between mx-[auto] self-stretch w-[auto]">
                          <div className="flex flex-col gap-[13px] items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex items-start justify-start pr-[10px] pt-[10px] w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[78%]">
                                <div className="flex flex-row items-center justify-between w-[100%]">
                                  <Button className="bg-orange_A200 cursor-pointer font-thin leading-[normal] min-w-[114px] pl-[10px] pr-[15.47px] py-[4px] rounded-[4px] text-[10px] text-center text-white_A700 uppercase w-[auto]">
                                    startup school
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[100px] pl-[10px] pr-[14.02px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Startup Ideas
                                  </Button>
                                  <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[130px] pl-[10px] pr-[17.89px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                                    Problems to Solve
                                  </Button>
                                </div>
                                <Text
                                  className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                                  variant="body49"
                                >
                                  Becoming a Founder
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[461px] text-gray_912 text-left"
                              variant="body44"
                            >
                              YC Partner Jared Friedman shares advice on how to
                              get startup ideas. This video was recorded for the
                              future founder track in Startup School 2020.
                            </Text>
                          </div>
                          <div className="h-[128px] relative md:w-[100%] w-[32%]">
                            <div className="h-[128px] m-[auto] outline outline-[1px] outline-gray_402 w-[100%]"></div>
                            <Img
                              src="images/img_maxresdefaultjpg_41.png"
                              className="absolute h-[128px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                              alt="maxresdefaultjp_FortyNine"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[40px] gap-[89px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Spin Your Scientific Research Out Of a
                          University and Into a Startup
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFiftySeven"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Jared Friedman
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[285.61px] md:pr-[40px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                          <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[126px] pl-[10px] pr-[18.61px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                            Science + Biotech
                          </Button>
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[10.95px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Becoming a Founder
                          </Text>
                          <Text
                            className="bg-gray_309 font-thin pl-[10px] pr-[9.83px] py-[4px] rounded-[4px] self-stretch text-black_900 text-left uppercase w-[auto]"
                            variant="body49"
                          >
                            Academia to Startup
                          </Text>
                        </div>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[677px] text-gray_912 text-left"
                          variant="body43"
                        >
                          Advice for people who have done scientific research at
                          a university and are considering starting a company to
                          commercialize it.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[331px] sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body39"
                        >
                          How to Build a Great Series A Pitch and Deck
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFiftyEight"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Janelle Tam
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] sm:pr-[20px] pr-[23.38px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[65px] pl-[10px] pr-[12.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Series A
                        </Button>
                        <Text
                          className="font-thin text-gray_912 text-left w-[auto]"
                          variant="body44"
                        >
                          YC’s Series A Program Manager Janelle Tam on how to
                          put together a great Series A pitch and deck.
                        </Text>
                      </div>
                    </div>
                    <div className="border-b-[1px] border-gray_404 border-solid flex flex-col items-start justify-start p-[15px] w-[100%]">
                      <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[10px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-normal not-italic text-gray_912 text-left w-[auto]"
                          variant="body41"
                        >
                          Startup School Founders Discuss YC
                        </Text>
                        <Button className="border-[1px] border-bluegray_102 border-solid flex h-[30px] items-center justify-center p-[7px] rounded-[4px] w-[30px]">
                          <Img
                            src="images/img_bookmark_bluegray_102.svg"
                            className=""
                            alt="bookmark_OneHundredFiftyNine"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-thin md:ml-[0] ml-[10px] text-gray_912 text-left w-[auto]"
                        variant="body42"
                      >
                        Kyle Corbitt
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[10px] sm:pr-[20px] pr-[36.6px] pt-[10px] self-stretch md:w-[100%] w-[auto]">
                        <Button className="bg-gray_309 cursor-pointer font-thin leading-[normal] min-w-[119px] pl-[10px] pr-[17.06px] py-[4px] rounded-[4px] text-[10px] text-black_900 text-center uppercase w-[auto]">
                          Founder Stories
                        </Button>
                        <Text
                          className="font-thin leading-[21.00px] md:max-w-[100%] max-w-[686px] text-gray_912 text-left"
                          variant="body44"
                        >
                          Several founders who have participated in both
                          [Startup School](https://www.startupschool.org/) and
                          YC’s [core batch
                          program](https://www.ycombinator.com/about/) discuss
                          their experiences with the two programs.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-thin text-gray_805 text-left w-[auto]"
                    variant="body42"
                  >
                    Loading more...
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-start py-[62px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
              <Img
                src="images/img_ycombinatorlog.png"
                className="h-[60px] md:h-[auto] md:mt-[0] mt-[2px] object-cover w-[60px]"
                alt="ycombinatorlog_One"
              />
              <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-[40px] gap-[64px] items-start justify-start md:ml-[0] ml-[64px] self-stretch sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[8.8px] items-start justify-start pb-[163.98px] self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-gray_805 text-left tracking-[0.80px] w-[auto]"
                    variant="body41"
                  >
                    Programs
                  </Text>
                  <div className="flex flex-col gap-[12.8px] items-start justify-start pb-[3.8px] pr-[1.86px] pt-[5px] self-stretch w-[auto]">
                    <Text
                      className="font-light text-gray_805 text-left w-[auto]"
                      variant="body43"
                    >
                      YC Program
                    </Text>
                    <Text
                      className="font-light text-gray_805 text-left w-[auto]"
                      variant="body43"
                    >
                      Startup School
                    </Text>
                    <Text
                      className="font-light text-gray_805 text-left w-[auto]"
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
                  <div className="flex flex-col gap-[8.8px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-gray_805 text-left tracking-[0.80px] w-[auto]"
                      variant="body41"
                    >
                      Company
                    </Text>
                    <div className="flex flex-col gap-[12.8px] items-start justify-start pb-[3.8px] pr-[5.02px] pt-[5px] self-stretch w-[auto]">
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body43"
                      >
                        YC Blog
                      </Text>
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body43"
                      >
                        Contact
                      </Text>
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body44"
                      >
                        Press
                      </Text>
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body43"
                      >
                        People
                      </Text>
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body43"
                      >
                        Careers
                      </Text>
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body44"
                      >
                        Privacy Policy
                      </Text>
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body43"
                      >
                        Security
                      </Text>
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body44"
                      >
                        Terms of Use
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8.8px] items-start justify-start pb-[32.8px] self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-gray_805 text-left tracking-[0.80px] w-[auto]"
                      variant="body41"
                    >
                      Resources
                    </Text>
                    <div className="flex flex-col gap-[12.8px] items-start justify-start pb-[3.8px] pr-[2.23px] pt-[5px] self-stretch w-[auto]">
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body43"
                      >
                        Startup Directory
                      </Text>
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body43"
                      >
                        Startup Library
                      </Text>
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body44"
                      >
                        Investors
                      </Text>
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body43"
                      >
                        SAFE
                      </Text>
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body43"
                      >
                        Hacker News
                      </Text>
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body43"
                      >
                        Launch YC
                      </Text>
                      <Text
                        className="font-light text-gray_805 text-left w-[auto]"
                        variant="body43"
                      >
                        YC Deals
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex sm:flex-1 flex-row gap-[8.31px] items-center justify-start pb-[258.38px] sm:pl-[20px] pl-[226.88px] md:pl-[40px] self-stretch sm:w-[100%] w-[auto]">
                <Text
                  className="text-gray_805 text-right w-[auto]"
                  variant="body36"
                >
                  Make something people want.
                </Text>
                <Button className="bg-orange_A200 cursor-pointer font-bold min-w-[69px] pb-[5.8px] pl-[13px] pr-[10.7px] pt-[4px] rounded-[6px] text-[18px] text-center text-white_A700 w-[auto]">
                  Apply
                </Button>
              </div>
            </div>
            <div className="border-gray_207 border-solid border-t-[1px] flex flex-row md:gap-[40px] items-start justify-between pt-[33px] w-[100%]">
              <Text
                className="font-thin text-gray_805 text-left w-[auto]"
                variant="body41"
              >
                © 2023 Y Combinator.
              </Text>
              <Img
                src="images/img_div_gray_805.svg"
                className="h-[24px] w-[216px]"
                alt="div_OneHundredSixtyFour"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPage;
