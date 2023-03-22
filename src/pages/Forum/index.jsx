import React from "react";

import { Img, Button, Text } from "components";

const ForumPage = () => {
  return (
    <>
      <div className="bg-white_A700 font-inter h-[3094px] mx-[auto] sm:pl-[20px] pl-[260px] md:pl-[40px] relative w-[100%]">
        <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] max-w-[1400px] pt-[19px] w-[100%]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="sm:absolute flex flex-col sm:flex-row gap-[35px] justify-start w-[100%]">
              <header className="flex md:flex-col flex-row md:gap-[20px] sm:hidden items-center justify-center w-[100%]">
                <div className="flex md:flex-1 flex-row gap-[10px] items-center justify-start md:ml-[0] ml-[24px] md:mt-[0] my-[6px] sm:pr-[20px] pr-[279px] md:pr-[40px] md:w-[100%] w-[31%]">
                  <Img
                    src="images/img_svg_black_900.svg"
                    className="h-[24px] w-[auto]"
                    alt="svg"
                  />
                  <Button className="bg-deep_purple_500 cursor-pointer font-extrabold min-w-[44px] my-[2px] pl-[8px] pr-[7.8px] py-[5px] rounded-[10px] shadow-bs21 text-[10px] text-center text-white_A700 tracking-[0.60px] uppercase w-[auto]">
                    Beta
                  </Button>
                </div>
                <ul className="flex md:flex-1 flex-row sm:hidden items-start justify-center md:mt-[0] my-[7px] pt-[2px] px-[2px] md:w-[100%] w-[31%] common-row-list">
                  <li className="mb-[1px] ml-[99px] sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      className="cursor-pointer hover:font-semibold font-semibold text-[16px] text-left text-light_blue_A700"
                      href="javascript:"
                    >
                      Docs
                    </a>
                  </li>
                  <li className="mt-[1px] ml-[21px] sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      className="cursor-pointer font-normal hover:font-semibold not-italic text-[16px] text-gray_919 text-left hover:text-light_blue_A700"
                      href="javascript:"
                    >
                      Components
                    </a>
                  </li>
                  <li className="ml-[21px] mr-[78px] sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                    <a
                      className="cursor-pointer font-normal hover:font-semibold not-italic text-[16px] text-gray_919 text-left hover:text-light_blue_A700"
                      href="javascript:"
                    >
                      Feedback
                    </a>
                  </li>
                </ul>
                <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-center mr-[24px] pl-[10px] md:w-[100%] w-[35%]">
                  <Img
                    src="images/img_div_bluegray_404_24x140.svg"
                    className="h-[24px] w-[140px]"
                    alt="div"
                  />
                  <div className="bg-gray_200_b2 md:h-[28px] h-[38px] sm:ml-[0] ml-[10px] pl-[16px] sm:pr-[20px] pr-[28px] py-[9px] relative rounded-[8px] w-[200px]">
                    <div className="absolute flex font-inter h-[max-content] inset-y-[0] items-start justify-start left-[42%] my-[auto] w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_404 text-left w-[auto]"
                        variant="body41"
                      >
                        Search...
                      </Text>
                    </div>
                    <Text
                      className="absolute bg-white_A700_cc font-normal font-roboto h-[max-content] inset-y-[0] justify-center my-[auto] not-italic pl-[5px] pr-[6.75px] right-[3%] rounded-[6px] self-stretch text-center text-gray_900_99 text-shadow-ts1 w-[auto]"
                      variant="body43"
                    >
                      ⌃ K
                    </Text>
                  </div>
                  <Button
                    className="bg-gray_104 cursor-pointer flex items-center justify-center min-w-[111px] sm:ml-[0] ml-[10px] px-[15px] py-[9px] rounded-[12px] w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_favorite_pink_501.svg"
                        className="mr-[4px]"
                        alt="favorite"
                      />
                    }
                  >
                    <div className="font-medium text-[14px] text-center text-gray_919">
                      Sponsor
                    </div>
                  </Button>
                </div>
              </header>
              <div className="flex md:flex-col flex-row gap-[31px] items-start justify-start md:ml-[0] ml-[24px] md:w-[100%] w-[80%]">
                <div className="flex items-center justify-start md:w-[100%] w-[22%]">
                  <div className="flex flex-col gap-[21px] sm:hidden items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_919 text-left tracking-[-0.96px] w-[auto]"
                      variant="body34"
                    >
                      Documentation
                    </Text>
                    <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-start pr-[132px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                          <Button className="bg-blue_102 flex h-[24px] items-center justify-center p-[4px] rounded-[7px] w-[24px]">
                            <Img
                              src="images/img_calendar.svg"
                              className=""
                              alt="calendar"
                            />
                          </Button>
                          <Text
                            className="font-semibold ml-[10px] text-gray_919 text-left w-[auto]"
                            variant="body41"
                          >
                            Guide
                          </Text>
                          <Img
                            src="images/img_arrowdown_gray_604.svg"
                            className="h-[14px] ml-[12px] mt-[5px] w-[14px]"
                            alt="arrowdown"
                          />
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start pl-[19px] md:w-[100%] w-[99%]">
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] pr-[3px] pt-[3px] w-[100%]">
                            <div className="bg-gray_405 h-[4px] mb-[10px] mt-[6px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[76px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Getting Started
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-end ml-[auto] pr-[2px] pt-[2px] w-[100%]">
                            <div className="bg-bluegray_402 h-[4px] my-[9px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-semibold ml-[16px] text-gray_919 text-left w-[auto]"
                              variant="body41"
                            >
                              NextUI + Next.js
                            </Text>
                            <Text
                              className="bg-deep_purple_51 font-extrabold justify-center mb-[2px] ml-[6px] mr-[2px] pl-[5px] pr-[4.91px] py-[5px] rounded-[10px] self-stretch text-deep_purple_500 text-left text-shadow-ts tracking-[0.60px] uppercase w-[auto]"
                              variant="body51"
                            >
                              Updated
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-start pr-[126px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                          <Button className="bg-blue_102 flex h-[24px] items-center justify-center p-[4px] rounded-[7px] w-[24px]">
                            <Img
                              src="images/img_forward.svg"
                              className="h-[14px]"
                              alt="forward"
                            />
                          </Button>
                          <Text
                            className="font-normal ml-[10px] mt-[2px] not-italic text-gray_919 text-left w-[auto]"
                            variant="body41"
                          >
                            Theme
                          </Text>
                          <Img
                            src="images/img_arrowdown_gray_604.svg"
                            className="h-[14px] ml-[12px] mt-[5px] w-[14px]"
                            alt="arrowdown_One"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start pl-[19px] md:w-[100%] w-[99%]">
                          <div className="flex flex-row items-center justify-end ml-[auto] w-[100%]">
                            <div className="bg-gray_405 h-[4px] my-[8px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal ml-[16px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Default theme
                            </Text>
                            <Text
                              className="bg-deep_purple_51 font-extrabold justify-center ml-[6px] mr-[20px] pl-[5px] pr-[4.91px] py-[5px] rounded-[10px] self-stretch text-deep_purple_500 text-left text-shadow-ts tracking-[0.60px] uppercase w-[auto]"
                              variant="body51"
                            >
                              Updated
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] mt-[18px] w-[100%]">
                            <div className="bg-gray_405 h-[4px] my-[8px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[62px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Customize theme
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] mt-[18px] w-[100%]">
                            <div className="bg-gray_405 h-[4px] my-[8px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[113px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Dark mode
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] mt-[18px] pr-[3px] pt-[3px] w-[100%]">
                            <div className="bg-gray_405 h-[4px] mb-[10px] mt-[6px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[79px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Override styles
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] mt-[18px] pr-[3px] pt-[3px] w-[100%]">
                            <div className="bg-gray_405 h-[4px] mb-[10px] mt-[6px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[113px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Typescript
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] mt-[18px] w-[100%]">
                            <div className="bg-gray_405 h-[4px] my-[8px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[139px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Utilities
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] mt-[18px] w-[100%]">
                            <div className="bg-gray_405 h-[4px] my-[8px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[149px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Media
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-start pr-[127px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                          <Button className="bg-blue_102 flex h-[24px] items-center justify-center p-[5px] rounded-[7px] w-[24px]">
                            <Img
                              src="images/img_grid_light_blue_a701.svg"
                              className="h-[14px]"
                              alt="grid"
                            />
                          </Button>
                          <Text
                            className="font-normal ml-[10px] mt-[3px] not-italic text-gray_919 text-left w-[auto]"
                            variant="body41"
                          >
                            Layout
                          </Text>
                          <Img
                            src="images/img_arrowdown_gray_604.svg"
                            className="h-[14px] ml-[12px] mt-[5px] w-[14px]"
                            alt="arrowdown_Two"
                          />
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start pl-[19px] md:w-[100%] w-[99%]">
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] w-[100%]">
                            <div className="bg-gray_405 h-[4px] my-[8px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[121px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Container
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] w-[100%]">
                            <div className="bg-gray_405 h-[4px] my-[8px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[163px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Grid
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] pr-[3px] pt-[3px] w-[100%]">
                            <div className="bg-gray_405 h-[4px] mb-[10px] mt-[6px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[140px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Spacer
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[82px] w-[100%]">
                          <Button className="bg-blue_102 flex h-[24px] items-center justify-center p-[4px] rounded-[7px] w-[24px]">
                            <Img
                              src="images/img_eye_light_blue_a701.svg"
                              className="h-[16px]"
                              alt="eye"
                            />
                          </Button>
                          <Text
                            className="font-normal ml-[10px] mt-[3px] not-italic text-gray_919 text-left w-[auto]"
                            variant="body41"
                          >
                            Components
                          </Text>
                          <Img
                            src="images/img_arrowdown_gray_604.svg"
                            className="h-[14px] ml-[12px] mt-[5px] w-[14px]"
                            alt="arrowdown_Three"
                          />
                        </div>
                        <div className="flex flex-col gap-[18px] items-start justify-start pb-[19px] pl-[19px] md:w-[100%] w-[99%]">
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] w-[100%]">
                            <div className="bg-gray_405 h-[4px] my-[8px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[147px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Avatar
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] w-[100%]">
                            <div className="bg-gray_405 h-[4px] my-[8px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[145px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Button
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] pr-[3px] pt-[3px] w-[100%]">
                            <div className="bg-gray_405 h-[4px] mb-[10px] mt-[6px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[92px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Button Group
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] w-[100%]">
                            <div className="bg-gray_405 h-[4px] my-[8px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[159px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Card
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] pr-[3px] pt-[3px] w-[100%]">
                            <div className="bg-gray_405 h-[4px] mb-[10px] mt-[6px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[113px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Pagination
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end ml-[auto] w-[100%]">
                            <div className="bg-gray_405 h-[4px] my-[8px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[154px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Table
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[16px] items-center justify-end mb-[2px] ml-[auto] pr-[3px] pt-[3px] w-[100%]">
                            <div className="bg-gray_405 h-[4px] mb-[10px] mt-[6px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal mr-[128px] not-italic text-gray_604 text-left w-[auto]"
                              variant="body41"
                            >
                              Collapse
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end md:w-[100%] w-[76%]">
                  <Text
                    className="font-semibold mt-[2px] text-gray_919 text-left tracking-[-1.20px] w-[auto]"
                    variant="body28"
                  >
                    Next.js 13
                  </Text>
                  <div className="flex flex-col gap-[11px] items-start justify-end mt-[11px] pr-[3px] py-[3px] w-[100%]">
                    <div className="md:h-[42px] h-[51px] mt-[2px] relative md:w-[100%] w-[98%]">
                      <div className="absolute flex items-center justify-start left-[0] top-[0] w-[31%]">
                        <div className="flex flex-row items-start justify-evenly w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_919 text-left tracking-[-0.90px] w-[auto]"
                            variant="body37"
                          >
                            Next.js 13 introduces a new
                          </Text>
                          <div className="bg-red_50 flex items-start justify-start pt-[2px] px-[2px] rounded-[7px] w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-purple_A204 tracking-[-0.90px] w-[auto]"
                              variant="body43"
                            >
                              app/
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[0] font-normal hidden inset-x-[0] leading-[31.00px] mx-[auto] not-italic text-gray_919 text-left tracking-[-0.90px] w-[100%]"
                        variant="body37"
                      >
                        directory folder structure. By default it uses React
                        Server Components. To use NextUI in those components,
                        you need to convert them into client-side component by
                        adding a
                      </Text>
                    </div>
                    <div className="h-[22px] relative md:w-[100%] w-[75%]">
                      <div className="absolute bg-red_50 bottom-[0] flex items-start justify-start left-[0] pt-[2px] px-[2px] rounded-[7px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-purple_A204 tracking-[-0.90px] w-[auto]"
                          variant="body43"
                        >
                          &#39;use client&#39;;
                        </Text>
                      </div>
                      <Text
                        className="absolute font-normal h-[100%] inset-y-[0] my-[auto] not-italic right-[0] text-gray_919 text-left tracking-[-0.90px] w-[auto]"
                        variant="body37"
                      ></Text>
                    </div>
                  </div>
                  <div className="bg-gray_803 flex items-start justify-start mt-[42px] p-[16px] rounded-[14px] self-stretch shadow-bs22 md:w-[100%] w-[auto]">
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row gap-[16px] items-start justify-between w-[100%]">
                          <Img
                            src="images/img_1678886540falogopng.png"
                            className="sm:flex-1 h-[100px] md:h-[auto] object-cover rounded-[12px] sm:w-[100%] w-[auto]"
                            alt="1678886540falog"
                          />
                          <div className="flex md:flex-1 flex-col gap-[39px] justify-start md:mt-[0] mt-[2px] md:w-[100%] w-[auto]">
                            <Text
                              className="font-normal leading-[24.00px] mr-[52px] not-italic text-gray_202 text-left sm:w-[100%] w-[93%]"
                              variant="body41"
                            >
                              Let us focus on your auth so you can focus on your
                              app. Add login, SSO, MFA and more in minutes.
                            </Text>
                            <Text
                              className="font-semibold md:ml-[0] ml-[589px] text-bluegray_53 text-left uppercase w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              ads via Carbon
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-semibold mt-[46px] text-gray_919 text-left tracking-[-1.20px] w-[auto]"
                    variant="body28"
                  >
                    Next.js 12 and below
                  </Text>
                  <div className="md:h-[42px] h-[63px] mt-[11px] pr-[6px] pt-[6px] relative w-[100%]">
                    <Text
                      className="absolute font-normal left-[0] not-italic text-gray_919 text-left top-[0] tracking-[-0.90px] w-[auto]"
                      variant="body37"
                    >
                      If you&#39;re not using the new app/ directory,
                      there&#39;s no need to add the
                    </Text>
                    <div className="absolute bottom-[0] md:h-[31px] h-[55px] inset-x-[0] mx-[auto] md:w-[100%] w-[99%]">
                      <div className="md:h-[31px] h-[55px] m-[auto] w-[100%]">
                        <div className="absolute md:h-[30px] h-[39px] sm:hidden inset-x-[0] mx-[auto] top-[0] w-[100%]">
                          <div className="absolute bg-red_50 flex items-start justify-start pt-[2px] px-[2px] right-[24%] rounded-[7px] top-[0] w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-purple_A204 tracking-[-0.90px] w-[auto]"
                              variant="body43"
                            >
                              &#39;use client&#39;;
                            </Text>
                          </div>
                          <Text
                            className="absolute bottom-[0] font-normal sm:hidden inset-x-[0] leading-[31.00px] mx-[auto] not-italic text-gray_919 text-left tracking-[-0.90px] w-[100%]"
                            variant="body37"
                          >
                            directive, you just need to customize the
                          </Text>
                        </div>
                        <div className="absolute bottom-[0] flex items-center justify-end left-[13%] self-stretch w-[auto]">
                          <Text
                            className="font-normal sm:hidden not-italic text-left text-light_blue_A700 tracking-[-0.90px] w-[auto]"
                            variant="body37"
                          >
                            _app.jsx
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[5%] font-normal left-[21%] not-italic text-gray_919 text-left tracking-[-0.90px] w-[auto]"
                        variant="body37"
                      ></Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold mt-[47px] text-gray_919 text-left tracking-[-1.20px] w-[auto]"
                    variant="body28"
                  >
                    SSR Setup
                  </Text>
                  <div className="md:h-[52px] h-[63px] mt-[11px] py-[5px] relative w-[100%]">
                    <Text
                      className="absolute font-normal left-[0] not-italic text-gray_919 text-left top-[0] tracking-[-0.90px] w-[auto]"
                      variant="body37"
                    ></Text>
                    <div className="absolute md:h-[41px] h-[49px] inset-[0] justify-center m-[auto] w-[100%]">
                      <div className="absolute bg-red_50 flex items-start justify-start pt-[2px] px-[2px] right-[39%] rounded-[7px] top-[0] w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-purple_A204 tracking-[-0.90px] w-[auto]"
                          variant="body43"
                        >
                          pages/_document.js
                        </Text>
                      </div>
                      <Text
                        className="absolute bottom-[0] font-normal inset-x-[0] leading-[31.00px] mx-[auto] not-italic text-left text-light_blue_A700 tracking-[-0.90px] w-[100%]"
                        variant="body37"
                      ></Text>
                    </div>
                  </div>
                  <div className="flex items-center justify-start mt-[20px] rounded-[14px] w-[100%]">
                    <div className="bg-gray_803 flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[15px] rounded-[14px] shadow-bs22 w-[100%]">
                      <div className="flex md:flex-1 items-start justify-start md:ml-[0] ml-[5px] pr-[2px] py-[2px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col justify-start md:w-[100%] w-[79%]">
                          <div className="flex flex-col relative w-[100%]">
                            <div className="h-[102px] md:h-[71px] mx-[auto] w-[100%]">
                              <div className="absolute md:h-[71px] h-[92px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                                <div className="absolute md:h-[71px] h-[81px] left-[0] top-[0] sm:w-[100%] w-[69%]">
                                  <Text
                                    className="absolute font-normal leading-[21.00px] left-[0] not-italic text-bluegray_402 text-left top-[0] sm:w-[100%] w-[54%]"
                                    variant="body43"
                                  ></Text>
                                  <div className="absolute bottom-[0] flex items-start justify-start right-[0] self-stretch w-[auto]">
                                    <Text
                                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                      variant="body43"
                                    ></Text>
                                  </div>
                                </div>
                                <Text
                                  className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-left text-purple_200 w-[max-content]"
                                  variant="body43"
                                ></Text>
                              </div>
                              <div className="absolute bottom-[0] flex items-start justify-start left-[10%] self-stretch w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                  variant="body43"
                                ></Text>
                              </div>
                            </div>
                            <Text
                              className="font-normal leading-[21.00px] mt-[-10px] not-italic text-left text-purple_200 sm:w-[100%] w-[86%] z-[1]"
                              variant="body43"
                            ></Text>
                          </div>
                          <div className="flex flex-row items-start justify-start md:ml-[0] ml-[50px] mt-[2px] md:w-[100%] w-[23%]">
                            <div className="flex items-start justify-start self-stretch w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                variant="body43"
                              ></Text>
                            </div>
                            <Text
                              className="font-normal ml-[8px] mt-[3px] not-italic text-left text-yellow_807 w-[auto]"
                              variant="body43"
                            >
                              lang
                            </Text>
                            <div className="flex items-start justify-start ml-[5px] self-stretch w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                variant="body43"
                              ></Text>
                            </div>
                            <Text
                              className="font-normal mt-[3px] not-italic text-left text-teal_50 w-[auto]"
                              variant="body43"
                            >
                              {">"}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[39px] items-center justify-start md:ml-[0] ml-[67px] md:w-[100%] w-[49%]">
                            <div className="flex relative w-[66%]">
                              <div className="flex flex-row items-start justify-start my-[auto] self-stretch w-[auto]">
                                <div className="flex items-start justify-start self-stretch w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                    variant="body44"
                                  ></Text>
                                </div>
                                <Text
                                  className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                  variant="body43"
                                >
                                  {">"}
                                </Text>
                              </div>
                              <Text
                                className="font-normal ml-[-1.6px] mt-[auto] not-italic text-left text-teal_50 w-[auto] z-[1]"
                                variant="body43"
                              ></Text>
                            </div>
                            <div className="flex flex-row items-start justify-start self-stretch w-[auto]">
                              <div className="flex items-start justify-start self-stretch w-[auto]">
                                <Text
                                  className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                  variant="body43"
                                ></Text>
                              </div>
                              <Text
                                className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                variant="body43"
                              >
                                {">"}
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start md:ml-[0] ml-[67px] self-stretch w-[auto]">
                            <div className="flex items-start justify-start self-stretch w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                variant="body44"
                              ></Text>
                            </div>
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body43"
                            >
                              {">"}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8.41px] items-start justify-start md:ml-[0] ml-[84px] pr-[1.81px] self-stretch w-[auto]">
                            <div className="flex items-start justify-start self-stretch w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                variant="body43"
                              ></Text>
                            </div>
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body43"
                            >
                              {"/>"}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[8.41px] items-start justify-start md:ml-[0] ml-[84px] pr-[1.81px] self-stretch w-[auto]">
                            <div className="flex items-start justify-start self-stretch w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                variant="body43"
                              ></Text>
                            </div>
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body43"
                            >
                              {"/>"}
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start md:ml-[0] ml-[67px] self-stretch w-[auto]">
                            <div className="flex items-start justify-start self-stretch w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                variant="body43"
                              ></Text>
                            </div>
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body43"
                            >
                              {">"}
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start md:ml-[0] ml-[50px] self-stretch w-[auto]">
                            <div className="flex items-start justify-start self-stretch w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                variant="body43"
                              ></Text>
                            </div>
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body43"
                            >
                              {">"}
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[21.00px] mt-[3px] not-italic text-left text-teal_50 sm:w-[100%] w-[37%]"
                            variant="body43"
                          ></Text>
                        </div>
                      </div>
                      <div className="bg-gray_803 flex md:flex-1 items-center justify-start rounded-[7px] md:w-[100%] w-[5%]">
                        <Img
                          src="images/img_frame.svg"
                          className="h-[18px] mb-[589px] w-[18px]"
                          alt="frame"
                        />
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-semibold mt-[25px] text-gray_919 text-left tracking-[-1.20px] w-[auto]"
                    variant="body28"
                  >
                    Provider Setup
                  </Text>
                  <div className="md:h-[51px] h-[63px] mt-[11px] pr-[5px] py-[5px] relative w-[100%]">
                    <div className="absolute flex items-center justify-start left-[0] top-[0] w-[89%]">
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_919 text-left tracking-[-0.90px] w-[auto]"
                          variant="body37"
                        >
                          NextUI needs to be wrapped in a provider to work
                          properly. You need to set up the
                        </Text>
                        <div className="bg-red_50 flex md:flex-1 items-start justify-start rounded-[7px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal md:ml-[0] ml-[2px] not-italic text-left text-purple_A204 tracking-[-0.90px] w-[auto]"
                            variant="body43"
                          >
                            NextUIProvider
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="absolute bottom-[0] font-normal inset-x-[0] leading-[31.00px] mx-[auto] not-italic text-gray_919 text-left tracking-[-0.90px] sm:w-[100%] w-[99%]"
                      variant="body37"
                    >
                      at the root of your application.
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start pr-[3px] py-[3px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_919 text-left tracking-[-0.90px] w-[auto]"
                      variant="body37"
                    >
                      Go to
                    </Text>
                    <Text
                      className="bg-red_50 font-normal h-[20px] md:ml-[0] ml-[3px] md:mt-[0] mt-[4px] not-italic pl-[4px] pr-[20px] rounded-[7px] text-left text-purple_A204 tracking-[-0.90px] w-[105px]"
                      variant="body43"
                    >
                      pages/_app.js
                    </Text>
                    <Text
                      className="font-normal md:mt-[0] mt-[2px] not-italic text-gray_919 text-left tracking-[-0.90px] w-[auto]"
                      variant="body37"
                    >
                      or
                    </Text>
                    <Text
                      className="bg-red_50 font-normal h-[20px] md:ml-[0] ml-[6px] md:mt-[0] mt-[4px] not-italic pl-[4px] pr-[20px] rounded-[7px] text-left text-purple_A204 tracking-[-0.90px] w-[113px]"
                      variant="body43"
                    >
                      pages/_app.tsx
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_919 text-left tracking-[-0.90px] w-[auto]"
                      variant="body37"
                    >
                      (create it if it doesn&#39;t exist) and add the following
                      code:
                    </Text>
                  </div>
                  <div className="flex items-center justify-start mt-[20px] rounded-[14px] w-[100%]">
                    <div className="bg-gray_803 flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[15px] rounded-[14px] shadow-bs22 w-[100%]">
                      <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[5px] pr-[2px] py-[2px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col mr-[342px] relative sm:w-[100%] w-[56%]">
                          <div className="h-[123px] md:h-[71px] mx-[auto] w-[100%]">
                            <div className="absolute h-[113px] md:h-[71px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
                              <div className="absolute md:h-[71px] h-[81px] left-[0] top-[0] w-[78%]">
                                <Text
                                  className="absolute font-normal inset-x-[0] leading-[21.00px] mx-[auto] not-italic text-bluegray_402 text-left top-[0] w-[100%]"
                                  variant="body43"
                                ></Text>
                                <div className="absolute bottom-[0] flex items-start justify-start left-[18%] self-stretch w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                    variant="body43"
                                  ></Text>
                                </div>
                              </div>
                              <Text
                                className="absolute bottom-[0] font-normal inset-x-[0] leading-[21.00px] mx-[auto] not-italic text-left text-purple_200 w-[100%]"
                                variant="body43"
                              ></Text>
                            </div>
                            <div className="absolute bottom-[0] flex items-start justify-start right-[22%] self-stretch w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                variant="body43"
                              ></Text>
                            </div>
                          </div>
                          <Text
                            className="font-normal leading-[21.00px] ml-[16px] mt-[-10px] not-italic text-left text-teal_50 sm:w-[100%] w-[80%] z-[1]"
                            variant="body43"
                          ></Text>
                        </div>
                        <div className="flex flex-row items-start justify-start md:ml-[0] ml-[33px] mt-[2px] self-stretch w-[auto]">
                          <div className="flex items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body43"
                            ></Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-left text-teal_50 w-[auto]"
                            variant="body43"
                          >
                            {">"}
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8.41px] items-start justify-start md:ml-[0] ml-[50px] pr-[1.81px] self-stretch w-[auto]">
                          <div className="flex items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body44"
                            ></Text>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body43"
                            ></Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-left text-teal_50 w-[auto]"
                            variant="body43"
                          >
                            {"/>"}
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start md:ml-[0] ml-[33px] self-stretch w-[auto]">
                          <div className="flex items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body43"
                            ></Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-left text-teal_50 w-[auto]"
                            variant="body43"
                          >
                            {">"}
                          </Text>
                        </div>
                        <Text
                          className="font-normal leading-[21.00px] my-[2px] not-italic text-left text-teal_50 sm:w-[100%] w-[23%]"
                          variant="body43"
                        ></Text>
                      </div>
                      <div className="bg-gray_803 flex md:flex-1 items-center justify-start rounded-[7px] md:w-[100%] w-[5%]">
                        <Img
                          src="images/img_frame.svg"
                          className="h-[18px] mb-[295px] w-[18px]"
                          alt="frame_One"
                        />
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-semibold mt-[24px] text-gray_919 text-left tracking-[-1.20px] w-[auto]"
                    variant="body28"
                  >
                    Cutomizing theme
                  </Text>
                  <div className="flex flex-col mt-[11px] pr-[5px] pt-[5px] relative w-[100%]">
                    <Text
                      className="font-normal leading-[31.00px] mx-[auto] not-italic text-gray_919 text-left tracking-[-0.90px] sm:w-[100%] w-[97%]"
                      variant="body37"
                    >
                      If you intend to customise the default theme object to
                      match your design requirements, you need to extend the
                    </Text>
                    <div className="bg-red_50 flex items-start justify-end mb-[3px] ml-[29px] mt-[-9.97px] rounded-[7px] w-[auto] z-[1]">
                      <Text
                        className="font-normal md:ml-[0] ml-[2px] not-italic text-left text-purple_A204 tracking-[-0.90px] w-[auto]"
                        variant="body44"
                      >
                        theme
                      </Text>
                    </div>
                    <Text
                      className="font-normal ml-[74px] mt-[-NaNpx] not-italic text-gray_919 text-left tracking-[-0.90px] w-[auto] z-[1]"
                      variant="body37"
                    >
                      .
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start pr-[3px] py-[3px] w-[100%]">
                    <Text
                      className="font-normal md:mt-[0] mt-[2px] not-italic text-gray_919 text-left tracking-[-0.90px] w-[auto]"
                      variant="body37"
                    >
                      NextUI provides a
                    </Text>
                    <div className="bg-red_50 flex md:flex-1 items-start justify-start md:ml-[0] ml-[3px] md:mt-[0] mt-[4px] rounded-[7px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal md:ml-[0] ml-[2px] not-italic text-left text-purple_A204 tracking-[-0.90px] w-[auto]"
                        variant="body43"
                      >
                        createTheme
                      </Text>
                    </div>
                    <Text
                      className="font-normal md:mt-[0] mt-[2px] not-italic text-gray_919 text-left tracking-[-0.90px] w-[auto]"
                      variant="body37"
                    >
                      function that deep merges the default theme with your
                      customizations.
                    </Text>
                  </div>
                  <div className="flex items-center justify-start mt-[20px] rounded-[14px] w-[100%]">
                    <div className="bg-gray_803 flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[15px] rounded-[14px] shadow-bs22 w-[100%]">
                      <div className="flex md:flex-1 flex-col justify-start md:ml-[0] ml-[5px] pr-[2px] py-[2px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col mr-[233px] relative sm:w-[100%] w-[70%]">
                          <div className="md:h-[336px] h-[417px] mx-[auto] w-[100%]">
                            <div className="absolute md:h-[336px] h-[407px] inset-[0] justify-center m-[auto] w-[100%]">
                              <div className="absolute md:h-[71px] h-[81px] left-[0] top-[0] w-[61%]">
                                <Text
                                  className="absolute font-normal leading-[21.00px] left-[0] not-italic text-bluegray_402 text-left top-[0] sm:w-[100%] w-[69%]"
                                  variant="body43"
                                ></Text>
                                <div className="absolute bottom-[0] flex items-start justify-start right-[0] self-stretch w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                    variant="body43"
                                  ></Text>
                                </div>
                              </div>
                              <Text
                                className="absolute bottom-[0] font-normal inset-x-[0] leading-[21.00px] mx-[auto] not-italic text-left text-purple_200 w-[100%]"
                                variant="body43"
                              ></Text>
                            </div>
                            <div className="absolute bottom-[0] flex items-start justify-start left-[24%] self-stretch w-[auto]">
                              <Text
                                className="font-normal not-italic text-left text-teal_50 w-[auto]"
                                variant="body43"
                              ></Text>
                            </div>
                          </div>
                          <Text
                            className="font-normal leading-[21.00px] ml-[16px] mt-[-10px] not-italic text-left text-teal_50 sm:w-[100%] w-[64%] z-[1]"
                            variant="body43"
                          ></Text>
                        </div>
                        <div className="flex flex-row items-start justify-start md:ml-[0] ml-[33px] mt-[2px] md:w-[100%] w-[34%]">
                          <div className="flex items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body43"
                            ></Text>
                          </div>
                          <Text
                            className="font-normal ml-[8px] mt-[2px] not-italic text-left text-yellow_807 w-[auto]"
                            variant="body43"
                          >
                            theme
                          </Text>
                          <div className="flex items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body43"
                            ></Text>
                          </div>
                          <Text
                            className="font-normal mt-[3px] not-italic text-left text-teal_50 w-[auto]"
                            variant="body43"
                          >
                            {">"}
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8.41px] items-start justify-start md:ml-[0] ml-[50px] pr-[1.81px] self-stretch w-[auto]">
                          <div className="flex items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body44"
                            ></Text>
                          </div>
                          <div className="flex items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body43"
                            ></Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-left text-teal_50 w-[auto]"
                            variant="body43"
                          >
                            {"/>"}
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start md:ml-[0] ml-[33px] self-stretch w-[auto]">
                          <div className="flex items-start justify-start self-stretch w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-teal_50 w-[auto]"
                              variant="body43"
                            ></Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-left text-teal_50 w-[auto]"
                            variant="body43"
                          >
                            {">"}
                          </Text>
                        </div>
                        <Text
                          className="font-normal leading-[21.00px] my-[2px] not-italic text-left text-teal_50 sm:w-[100%] w-[23%]"
                          variant="body43"
                        ></Text>
                      </div>
                      <div className="bg-gray_803 flex md:flex-1 items-center justify-start rounded-[7px] md:w-[100%] w-[5%]">
                        <Img
                          src="images/img_frame.svg"
                          className="h-[18px] mb-[568px] w-[18px]"
                          alt="frame_Two"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-end mt-[20px] pr-[3px] py-[3px] w-[100%]">
                    <Text
                      className="font-normal mt-[2px] not-italic text-gray_919 text-left tracking-[-0.90px] w-[auto]"
                      variant="body37"
                    ></Text>
                  </div>
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between py-[101px] w-[100%]">
                    <div className="flex flex-row items-center justify-start pl-[8px] pr-[7.78px] py-[4px] self-stretch w-[auto]">
                      <Img
                        src="images/img_arrowleft_light_blue_a700.svg"
                        className="h-[20px] w-[20px]"
                        alt="arrowleft"
                      />
                      <Text
                        className="font-normal not-italic text-gray_919 text-left w-[auto]"
                        variant="body41"
                      >
                        Getting Started
                      </Text>
                    </div>
                    <div className="md:h-[20px] h-[32px] px-[8px] py-[4px] relative w-[203px]">
                      <Text
                        className="absolute font-normal h-[max-content] inset-y-[0] left-[25%] my-[auto] not-italic text-gray_919 text-left w-[auto]"
                        variant="body41"
                      >
                        Theme: Default theme
                      </Text>
                      <Img
                        src="images/img_arrowleft_light_blue_a700.svg"
                        className="absolute h-[20px] inset-y-[0] my-[auto] right-[25%] w-[20px]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <Text
                    className="font-normal mt-[7px] not-italic text-left text-light_blue_A700 tracking-[-0.60px] w-[auto]"
                    variant="body47"
                  >
                    Edit this page on GitHub
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-[12px] items-end justify-start p-[11px] md:w-[100%] w-[97%]">
              <div className="flex flex-row gap-[3.14px] items-start justify-start ml-[auto] mt-[4px] self-stretch w-[auto]">
                <Text
                  className="font-normal not-italic text-bluegray_402 text-left w-[auto]"
                  variant="body43"
                >
                  Created by
                </Text>
                <Text
                  className="font-normal not-italic text-left text-light_blue_A700 w-[auto]"
                  variant="body43"
                >
                  Junior Garcia
                </Text>
              </div>
              <div className="flex flex-row gap-[7.61px] items-center justify-start mb-[4px] ml-[auto] self-stretch w-[auto]">
                <Text
                  className="font-semibold text-gray_919 text-left w-[auto]"
                  variant="body41"
                >
                  Deployed on
                </Text>
                <Img
                  src="images/img_search_black_900.svg"
                  className="h-[18px] w-[79px]"
                  alt="search_One"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col gap-[14px] md:hidden justify-start pl-[2px] pt-[2px] right-[0] top-[3%] w-[28%]">
          <Text
            className="font-semibold md:ml-[0] ml-[13px] text-gray_919 text-left tracking-[-0.96px] w-[auto]"
            variant="body34"
          >
            Contents
          </Text>
          <div className="flex flex-col gap-[9px] justify-start md:ml-[0] ml-[33px] pb-[2px] md:w-[100%] w-[94%]">
            <div className="flex flex-row gap-[11px] items-center justify-start pr-[2px] py-[2px] w-[100%]">
              <div className="bg-black_900 h-[5px] my-[8px] rounded-[2px] w-[5px]"></div>
              <Text
                className="font-medium mt-[6px] text-black_900 text-left w-[auto]"
                variant="body46"
              >
                Next.js 13
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[16px] md:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_402 text-left w-[auto]"
                variant="body46"
              >
                Next.js 12 and below
              </Text>
              <Text
                className="font-normal mt-[12px] not-italic text-bluegray_402 text-left w-[auto]"
                variant="body46"
              >
                SSR Setup
              </Text>
              <Text
                className="font-normal mt-[12px] not-italic text-bluegray_402 text-left w-[auto]"
                variant="body46"
              >
                Provider Setup
              </Text>
              <Text
                className="font-normal mt-[12px] not-italic text-bluegray_402 text-left w-[auto]"
                variant="body46"
              >
                Cutomizing theme
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumPage;
