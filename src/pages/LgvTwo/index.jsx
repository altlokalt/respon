import React from "react";

import { Img, Text, Button, Input, List } from "components";

const LgvTwoPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col gap-[26px] items-end justify-start w-[100%]">
          <div className="flex flex-col md:px-[20px] relative md:w-[100%] w-[87%]">
            <div className="md:h-[1210px] h-[2345px] mx-[auto] w-[100%]">
              <div className="absolute h-[1199px] left-[2%] top-[0] md:w-[100%] w-[91%]">
                <Img
                  src="images/img_svg_1199x1371.png"
                  className="absolute h-[1199px] inset-y-[0] my-[auto] object-cover right-[0] w-[auto]"
                  alt="svg"
                />
                <div className="absolute flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly left-[0] top-[13%] w-[93%]">
                  <div className="flex flex-col items-start justify-start md:mt-[0] mt-[144px] md:w-[100%] w-[49%]">
                    <Text
                      className="font-bold leading-[67.00px] text-gray_919 text-left tracking-[-2.80px] sm:w-[100%] w-[93%]"
                      variant="body5"
                    ></Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[2px] mt-[6px] text-bluegray_402 text-left tracking-[-1.00px] w-[auto]"
                      variant="body33"
                    >
                      Beautiful, fast and modern React UI library.
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-start mt-[36px] pr-[166px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                      <Button className="bg-light_blue_A700 cursor-pointer font-medium min-w-[136px] py-[10px] rounded-[20px] text-[16px] text-center text-white_A700 w-[auto]">
                        Get Started
                      </Button>
                      <Input
                        wrapClassName="bg-white_A700_4c flex sm:flex-1 pl-[20px] pr-[31px] py-[11px] rounded-[20px] shadow-bs10 sm:w-[100%] w-[67%]"
                        className="font-normal not-italic p-[0] placeholder:text-gray_919 sm:pr-[20px] text-[14px] text-gray_919 text-left w-[100%]"
                        name="div"
                        placeholder="$ npm install @nextui-org/react"
                        suffix={
                          <Img
                            src="images/img_videocamera.svg"
                            className="ml-[35px] my-[auto]"
                            alt="video_camera"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                  <div className="md:h-[350px] h-[540px] pl-[100px] sm:pl-[20px] md:pl-[40px] relative md:w-[100%] w-[52%]">
                    <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[9%] w-[73%]">
                      <div className="flex flex-col gap-[40px] justify-start w-[100%]">
                        <div className="flex flex-row items-start justify-between ml-[auto] md:w-[100%] w-[95%]">
                          <div className="flex flex-col gap-[7px] items-start justify-start mt-[23px] w-[52%]">
                            <Text
                              className="font-normal md:ml-[0] ml-[4px] not-italic text-gray_919 text-left w-[auto]"
                              variant="body43"
                            >
                              Input
                            </Text>
                            <div className="md:h-[20px] h-[40px] pl-[16px] pr-[6px] py-[10px] relative rounded-[12px] shadow-bs11 w-[253px]">
                              <div className="absolute flex h-[max-content] inset-[0] items-start justify-start m-[auto] self-stretch w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_919 text-left w-[auto]"
                                  variant="body43"
                                >
                                  NextUI
                                </Text>
                              </div>
                              <Img
                                src="images/img_close.svg"
                                className="absolute h-[20px] inset-y-[0] my-[auto] right-[15%] w-[20px]"
                                alt="close"
                              />
                            </div>
                          </div>
                          <div className="bg-gray_202 flex items-start justify-start mb-[52px] p-[4px] rounded-[18px] w-[14%]">
                            <Button className="bg-white_A700 flex h-[25px] items-center justify-center p-[6px] rounded-[12px] w-[25px]">
                              <Img
                                src="images/img_vector_black_900.svg"
                                className=""
                                alt="vector"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex flex-col items-start justify-start mr-[236px] p-[12px] rounded-[14px] shadow-bs10 md:w-[100%] w-[55%]">
                          <div className="flex flex-row gap-[14px] items-center justify-between md:ml-[0] ml-[4px] md:w-[100%] w-[97%]">
                            <div className="bg-gray_202 flex h-[48px] items-center justify-start p-[2px] rounded-[50%] w-[48px]">
                              <Img
                                src="images/img_avatar3png.png"
                                className="h-[44px] md:h-[auto] rounded-[50%] w-[44px]"
                                alt="avatar3png"
                              />
                            </div>
                            <div className="flex flex-row items-start justify-evenly w-[75%]">
                              <div className="flex flex-col gap-[-6.5px] items-start justify-start pb-[0.5px] sm:pr-[20px] pr-[32.73px] self-stretch w-[auto]">
                                <Text
                                  className="font-semibold text-gray_919 text-left w-[auto]"
                                  variant="body42"
                                >
                                  Zoey Lang
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_402 text-left tracking-[-0.70px] w-[auto]"
                                  variant="body43"
                                >
                                  @zoeylang
                                </Text>
                              </div>
                              <Button className="bg-light_blue_A700 cursor-pointer font-semibold mb-[9px] min-w-[77px] py-[8px] rounded-[16px] text-[12px] text-center text-white_A700 w-[auto]">
                                Follow
                              </Button>
                            </div>
                          </div>
                          <Text
                            className="font-normal leading-[24.00px] md:ml-[0] ml-[4px] mt-[5px] not-italic text-bluegray_404 text-left tracking-[-0.70px] sm:w-[100%] w-[89%]"
                            variant="body43"
                          >
                            Full-stack developer, @getnextui lover she/her 🎉
                          </Text>
                          <div className="flex flex-row gap-[9px] items-center justify-start md:ml-[0] ml-[4px] mt-[3px] sm:pr-[20px] md:pr-[40px] pr-[78px] md:w-[100%] w-[97%]">
                            <div className="flex items-start justify-start pb-[0.5px] self-stretch w-[auto]">
                              <Text
                                className="font-semibold text-bluegray_402 text-left tracking-[-0.70px] w-[auto]"
                                variant="body43"
                              ></Text>
                            </div>
                            <div className="flex items-start justify-start pb-[0.5px] self-stretch w-[auto]">
                              <Text
                                className="font-semibold text-bluegray_402 text-left tracking-[-0.70px] w-[auto]"
                                variant="body43"
                              ></Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[13%] flex flex-col gap-[11px] items-center justify-start left-[21%] w-[26%]">
                      <div className="bg-deep_purple_500 flex items-center justify-start pt-[6px] px-[6px] rounded-[14px] shadow-bs12 w-[100%]">
                        <div className="flex flex-col items-center justify-start pt-[3px] md:w-[100%] w-[93%]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body43"
                          >
                            Developers love Next.js
                          </Text>
                          <Img
                            src="images/img_offer.svg"
                            className="h-[8px] rounded-bl-[0] rounded-br-[2px] rounded-tl-[0] rounded-tr-[0] w-[auto]"
                            alt="offer"
                          />
                        </div>
                      </div>
                      <Button className="border-[3px] border-light_blue_A700 border-solid cursor-pointer font-medium min-w-[83px] py-[7px] rounded-[9px] text-[14px] text-center text-light_blue_A700 w-[auto]">
                        Tooltip
                      </Button>
                    </div>
                    <div className="absolute bg-white_A700 flex h-[120px] items-center justify-start right-[27%] rounded-[14px] top-[0] w-[120px]">
                      <div className="flex h-[120px] items-center justify-start rounded-[14px] w-[120px]">
                        <div className="h-[120px] relative rounded-[14px] w-[120px]">
                          <Img
                            src="images/img_cardexample6jpeg.png"
                            className="h-[120px] m-[auto] object-cover rounded-[14px] w-[120px]"
                            alt="cardexample6jpe"
                          />
                          <div className="absolute flex inset-x-[0] items-start justify-start mx-[auto] p-[8px] top-[0] w-[100%]">
                            <Text
                              className="font-bold mb-[5px] md:ml-[0] ml-[3px] text-left text-white_A700_aa tracking-[-0.50px] uppercase w-[auto]"
                              variant="body51"
                            >
                              New
                            </Text>
                          </div>
                          <div className="absolute bg-white_A700_4c border-solid border-t-[1px] border-white_A700_33 bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] p-[5px] rounded-bl-[14px] rounded-br-[14px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-row gap-[25px] items-center justify-between py-[2px] md:w-[100%] w-[88%]">
                              <Text
                                className="font-semibold text-left text-white_A700 tracking-[-0.60px] w-[auto]"
                                variant="body47"
                              >
                                Camera
                              </Text>
                              <Text
                                className="font-semibold text-left text-white_A700 tracking-[-0.60px] w-[auto]"
                                variant="body47"
                              >
                                $525
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-row items-center justify-center right-[0] self-stretch top-[27%] w-[auto]">
                      <Button className="bg-white_A700 cursor-pointer font-medium min-w-[54px] py-[7px] rounded-bl-[9px] rounded-br-[0] rounded-tl-[9px] rounded-tr-[0] text-[14px] text-center text-gray_919 w-[auto]">
                        Fast
                      </Button>
                      <Button className="bg-white_A700 cursor-pointer font-medium min-w-[74px] py-[7px] text-[14px] text-center text-gray_919 w-[auto]">
                        Modern
                      </Button>
                      <Button className="bg-white_A700 cursor-pointer font-medium min-w-[70px] py-[7px] rounded-bl-[0] rounded-br-[9px] rounded-tl-[0] rounded-tr-[9px] text-[14px] text-center text-gray_919 w-[auto]">
                        Unique
                      </Button>
                    </div>
                    <div className="absolute bottom-[0] h-[349px] md:h-[350px] right-[0] w-[52%]">
                      <div className="flex flex-col gap-[50px] h-[100%] justify-start m-[auto] w-[100%]">
                        <div className="flex md:ml-[0] ml-[54px] relative w-[86%]">
                          <div className="bg-white_A700 flex h-[100px] sm:hidden items-center justify-start my-[auto] p-[20px] rounded-[14px] shadow-bs10 w-[100px]">
                            <Img
                              src="images/img_svg.svg"
                              className="h-[60px] w-[60px]"
                              alt="svg_One"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-start ml-[-12px] mt-[30px] self-stretch w-[auto] z-[1]">
                            <Button className="bg-gray_104 flex h-[36px] items-center justify-center p-[11px] rounded-bl-[11px] rounded-br-[0] rounded-tl-[11px] rounded-tr-[0] w-[36px]">
                              <Img
                                src="images/img_arrowleft_gray_919.svg"
                                className=""
                                alt="arrowleft"
                              />
                            </Button>
                            <div className="bg-gray_104 flex items-start justify-start pl-[14.73px] pr-[14.27px] py-[7.5px] w-[36px]">
                              <Text
                                className="capitalize font-normal not-italic text-center text-gray_919 w-[auto]"
                                variant="body43"
                              >
                                1
                              </Text>
                            </div>
                            <Img
                              src="images/img_map.svg"
                              className="h-[36px] w-[36px]"
                              alt="map"
                            />
                            <div className="bg-gray_104 flex items-start justify-start pl-[13.73px] pr-[13.27px] py-[7.5px] w-[36px]">
                              <Text
                                className="capitalize font-normal not-italic text-center text-gray_919 w-[auto]"
                                variant="body43"
                              >
                                5
                              </Text>
                            </div>
                            <div className="bg-gray_104 h-[36px] pl-[12.38px] pr-[13.63px] py-[7.5px] relative rounded-[50%] shadow-bs10 w-[36px]">
                              <Text
                                className="capitalize font-bold m-[auto] text-center text-white_A700 w-[auto]"
                                variant="body43"
                              >
                                6
                              </Text>
                              <div className="absolute bg-light_blue_A700 h-[36px] inset-[0] justify-center m-[auto] rounded-[50%] shadow-bs13 w-[36px]"></div>
                            </div>
                            <div className="bg-gray_104 flex items-start justify-start px-[14px] py-[7.5px] w-[36px]">
                              <Text
                                className="capitalize font-normal not-italic text-center text-gray_919 w-[auto]"
                                variant="body43"
                              >
                                7
                              </Text>
                            </div>
                            <Img
                              src="images/img_map.svg"
                              className="h-[36px] w-[8px]"
                              alt="map_One"
                            />
                            <Text
                              className="bg-gray_104 capitalize font-normal justify-center not-italic pl-[9.36px] pr-[10.64px] py-[7.5px] self-stretch text-center text-gray_919 w-[auto]"
                              variant="body43"
                            >
                              10
                            </Text>
                            <div className="bg-gray_104 flex items-start justify-end pl-[13px] py-[13px] rounded-bl-[0] rounded-br-[11px] rounded-tl-[0] rounded-tr-[11px] w-[1%]">
                              <Img
                                src="images/img_vector_gray_919.svg"
                                className="h-[8px] md:ml-[0] ml-[2px] rounded-tr-[11px] w-[auto]"
                                alt="vector_One"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 h-[200px] mr-[166px] relative rounded-[14px] w-[200px]">
                          <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] rounded-[14px] w-[200px]">
                            <div className="flex h-[200px] items-center justify-start rounded-[14px] w-[200px]">
                              <Img
                                src="images/img_herocardpng.png"
                                className="h-[200px] md:h-[auto] object-cover rounded-[14px] w-[200px]"
                                alt="herocardpng"
                              />
                            </div>
                          </div>
                          <div className="absolute bg-white_A700_4c border-solid border-t-[1px] border-white_A700_33 bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] p-[8px] rounded-bl-[14px] rounded-br-[14px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <div className="flex flex-row gap-[18px] items-center justify-between md:w-[100%] w-[96%]">
                              <Text
                                className="font-normal not-italic text-left text-white_A700 tracking-[-0.60px] w-[auto]"
                                variant="body47"
                              >
                                Available soon.
                              </Text>
                              <Text
                                className="bg-deep_purple_500 font-medium h-[24px] justify-center px-[7px] py-[3px] rounded-[12px] text-center text-white_A700 w-[81px]"
                                variant="body43"
                              >
                                Notify Me
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-white_A700 h-[80px] sm:hidden right-[26%] rounded-[14px] shadow-bs10 top-[26%] w-[80px]"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex md:flex-col flex-row gap-[24px] items-center justify-start left-[1%] p-[12px] top-[37%] w-[83%]">
                <div className="bg-white_A700_0c flex flex-col gap-[8px] items-center justify-start md:mt-[0] my-[12px] p-[12px] rounded-[14px] shadow-bs10 md:w-[100%] w-[24%]">
                  <div className="flex flex-row gap-[8px] items-center justify-start pr-[159px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                    <Img
                      src="images/img_floatingicon.svg"
                      className="rounded-[50%] w-[40px]"
                      alt="floatingicon"
                    />
                    <Text
                      className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                      variant="body38"
                    >
                      Themeable
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[28.00px] mb-[4px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[94%]"
                    variant="body41"
                  >
                    Provides a simple way to customize default themes, you can
                    change the colors, fonts, breakpoints and everything you
                    need.
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[24px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700_0c flex flex-col gap-[8px] items-start justify-start p-[12px] rounded-[14px] shadow-bs10 w-[100%]">
                    <div className="flex flex-row gap-[8px] items-center justify-start sm:pr-[20px] pr-[213px] md:pr-[40px] w-[100%]">
                      <Button className="bg-red_50 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_location_purple_a204.svg"
                          className=""
                          alt="location"
                        />
                      </Button>
                      <Text
                        className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                        variant="body38"
                      >
                        Fast
                      </Text>
                    </div>
                    <Text
                      className="font-normal leading-[28.00px] mb-[32px] md:ml-[0] ml-[4px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[93%]"
                      variant="body41"
                    >
                      Avoids unnecessary styles props at runtime, making it more
                      performant than other UI libraries.
                    </Text>
                  </div>
                  <div className="bg-white_A700_0c flex flex-col gap-[8px] items-center justify-start p-[12px] rounded-[14px] shadow-bs10 w-[100%]">
                    <div className="flex flex-row gap-[8px] items-center justify-start pr-[134px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                      <Button className="bg-red_50 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                        <Img
                          src="images/img_vector_purple_a204.svg"
                          className="h-[19px]"
                          alt="vector"
                        />
                      </Button>
                      <Text
                        className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                        variant="body38"
                      >
                        Light & Dark UI
                      </Text>
                    </div>
                    <Text
                      className="font-normal leading-[28.00px] mb-[32px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[95%]"
                      variant="body41"
                    >
                      Automatic dark mode recognition, NextUI automatically
                      changes the theme when detects HTML theme prop changes.
                    </Text>
                  </div>
                </List>
                <div className="bg-white_A700_0c flex flex-col gap-[8px] items-start justify-start md:mt-[0] my-[12px] p-[12px] rounded-[14px] shadow-bs10 md:w-[100%] w-[24%]">
                  <div className="flex flex-row gap-[8px] items-center justify-start pr-[165px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                    <Img
                      src="images/img_clock_red_50.svg"
                      className="rounded-[50%] w-[40px]"
                      alt="clock"
                    />
                    <Text
                      className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                      variant="body38"
                    >
                      Unique DX
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[28.00px] mb-[32px] md:ml-[0] ml-[4px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[83%]"
                    variant="body41"
                  >
                    NextUI is fully-typed to minimize the learning curve, and
                    provide the best possible developer experience.
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[0] h-[1210px] inset-x-[0] mx-[auto] w-[100%]">
                <div className="absolute h-[1210px] inset-[0] justify-center m-[auto] md:w-[100%] w-[99%]">
                  <div className="absolute h-[1210px] inset-[0] justify-center m-[auto] w-[100%]">
                    <Img
                      src="images/img_theminggradientsvg.png"
                      className="absolute flex h-[1210px] inset-y-[0] my-[auto] object-cover right-[0] w-[1143px]"
                      alt="theminggradient"
                    />
                    <Text
                      className="absolute font-medium sm:hidden leading-[35.00px] left-[0] text-bluegray_402 text-left top-[25%] tracking-[-1.00px] sm:w-[100%] w-[38%]"
                      variant="body33"
                    >
                      NextUI provides a simple way to customize the default
                      themes, you can change the colors, fonts, breakpoints and
                      everything you need.
                    </Text>
                  </div>
                  <Text
                    className="absolute font-bold left-[0] text-gray_919 text-left top-[14%] tracking-[-2.80px] w-[auto]"
                    variant="body5"
                  >
                    Apply your own
                  </Text>
                </div>
                <div className="absolute flex sm:flex-col flex-row gap-[8px] items-start justify-start left-[2%] sm:pr-[20px] md:pr-[40px] pr-[877px] top-[19%] w-[82%]">
                  <Text
                    className="bg-clip-text bg-gradient13  font-bold sm:mt-[0] mt-[5px] text-left text-transparent tracking-[-2.80px] w-[auto]"
                    variant="body5"
                  >
                    theming
                  </Text>
                  <Text
                    className="font-bold mb-[5px] text-gray_919 text-left tracking-[-2.80px] w-[auto]"
                    variant="body5"
                  >
                    decisions.
                  </Text>
                </div>
                <div className="absolute flex left-[0] pb-[17px] top-[29%] md:w-[100%] w-[83%]">
                  <div className="flex flex-col gap-[32px] justify-start my-[auto] w-[53%]">
                    <div className="flex-col hidden relative md:w-[100%] w-[724px]">
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mx-[auto] sm:px-[20px] px-[30px] w-[100%]">
                        <div className="flex sm:flex-1 flex-col gap-[10px] items-start justify-center sm:pr-[20px] pr-[28px] py-[28px] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_clock_light_blue_a700.svg"
                            className="h-[44px] w-[44px]"
                            alt="clock_One"
                          />
                          <Text
                            className="font-semibold mb-[5px] text-left text-light_blue_A700 tracking-[-0.80px] w-[auto]"
                            variant="body41"
                          >
                            NextUI
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-[10px] items-center justify-center sm:ml-[0] ml-[24px] sm:pr-[20px] pr-[29px] py-[29px] sm:w-[100%] w-[13%]">
                          <Img
                            src="images/img_cut.svg"
                            className="h-[44px] w-[44px]"
                            alt="cut"
                          />
                          <Text
                            className="font-semibold mb-[4px] text-gray_400 text-left tracking-[-0.80px] w-[auto]"
                            variant="body41"
                          >
                            Modern
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-center sm:ml-[0] ml-[24px] sm:pr-[20px] pr-[28px] py-[28px] sm:w-[100%] w-[13%]">
                          <Img
                            src="images/img_settings_gray_400.svg"
                            className="h-[44px] md:ml-[0] ml-[4px] w-[44px]"
                            alt="settings"
                          />
                          <Text
                            className="font-semibold mb-[3px] text-gray_400 text-left tracking-[-0.80px] w-[auto]"
                            variant="body41"
                          >
                            Elegant
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-col gap-[10px] items-start justify-start sm:ml-[0] ml-[24px] sm:pr-[20px] pr-[30px] py-[30px] sm:w-[100%] w-[12%]">
                          <Img
                            src="images/img_calculator_gray_400.svg"
                            className="h-[44px] w-[44px]"
                            alt="calculator"
                          />
                          <Text
                            className="font-semibold mb-[3px] md:ml-[0] ml-[3px] text-gray_400 text-left tracking-[-0.80px] w-[auto]"
                            variant="body41"
                          >
                            Retro
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex items-center justify-end mt-[-11.87px] mx-[auto] py-[4px] rounded-[35px] self-stretch shadow-bs12 w-[auto] z-[1]">
                        <div className="md:h-[221px] h-[241px] px-[16px] py-[20px] relative md:w-[100%] w-[648px]">
                          <div className="absolute bottom-[0] flex inset-x-[0] mx-[auto] sm:pr-[20px] pr-[24.02px] md:w-[100%] w-[635px]">
                            <div className="h-[221px] my-[auto] w-[52%]">
                              <div className="bg-gradient14  h-[200px] ml-[16px] rounded-[32px] w-[200px]"></div>
                              <Img
                                src="images/img_shoes1png.png"
                                className="absolute h-[221px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                                alt="shoes1png"
                              />
                            </div>
                            <div className="flex flex-col justify-start ml-[-87.34px] pt-[3px] w-[63%] z-[1]">
                              <div className="flex flex-col gap-[6px] items-start justify-start md:ml-[0] ml-[12px] md:w-[100%] w-[auto]">
                                <Text
                                  className="font-semibold text-gray_919 text-left tracking-[-1.00px] w-[auto]"
                                  variant="body33"
                                >
                                  Nike Adapt BB 2.0
                                </Text>
                                <Text
                                  className="font-semibold text-bluegray_402 text-left tracking-[-0.80px] w-[auto]"
                                  variant="body41"
                                >
                                  Consistent, customized fit, game-changing.
                                </Text>
                              </div>
                              <div className="flex flex-col mt-[2px] relative w-[100%]">
                                <div className="h-[105px] md:h-[70px] mx-[auto] w-[100%]">
                                  <div className="absolute flex flex-row inset-x-[0] items-center justify-start mx-[auto] pr-[12px] py-[12px] top-[0] w-[94%]">
                                    <Text
                                      className="font-bold text-gray_919 text-left tracking-[-0.90px] w-[auto]"
                                      variant="body37"
                                    >
                                      $279.97
                                    </Text>
                                    <Text
                                      className="font-semibold line-through ml-[15px] text-bluegray_404 text-left tracking-[-0.90px] w-[auto]"
                                      variant="body37"
                                    >
                                      $350
                                    </Text>
                                    <Text
                                      className="font-semibold ml-[6px] text-green_A702 text-left tracking-[-0.90px] w-[auto]"
                                      variant="body37"
                                    >
                                      20% off
                                    </Text>
                                  </div>
                                  <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-center justify-start mx-[auto] p-[12px] w-[100%]">
                                    <Button className="bg-light_blue_A700 cursor-pointer font-semibold h-[30px] my-[8px] py-[6px] rounded-[9px] text-[14px] text-center text-white_A700 w-[30px]">
                                      XS
                                    </Button>
                                    <Text
                                      className="font-semibold ml-[22px] text-center text-gray_919 w-[auto]"
                                      variant="body43"
                                    >
                                      S
                                    </Text>
                                    <Text
                                      className="font-semibold ml-[30px] text-center text-gray_919 w-[auto]"
                                      variant="body43"
                                    >
                                      M
                                    </Text>
                                    <Text
                                      className="font-semibold ml-[31px] text-center text-gray_919 w-[auto]"
                                      variant="body43"
                                    >
                                      L
                                    </Text>
                                    <Text
                                      className="font-semibold h-[17px] ml-[29px] text-center text-gray_919 w-[auto]"
                                      variant="body43"
                                    >
                                      XL
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-row gap-[10.66px] items-start justify-start mt-[-12px] mx-[auto] pr-[147.89px] sm:pr-[20px] md:pr-[40px] pt-[8px] self-stretch w-[auto] z-[1]">
                                  <Button className="bg-light_blue_A700 cursor-pointer font-medium min-w-[97px] py-[11px] rounded-[12px] shadow-bs13 text-[14px] text-center text-white_A700 w-[auto]">
                                    Buy now
                                  </Button>
                                  <Button className="border-[2px] border-light_blue_A700 border-solid cursor-pointer font-medium min-w-[117px] py-[11px] rounded-[12px] text-[14px] text-center text-light_blue_A700 w-[auto]">
                                    Add to bag
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_alarm.svg"
                            className="absolute h-[30px] right-[7%] top-[0] w-[30px]"
                            alt="alarm"
                          />
                        </div>
                      </div>
                    </div>
                    <Button className="bg-blue_52 cursor-pointer font-medium hidden min-w-[88px] md:ml-[0] ml-[30px] mr-[605px] pl-[12px] pr-[11.86px] py-[4px] rounded-[13px] text-[12px] text-blue_801 text-center w-[auto]">
                      Learn more
                    </Button>
                  </div>
                  <Img
                    src="images/img_image.png"
                    className="h-[350px] ml-[-6px] my-[auto] object-cover w-[49%] z-[1]"
                    alt="image_Two"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start ml-[21px] mt-[-206.61px] w-[83%] z-[1]">
              <div className="flex flex-col relative md:w-[100%] w-[99%]">
                <div className="flex flex-row gap-[8px] items-start justify-start mx-[auto] pr-[1125px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                  <Text
                    className="font-bold mb-[4px] text-gray_919 text-left tracking-[-2.80px] w-[auto]"
                    variant="body5"
                  >
                    Do
                  </Text>
                  <Text
                    className="bg-clip-text bg-gradient15  font-bold mt-[4px] text-left text-transparent tracking-[-2.80px] w-[auto]"
                    variant="body5"
                  >
                    more.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-start mt-[-6.85px] mx-[auto] sm:pr-[20px] md:pr-[40px] pr-[953px] w-[100%] z-[1]">
                  <Text
                    className="font-bold text-gray_919 text-left tracking-[-2.80px] w-[auto]"
                    variant="body5"
                  >
                    Write
                  </Text>
                  <Text
                    className="bg-clip-text bg-gradient16  font-bold text-left text-transparent tracking-[-2.80px] w-[auto]"
                    variant="body5"
                  >
                    less code.
                  </Text>
                </div>
              </div>
              <div className="md:h-[1622px] sm:h-[451px] h-[512px] relative w-[100%]">
                <div className="absolute flex items-start justify-start left-[1%] p-[2px] top-[0] w-[auto]">
                  <Text
                    className="font-medium leading-[35.00px] my-[3px] text-bluegray_402 text-left tracking-[-1.00px] sm:w-[1111px]"
                    variant="body33"
                  >
                    <>
                      NextUI components have been created with the
                      Developer&#39;s experience
                      <br />
                      in mind, avoiding having to import multiple components to
                      display just one.
                    </>
                  </Text>
                </div>
                <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[18px] inset-x-[0] items-center justify-between mx-[auto] p-[9px] w-[100%]">
                  <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] my-[9px] pl-[304.19px] pr-[302.81px] pt-[379px] sm:px-[20px] md:px-[40px] self-stretch md:w-[100%] w-[auto]">
                    <Img
                      src="images/img_image.png"
                      className="h-[380px] md:h-[auto] object-cover w-[667px]"
                      alt="image_Three"
                    />
                    <Text
                      className="font-normal hidden not-italic text-gray_919 text-left tracking-[-1.00px] w-[auto]"
                      variant="body33"
                    >
                      NextUI
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] my-[9px] pl-[304.45px] pr-[302.55px] pt-[379px] sm:px-[20px] md:px-[40px] self-stretch md:w-[100%] w-[auto]">
                    <Img
                      src="images/img_image.png"
                      className="h-[380px] md:h-[auto] object-cover w-[667px]"
                      alt="image_Four"
                    />
                    <Text
                      className="font-normal hidden not-italic text-bluegray_404 text-left tracking-[-1.00px] w-[auto]"
                      variant="body33"
                    >
                      Others
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start ml-[6px] mt-[-NaNpx] sm:pt-[331px] sm:px-[20px] px-[24px] w-[85%] z-[1]">
              <div className="flex flex-row gap-[10px] items-start justify-start sm:pr-[20px] pr-[279px] md:pr-[40px] md:w-[100%] w-[33%]">
                <Img
                  src="images/img_svg_black_900_14x100.png"
                  className="h-[14px] md:h-[auto] object-cover w-[auto]"
                  alt="svg_Two"
                />
                <Text
                  className="bg-deep_purple_500 font-extrabold justify-center mb-[2px] pl-[8px] pr-[7.8px] py-[5px] rounded-[6px] self-stretch text-left text-shadow-ts text-white_A700 tracking-[0.60px] uppercase w-[auto]"
                  variant="body51"
                >
                  Beta
                </Text>
              </div>
              <div className="flex-row hidden items-center justify-end sm:px-[20px] md:px-[40px] px-[80px] md:w-[100%] w-[33%]">
                <Text
                  className="font-normal not-italic text-gray_919 text-left w-[auto]"
                  variant="body41"
                >
                  Docs
                </Text>
                <Text
                  className="font-normal ml-[21px] not-italic text-gray_919 text-left w-[auto]"
                  variant="body41"
                >
                  Components
                </Text>
                <Text
                  className="font-normal ml-[21px] not-italic text-gray_919 text-left w-[auto]"
                  variant="body41"
                >
                  Feedback
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-center pl-[10px] md:w-[100%] w-[36%]">
                <Img
                  src="images/img_div_bluegray_404.png"
                  className="h-[14px] md:h-[auto] hidden object-cover sm:w-[100%] w-[140px]"
                  alt="div_Three"
                />
                <div className="bg-gray_200_b2 md:h-[16px] h-[21px] hidden sm:ml-[0] ml-[10px] pl-[16px] sm:pr-[20px] pr-[28px] py-[9px] relative rounded-[8px] w-[200px]">
                  <div className="absolute flex font-inter items-start justify-start left-[76%] top-[43%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_404 text-left w-[auto]"
                      variant="body41"
                    >
                      Search...
                    </Text>
                  </div>
                  <Text
                    className="absolute bg-white_A700_cc font-normal font-roboto justify-center not-italic pl-[5px] pr-[6.75px] right-[3%] rounded-[6px] self-stretch text-center text-gray_900_99 text-shadow-ts1 top-[0] w-[auto]"
                    variant="body43"
                  >
                    ⌃ K
                  </Text>
                </div>
                <Button
                  className="bg-gray_104 cursor-pointer flex items-center justify-center min-w-[111px] sm:ml-[0] ml-[10px] px-[15px] py-[3px] rounded-[10px] w-[auto]"
                  leftIcon={
                    <Img
                      src="images/img_favorite_pink_500.png"
                      className="mb-[1px] mr-[4px]"
                      alt="favorite"
                    />
                  }
                >
                  <div className="font-medium text-[14px] text-center text-gray_919">
                    Sponsor
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[5300px] md:px-[20px] relative w-[100%]">
            <div className="absolute h-[5300px] inset-[0] justify-center m-[auto] w-[100%]">
              <div className="h-[5300px] m-[auto] w-[100%]">
                <div className="h-[5300px] sm:hidden m-[auto] w-[100%]">
                  <div className="absolute flex h-[100%] sm:hidden inset-y-[0] items-center justify-start left-[0] my-[auto] w-[86%]">
                    <div className="flex flex-col gap-[3940px] md:gap-[40px] justify-start w-[100%]">
                      <div className="h-[1271px] relative w-[100%]">
                        <div
                          className="absolute bg-cover bg-no-repeat flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[177px] sm:px-[20px] md:px-[40px] w-[77%]"
                          style={{
                            backgroundImage: "url('images/img_group112.svg')",
                          }}
                        >
                          <div className="sm:bottom-[300px] flex flex-col md:gap-[40px] gap-[72px] sm:h-[-22px] items-start justify-start sm:max-w-[] mb-[716px] sm:min-h-[1px] sm:mt-[1px] sm:mx-[1px] sm:relative md:w-[100%] w-[auto]">
                            <Text
                              className="font-bold text-gray_919 text-left tracking-[-2.80px] w-[auto]"
                              variant="body5"
                            >
                              Dark mode
                            </Text>
                            <Text
                              className="font-medium leading-[35.00px] md:ml-[0] ml-[2px] text-bluegray_402 text-left tracking-[-1.00px] w-[100%]"
                              variant="body33"
                            >
                              NextUI comes with a fully well-scaled default dark
                              theme that you can apply to your application with
                              just a few lines of code.
                            </Text>
                          </div>
                        </div>
                        <div className="absolute flex flex-row gap-[7px] items-center justify-center pr-[1043px] sm:pr-[20px] md:pr-[40px] right-[1%] top-[19%] w-[83%]">
                          <Text
                            className="font-bold text-gray_919 text-left tracking-[-2.80px] w-[auto]"
                            variant="body5"
                          >
                            is
                          </Text>
                          <Text
                            className="bg-clip-text bg-gradient17  font-bold text-left text-transparent tracking-[-2.80px] w-[auto]"
                            variant="body5"
                          >
                            effortless.
                          </Text>
                        </div>
                        <div className="absolute flex md:flex-col flex-row gap-[24px] h-[max-content] sm:hidden inset-y-[0] items-center justify-between my-[auto] p-[12px] right-[0] w-[85%]">
                          <div className="flex flex-col md:hidden items-start justify-start md:mt-[0] my-[12px] py-[14px] md:w-[100%] w-[auto]">
                            <div className="bg-gradient17  flex items-end justify-start p-[4px] rounded-[18px] w-[10%] md:w-[100%]">
                              <Button className="bg-pink_50 flex h-[25px] items-center justify-center p-[5px] rounded-[12px] w-[25px]">
                                <Img
                                  src="images/img_vector_purple_500.svg"
                                  className=""
                                  alt="vector_Two"
                                />
                              </Button>
                            </div>
                            <div className="bg-gray_803 flex flex-col gap-[10px] items-center justify-start mt-[35px] p-[12px] rounded-[14px] shadow-bs14 w-[100%]">
                              <div className="h-[98px] relative w-[100%]">
                                <Img
                                  src="images/img_home.svg"
                                  className="h-[24px] ml-[auto] mr-[12px] mt-[8px] w-[24px]"
                                  alt="home"
                                />
                                <div className="absolute flex h-[100%] inset-[0] items-center justify-start m-[auto] px-[12px] py-[16px] self-stretch w-[auto]">
                                  <div className="flex flex-row gap-[16px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[418px] self-stretch w-[auto]">
                                    <div className="bg-deep_purple_400 flex h-[64px] items-center justify-start rounded-[21px] w-[64px]">
                                      <Img
                                        src="images/img_herocardpng_64x64.png"
                                        className="h-[64px] md:h-[auto] object-cover rounded-[21px] w-[64px]"
                                        alt="herocardpng_One"
                                      />
                                    </div>
                                    <div className="flex flex-col items-start justify-start self-stretch w-[auto]">
                                      <Text
                                        className="font-semibold text-gray_203 text-left w-[auto]"
                                        variant="body43"
                                      >
                                        Daily Mix
                                      </Text>
                                      <Text
                                        className="font-semibold text-bluegray_404 text-left w-[auto]"
                                        variant="body43"
                                      >
                                        12 Tracks
                                      </Text>
                                      <Text
                                        className="font-semibold text-gray_203 text-left w-[auto]"
                                        variant="body41"
                                      >
                                        Frontend Radio
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start px-[12px] py-[16px] self-stretch md:w-[100%] w-[auto]">
                                <div className="h-[8px] overflow-hidden relative w-[100%]">
                                  <div className="w-full h-full absolute bg-gray_202 rounded-[4px]"></div>
                                  <div
                                    className="h-full absolute bg-purple_A204  rounded-[4px]"
                                    style={{ width: "30%" }}
                                  ></div>
                                </div>
                                <div className="flex flex-row sm:gap-[40px] gap-[534.88px] items-start justify-start pl-[2px] pr-[1.13px] py-[12px] self-stretch md:w-[100%] w-[auto]">
                                  <Text
                                    className="font-semibold text-left text-purple_A204 w-[auto]"
                                    variant="body43"
                                  >
                                    13:36
                                  </Text>
                                  <Text
                                    className="font-semibold text-bluegray_404 text-left w-[auto]"
                                    variant="body43"
                                  >
                                    35:01
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_div_gray_203.png"
                                className="h-[68px] sm:h-[auto] object-cover rounded-bl-[14px] rounded-br-[14px] rounded-tl-[0] rounded-tr-[0] md:w-[100%] w-[640px]"
                                alt="div_Four"
                              />
                            </div>
                            <Button className="bg-red_50 cursor-pointer font-medium min-w-[88px] my-[32px] pl-[12px] pr-[11.86px] py-[4px] rounded-[13px] text-[12px] text-center text-purple_A204 w-[auto]">
                              Learn more
                            </Button>
                          </div>
                          <Img
                            src="images/img_image.png"
                            className="h-[475px] sm:h-[auto] md:mt-[0] my-[12px] object-cover md:w-[100%] w-[auto]"
                            alt="image_Five"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-center justify-start md:ml-[0] ml-[270px] p-[16px] md:w-[100%] w-[83%]">
                        <div className="flex flex-row gap-[3.14px] items-start justify-start self-stretch w-[auto]">
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
                        <div className="flex flex-row gap-[7.61px] items-center justify-start self-stretch w-[auto]">
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
                  <div className="absolute h-[1210px] right-[0] top-[17%] md:w-[100%] w-[87%]">
                    <div className="absolute h-[1210px] inset-[0] justify-center m-[auto] w-[100%]">
                      <Img
                        src="images/img_customizationgradientsvg.png"
                        className="absolute h-[1210px] inset-y-[0] my-[auto] object-cover right-[0] w-[1075px]"
                        alt="customizationgr"
                      />
                      <div className="absolute flex flex-col items-start justify-start left-[0] p-[2px] top-[28%] w-[42%]">
                        <div className="md:h-[31px] h-[43px] mt-[2px] relative w-[100%]">
                          <Text
                            className="font-medium sm:hidden text-bluegray_402 text-left tracking-[-1.00px] w-[auto]"
                            variant="body33"
                          >
                            Thanks to NextUI is built on top of the amazing
                            CSS-in-JS library
                          </Text>
                          <div className="absolute md:h-[29px] h-[43px] inset-[0] justify-center m-[auto] w-[100%]">
                            <Text
                              className="absolute font-medium sm:hidden right-[6%] text-green_A702 text-left top-[0] tracking-[-1.00px] w-[auto]"
                              variant="body33"
                            >
                              Stitches
                            </Text>
                            <Text
                              className="absolute bottom-[0] font-medium inset-x-[0] mx-[auto] text-bluegray_402 text-left tracking-[-1.00px] w-[max-content]"
                              variant="body33"
                            >
                              , you can customize any components in several ways
                              eather using the
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-end ml-[auto] md:w-[100%] w-[12%]">
                          <Text
                            className="font-medium mt-[4px] text-green_A702 text-left tracking-[-1.00px] w-[auto]"
                            variant="body33"
                          >
                            css
                          </Text>
                          <Text
                            className="font-medium ml-[2px] text-bluegray_402 text-left tracking-[-1.00px] w-[auto]"
                            variant="body33"
                          >
                            prop,
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[6px] md:w-[100%] w-[51%]">
                          <Text
                            className="font-medium mt-[2px] text-green_A702 text-left tracking-[-1.00px] w-[auto]"
                            variant="body33"
                          >
                            styled
                          </Text>
                          <Text
                            className="font-medium mb-[2px] ml-[3px] text-bluegray_402 text-left tracking-[-1.00px] w-[auto]"
                            variant="body33"
                          >
                            function or native CSS selectors.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="absolute font-bold left-[1%] text-gray_919 text-left top-[17%] tracking-[-2.80px] w-[auto]"
                      variant="body5"
                    >
                      Customization made
                    </Text>
                    <Text
                      className="absolute bg-clip-text bg-gradient18  font-bold left-[1%] text-left text-transparent top-[23%] tracking-[-2.80px] w-[auto]"
                      variant="body5"
                    >
                      easy.
                    </Text>
                    <div className="absolute bottom-[25%] flex md:flex-col flex-row gap-[24px] items-start justify-between left-[0] p-[12px] w-[84%]">
                      <div className="flex flex-col gap-[32px] sm:hidden items-start justify-start md:mt-[0] my-[12px] sm:pr-[20px] md:pr-[40px] pr-[575.14px] pt-[392px] self-stretch md:w-[100%] w-[auto]">
                        <Img
                          src="images/img_image.png"
                          className="h-[360px] md:h-[auto] sm:hidden object-cover w-[664px]"
                          alt="image_Seven"
                        />
                        <Button className="bg-green_50 cursor-pointer font-medium min-w-[88px] pl-[12px] pr-[11.86px] py-[4px] rounded-[13px] text-[12px] text-center text-green_801 w-[auto]">
                          Learn more
                        </Button>
                      </div>
                      <div className="bg-gradient19  flex items-start justify-start md:mt-[0] mt-[32px] pl-[230.64px] pr-[230.66px] sm:px-[20px] md:px-[40px] py-[132px] rounded-[14px] self-stretch md:w-[100%] w-[auto]">
                        <Button className="bg-white_A700 cursor-pointer font-semibold min-w-[202px] pl-[64px] pr-[63.7px] sm:px-[20px] md:px-[40px] py-[8px] rounded-[28px] shadow-bs15 text-[18px] text-center text-green_700 w-[auto]">
                          Click me
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[2%] flex flex-col md:gap-[40px] gap-[665px] justify-start left-[7%] w-[82%]">
                  <div className="md:h-[1210px] h-[1212px] mr-[54px] relative md:w-[100%] w-[97%]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[134px] sm:px-[20px] md:px-[40px] w-[85%]"
                      style={{
                        backgroundImage: "url('images/img_group113.svg')",
                      }}
                    >
                      <div className="h-[105px] md:h-[917px] mb-[836px] p-[2px] relative md:w-[100%] w-[68%]">
                        <div className="absolute flex items-center justify-start left-[2%] top-[2%] w-[60%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-evenly w-[100%]">
                            <Text
                              className="font-medium text-bluegray_402 text-left tracking-[-1.00px] w-[auto]"
                              variant="body33"
                            >
                              NextUI provides a set of out of the box
                            </Text>
                            <Text
                              className="font-medium text-left text-purple_A202 tracking-[-1.00px] w-[auto]"
                              variant="body33"
                            >
                              Stitches
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="absolute bottom-[4%] font-medium inset-x-[0] leading-[35.00px] mx-[auto] text-bluegray_402 text-left tracking-[-1.00px] sm:w-[100%] w-[97%]"
                          variant="body33"
                        >
                          utilities for speeding up your workflow by
                          abbreviating CSS properties, grouping multiple CSS
                          properties together, or simplifying a tricky syntax.
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="absolute font-bold left-[9%] text-gray_919 text-left top-[0] tracking-[-2.80px] w-[auto]"
                      variant="body5"
                    >
                      Built-in Stitches
                    </Text>
                    <Text
                      className="absolute bg-clip-text bg-gradient17  font-bold left-[9%] text-left text-transparent top-[6%] tracking-[-2.80px] w-[auto]"
                      variant="body5"
                    >
                      utilities.
                    </Text>
                    <div className="absolute flex md:flex-col flex-row gap-[24px] items-start justify-between pb-[3px] px-[3px] right-[0] top-[17%] w-[92%]">
                      <div className="flex flex-col gap-[48px] sm:hidden items-start justify-start md:ml-[0] ml-[9px] md:mt-[0] mt-[45px] pt-[16px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex flex-col gap-[41px] justify-start pb-[12px] px-[12px] w-[100%]">
                          <div className="bg-white_A700_0c flex flex-col gap-[-0.2px] items-start justify-start pt-[19px] px-[20px] rounded-[14px] self-stretch shadow-bs12 md:w-[100%] w-[auto]">
                            <Text
                              className="text-gray_919 text-left tracking-[-1.36px] w-[auto]"
                              variant="body25"
                            >
                              Property shorthands
                            </Text>
                            <div className="flex items-start justify-start pb-[20.39px] sm:pr-[20px] pr-[25.13px] self-stretch md:w-[100%] w-[auto]">
                              <Text
                                className="leading-[39.00px] md:max-w-[100%] max-w-[574px] not-italic text-bluegray_404 text-left tracking-[-1.12px]"
                                variant="body30"
                              >
                                Using a shorthand property, you can write more
                                concise and more readable CSS, saving time and
                                energy.
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col md:gap-[40px] gap-[63px] items-start justify-start mb-[10px] md:ml-[0] ml-[20px] md:w-[100%] w-[auto]">
                            <Text
                              className="text-bluegray_103 text-left tracking-[-1.36px] w-[auto]"
                              variant="body25"
                            >
                              Property bundles
                            </Text>
                            <Text
                              className="text-bluegray_103 text-left tracking-[-1.36px] w-[auto]"
                              variant="body25"
                            >
                              Simplify syntax
                            </Text>
                          </div>
                        </div>
                        <Button className="bg-deep_purple_50 cursor-pointer font-medium min-w-[88px] pl-[12px] pr-[11.86px] py-[4px] rounded-[13px] text-[12px] text-center text-deep_purple_500 w-[auto]">
                          Learn more
                        </Button>
                      </div>
                      <Img
                        src="images/img_image.png"
                        className="h-[420px] sm:h-[auto] mr-[9px] object-cover md:w-[100%] w-[auto]"
                        alt="image_Eight"
                      />
                    </div>
                  </div>
                  <div className="h-[1352px] md:ml-[0] ml-[123px] pl-[12px] relative md:w-[100%] w-[93%]">
                    <div className="absolute h-[1352px] inset-y-[0] my-[auto] right-[0] md:w-[100%] w-[96%]">
                      <Img
                        src="images/img_svg_1352x1371.svg"
                        className="h-[1352px] m-[auto] w-[auto]"
                        alt="svg_Three"
                      />
                      <List
                        className="absolute bottom-[8%] sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 left-[9%] w-[73%]"
                        orientation="horizontal"
                      >
                        <div className="bg-white_A700_0c flex flex-col gap-[10.66px] items-start justify-start pb-[23.34px] pt-[16px] px-[16px] rounded-[14px] self-stretch shadow-bs10 w-[auto]">
                          <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                            <Img
                              src="images/img_twitter.svg"
                              className="h-[30px] w-[30px]"
                              alt="twitter"
                            />
                            <Text
                              className="font-semibold text-gray_919 text-left tracking-[-0.40px] w-[auto]"
                              variant="body41"
                            >
                              Twitter
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[28.00px] md:max-w-[100%] max-w-[252px] not-italic text-gray_604 text-left tracking-[-0.80px]"
                            variant="body41"
                          >
                            For announcements, tips and general information.
                          </Text>
                        </div>
                        <div className="bg-white_A700_0c flex flex-col gap-[10.66px] items-start justify-start pb-[23.34px] pt-[16px] px-[16px] rounded-[14px] self-stretch shadow-bs10 w-[auto]">
                          <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                            <Img
                              src="images/img_user_indigo_300.svg"
                              className="h-[30px] w-[30px]"
                              alt="user"
                            />
                            <Text
                              className="font-semibold text-gray_919 text-left tracking-[-0.40px] w-[auto]"
                              variant="body41"
                            >
                              Discord
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[28.00px] md:max-w-[100%] max-w-[255px] not-italic text-gray_604 text-left tracking-[-0.80px]"
                            variant="body41"
                          >
                            To get involved in the community, ask questions and
                            share tips.
                          </Text>
                        </div>
                        <div className="bg-white_A700_0c flex flex-col gap-[10.66px] items-start justify-start pb-[23.34px] pt-[16px] px-[16px] rounded-[14px] self-stretch shadow-bs10 w-[auto]">
                          <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                            <Img
                              src="images/img_user_bluegray_952.svg"
                              className="h-[30px] w-[30px]"
                              alt="user"
                            />
                            <Text
                              className="font-semibold text-gray_919 text-left tracking-[-0.40px] w-[auto]"
                              variant="body41"
                            >
                              GitHub
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[28.00px] md:max-w-[100%] max-w-[216px] not-italic text-gray_604 text-left tracking-[-0.80px]"
                            variant="body41"
                          >
                            For issues, feature requests and contribute.
                          </Text>
                        </div>
                      </List>
                    </div>
                    <div className="absolute bottom-[21%] flex flex-col gap-[-0.81px] md:hidden inset-x-[0] items-center justify-start mx-[auto] pl-[447.84px] pr-[446.16px] sm:px-[20px] md:px-[40px] py-[12px] self-stretch w-[auto]">
                      <Text
                        className="font-bold text-center text-gray_919 tracking-[-2.80px] w-[auto]"
                        variant="body5"
                      >
                        Community
                      </Text>
                      <Text
                        className="font-medium text-bluegray_402 text-center tracking-[-1.00px] w-[auto]"
                        variant="body33"
                      >
                        Get involved in our community. Everyone is welcome!
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[36%] flex flex-col gap-[5px] inset-x-[0] items-center justify-end mx-[auto] pt-[126px] w-[73%]">
                <div className="flex flex-col relative md:w-[100%] w-[99%]">
                  <div className="flex flex-row gap-[5px] items-center justify-start mx-[auto] sm:px-[20px] md:px-[40px] px-[570px] w-[100%]">
                    <Text
                      className="font-bold text-gray_919 text-left tracking-[-2.80px] w-[auto]"
                      variant="body5"
                    >
                      Last
                    </Text>
                    <Text
                      className="bg-clip-text bg-gradient16  font-bold text-left text-transparent tracking-[-2.80px] w-[auto]"
                      variant="body5"
                    >
                      but
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[5px] items-center justify-end mt-[-0.81px] mx-[auto] sm:px-[20px] md:px-[40px] px-[559px] w-[100%] z-[1]">
                    <Text
                      className="font-bold text-gray_919 text-left tracking-[-2.80px] w-[auto]"
                      variant="body5"
                    >
                      not
                    </Text>
                    <Text
                      className="bg-clip-text bg-gradient20  font-bold text-left text-transparent tracking-[-2.80px] w-[auto]"
                      variant="body5"
                    >
                      least.
                    </Text>
                  </div>
                </div>
                <div className="md:h-[436px] h-[453px] relative w-[100%]">
                  <Text
                    className="absolute font-medium inset-x-[0] mx-[auto] text-bluegray_402 text-center top-[0] tracking-[-1.00px] w-[max-content]"
                    variant="body33"
                  >
                    A fully-featured React UI library.
                  </Text>
                  <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] p-[12px] w-[100%]">
                    <div className="flex items-center justify-start mt-[12px] w-[100%]">
                      <div className="md:gap-[20px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 sm:hidden justify-center min-h-[auto] w-[100%]">
                        <div className="bg-white_A700_0c flex flex-1 flex-col gap-[8px] items-start justify-start p-[12px] rounded-[14px] shadow-bs10 w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[59px] w-[100%]">
                            <Button className="bg-red_50 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                              <Img
                                src="images/img_menu.svg"
                                className="h-[19px]"
                                alt="menu"
                              />
                            </Button>
                            <Text
                              className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                              variant="body38"
                            >
                              Server side render (SSR)
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[28.00px] mb-[4px] md:ml-[0] ml-[4px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[92%]"
                            variant="body41"
                          >
                            All NextUI components support cross-browser
                            server-side rendering and provides a simple way to
                            implement it in your project.
                          </Text>
                        </div>
                        <div className="bg-white_A700_0c flex flex-1 flex-col gap-[8px] items-center justify-start p-[12px] rounded-[14px] shadow-bs10 w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[61px] w-[100%]">
                            <Img
                              src="images/img_div.svg"
                              className="rounded-[50%] w-[40px]"
                              alt="div"
                            />
                            <Text
                              className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                              variant="body38"
                            >
                              Accessible components
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[28.00px] mb-[32px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[95%]"
                            variant="body41"
                          >
                            NextUI components follow the WAI-ARIA guidelines,
                            provide keyboard support and sensible focus
                            management.
                          </Text>
                        </div>
                        <div className="bg-white_A700_0c flex flex-1 flex-col gap-[8px] sm:hidden items-center justify-start p-[12px] rounded-[14px] shadow-bs10 w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start pr-[105px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <Img
                              src="images/img_contrast_red_50.svg"
                              className="rounded-[50%] w-[40px]"
                              alt="contrast"
                            />
                            <Text
                              className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                              variant="body38"
                            >
                              Focus interactions
                            </Text>
                          </div>
                          <Text
                            className="sm:flex font-normal leading-[28.00px] mb-[60px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[97%]"
                            variant="body41"
                          >
                            Focus ring will appear only when user navigates with
                            keyboard or screen reader.
                          </Text>
                        </div>
                        <div className="bg-white_A700_0c flex flex-1 flex-col gap-[8px] items-start justify-start p-[12px] rounded-[14px] shadow-bs10 w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[80px] w-[100%]">
                            <Img
                              src="images/img_location_red_50.svg"
                              className="rounded-[50%] w-[40px]"
                              alt="location"
                            />
                            <Text
                              className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                              variant="body38"
                            >
                              Built-in media queries
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[28.00px] mb-[4px] md:ml-[0] ml-[4px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[93%]"
                            variant="body41"
                          >
                            NextUI provides a set of common media queries that,
                            along with Stitches breakpoints allow you create
                            responsive layouts faster.
                          </Text>
                        </div>
                        <div className="bg-white_A700_0c flex flex-1 flex-col gap-[8px] items-center justify-start p-[12px] rounded-[14px] shadow-bs10 w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start pr-[111px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <Img
                              src="images/img_close_red_50.svg"
                              className="rounded-[50%] w-[40px]"
                              alt="close"
                            />
                            <Text
                              className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                              variant="body38"
                            >
                              TypeScript based
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[28.00px] mb-[32px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[95%]"
                            variant="body41"
                          >
                            Build type safe applications, NextUI has a
                            fully-typed API to minimize the learning curve, and
                            help you build applications.
                          </Text>
                        </div>
                        <div className="bg-white_A700_0c flex flex-1 flex-col gap-[8px] items-center justify-start p-[12px] rounded-[14px] shadow-bs10 w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[41px] w-[100%]">
                            <Img
                              src="images/img_rewind_red_50.svg"
                              className="rounded-[50%] w-[40px]"
                              alt="rewind"
                            />
                            <Text
                              className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                              variant="body38"
                            >
                              Override components tags
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[28.00px] mb-[60px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[94%]"
                            variant="body41"
                          >
                            A polymorphic \`as\` prop is included in all NextUI
                            components.
                          </Text>
                        </div>
                        <div className="bg-white_A700_0c flex flex-1 flex-col gap-[8px] items-center justify-start p-[12px] rounded-[14px] shadow-bs10 w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start pr-[117px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <Button className="bg-red_50 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                              <Img
                                src="images/img_location_purple_a204.svg"
                                className=""
                                alt="location"
                              />
                            </Button>
                            <Text
                              className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                              variant="body38"
                            >
                              Critical Path CSS
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[28.00px] mb-[4px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[95%]"
                            variant="body41"
                          >
                            Since NextUI is based on Stitches, it only injects
                            the styles which are actually used, so your users
                            don&#39;t download unnecessary CSS.
                          </Text>
                        </div>
                        <div className="bg-white_A700_0c flex flex-1 flex-col gap-[8px] items-center justify-start p-[12px] rounded-[14px] shadow-bs10 w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[90px] w-[100%]">
                            <Img
                              src="images/img_floatingicon.svg"
                              className="rounded-[50%] w-[40px]"
                              alt="floatingicon"
                            />
                            <Text
                              className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                              variant="body38"
                            >
                              Beautifully designed
                            </Text>
                          </div>
                          <Text
                            className="font-normal leading-[28.00px] mb-[4px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[95%]"
                            variant="body41"
                          >
                            NextUI components are unique and are not tied to any
                            visual trend or design rule, which makes us unique
                            and of course your projects as well.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[19%] flex flex-col sm:hidden inset-x-[0] items-center justify-end mx-[auto] py-[54px] w-[72%]">
              <div className="flex md:flex-col flex-row gap-[9px] md:hidden items-start justify-center mt-[73px] pt-[4px] px-[4px] md:w-[100%] w-[99%]">
                <Text
                  className="font-bold md:hidden md:ml-[0] ml-[450px] text-gray_919 text-left tracking-[-2.80px] w-[auto]"
                  variant="body5"
                >
                  Support NextUI
                </Text>
                <Img
                  src="images/img_favorite.svg"
                  className="h-[50px] mr-[450px] md:mt-[0] mt-[4px] w-[50px]"
                  alt="favorite"
                />
              </div>
              <Text
                className="font-medium md:hidden leading-[35.00px] mt-[4px] text-bluegray_402 text-center tracking-[-1.00px] sm:w-[100%] w-[67%]"
                variant="body33"
              >
                If you run a business that intends to use NextUI in a
                revenue-generating product, or if you&#39;re a freelancer and
                NextUI saves you time in your work, or you&#39;re just using it
                in a fun project, your contributions will help to make NextUI
                better.
              </Text>
              <List
                className="sm:flex-col flex-row gap-[24px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[36px] p-[24px] sm:px-[20px] w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700_0c flex flex-1 flex-col gap-[13px] items-start justify-start p-[12px] rounded-[14px] shadow-bs10 w-[100%]">
                  <div className="flex flex-row items-center justify-start pr-[100px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                    <Button className="bg-red_50 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_settings_black_900.svg"
                        className="h-[24px]"
                        alt="settings"
                      />
                    </Button>
                    <Text
                      className="ml-[8px] text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                      variant="body38"
                    >
                      Open Collective
                    </Text>
                    <Img
                      src="images/img_maximize.svg"
                      className="h-[18px] ml-[6px] w-[18px]"
                      alt="maximize"
                    />
                  </div>
                  <Text
                    className="font-normal mb-[6px] md:ml-[0] ml-[4px] not-italic text-gray_604 text-left tracking-[-0.80px] w-[auto]"
                    variant="body41"
                  >
                    Sponsor the NextUI maintainers.
                  </Text>
                </div>
                <div className="bg-white_A700_0c flex flex-1 flex-col gap-[13px] items-start justify-start p-[12px] rounded-[14px] shadow-bs10 w-[100%]">
                  <div className="flex flex-row items-center justify-start pr-[161px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                    <Button className="bg-red_50 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_close_black_900.svg"
                        className="h-[24px]"
                        alt="close"
                      />
                    </Button>
                    <Text
                      className="ml-[8px] text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                      variant="body38"
                    >
                      Patreon
                    </Text>
                    <Img
                      src="images/img_maximize.svg"
                      className="h-[18px] ml-[6px] w-[18px]"
                      alt="maximize"
                    />
                  </div>
                  <Text
                    className="font-normal mb-[6px] md:ml-[0] ml-[4px] not-italic text-gray_604 text-left tracking-[-0.80px] w-[auto]"
                    variant="body41"
                  >
                    Sponsor the creator, Junior Garcia.
                  </Text>
                </div>
              </List>
              <div className="flex items-start justify-start mt-[29px] p-[13px] self-stretch w-[auto]">
                <div className="h-[304px] relative w-[100%]">
                  <div className="bg-gradient21  border-[1px] border-deep_purple_500_66 border-solid h-[120px] m-[auto] rounded-[50%] w-[120px]"></div>
                  <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                    <div className="flex flex-row gap-[17px] items-center justify-between w-[100%]">
                      <div className="flex flex-col gap-[48px] items-center justify-start w-[14%]">
                        <div className="bg-gray_202 flex h-[40px] items-center justify-start p-[2px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_chartbrewcom.png"
                            className="h-[36px] md:h-[auto] rounded-[50%] w-[36px]"
                            alt="chartbrewcom"
                          />
                        </div>
                        <div className="bg-gray_202 flex h-[40px] items-center justify-start p-[2px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_269ae4c0581b1.png"
                            className="h-[36px] md:h-[auto] rounded-[50%] w-[36px]"
                            alt="269ae4c0581bOne"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[81%]">
                        <div className="flex flex-row items-center justify-start md:w-[100%] w-[87%]">
                          <div className="bg-light_blue_A700 flex h-[40px] items-center justify-start mb-[29px] mt-[15px] p-[2px] rounded-[50%] w-[40px]">
                            <div className="bg-white_A700 border-[2px] border-solid border-white_A700 flex h-[36px] items-center justify-start rounded-[50%] w-[36px]">
                              <div className="flex h-[36px] items-center justify-start rounded-[50%] w-[36px]">
                                <Img
                                  src="images/img_clippathgroup_36x36.png"
                                  className="h-[36px] md:h-[auto] rounded-[50%] w-[36px]"
                                  alt="clippathgroup"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="bg-yellow_807 flex h-[64px] items-center justify-start mb-[20px] ml-[47px] p-[2px] rounded-[50%] w-[64px]">
                            <Img
                              src="images/img_discordpng.png"
                              className="h-[60px] md:h-[auto] rounded-[50%] w-[60px]"
                              alt="discordpng"
                            />
                          </div>
                          <div className="bg-gray_202 flex h-[40px] items-center justify-start ml-[13px] mt-[44px] p-[2px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_1644240422606jpg.png"
                              className="h-[36px] md:h-[auto] rounded-[50%] w-[36px]"
                              alt="1644240422606jp"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row gap-[83px] items-center justify-end ml-[auto] mt-[36px] md:w-[100%] w-[76%]">
                          <div className="bg-gradient22  flex items-start justify-start rounded-[50%] shadow-bs16 w-[54px]">
                            <Img
                              src="images/img_plus.svg"
                              className="h-[54px] rounded-[50%] w-[54px]"
                              alt="plus"
                            />
                          </div>
                          <Text
                            className="bg-gray_202 flex font-medium h-[40px] items-center justify-center my-[7px] rounded-[50%] text-center text-gray_919 w-[40px]"
                            variant="body37"
                          >
                            JO
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[36px] md:w-[100%] w-[87%]">
                          <div className="bg-yellow_807 flex h-[64px] items-center justify-start mt-[29px] p-[2px] rounded-[50%] w-[64px]">
                            <Img
                              src="images/img_212fc5f088461.png"
                              className="h-[60px] md:h-[auto] rounded-[50%] w-[60px]"
                              alt="212fc5f088461"
                            />
                          </div>
                          <div className="bg-gray_202 flex h-[40px] items-center justify-start mb-[8px] ml-[23px] mt-[44px] p-[2px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_fabc92de9d299b7.png"
                              className="h-[36px] md:h-[auto] rounded-[50%] w-[36px]"
                              alt="fabc92de9d299bSeven"
                            />
                          </div>
                          <Text
                            className="bg-gray_202 flex font-medium h-[40px] items-center justify-center mb-[53px] ml-[37px] rounded-[50%] text-center text-gray_919 w-[40px]"
                            variant="body37"
                          >
                            DH
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white_A700_0c border-[1px] border-black_900_26 border-solid bottom-[12%] flex inset-x-[0] items-center justify-start mx-[auto] p-[5px] shadow-bs10 w-[100%]">
              <div className="flex items-center justify-start md:w-[100%] w-[73%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[12px] w-[100%]">
                  <div className="flex md:flex-1 flex-col items-start justify-start p-[10px] md:w-[100%] w-[50%]">
                    <Text
                      className="text-gray_919 text-left tracking-[-1.92px] w-[auto]"
                      variant="body14"
                    >
                      Let&#39;s make the Web
                    </Text>
                    <Text
                      className="bg-clip-text bg-gradient17  text-left text-transparent tracking-[-1.92px] w-[auto]"
                      variant="body14"
                    >
                      Prettier
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[3px] mt-[10px] text-bluegray_402 text-left tracking-[-0.96px] w-[auto]"
                      variant="body34"
                    >
                      Try it for yourself, and share with us what you&#39;ve
                      built!
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[19.59px] items-start justify-start mt-[7px] pr-[175.72px] sm:pr-[20px] md:pr-[40px] py-[17.13px] self-stretch md:w-[100%] w-[auto]">
                      <Button className="bg-deep_purple_500 cursor-pointer font-medium min-w-[116px] py-[11px] rounded-[20px] text-[14px] text-center text-white_A700 w-[auto]">
                        Get started
                      </Button>
                      <Input
                        wrapClassName="bg-white_A700_4c flex pl-[20px] pr-[31px] py-[11px] rounded-[20px] shadow-bs10 sm:w-[100%] w-[72%]"
                        className="font-normal not-italic p-[0] placeholder:text-gray_919 sm:pr-[20px] text-[14px] text-gray_919 text-left w-[100%]"
                        name="div_Six"
                        placeholder="$ npm install @nextui-org/react"
                        suffix={
                          <Img
                            src="images/img_videocamera.svg"
                            className="my-[auto]"
                            alt="video_camera"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                  <div className="flex md:flex-1 md:flex-col flex-row gap-[24px] items-center justify-between p-[12px] md:w-[100%] w-[50%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start md:mt-[0] my-[12px] p-[12px] rounded-[14px] shadow-bs10 md:w-[100%] w-[49%]">
                      <div className="flex flex-row gap-[8px] items-center justify-start pr-[122px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                        <Img
                          src="images/img_floatingicon_red_50.svg"
                          className="rounded-[50%] w-[40px]"
                          alt="floatingicon_One"
                        />
                        <Text
                          className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                          variant="body38"
                        >
                          Getting Started
                        </Text>
                      </div>
                      <Text
                        className="font-normal leading-[28.00px] mb-[4px] md:ml-[0] ml-[4px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[93%]"
                        variant="body41"
                      >
                        NextUI allows you make beautiful, modern, and fast
                        websites/applications regardless of your design
                        experience.
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start justify-start md:mt-[0] my-[12px] p-[12px] rounded-[14px] shadow-bs10 md:w-[100%] w-[49%]">
                      <div className="flex flex-row gap-[8px] items-center justify-start pr-[117px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                        <Button className="bg-red_50 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_vector_purple_a204_40x40.svg"
                            className="h-[24px]"
                            alt="vector_Three"
                          />
                        </Button>
                        <Text
                          className="text-gray_919 text-left tracking-[-0.88px] w-[auto]"
                          variant="body38"
                        >
                          NextUI + Next.js
                        </Text>
                      </div>
                      <Text
                        className="font-normal leading-[28.00px] mb-[4px] md:ml-[0] ml-[4px] not-italic text-gray_604 text-left tracking-[-0.80px] sm:w-[100%] w-[93%]"
                        variant="body41"
                      >
                        NextUI is totally compatible with Next.js you just need
                        to customize the _app.jsx entry file to load the
                        provider.
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

export default LgvTwoPage;
