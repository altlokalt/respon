import React from "react";

import { Text, Img, Line, Button, Input, List } from "components";

const ShortLandpgPage = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gradient  flex items-center justify-start p-[6px] w-[100%]">
          <div className="flex items-start justify-start md:px-[20px] self-stretch md:w-[100%] w-[auto]">
            <Text
              className="font-normal not-italic text-left text-white_A700 w-[auto]"
              variant="body44"
            ></Text>
          </div>
        </div>
        <div className="sm:h-[1385px] h-[1941px] md:h-[2063px] pb-[16px] md:px-[20px] relative w-[100%]">
          <div className="sm:h-[1385px] h-[1924px] md:h-[2063px] m-[auto] w-[100%]">
            <div className="absolute h-[1385px] right-[0] top-[0] md:w-[100%] w-[84%]">
              <Img
                src="images/img_div_1385x1612.png"
                className="h-[1385px] m-[auto] object-cover rounded-[692px] w-[100%]"
                alt="div"
              />
              <div className="absolute bottom-[39%] flex flex-col gap-[30px] items-center justify-start left-[3%] w-[76%]">
                <div className="flex items-center justify-end w-[100%]">
                  <Text
                    className="font-bold text-center text-gray_600 uppercase w-[auto]"
                    variant="body47"
                  >
                    40,000+ DEVELOPERS FROM THE WORLD&#39;S LEADING COMPANIES
                    HAVE SIGNED UP FOR DHIWISE
                  </Text>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between sm:pl-[20px] pl-[30px] w-[100%]">
                    <Img
                      src="images/img_62d25679ada6065.png"
                      className="sm:flex-1 h-[28px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                      alt="62d25679ada6065"
                    />
                    <Img
                      src="images/img_62d2567bfc49d7a.png"
                      className="sm:flex-1 h-[28px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                      alt="62d2567bfc49d7a"
                    />
                    <Img
                      src="images/img_62d25679919b14b.png"
                      className="sm:flex-1 h-[28px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                      alt="62d25679919b14b"
                    />
                    <Img
                      src="images/img_62e3d62ca56b5b0.png"
                      className="sm:flex-1 h-[28px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                      alt="62e3d62ca56b5bZero"
                    />
                    <Img
                      src="images/img_62d2567b49432b9.png"
                      className="sm:flex-1 h-[28px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                      alt="62d2567b49432bNine"
                    />
                    <Img
                      src="images/img_62e3d57a72862f0.png"
                      className="sm:flex-1 h-[28px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                      alt="62e3d57a72862fZero"
                    />
                    <Img
                      src="images/img_62e3d57971e7425.png"
                      className="sm:flex-1 h-[28px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                      alt="62e3d57971e7425"
                    />
                    <Img
                      src="images/img_62e3d57ab94e7c7.png"
                      className="sm:flex-1 h-[28px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                      alt="62e3d57ab94e7cSeven"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute flex md:flex-col flex-row md:gap-[20px] items-center justify-start left-[3%] top-[0] w-[76%]">
                <div className="sm:absolute sm:bottom-[] flex md:flex-col flex-row gap-[30px] items-center justify-between sm:m-[8px] sm:top-[1px] md:w-[100%] w-[65%]">
                  <Img
                    src="images/img_62383c8a3006dc7.svg"
                    className="h-[23px] w-[auto]"
                    alt="62383c8a3006dcSeven"
                  />
                  <div className="flex sm:flex-col flex-row gap-[8px] sm:hidden items-start justify-start pl-[4px] sm:pr-[20px] pr-[225.45px] md:pr-[40px] self-stretch md:w-[100%] w-[auto]">
                    <div className="flex flex-row gap-[5.25px] sm:hidden items-center justify-start px-[8px] py-[27px] self-stretch w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body42"
                      >
                        Products
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[10px] w-[10px]"
                        alt="arrowdown"
                      />
                    </div>
                    <div className="flex flex-row gap-[6.52px] items-center justify-start px-[8px] py-[27px] self-stretch w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body42"
                      >
                        Resources & Support
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[10px] w-[10px]"
                        alt="arrowdown_One"
                      />
                    </div>
                    <div className="flex flex-row gap-[5.19px] items-center justify-start px-[8px] py-[27px] self-stretch w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body42"
                      >
                        Use Cases
                      </Text>
                      <Img
                        src="images/img_arrowdown.svg"
                        className="h-[10px] w-[10px]"
                        alt="arrowdown_Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row sm:gap-[2px] items-center justify-end sm:m-[888px] pl-[14px] py-[14px] md:w-[100%] w-[35%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body43"
                  >
                    Join our community
                  </Text>
                  <Line className="bg-gray_901 h-[30px] ml-[19px] my-[4px] w-[1px]" />
                  <Text
                    className="font-normal ml-[18px] not-italic text-left text-white_A700 w-[auto]"
                    variant="body43"
                  >
                    Sign in
                  </Text>
                  <Button className="bg-blue_A700 cursor-pointer font-normal min-w-[124px] ml-[15px] not-italic pl-[14px] pr-[15.64px] py-[5px] rounded-[3px] text-[13px] text-center text-white_A700 w-[auto]">
                    Sign up for free
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex h-[1265px] md:h-[2063px] inset-x-[0] justify-end mx-[auto] w-[100%]">
              <div className="bg-gradient1  h-[991px] mb-[83px] mt-[auto] mx-[auto] w-[100%]"></div>
              <div className="absolute flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                <Img
                  src="images/img_62d25ffd7556585.png"
                  className="sm:flex sm:flex-1 h-[525px] md:h-[auto] md:mt-[0] mt-[740px] object-cover sm:w-[100%] w-[auto]"
                  alt="62d25ffd7556585"
                />
                <div className="h-[929px] md:h-[986px] mb-[95px] md:ml-[0] ml-[107px] md:mt-[0] mt-[240px] relative md:w-[100%] w-[64%]">
                  <div className="absolute bg-gradient2  h-[891px] inset-x-[0] mx-[auto] rounded-[10px] top-[0] w-[100%]"></div>
                  <div className="absolute md:h-[889px] h-[928px] inset-[0] justify-center m-[auto] w-[100%]">
                    <div className="absolute bg-gradient3  flex inset-x-[0] items-center justify-start mx-[auto] pb-[641px] rounded-[10px] top-[0] w-[100%]">
                      <div className="flex flex-col gap-[14px] items-center justify-start p-[51px] sm:px-[20px] md:px-[40px] w-[100%]">
                        <Text
                          className="font-semibold text-center text-white_A700_dd w-[auto]"
                          variant="body23"
                        >
                          What is DhiWise?
                        </Text>
                        <Text
                          className="font-light leading-[26.00px] mb-[22px] text-center text-white_A700_b2 sm:w-[100%] w-[75%]"
                          variant="body41"
                        >
                          DhiWise is a programming platform where developers can
                          convert their designs into developer-friendly code for
                          mobile and web apps. DhiWise automates the application
                          development lifecycle and instantly generates
                          readable, modular and reusable code.
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                      <div className="h-[50px] relative md:w-[100%] w-[90%]">
                        <Button className="border-b-[2px] border-orange_A700 border-solid cursor-pointer font-normal mb-[-1px] min-w-[186px] ml-[114px] mt-[auto] not-italic pl-[30px] pr-[29.77px] sm:px-[20px] py-[10px] text-[19px] text-center text-orange_A700 w-[auto] z-[1]">
                          Build Instantly
                        </Button>
                        <div className="flex flex-row md:gap-[20px] sm:items-end items-start sm:justify-around justify-center mb-[undefinedpx] ml-[auto] mr-[145px] mt-[auto] w-[57%] z-[1]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700_87 w-[auto]"
                            variant="body35"
                          >
                            Code what matters
                          </Text>
                          <Text
                            className="font-normal ml-[65px] not-italic text-left text-white_A700_87 w-[auto]"
                            variant="body35"
                          >
                            Zero Dependencies
                          </Text>
                          <Text
                            className="font-normal ml-[62px] not-italic text-left text-white_A700_87 w-[auto]"
                            variant="body35"
                          >
                            Amazing DevEx
                          </Text>
                        </div>
                        <Line className="bg-gradient4  h-[1px] mt-[auto] mx-[auto] w-[100%]" />
                      </div>
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[34px] items-center justify-end pt-[54px] sm:px-[20px] md:px-[40px] px-[54px] w-[100%]">
                          <Text
                            className="font-light sm:hidden leading-[26.00px] text-center text-white_A700_b2 sm:w-[100%] w-[66%]"
                            variant="body41"
                          >
                            Deliver new digital experiences in hours, not days.
                            Remove the mundane tasks and automate your
                            programming lifecycle so you can focus on innovating
                            fast.
                          </Text>
                          <div className="border-[2px] border-bluegray_900 border-solid flex items-center justify-end rounded-[10px] md:w-[100%] w-[99%]">
                            <Img
                              src="images/img_videod88d093e.png"
                              className="h-[496px] md:h-[auto] object-cover w-[100%]"
                              alt="videod88d093e"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_62d26106a73d906.png"
                  className="md:flex-1 h-[512px] sm:h-[auto] md:ml-[0] ml-[57px] object-cover md:w-[100%] w-[auto]"
                  alt="62d26106a73d906"
                />
              </div>
            </div>
          </div>
          <div className="absolute md:h-[261px] sm:h-[304px] h-[595px] sm:hidden sm:pl-[20px] pl-[22px] right-[10%] top-[7%] md:w-[100%] w-[74%]">
            <div className="absolute md:h-[261px] sm:h-[304px] h-[581px] sm:hidden inset-[0] justify-center m-[auto] pl-[10px] md:w-[100%] w-[99%]">
              <div className="absolute bottom-[25%] flex flex-col items-start justify-start left-[2%] pt-[24px] w-[63%]">
                <Text
                  className="md:flex-col md:hidden text-left text-white_A700_e5 w-[auto]"
                  variant="body7"
                >
                  Developer Productivity Solved
                </Text>
                <Text
                  className="font-light sm:hidden leading-[26.00px] mt-[10px] text-left text-white_A700_b2 sm:w-[100%] w-[65%]"
                  variant="body41"
                >
                  Build React and Flutter Apps at blazing fast speed without
                  compromising on code-quality and developer-experience.
                </Text>
                <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start mt-[50px] sm:pr-[20px] md:pr-[40px] pr-[489.81px] self-stretch md:w-[100%] w-[auto]">
                  <Button className="bg-blue_A700 cursor-pointer font-medium min-w-[195px] pl-[32px] pr-[32.91px] sm:px-[20px] py-[16px] rounded-[4px] text-[15px] text-center text-white_A700 tracking-[1.00px] w-[auto]">
                    Sign Up for Free
                  </Button>
                  <div className="flex flex-row items-end justify-center sm:w-[100%] w-[44%]">
                    <Text
                      className="font-medium my-[4px] text-blue_A100 text-left w-[auto]"
                      variant="body42"
                    >
                      Install Figma Plugin
                    </Text>
                    <Img
                      src="images/img_6242912d98b1ffc.svg"
                      className="h-[28px] w-[auto]"
                      alt="6242912d98b1ffc"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute md:h-[261px] h-[581px] inset-y-[0] my-[auto] py-[29px] right-[0] md:w-[100%] w-[55%]">
                <div className="absolute h-[411px] left-[0] top-[5%] md:w-[100%] w-[91%]">
                  <Img
                    src="images/img_62d244225d3ddb9.png"
                    className="h-[95px] md:hidden mb-[undefinedpx] ml-[93px] mt-[5px] object-cover w-[22%] z-[1]"
                    alt="62d244225d3ddbNine"
                  />
                  <Img
                    src="images/img_62da27d554008aa.png"
                    className="h-[100px] mb-[-3.91px] ml-[258px] mt-[5px] object-cover w-[100px] z-[1]"
                    alt="62da27d554008aa"
                  />
                  <Img
                    src="images/img_62d2442009ffbd6.png"
                    className="h-[45px] mb-[undefinedpx] ml-[auto] object-cover w-[29%] z-[1]"
                    alt="62d2442009ffbdSix"
                  />
                  <div className="md:h-[261px] h-[310px] sm:hidden mt-[auto] md:w-[100%] w-[90%]">
                    <Img
                      src="images/img_62d24422af5e2e4.png"
                      className="absolute bottom-[0] h-[188px] sm:hidden left-[0] object-cover w-[65%]"
                      alt="62d24422af5e2eFour"
                    />
                    <div className="absolute h-[261px] right-[0] top-[0] sm:w-[100%] w-[67%]">
                      <Img
                        src="images/img_62da28596e138fd.png"
                        className="h-[261px] m-[auto] object-cover w-[100%]"
                        alt="62da28596e138fd"
                      />
                      <div className="absolute md:h-[143px] h-[150px] inset-[0] m-[auto] w-[302px]">
                        <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                          <div className="flex flex-col items-center justify-start w-[100%]">
                            <Button className="bg-blue_A701 flex h-[72px] items-center justify-center p-[21px] sm:px-[20px] rounded-[50%] w-[72px]">
                              <Img
                                src="images/img_61976fbc2bbea62.svg"
                                className="h-[30px]"
                                alt="61976fbc2bbeaSixtyTwo"
                              />
                            </Button>
                            <div
                              className="bg-cover bg-no-repeat flex flex-col gap-[3px] h-[71px] items-center justify-start sm:px-[20px] px-[28px] py-[14px] rounded-[35px] self-stretch w-[auto]"
                              style={{
                                backgroundImage:
                                  "url('images/img_div_71x302.png')",
                              }}
                            >
                              <Text
                                className="font-normal not-italic text-center text-white_A700 w-[auto]"
                                variant="body44"
                              >
                                See how to get started with DhiWise in
                              </Text>
                              <div className="flex items-start justify-start pl-[63.14px] pr-[62.53px] sm:px-[20px] md:px-[40px] self-stretch w-[auto]">
                                <Text
                                  className="font-normal not-italic text-center text-white_A700_7f w-[auto]"
                                  variant="body44"
                                ></Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bg-blue_A700_19 h-[86px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[86px]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_62da27d54ee0316.png"
                  className="absolute h-[70px] object-cover right-[33%] top-[11%] w-[70px]"
                  alt="62da27d54ee0316"
                />
                <Img
                  src="images/img_62d2442109ffbd3.png"
                  className="absolute bottom-[0] h-[155px] sm:hidden object-cover right-[0] w-[23%]"
                  alt="62d2442109ffbdThree"
                />
              </div>
            </div>
            <Input
              wrapClassName="absolute bg-gradient5  sm:flex left-[27%] pl-[22px] pr-[12px] py-[12px] rounded-[6px] top-[0] w-[37%]"
              className="font-medium p-[0] placeholder:text-gray_200 sm:flex sm:pl-[20px] text-[13px] text-gray_200 text-left w-[100%]"
              name="div_Three"
              placeholder="DhiWise now supports components in React apps. Click here to know more."
            ></Input>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] items-center justify-start max-w-[1280px] mx-[auto] md:px-[20px] px-[32px] w-[100%]">
          <div className="flex flex-col gap-[11px] items-start justify-end pr-[4px] py-[4px] md:w-[100%] w-[auto]">
            <Text
              className="font-semibold text-left text-white_A700_dd w-[auto]"
              variant="body23"
            >
              What you can Develop with DhiWise
            </Text>
            <Text
              className="font-light leading-[26.00px] text-left text-white_A700_b2 sm:w-[100%] w-[56%]"
              variant="body41"
            >
              From basic to advanced applications, build any kind of solution
              across industry segments to overcome real-life challenges.
            </Text>
          </div>
          <div className="flex flex-col gap-[20px] items-center justify-end pt-[30px] w-[100%]">
            <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
              <div className="md:flex-1 md:gap-[20px] gap-[29px] grid md:grid-cols-1 grid-cols-2 min-h-[auto] md:w-[100%] w-[66%]">
                <div className="flex flex-col gap-[39px] items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[4px] items-start justify-start pb-[20px] sm:pr-[20px] pr-[31.46px] pt-[10px] self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700_dd w-[auto]"
                      variant="body37"
                    >
                      Ecommerce Mobile Apps
                    </Text>
                    <Text
                      className="font-light leading-[26.00px] md:max-w-[100%] max-w-[332px] text-left text-white_A700_b2"
                      variant="body41"
                    >
                      Learn how we imported our Figma designs of Ecommerce apps
                      and integrated APIs of Medusa, Webflow and others.
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start sm:pr-[20px] pr-[256px] md:pr-[40px] w-[100%]">
                    <Text
                      className="font-medium text-blue_A100 text-left w-[auto]"
                      variant="body42"
                    >
                      Learn more
                    </Text>
                    <Img
                      src="images/img_6242912d98b1ffc.svg"
                      className="h-[22px] ml-[2px] w-[22px]"
                      alt="6242912d98b1ffc"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_62f25141eafac50.png"
                  className="h-[205px] md:h-[auto] object-cover w-[100%]"
                  alt="feafac"
                />
                <div className="bg-gray_903 flex flex-col items-center justify-start p-[20px] rounded-[10px] w-[100%]">
                  <Img
                    src="images/img_62f2514fbc47b2b.png"
                    className="h-[220px] md:h-[auto] object-cover w-[57%]"
                    alt="62f2514fbc47b2b"
                  />
                  <div className="border-solid border-t-[1px] border-white_A700_1e flex flex-col items-start justify-end mb-[26px] pt-[36px] w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700_dd w-[auto]"
                      variant="body37"
                    >
                      Productivity Applications
                    </Text>
                    <Text
                      className="font-light leading-[26.00px] mt-[9px] text-left text-white_A700_b2 sm:w-[100%] w-[91%]"
                      variant="body41"
                    >
                      Learn how you can build productivity apps using Notion and
                      Airtable 10x faster
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[24px] sm:pr-[20px] pr-[248px] md:pr-[40px] w-[100%]">
                      <Text
                        className="font-medium text-blue_A100 text-left w-[auto]"
                        variant="body42"
                      >
                        Learn how
                      </Text>
                      <Img
                        src="images/img_6242912d98b1ffc.svg"
                        className="h-[22px] w-[22px]"
                        alt="6242912d98b1ffc"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray_903 flex flex-col items-center justify-start p-[20px] rounded-[10px] w-[100%]">
                  <Img
                    src="images/img_62f256d3bc47b29.png"
                    className="h-[220px] md:h-[auto] object-cover w-[57%]"
                    alt="62f256d3bc47bTwentyNine"
                  />
                  <div className="border-solid border-t-[1px] border-white_A700_1e flex flex-col items-start justify-end pt-[36px] w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700_dd w-[auto]"
                      variant="body35"
                    >
                      Company Intranet
                    </Text>
                    <Text
                      className="font-light leading-[26.00px] mt-[8px] text-left text-white_A700_b2 sm:w-[100%] w-[92%]"
                      variant="body41"
                    >
                      Learn how to build React and Flutter Applications for your
                      company intranet in a week.
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[24px] sm:pr-[20px] pr-[248px] md:pr-[40px] w-[100%]">
                      <Text
                        className="font-medium text-blue_A100 text-left w-[auto]"
                        variant="body42"
                      >
                        Learn how
                      </Text>
                      <Img
                        src="images/img_6242912d98b1ffc.svg"
                        className="h-[22px] w-[22px]"
                        alt="6242912d98b1ffc"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient6  flex md:flex-1 flex-col gap-[113px] md:gap-[40px] items-start justify-end p-[30px] sm:px-[20px] rounded-[10px] md:w-[100%] w-[33%]">
                <Img
                  src="images/img_62f25b70d640654.png"
                  className="h-[382px] md:h-[auto] mt-[50px] object-cover w-[100%]"
                  alt="62f25b70d640654"
                />
                <Text
                  className="font-medium leading-[36.00px] mb-[42px] text-left text-white_A700_dd sm:w-[100%] w-[96%]"
                  variant="body24"
                >
                  Reduce your go-to-market time from 10 days to 3 days
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
              <div className="bg-gray_903 flex md:flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between pt-[20px] px-[20px] rounded-[10px] md:w-[100%] w-[50%]">
                <div className="flex items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="leading-[36.00px] text-left text-white_A700_dd"
                    variant="body26"
                  >
                    <>
                      Explore endless
                      <br />
                      possibilities
                    </>
                  </Text>
                </div>
                <Img
                  src="images/img_62d271d45d3ddb1.png"
                  className="h-[114px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
                  alt="62d271d45d3ddbOne"
                />
              </div>
              <div className="bg-blue_A700 flex md:flex-1 sm:flex-col flex-row gap-[15px] items-center justify-center p-[49px] sm:px-[20px] md:px-[40px] rounded-[10px] md:w-[100%] w-[50%]">
                <Text
                  className="sm:ml-[0] ml-[136px] sm:mt-[0] mt-[3px] text-left text-white_A700_dd w-[auto]"
                  variant="body26"
                >
                  Build your App
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-[31px] mr-[136px] w-[30px]"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1280px] mt-[150px] mx-[auto] md:px-[20px] px-[32px] w-[100%]">
          <div className="flex flex-col gap-[12px] items-start justify-end pr-[2px] py-[2px] md:w-[100%] w-[auto]">
            <Text
              className="font-semibold text-left text-white_A700_dd w-[auto]"
              variant="body23"
            >
              Code that Developers love
            </Text>
            <Text
              className="font-light text-left text-white_A700_b2 w-[auto]"
              variant="body42"
            >
              Developers and CTOs from more than 50 countries have loved using
              DhiWise.
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-[20px] items-center justify-start pb-[20px] w-[100%]">
              <div className="bg-gray_903 flex flex-col items-start justify-start p-[20px] rounded-[10px] w-[100%]">
                <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] w-[97%]">
                  <Img
                    src="images/img_61f7bec71672bfa.png"
                    className="h-[50px] md:h-[auto] rounded-[50%] w-[50px]"
                    alt="61f7bec71672bfa"
                  />
                  <div className="flex flex-col gap-[6px] items-start justify-start pb-[4px] pr-[12.16px] self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Lenin Prakash
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body44"
                    >
                      Founder & CEO at Macincode Technologies
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-light leading-[24.00px] mt-[22px] text-left text-white_A700_b2 sm:w-[100%] w-[98%]"
                  variant="body41"
                >
                  Dhiwise has helped me to build a mobile application in short
                  span of time that makes my productivity growth to 3X times. I
                  would definitely recommend it to start-up companies and
                  Freelance developers.
                </Text>
                <Text
                  className="font-semibold mb-[2px] mt-[27px] text-bluegray_400 text-left w-[auto]"
                  variant="body51"
                >
                  Nov 11, 2021
                </Text>
              </div>
              <div className="bg-gray_903 flex flex-col items-start justify-start p-[20px] rounded-[10px] w-[100%]">
                <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] w-[74%]">
                  <Img
                    src="images/img_61f7bd23f431667.png"
                    className="h-[50px] md:h-[auto] rounded-[50%] w-[50px]"
                    alt="61f7bd23f431667"
                  />
                  <div className="flex flex-col gap-[6px] items-start justify-start pb-[4px] pr-[7.81px] self-stretch w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Anas Kasmi
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body44"
                    >
                      Co-founder at Blue Spark SARL
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-light leading-[24.00px] mt-[22px] text-left text-white_A700_b2 sm:w-[100%] w-[87%]"
                  variant="body41"
                >
                  I&#39;m happy to see the pain of rewriting boilerplate code on
                  every new project go away.
                </Text>
                <Text
                  className="font-semibold mb-[2px] mt-[26px] text-bluegray_400 text-left w-[auto]"
                  variant="body49"
                >
                  Jan 24, 2022
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[20px] items-center justify-start pb-[20px] w-[100%]">
              <div className="bg-gray_903 flex flex-col items-start justify-start p-[20px] rounded-[10px] w-[100%]">
                <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] w-[70%]">
                  <Img
                    src="images/img_61f7ce8e8dc8d64.png"
                    className="h-[50px] md:h-[auto] rounded-[50%] w-[50px]"
                    alt="61f7ce8e8dc8dSixtyFour"
                  />
                  <div className="flex flex-col items-start justify-start pb-[4px] pr-[5.67px] self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Rizky Gustiansyah
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body44"
                    >
                      Head of Technology, Glovory
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-light leading-[24.00px] mt-[22px] text-left text-white_A700_b2 w-[100%]"
                  variant="body41"
                >
                  &quot;First time I heard about DhiWise, I was shocked and
                  said, “finally!”. DhiWise is one of my dream tools for
                  business development. With DhiWise we can cut our cost and
                  also our production time.&quot;
                </Text>
                <Text
                  className="font-semibold mb-[2px] mt-[26px] text-bluegray_400 text-left w-[auto]"
                  variant="body49"
                >
                  Jan 18th, 2022
                </Text>
              </div>
              <div className="bg-gray_903 flex flex-col items-start justify-start p-[20px] rounded-[10px] w-[100%]">
                <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] w-[54%]">
                  <Img
                    src="images/img_62f223edbc47b21.png"
                    className="h-[50px] md:h-[auto] rounded-[50%] w-[50px]"
                    alt="62f223edbc47bTwentyOne"
                  />
                  <div className="flex flex-col gap-[6px] items-start justify-start pb-[4px] pr-[3.64px] self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body39"
                    >
                      Sascha Contes
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body44"
                    >
                      CEO at PINthing UG
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-light leading-[24.00px] mt-[22px] text-left text-white_A700_b2 sm:w-[100%] w-[95%]"
                  variant="body41"
                >
                  Amazing project and great team, never had such quick feedback
                  when issues arise or are discovered with DhiWise team.
                </Text>
                <Text
                  className="font-semibold mb-[2px] mt-[27px] text-bluegray_400 text-left w-[auto]"
                  variant="body51"
                >
                  Aug 5th, 2022
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[20px] items-center justify-start pb-[68px] w-[100%]">
              <div className="bg-gray_903 flex flex-col items-start justify-start p-[20px] rounded-[10px] w-[100%]">
                <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] w-[72%]">
                  <Img
                    src="images/img_61f7bd79d6ca492.png"
                    className="h-[50px] md:h-[auto] rounded-[50%] w-[50px]"
                    alt="61f7bd79d6ca492"
                  />
                  <div className="flex flex-col items-start justify-start pb-[4px] pr-[9.34px] self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body39"
                    >
                      Hakim Gul Bangash
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body44"
                    >
                      Creative Executive at Nayatel
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-light leading-[24.00px] mt-[22px] text-left text-white_A700_b2 sm:w-[100%] w-[95%]"
                  variant="body41"
                >
                  I&#39;ve used many other design-to-code plugins for my work
                  but none work like DhiWise. It is really helpful for me as it
                  gives a smooth and clean UI to the developer.
                </Text>
                <Text
                  className="font-semibold mb-[2px] mt-[26px] text-bluegray_400 text-left w-[auto]"
                  variant="body49"
                >
                  Jan 12th, 2022
                </Text>
              </div>
              <div className="bg-gray_903 flex flex-col items-start justify-start p-[20px] rounded-[10px] w-[100%]">
                <div className="flex flex-row gap-[10px] items-center justify-start md:w-[100%] w-[90%]">
                  <Img
                    src="images/img_62f223ed63e6b5a.png"
                    className="h-[50px] md:h-[auto] rounded-[50%] w-[50px]"
                    alt="62f223ed63e6b5a"
                  />
                  <div className="flex flex-col gap-[6px] items-start justify-start pb-[4px] pr-[11.42px] self-stretch w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Simon Lassalle
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body44"
                    >
                      Big Data Enginner at Bouygues Telecom
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-light leading-[24.00px] mt-[22px] text-left text-white_A700_b2 sm:w-[100%] w-[98%]"
                  variant="body42"
                >
                  Wow, I&#39;ve been using DhiWise for a few months and it&#39;s
                  amazing how much time I&#39;ve saved!
                </Text>
                <Text
                  className="font-semibold mb-[2px] mt-[27px] text-bluegray_400 text-left w-[auto]"
                  variant="body51"
                >
                  July 26, 2022
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[100px] w-[100%]">
          <Img
            src="images/img_62d25ffd7556585.png"
            className="sm:flex-1 h-[572px] md:h-[auto] object-cover sm:w-[100%] w-[auto]"
            alt="div_Four"
          />
          <div className="flex md:flex-1 flex-col md:gap-[40px] gap-[60px] items-center justify-start md:mt-[0] mt-[80px] md:px-[20px] md:w-[100%] w-[auto]">
            <div className="bg-gray_903 flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[6px] rounded-[26px] md:w-[100%] w-[69%]">
              <Button className="bg-blue_A700 cursor-pointer font-medium min-w-[174px] md:ml-[0] ml-[4px] pl-[16px] pr-[19.59px] py-[10px] rounded-[20px] text-[13px] text-center text-white_A700 w-[auto]">
                Figma Design Handoff
              </Button>
              <Text
                className="font-medium md:ml-[0] ml-[16px] text-left text-white_A700_7f w-[auto]"
                variant="body44"
              >
                Smart Editor
              </Text>
              <Text
                className="font-medium md:ml-[0] ml-[33px] text-left text-white_A700_7f w-[auto]"
                variant="body44"
              >
                Navigation and Permissions
              </Text>
              <Text
                className="font-medium md:ml-[0] ml-[36px] text-left text-white_A700_7f w-[auto]"
                variant="body44"
              >
                Data Binding
              </Text>
              <Text
                className="font-medium md:ml-[0] ml-[37px] text-left text-white_A700_7f w-[auto]"
                variant="body44"
              >
                Git Sync and Deployment
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] gap-[60px] items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[60px] w-[100%]">
              <div className="flex md:flex-1 flex-col items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[80px] py-[80px] md:w-[100%] w-[53%]">
                <div className="flex flex-col items-start justify-start mt-[28px] pt-[2px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-left text-yellow_900 uppercase w-[auto]"
                    variant="body44"
                  >
                    Figma Design Handoff
                  </Text>
                  <div className="flex flex-col gap-[14px] items-start justify-start mt-[13px] w-[100%]">
                    <Text
                      className="font-bold leading-[40.00px] text-left text-white_A700_dd sm:w-[100%] w-[77%]"
                      variant="body21"
                    >
                      Import your App designs to DhiWise
                    </Text>
                    <Text
                      className="font-light leading-[26.00px] mb-[3px] text-left text-white_A700_b2 sm:w-[100%] w-[97%]"
                      variant="body41"
                    >
                      Easily import designs from Figma, Adobe XD, or Sketch, or
                      choose one from our vast collection of Templates and
                      Screen Library and start building your app.
                    </Text>
                  </div>
                  <div className="flex items-center justify-start mt-[30px] w-[100%]">
                    <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                          <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[48%]">
                            <div className="flex h-[54px] items-center justify-start w-[54px]">
                              <div className="bg-black_900 flex h-[54px] items-center justify-start p-[4px] w-[54px]">
                                <Img
                                  src="images/img_vector_45x30.png"
                                  className="h-[45px] md:h-[auto] object-cover w-[66%]"
                                  alt="vector"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start mt-[2px] pr-[3px] pt-[3px] w-[100%]">
                              <Text
                                className="font-medium text-gray_100 text-left w-[auto]"
                                variant="body39"
                              >
                                Figma Plugin
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] mt-[9px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[93%]"
                                variant="body43"
                              >
                                Convert Figma design to code in no time using
                                DhiWise Figma-to-code plugin.
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-[7px] md:w-[100%] w-[48%]">
                                <Text
                                  className="font-medium mt-[3px] text-blue_A100 text-left w-[auto]"
                                  variant="body42"
                                >
                                  Install plugin
                                </Text>
                                <Img
                                  src="images/img_6242912d98b1ffc.svg"
                                  className="h-[22px] ml-[2px] w-[22px]"
                                  alt="6242912d98b1ffc_One"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-col items-start justify-start pb-[2px] sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_62e238a45e37fa1.png"
                              className="h-[54px] md:h-[auto] object-cover w-[54px]"
                              alt="62e238a45e37faOne"
                            />
                            <div className="flex flex-col gap-[11px] items-start justify-start mt-[2px] pr-[2px] py-[2px] w-[100%]">
                              <Text
                                className="font-medium leading-[26.00px] text-gray_100 text-left sm:w-[100%] w-[91%]"
                                variant="body37"
                              >
                                Ready-to-use Templates & Screen Library
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[95%]"
                                variant="body43"
                              >
                                Wide range of pre-built Templates and 1000+
                                screens based on various categories.
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                          <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_minimize.svg"
                              className="h-[54px] w-[54px]"
                              alt="minimize"
                            />
                            <div className="flex flex-col items-start justify-start mt-[2px] pr-[2px] pt-[2px] w-[100%]">
                              <Text
                                className="font-medium leading-[26.00px] text-gray_100 text-left sm:w-[100%] w-[87%]"
                                variant="body37"
                              >
                                Support of Adobe XD and Sketch
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] mt-[11px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[94%]"
                                variant="body44"
                              >
                                Import design and download your Figma file to
                                start building your app.
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-[7px] md:w-[100%] w-[62%]">
                                <Text
                                  className="font-medium mt-[3px] text-blue_A100 text-left w-[auto]"
                                  variant="body42"
                                >
                                  Import design file
                                </Text>
                                <Img
                                  src="images/img_6242912d98b1ffc.svg"
                                  className="h-[22px] ml-[2px] w-[22px]"
                                  alt="6242912d98b1ffc_Two"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-col items-start justify-start pb-[26px] sm:w-[100%] w-[48%]">
                            <div className="flex h-[54px] items-center justify-start w-[54px]">
                              <div className="bg-black_900 md:h-[45px] h-[54px] p-[2px] relative w-[54px]">
                                <Img
                                  src="images/img_clock.svg"
                                  className="absolute bottom-[4%] h-[19px] right-[17%] w-[19px]"
                                  alt="clock"
                                />
                                <Img
                                  src="images/img_vector_45x30.png"
                                  className="absolute h-[45px] inset-[0] justify-center m-[auto] object-cover w-[56%]"
                                  alt="vector_One"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[10px] items-start justify-end mt-[2px] pr-[3px] py-[3px] w-[100%]">
                              <Text
                                className="font-medium text-gray_100 text-left w-[auto]"
                                variant="body41"
                              >
                                Figma Refresh
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[82%]"
                                variant="body44"
                              >
                                Resync your new Figma design changes in your app
                                in minutes.
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-[4px] md:w-[100%] w-[43%]">
                              <Text
                                className="font-medium text-blue_A100 text-left w-[auto]"
                                variant="body42"
                              >
                                Learn more
                              </Text>
                              <Img
                                src="images/img_6242912d98b1ffc.svg"
                                className="h-[22px] ml-[2px] w-[22px]"
                                alt="6242912d98b1ffc_Three"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[48%]">
                        <Img
                          src="images/img_62e238a421100d5.png"
                          className="h-[54px] md:h-[auto] object-cover w-[54px]"
                          alt="62e238a421100dFive"
                        />
                        <div className="flex flex-col items-start justify-start mt-[2px] pr-[2px] pt-[2px] w-[100%]">
                          <Text
                            className="font-medium text-gray_100 text-left w-[auto]"
                            variant="body39"
                          >
                            Theme Customization
                          </Text>
                          <Text
                            className="font-normal leading-[22.00px] mt-[10px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[98%]"
                            variant="body43"
                          >
                            Define the user interface for your app, by selecting
                            between dark and light themes.
                          </Text>
                          <div className="flex flex-row items-center justify-start mt-[7px] md:w-[100%] w-[43%]">
                            <Text
                              className="font-medium text-blue_A100 text-left w-[auto]"
                              variant="body42"
                            >
                              Learn more
                            </Text>
                            <Img
                              src="images/img_6242912d98b1ffc.svg"
                              className="h-[22px] ml-[2px] w-[22px]"
                              alt="6242912d98b1ffc_Four"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mt-[162px] pt-[2px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-left text-yellow_900 uppercase w-[auto]"
                    variant="body47"
                  >
                    SMART EDITOR
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-[14px] w-[100%]">
                    <Text
                      className="font-semibold leading-[40.00px] text-left text-white_A700_dd sm:w-[100%] w-[93%]"
                      variant="body21"
                    >
                      Turn Designs into Front-end code and customize them
                    </Text>
                    <Text
                      className="font-light leading-[26.00px] mt-[14px] text-left text-white_A700_b2 sm:w-[100%] w-[93%]"
                      variant="body41"
                    >
                      Smart Editor gives the right and hands-on creative space
                      to a developer to build the app they desire without
                      continuously going back to Figma for design modifications.
                    </Text>
                    <div className="flex flex-row gap-[6px] items-start justify-start mt-[24px] md:w-[100%] w-[31%]">
                      <Text
                        className="font-medium text-blue_A100 text-left w-[auto]"
                        variant="body42"
                      >
                        Go to Smart editor
                      </Text>
                      <Img
                        src="images/img_6242912d98b1ffc.svg"
                        className="h-[22px] w-[22px]"
                        alt="6242912d98b1ffc_Five"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-start mt-[30px] w-[100%]">
                    <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                          <div className="flex sm:flex-1 flex-col items-start justify-start pb-[42px] sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_62e3ca761e03750.png"
                              className="h-[54px] md:h-[auto] object-cover w-[54px]"
                              alt="62e3ca761e03750"
                            />
                            <div className="flex flex-col gap-[9px] items-start justify-end mt-[2px] pr-[3px] py-[3px] w-[100%]">
                              <Text
                                className="font-medium text-gray_100 text-left w-[auto]"
                                variant="body39"
                              >
                                Real-time Design Rendering
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[95%]"
                                variant="body44"
                              >
                                Preview your design changes in real-time without
                                building your app.
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-[4px] md:w-[100%] w-[43%]">
                              <Text
                                className="font-medium text-blue_A100 text-left w-[auto]"
                                variant="body42"
                              >
                                Learn more
                              </Text>
                              <Img
                                src="images/img_6242912d98b1ffc.svg"
                                className="h-[22px] ml-[2px] w-[22px]"
                                alt="6242912d98b1ffc_Six"
                              />
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_file.svg"
                              className="h-[54px] w-[54px]"
                              alt="file"
                            />
                            <div className="flex flex-col gap-[11px] items-start justify-start mt-[2px] pr-[2px] py-[2px] w-[100%]">
                              <Text
                                className="font-medium leading-[26.00px] text-gray_100 text-left sm:w-[100%] w-[67%]"
                                variant="body39"
                              >
                                Change and Modify Components
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[93%]"
                                variant="body43"
                              >
                                Change or modify components to a correct one
                                easily along with its properties, that are not
                                auto-detected.
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                          <div className="flex sm:flex-1 flex-col items-start justify-start pb-[50px] sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_62e3ca7293a3f82.svg"
                              className="h-[54px] w-[54px]"
                              alt="62e3ca7293a3fEightyTwo"
                            />
                            <div className="flex flex-col gap-[11px] items-start justify-start mt-[2px] w-[100%]">
                              <Text
                                className="font-medium leading-[26.00px] text-gray_100 text-left sm:w-[100%] w-[92%]"
                                variant="body37"
                              >
                                Group, Ungroup and Delete Components
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f w-[100%]"
                                variant="body43"
                              >
                                Manage proper component layouts, or delete them
                                if not required.
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_television.svg"
                              className="h-[54px] w-[54px]"
                              alt="television"
                            />
                            <div className="flex flex-col items-start justify-start mt-[2px] pr-[2px] pt-[2px] w-[100%]">
                              <Text
                                className="font-medium leading-[26.00px] text-gray_100 text-left sm:w-[100%] w-[99%]"
                                variant="body37"
                              >
                                Overflow Margin and UI Errors Management
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] mt-[11px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[93%]"
                                variant="body43"
                              >
                                Fix your overflow errors right here by modifying
                                values for UI properties easily.
                              </Text>
                              <div className="flex flex-row items-center justify-start mt-[7px] md:w-[100%] w-[43%]">
                                <Text
                                  className="font-medium text-blue_A100 text-left w-[auto]"
                                  variant="body42"
                                >
                                  Learn more
                                </Text>
                                <Img
                                  src="images/img_6242912d98b1ffc.svg"
                                  className="h-[22px] ml-[2px] w-[22px]"
                                  alt="6242912d98b1ffc_Seven"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:w-[100%] w-[48%]">
                        <div className="flex h-[54px] items-center justify-start w-[54px]">
                          <div className="bg-black_900 flex h-[54px] items-center justify-start p-[4px] w-[54px]">
                            <List
                              className="flex-col gap-[5px] grid items-center my-[7px] w-[98%]"
                              orientation="vertical"
                            >
                              <div className="flex flex-row items-start justify-start md:w-[100%] w-[76%]">
                                <div className="bg-blue_700 flex h-[12px] items-center justify-start p-[3px] w-[12px]">
                                  <Img
                                    src="images/img_maskgroup.svg"
                                    className="h-[5px] w-[5px]"
                                    alt="maskgroup"
                                  />
                                </div>
                                <Img
                                  src="images/img_vector_white_a700_3x3.svg"
                                  className="h-[3px] ml-[2px] mt-[5px] w-[3px]"
                                  alt="vector"
                                />
                                <div className="bg-gradient7  flex h-[12px] items-center justify-end ml-[2px] p-[3px] w-[12px]">
                                  <Img
                                    src="images/img_vector_white_a700_5x4.svg"
                                    className="h-[5px] w-[4px]"
                                    alt="vector_One"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-end md:w-[100%] w-[76%]">
                                <div className="bg-blue_700 flex h-[12px] items-center justify-start p-[3px] w-[12px]">
                                  <Img
                                    src="images/img_vector_5x5.png"
                                    className="h-[5px] md:h-[auto] object-cover w-[5px]"
                                    alt="vector"
                                  />
                                </div>
                                <Img
                                  src="images/img_vector_white_a700_3x3.svg"
                                  className="h-[3px] ml-[2px] mt-[5px] w-[3px]"
                                  alt="vector_One"
                                />
                                <div className="bg-gradient7  flex h-[12px] items-center justify-end ml-[2px] p-[3px] w-[12px]">
                                  <Img
                                    src="images/img_vector_white_a700_5x4.svg"
                                    className="h-[5px] w-[4px]"
                                    alt="vector_Two"
                                  />
                                </div>
                              </div>
                            </List>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start mt-[2px] pr-[3px] pt-[3px] w-[100%]">
                          <Text
                            className="font-medium text-gray_100 text-left w-[auto]"
                            variant="body41"
                          >
                            Shortcuts for Everything
                          </Text>
                          <Text
                            className="font-normal leading-[22.00px] mt-[10px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[98%]"
                            variant="body43"
                          >
                            Handy shortcuts for doing things with much ease. We
                            advocate declarative UI always.
                          </Text>
                          <div className="flex flex-row items-start justify-start mt-[7px] md:w-[100%] w-[44%]">
                            <Text
                              className="font-medium mt-[2px] text-blue_A100 text-left w-[auto]"
                              variant="body42"
                            >
                              Learn more
                            </Text>
                            <Img
                              src="images/img_6242912d98b1ffc.svg"
                              className="h-[21px] ml-[2px] w-[22px]"
                              alt="6242912d98b1ffc_Eight"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <List
                  className="flex-col gap-[162px] md:gap-[40px] grid mt-[111px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col items-start justify-start pt-[2px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-left text-yellow_900 uppercase w-[auto]"
                      variant="body44"
                    >
                      NAVIGATION AND PERMISSION
                    </Text>
                    <div className="flex flex-col gap-[11px] items-start justify-end mt-[13px] pr-[4px] py-[4px] w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700_dd w-[auto]"
                        variant="body23"
                      >
                        More than just “Design to Code”
                      </Text>
                      <Text
                        className="font-light leading-[26.00px] text-left text-white_A700_b2 sm:w-[100%] w-[99%]"
                        variant="body41"
                      >
                        Setup actions to be performed by your app, from the
                        app’s navigation flow to runtime permissions and user
                        authentication in a simple and easy setup, in no time.
                      </Text>
                    </div>
                    <div className="flex items-center justify-start mt-[30px] w-[100%]">
                      <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                          <div className="flex sm:flex-1 flex-col items-start justify-start pb-[26px] sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_62e3ca72ce3a110.png"
                              className="h-[54px] md:h-[auto] object-cover w-[54px]"
                              alt="62e3ca72ce3a110"
                            />
                            <div className="flex flex-col gap-[9px] items-start justify-end mt-[2px] pr-[3px] py-[3px] w-[100%]">
                              <Text
                                className="font-medium text-gray_100 text-left w-[auto]"
                                variant="body39"
                              >
                                Navigation Setup
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[94%]"
                                variant="body44"
                              >
                                Transit forward in the app easily by setting up
                                navigation in your design.
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_62e3ca6db9c88d6.png"
                              className="h-[54px] md:h-[auto] object-cover w-[54px]"
                              alt="62e3ca6db9c88dSix"
                            />
                            <div className="flex flex-col gap-[11px] items-start justify-start mt-[2px] pr-[2px] py-[2px] w-[100%]">
                              <Text
                                className="font-medium leading-[26.00px] text-gray_100 text-left sm:w-[100%] w-[65%]"
                                variant="body37"
                              >
                                Authentication and Authorization
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[96%]"
                                variant="body44"
                              >
                                Easily authenticate using social platforms like
                                Google and Facebook.
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                          <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_62e3ca732645816.png"
                              className="h-[54px] md:h-[auto] object-cover w-[54px]"
                              alt="62e3ca732645816"
                            />
                            <div className="flex flex-col gap-[11px] items-start justify-start mt-[2px] pr-[2px] py-[2px] w-[100%]">
                              <Text
                                className="font-medium text-gray_100 text-left w-[auto]"
                                variant="body41"
                              >
                                Run-time Permissions
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[98%]"
                                variant="body44"
                              >
                                Setup run-time permissions easily to access
                                required resources in your app.
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_62e3ca6ddd06e27.png"
                              className="h-[54px] md:h-[auto] object-cover w-[54px]"
                              alt="62e3ca6ddd06eTwentySeven"
                            />
                            <div className="flex flex-col gap-[6px] items-start justify-start mt-[2px] pt-[3px] w-[100%]">
                              <Text
                                className="font-medium text-gray_100 text-left w-[auto]"
                                variant="body39"
                              >
                                Back Navigation
                              </Text>
                              <div className="flex items-center justify-start py-[3px] w-[100%]">
                                <Text
                                  className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f w-[100%]"
                                  variant="body43"
                                ></Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start pt-[2px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-left text-yellow_900 uppercase w-[auto]"
                      variant="body44"
                    >
                      DATA BINDING
                    </Text>
                    <div className="flex flex-col gap-[14px] items-start justify-start mt-[13px] w-[100%]">
                      <Text
                        className="font-semibold leading-[40.00px] text-left text-white_A700_dd sm:w-[100%] w-[90%]"
                        variant="body21"
                      >
                        Connect your apps to your data sources faster than ever
                      </Text>
                      <Text
                        className="font-light leading-[26.00px] mb-[3px] text-left text-white_A700_b2 sm:w-[100%] w-[97%]"
                        variant="body41"
                      >
                        Let your app communicate by integrating real-time data
                        sources in it using APIs, and backend services like
                        Firebase and Supabase.
                      </Text>
                    </div>
                    <div className="flex items-center justify-start mt-[30px] w-[100%]">
                      <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                          <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_62e3d6f311ea107.svg"
                              className="h-[54px] w-[54px]"
                              alt="62e3d6f311ea107"
                            />
                            <div className="flex flex-col gap-[10px] items-start justify-end mt-[2px] pr-[3px] py-[3px] w-[100%]">
                              <Text
                                className="font-medium text-gray_100 text-left w-[auto]"
                                variant="body41"
                              >
                                REST API Integration
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[99%]"
                                variant="body43"
                              >
                                Integrate APIs in your app design, and even
                                handle requests, responses and actions easily.
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-col items-start justify-start pb-[22px] sm:w-[100%] w-[48%]">
                            <div className="flex h-[54px] items-center justify-start w-[54px]">
                              <div className="bg-black_900 flex h-[54px] items-center justify-start p-[4px] w-[54px]">
                                <Img
                                  src="images/img_vector_45x33.png"
                                  className="h-[45px] md:h-[auto] object-cover w-[72%]"
                                  alt="vector"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col gap-[9px] items-start justify-end mt-[2px] pr-[3px] py-[3px] w-[100%]">
                              <Text
                                className="font-medium text-gray_100 text-left w-[auto]"
                                variant="body39"
                              >
                                Firebase Integration
                              </Text>
                              <Text
                                className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[85%]"
                                variant="body44"
                              >
                                Integrate and manage real-time backend services
                                using Firebase.
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:w-[100%] w-[48%]">
                          <div className="flex h-[54px] items-center justify-start w-[54px]">
                            <div className="flex h-[54px] items-center justify-start w-[54px]">
                              <Img
                                src="images/img_clippathgroup.png"
                                className="h-[54px] md:h-[auto] object-cover w-[54px]"
                                alt="clippathgroup"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-[9px] items-start justify-end mt-[2px] pr-[3px] py-[3px] w-[100%]">
                            <Text
                              className="font-medium text-gray_100 text-left w-[auto]"
                              variant="body39"
                            >
                              Supabase Integration
                            </Text>
                            <Text
                              className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[90%]"
                              variant="body44"
                            >
                              Integrate and manage real-time backend services
                              using Supabase.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-col items-start justify-start mb-[82px] mt-[162px] pt-[2px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-left text-yellow_900 uppercase w-[auto]"
                    variant="body47"
                  >
                    GIT SYNC AND DEPLOYMENT
                  </Text>
                  <div className="flex flex-col items-start justify-start mt-[14px] w-[100%]">
                    <Text
                      className="font-semibold leading-[40.00px] text-left text-white_A700_dd sm:w-[100%] w-[84%]"
                      variant="body21"
                    >
                      Own your creation, No Vendor Lock-In
                    </Text>
                    <Text
                      className="font-light leading-[26.00px] mt-[14px] text-left text-white_A700_b2 sm:w-[100%] w-[98%]"
                      variant="body41"
                    >
                      Get your complete code as you are done with your
                      application building, easily share the preview with
                      others, get it to your IDE or sync it with your Git
                      repositories so easily.
                    </Text>
                    <div className="flex flex-row items-center justify-start mt-[24px] md:w-[100%] w-[21%]">
                      <Text
                        className="font-medium text-blue_A100 text-left w-[auto]"
                        variant="body42"
                      >
                        Get started
                      </Text>
                      <Img
                        src="images/img_6242912d98b1ffc.svg"
                        className="h-[22px] ml-[4px] w-[22px]"
                        alt="6242912d98b1ffc_Nine"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-start mt-[30px] w-[100%]">
                    <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                      <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                        <div className="flex sm:flex-1 flex-col items-start justify-start pb-[22px] sm:w-[100%] w-[48%]">
                          <Img
                            src="images/img_62e3ca6eaf0f7d9.png"
                            className="h-[54px] md:h-[auto] object-cover w-[54px]"
                            alt="62e3ca6eaf0f7dNine"
                          />
                          <div className="flex flex-col gap-[9px] items-start justify-end mt-[2px] pr-[3px] py-[3px] w-[100%]">
                            <Text
                              className="font-medium text-gray_100 text-left w-[auto]"
                              variant="body39"
                            >
                              Sharable App preview
                            </Text>
                            <Text
                              className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[95%]"
                              variant="body44"
                            >
                              Share your app’s Preview with others easily using
                              a single shareable link.
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[48%]">
                          <div className="flex h-[54px] items-center justify-start w-[54px]">
                            <div className="bg-black_900 md:h-[23px] h-[54px] p-[4px] relative w-[54px]">
                              <Img
                                src="images/img_vector_23x23.png"
                                className="absolute h-[23px] left-[7%] object-cover top-[7%] w-[23px]"
                                alt="vector_Two"
                              />
                              <Img
                                src="images/img_vector_22x22.png"
                                className="absolute bottom-[7%] h-[22px] object-cover right-[7%] w-[22px]"
                                alt="vector_Three"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-[9px] items-start justify-end mt-[2px] pr-[3px] py-[3px] w-[100%]">
                            <Text
                              className="font-medium text-gray_100 text-left w-[auto]"
                              variant="body39"
                            >
                              Sync Code to Git repositories
                            </Text>
                            <Text
                              className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[92%]"
                              variant="body43"
                            >
                              Sync app code directly to Git, push your changes,
                              make commits and create pull requests.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                        <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[48%]">
                          <Img
                            src="images/img_signal.svg"
                            className="h-[54px] w-[54px]"
                            alt="signal"
                          />
                          <div className="flex flex-col items-start justify-start mt-[2px] pr-[3px] pt-[3px] w-[100%]">
                            <Text
                              className="font-medium text-gray_100 text-left w-[auto]"
                              variant="body39"
                            >
                              Deploy it on Vercel
                            </Text>
                            <Text
                              className="font-normal leading-[22.00px] mt-[9px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[91%]"
                              variant="body44"
                            >
                              Easily manage your React apps by directly
                              deploying them to Vercel.
                            </Text>
                            <div className="flex flex-row items-center justify-start mt-[7px] md:w-[100%] w-[44%]">
                              <Text
                                className="font-medium text-blue_A100 text-left w-[auto]"
                                variant="body42"
                              >
                                Learn more
                              </Text>
                              <Img
                                src="images/img_6242912d98b1ffc.svg"
                                className="h-[22px] ml-[2px] w-[22px]"
                                alt="6242912d98b1ffc_Ten"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 flex-col items-start justify-start pb-[28px] sm:w-[100%] w-[48%]">
                          <div className="flex h-[54px] items-center justify-start w-[54px]">
                            <div className="bg-black_900 flex h-[54px] items-center justify-start p-[4px] w-[54px]">
                              <div className="flex flex-col gap-[6px] items-center justify-start my-[2px] md:w-[100%] w-[96%]">
                                <Img
                                  src="images/img_vector_17x17.png"
                                  className="h-[17px] md:h-[auto] object-cover w-[17px]"
                                  alt="vector_Four"
                                />
                                <div className="flex flex-row gap-[13px] items-center justify-between w-[100%]">
                                  <Img
                                    src="images/img_vector_16x16.png"
                                    className="h-[16px] md:h-[auto] object-cover w-[16px]"
                                    alt="vector_Five"
                                  />
                                  <Img
                                    src="images/img_vector_17x15.png"
                                    className="h-[17px] md:h-[auto] object-cover w-[auto]"
                                    alt="vector_Six"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-[9px] items-start justify-end mt-[2px] pr-[3px] py-[3px] w-[100%]">
                            <Text
                              className="font-medium text-gray_100 text-left w-[auto]"
                              variant="body39"
                            >
                              Sync Code to IDEs
                            </Text>
                            <Text
                              className="font-normal leading-[22.00px] not-italic text-left text-white_A700_7f sm:w-[100%] w-[92%]"
                              variant="body43"
                            >
                              Sync app code directly to VS Code, Android Studio,
                              or IntelliJ.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:mt-[0] mt-[295px] md:w-[100%] w-[43%]">
                <div className="md:h-[207px] h-[208px] relative w-[100%]">
                  <Img
                    src="images/img_vector_207x485.png"
                    className="h-[207px] m-[auto] object-cover w-[auto]"
                    alt="vector_Seven"
                  />
                  <div className="absolute bottom-[14%] flex flex-col gap-[51px] inset-x-[0] items-center justify-start mx-[auto] w-[84%]">
                    <Img
                      src="images/img_vector_39x353.png"
                      className="h-[39px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                      alt="vector_Eight"
                    />
                    <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between w-[100%]">
                      <div
                        className="bg-cover bg-no-repeat flex sm:flex-1 h-[48px] items-center justify-end p-[13px] sm:w-[100%] w-[39%]"
                        style={{
                          backgroundImage:
                            "url('images/img_vector_207x485.png')",
                        }}
                      >
                        <div className="flex flex-row items-start justify-start md:w-[100%] w-[91%]">
                          <Img
                            src="images/img_vector_23x23.png"
                            className="h-[20px] md:h-[auto] object-cover w-[20px]"
                            alt="vector_Nine"
                          />
                          <Img
                            src="images/img_vector_22x22.png"
                            className="h-[17px] md:h-[auto] ml-[5px] object-cover w-[17px]"
                            alt="vector_Ten"
                          />
                          <Img
                            src="images/img_signal_white_a700.svg"
                            className="h-[11px] ml-[14px] mt-[5px] w-[auto]"
                            alt="signal_One"
                          />
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex sm:flex-1 h-[48px] items-center justify-end p-[12px] sm:w-[100%] w-[58%]"
                        style={{
                          backgroundImage:
                            "url('images/img_vector_207x485.png')",
                        }}
                      >
                        <div className="flex flex-row items-start justify-start md:w-[100%] w-[96%]">
                          <Img
                            src="images/img_vector_1.png"
                            className="h-[22px] md:h-[auto] object-cover w-[22px]"
                            alt="vector_Eleven"
                          />
                          <Img
                            src="images/img_vector_2.png"
                            className="h-[16px] md:h-[auto] mt-[2px] rounded-[50%] w-[16px]"
                            alt="vector_Twelve"
                          />
                          <Img
                            src="images/img_vector_white_a700_11x142.svg"
                            className="h-[11px] ml-[14px] mt-[6px] w-[auto]"
                            alt="vector_Thirteen"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_62d26106a73d906.png"
            className="sm:flex-1 h-[572px] md:h-[auto] md:mt-[0] mt-[3888px] object-cover sm:w-[100%] w-[auto]"
            alt="div_Five"
          />
        </div>
        <div className="flex flex-col gap-[59px] items-center justify-start max-w-[1280px] mx-[auto] md:px-[20px] px-[31px] w-[100%]">
          <div className="flex flex-col gap-[11px] items-start justify-start pr-[3px] py-[3px] md:w-[100%] w-[auto]">
            <Text
              className="text-left text-white_A700_dd w-[auto]"
              variant="body22"
            >
              Readable code with no dependencies
            </Text>
            <Text
              className="font-light leading-[26.00px] text-left text-white_A700_b2 sm:w-[100%] w-[60%]"
              variant="body41"
            >
              DhiWise generates clean, reusable, modular and developer-friendly
              code with zero dependencies and minimal code refactoring.
            </Text>
          </div>
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[39px] items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between w-[100%]">
                  <div className="sm:h-[164px] h-[56px] relative md:w-[100%] w-[51%]">
                    <div className="bg-black_900 h-[54px] m-[auto] rounded-[27px] w-[100%]"></div>
                    <div className="absolute bg-gradient8  flex sm:flex-col flex-row sm:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[7px] rounded-[28px] w-[100%]">
                      <Button className="bg-blue_A700 cursor-pointer font-normal min-w-[113px] not-italic pl-[20px] pr-[19.17px] py-[10px] rounded-[21px] text-[14px] text-center text-white_A700 w-[auto]">
                        Readability
                      </Button>
                      <Text
                        className="font-normal sm:ml-[0] ml-[20px] not-italic text-left text-white_A700_87 w-[auto]"
                        variant="body44"
                      >
                        Component driven code
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[48px] not-italic text-left text-white_A700_87 w-[auto]"
                        variant="body44"
                      >
                        Responsive UI
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[41px] not-italic text-left text-white_A700_87 w-[auto]"
                        variant="body44"
                      >
                        State Management
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-blue_A700 cursor-pointer font-medium mb-[5px] min-w-[129px] md:mt-[0] mt-[11px] pl-[24px] pr-[25.7px] sm:px-[20px] py-[8px] rounded-[4px] text-[15px] text-center text-white_A700 tracking-[1.00px] w-[auto]">
                    Build Now
                  </Button>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <Img
                    src="images/img_62f242fbfde2c2a.png"
                    className="h-[685px] md:h-[auto] object-cover w-[100%]"
                    alt="62f242fbfde2c2a"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1216px] mt-[99px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[11px] items-start justify-end pr-[4px] py-[4px] w-[100%]">
            <Text
              className="font-semibold text-left text-white_A700_dd w-[auto]"
              variant="body23"
            >
              Start with Pre-built Designs.
            </Text>
            <Text
              className="font-light leading-[26.00px] text-left text-white_A700_b2 sm:w-[100%] w-[60%]"
              variant="body41"
            >
              Customize them as you want. Choose from a library of over 100+
              templates or 1000+ screens which you can customize with DhiWise’s
              Smart Editor.
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
            <div className="bg-gradient9  flex md:flex-1 flex-col gap-[41px] items-center justify-end pt-[40px] rounded-[10px] md:w-[100%] w-[50%]">
              <div className="flex flex-col items-start justify-start pr-[4px] pt-[4px] md:w-[100%] w-[87%]">
                <Text
                  className="text-left text-white_A700_dd w-[auto]"
                  variant="body26"
                >
                  Templates
                </Text>
                <Text
                  className="font-light leading-[26.00px] mt-[3px] text-left text-white_A700_b2 sm:w-[100%] w-[61%]"
                  variant="body41"
                >
                  Our templates have pre-built navigations, authentication, and
                  much more
                </Text>
                <Button className="bg-blue_A700 cursor-pointer font-medium min-w-[147px] mt-[20px] pl-[24px] pr-[25.81px] sm:px-[20px] py-[8px] rounded-[4px] text-[15px] text-center text-white_A700 tracking-[1.00px] w-[auto]">
                  Explore now
                </Button>
              </div>
              <Img
                src="images/img_62d27ba3fc49d78.svg"
                className="h-[199px] rounded-bl-[10px] rounded-br-[10px] w-[auto]"
                alt="62d27ba3fc49dSeventyEight"
              />
            </div>
            <div className="bg-gradient9  flex md:flex-1 flex-col items-center justify-end pt-[40px] rounded-[10px] md:w-[100%] w-[50%]">
              <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px] md:w-[100%] w-[87%]">
                <Text
                  className="text-left text-white_A700_dd w-[auto]"
                  variant="body26"
                >
                  Screen Library
                </Text>
                <Text
                  className="font-light mt-[8px] text-left text-white_A700_b2 w-[auto]"
                  variant="body42"
                >
                  Build your app idea even if you don’t have Designs
                </Text>
                <div className="bg-blue_A700 flex items-start justify-start mt-[22px] pl-[24px] pr-[25.81px] sm:px-[20px] py-[8px] rounded-[4px] self-stretch w-[auto]">
                  <Text
                    className="font-medium text-left text-white_A700 tracking-[1.00px] w-[auto]"
                    variant="body42"
                  >
                    Explore now
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_62d27cfd7556582.png"
                className="h-[267px] md:h-[auto] object-cover rounded-bl-[10px] rounded-br-[10px] w-[100%]"
                alt="62d27cfd7556582"
              />
            </div>
          </div>
        </div>
        <div className="h-[1296px] md:h-[1416px] max-w-[1280px] mt-[120px] mx-[auto] md:px-[20px] relative w-[100%]">
          <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[95%]">
            <div className="flex flex-col md:gap-[40px] gap-[438px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                <div className="bg-gradient10  flex md:flex-1 items-center justify-start p-[30px] sm:px-[20px] rounded-[10px] md:w-[100%] w-[50%]">
                  <div className="flex flex-col gap-[100px] md:gap-[40px] items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[10px] items-start justify-start pb-[20px] sm:pr-[20px] pr-[40.72px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold text-left text-white_A700_dd w-[auto]"
                        variant="body23"
                      >
                        Join our Community
                      </Text>
                      <Text
                        className="font-light leading-[26.00px] md:max-w-[100%] max-w-[497px] text-left text-white_A700_7f"
                        variant="body42"
                      >
                        Whether you are a programming enthusiast, interested in
                        attending events or getting regular updates, answering
                        questions of the community or joining DhiWise bandwagon,
                        this space is for you.
                      </Text>
                    </div>
                    <List
                      className="flex-col gap-[30.5px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-[14px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                        <Button className="bg-indigo_A100_19 flex h-[46px] items-center justify-center p-[11px] rounded-[14px] w-[46px]">
                          <Img
                            src="images/img_div_46x46.png"
                            className="h-[24px]"
                            alt="div"
                          />
                        </Button>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                          <div className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body44"
                            >
                              Discord
                            </Text>
                            <Text
                              className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[325px] not-italic text-left text-white_A700_7f"
                              variant="body41"
                            >
                              Say hello to our DhiWise community where you’ll
                              find our users and can interact with our tech team
                            </Text>
                          </div>
                          <Button className="bg-white_A700_19 cursor-pointer font-normal min-w-[97px] not-italic pl-[20px] sm:pr-[20px] pr-[22.16px] py-[10px] rounded-[6px] text-[13px] text-center text-white_A700 w-[auto]">
                            Join now
                          </Button>
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-white_A700_1e w-[100%]" />
                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-[14px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                        <Button className="bg-lime_800_26 flex h-[46px] items-center justify-center p-[11px] rounded-[14px] w-[46px]">
                          <Img
                            src="images/img_div_1.png"
                            className="h-[24px]"
                            alt="div"
                          />
                        </Button>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
                          <div className="flex flex-col items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body44"
                            >
                              Newsletter
                            </Text>
                            <Text
                              className="font-normal leading-[26.00px] md:max-w-[100%] max-w-[286px] not-italic text-left text-white_A700_7f"
                              variant="body42"
                            >
                              Don’t miss an update about our weekly releases and
                              upcoming events.
                            </Text>
                          </div>
                          <Button className="bg-white_A700_19 cursor-pointer font-normal min-w-[97px] not-italic pl-[20px] sm:pr-[20px] pr-[22.16px] py-[10px] rounded-[6px] text-[13px] text-center text-white_A700 w-[auto]">
                            Join now
                          </Button>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="bg-gray_903 flex md:flex-1 items-center justify-start p-[30px] sm:px-[20px] rounded-[10px] md:w-[100%] w-[50%]">
                  <div className="flex flex-col gap-[30px] items-start justify-start pb-[136px] self-stretch sm:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-left text-white_A700_dd w-[auto]"
                      variant="body23"
                    >
                      Learn
                    </Text>
                    <div className="h-[273px] pr-[7px] relative w-[100%]">
                      <div className="flex h-[100%] items-center justify-end pr-[4.3px] self-stretch w-[auto]">
                        <Text
                          className="font-light text-blue_A701 text-left w-[auto]"
                          variant="body31"
                        ></Text>
                      </div>
                      <Text
                        className="absolute font-light h-[100%] inset-[0] justify-center leading-[39.00px] m-[auto] text-bluegray_401 text-left sm:w-[100%] w-[99%]"
                        variant="body28"
                      ></Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_908 flex md:flex-col flex-row md:gap-[40px] items-center justify-between px-[2px] rounded-[20px] w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[37px] pb-[5px] md:w-[100%] w-[auto]">
                  <div className="flex items-start justify-start w-[100%]">
                    <Text
                      className="font-medium leading-[36.00px] text-left text-white_A700_dd sm:w-[100%] w-[96%]"
                      variant="body24"
                    ></Text>
                  </div>
                  <Text
                    className="font-light leading-[26.00px] mt-[7px] text-left text-white_A700_b2 sm:w-[100%] w-[91%]"
                    variant="body41"
                  >
                    Signup to use DhiWise, it’s completely free to get started
                    with
                  </Text>
                  <Button className="bg-blue_A700 cursor-pointer font-medium min-w-[259px] mt-[54px] pl-[32px] pr-[32.92px] sm:px-[20px] py-[16px] rounded-[4px] text-[15px] text-center text-white_A700 tracking-[1.00px] w-[auto]">
                    Build your first App now
                  </Button>
                </div>
                <Img
                  src="images/img_63e0d8664cfa8bf.png"
                  className="md:flex-1 h-[319px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                  alt="63e0d8664cfa8bf"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[21%] h-[512px] md:h-[559px] inset-x-[0] mx-[auto] sm:px-[20px] px-[29px] w-[100%]">
            <div className="absolute bg-gradient11  h-[512px] inset-[0] justify-center m-[auto] rounded-[50%] w-[512px]"></div>
            <div className="absolute h-[218px] md:h-[559px] inset-[0] justify-center m-[auto] md:w-[100%] w-[96%]">
              <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <div className="flex flex-col gap-[216px] md:gap-[40px] items-center justify-start w-[100%]">
                  <Line className="bg-gradient12  h-[1px] rounded-[1px] w-[100%]" />
                  <Line className="bg-gradient12  h-[1px] rounded-[1px] w-[100%]" />
                </div>
              </div>
              <div className="absolute border-indigo_A400 border-l-[1px] border-solid h-[218px] inset-y-[0] left-[0] my-[auto] rounded-[5px] w-[1%]"></div>
              <div className="absolute bg-black_900_49 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] sm:pl-[20px] md:pl-[40px] pl-[60px] pt-[60px] rounded-[10px] w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-end md:w-[100%] w-[auto]">
                  <Text
                    className="mt-[2px] text-center text-white_A700 w-[auto]"
                    variant="body11"
                  >
                    500K+
                  </Text>
                  <Text
                    className="font-medium text-center text-white_A700_dd w-[auto]"
                    variant="body44"
                  >
                    Screens Processed
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[27px] items-center justify-start md:ml-[0] ml-[100px] pt-[5px] px-[5px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold text-center text-white_A700 w-[auto]"
                    variant="body12"
                  >
                    55K+
                  </Text>
                  <Text
                    className="font-medium text-center text-white_A700_dd w-[auto]"
                    variant="body44"
                  >
                    Applications Built
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-end md:ml-[0] ml-[100px] md:w-[100%] w-[auto]">
                  <Text
                    className="mt-[2px] text-center text-white_A700 w-[auto]"
                    variant="body11"
                  >
                    4M+
                  </Text>
                  <Text
                    className="font-medium text-center text-white_A700_dd w-[auto]"
                    variant="body44"
                  >
                    Man Hours Saved
                  </Text>
                </div>
                <Img
                  src="images/img_63d7986da334272.png"
                  className="md:flex-1 h-[154px] sm:h-[auto] md:ml-[0] ml-[55px] md:mt-[0] mt-[4px] object-cover md:w-[100%] w-[27%]"
                  alt="63d7986da334272"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1280px] mt-[60px] mx-[auto] pb-[32px] md:px-[20px] px-[32px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
            <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start py-[3px] md:w-[100%] w-[25%]">
              <Text
                className="font-semibold text-left text-white_A700 w-[auto]"
                variant="body43"
              >
                Products
              </Text>
              <div className="flex flex-col items-start justify-end mb-[202px] pr-[2px] py-[2px] w-[100%]">
                <Text
                  className="font-light text-left text-white_A700_99 w-[auto]"
                  variant="body44"
                >
                  Flutter
                </Text>
                <Text
                  className="font-light mt-[17px] text-left text-white_A700_99 w-[auto]"
                  variant="body43"
                >
                  React
                </Text>
                <Text
                  className="font-light mt-[17px] text-left text-white_A700_99 w-[auto]"
                  variant="body44"
                >
                  Android
                </Text>
                <Text
                  className="font-light mt-[17px] text-left text-white_A700_99 w-[auto]"
                  variant="body44"
                >
                  iOS
                </Text>
                <Text
                  className="font-light mt-[19px] text-left text-white_A700_99 w-[auto]"
                  variant="body44"
                >
                  Node.js
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start pb-[78px] md:w-[100%] w-[25%]">
              <div className="flex flex-col gap-[17px] items-start justify-start pt-[3px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body42"
                >
                  Design to code
                </Text>
                <div className="flex flex-col items-start justify-end pr-[2px] py-[2px] w-[100%]">
                  <Text
                    className="font-light mt-[2px] text-left text-white_A700_99 w-[auto]"
                    variant="body43"
                  >
                    Figma plugin
                  </Text>
                  <Text
                    className="font-light mt-[17px] text-left text-white_A700_99 w-[auto]"
                    variant="body44"
                  >
                    Templates
                  </Text>
                  <Text
                    className="font-light mt-[17px] text-left text-white_A700_99 w-[auto]"
                    variant="body44"
                  >
                    Screen Library
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[17px] items-start justify-start pt-[3px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body42"
                >
                  Learning
                </Text>
                <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-[100%]">
                  <Text
                    className="font-light text-left text-white_A700_99 w-[auto]"
                    variant="body43"
                  >
                    Documentation
                  </Text>
                  <Text
                    className="font-light mt-[18px] text-left text-white_A700_99 w-[auto]"
                    variant="body43"
                  >
                    Blog
                  </Text>
                  <Text
                    className="font-light mt-[17px] text-left text-white_A700_99 w-[auto]"
                    variant="body44"
                  >
                    DhiWise University
                  </Text>
                  <Text
                    className="font-light mt-[16px] text-left text-white_A700_99 w-[auto]"
                    variant="body44"
                  >
                    Use Cases
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[17px] items-start justify-start pt-[3px] md:w-[100%] w-[25%]">
              <Text
                className="font-semibold text-left text-white_A700 w-[auto]"
                variant="body42"
              >
                Comparison
              </Text>
              <div className="flex flex-col items-start justify-end pr-[3px] py-[3px] w-[100%]">
                <Text
                  className="font-light text-left text-white_A700_99 w-[auto]"
                  variant="body44"
                >
                  DhiWise vs Anima
                </Text>
                <Text
                  className="font-light mt-[19px] text-left text-white_A700_99 w-[auto]"
                  variant="body44"
                >
                  DhiWise vs Appsmith
                </Text>
                <Text
                  className="font-light mt-[16px] text-left text-white_A700_99 w-[auto]"
                  variant="body44"
                >
                  DhiWise vs FlutterFlow
                </Text>
                <Text
                  className="font-light mt-[19px] text-left text-white_A700_99 w-[auto]"
                  variant="body44"
                >
                  DhiWise vs Monday Hero
                </Text>
                <Text
                  className="font-light mt-[16px] text-left text-white_A700_99 w-[auto]"
                  variant="body44"
                >
                  DhiWise vs Retool
                </Text>
                <Text
                  className="font-light mt-[19px] text-left text-white_A700_99 w-[auto]"
                  variant="body44"
                >
                  DhiWise vs Supernova
                </Text>
                <Text
                  className="font-light mt-[18px] text-left text-white_A700_99 w-[auto]"
                  variant="body44"
                >
                  DhiWise vs Amplication
                </Text>
                <Text
                  className="font-light mt-[16px] text-left text-white_A700_99 w-[auto]"
                  variant="body44"
                >
                  DhiWise vs Bubble
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start pb-[10px] md:w-[100%] w-[25%]">
              <div className="flex flex-col gap-[17px] items-start justify-start pt-[3px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body42"
                >
                  DhiWise Programs
                </Text>
                <div className="flex flex-col items-start justify-end pr-[3px] py-[3px] w-[100%]">
                  <Text
                    className="font-light text-left text-white_A700_99 w-[auto]"
                    variant="body43"
                  >
                    Champion
                  </Text>
                  <Text
                    className="font-light mt-[15px] text-left text-white_A700_99 w-[auto]"
                    variant="body43"
                  >
                    Ambassador
                  </Text>
                  <Text
                    className="font-light mt-[17px] text-left text-white_A700_99 w-[auto]"
                    variant="body44"
                  >
                    Partner
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[17px] items-start justify-start pt-[3px] w-[100%]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body42"
                >
                  Company
                </Text>
                <div className="flex flex-col items-start justify-end py-[2px] w-[100%]">
                  <Text
                    className="font-light text-left text-white_A700_99 w-[auto]"
                    variant="body44"
                  >
                    About Us
                  </Text>
                  <Text
                    className="font-light mt-[17px] text-left text-white_A700_99 w-[auto]"
                    variant="body44"
                  >
                    Contact Us
                  </Text>
                  <Text
                    className="font-light mt-[17px] text-left text-white_A700_99 w-[auto]"
                    variant="body43"
                  >
                    Career
                  </Text>
                  <Text
                    className="font-light mt-[17px] text-left text-white_A700_99 w-[auto]"
                    variant="body44"
                  >
                    Terms & Conditions
                  </Text>
                  <div className="flex items-start justify-end mt-[13px] pr-[3px] py-[3px] w-[100%]">
                    <Text
                      className="font-light text-left text-white_A700_99 w-[auto]"
                      variant="body44"
                    >
                      Terms Of Use
                    </Text>
                  </div>
                  <Text
                    className="font-light mt-[15px] text-left text-white_A700_99 w-[auto]"
                    variant="body44"
                  >
                    Privacy Policy
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mb-[18px] pt-[30px] w-[100%]">
            <Img
              src="images/img_62383c8a3006dc7.svg"
              className="h-[29px] w-[auto]"
              alt="62383c8a3006dcSeven_One"
            />
            <Text
              className="font-normal md:ml-[0] ml-[319px] md:mt-[0] mt-[7px] not-italic text-center text-white_A700_b2 w-[auto]"
              variant="body47"
            >
              © 2023 DhiWise PVT. LTD. All rights reserved
            </Text>
            <div className="flex md:flex-1 flex-row gap-[16px] items-center justify-end md:ml-[0] ml-[73px] pl-[127px] sm:pl-[20px] md:pl-[40px] md:w-[100%] w-[34%]">
              <Img
                src="images/img_61a1f2159cb6fdc.png"
                className="h-[26px] md:h-[auto] object-cover w-[26px]"
                alt="61a1f2159cb6fdc"
              />
              <Img
                src="images/img_63135090553f410.png"
                className="h-[26px] md:h-[auto] object-cover w-[26px]"
                alt="63135090553f410"
              />
              <Img
                src="images/img_633558710dc5e4f.png"
                className="h-[26px] md:h-[auto] object-cover w-[26px]"
                alt="633558710dc5e4f"
              />
              <Img
                src="images/img_62e64b992fdfe11.png"
                className="h-[26px] md:h-[auto] object-cover w-[26px]"
                alt="62e64b992fdfeEleven"
              />
              <Img
                src="images/img_620626b9bac0a8a.png"
                className="h-[26px] md:h-[auto] object-cover w-[26px]"
                alt="620626b9bac0a8a"
              />
              <Img
                src="images/img_631354986c1bca6.png"
                className="h-[26px] md:h-[auto] object-cover w-[26px]"
                alt="631354986c1bcaSix"
              />
              <Img
                src="images/img_62e298a37b020a3.png"
                className="h-[26px] md:h-[auto] object-cover w-[26px]"
                alt="62e298a37b020aThree"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortLandpgPage;
