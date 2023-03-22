import React from "react";

import { Img, Text, Button, List } from "components";

const PortfolPage = () => {
  return (
    <>
      <div className="flex font-raleway items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="bg-white_A700 flex flex-col md:gap-[40px] gap-[63px] items-center justify-start w-[100%]">
            <div className="flex flex-col md:px-[20px] relative w-[100%]">
              <div className="bg-gradient32  flex flex-col gap-[132px] md:gap-[40px] items-center justify-start mx-[auto] pb-[30px] w-[100%]">
                <div className="sm:h-[109px] h-[137px] md:h-[653px] relative w-[100%]">
                  <header className="absolute bottom-[0] flex md:flex-col flex-row md:gap-[20px] inset-x-[0] items-center justify-center mx-[auto] w-[100%]">
                    <Img
                      src="images/img_logosvg_gray_314.svg"
                      className="h-[58px] mb-[18px] md:mt-[0] mt-[32px] w-[auto]"
                      alt="logosvg"
                    />
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-end mb-[18px] pt-[26px] sm:px-[20px] px-[26px] md:w-[100%] w-[87%]">
                      <Text
                        className="font-extrabold md:mt-[0] mt-[30px] text-right text-white_A700 uppercase w-[auto]"
                        variant="body39"
                      >
                        Programs
                      </Text>
                      <Text
                        className="font-extrabold md:ml-[0] ml-[34px] md:mt-[0] mt-[30px] text-right text-white_A700 uppercase w-[auto]"
                        variant="body39"
                      >
                        Climate 100
                      </Text>
                      <Text
                        className="font-extrabold md:ml-[0] ml-[34px] md:mt-[0] mt-[30px] text-right text-white_A700 uppercase w-[auto]"
                        variant="body39"
                      >
                        Health 100
                      </Text>
                      <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[21px] md:mt-[0] mt-[17px] pl-[14px] pr-[15.7px] py-[13.5px] self-stretch w-[auto]">
                        <Text
                          className="font-extrabold text-green_A400 text-right uppercase w-[auto]"
                          variant="body39"
                        >
                          Portfolio
                        </Text>
                        <div className="bg-green_A400 h-[4px] w-[19%]"></div>
                      </div>
                      <Text
                        className="font-extrabold md:ml-[0] ml-[19px] md:mt-[0] mt-[30px] text-right text-white_A700 uppercase w-[auto]"
                        variant="body39"
                      >
                        News
                      </Text>
                      <Text
                        className="font-extrabold md:ml-[0] ml-[34px] md:mt-[0] mt-[30px] text-right text-white_A700 uppercase w-[auto]"
                        variant="body39"
                      >
                        Events
                      </Text>
                      <Text
                        className="font-extrabold md:ml-[0] ml-[35px] md:mt-[0] mt-[30px] text-right text-white_A700 uppercase w-[auto]"
                        variant="body39"
                      >
                        Jobs
                      </Text>
                      <Text
                        className="font-extrabold md:ml-[0] ml-[35px] md:mt-[0] mt-[30px] text-right text-white_A700 uppercase w-[auto]"
                        variant="body39"
                      >
                        Team
                      </Text>
                      <Text
                        className="font-extrabold md:ml-[0] ml-[35px] md:mt-[0] mt-[30px] text-right text-white_A700 uppercase w-[auto]"
                        variant="body39"
                      >
                        About
                      </Text>
                      <Button className="bg-gradient33  cursor-pointer font-bold leading-[normal] min-w-[94px] md:ml-[0] ml-[20px] md:mt-[0] mt-[20px] pl-[17px] pr-[16.5px] py-[10px] rounded-[4px] text-[17px] text-black_900 text-center uppercase w-[auto]">
                        Invest
                      </Button>
                    </div>
                    <Img
                      src="images/img_search_light_blue_a201.svg"
                      className="h-[22px] mb-[32px] md:ml-[0] md:mt-[0] mt-[55px] mx-[8px] w-[23px]"
                      alt="search"
                    />
                  </header>
                  <div className="absolute bg-black_900_a3 flex inset-x-[0] items-center justify-end mx-[auto] p-[10px] top-[0] w-[100%]">
                    <Text
                      className="font-extrabold mt-[2px] text-center text-white_A700 tracking-[1.40px] uppercase w-[auto]"
                      variant="body43"
                    >
                      Register for the 2023 SOSV Climate Tech Summit on Sept.
                      26-27.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[57.8px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="text-center text-white_A700 w-[auto]"
                    variant="body1"
                  >
                    Local Key Trends
                  </Text>
                  <div className="flex md:flex-col flex-row gap-[6px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
                    <Img
                      src="images/img_arrowleft_black_900.svg"
                      className="h-[44px] w-[24px]"
                      alt="arrowleft"
                    />
                    <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                      <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start pb-[40px] sm:px-[20px] px-[40px] w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[401px] items-start justify-start p-[28px] sm:px-[20px] shadow-bs25 w-[100%]"
                          style={{
                            backgroundImage:
                              "url('images/img_div_401x410.png')",
                          }}
                        >
                          <Text
                            className="bg-clip-text bg-gradient34  leading-[40.00px] md:ml-[0] ml-[20px] text-left text-transparent sm:w-[100%] w-[77%]"
                            variant="body13"
                          >
                            Human Health 100
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[20px] mt-[25px] text-left text-white_A700 sm:w-[100%] w-[85%]"
                            variant="body33"
                          >
                            The SOSV health portfolio is the “Shibuya-crossing”
                            of health tech, with companies ranging from
                            assistive robotics to therapeutics, diagnostics,
                            remote care and biomanufacturing.
                          </Text>
                          <Text
                            className="font-bold mb-[20px] md:ml-[0] ml-[20px] mt-[23px] text-cyan_A201 text-left w-[auto]"
                            variant="body37"
                          >
                            More
                          </Text>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[401px] items-start justify-start p-[28px] sm:px-[20px] shadow-bs25 w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_div_32.png')",
                          }}
                        >
                          <Text
                            className="bg-clip-text bg-gradient34  leading-[40.00px] md:ml-[0] ml-[20px] text-left text-transparent sm:w-[100%] w-[69%]"
                            variant="body13"
                          >
                            Climate Tech 100 2022
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[20px] mt-[25px] text-left text-white_A700 sm:w-[100%] w-[84%]"
                            variant="body33"
                          >
                            SOSV is world’s leading climate tech investor. The
                            climate portfolio covers all climate categories,
                            from energy to transport, but is especially strong
                            in food and agtech.
                          </Text>
                          <Text
                            className="font-bold mb-[20px] md:ml-[0] ml-[20px] mt-[47px] text-cyan_A201 text-left w-[auto]"
                            variant="body37"
                          >
                            More
                          </Text>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-1 flex-col h-[401px] items-start justify-start p-[28px] sm:px-[20px] shadow-bs25 w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_div_33.png')",
                          }}
                        >
                          <Text
                            className="bg-clip-text bg-gradient34  leading-[40.00px] md:ml-[0] ml-[20px] text-left text-transparent sm:w-[100%] w-[50%]"
                            variant="body13"
                          >
                            Female Founders
                          </Text>
                          <Text
                            className="font-semibold md:ml-[0] ml-[20px] mt-[25px] text-left text-white_A700 sm:w-[100%] w-[87%]"
                            variant="body33"
                          >
                            SOSV has invested in 500 women founders, and 1 in 3
                            of our companies have at least one female founder.
                            Approximately $1 in every $3 that SOSV invests
                            through its core funds goes to a woman-led company.
                          </Text>
                          <Text
                            className="font-bold mb-[20px] md:ml-[0] ml-[20px] mt-[23px] text-cyan_A201 text-left w-[auto]"
                            variant="body37"
                          >
                            More
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_arrowright_black_900_44x24.svg"
                      className="h-[44px] w-[24px]"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] items-center justify-start mt-[-62.05px] mx-[auto] pb-[37px] w-[68%] z-[1]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                      <div className="flex relative md:w-[100%] w-[50%]">
                        <Img
                          src="images/img_pseudo_162x190.svg"
                          className="h-[162px] hidden my-[auto] w-[auto]"
                          alt="pseudo_One"
                        />
                        <Text
                          className="sm:flex sm:flex-col sm:gap-[11px] sm:items-start sm:justify-start mb-[20px] sm:mb-[2px] ml-[-190px] sm:ml-[10px] mr-[auto] sm:mt-[11px] mt-[auto] sm:relative text-blue_803 text-left w-[auto] z-[1]"
                          variant="body2"
                        >
                          Portfolio Companies
                        </Text>
                      </div>
                      <div className="flex md:flex-1 sm:flex-col flex-row gap-[27px] items-center justify-between md:mt-[0] mt-[82px] md:w-[100%] w-[34%]">
                        <a
                          className="font-hairline text-[15px] text-left text-pink_A402 underline w-[auto]"
                          href="javascript:"
                        >
                          Reset All Filters
                        </a>
                        <div className="flex items-center justify-start sm:w-[100%] w-[auto]">
                          <div className="bg-white_A700 border-[1px] border-blue_803 border-solid h-[50px] pl-[28px] pr-[31px] sm:px-[20px] py-[13px] relative rounded-[25px] w-[306px]">
                            <div className="absolute flex h-[max-content] inset-[0] items-start justify-start m-[auto] self-stretch w-[auto]">
                              <Text
                                className="font-semibold text-blue_803 text-left w-[auto]"
                                variant="body33"
                              >
                                Keyword Search
                              </Text>
                            </div>
                            <Img
                              src="images/img_pseudo_50x30.png"
                              className="absolute h-[50px] inset-y-[0] my-[auto] object-cover right-[62%] w-[10%]"
                              alt="pseudo_Two"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient35  h-[8px] w-[100%]"></div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:w-[100%] w-[24%]">
                    <List
                      className="flex-col gap-[40px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="h-[233px] my-[0] relative w-[100%]">
                        <div className="absolute border-blue_803 border-solid border-t-[1px] flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                          <div className="border-b-[1px] border-gray_500_4c border-solid flex items-start justify-end mb-[184px] pr-[8px] py-[8px] w-[100%]">
                            <Text
                              className="font-bold mt-[3px] text-blue_803 text-left w-[auto]"
                              variant="body31"
                            >
                              Key Trends
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col gap-[10px] inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              Female Founders
                            </Text>
                            <Text
                              className="font-light ml-[93px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              209
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              Climate Tech 100 2022
                            </Text>
                            <Text
                              className="font-light ml-[53px] mt-[3px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              100
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              Human Health 100
                            </Text>
                            <Text
                              className="font-light h-[20px] ml-[92px] mt-[3px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              96
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] mt-[3px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              Emerging Markets
                            </Text>
                            <Text
                              className="font-light ml-[96px] mt-[2px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              62
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] mt-[3px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              COVID-19 Response
                            </Text>
                            <Text
                              className="font-light ml-[85px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              14
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="h-[198px] my-[0] relative w-[100%]">
                        <div className="absolute border-blue_803 border-solid border-t-[1px] flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                          <div className="border-b-[1px] border-gray_500_4c border-solid flex items-start justify-end mb-[149px] pr-[8px] py-[8px] w-[100%]">
                            <Text
                              className="font-bold mt-[4px] text-blue_803 text-left w-[auto]"
                              variant="body31"
                            >
                              Programs
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col gap-[10px] inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] mt-[3px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              Orbit Startups
                            </Text>
                            <Text
                              className="font-light ml-[121px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              203
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              IndieBio
                            </Text>
                            <Text
                              className="font-light ml-[170px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              197
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] mt-[2px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              SOSV
                            </Text>
                            <Text
                              className="font-light ml-[192px] mt-[3px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              148
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              HAX
                            </Text>
                            <Text
                              className="font-light ml-[201px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              130
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="h-[233px] my-[0] relative w-[100%]">
                        <div className="absolute border-blue_803 border-solid border-t-[1px] flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                          <div className="border-b-[1px] border-gray_500_4c border-solid flex items-start justify-end mb-[184px] pr-[8px] py-[8px] w-[100%]">
                            <Text
                              className="font-bold mt-[4px] text-blue_803 text-left w-[auto]"
                              variant="body31"
                            >
                              Stage
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col gap-[10px] inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              Pre-Seed
                            </Text>
                            <Text
                              className="font-light ml-[161px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              291
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              Seed
                            </Text>
                            <Text
                              className="font-light ml-[195px] mt-[2px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              216
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] mt-[2px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              Series A(+)
                            </Text>
                            <Text
                              className="font-light ml-[161px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              94
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              Exit
                            </Text>
                            <Text
                              className="font-light ml-[215px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              43
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              Growth
                            </Text>
                            <Text
                              className="font-light ml-[185px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              33
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="h-[374px] relative w-[100%]">
                      <div className="absolute border-blue_803 border-solid border-t-[1px] flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                        <div className="border-b-[1px] border-gray_500_4c border-solid flex items-start justify-end mb-[325px] pr-[8px] py-[8px] w-[100%]">
                          <Text
                            className="font-bold mt-[4px] text-blue_803 text-left w-[auto]"
                            variant="body31"
                          >
                            Category
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-[auto] w-[100%]">
                        <div className="flex flex-row items-start justify-start w-[100%]">
                          <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                          <Text
                            className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                            variant="body39"
                          >
                            Human Health
                          </Text>
                          <Text
                            className="font-light ml-[120px] mt-[4px] text-gray_504 text-left w-[auto]"
                            variant="body39"
                          >
                            143
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[10px] w-[100%]">
                          <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                          <Text
                            className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                            variant="body39"
                          >
                            Climate Tech
                          </Text>
                          <Text
                            className="font-light ml-[132px] mt-[4px] text-gray_504 text-left w-[auto]"
                            variant="body39"
                          >
                            125
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[10px] w-[100%]">
                          <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                          <Text
                            className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                            variant="body39"
                          >
                            Hard Tech
                          </Text>
                          <Text
                            className="font-light ml-[156px] mt-[3px] text-gray_504 text-left w-[auto]"
                            variant="body39"
                          >
                            101
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[10px] w-[100%]">
                          <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                          <Text
                            className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                            variant="body39"
                          >
                            E-Commerce
                          </Text>
                          <Text
                            className="font-light ml-[139px] text-gray_504 text-left w-[auto]"
                            variant="body39"
                          >
                            81
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[10px] w-[100%]">
                          <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                          <Text
                            className="font-bold ml-[11px] mt-[2px] text-black_900 text-left w-[auto]"
                            variant="body39"
                          >
                            SaaS
                          </Text>
                          <Text
                            className="font-light ml-[203px] mt-[3px] text-gray_504 text-left w-[auto]"
                            variant="body39"
                          >
                            56
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[10px] w-[100%]">
                          <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                          <Text
                            className="font-bold ml-[11px] mt-[3px] text-black_900 text-left w-[auto]"
                            variant="body39"
                          >
                            AI & Machine Learning
                          </Text>
                          <Text
                            className="font-light ml-[64px] mt-[4px] text-gray_504 text-left w-[auto]"
                            variant="body39"
                          >
                            52
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between mt-[10px] w-[100%]">
                          <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                          <Text
                            className="font-bold mt-[3px] text-black_900 text-left w-[auto]"
                            variant="body39"
                          >
                            Sustainable Manufacturing
                          </Text>
                          <Text
                            className="font-light mt-[4px] text-gray_504 text-left w-[auto]"
                            variant="body39"
                          >
                            51
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[10px] w-[100%]">
                          <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                          <Text
                            className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                            variant="body39"
                          >
                            Fintech
                          </Text>
                          <Text
                            className="font-light ml-[183px] mt-[4px] text-gray_504 text-left w-[auto]"
                            variant="body39"
                          >
                            50
                          </Text>
                        </div>
                        <Text
                          className="font-hairline mt-[11px] text-blue_803 text-left w-[auto]"
                          variant="body31"
                        >
                          See 36 more
                        </Text>
                      </div>
                    </div>
                    <List
                      className="flex-col gap-[39px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="h-[269px] relative w-[100%]">
                        <div className="absolute border-blue_803 border-solid border-t-[1px] flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                          <div className="border-b-[1px] border-gray_500_4c border-solid flex items-start justify-end mb-[220px] pr-[8px] py-[8px] w-[100%]">
                            <Text
                              className="font-bold mt-[3px] text-blue_803 text-left w-[auto]"
                              variant="body31"
                            >
                              Region
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-[auto] w-[100%]">
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              North America
                            </Text>
                            <Text
                              className="font-light ml-[116px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              300
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[10px] w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] mt-[3px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              Europe
                            </Text>
                            <Text
                              className="font-light ml-[181px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              115
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[10px] w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              East Asia
                            </Text>
                            <Text
                              className="font-light ml-[173px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              72
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[10px] w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              Southeast Asia
                            </Text>
                            <Text
                              className="font-light ml-[125px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              53
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[10px] w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              South Asia
                            </Text>
                            <Text
                              className="font-light ml-[158px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              50
                            </Text>
                          </div>
                          <Text
                            className="font-hairline mt-[11px] text-blue_803 text-left w-[auto]"
                            variant="body31"
                          >
                            See 4 more
                          </Text>
                        </div>
                      </div>
                      <div className="h-[269px] relative w-[100%]">
                        <div className="absolute border-blue_803 border-solid border-t-[1px] flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                          <div className="border-b-[1px] border-gray_500_4c border-solid flex items-start justify-start mb-[220px] pr-[10px] py-[10px] w-[100%]">
                            <Text
                              className="font-bold text-blue_803 text-left w-[auto]"
                              variant="body31"
                            >
                              Location
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-[auto] w-[100%]">
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              United States
                            </Text>
                            <Text
                              className="font-light ml-[125px] mt-[3px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              285
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[10px] w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              China
                            </Text>
                            <Text
                              className="font-light ml-[200px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              51
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[10px] w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              Canada
                            </Text>
                            <Text
                              className="font-light ml-[182px] mt-[3px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              46
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[10px] w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              India
                            </Text>
                            <Text
                              className="font-light ml-[204px] mt-[3px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              46
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-[10px] w-[100%]">
                            <div className="border-[1px] border-blue_803 border-solid h-[25px] w-[25px]"></div>
                            <Text
                              className="font-bold ml-[11px] mt-[3px] text-black_900 text-left w-[auto]"
                              variant="body39"
                            >
                              United Kingdom
                            </Text>
                            <Text
                              className="font-light ml-[112px] mt-[4px] text-gray_504 text-left w-[auto]"
                              variant="body39"
                            >
                              43
                            </Text>
                          </div>
                          <Text
                            className="font-hairline mt-[11px] text-blue_803 text-left w-[auto]"
                            variant="body31"
                          >
                            See 45 more
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[50px] items-center justify-start pb-[40px] self-stretch md:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[10px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                      <div className="bg-white_A700 border-blue_204 border-solid border-t-[1px] flex items-start justify-start py-[23px] self-stretch md:w-[100%] w-[auto]">
                        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                          <Img
                            src="images/img_notcohero350x290jpg.png"
                            className="md:flex-1 h-[290px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                            alt="notcohero350xTwentyNine"
                          />
                          <div className="flex md:flex-1 flex-col items-start justify-start py-[5px] md:w-[100%] w-[auto]">
                            <Text
                              className="bg-clip-text bg-gradient36  font-bold text-left text-transparent w-[auto]"
                              variant="body37"
                            >
                              IndieBio 05
                            </Text>
                            <Text
                              className="font-bold mt-[5px] text-bluegray_802 text-left tracking-[-1.00px] w-[auto]"
                              variant="body12"
                            >
                              NotCo
                            </Text>
                            <Text
                              className="font-medium leading-[22.00px] mt-[9px] text-black_900 text-left tracking-[0.30px] sm:w-[100%] w-[99%]"
                              variant="body42"
                            >
                              Food technology company producing plant-based meat
                              and dairy alternatives using AI algorithms.
                            </Text>
                            <div className="flex flex-row items-start justify-start mt-[12px] w-[100%]">
                              <Img
                                src="images/img_location_black_900.svg"
                                className="h-[14px] w-[auto]"
                                alt="location"
                              />
                              <Text
                                className="font-bold ml-[5px] mt-[2px] text-gray_503 text-left tracking-[0.26px] w-[auto]"
                                variant="body44"
                              ></Text>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[5px] items-start justify-start mb-[59px] mt-[20px] pb-[10px] pr-[14.94px] pt-[1.5px] self-stretch sm:w-[100%] w-[auto]">
                              <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[165px] pl-[14px] pr-[15.44px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                Climate Tech 100 2022
                              </Button>
                              <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[74px] pl-[15px] pr-[14.56px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                Growth
                              </Button>
                              <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[93px] pl-[14px] pr-[15.34px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                Alt Protein
                              </Button>
                              <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[108px] pl-[15px] pr-[14.63px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                Climate Tech
                              </Button>
                              <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[103px] pl-[14px] pr-[15.09px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                Future Food
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <List
                        className="flex-col gap-[10px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="bg-white_A700 border-blue_204 border-solid border-t-[1px] flex md:flex-1 items-start justify-start py-[23px] self-stretch md:w-[100%] w-[auto]">
                          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                            <Img
                              src="images/img_rzerohero350x290jpg.png"
                              className="md:flex-1 h-[290px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                              alt="rzerohero350xTwentyNine"
                            />
                            <div className="flex md:flex-1 flex-col items-start justify-start py-[4px] md:w-[100%] w-[auto]">
                              <Text
                                className="bg-clip-text bg-gradient36  font-bold text-left text-transparent w-[auto]"
                                variant="body37"
                              >
                                HAX 2020
                              </Text>
                              <Text
                                className="font-bold mt-[6px] text-bluegray_802 text-left tracking-[-1.00px] w-[auto]"
                                variant="body12"
                              >
                                R-Zero
                              </Text>
                              <Text
                                className="font-medium mt-[11px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                                variant="body42"
                              >
                                UV-C disinfection for businesses
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-[15px] pr-[2px] py-[2px] w-[100%]">
                                <Img
                                  src="images/img_location_black_900.svg"
                                  className="h-[14px] w-[auto]"
                                  alt="location"
                                />
                                <Text
                                  className="font-bold ml-[5px] text-gray_503 text-left tracking-[0.26px] w-[auto]"
                                  variant="body44"
                                ></Text>
                              </div>
                              <div className="flex items-start justify-start mb-[40px] mt-[20px] w-[100%]">
                                <div className="flex flex-col gap-[11px] items-center justify-start mb-[8px] md:w-[100%] w-[95%]">
                                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly w-[100%]">
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[165px] pl-[14px] pr-[15.44px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Climate Tech 100 2022
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[150px] pl-[15px] pr-[14.13px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      COVID-19 Response
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[142px] pl-[15px] pr-[14.27px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Human Health 100
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[74px] pl-[15px] pr-[14.56px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Growth
                                    </Button>
                                  </div>
                                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly md:w-[100%] w-[97%]">
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[108px] pl-[15px] pr-[14.63px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Climate Tech
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[91px] pl-[14px] pr-[15.09px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Hard Tech
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[117px] pl-[14px] pr-[15.56px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Human Health
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[107px] pl-[14px] pr-[15.52px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Industrial IoT
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[82px] pl-[15px] pr-[14.78px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Robotics
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-blue_204 border-solid border-t-[1px] flex md:flex-1 items-start justify-start py-[23px] self-stretch md:w-[100%] w-[auto]">
                          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                            <Img
                              src="images/img_opentronshero350x290jpg.png"
                              className="md:flex-1 h-[290px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                              alt="opentronsheroThirtyFive"
                            />
                            <div className="flex md:flex-1 flex-col items-start justify-start py-[5px] md:w-[100%] w-[auto]">
                              <Text
                                className="bg-clip-text bg-gradient36  font-bold text-left text-transparent w-[auto]"
                                variant="body37"
                              >
                                HAX 05
                              </Text>
                              <Text
                                className="font-bold mt-[8px] text-bluegray_802 text-left tracking-[-1.00px] w-[auto]"
                                variant="body12"
                              >
                                OpenTrons
                              </Text>
                              <Text
                                className="font-medium mt-[8px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                                variant="body42"
                              >
                                Liquid-handling robot for laboratory automation.
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-[13px] pr-[2px] py-[2px] w-[100%]">
                                <Img
                                  src="images/img_location_black_900.svg"
                                  className="h-[14px] w-[auto]"
                                  alt="location"
                                />
                                <Text
                                  className="font-bold ml-[5px] text-gray_503 text-left tracking-[0.26px] w-[auto]"
                                  variant="body44"
                                ></Text>
                              </div>
                              <div className="flex items-start justify-start mb-[39px] mt-[20px] w-[100%]">
                                <div className="flex flex-col gap-[11px] items-center justify-start mb-[8px] md:w-[100%] w-[83%]">
                                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly md:w-[100%] w-[99%]">
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[150px] pl-[15px] pr-[14.13px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      COVID-19 Response
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[142px] pl-[15px] pr-[14.27px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Human Health 100
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[74px] pl-[15px] pr-[14.56px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Growth
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[91px] pl-[14px] pr-[15.09px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Hard Tech
                                    </Button>
                                  </div>
                                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly w-[100%]">
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[117px] pl-[14px] pr-[15.56px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Human Health
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[109px] pl-[14px] pr-[15.31px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Industrial Bio
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[156px] pl-[15px] pr-[14.3px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Industrial Equipment
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[82px] pl-[15px] pr-[14.78px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Robotics
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-blue_204 border-solid border-t-[1px] flex md:flex-1 items-start justify-start py-[23px] self-stretch md:w-[100%] w-[auto]">
                          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between pr-[9px] w-[100%]">
                            <Img
                              src="images/img_upsidefoodsim.png"
                              className="md:flex-1 h-[290px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                              alt="upsidefoodsim"
                            />
                            <div className="flex md:flex-1 flex-col items-start justify-start py-[4px] md:w-[100%] w-[auto]">
                              <Text
                                className="bg-clip-text bg-gradient36  font-bold text-left text-transparent w-[auto]"
                                variant="body37"
                              >
                                IndieBio 02
                              </Text>
                              <Text
                                className="font-bold mt-[10px] text-bluegray_802 text-left tracking-[-1.00px] w-[auto]"
                                variant="body12"
                              >
                                Upside Foods
                              </Text>
                              <Text
                                className="font-medium mt-[8px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                                variant="body42"
                              >
                                Making your favorite food a force for good.
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-[13px] pr-[2px] py-[2px] w-[100%]">
                                <Img
                                  src="images/img_location_black_900.svg"
                                  className="h-[14px] w-[auto]"
                                  alt="location"
                                />
                                <Text
                                  className="font-bold ml-[5px] text-gray_503 text-left tracking-[0.26px] w-[auto]"
                                  variant="body44"
                                ></Text>
                              </div>
                              <div className="flex sm:flex-col flex-row gap-[5px] items-start justify-start mb-[82px] mt-[20px] pb-[10px] pr-[5px] pt-[1.5px] self-stretch sm:w-[100%] w-[auto]">
                                <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[165px] pl-[14px] pr-[15.44px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                  Climate Tech 100 2022
                                </Button>
                                <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[74px] pl-[15px] pr-[14.56px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                  Growth
                                </Button>
                                <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[93px] pl-[14px] pr-[15.34px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                  Alt Protein
                                </Button>
                                <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[108px] pl-[15px] pr-[14.63px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                  Climate Tech
                                </Button>
                                <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[103px] pl-[14px] pr-[15.09px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                  Future Food
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-blue_204 border-solid border-t-[1px] flex md:flex-1 items-start justify-start py-[23px] self-stretch md:w-[100%] w-[auto]">
                          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                            <Img
                              src="images/img_novoloophero350x290jpg.png"
                              className="md:flex-1 h-[290px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                              alt="novoloophero350"
                            />
                            <div className="flex md:flex-1 flex-col items-start justify-start py-[4px] md:w-[100%] w-[auto]">
                              <Text
                                className="bg-clip-text bg-gradient36  font-bold text-left text-transparent w-[auto]"
                                variant="body37"
                              >
                                IndieBio RebelBio 02
                              </Text>
                              <Text
                                className="font-bold mt-[9px] text-bluegray_802 text-left tracking-[-1.00px] w-[auto]"
                                variant="body12"
                              >
                                Novoloop (fka BioCellection)
                              </Text>
                              <Text
                                className="font-medium mt-[9px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                                variant="body42"
                              >
                                Sustainable materials for a changing planet
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-[13px] pr-[2px] py-[2px] w-[100%]">
                                <Img
                                  src="images/img_location_black_900.svg"
                                  className="h-[14px] w-[auto]"
                                  alt="location"
                                />
                                <Text
                                  className="font-bold ml-[5px] text-gray_503 text-left tracking-[0.26px] w-[auto]"
                                  variant="body44"
                                ></Text>
                              </div>
                              <div className="flex items-start justify-start mb-[41px] mt-[20px] w-[100%]">
                                <div className="flex flex-col gap-[11px] items-start justify-start mb-[8px] md:w-[100%] w-[89%]">
                                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly w-[100%]">
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[165px] pl-[14px] pr-[15.44px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Climate Tech 100 2022
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[134px] pl-[14px] pr-[14.91px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Female Founders
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[91px] pl-[14px] pr-[15.09px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Series A(+)
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[108px] pl-[15px] pr-[14.63px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Climate Tech
                                    </Button>
                                  </div>
                                  <div className="flex flex-row gap-[5px] items-center justify-start md:w-[100%] w-[56%]">
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[85px] pl-[15px] pr-[13.81px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Materials
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[193px] pl-[14px] pr-[15.27px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Sustainable Manufacturing
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-blue_204 border-solid border-t-[1px] flex md:flex-1 items-start justify-start py-[23px] self-stretch md:w-[100%] w-[auto]">
                          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                            <Img
                              src="images/img_perfectdayhero350x290jpg.png"
                              className="md:flex-1 h-[290px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                              alt="perfectdayheroThree"
                            />
                            <div className="flex md:flex-1 flex-col items-start justify-start py-[4px] md:w-[100%] w-[auto]">
                              <Text
                                className="bg-clip-text bg-gradient36  font-bold text-left text-transparent w-[auto]"
                                variant="body37"
                              >
                                IndieBio RebelBio 01
                              </Text>
                              <Text
                                className="font-bold mt-[10px] text-bluegray_802 text-left tracking-[-1.00px] w-[auto]"
                                variant="body12"
                              >
                                Perfect Day
                              </Text>
                              <Text
                                className="font-medium mt-[8px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                                variant="body42"
                              >
                                Sustainable, animal-free dairy and protein.
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-[13px] pr-[2px] py-[2px] w-[100%]">
                                <Img
                                  src="images/img_location_black_900.svg"
                                  className="h-[14px] w-[auto]"
                                  alt="location"
                                />
                                <Text
                                  className="font-bold ml-[5px] text-gray_503 text-left tracking-[0.26px] w-[auto]"
                                  variant="body44"
                                ></Text>
                              </div>
                              <div className="flex items-center justify-start mb-[41px] mt-[20px] w-[100%]">
                                <div className="flex flex-col gap-[11px] items-start justify-start mb-[8px] md:w-[100%] w-[98%]">
                                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly w-[100%]">
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[165px] pl-[14px] pr-[15.44px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Climate Tech 100 2022
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[74px] pl-[15px] pr-[14.56px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Growth
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[93px] pl-[14px] pr-[15.34px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Alt Protein
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[108px] pl-[15px] pr-[14.63px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Climate Tech
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[103px] pl-[14px] pr-[15.09px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Future Food
                                    </Button>
                                  </div>
                                  <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[193px] pl-[14px] pr-[15.27px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                    Sustainable Manufacturing
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-blue_204 border-solid border-t-[1px] flex md:flex-1 items-start justify-start py-[23px] self-stretch md:w-[100%] w-[auto]">
                          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[45px] w-[100%]">
                            <Img
                              src="images/img_deepspinhero350x290jpg.png"
                              className="md:flex-1 h-[290px] sm:h-[auto] object-cover md:w-[100%] w-[39%]"
                              alt="deepspinhero350"
                            />
                            <div className="flex md:flex-1 flex-col items-start justify-start py-[4px] md:w-[100%] w-[59%]">
                              <Text
                                className="bg-clip-text bg-gradient36  font-bold text-left text-transparent w-[auto]"
                                variant="body37"
                              >
                                HAX 2020
                              </Text>
                              <Text
                                className="font-bold mt-[9px] text-bluegray_802 text-left tracking-[-1.00px] w-[auto]"
                                variant="body12"
                              >
                                Deepspin
                              </Text>
                              <Text
                                className="font-medium mt-[8px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                                variant="body42"
                              >
                                The first truly low-cost MRI machine
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-[13px] w-[100%]">
                                <Img
                                  src="images/img_location_black_900.svg"
                                  className="h-[14px] w-[auto]"
                                  alt="location"
                                />
                                <Text
                                  className="font-bold ml-[5px] mt-[3px] text-gray_503 text-left tracking-[0.26px] w-[auto]"
                                  variant="body44"
                                ></Text>
                              </div>
                              <div className="flex sm:flex-col flex-row gap-[5px] items-start justify-start mb-[82px] mt-[20px] pb-[10px] pr-[5px] pt-[1.5px] self-stretch sm:w-[100%] w-[auto]">
                                <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[142px] pl-[15px] pr-[14.27px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                  Human Health 100
                                </Button>
                                <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[61px] pl-[14px] pr-[15.14px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                  Seed
                                </Button>
                                <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[91px] pl-[14px] pr-[15.09px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                  Hard Tech
                                </Button>
                                <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[97px] pl-[14px] pr-[15.23px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                  Healthcare
                                </Button>
                                <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[117px] pl-[14px] pr-[15.56px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                  Human Health
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-blue_204 border-solid border-t-[1px] flex md:flex-1 items-start justify-start py-[23px] self-stretch md:w-[100%] w-[auto]">
                          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                            <Img
                              src="images/img_geltorimage350x290jpg.png"
                              className="md:flex-1 h-[290px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                              alt="geltorimage350x"
                            />
                            <div className="flex md:flex-1 flex-col items-start justify-start py-[4px] md:w-[100%] w-[auto]">
                              <Text
                                className="bg-clip-text bg-gradient36  font-bold text-left text-transparent w-[auto]"
                                variant="body37"
                              >
                                IndieBio 02
                              </Text>
                              <Text
                                className="font-bold mt-[5px] text-bluegray_802 text-left tracking-[-1.00px] w-[auto]"
                                variant="body12"
                              >
                                Geltor
                              </Text>
                              <Text
                                className="font-medium mt-[13px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                                variant="body42"
                              >
                                Safe, sustainable, animal-free gelatin
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-[13px] pr-[2px] py-[2px] w-[100%]">
                                <Img
                                  src="images/img_location_black_900.svg"
                                  className="h-[14px] w-[auto]"
                                  alt="location"
                                />
                                <Text
                                  className="font-bold ml-[5px] text-gray_503 text-left tracking-[0.26px] w-[auto]"
                                  variant="body44"
                                ></Text>
                              </div>
                              <div className="flex items-start justify-start mb-[41px] mt-[20px] w-[100%]">
                                <div className="flex flex-col gap-[11px] items-start justify-start mb-[8px] md:w-[100%] w-[79%]">
                                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly w-[100%]">
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[165px] pl-[14px] pr-[15.44px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Climate Tech 100 2022
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[74px] pl-[15px] pr-[14.56px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Growth
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[93px] pl-[14px] pr-[15.34px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Alt Protein
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[108px] pl-[15px] pr-[14.63px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Climate Tech
                                    </Button>
                                  </div>
                                  <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[193px] pl-[14px] pr-[15.27px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                    Sustainable Manufacturing
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-blue_204 border-solid border-t-[1px] flex md:flex-1 items-start justify-start py-[23px] self-stretch md:w-[100%] w-[auto]">
                          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                            <Img
                              src="images/img_prellishero350x290jpg.png"
                              className="md:flex-1 h-[290px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                              alt="prellishero350x"
                            />
                            <div className="flex md:flex-1 flex-col items-start justify-start py-[5px] md:w-[100%] w-[auto]">
                              <Text
                                className="bg-clip-text bg-gradient36  font-bold text-left text-transparent w-[auto]"
                                variant="body37"
                              >
                                IndieBio 05
                              </Text>
                              <Text
                                className="font-bold mt-[8px] text-bluegray_802 text-left tracking-[-1.00px] w-[auto]"
                                variant="body12"
                              >
                                Prellis Biologics
                              </Text>
                              <Text
                                className="font-medium mt-[8px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                                variant="body42"
                              >
                                Human tissue printing and pharmaceutical
                                development
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-[13px] pr-[2px] py-[2px] w-[100%]">
                                <Img
                                  src="images/img_location_black_900.svg"
                                  className="h-[14px] w-[auto]"
                                  alt="location"
                                />
                                <Text
                                  className="font-bold ml-[5px] text-gray_503 text-left tracking-[0.26px] w-[auto]"
                                  variant="body44"
                                ></Text>
                              </div>
                              <div className="flex items-start justify-start mb-[39px] mt-[20px] w-[100%]">
                                <div className="flex flex-col gap-[11px] items-start justify-start mb-[8px] md:w-[100%] w-[80%]">
                                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly w-[100%]">
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[134px] pl-[14px] pr-[14.91px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Female Founders
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[142px] pl-[15px] pr-[14.27px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Human Health 100
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[74px] pl-[15px] pr-[14.56px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Growth
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[96px] pl-[15px] pr-[14.39px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Biopharma
                                    </Button>
                                  </div>
                                  <div className="flex flex-row items-center justify-start md:w-[100%] w-[70%]">
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[117px] pl-[14px] pr-[15.56px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Human Health
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[83px] ml-[5px] pl-[14px] pr-[15.75px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Medtech
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[109px] ml-[5px] pl-[15px] pr-[13.86px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Therapeutics
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white_A700 border-blue_204 border-solid border-t-[1px] flex md:flex-1 items-start justify-start py-[23px] self-stretch md:w-[100%] w-[auto]">
                          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                            <Img
                              src="images/img_phablehero1350x290jpg.png"
                              className="md:flex-1 h-[290px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                              alt="phablehero1350x"
                            />
                            <div className="flex md:flex-1 flex-col items-start justify-start py-[6px] md:w-[100%] w-[auto]">
                              <Text
                                className="bg-clip-text bg-gradient36  font-bold text-left text-transparent w-[auto]"
                                variant="body37"
                              >
                                Orbit Startups – MOX 07
                              </Text>
                              <Text
                                className="font-bold mt-[4px] text-bluegray_802 text-left tracking-[-1.00px] w-[auto]"
                                variant="body12"
                              >
                                Phable
                              </Text>
                              <Text
                                className="font-medium mt-[13px] text-black_900 text-left tracking-[0.30px] w-[auto]"
                                variant="body42"
                              >
                                Integrated healthcare
                              </Text>
                              <div className="flex flex-row items-start justify-start mt-[13px] pr-[2px] py-[2px] w-[100%]">
                                <Img
                                  src="images/img_location_black_900.svg"
                                  className="h-[14px] w-[auto]"
                                  alt="location"
                                />
                                <Text
                                  className="font-bold ml-[5px] text-gray_503 text-left tracking-[0.26px] w-[auto]"
                                  variant="body44"
                                ></Text>
                              </div>
                              <div className="flex items-start justify-start mb-[39px] mt-[20px] w-[100%]">
                                <div className="flex flex-col gap-[11px] items-start justify-start mb-[8px] md:w-[100%] w-[96%]">
                                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly w-[100%]">
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[139px] pl-[15px] pr-[13.91px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Emerging Markets
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[142px] pl-[15px] pr-[14.27px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Human Health 100
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[91px] pl-[14px] pr-[15.09px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Series A(+)
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[164px] pl-[15px] pr-[14.72px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      AI & Machine Learning
                                    </Button>
                                  </div>
                                  <div className="flex flex-row items-center justify-start md:w-[100%] w-[63%]">
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[112px] pl-[15px] pr-[14.41px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Digital Health
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[117px] ml-[5px] pl-[14px] pr-[15.56px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Human Health
                                    </Button>
                                    <Button className="bg-blue_800_2b cursor-pointer font-bold leading-[normal] min-w-[107px] ml-[5px] pl-[14px] pr-[15.22px] py-[7.5px] rounded-[15px] text-[13px] text-blue_803 text-center tracking-[-0.20px] w-[auto]">
                                      Remote care
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                    <Button className="bg-black_900 cursor-pointer font-bold leading-[normal] min-w-[152px] pb-[13.98px] pl-[23.94px] pr-[23.55px] pt-[13.97px] sm:px-[20px] rounded-[4px] text-[18px] text-center text-white_A700 uppercase w-[auto]">
                      Load more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo_51 flex items-center justify-start p-[79px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex items-center justify-start max-w-[1300px] mx-[auto] pr-[2px] py-[2px] w-[100%]">
                <Text
                  className="font-bold leading-[24.00px] text-black_900 text-left tracking-[0.30px]"
                  variant="body39"
                ></Text>
              </div>
            </div>
          </div>
          <div className="bg-gradient37  flex items-center justify-start p-[59px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="flex flex-col gap-[100px] md:gap-[40px] items-center justify-start max-w-[1340px] mx-[auto] px-[20px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[14px] items-start justify-start md:w-[100%] w-[19%]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body21"
                  >
                    Learn
                  </Text>
                  <div className="flex flex-col items-start justify-start pr-[6px] py-[6px] w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      About SOSV
                    </Text>
                    <Text
                      className="font-semibold mt-[16px] text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Our Programs
                    </Text>
                    <Text
                      className="font-semibold mt-[13px] text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Our Portfolio
                    </Text>
                    <Text
                      className="font-semibold mt-[15px] text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Our Team
                    </Text>
                    <Text
                      className="font-semibold mt-[16px] text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Legal FAQ
                    </Text>
                    <Text
                      className="font-semibold mt-[13px] text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Press & Media
                    </Text>
                    <Text
                      className="font-semibold mt-[15px] text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Brand Guidelines
                    </Text>
                  </div>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[110px] md:gap-[40px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] w-[46%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[11px] items-start justify-start sm:ml-[0] py-[2px] w-[100%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body21"
                    >
                      Apply
                    </Text>
                    <div className="flex flex-col gap-[15px] items-start justify-end mb-[167px] pr-[6px] py-[6px] w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body41"
                      >
                        Application FAQ
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body41"
                      >
                        Apply
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[14px] items-start justify-start sm:ml-[0] pb-[170px] w-[100%]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body21"
                    >
                      Invest
                    </Text>
                    <div className="flex flex-col gap-[16px] items-start justify-end pr-[6px] py-[6px] w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body41"
                      >
                        Invest in our Funds
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body41"
                      >
                        Invest in our Companies
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start py-[2px] md:w-[100%] w-[19%]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body21"
                  >
                    Participate
                  </Text>
                  <div className="flex flex-col items-start justify-end mb-[65px] pr-[6px] py-[6px] w-[100%]">
                    <Text
                      className="font-semibold text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Jobs at our Companies
                    </Text>
                    <Text
                      className="font-semibold mt-[13px] text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Our Events
                    </Text>
                    <Text
                      className="font-semibold mt-[14px] text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Join Talent network
                    </Text>
                    <Text
                      className="font-semibold mt-[16px] text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Get Email Updates
                    </Text>
                    <Text
                      className="font-semibold mt-[15px] text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Momentum Program
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-start self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-blue_100_8c text-left w-[auto]"
                    variant="body43"
                  >
                    Copyright All Rights Reserved © 2023 SOSV Investments LLC.
                    All SOSV registered trademarks are owned by SOSV Investments
                    LLC
                  </Text>
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start pr-[7px] pt-[7px] w-[100%]">
                    <a
                      className="font-hairline text-[14px] text-cyan_A201 text-left underline w-[auto]"
                      href="javascript:"
                    >
                      Privacy Statement
                    </a>
                    <a
                      className="font-hairline sm:ml-[0] ml-[11px] text-[14px] text-cyan_A201 text-left underline w-[auto]"
                      href="javascript:"
                    >
                      Terms of Use
                    </a>
                    <a
                      className="font-hairline sm:ml-[0] ml-[9px] text-[14px] text-cyan_A201 text-left underline w-[auto]"
                      href="javascript:"
                    >
                      Cookie Policy
                    </a>
                    <a
                      className="font-hairline sm:ml-[0] ml-[10px] text-[14px] text-cyan_A201 text-left underline w-[auto]"
                      href="javascript:"
                    >
                      Disclaimer
                    </a>
                    <a
                      className="font-hairline sm:ml-[0] ml-[10px] text-[14px] text-cyan_A201 text-left underline w-[auto]"
                      href="javascript:"
                    >
                      Communication Policy
                    </a>
                    <a
                      className="font-hairline sm:ml-[0] ml-[11px] text-[14px] text-cyan_A201 text-left underline w-[auto]"
                      href="javascript:"
                    >
                      Code of Conduct
                    </a>
                    <a
                      className="font-hairline sm:ml-[0] ml-[10px] text-[14px] text-cyan_A201 text-left underline w-[auto]"
                      href="javascript:"
                    >
                      Press & Media
                    </a>
                  </div>
                </div>
                <div className="flex flex-row gap-[10px] items-start justify-start pb-[6px] pr-[10px] self-stretch w-[auto]">
                  <List
                    className="sm:flex-col flex-row gap-[10px] grid grid-cols-4 w-[66%]"
                    orientation="horizontal"
                  >
                    <div className="border-[1px] border-cyan_A200_4c border-solid flex h-[36px] items-center justify-start p-[5px] w-[100%]">
                      <div className="flex items-center justify-start md:w-[100%] w-[93%]">
                        <Img
                          src="images/img_facebook_black_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="facebook"
                        />
                      </div>
                    </div>
                    <div className="border-[1px] border-cyan_A200_4c border-solid flex h-[36px] items-center justify-start p-[5px] w-[100%]">
                      <div className="flex items-center justify-start md:w-[100%] w-[93%]">
                        <Img
                          src="images/img_twitter_black_900.svg"
                          className="h-[24px] w-[24px]"
                          alt="twitter"
                        />
                      </div>
                    </div>
                    <div className="border-[1px] border-cyan_A200_4c border-solid flex h-[36px] items-center justify-start p-[5px] w-[100%]">
                      <div className="flex items-center justify-start md:w-[100%] w-[93%]">
                        <Img
                          src="images/img_linkedin.svg"
                          className="h-[24px] w-[24px]"
                          alt="linkedin"
                        />
                      </div>
                    </div>
                    <div className="border-[1px] border-cyan_A200_4c border-solid flex h-[36px] items-center justify-start p-[5px] w-[100%]">
                      <div className="flex items-center justify-start md:w-[100%] w-[93%]">
                        <Img
                          src="images/img_youtubeiconsvg.svg"
                          className="h-[24px] w-[24px]"
                          alt="youtubeiconsvg"
                        />
                      </div>
                    </div>
                  </List>
                  <Button className="border-[1px] border-cyan_A200_4c border-solid flex h-[36px] items-center justify-center p-[6px] w-[36px]">
                    <Img
                      src="images/img_cut_black_900.svg"
                      className=""
                      alt="cut"
                    />
                  </Button>
                  <Button className="border-[1px] border-cyan_A200_4c border-solid flex h-[36px] items-center justify-center p-[6px] w-[36px]">
                    <Img
                      src="images/img_contrast_black_900.svg"
                      className="h-[24px]"
                      alt="contrast"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolPage;
