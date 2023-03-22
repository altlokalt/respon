import React from "react";

import { Img, Text, Button, Input, List } from "components";
import { CloseSVG } from "../../assets/images";

const CateglgPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="bg-pink_903 flex items-center justify-center pt-[48px] px-[176px] md:px-[20px] self-stretch w-[100%]">
            <div className="bg-white_A700 border-[1px] border-gray_304 border-solid flex items-start justify-start pb-[9.16px] sm:pl-[20px] md:pl-[40px] pl-[45px] pr-[13px] pt-[9.17px] rounded-[44px] self-stretch w-[auto]">
              <div className="flex flex-row md:gap-[20px] items-center justify-center w-[100%]">
                <Img
                  src="images/img_span.svg"
                  className="h-[69px] sm:hidden w-[auto]"
                  alt="span"
                />
                <div className="flex flex-row gap-[42.59px] items-start justify-start ml-[48px] pb-[11.39px] pl-[20px] sm:pr-[20px] pr-[22.98px] pt-[10px] self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_700 text-left w-[auto]"
                    variant="body41"
                  >
                    Browse
                  </Text>
                  <Text
                    className="font-normal sm:hidden not-italic text-gray_700 text-left w-[auto]"
                    variant="body41"
                  >
                    More
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-start justify-start ml-[750px] self-stretch w-[auto]">
                  <Button className="bg-gray_204 cursor-pointer font-normal min-w-[103px] not-italic pb-[20.39px] pl-[28px] pr-[27.88px] pt-[17px] sm:px-[20px] rounded-[10px] text-[16px] text-center text-gray_920 w-[auto]">
                    Admin
                  </Button>
                  <Button className="bg-gray_920 cursor-pointer font-normal min-w-[149px] not-italic pb-[20.39px] pl-[29px] pr-[28.89px] pt-[17px] sm:px-[20px] rounded-[32px] text-[16px] text-center text-white_A700 w-[auto]">
                    Sign up free
                  </Button>
                </div>
              </div>
            </div>
          </header>
          <div className="bg-white_A700 flex flex-col md:gap-[40px] gap-[79px] items-center justify-start self-stretch md:w-[100%] w-[auto]">
            <div className="bg-colors flex items-start justify-start pb-[266px] pt-[48px] self-stretch shadow-bs18 md:w-[100%] w-[auto]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="bg-pink_903 flex items-start justify-start px-[192px] sm:px-[20px] md:px-[40px] self-stretch md:w-[100%] w-[auto]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1536px] mx-[auto] sm:pr-[20px] pr-[23px] w-[100%]">
                    <div className="flex md:flex-1 flex-col items-start justify-center pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                      <Text
                        className="leading-[92.00px] mt-[116px] text-left text-purple_100 tracking-[-1.76px] w-[100%]"
                        as="h4"
                        variant="h4"
                      >
                        Connect more of you
                      </Text>
                      <Text
                        className="font-normal leading-[33.00px] mt-[32px] not-italic text-left text-purple_100 sm:w-[100%] w-[98%]"
                        variant="body33"
                      >
                        Bring the best experiences across the internet to one
                        place: your Linktree
                      </Text>
                      <div className="flex items-center justify-start mb-[248px] mt-[48px] md:w-[100%] w-[83%]">
                        <Input
                          value={inputvalue}
                          onChange={(e) => setInputvalue(e?.target?.value)}
                          wrapClassName="bg-white_A700 flex pl-[40px] pr-[16px] py-[22.5px] rounded-[8px] w-[100%]"
                          className="font-normal leading-[normal] not-italic p-[0] placeholder:text-gray_700 sm:pl-[20px] text-[14px] text-gray_700 text-left tracking-[0.14px] w-[100%]"
                          name="input"
                          placeholder="Search Link Apps and integrations..."
                          prefix={
                            <Img
                              src="images/img_search_gray_921.svg"
                              className="cursor-pointer mr-[6px] my-[auto]"
                              alt="search"
                            />
                          }
                          suffix={
                            <CloseSVG
                              color="#676b5f"
                              className="cursor-pointer my-[auto]"
                              onClick={() => setInputvalue("")}
                              style={{
                                visibility:
                                  inputvalue?.length <= 0
                                    ? "hidden"
                                    : "visible",
                              }}
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                    <Img
                      src="images/img_div_726x603.png"
                      className="md:flex-1 h-[726px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                      alt="div"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[0.39px] items-start justify-start max-w-[1536px] mx-[auto] md:px-[20px] self-stretch w-[100%]">
              <Text
                className="font-bold text-gray_920 text-left tracking-[-0.32px] w-[auto]"
                variant="body21"
              >
                Featured
              </Text>
              <List
                className="sm:flex-col flex-row gap-[23px] grid md:grid-cols-1 grid-cols-2 justify-start pb-[64px] pt-[48px] self-stretch md:w-[100%] w-[auto]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[24px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                  <div className="flex items-center justify-start rounded-[48px] w-[100%]">
                    <div className="flex items-center justify-start rounded-[48px] w-[100%]">
                      <Img
                        src="images/img_image_268x756.png"
                        className="h-[268px] md:h-[auto] object-cover rounded-[48px] w-[100%]"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                    <Img
                      src="images/img_volume_deep_orange_a400.svg"
                      className="h-[56px] rounded-[10px] w-[56px]"
                      alt="volume"
                    />
                    <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] sm:pr-[20px] md:pr-[40px] pr-[458.5px] self-stretch md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                        variant="body33"
                      >
                        Reddit
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                        variant="body41"
                      >
                        Showcase your Reddit profile
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                  <div className="flex items-center justify-start rounded-[48px] w-[100%]">
                    <div className="flex items-center justify-start rounded-[48px] w-[100%]">
                      <Img
                        src="images/img_image_1.png"
                        className="h-[268px] md:h-[auto] object-cover rounded-[48px] w-[100%]"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                    <Img
                      src="images/img_music.svg"
                      className="h-[56px] rounded-[10px] w-[56px]"
                      alt="music"
                    />
                    <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] sm:pr-[20px] pr-[408.5px] md:pr-[40px] self-stretch md:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                        variant="body33"
                      >
                        TikTok
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                        variant="body41"
                      >
                        Share your TikToks on your Linktree
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start w-[100%]">
                <List
                  className="flex-col gap-[1px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-1 flex-col items-start justify-start my-[0] py-[64px] self-stretch md:w-[100%] w-[auto]">
                    <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between pb-[10px] pr-[10px] w-[100%]">
                      <Text
                        className="font-bold mb-[37px] text-gray_920 text-left tracking-[-0.32px] w-[auto]"
                        variant="body21"
                      >
                        Share Your Content
                      </Text>
                      <a
                        className="font-normal not-italic text-[20px] text-blue_701 text-left underline w-[auto]"
                        href="javascript:"
                      >
                        See 22 Apps
                      </a>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[48px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between w-[100%]">
                          <div className="flex md:flex-1 md:flex-col flex-row gap-[22px] items-center justify-between md:w-[100%] w-[67%]">
                            <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_bluegray_51.svg"
                                className="h-[56px] rounded-[10px] w-[56px]"
                                alt="div"
                              />
                              <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[102.33px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                  variant="body33"
                                >
                                  Audiomack
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                  variant="body41"
                                >
                                  Add an Audiomack player to your Linktree
                                </Text>
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_volume_deep_orange_a401.svg"
                                className="h-[56px] rounded-[10px] w-[56px]"
                                alt="volume"
                              />
                              <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[137.33px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                  variant="body33"
                                >
                                  Soundcloud
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                  variant="body41"
                                >
                                  Get your music heard on SoundCloud
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_music.svg"
                              className="h-[56px] rounded-[10px] w-[56px]"
                              alt="music"
                            />
                            <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[149.34px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                variant="body33"
                              >
                                TikTok
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                variant="body41"
                              >
                                Share your TikToks on your Linktree
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between w-[100%]">
                          <div className="flex md:flex-1 md:flex-col flex-row gap-[22px] items-center justify-between md:w-[100%] w-[67%]">
                            <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_twitter_blue_500.svg"
                                className="h-[56px] rounded-[10px] w-[56px]"
                                alt="twitter"
                              />
                              <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[119.33px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                  variant="body33"
                                >
                                  Twitter
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                  variant="body41"
                                >
                                  Showcase your tweets and Twitter feed
                                </Text>
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_youtube.svg"
                                className="h-[56px] rounded-[10px] w-[56px]"
                                alt="youtube"
                              />
                              <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[124.33px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                  variant="body33"
                                >
                                  YouTube
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                  variant="body41"
                                >
                                  Share YouTube videos on your Linktree
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_close_black_900_56x56.svg"
                              className="h-[56px] rounded-[10px] w-[56px]"
                              alt="close"
                            />
                            <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[100.34px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                variant="body33"
                              >
                                Cameo
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                variant="body41"
                              >
                                Make impossible fan connections possible
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col items-start justify-start my-[0] py-[64px] self-stretch md:w-[100%] w-[auto]">
                    <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                      <Text
                        className="font-bold mb-[43px] text-gray_920 text-left tracking-[-0.32px] w-[auto]"
                        variant="body21"
                      >
                        Make and Collect Money
                      </Text>
                      <a
                        className="font-normal mr-[5px] sm:mt-[0] mt-[4px] not-italic text-[20px] text-blue_701 text-left underline w-[auto]"
                        href="javascript:"
                      >
                        See 14 Apps
                      </a>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[48px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between w-[100%]">
                          <div className="flex md:flex-1 md:flex-col flex-row gap-[22px] items-center justify-between md:w-[100%] w-[67%]">
                            <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_facebook_bluegray_51.svg"
                                className="h-[56px] rounded-[10px] w-[56px]"
                                alt="facebook"
                              />
                              <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[124.33px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                  variant="body33"
                                >
                                  Bandsintown
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                  variant="body41"
                                >
                                  Drive ticket sales by listing your events
                                </Text>
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_volume_green_a703.svg"
                                className="h-[56px] rounded-[10px] w-[56px]"
                                alt="volume"
                              />
                              <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[108.33px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                  variant="body33"
                                >
                                  GoFundMe
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                  variant="body41"
                                >
                                  Promote the causes you care about most
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_div_bluegray_51_56x56.svg"
                              className="h-[56px] rounded-[10px] w-[56px]"
                              alt="div"
                            />
                            <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] sm:pr-[20px] pr-[265.34px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                variant="body33"
                              >
                                PayPal
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                variant="body41"
                              >
                                Get paid with PayPal
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row gap-[22px] items-center justify-between w-[100%]">
                          <div className="flex md:flex-1 md:flex-col flex-row gap-[22px] items-center justify-between md:w-[100%] w-[67%]">
                            <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_trash.svg"
                                className="h-[56px] rounded-[10px] w-[56px]"
                                alt="trash"
                              />
                              <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] sm:pr-[20px] pr-[263.33px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                  variant="body33"
                                >
                                  Square
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                  variant="body41"
                                >
                                  Get paid with Square
                                </Text>
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_black_900.svg"
                                className="h-[56px] rounded-[10px] w-[56px]"
                                alt="div_One"
                              />
                              <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[144.33px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                                <Text
                                  className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                  variant="body33"
                                >
                                  Spring
                                </Text>
                                <Text
                                  className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                  variant="body41"
                                >
                                  Display your products to boost sales
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_clock_bluegray_51.svg"
                              className="h-[56px] rounded-[10px] w-[56px]"
                              alt="clock"
                            />
                            <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[144.34px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                variant="body33"
                              >
                                Shopify
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                variant="body41"
                              >
                                Display your products to boost sales
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-gray_501 flex md:flex-col flex-row gap-[38px] items-center justify-start mt-[96px] sm:pl-[20px] md:pl-[40px] pl-[56px] rounded-[32px] self-stretch md:w-[100%] w-[auto]">
                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[48%]">
                    <Text
                      className="font-extrabold leading-[56.00px] text-gray_920 text-left tracking-[-1.12px] sm:w-[100%] w-[93%]"
                      variant="body5"
                    >
                      Join our developer program
                    </Text>
                    <Text
                      className="font-normal mt-[22px] not-italic text-gray_920 text-left w-[auto]"
                      variant="body33"
                    >
                      We&#39;re expanding access to our APIs and SDKs.
                    </Text>
                    <Button className="bg-gray_920 cursor-pointer font-normal leading-[normal] min-w-[171px] mt-[25px] not-italic pl-[35px] pr-[34.89px] sm:px-[20px] py-[22.5px] rounded-[32px] text-[16px] text-center text-white_A700 w-[auto]">
                      Register Now
                    </Button>
                  </div>
                  <Img
                    src="images/img_backgroundimagesvg.svg"
                    className="h-[376px] w-[600px]"
                    alt="backgroundimage"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mt-[96px] py-[64px] self-stretch md:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                    <Text
                      className="font-bold mb-[44px] text-gray_920 text-left tracking-[-0.32px] w-[auto]"
                      variant="body21"
                    >
                      Grow Your Following
                    </Text>
                    <a
                      className="font-normal mr-[7px] sm:mt-[0] mt-[4px] not-italic text-[20px] text-blue_701 text-left underline w-[auto]"
                      href="javascript:"
                    >
                      See 9 Apps
                    </a>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <List
                      className="flex-col gap-[47px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 md:flex-col flex-row gap-[22px] items-center justify-between my-[0] w-[100%]">
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[22px] items-center justify-between md:w-[100%] w-[67%]">
                          <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_div_gray_918.svg"
                              className="h-[56px] rounded-[10px] w-[56px]"
                              alt="div"
                            />
                            <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] sm:pr-[20px] md:pr-[40px] pr-[96.33px] self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                variant="body33"
                              >
                                Typeform
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                variant="body41"
                              >
                                Get answers with surveys, forms and more
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_volume_deep_orange_a400.svg"
                              className="h-[56px] rounded-[10px] w-[56px]"
                              alt="volume"
                            />
                            <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[199.33px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                variant="body33"
                              >
                                Reddit
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                variant="body41"
                              >
                                Showcase your Reddit profile
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_map_purple_600.svg"
                            className="h-[56px] rounded-[10px] w-[56px]"
                            alt="map"
                          />
                          <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[101.34px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                            <Text
                              className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                              variant="body33"
                            >
                              Contact Details
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                              variant="body41"
                            >
                              Easily share downloadable contact details
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 md:flex-col flex-row gap-[22px] items-center justify-between my-[0] w-[100%]">
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[22px] items-center justify-between md:w-[100%] w-[67%]">
                          <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_volume_black_900.svg"
                              className="h-[56px] rounded-[10px] w-[56px]"
                              alt="volume"
                            />
                            <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] sm:pr-[20px] pr-[210.33px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                variant="body33"
                              >
                                Community
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                variant="body41"
                              >
                                Build an SMS subscriber list
                              </Text>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                            <Img
                              src="images/img_close_bluegray_51.svg"
                              className="h-[56px] rounded-[10px] w-[56px]"
                              alt="close"
                            />
                            <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[130.33px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                                variant="body33"
                              >
                                Gleam
                              </Text>
                              <Text
                                className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                                variant="body41"
                              >
                                Run campaigns to grow your audience
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_menu_deep_purple_900.svg"
                            className="h-[56px] rounded-[10px] w-[56px]"
                            alt="menu"
                          />
                          <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[106.34px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                            <Text
                              className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                              variant="body33"
                            >
                              Contact Form
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                              variant="body41"
                            >
                              Collect visitor contact info and messages
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pb-[200px] pt-[64px] self-stretch md:w-[100%] w-[auto]">
                <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-bold mb-[44px] text-gray_920 text-left tracking-[-0.32px] w-[auto]"
                    variant="body21"
                  >
                    All Link Apps and Integrations
                  </Text>
                  <a
                    className="font-normal mr-[3px] sm:mt-[0] mt-[2px] not-italic text-[20px] text-blue_701 text-left underline w-[auto]"
                    href="javascript:"
                  >
                    See All
                  </a>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <List
                    className="flex-col gap-[47px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row gap-[22px] items-center justify-between my-[0] w-[100%]">
                      <div className="flex md:flex-1 md:flex-col flex-row gap-[22px] items-center justify-between md:w-[100%] w-[67%]">
                        <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_call.svg"
                            className="h-[56px] rounded-[10px] w-[56px]"
                            alt="call"
                          />
                          <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[172.33px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                            <Text
                              className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                              variant="body33"
                            >
                              OpenSea
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                              variant="body41"
                            >
                              Showcase NFTs on your Linktree
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_signal_green_a704.svg"
                            className="h-[56px] rounded-[10px] w-[56px]"
                            alt="signal"
                          />
                          <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[161.33px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                            <Text
                              className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                              variant="body33"
                            >
                              Spotify
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                              variant="body41"
                            >
                              Share your latest or favorite music
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                        <Img
                          src="images/img_facebook_bluegray_51_56x56.svg"
                          className="h-[56px] rounded-[10px] w-[56px]"
                          alt="facebook"
                        />
                        <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[132.34px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                            variant="body33"
                          >
                            Facebook
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                            variant="body41"
                          >
                            Add Facebook videos to your Linktree
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 md:flex-col flex-row gap-[22px] items-center justify-between my-[0] w-[100%]">
                      <div className="flex md:flex-1 md:flex-col flex-row gap-[22px] items-center justify-between md:w-[100%] w-[67%]">
                        <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_settings_red_a700.svg"
                            className="h-[56px] rounded-[10px] w-[56px]"
                            alt="settings"
                          />
                          <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] pr-[169.33px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                            <Text
                              className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                              variant="body33"
                            >
                              Pinterest
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                              variant="body41"
                            >
                              Showcase Pins, boards and more
                            </Text>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                          <Img
                            src="images/img_user_lime_501.svg"
                            className="h-[56px] rounded-[10px] w-[56px]"
                            alt="user"
                          />
                          <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] sm:pr-[20px] md:pr-[40px] pr-[88.33px] self-stretch sm:w-[100%] w-[auto]">
                            <Text
                              className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                              variant="body33"
                            >
                              Podcasts
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                              variant="body41"
                            >
                              Get more podcast listeners and subscribers
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 sm:flex-col flex-row gap-[16px] items-start justify-start pt-[0.19px] self-stretch sm:w-[100%] w-[auto]">
                        <Img
                          src="images/img_div_blue_701.svg"
                          className="h-[56px] rounded-[10px] w-[56px]"
                          alt="div"
                        />
                        <div className="flex flex-col gap-[1px] items-start justify-start pb-[2.39px] sm:pr-[20px] pr-[214.34px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
                          <Text
                            className="font-bold text-gray_920 text-left tracking-[-0.20px] w-[auto]"
                            variant="body33"
                          >
                            Tip Jar
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_920 text-left tracking-[0.16px] w-[auto]"
                            variant="body41"
                          >
                            Collect tips and raise funds
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_105 flex flex-col gap-[16px] items-center justify-end p-[48px] sm:px-[20px] md:px-[40px] w-[100%]">
            <div className="bg-white_A700 flex flex-col gap-[48px] items-center justify-start max-w-[1276px] mt-[15px] mx-[auto] p-[64px] md:px-[20px] rounded-[16px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                <div className="flex flex-row gap-[8px] items-start justify-start pb-[65px] self-stretch w-[auto]">
                  <Button className="bg-gray_204 cursor-pointer font-normal min-w-[98px] not-italic pb-[19.19px] pl-[24.31px] pr-[27.69px] pt-[17.81px] sm:px-[20px] rounded-[10px] text-[16px] text-center text-gray_920 w-[auto]">
                    Log in
                  </Button>
                  <Button className="bg-purple_A400 cursor-pointer font-normal min-w-[146px] not-italic pb-[19.19px] pl-[24.05px] pr-[29.95px] pt-[17.81px] sm:px-[20px] rounded-[32px] text-[16px] text-center text-white_A700 w-[auto]">
                    Sign up free
                  </Button>
                </div>
                <div className="flex md:flex-1 items-start justify-start pr-[4px] pt-[4px] md:w-[100%] w-[65%]">
                  <div className="flex flex-col items-start justify-start md:w-[100%] w-[87%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        About Linktree
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[161px] not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        Careers
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[203px] not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        Terms and Conditions
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[22px] md:w-[100%] w-[93%]">
                      <Text
                        className="font-normal not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        Blog
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[224px] not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        Getting Started
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[157px] not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        Privacy Policy
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[19px] md:w-[100%] w-[93%]">
                      <Text
                        className="font-normal not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        Press
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[217px] not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        Features and How-Tos
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[113px] not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        Cookie Notice
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[20px] md:w-[100%] w-[91%]">
                      <Text
                        className="font-normal not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        Social Good
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[178px] not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        FAQs
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[220px] not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        Trust Center
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-[20px] md:w-[100%] w-[57%]">
                      <Text
                        className="font-normal not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        Contact
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_920 text-left w-[auto]"
                        variant="body44"
                      >
                        Report a Violation
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between pr-[16px] w-[100%]">
                <Text
                  className="font-normal leading-[21.00px] not-italic text-gray_920 text-left tracking-[0.13px] w-[auto]"
                  variant="body44"
                >
                  We acknowledge the Traditional Custodians of the land on which
                  our office stands, The Wurundjeri people of the Kulin Nation,
                  and pay our respects to Elders past, present and emerging.
                </Text>
                <Img
                  src="images/img_ul_black_900.svg"
                  className="h-[42px] w-[276px]"
                  alt="ul"
                />
              </div>
            </div>
            <div className="bg-yellow_808 flex items-center justify-start max-w-[1276px] mx-[auto] p-[125px] md:px-[20px] rounded-[56px] w-[100%]">
              <Img
                src="images/img_megafooterdesktopsvg.svg"
                className="h-[169px] w-[auto]"
                alt="megafooterdeskt"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CateglgPage;
