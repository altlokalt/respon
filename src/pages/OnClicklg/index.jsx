import React from "react";

import {
  Text,
  Line,
  Button,
  List,
  Img,
  SeekBar,
  SelectBox,
  Input,
} from "components";

const OnClicklgPage = () => {
  return (
    <>
      <div className="font-ibmplexsans h-[19978px] mx-[auto] relative w-[100%]">
        <div className="absolute bg-gray_305 h-[1080px] inset-x-[0] mx-[auto] top-[0] w-[100%]"></div>
        <div className="absolute bg-gray_305 h-[200px] inset-x-[0] mx-[auto] top-[5%] w-[100%]"></div>
        <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[20px] h-[100%] inset-[0] items-start justify-center m-[auto] pt-[48px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-1 flex-col items-center justify-start mb-[18898px] md:px-[20px] md:w-[100%] w-[15%]">
            <div className="flex flex-col gap-[8px] justify-start py-[18px] w-[100%]">
              <Text
                className="font-medium md:ml-[0] ml-[24px] text-bluegray_406 text-left uppercase w-[auto]"
                variant="body51"
              >
                Feeds
              </Text>
              <div className="flex flex-col items-start justify-start mb-[403px] w-[100%]">
                <div className="flex items-center justify-start pl-[24px] pr-[180px] md:pr-[40px] sm:px-[20px] py-[8px] self-stretch w-[auto]">
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_922 text-left w-[auto]"
                      variant="body43"
                    >
                      Home
                    </Text>
                  </div>
                </div>
                <div className="flex items-center justify-start sm:px-[20px] px-[24px] py-[8px] self-stretch w-[auto]">
                  <div className="flex items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_922 text-left w-[auto]"
                      variant="body43"
                    >
                      Popular
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium md:ml-[0] ml-[24px] mt-[18px] text-bluegray_406 text-left uppercase w-[auto]"
                  variant="body51"
                >
                  Topics
                </Text>
                <div className="flex font-notosans items-end justify-start md:ml-[0] ml-[4px] mt-[16px] md:w-[100%] w-[98%]">
                  <div className="flex items-start justify-start mr-[39px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-gray_922 text-left w-[auto]"
                      variant="body43"
                    >
                      Gaming
                    </Text>
                  </div>
                </div>
                <div className="flex font-notosans items-end justify-start md:ml-[0] ml-[4px] mt-[16px] md:w-[100%] w-[98%]">
                  <div className="flex items-start justify-start mr-[39px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-gray_922 text-left w-[auto]"
                      variant="body43"
                    >
                      Sports
                    </Text>
                  </div>
                </div>
                <div className="flex font-notosans items-end justify-start md:ml-[0] ml-[4px] mt-[16px] md:w-[100%] w-[98%]">
                  <div className="flex items-center justify-start mr-[39px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-gray_922 text-left w-[auto]"
                      variant="body43"
                    >
                      Business, Economics, and Finance
                    </Text>
                  </div>
                </div>
                <div className="flex font-notosans items-end justify-start md:ml-[0] ml-[4px] mt-[16px] md:w-[100%] w-[98%]">
                  <div className="flex items-start justify-start mr-[39px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-gray_922 text-left w-[auto]"
                      variant="body43"
                    >
                      Crypto
                    </Text>
                  </div>
                </div>
                <div className="flex font-notosans items-end justify-start md:ml-[0] ml-[4px] mt-[16px] md:w-[100%] w-[98%]">
                  <div className="flex items-start justify-start mr-[39px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-gray_922 text-left w-[auto]"
                      variant="body43"
                    >
                      Television
                    </Text>
                  </div>
                </div>
                <div className="flex font-notosans items-end justify-start md:ml-[0] ml-[4px] mt-[16px] md:w-[100%] w-[98%]">
                  <div className="flex items-start justify-start mr-[39px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-gray_922 text-left w-[auto]"
                      variant="body43"
                    >
                      Celebrity
                    </Text>
                  </div>
                </div>
                <div className="flex font-notosans items-end justify-start md:ml-[0] ml-[4px] mt-[16px] md:w-[100%] w-[98%]">
                  <div className="flex items-start justify-start mr-[39px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-gray_922 text-left w-[auto]"
                      variant="body43"
                    >
                      More Topics
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-notosans items-start justify-start p-[20px] w-[100%]">
              <Line className="bg-black_900_33 h-[1px] md:ml-[0] ml-[4px] w-[97%]" />
              <Text
                className="font-normal leading-[18.00px] md:ml-[0] ml-[4px] mt-[17px] not-italic text-gray_922 text-left sm:w-[100%] w-[78%]"
                variant="body43"
              >
                Create an account to follow your favorite communities and start
                taking part in conversations.
              </Text>
              <Button className="bg-light_blue_700 cursor-pointer font-bold min-w-[222px] md:ml-[0] ml-[4px] my-[20px] sm:px-[20px] md:px-[40px] px-[73px] py-[11.5px] rounded-[20px] text-[14px] text-center text-white_A700 w-[auto]">
                Join Reddit
              </Button>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start pt-[16px] md:px-[20px] self-stretch md:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[10px] items-start justify-start pb-[2px] px-[16px] self-stretch md:w-[100%] w-[auto]">
              <Text
                className="font-medium text-gray_923 text-left w-[auto]"
                variant="body43"
              >
                Trending today
              </Text>
              <List
                className="sm:flex-col flex-row gap-[12px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start self-stretch md:w-[100%] w-[auto]"
                orientation="horizontal"
              >
                <div className="bg-gradient23  flex items-center justify-start rounded-[8px] w-[100%]">
                  <div className="flex flex-col items-start justify-end p-[12px] rounded-[8px] w-[100%]">
                    <Text
                      className="font-medium mt-[66px] text-left text-white_A700 w-[auto]"
                      variant="body37"
                    >
                      Boris Johnson
                    </Text>
                    <div className="flex font-notosans items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal leading-[20.00px] not-italic text-left text-white_A700 sm:w-[100%] w-[96%]"
                        variant="body43"
                      >
                        Partygate: Boris Johnson&#39;s defence dossier is
                        published - BBC News
                      </Text>
                    </div>
                    <div className="flex flex-row font-ibmplexsans items-start justify-start mt-[8px] sm:pr-[20px] md:pr-[40px] pr-[50px] w-[100%]">
                      <Img
                        src="images/img_communityiconw.png"
                        className="h-[16px] md:h-[auto] rounded-[50%] w-[16px]"
                        alt="communityiconw"
                      />
                      <Text
                        className="font-normal ml-[4px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body47"
                      >
                        r/unitedkingdom and more
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient23  flex items-center justify-start rounded-[8px] w-[100%]">
                  <div className="flex flex-col items-start justify-end p-[12px] rounded-[8px] w-[100%]">
                    <Text
                      className="font-medium mt-[66px] text-left text-white_A700 w-[auto]"
                      variant="body37"
                    >
                      Ted Lasso
                    </Text>
                    <div className="flex font-notosans items-start justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal leading-[20.00px] not-italic text-left text-white_A700 sm:w-[100%] w-[96%]"
                        variant="body43"
                      >
                        ‘Ted Lasso’ Season 3 Premiere Scores 870K U.S.
                        Households, Up 59% From Season 2 Premiere
                      </Text>
                    </div>
                    <div className="flex flex-row font-ibmplexsans items-start justify-start mt-[8px] sm:pr-[20px] md:pr-[40px] pr-[79px] w-[100%]">
                      <Img
                        src="images/img_communityicon8.png"
                        className="h-[16px] md:h-[auto] rounded-[50%] w-[16px]"
                        alt="communityiconEight"
                      />
                      <Text
                        className="font-normal ml-[4px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body47"
                      >
                        r/television and more
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient23  flex items-center justify-start rounded-[8px] w-[100%]">
                  <div className="flex flex-col items-center justify-end p-[12px] rounded-[8px] w-[100%]">
                    <Text
                      className="font-medium mt-[68px] text-left text-white_A700 w-[auto]"
                      variant="body37"
                    >
                      Lollapalooza 2023 Lineup
                    </Text>
                    <div className="flex font-notosans items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal leading-[20.00px] not-italic text-left text-white_A700 sm:w-[100%] w-[99%]"
                        variant="body43"
                      >
                        TXT (TOMORROW X TOGETHER) to headline Lollapalooza 2023;
                        NewJeans, DPR IAN, and DPR LIVE to perform
                      </Text>
                    </div>
                    <div className="flex flex-row font-ibmplexsans items-start justify-start mt-[8px] pr-[104px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                      <Img
                        src="images/img_communityicons.png"
                        className="h-[16px] md:h-[auto] rounded-[50%] w-[16px]"
                        alt="communityicons"
                      />
                      <Text
                        className="font-normal ml-[4px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body47"
                      >
                        r/kpop and more
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient23  flex items-center justify-start rounded-[8px] w-[100%]">
                  <div className="flex flex-col items-start justify-end p-[12px] rounded-[8px] w-[100%]">
                    <Text
                      className="font-medium mt-[68px] text-left text-white_A700 w-[auto]"
                      variant="body37"
                    >
                      Coffee Mugs
                    </Text>
                    <div className="flex font-notosans items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal leading-[20.00px] not-italic text-left text-white_A700 sm:w-[100%] w-[98%]"
                        variant="body43"
                      >
                        Found this sweetheart at a local shop
                      </Text>
                    </div>
                    <div className="flex flex-row font-ibmplexsans items-start justify-start mt-[8px] sm:pr-[20px] md:pr-[40px] pr-[90px] w-[100%]">
                      <Img
                        src="images/img_communityiconc.png"
                        className="h-[16px] md:h-[auto] rounded-[50%] w-[16px]"
                        alt="communityiconc"
                      />
                      <Text
                        className="font-normal ml-[4px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body47"
                      >
                        r/muglife and more
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-col flex-row gap-[24px] items-end justify-start sm:px-[20px] px-[337px] md:px-[40px] py-[20px] self-stretch md:w-[100%] w-[auto]">
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[66%]">
                <Text
                  className="font-medium text-gray_923 text-left w-[auto]"
                  variant="body43"
                >
                  Popular posts
                </Text>
                <div className="bg-white_A700 border-[1px] border-bluegray_102 border-solid flex font-notosans items-start justify-start mt-[8px] p-[13px] rounded-[4px] w-[100%]">
                  <div className="flex flex-row sm:gap-[20px] items-center justify-start pr-[7px] md:w-[100%] w-[63%]">
                    <div className="bg-gray_106 flex items-center justify-start px-[9px] py-[7px] rounded-[17px] self-stretch w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-bold text-left text-light_blue_700 w-[auto]"
                          variant="body43"
                        >
                          Hot
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_106 flex items-start justify-start ml-[8px] px-[8px] py-[6px] rounded-[16px] self-stretch w-[auto]">
                      <div className="flex items-center justify-start pl-[8px] pr-[4px] self-stretch w-[auto]">
                        <div className="flex items-center justify-start w-[auto]">
                          <Text
                            className="font-bold text-left text-light_blue_700 w-[auto]"
                            variant="body43"
                          >
                            Everywhere
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start ml-[8px] px-[9px] py-[7px] self-stretch w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                          variant="body43"
                        >
                          New
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-start ml-[8px] px-[9px] py-[7px] self-stretch w-[auto]">
                      <div className="flex items-center justify-start w-[auto]">
                        <Text
                          className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                          variant="body43"
                        >
                          Top
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm:bottom-[444px] flex flex-col font-ibmplexsans items-center justify-start mt-[16px] pb-[14331px] sm:pb-[] sm:pt-[22px] sm:relative w-[100%]">
                  <div className="bg-white_A700_cc border-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row md:gap-[20px] sm:hidden items-start justify-end rounded-[4px] w-[100%]">
                    <div className="flex items-center justify-start md:mt-[0] mt-[8px] self-stretch w-[auto]">
                      <Text
                        className="font-bold text-gray_923 text-left w-[auto]"
                        variant="body47"
                      >
                        47.8k
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[6px] items-center justify-end md:ml-[0] ml-[3px] py-[2px] md:w-[100%] w-[94%]">
                      <div className="flex flex-col gap-[8px] items-start justify-start mt-[6px] md:w-[100%] w-[98%]">
                        <div className="flex sm:flex-col flex-row font-notosans sm:gap-[20px] items-start justify-evenly w-[100%]">
                          <Img
                            src="images/img_communityicon5.png"
                            className="h-[20px] md:h-[auto] rounded-[50%] w-[20px]"
                            alt="communityiconFive"
                          />
                          <div className="flex sm:flex-1 font-ibmplexsans items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row items-start justify-start w-[70%]">
                              <Text
                                className="font-bold text-gray_922 text-left w-[auto]"
                                variant="body47"
                              >
                                r/interestingasfuck
                              </Text>
                              <Text
                                className="ml-[3px] mt-[3px] not-italic text-gray_605 text-left w-[auto]"
                                variant="body4"
                              ></Text>
                              <Text
                                className="font-normal ml-[5px] not-italic text-gray_606 text-left w-[auto]"
                                variant="body47"
                              >
                                u/MarketBuzz2021
                              </Text>
                              <Text
                                className="font-normal ml-[2px] mt-[2px] not-italic text-gray_606 text-left w-[auto]"
                                variant="body47"
                              >
                                11 hours ago
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="bg-light_blue_700 font-bold justify-center pl-[16px] pr-[15.95px] py-[4px] rounded-[12px] self-stretch text-center text-white_A700 w-[auto]"
                            variant="body47"
                          >
                            Join
                          </Text>
                        </div>
                        <Text
                          className="font-ibmplexsans font-medium text-gray_912 text-left w-[auto]"
                          variant="body37"
                        >
                          George W Bush being informed about the 9/11 attacks
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="bg-gray_107 flex items-center justify-start w-[100%]">
                          <div className="bg-white_A700 flex items-end justify-end pt-[4px] px-[4px] w-[100%]">
                            <Img
                              src="images/img_div_white_a700_179x48.svg"
                              className="h-[179px] mt-[169px] w-[48px]"
                              alt="div_One"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[2px] px-[4px] w-[100%]">
                          <div className="flex items-center justify-start pl-[4px] pr-[3.45px] py-[8px] self-stretch w-[auto]">
                            <Text
                              className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                              variant="body47"
                            >
                              5.4k comments
                            </Text>
                          </div>
                          <div className="flex items-end justify-start ml-[4px] pb-[12px] pt-[8px] px-[8px] self-stretch w-[auto]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                variant="body47"
                              >
                                share
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-center justify-start ml-[4px] p-[8px] self-stretch w-[auto]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                variant="body47"
                              >
                                save
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700_cc border-[1px] border-bluegray_102 border-solid flex md:flex-col flex-row gap-[8px] items-start justify-end mt-[10px] rounded-[4px] w-[100%]">
                    <div className="flex items-center justify-start md:mt-[0] mt-[8px] self-stretch w-[auto]">
                      <Text
                        className="font-bold text-gray_923 text-left w-[auto]"
                        variant="body47"
                      >
                        27
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex md:flex-1 flex-col gap-[8px] items-center justify-end py-[2px] md:w-[100%] w-[94%]">
                      <div className="flex flex-col gap-[7px] items-center justify-start mt-[6px] md:w-[100%] w-[98%]">
                        <div className="flex items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                          <div className="flex flex-row items-start justify-start pr-[3px] w-[35%]">
                            <Img
                              src="images/img_profileiconv83kj8zkurd11jpg.png"
                              className="h-[20px] md:h-[auto] rounded-[50%] w-[20px]"
                              alt="profileiconv83k"
                            />
                            <Text
                              className="font-bold ml-[4px] mt-[2px] text-gray_922 text-left w-[auto]"
                              variant="body47"
                            >
                              u/SDUnionTribune
                            </Text>
                            <Text
                              className="leading-[20.00px] ml-[6px] mt-[2px] not-italic text-gray_605 text-left sm:w-[100%] w-[31%]"
                              variant="body4"
                            ></Text>
                          </div>
                        </div>
                        <Text
                          className="font-medium leading-[22.00px] text-gray_912 text-left w-[100%]"
                          variant="body37"
                        >
                          Do you know what’s happening in your community?
                          Subscribe to The San Diego Union-Tribune for $98 and
                          get a full year of unlimited digital access to
                          award-winning journalism, subscriber- exclusive
                          content and San Diego’s biggest stories.
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="bg-gray_107 flex items-center justify-start w-[100%]">
                          <div className="bg-white_A700 flex items-center justify-start w-[100%]">
                            <div className="h-[312px] relative w-[100%]">
                              <Img
                                src="images/img_ckszebvrencfns5.png"
                                className="h-[312px] m-[auto] object-cover w-[100%]"
                                alt="ckszebvrencfnsFive"
                              />
                              <Img
                                src="images/img_div_white_a700_52x598.svg"
                                className="absolute bottom-[0] h-[52px] inset-x-[0] mx-[auto] w-[auto]"
                                alt="div_Two"
                              />
                              <Img
                                src="images/img_play.svg"
                                className="absolute h-[50px] inset-[0] justify-center m-[auto] w-[50px]"
                                alt="play"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="border-b-[1px] border-bluegray_52 border-solid flex flex-row sm:gap-[40px] items-center justify-between pr-[8px] py-[8px] w-[100%]">
                          <div className="flex font-ibmplexsans items-start justify-start pl-[8px] pr-[7.64px] self-stretch w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-light_blue_700 w-[auto]"
                              variant="body47"
                            >
                              sandiegouniontribune.com
                            </Text>
                          </div>
                          <Button className="bg-bluegray_52 cursor-pointer font-bold font-notosans min-w-[85px] pl-[15px] pr-[16.14px] py-[7.5px] rounded-[16px] text-[14px] text-center text-gray_922 w-[auto]">
                            Sign Up
                          </Button>
                        </div>
                        <div className="flex flex-row gap-[4px] items-start justify-start mt-[2px] pl-[4px] sm:pr-[20px] pr-[339.06px] md:pr-[40px] self-stretch md:w-[100%] w-[auto]">
                          <div className="flex items-center justify-start pl-[4px] pr-[3.61px] py-[8px] self-stretch w-[auto]">
                            <Text
                              className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                              variant="body47"
                            >
                              0 comments
                            </Text>
                          </div>
                          <div className="flex items-end justify-start pb-[12px] pt-[8px] px-[8px] self-stretch w-[auto]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                variant="body47"
                              >
                                share
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-center justify-start p-[8px] self-stretch w-[auto]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                variant="body47"
                              >
                                save
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700_cc border-[1px] border-bluegray_102 border-solid md:gap-[20px] gap-[3px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] mt-[10px] rounded-[4px] w-[100%]">
                    <div className="flex flex-1 items-center justify-start self-stretch w-[100%]">
                      <Text
                        className="font-bold text-gray_923 text-left w-[auto]"
                        variant="body47"
                      >
                        21.5k
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[8px] items-center justify-end py-[2px] w-[100%]">
                      <div className="flex flex-col gap-[7px] items-center justify-start mt-[6px] md:w-[100%] w-[98%]">
                        <div className="flex sm:flex-col flex-row font-notosans sm:gap-[20px] items-start justify-evenly w-[100%]">
                          <Img
                            src="images/img_vzxkqlni1dphle.png"
                            className="h-[20px] md:h-[auto] rounded-[50%] w-[20px]"
                            alt="vzxkqlni1dphle"
                          />
                          <div className="flex sm:flex-1 flex-row font-ibmplexsans items-center justify-start sm:pr-[20px] pr-[232.02px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                            <div className="flex flex-row items-start justify-evenly w-[92%]">
                              <Text
                                className="font-bold text-gray_922 text-left w-[auto]"
                                variant="body47"
                              >
                                r/pics
                              </Text>
                              <Text
                                className="mt-[3px] not-italic text-gray_605 text-left w-[auto]"
                                variant="body4"
                              ></Text>
                              <Text
                                className="font-normal not-italic text-gray_606 text-left w-[auto]"
                                variant="body47"
                              >
                                u/Smoothlarryy
                              </Text>
                              <Text
                                className="font-normal mt-[2px] not-italic text-gray_606 text-left w-[auto]"
                                variant="body47"
                              >
                                3 hours ago
                              </Text>
                            </div>
                            <div className="flex items-end justify-start px-[2px] w-[9%]">
                              <Img
                                src="images/img_gold32png.png"
                                className="h-[16px] md:h-[auto] object-cover w-[16px]"
                                alt="gold32png"
                              />
                            </div>
                          </div>
                          <Text
                            className="bg-light_blue_700 font-bold justify-center pl-[16px] pr-[15.95px] py-[4px] rounded-[12px] self-stretch text-center text-white_A700 w-[auto]"
                            variant="body47"
                          >
                            Join
                          </Text>
                        </div>
                        <Text
                          className="font-ibmplexsans font-medium leading-[22.00px] text-gray_912 text-left w-[100%]"
                          variant="body37"
                        >
                          Pedro Pascal bought Five Guys for the whole cast and
                          crew of The Last Of Us
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="bg-gray_107 flex items-center justify-start w-[100%]">
                          <div className="bg-white_A700 h-[512px] w-[100%]"></div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-[2px] px-[4px] w-[100%]">
                          <div className="flex items-center justify-start pl-[4px] pr-[3.45px] py-[8px] self-stretch w-[auto]">
                            <Text
                              className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                              variant="body47"
                            >
                              1.6k comments
                            </Text>
                          </div>
                          <div className="flex items-end justify-start ml-[4px] pb-[12px] pt-[8px] px-[8px] self-stretch w-[auto]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                variant="body47"
                              >
                                share
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-center justify-start ml-[4px] p-[8px] self-stretch w-[auto]">
                            <div className="flex items-center justify-start w-[auto]">
                              <Text
                                className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                variant="body47"
                              >
                                save
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700_cc border-[1px] border-bluegray_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-end rounded-[4px] w-[100%]">
                      <div className="flex items-center justify-start md:mt-[0] mt-[8px] self-stretch w-[auto]">
                        <Text
                          className="font-bold text-gray_923 text-left w-[auto]"
                          variant="body47"
                        >
                          46.1k
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 flex-col gap-[6px] items-center justify-end md:ml-[0] ml-[3px] py-[2px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start mt-[6px] md:w-[100%] w-[98%]">
                          <div className="flex sm:flex-col flex-row font-notosans sm:gap-[20px] items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_communityiconk.png"
                              className="h-[20px] md:h-[auto] rounded-[50%] w-[20px]"
                              alt="communityiconk"
                            />
                            <div className="flex sm:flex-1 flex-row font-ibmplexsans items-center justify-start pr-[135.08px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                              <div className="flex flex-row items-start justify-evenly w-[95%]">
                                <Text
                                  className="font-bold text-gray_922 text-left w-[auto]"
                                  variant="body47"
                                >
                                  r/therewasanattempt
                                </Text>
                                <Text
                                  className="mt-[3px] not-italic text-gray_605 text-left w-[auto]"
                                  variant="body4"
                                ></Text>
                                <Text
                                  className="font-normal not-italic text-gray_606 text-left w-[auto]"
                                  variant="body47"
                                >
                                  u/theunknowxn
                                </Text>
                                <Text
                                  className="font-normal mt-[2px] not-italic text-gray_606 text-left w-[auto]"
                                  variant="body47"
                                >
                                  15 hours ago
                                </Text>
                              </div>
                              <div className="flex items-end justify-start px-[2px] w-[6%]">
                                <Img
                                  src="images/img_illuminati32png.png"
                                  className="h-[16px] md:h-[auto] object-cover w-[16px]"
                                  alt="illuminati32png"
                                />
                              </div>
                            </div>
                            <Text
                              className="bg-light_blue_700 font-bold justify-center pl-[16px] pr-[15.95px] py-[4px] rounded-[12px] self-stretch text-center text-white_A700 w-[auto]"
                              variant="body47"
                            >
                              Join
                            </Text>
                          </div>
                          <Text
                            className="font-ibmplexsans font-medium text-gray_912 text-left w-[auto]"
                            variant="body37"
                          >
                            To pullover a Lamborghini without license plates
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="bg-gray_107 flex items-center justify-start w-[100%]">
                            <div className="bg-white_A700 flex items-center justify-start w-[100%]">
                              <div className="bg-gradient24  flex items-start justify-start pt-[333px] self-stretch md:w-[100%] w-[auto]">
                                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-end justify-between px-[4px] self-stretch w-[auto]">
                                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between px-[15px] sm:w-[100%] w-[92%]">
                                    <Img
                                      src="images/img_play_white_a700.svg"
                                      className="h-[18px] w-[18px]"
                                      alt="play"
                                    />
                                    <SeekBar
                                      inputValue={[0]}
                                      trackColors={["", "#434343"]}
                                      thumbClassName="h-[18px] bg-white_A700 w-[18px] flex rounded-[50%] justify-center items-center outline-none"
                                      className="flex h-[48px] w-[auto]"
                                      trackClassName="h-[12px] flex w-[100%]"
                                    />{" "}
                                    <div className="flex flex-row gap-[4.09px] items-start justify-start pr-[0.09px] self-stretch w-[auto]">
                                      <Text
                                        className="font-semibold text-left text-white_A700 w-[auto]"
                                        variant="body41"
                                      >
                                        0:00
                                      </Text>
                                      <Text
                                        className="font-semibold text-left text-white_A700_b3 w-[auto]"
                                        variant="body41"
                                      >
                                        /
                                      </Text>
                                      <Text
                                        className="font-semibold text-left text-white_A700 w-[auto]"
                                        variant="body41"
                                      >
                                        3:19
                                      </Text>
                                    </div>
                                    <Img
                                      src="images/img_settings_white_a700.svg"
                                      className="h-[18px] w-[18px]"
                                      alt="settings"
                                    />
                                    <Img
                                      src="images/img_minimize_white_a700.svg"
                                      className="h-[18px] w-[18px]"
                                      alt="minimize"
                                    />
                                  </div>
                                  <Img
                                    src="images/img_div_white_a700_179x48.svg"
                                    className="h-[179px] w-[48px]"
                                    alt="div"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[2px] px-[4px] w-[100%]">
                            <div className="flex items-center justify-start pl-[4px] pr-[3.45px] py-[8px] self-stretch w-[auto]">
                              <Text
                                className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                variant="body47"
                              >
                                7.4k comments
                              </Text>
                            </div>
                            <div className="flex items-end justify-start ml-[4px] pb-[12px] pt-[8px] px-[8px] self-stretch w-[auto]">
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                  variant="body47"
                                >
                                  share
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-center justify-start ml-[4px] p-[8px] self-stretch w-[auto]">
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                  variant="body47"
                                >
                                  save
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700_cc border-[1px] border-bluegray_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-end rounded-[4px] w-[100%]">
                      <div className="flex items-center justify-start md:mt-[0] mt-[8px] self-stretch w-[auto]">
                        <Text
                          className="font-bold text-gray_923 text-left w-[auto]"
                          variant="body47"
                        >
                          18.0k
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 flex-col gap-[8px] items-center justify-end md:ml-[0] ml-[3px] py-[2px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col gap-[7px] items-start justify-start mt-[6px] md:w-[100%] w-[98%]">
                          <div className="flex sm:flex-col flex-row font-notosans sm:gap-[20px] items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_communityicon5.png"
                              className="h-[20px] md:h-[auto] rounded-[50%] w-[20px]"
                              alt="communityiconFive"
                            />
                            <div className="flex sm:flex-1 flex-row font-ibmplexsans items-center justify-start pr-[201.22px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                              <div className="flex flex-row items-start justify-evenly w-[93%]">
                                <Text
                                  className="font-bold text-gray_922 text-left w-[auto]"
                                  variant="body47"
                                >
                                  r/interestingasfuck
                                </Text>
                                <Text
                                  className="mt-[3px] not-italic text-gray_605 text-left w-[auto]"
                                  variant="body4"
                                ></Text>
                                <Text
                                  className="font-normal not-italic text-gray_606 text-left w-[auto]"
                                  variant="body47"
                                >
                                  u/787v
                                </Text>
                                <Text
                                  className="font-normal mt-[2px] not-italic text-gray_606 text-left w-[auto]"
                                  variant="body47"
                                >
                                  4 hours ago
                                </Text>
                              </div>
                              <div className="flex items-end justify-start px-[2px] w-[8%]">
                                <Img
                                  src="images/img_p4yzxkaed5f61o.png"
                                  className="h-[16px] md:h-[auto] object-cover w-[16px]"
                                  alt="p4yzxkaed5f61o"
                                />
                              </div>
                            </div>
                            <Text
                              className="bg-light_blue_700 font-bold justify-center pl-[16px] pr-[15.95px] py-[4px] rounded-[12px] self-stretch text-center text-white_A700 w-[auto]"
                              variant="body47"
                            >
                              Join
                            </Text>
                          </div>
                          <Text
                            className="font-ibmplexsans font-medium leading-[22.00px] text-gray_912 text-left sm:w-[100%] w-[91%]"
                            variant="body37"
                          >
                            A German-Jewish WWI veteran wears his iron cross
                            while a Nazi soldier stands in front of his shop in
                            an attempt to intimidate
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="bg-gray_107 flex items-center justify-start w-[100%]">
                            <div className="bg-white_A700 flex items-center justify-start sm:px-[20px] px-[39px] w-[100%]">
                              <Img
                                src="images/img_7ur6gkbth5pa1jpg.png"
                                className="h-[511px] md:h-[auto] object-cover w-[100%]"
                                alt="7ur6gkbth5pa1jp"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[2px] px-[4px] w-[100%]">
                            <div className="flex items-center justify-start pl-[4px] pr-[4.02px] py-[8px] self-stretch w-[auto]">
                              <Text
                                className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                variant="body47"
                              >
                                871 comments
                              </Text>
                            </div>
                            <div className="flex items-end justify-start ml-[4px] pb-[12px] pt-[8px] px-[8px] self-stretch w-[auto]">
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                  variant="body47"
                                >
                                  share
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-center justify-start ml-[3px] p-[8px] self-stretch w-[auto]">
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                  variant="body47"
                                >
                                  save
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[9px] grid items-center mt-[10px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700_cc border-[1px] border-bluegray_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-end rounded-[4px] w-[100%]">
                      <div className="flex items-center justify-start md:mt-[0] mt-[8px] self-stretch w-[auto]">
                        <Text
                          className="font-bold text-gray_923 text-left w-[auto]"
                          variant="body47"
                        >
                          25.4k
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 flex-col font-notosans gap-[8px] items-center justify-end md:ml-[0] ml-[3px] py-[2px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col gap-[7px] items-center justify-start mt-[6px] md:w-[100%] w-[98%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_communityiconr.png"
                              className="h-[20px] md:h-[auto] rounded-[50%] w-[20px]"
                              alt="communityiconr"
                            />
                            <div className="flex sm:flex-1 sm:flex-col flex-row font-ibmplexsans sm:gap-[20px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[99.36px] self-stretch sm:w-[100%] w-[auto]">
                              <div className="flex flex-row items-start justify-evenly sm:w-[100%] w-[95%]">
                                <Text
                                  className="font-bold text-gray_922 text-left w-[auto]"
                                  variant="body47"
                                >
                                  r/2westerneurope4u
                                </Text>
                                <Text
                                  className="mt-[3px] not-italic text-gray_605 text-left w-[auto]"
                                  variant="body4"
                                ></Text>
                                <Text
                                  className="font-normal not-italic text-gray_606 text-left w-[auto]"
                                  variant="body47"
                                >
                                  u/Do_You_Want_Lunch
                                </Text>
                                <Text
                                  className="font-normal mt-[2px] not-italic text-gray_606 text-left w-[auto]"
                                  variant="body47"
                                >
                                  10 hours ago
                                </Text>
                              </div>
                              <div className="flex items-end justify-start px-[2px] sm:w-[100%] w-[6%]">
                                <Img
                                  src="images/img_starstruck32png.png"
                                  className="h-[16px] md:h-[auto] object-cover w-[16px]"
                                  alt="starstruck32png"
                                />
                              </div>
                            </div>
                            <Text
                              className="bg-light_blue_700 font-bold justify-center pl-[16px] pr-[15.95px] py-[4px] rounded-[12px] self-stretch text-center text-white_A700 w-[auto]"
                              variant="body47"
                            >
                              Join
                            </Text>
                          </div>
                          <div className="flex flex-row font-ibmplexsans items-start justify-start sm:pr-[20px] md:pr-[40px] pr-[446px] w-[100%]">
                            <Img
                              src="images/img_.png"
                              className="h-[23px] md:h-[auto] object-cover w-[23%]"
                              alt="Two"
                            />
                            <div className="bg-blue_901 flex flex-row items-start justify-center rounded-[10px] w-[77%]">
                              <Img
                                src="images/img_div_16x16.png"
                                className="h-[16px] md:h-[auto] ml-[6px] object-cover w-[16px]"
                                alt="div"
                              />
                              <Text
                                className="font-medium mr-[9px] text-left text-white_A700 w-[auto]"
                                variant="body47"
                              >
                                Best of 2023
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col font-ibmplexsans items-center justify-start w-[100%]">
                          <div className="bg-gray_107 flex items-center justify-start w-[100%]">
                            <div className="bg-white_A700 h-[407px] w-[100%]"></div>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[2px] px-[4px] w-[100%]">
                            <div className="flex items-center justify-start pl-[4px] pr-[3.45px] py-[8px] self-stretch w-[auto]">
                              <Text
                                className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                variant="body47"
                              >
                                4.8k comments
                              </Text>
                            </div>
                            <div className="flex items-end justify-start ml-[4px] pb-[12px] pt-[8px] px-[8px] self-stretch w-[auto]">
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                  variant="body47"
                                >
                                  share
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-center justify-start ml-[4px] p-[8px] self-stretch w-[auto]">
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                  variant="body47"
                                >
                                  save
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700_cc border-[1px] border-bluegray_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-end rounded-[4px] w-[100%]">
                      <div className="flex items-center justify-start md:mt-[0] mt-[8px] self-stretch w-[auto]">
                        <Text
                          className="font-bold text-gray_923 text-left w-[auto]"
                          variant="body47"
                        >
                          14.9k
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 flex-col gap-[6px] items-center justify-end md:ml-[0] ml-[3px] py-[2px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col gap-[8px] items-start justify-start mt-[6px] md:w-[100%] w-[98%]">
                          <div className="flex sm:flex-col flex-row font-notosans sm:gap-[20px] items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_kipbour8zjlmqlf.png"
                              className="h-[20px] md:h-[auto] rounded-[50%] w-[20px]"
                              alt="kipbour8zjlmqlf"
                            />
                            <div className="flex sm:flex-1 flex-row font-ibmplexsans items-center justify-start sm:pr-[20px] pr-[245.03px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                              <div className="flex flex-row items-start justify-evenly w-[92%]">
                                <Text
                                  className="font-bold text-gray_922 text-left w-[auto]"
                                  variant="body47"
                                >
                                  r/funny
                                </Text>
                                <Text
                                  className="mt-[3px] not-italic text-gray_605 text-left w-[auto]"
                                  variant="body4"
                                ></Text>
                                <Text
                                  className="font-normal not-italic text-gray_606 text-left w-[auto]"
                                  variant="body47"
                                >
                                  u/Siil_Udus
                                </Text>
                                <Text
                                  className="font-normal mt-[2px] not-italic text-gray_606 text-left w-[auto]"
                                  variant="body47"
                                >
                                  4 hours ago
                                </Text>
                              </div>
                              <div className="flex items-end justify-start px-[2px] w-[9%]">
                                <Img
                                  src="images/img_illuminati32png.png"
                                  className="h-[16px] md:h-[auto] object-cover w-[16px]"
                                  alt="illuminati32png"
                                />
                              </div>
                            </div>
                            <Text
                              className="bg-light_blue_700 font-bold justify-center pl-[16px] pr-[15.95px] py-[4px] rounded-[12px] self-stretch text-center text-white_A700 w-[auto]"
                              variant="body47"
                            >
                              Join
                            </Text>
                          </div>
                          <Text
                            className="font-ibmplexsans font-medium text-gray_912 text-left w-[auto]"
                            variant="body37"
                          >
                            Too many questions, lack of answers
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="bg-gray_107 flex items-center justify-start w-[100%]">
                            <div className="bg-white_A700 h-[512px] w-[100%]"></div>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[2px] px-[4px] w-[100%]">
                            <div className="flex items-center justify-start pl-[4px] pr-[4.02px] py-[8px] self-stretch w-[auto]">
                              <Text
                                className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                variant="body47"
                              >
                                466 comments
                              </Text>
                            </div>
                            <div className="flex items-end justify-start ml-[4px] pb-[12px] pt-[8px] px-[8px] self-stretch w-[auto]">
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                  variant="body47"
                                >
                                  share
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-center justify-start ml-[3px] p-[8px] self-stretch w-[auto]">
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                  variant="body47"
                                >
                                  save
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700_cc border-[1px] border-bluegray_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-end rounded-[4px] w-[100%]">
                      <div className="flex items-center justify-start md:mt-[0] mt-[8px] self-stretch w-[auto]">
                        <Text
                          className="font-bold text-gray_923 text-left w-[auto]"
                          variant="body47"
                        >
                          28.6k
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 flex-col gap-[8px] items-center justify-end md:ml-[0] ml-[3px] py-[2px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col gap-[6px] items-start justify-start mt-[6px] md:w-[100%] w-[98%]">
                          <div className="flex sm:flex-col flex-row font-notosans sm:gap-[20px] items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_4adrnu2cwkikpqt.png"
                              className="h-[20px] md:h-[auto] rounded-[50%] w-[20px]"
                              alt="4adrnu2cwkikpqt"
                            />
                            <div className="flex sm:flex-1 font-ibmplexsans items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                              <div className="flex flex-row items-start justify-start w-[51%]">
                                <Text
                                  className="font-bold text-gray_922 text-left w-[auto]"
                                  variant="body47"
                                >
                                  r/meirl
                                </Text>
                                <Text
                                  className="ml-[3px] mt-[3px] not-italic text-gray_605 text-left w-[auto]"
                                  variant="body4"
                                ></Text>
                                <Text
                                  className="font-normal ml-[5px] not-italic text-gray_606 text-left w-[auto]"
                                  variant="body47"
                                >
                                  u/redcobra762
                                </Text>
                                <Text
                                  className="font-normal ml-[2px] mt-[2px] not-italic text-gray_606 text-left w-[auto]"
                                  variant="body47"
                                >
                                  5 hours ago
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="bg-light_blue_700 font-bold justify-center pl-[16px] pr-[15.95px] py-[4px] rounded-[12px] self-stretch text-center text-white_A700 w-[auto]"
                              variant="body47"
                            >
                              Join
                            </Text>
                          </div>
                          <Text
                            className="font-ibmplexsans font-medium text-gray_912 text-left w-[auto]"
                            variant="body37"
                          >
                            Meirl
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <div className="bg-gray_107 flex items-center justify-start w-[100%]">
                            <div className="bg-white_A700 h-[282px] w-[100%]"></div>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[2px] px-[4px] w-[100%]">
                            <div className="flex items-center justify-start pl-[4px] pr-[3.45px] py-[8px] self-stretch w-[auto]">
                              <Text
                                className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                variant="body47"
                              >
                                4.6k comments
                              </Text>
                            </div>
                            <div className="flex items-end justify-start ml-[4px] pb-[12px] pt-[8px] px-[8px] self-stretch w-[auto]">
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                  variant="body47"
                                >
                                  share
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-center justify-start ml-[4px] p-[8px] self-stretch w-[auto]">
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                  variant="body47"
                                >
                                  save
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700_cc border-[1px] border-bluegray_102 border-solid flex flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-end rounded-[4px] w-[100%]">
                      <div className="flex items-center justify-start md:mt-[0] mt-[8px] self-stretch w-[auto]">
                        <Text
                          className="font-bold text-gray_923 text-left w-[auto]"
                          variant="body47"
                        >
                          44.3k
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex md:flex-1 flex-col font-notosans gap-[6px] items-center justify-end md:ml-[0] ml-[3px] py-[2px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col gap-[8px] items-center justify-start mt-[6px] md:w-[100%] w-[98%]">
                          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-evenly w-[100%]">
                            <Img
                              src="images/img_b19jqlbsvc2eq.png"
                              className="h-[20px] md:h-[auto] rounded-[50%] w-[20px]"
                              alt="b19jqlbsvc2eq"
                            />
                            <div className="flex sm:flex-1 sm:flex-col flex-row font-ibmplexsans sm:gap-[20px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[77.16px] self-stretch sm:w-[100%] w-[auto]">
                              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-evenly sm:w-[100%] w-[95%]">
                                <Text
                                  className="font-bold text-gray_922 text-left w-[auto]"
                                  variant="body47"
                                >
                                  r/Damnthatsinteresting
                                </Text>
                                <Text
                                  className="sm:mt-[0] mt-[3px] not-italic text-gray_605 text-left w-[auto]"
                                  variant="body4"
                                ></Text>
                                <Text
                                  className="font-normal not-italic text-gray_606 text-left w-[auto]"
                                  variant="body47"
                                >
                                  u/Murky_Interview3502
                                </Text>
                                <Text
                                  className="font-normal sm:mt-[0] mt-[2px] not-italic text-gray_606 text-left w-[auto]"
                                  variant="body47"
                                >
                                  20 hours ago
                                </Text>
                              </div>
                              <div className="flex items-end justify-start px-[2px] sm:w-[100%] w-[6%]">
                                <Img
                                  src="images/img_qpi61q5o98361t.png"
                                  className="h-[16px] md:h-[auto] object-cover w-[16px]"
                                  alt="qpi61q5o98361t"
                                />
                              </div>
                            </div>
                            <Text
                              className="bg-light_blue_700 font-bold justify-center pl-[16px] pr-[15.95px] py-[4px] rounded-[12px] self-stretch text-center text-white_A700 w-[auto]"
                              variant="body47"
                            >
                              Join
                            </Text>
                          </div>
                          <div className="flex sm:flex-col flex-row font-ibmplexsans sm:gap-[20px] items-start justify-start pr-[156px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                            <Text
                              className="font-medium text-gray_912 text-left w-[auto]"
                              variant="body37"
                            >
                              Suicide Rate per 100,000 population in 2019
                            </Text>
                            <Text
                              className="bg-bluegray_52 font-medium justify-center sm:ml-[0] ml-[4px] sm:mt-[0] my-[2px] pl-[8px] pr-[7.22px] py-[2px] rounded-[10px] self-stretch text-gray_923 text-left w-[auto]"
                              variant="body47"
                            >
                              Image
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col font-ibmplexsans items-center justify-start w-[100%]">
                          <div className="bg-gray_107 flex items-center justify-start w-[100%]">
                            <div className="bg-white_A700 h-[448px] w-[100%]"></div>
                          </div>
                          <div className="flex flex-row items-center justify-start mt-[2px] px-[4px] w-[100%]">
                            <div className="flex items-center justify-start pl-[4px] pr-[3.45px] py-[8px] self-stretch w-[auto]">
                              <Text
                                className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                variant="body47"
                              >
                                4.3k comments
                              </Text>
                            </div>
                            <div className="flex items-end justify-start ml-[4px] pb-[12px] pt-[8px] px-[8px] self-stretch w-[auto]">
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                  variant="body47"
                                >
                                  share
                                </Text>
                              </div>
                            </div>
                            <div className="flex items-center justify-start ml-[4px] p-[8px] self-stretch w-[auto]">
                              <div className="flex items-center justify-start w-[auto]">
                                <Text
                                  className="capitalize font-bold text-bluegray_406 text-left w-[auto]"
                                  variant="body47"
                                >
                                  save
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <Img
                  src="images/img_div_white_a700_358x180.svg"
                  className="h-[155px] w-[auto]"
                  alt="div_Three"
                />
              </div>
              <div className="flex flex-col items-center justify-start md:w-[100%] w-[32%]">
                <div className="bg-white_A700 border-[1px] border-bluegray_102 border-solid flex items-center justify-start rounded-[4px] w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <SelectBox
                        className="bg-white_A700 font-bold p-[12px] text-[10px] text-gray_923 text-left tracking-[0.50px] uppercase w-[100%]"
                        placeholderClassName="text-gray_923"
                        name="div_Four"
                        placeholder="Popular Communities"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_gray_923.svg"
                            className="h-[16px] mr-[0] w-[16px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex flex-col gap-[9px] justify-start w-[100%]">
                              <div className="flex flex-col gap-[10px] items-start justify-start md:ml-[0] ml-[12px] md:w-[100%] w-[69%]">
                                <div className="flex flex-row gap-[24px] items-start justify-start md:w-[100%] w-[89%]">
                                  <Text
                                    className="font-medium text-gray_923 text-left w-[auto]"
                                    variant="body47"
                                  >
                                    AskReddit
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_923 text-left w-[auto]"
                                    variant="body47"
                                  >
                                    NoStupidQuestions
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-[24px] items-center justify-between w-[100%]">
                                  <Text
                                    className="font-medium text-gray_923 text-left w-[auto]"
                                    variant="body47"
                                  >
                                    DestinyTheGame
                                  </Text>
                                  <Text
                                    className="font-medium text-gray_923 text-left w-[auto]"
                                    variant="body47"
                                  >
                                    explainlikeimfive
                                  </Text>
                                </div>
                              </div>
                              <div className="md:h-[52px] h-[68px] relative w-[100%]">
                                <Text
                                  className="font-medium ml-[12px] text-gray_923 text-left w-[auto]"
                                  variant="body47"
                                >
                                  AskMen
                                </Text>
                                <div className="absolute flex md:h-[52px] h-[68px] inset-[0] justify-end m-[auto] w-[100%]">
                                  <Text
                                    className="absolute font-ibmplexsans font-medium left-[25%] text-gray_923 text-left top-[0] w-[auto]"
                                    variant="body47"
                                  >
                                    leagueoflegends
                                  </Text>
                                  <Text
                                    className="absolute font-ibmplexsans font-medium right-[20%] text-gray_923 text-left top-[0] w-[auto]"
                                    variant="body47"
                                  >
                                    Minecraft
                                  </Text>
                                  <div className="absolute flex flex-row font-ibmplexsans h-[max-content] inset-y-[0] items-center justify-between left-[4%] my-[auto] w-[57%]">
                                    <Text
                                      className="font-medium text-gray_923 text-left w-[auto]"
                                      variant="body47"
                                    >
                                      anime
                                    </Text>
                                    <Text
                                      className="font-medium text-gray_923 text-left w-[auto]"
                                      variant="body47"
                                    >
                                      IAmA
                                    </Text>
                                    <Text
                                      className="font-medium text-gray_923 text-left w-[auto]"
                                      variant="body47"
                                    >
                                      AskWomen
                                    </Text>
                                  </div>
                                  <Text
                                    className="absolute bottom-[0] font-ibmplexsans font-medium left-[4%] text-gray_923 text-left w-[auto]"
                                    variant="body47"
                                  >
                                    OutOfTheLoop
                                  </Text>
                                  <Text
                                    className="absolute bottom-[0] font-ibmplexsans font-medium left-[37%] text-gray_923 text-left w-[auto]"
                                    variant="body47"
                                  >
                                    Fitness
                                  </Text>
                                  <Text
                                    className="font-ibmplexsans font-medium ml-[auto] mr-[82px] mt-[auto] text-gray_923 text-left w-[auto]"
                                    variant="body47"
                                  >
                                    destiny2
                                  </Text>
                                  <Input
                                    wrapClassName="absolute bg-white_A700 bottom-[0] inset-x-[0] mx-[auto] pb-[17px] pl-[13px] pr-[35px] pt-[14px] w-[100%]"
                                    className="font-bold font-notosans p-[0] placeholder:text-light_blue_700 sm:pr-[20px] text-[14px] text-center text-light_blue_700 w-[100%]"
                                    name="div_Five"
                                    placeholder="See more"
                                  ></Input>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SelectBox
                      className="border-bluegray_52 border-solid border-t-[1px] font-bold p-[12px] text-[10px] text-gray_923 text-left tracking-[0.50px] uppercase w-[100%]"
                      placeholderClassName="text-gray_923"
                      name="div_Six"
                      placeholder="Gaming"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_923.svg"
                          className="h-[16px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <SelectBox
                      className="border-bluegray_52 border-solid border-t-[1px] font-bold p-[12px] text-[10px] text-gray_923 text-left tracking-[0.50px] uppercase w-[100%]"
                      placeholderClassName="text-gray_923"
                      name="div_Seven"
                      placeholder="Sports"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_923.svg"
                          className="h-[16px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <SelectBox
                      className="border-bluegray_52 border-solid border-t-[1px] font-bold p-[12px] text-[10px] text-gray_923 text-left tracking-[0.50px] uppercase w-[100%]"
                      placeholderClassName="text-gray_923"
                      name="div_Eight"
                      placeholder="TV"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_923.svg"
                          className="h-[16px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <SelectBox
                      className="border-bluegray_52 border-solid border-t-[1px] font-bold p-[12px] text-[10px] text-gray_923 text-left tracking-[0.50px] uppercase w-[100%]"
                      placeholderClassName="text-gray_923"
                      name="div_Nine"
                      placeholder="Travel"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_923.svg"
                          className="h-[16px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <SelectBox
                      className="border-bluegray_52 border-solid border-t-[1px] font-bold p-[12px] text-[10px] text-gray_923 text-left tracking-[0.50px] uppercase w-[100%]"
                      placeholderClassName="text-gray_923"
                      name="div_Ten"
                      placeholder="Health & Fitness"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_923.svg"
                          className="h-[16px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <SelectBox
                      className="border-bluegray_52 border-solid border-t-[1px] font-bold p-[12px] text-[10px] text-gray_923 text-left tracking-[0.50px] uppercase w-[100%]"
                      placeholderClassName="text-gray_923"
                      name="div_Eleven"
                      placeholder="Fashion"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_923.svg"
                          className="h-[16px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                </div>
                <div className="flex flex-col font-notosans gap-[189px] md:gap-[40px] items-center justify-start pb-[18886px] w-[100%]">
                  <div className="flex flex-col gap-[13px] sm:hidden items-start justify-start p-[8px] w-[100%]">
                    <div className="border-b-[1px] border-gray_205 border-solid flex flex-row items-center justify-start md:ml-[0] ml-[12px] py-[8px] md:w-[100%] w-[92%]">
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="capitalize font-normal md:ml-[0] ml-[6px] not-italic text-gray_601 text-left w-[auto]"
                          variant="body47"
                        >
                          User Agreement
                        </Text>
                        <Text
                          className="capitalize font-normal mb-[11px] md:ml-[0] ml-[6px] not-italic text-gray_601 text-left w-[auto]"
                          variant="body47"
                        >
                          Privacy policy
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="capitalize font-normal md:ml-[0] ml-[6px] not-italic text-gray_601 text-left w-[auto]"
                          variant="body47"
                        >
                          Content policy
                        </Text>
                        <Text
                          className="capitalize font-normal leading-[16.00px] md:ml-[0] ml-[6px] not-italic text-gray_601 text-left sm:w-[100%] w-[81%]"
                          variant="body47"
                        >
                          Moderator Code of Conduct
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-normal mb-[9px] md:ml-[0] ml-[12px] not-italic text-gray_601 text-left w-[auto]"
                      variant="body47"
                    >
                      Reddit Inc © 2023. All rights reserved
                    </Text>
                  </div>
                  <Button className="bg-light_blue_700 cursor-pointer font-bold min-w-[112px] pl-[16px] pr-[15.42px] py-[7.5px] rounded-[16px] text-[14px] text-center text-white_A700 w-[auto]">
                    Back to Top
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute sm:h-[111px] md:h-[191px] h-[49px] inset-x-[0] max-w-[1900px] mx-[auto] md:px-[20px] top-[0] w-[100%]">
          <Text
            className="font-normal ml-[20px] my-[auto] not-italic text-gray_922 text-left w-[auto]"
            variant="body41"
          >
            Press J to jump to the feed. Press question mark to learn the rest
            of the keyboard shortcuts
          </Text>
          <div className="absolute sm:h-[111px] md:h-[191px] h-[49px] sm:hidden inset-[0] m-[auto] px-[20px] md:w-[100%] w-[1900px]">
            <div className="absolute bg-white_A700 border-b-[1px] border-bluegray_52 border-solid h-[48px] inset-[0] m-[auto] px-[20px] w-[100%]"></div>
            <div className="absolute flex md:flex-col flex-row md:gap-[40px] items-center justify-between left-[41%] m-[32px] pl-[20px] top-[0] w-[62%]">
              <Img
                src="images/img_home_deep_orange_a402.png"
                className="h-[47px] md:h-[auto] sm:hidden object-cover sm:w-[100%] w-[117px]"
                alt="home_One"
              />
              <div className="md:h-[40px] h-[42px] relative md:w-[100%] w-[58%]">
                <Text
                  className="font-normal mt-[7px] not-italic text-gray_922 text-left w-[auto]"
                  variant="body41"
                >
                  Search all of Reddit
                </Text>
                <div className="absolute bg-gray_106 border-[1px] border-bluegray_52 border-solid flex h-[max-content] inset-[0] items-center justify-start m-[auto] py-[10px] rounded-[20px] self-stretch w-[auto]">
                  <div className="flex items-end justify-start px-[16px] w-[100%]">
                    <div className="bg-gray_106 flex items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                      <div className="flex items-start justify-start self-stretch w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_607 text-left w-[auto]"
                          variant="body43"
                        >
                          Search Reddit
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex sm:flex-col flex-row font-notosans gap-[8px] h-[100%] sm:hidden inset-y-[0] items-center justify-between my-[auto] right-[0] self-stretch w-[auto]">
              <div className="flex flex-row gap-[16px] items-start justify-start pl-[16px] self-stretch w-[auto]">
                <Text
                  className="border-[1px] border-light_blue_700 border-solid font-bold pb-[3px] sm:pl-[20px] pl-[35px] pr-[18px] pt-[8px] rounded-[16px] text-center text-light_blue_700 w-[auto]"
                  variant="body43"
                >
                  Get App
                </Text>
                <Button className="bg-light_blue_700 cursor-pointer font-bold min-w-[120px] py-[6px] rounded-[16px] text-[14px] text-center text-white_A700 w-[auto]">
                  Log In
                </Button>
              </div>
              <div className="flex font-ibmplexsans items-start justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="font-normal leading-[16.00px] not-italic text-gray_922 text-left sm:w-[100%] w-[82%]"
                  variant="body41"
                >
                  User account menu
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnClicklgPage;
