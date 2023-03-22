import React from "react";

import { Img, Text, PagerIndicator, List } from "components";
import { useNavigate } from "react-router-dom";
import { putUpdateProfile } from "service/api";

const HighPage = () => {
  const [updateprofile, setUpdateprofile] = React.useState();
  const navigate = useNavigate();

  function callApi() {
    const req = {};

    putUpdateProfile(req)
      .then((res) => {
        setUpdateprofile(res?.data);

        navigate("/categ");
      })
      .catch((err) => {
        console.error(err);
        navigate("/shortlandpg");
      });
  }
  function handleNavigate() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate1() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter sm:gap-[40px] md:gap-[40px] gap-[64px] items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col gap-[32px] items-center justify-start md:px-[20px] md:w-[100%] w-[59%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start px-[16px] w-[100%]">
            <Img
              src="images/img_logoblackpng.png"
              className="md:flex-1 h-[25px] sm:h-[auto] object-cover md:w-[100%] w-[13%]"
              alt="logoblackpng"
            />
            <div className="flex md:flex-1 flex-row sm:gap-[20px] items-center sm:justify-between justify-center md:ml-[0] ml-[32px] pr-[18px] py-[18px] md:w-[100%] w-[55%]">
              <Text
                className="common-pointer font-normal not-italic text-bluegray_953 text-left w-[auto]"
                variant="body42"
                onClick={() => navigate("/landpgvone")}
              >
                Play Store
              </Text>
              <Text
                className="common-pointer font-normal ml-[33px] not-italic text-bluegray_953 text-left w-[auto]"
                variant="body42"
                onClick={() => navigate("/shortlandpg")}
              >
                Zoom
              </Text>
              <Text
                className="common-pointer font-normal ml-[31px] not-italic text-bluegray_953 text-left w-[auto]"
                variant="body42"
                onClick={() => navigate("/founderslandpg")}
              >
                WhatsApp
              </Text>
              <Text
                className="common-pointer font-normal ml-[31px] not-italic text-bluegray_953 text-left w-[auto]"
                variant="body42"
                onClick={() => navigate("/lgvtwo")}
              >
                Hangouts
              </Text>
              <Text
                className="common-pointer font-normal ml-[31px] mr-[144px] not-italic text-bluegray_953 text-left w-[auto]"
                variant="body43"
                onClick={() => navigate("/categ")}
              >
                Netflix
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-[25px] items-center justify-between md:w-[100%] w-[30%]">
              <div className="flex items-center justify-start w-[auto]">
                <div
                  className="common-pointer bg-white_A700 border-[1px] border-bluegray_104 border-solid flex items-end justify-start p-[7px] rounded-[16px] w-[100%]"
                  onClick={() => {
                    callApi();
                  }}
                >
                  <div className="flex items-start justify-start mr-[13px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                      variant="body42"
                    >
                      {updateprofile?.message}
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_appcracyenpng.png"
                className="common-pointer h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
                onClick={() => navigate(-1)}
                alt="appcracyenpng"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start px-[16px] w-[100%]">
            <div className="flex items-center justify-start pb-[8px] w-[100%]">
              <div className="bg-white_A700 flex items-center justify-start rounded-[4px] w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
                  <div className="h-[318px] relative md:w-[100%] w-[59%]">
                    <Img
                      src="images/img_playstorebanner3png.png"
                      className="h-[318px] m-[auto] object-cover rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[100%]"
                      alt="playstorebanner"
                    />
                    <PagerIndicator
                      className="common-pointer absolute bottom-[7%] flex h-[44px] right-[5%] w-[268px]"
                      onClick={() => navigate(-1)}
                      count={8}
                      activeCss="inline-block cursor-pointer rounded-[50%] h-[20px] border-white_A700 border-[3px] border-solid w-[20px] relative"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                      selectedWrapperCss="inline-block mx-[12.00px]"
                      unselectedWrapperCss="inline-block mx-[12.00px]"
                    />
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[35px] justify-start md:w-[100%] w-[42%]">
                    <div className="flex flex-col justify-start w-[100%]">
                      <div className="flex items-center justify-end p-[16px] w-[100%]">
                        <div className="flex flex-col items-start justify-start mt-[72px] pt-[2px] md:w-[100%] w-[93%]">
                          <Text
                            className="font-bold text-bluegray_953 text-left w-[auto]"
                            variant="body29"
                          >
                            Google Play Store
                          </Text>
                          <div className="flex flex-row items-start justify-start mt-[4px] w-[100%]">
                            <Img
                              src="images/img_star.svg"
                              className="h-[13px] w-[12px]"
                              alt="star"
                            />
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                              variant="body51"
                            >
                              4.0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[22.00px] md:ml-[0] ml-[32px] mt-[2px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[81%]"
                        variant="body42"
                      >
                        If you have an Android device, then you probably know
                        that to download your apps you need to have the Google
                        Play Store installed. However, you
                      </Text>
                    </div>
                    <div className="flex items-end justify-start md:ml-[0] ml-[32px] pl-[8px] py-[8px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold text-bluegray_953 text-center uppercase w-[auto]"
                        variant="body47"
                      >
                        Download
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start mt-[64px] pb-[8px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="gap-[16px] md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start pb-[18px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_playstorebann.png"
                        className="h-[101px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                        alt="playstorebann"
                      />
                      <div className="flex h-[80px] items-center justify-start ml-[16px] mt-[-24px] rounded-[4px] shadow-bs19 w-[80px] z-[1]">
                        <Img
                          src="images/img_playstorelogo2150x150png.png"
                          className="h-[80px] md:h-[auto] object-cover rounded-[4px] w-[80px]"
                          alt="playstorelogoTwentyOne"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-center justify-start ml-[auto] mr-[16px] mt-[-NaNpx] self-stretch w-[auto] z-[1]">
                        <div className="flex items-start justify-start pb-[0.8px] pr-[20px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_953 text-left w-[auto]"
                            variant="body44"
                          >
                            Google Play Store
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                          <Img
                            src="images/img_star.svg"
                            className="h-[13px] w-[13px]"
                            alt="star"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                            variant="body51"
                          >
                            4.0
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[19.00px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[86%]"
                      variant="body43"
                    >
                      If you have an Android device, then you probably know that
                      to download your apps you need to have the Google Play
                      Store installed. However, you
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start pb-[38px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_zoombanner4300x168jpg.png"
                        className="h-[101px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                        alt="zoombanner4300x"
                      />
                      <div className="flex h-[80px] items-center justify-start ml-[16px] mt-[-24px] rounded-[4px] shadow-bs19 w-[80px] z-[1]">
                        <Img
                          src="images/img_zoomcloudmeet.png"
                          className="h-[80px] md:h-[auto] object-cover rounded-[4px] w-[80px]"
                          alt="zoomcloudmeet"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-center justify-start ml-[auto] mr-[16px] mt-[-NaNpx] self-stretch w-[auto] z-[1]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[33px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_953 text-left w-[auto]"
                            variant="body44"
                          >
                            Zoom Meetings
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                          <Img
                            src="images/img_star.svg"
                            className="h-[13px] w-[13px]"
                            alt="star"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                            variant="body51"
                          >
                            4.0
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[19.00px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[85%]"
                      variant="body44"
                    >
                      If you have a business or you need to create a
                      videoconference to talk to different people, then you need
                      a tool that allows you to
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] justify-start pb-[38px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_minecraftbanne.png"
                        className="h-[101px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                        alt="minecraftbanne"
                      />
                      <div className="flex h-[80px] items-center justify-start ml-[16px] mt-[-24px] rounded-[4px] shadow-bs19 w-[80px] z-[1]">
                        <Img
                          src="images/img_minecraftlogo150x150png.png"
                          className="h-[80px] md:h-[auto] object-cover rounded-[4px] w-[80px]"
                          alt="minecraftlogoFifteen"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-center justify-start ml-[auto] mr-[16px] mt-[-NaNpx] self-stretch w-[auto] z-[1]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[71px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_953 text-left w-[auto]"
                            variant="body44"
                          >
                            Minecraft
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[100%]">
                          <Img
                            src="images/img_star.svg"
                            className="h-[13px] w-[13px]"
                            alt="star"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                            variant="body47"
                          >
                            1.0
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[19.00px] md:ml-[0] ml-[16px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[81%]"
                      variant="body44"
                    >
                      If you are a fan of construction games, Minecraft will be
                      ideal for you. This great game is one of the most famous
                      for many platforms,
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start pb-[38px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_hangoutsbanner4300x168png.png"
                        className="h-[101px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                        alt="hangoutsbannerFour"
                      />
                      <div className="flex h-[80px] items-center justify-start ml-[16px] mt-[-24px] rounded-[4px] shadow-bs19 w-[80px] z-[1]">
                        <Img
                          src="images/img_hangoutslogo150x150png.png"
                          className="h-[80px] md:h-[auto] object-cover rounded-[4px] w-[80px]"
                          alt="hangoutslogo150"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-center justify-start ml-[auto] mr-[16px] mt-[-NaNpx] self-stretch w-[auto] z-[1]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[22px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_953 text-left w-[auto]"
                            variant="body44"
                          >
                            Google Hangouts
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                          <Img
                            src="images/img_star.svg"
                            className="h-[13px] w-[13px]"
                            alt="star"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                            variant="body49"
                          >
                            0
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[19.00px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[87%]"
                      variant="body44"
                    >
                      Communicating with your friends through your mobile device
                      is one of the most important things you can do, so if you
                      want to have a tool
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start pb-[18px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_amongusbanner1300x168png.png"
                        className="h-[101px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                        alt="amongusbannerThirteen"
                      />
                      <div className="flex h-[80px] items-center justify-start ml-[16px] mt-[-24px] rounded-[4px] shadow-bs19 w-[80px] z-[1]">
                        <Img
                          src="images/img_amonguslogo150x150png.png"
                          className="h-[80px] md:h-[auto] object-cover rounded-[4px] w-[80px]"
                          alt="amonguslogo150x"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-center justify-start ml-[auto] mr-[16px] mt-[-NaNpx] self-stretch w-[auto] z-[1]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[67px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_953 text-left w-[auto]"
                            variant="body44"
                          >
                            Among Us
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                          <Img
                            src="images/img_star.svg"
                            className="h-[13px] w-[13px]"
                            alt="star"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                            variant="body51"
                          >
                            5.0
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[19.00px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[85%]"
                      variant="body43"
                    >
                      There are many videogames that you can enjoy on your
                      Smartphone nowadays. In the app store you can find a bunch
                      of entertaining games. But, if
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start pb-[38px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_googleduobann.png"
                        className="h-[101px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                        alt="googleduobann"
                      />
                      <div className="flex h-[80px] items-center justify-start ml-[16px] mt-[-24px] rounded-[4px] shadow-bs19 w-[80px] z-[1]">
                        <Img
                          src="images/img_googleduologo150x150png.png"
                          className="h-[80px] md:h-[auto] object-cover rounded-[4px] w-[80px]"
                          alt="googleduologoFifteen"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-center justify-start ml-[auto] mr-[16px] mt-[-NaNpx] self-stretch w-[auto] z-[1]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[59px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_953 text-left w-[auto]"
                            variant="body44"
                          >
                            Google Duo
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                          <Img
                            src="images/img_star.svg"
                            className="h-[13px] w-[13px]"
                            alt="star"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                            variant="body49"
                          >
                            0
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[19.00px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[85%]"
                      variant="body44"
                    >
                      Video calls connect us with our family and friends, making
                      us feel closer to them no matter how many miles they are
                      apart. Therefore, it is
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start pb-[38px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_wazebanner1300x168png.png"
                        className="h-[101px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                        alt="wazebanner1300x"
                      />
                      <div className="flex h-[80px] items-center justify-start ml-[16px] mt-[-24px] rounded-[4px] shadow-bs19 w-[80px] z-[1]">
                        <Img
                          src="images/img_wazelogo150x150png.png"
                          className="h-[80px] md:h-[auto] object-cover rounded-[4px] w-[80px]"
                          alt="wazelogo150x150"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-center justify-start ml-[auto] mr-[16px] mt-[-NaNpx] self-stretch w-[auto] z-[1]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[97px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_953 text-left w-[auto]"
                            variant="body44"
                          >
                            Waze
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                          <Img
                            src="images/img_star.svg"
                            className="h-[13px] w-[13px]"
                            alt="star"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                            variant="body49"
                          >
                            0
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[19.00px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[86%]"
                      variant="body44"
                    >
                      Navigating through the city can be a challenge without a
                      GPS, especially if you are driving and don’t know what are
                      the best roads to take.
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start pb-[38px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_fortnitebanner4300x168png.png"
                        className="h-[101px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                        alt="fortnitebannerFour"
                      />
                      <div className="flex h-[80px] items-center justify-start ml-[16px] mt-[-24px] rounded-[4px] shadow-bs19 w-[80px] z-[1]">
                        <Img
                          src="images/img_fortnitelogo150x150jpg.png"
                          className="h-[80px] md:h-[auto] object-cover rounded-[4px] w-[80px]"
                          alt="fortnitelogo150"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-center justify-start ml-[auto] mr-[16px] mt-[-NaNpx] self-stretch w-[auto] z-[1]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[82px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_953 text-left w-[auto]"
                            variant="body44"
                          >
                            Fortnite
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                          <Img
                            src="images/img_star.svg"
                            className="h-[13px] w-[13px]"
                            alt="star"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                            variant="body51"
                          >
                            5.0
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[19.00px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[84%]"
                      variant="body43"
                    >
                      If you are a fan of video games you will surely know the
                      game that we have for you today. This has been one of the
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start pb-[57px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_discordbanner4300x168png.png"
                        className="h-[101px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                        alt="discordbannerFortyThree"
                      />
                      <div className="flex h-[80px] items-center justify-start ml-[16px] mt-[-24px] rounded-[4px] shadow-bs19 w-[80px] z-[1]">
                        <Img
                          src="images/img_discordlogo150x150png.png"
                          className="h-[80px] md:h-[auto] object-cover rounded-[4px] w-[80px]"
                          alt="discordlogo150x"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-center justify-start ml-[auto] mr-[16px] mt-[-NaNpx] self-stretch w-[auto] z-[1]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[83px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_953 text-left w-[auto]"
                            variant="body44"
                          >
                            Discord
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                          <Img
                            src="images/img_star.svg"
                            className="h-[13px] w-[13px]"
                            alt="star"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                            variant="body49"
                          >
                            0
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[19.00px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[88%]"
                      variant="body44"
                    >
                      If you like playing videogames online with friends and
                      other people, then you surely know that communication with
                      them is key. To do this, you can
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start pb-[38px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_brawlstarsban.png"
                        className="h-[101px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                        alt="brawlstarsban"
                      />
                      <div className="flex h-[80px] items-center justify-start ml-[16px] mt-[-24px] rounded-[4px] shadow-bs19 w-[80px] z-[1]">
                        <Img
                          src="images/img_brawlstarslogo150x150png.png"
                          className="h-[80px] md:h-[auto] object-cover rounded-[4px] w-[80px]"
                          alt="brawlstarslogoOne"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-center justify-start ml-[auto] mr-[16px] mt-[-NaNpx] self-stretch w-[auto] z-[1]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[61px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_953 text-left w-[auto]"
                            variant="body44"
                          >
                            Brawl stars
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                          <Img
                            src="images/img_star.svg"
                            className="h-[13px] w-[13px]"
                            alt="star"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                            variant="body51"
                          >
                            5.0
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[19.00px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[84%]"
                      variant="body43"
                    >
                      Multiplayer battle games are one of the most downloaded
                      game categories for mobile devices. In these games you can
                      face your friends or people from all
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start pb-[18px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_messagesbanner3300x168png.png"
                        className="h-[101px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                        alt="messagesbannerThree"
                      />
                      <div className="flex h-[80px] items-center justify-start ml-[16px] mt-[-24px] rounded-[4px] shadow-bs19 w-[80px] z-[1]">
                        <Img
                          src="images/img_messageslogo150x150png.png"
                          className="h-[80px] md:h-[auto] object-cover rounded-[4px] w-[80px]"
                          alt="messageslogo150"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-center justify-start ml-[auto] mr-[16px] mt-[-NaNpx] self-stretch w-[auto] z-[1]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[67px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_953 text-left w-[auto]"
                            variant="body44"
                          >
                            Messages
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[100%]">
                          <Img
                            src="images/img_star.svg"
                            className="h-[13px] w-[13px]"
                            alt="star"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                            variant="body47"
                          >
                            1.0
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[19.00px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[87%]"
                      variant="body43"
                    >
                      Every smartphone, especially Android devices have a
                      predetermined application to send or receive messages from
                      friends or family. It has been years in the market, even
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start pb-[57px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col relative w-[100%]">
                      <Img
                        src="images/img_omeglebanner3300x168png.png"
                        className="h-[101px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] w-[100%]"
                        alt="omeglebanner330"
                      />
                      <div className="flex h-[80px] items-center justify-start ml-[16px] mt-[-24px] rounded-[4px] shadow-bs19 w-[80px] z-[1]">
                        <Img
                          src="images/img_omeglelogo150x150png.png"
                          className="h-[80px] md:h-[auto] object-cover rounded-[4px] w-[80px]"
                          alt="omeglelogo150xOne"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-center justify-start ml-[auto] mr-[16px] mt-[-NaNpx] self-stretch w-[auto] z-[1]">
                        <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[83px] self-stretch w-[auto]">
                          <Text
                            className="font-bold text-bluegray_953 text-left w-[auto]"
                            variant="body44"
                          >
                            Omegle
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                          <Img
                            src="images/img_star.svg"
                            className="h-[13px] w-[13px]"
                            alt="star"
                          />
                          <Text
                            className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                            variant="body49"
                          >
                            0
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[19.00px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[85%]"
                      variant="body44"
                    >
                      Have you ever thought how fun could it be to meet people
                      all over the world? However, traveling is not an option
                      for everybody, but you
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[34px] items-start justify-start mt-[64px] w-[100%]">
              <Text
                className="text-bluegray_953 text-left w-[auto]"
                variant="body13"
              >
                Best Games
              </Text>
              <List
                className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-center pb-[8px] w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[8px] rounded-[4px] shadow-bs17 w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex h-[106px] items-center justify-start rounded-[4px] w-[106px]">
                      <Img
                        src="images/img_minecraftlogo150x150png.png"
                        className="h-[106px] md:h-[auto] object-cover rounded-[4px] w-[106px]"
                        alt="minecraftlogoFifteen"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] items-center justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[100%]">
                        <Text
                          className="font-bold text-bluegray_953 text-left w-[auto]"
                          variant="body44"
                        >
                          Minecraft
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <Img
                          src="images/img_star.svg"
                          className="h-[13px] w-[12px]"
                          alt="star"
                        />
                        <Text
                          className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                          variant="body47"
                        >
                          1.0
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[8px] rounded-[4px] shadow-bs17 w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex h-[106px] items-center justify-start rounded-[4px] w-[106px]">
                      <Img
                        src="images/img_amonguslogo150x150png.png"
                        className="h-[106px] md:h-[auto] object-cover rounded-[4px] w-[106px]"
                        alt="amonguslogo150x"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] items-center justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[100%]">
                        <Text
                          className="font-bold text-bluegray_953 text-left w-[auto]"
                          variant="body44"
                        >
                          Among Us
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <Img
                          src="images/img_star.svg"
                          className="h-[13px] w-[12px]"
                          alt="star"
                        />
                        <Text
                          className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                          variant="body51"
                        >
                          5.0
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[8px] rounded-[4px] shadow-bs17 w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex h-[106px] items-center justify-start rounded-[4px] w-[106px]">
                      <Img
                        src="images/img_fortnitelogo150x150jpg.png"
                        className="h-[106px] md:h-[auto] object-cover rounded-[4px] w-[106px]"
                        alt="fortnitelogo150"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] items-center justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[100%]">
                        <Text
                          className="font-bold text-bluegray_953 text-left w-[auto]"
                          variant="body44"
                        >
                          Fortnite
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <Img
                          src="images/img_star.svg"
                          className="h-[13px] w-[12px]"
                          alt="star"
                        />
                        <Text
                          className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                          variant="body51"
                        >
                          5.0
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[8px] rounded-[4px] shadow-bs17 w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex h-[106px] items-center justify-start rounded-[4px] w-[106px]">
                      <Img
                        src="images/img_brawlstarslogo150x150png.png"
                        className="h-[106px] md:h-[auto] object-cover rounded-[4px] w-[106px]"
                        alt="brawlstarslogoOne"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] items-center justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[100%]">
                        <Text
                          className="font-bold text-bluegray_953 text-left w-[auto]"
                          variant="body44"
                        >
                          Brawl stars
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <Img
                          src="images/img_star.svg"
                          className="h-[13px] w-[12px]"
                          alt="star"
                        />
                        <Text
                          className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                          variant="body51"
                        >
                          5.0
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[8px] rounded-[4px] shadow-bs17 w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex h-[106px] items-center justify-start rounded-[4px] w-[106px]">
                      <Img
                        src="images/img_robloxlogo150x150png.png"
                        className="h-[106px] md:h-[auto] object-cover rounded-[4px] w-[106px]"
                        alt="robloxlogo150xOne"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] items-center justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[100%]">
                        <Text
                          className="font-bold text-bluegray_953 text-left w-[auto]"
                          variant="body43"
                        >
                          Roblox
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <Img
                          src="images/img_star.svg"
                          className="h-[13px] w-[12px]"
                          alt="star"
                        />
                        <Text
                          className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                          variant="body49"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[8px] rounded-[4px] shadow-bs17 w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex h-[106px] items-center justify-start rounded-[4px] w-[106px]">
                      <Img
                        src="images/img_sanandreaslogo150x150png.png"
                        className="h-[106px] md:h-[auto] object-cover rounded-[4px] w-[106px]"
                        alt="sanandreaslogoOne"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] items-center justify-start w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-bold text-bluegray_953 text-left w-[auto]"
                          variant="body44"
                        >
                          GTA San Andreas
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <Img
                          src="images/img_star.svg"
                          className="h-[13px] w-[12px]"
                          alt="star"
                        />
                        <Text
                          className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                          variant="body49"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[8px] rounded-[4px] shadow-bs17 w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex h-[106px] items-center justify-start rounded-[4px] w-[106px]">
                      <Img
                        src="images/img_googleplaygam.png"
                        className="h-[106px] md:h-[auto] object-cover rounded-[4px] w-[106px]"
                        alt="googleplaygam"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] items-center justify-start w-[100%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-bold text-bluegray_953 text-left w-[auto]"
                          variant="body44"
                        >
                          Google Play Games
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <Img
                          src="images/img_star.svg"
                          className="h-[13px] w-[12px]"
                          alt="star"
                        />
                        <Text
                          className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                          variant="body49"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[8px] rounded-[4px] shadow-bs17 w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex h-[106px] items-center justify-start rounded-[4px] w-[106px]">
                      <Img
                        src="images/img_awordedlogo150x150png.png"
                        className="h-[106px] md:h-[auto] object-cover rounded-[4px] w-[106px]"
                        alt="awordedlogo150x"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px] items-center justify-start w-[100%]">
                      <div className="flex items-start justify-start w-[100%]">
                        <Text
                          className="font-bold text-bluegray_953 text-left w-[auto]"
                          variant="body44"
                        >
                          Aworded
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <Img
                          src="images/img_star.svg"
                          className="h-[13px] w-[12px]"
                          alt="star"
                        />
                        <Text
                          className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                          variant="body49"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-[29px] items-start justify-start mt-[64px] pt-[3px] w-[100%]">
              <Text
                className="text-bluegray_953 text-left w-[auto]"
                variant="body13"
              >
                Top Communication Apps
              </Text>
              <div className="flex items-center justify-start pb-[8px] w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="gap-[16px] md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start p-[16px] rounded-[4px] shadow-bs17 w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                        <div className="flex h-[64px] items-center justify-start rounded-[4px] w-[64px]">
                          <Img
                            src="images/img_zoomcloudmeet.png"
                            className="h-[64px] md:h-[auto] object-cover rounded-[4px] w-[64px]"
                            alt="zoomcloudmeet"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[49px] self-stretch w-[auto]">
                            <Text
                              className="font-bold text-bluegray_953 text-left w-[auto]"
                              variant="body44"
                            >
                              Zoom Meetings
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                            <Img
                              src="images/img_star.svg"
                              className="h-[13px] w-[13px]"
                              alt="star"
                            />
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                              variant="body51"
                            >
                              4.0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[19.00px] mb-[41px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[97%]"
                        variant="body44"
                      >
                        If you have a business or you need to create a
                        videoconference to talk to different people, then you
                        need a tool that allows you to
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start p-[16px] rounded-[4px] shadow-bs17 w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                        <div className="flex h-[64px] items-center justify-start rounded-[4px] w-[64px]">
                          <Img
                            src="images/img_hangoutslogo150x150png.png"
                            className="h-[64px] md:h-[auto] object-cover rounded-[4px] w-[64px]"
                            alt="hangoutslogo150"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] pr-[38px] self-stretch w-[auto]">
                            <Text
                              className="font-bold text-bluegray_953 text-left w-[auto]"
                              variant="body44"
                            >
                              Google Hangouts
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                            <Img
                              src="images/img_star.svg"
                              className="h-[13px] w-[13px]"
                              alt="star"
                            />
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                              variant="body49"
                            >
                              0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[19.00px] mb-[41px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[99%]"
                        variant="body44"
                      >
                        Communicating with your friends through your mobile
                        device is one of the most important things you can do,
                        so if you want to have a tool
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start p-[16px] rounded-[4px] shadow-bs17 w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                        <div className="flex h-[64px] items-center justify-start rounded-[4px] w-[64px]">
                          <Img
                            src="images/img_googleduologo150x150png.png"
                            className="h-[64px] md:h-[auto] object-cover rounded-[4px] w-[64px]"
                            alt="googleduologoFifteen"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[75px] self-stretch w-[auto]">
                            <Text
                              className="font-bold text-bluegray_953 text-left w-[auto]"
                              variant="body44"
                            >
                              Google Duo
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                            <Img
                              src="images/img_star.svg"
                              className="h-[13px] w-[13px]"
                              alt="star"
                            />
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                              variant="body49"
                            >
                              0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[19.00px] mb-[41px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[97%]"
                        variant="body44"
                      >
                        Video calls connect us with our family and friends,
                        making us feel closer to them no matter how many miles
                        they are apart. Therefore, it is
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start p-[16px] rounded-[4px] shadow-bs17 w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                        <div className="flex h-[64px] items-center justify-start rounded-[4px] w-[64px]">
                          <Img
                            src="images/img_messageslogo150x150png.png"
                            className="h-[64px] md:h-[auto] object-cover rounded-[4px] w-[64px]"
                            alt="messageslogo150"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[83px] self-stretch w-[auto]">
                            <Text
                              className="font-bold text-bluegray_953 text-left w-[auto]"
                              variant="body44"
                            >
                              Messages
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start w-[100%]">
                            <Img
                              src="images/img_star.svg"
                              className="h-[13px] w-[13px]"
                              alt="star"
                            />
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                              variant="body47"
                            >
                              1.0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[19.00px] mb-[2px] not-italic text-bluegray_405 text-left w-[100%]"
                        variant="body43"
                      >
                        Every smartphone, especially Android devices have a
                        predetermined application to send or receive messages
                        from friends or family. It has been years in the market,
                        even
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start p-[16px] rounded-[4px] shadow-bs17 w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                        <div className="flex h-[64px] items-center justify-start rounded-[4px] w-[64px]">
                          <Img
                            src="images/img_omeglelogo150x150png.png"
                            className="h-[64px] md:h-[auto] object-cover rounded-[4px] w-[64px]"
                            alt="omeglelogo150xOne"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[99px] self-stretch w-[auto]">
                            <Text
                              className="font-bold text-bluegray_953 text-left w-[auto]"
                              variant="body44"
                            >
                              Omegle
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                            <Img
                              src="images/img_star.svg"
                              className="h-[13px] w-[13px]"
                              alt="star"
                            />
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                              variant="body49"
                            >
                              0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[19.00px] mb-[22px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[97%]"
                        variant="body44"
                      >
                        Have you ever thought how fun could it be to meet people
                        all over the world? However, traveling is not an option
                        for everybody, but you
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start p-[16px] rounded-[4px] shadow-bs17 w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                        <div className="flex h-[64px] items-center justify-start rounded-[4px] w-[64px]">
                          <Img
                            src="images/img_kiklogo150x150png.png"
                            className="h-[64px] md:h-[auto] object-cover rounded-[4px] w-[64px]"
                            alt="kiklogo150x150p"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[54px] self-stretch w-[auto]">
                            <Text
                              className="font-bold text-bluegray_953 text-left w-[auto]"
                              variant="body44"
                            >
                              Kik Messenger
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                            <Img
                              src="images/img_star.svg"
                              className="h-[13px] w-[13px]"
                              alt="star"
                            />
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                              variant="body49"
                            >
                              0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[19.00px] mb-[2px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[99%]"
                        variant="body43"
                      >
                        Nowadays we have different apps and tools to communicate
                        with other people. You can find in the market several
                        apps with the same function, but if
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-start justify-start p-[16px] rounded-[4px] shadow-bs17 w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                        <div className="flex h-[64px] items-center justify-start rounded-[4px] w-[64px]">
                          <Img
                            src="images/img_housepartylogo150x150png.png"
                            className="h-[64px] md:h-[auto] object-cover rounded-[4px] w-[64px]"
                            alt="housepartylogoOne"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[74px] self-stretch w-[auto]">
                            <Text
                              className="font-bold text-bluegray_953 text-left w-[auto]"
                              variant="body44"
                            >
                              Houseparty
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                            <Img
                              src="images/img_star.svg"
                              className="h-[13px] w-[13px]"
                              alt="star"
                            />
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                              variant="body49"
                            >
                              0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[19.00px] mb-[2px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[95%]"
                        variant="body44"
                      >
                        Communicating with friends and family is really simple
                        nowadays, because we have access to technology and tools
                        that make the whole process very easy. If you
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start p-[16px] rounded-[4px] shadow-bs17 w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                        <div className="flex h-[64px] items-center justify-start rounded-[4px] w-[64px]">
                          <Img
                            src="images/img_messengerlite.png"
                            className="h-[64px] md:h-[auto] object-cover rounded-[4px] w-[64px]"
                            alt="messengerlite"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[50px] self-stretch w-[auto]">
                            <Text
                              className="font-bold text-bluegray_953 text-left w-[auto]"
                              variant="body44"
                            >
                              Messenger Lite
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                            <Img
                              src="images/img_star.svg"
                              className="h-[13px] w-[13px]"
                              alt="star"
                            />
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                              variant="body49"
                            >
                              0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[19.00px] mb-[22px] not-italic text-bluegray_405 text-left w-[100%]"
                        variant="body44"
                      >
                        Social media is a great phenomenon that is happening
                        right now. Everybody has a profile on at least one
                        platform and we all love to post
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-start justify-start p-[16px] rounded-[4px] shadow-bs17 w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                        <div className="flex h-[64px] items-center justify-start rounded-[4px] w-[64px]">
                          <Img
                            src="images/img_linelogo150x150png.png"
                            className="h-[64px] md:h-[auto] object-cover rounded-[4px] w-[64px]"
                            alt="linelogo150x150"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex items-start justify-start pb-[0.8px] pr-[120px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
                            <Text
                              className="font-bold text-bluegray_953 text-left w-[auto]"
                              variant="body43"
                            >
                              Line
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                            <Img
                              src="images/img_star.svg"
                              className="h-[13px] w-[13px]"
                              alt="star"
                            />
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                              variant="body49"
                            >
                              0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[19.00px] mb-[2px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[92%]"
                        variant="body43"
                      >
                        Nowadays communicating with family and friends is really
                        simple. We have so many tools, apps and platforms to do
                        it, and each one is different for
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start p-[16px] rounded-[4px] shadow-bs17 w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                        <div className="flex h-[64px] items-center justify-start rounded-[4px] w-[64px]">
                          <Img
                            src="images/img_whatsapplogo150x150png.png"
                            className="h-[64px] md:h-[auto] object-cover rounded-[4px] w-[64px]"
                            alt="whatsapplogo150"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[81px] self-stretch w-[auto]">
                            <Text
                              className="font-bold text-bluegray_953 text-left w-[auto]"
                              variant="body44"
                            >
                              WhatsApp
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                            <Img
                              src="images/img_star.svg"
                              className="h-[13px] w-[13px]"
                              alt="star"
                            />
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                              variant="body49"
                            >
                              0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[19.00px] mb-[22px] not-italic text-bluegray_405 text-left w-[100%]"
                        variant="body47"
                      >
                        We all know that communicating is one of the most
                        important things that our mobile devices allow us to do
                        easily. Thanks to technology we can
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-start justify-start p-[16px] rounded-[4px] shadow-bs17 w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                        <div className="flex h-[64px] items-center justify-start rounded-[4px] w-[64px]">
                          <Img
                            src="images/img_messengerlogo150x150png.png"
                            className="h-[64px] md:h-[auto] object-cover rounded-[4px] w-[64px]"
                            alt="messengerlogoFifteen"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex items-start justify-start pb-[0.8px] pr-[12px] self-stretch w-[auto]">
                            <Text
                              className="font-bold text-bluegray_953 text-left w-[auto]"
                              variant="body44"
                            >
                              Facebook Messenger
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                            <Img
                              src="images/img_star.svg"
                              className="h-[13px] w-[13px]"
                              alt="star"
                            />
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                              variant="body49"
                            >
                              0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[19.00px] mb-[2px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[95%]"
                        variant="body44"
                      >
                        Currently communication has been made much easier thanks
                        to technology. What was difficult or impossible 20 years
                        ago is now as easy as clicking on the
                      </Text>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[15px] items-center justify-start p-[16px] rounded-[4px] shadow-bs17 w-[100%]">
                      <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                        <div className="flex h-[64px] items-center justify-start rounded-[4px] w-[64px]">
                          <Img
                            src="images/img_wechatlogo150x150png.png"
                            className="h-[64px] md:h-[auto] object-cover rounded-[4px] w-[64px]"
                            alt="wechatlogo150xOne"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <div className="flex items-start justify-start pb-[0.8px] sm:pr-[20px] md:pr-[40px] pr-[98px] self-stretch w-[auto]">
                            <Text
                              className="font-bold text-bluegray_953 text-left w-[auto]"
                              variant="body44"
                            >
                              WeChat
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start pb-[2px] pr-[2px] w-[100%]">
                            <Img
                              src="images/img_star.svg"
                              className="h-[13px] w-[13px]"
                              alt="star"
                            />
                            <Text
                              className="font-semibold ml-[3px] text-bluegray_405 text-left w-[auto]"
                              variant="body49"
                            >
                              0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[19.00px] mb-[2px] not-italic text-bluegray_405 text-left sm:w-[100%] w-[99%]"
                        variant="body43"
                      >
                        Communication nowadays is way easier than before because
                        we have different tools to reach out to other people
                        immediately. But, to do this, you definitely need
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[29px] items-start justify-start mt-[64px] pt-[4px] w-[100%]">
              <Text
                className="font-bold text-bluegray_953 text-left w-[auto]"
                variant="body15"
              >
                Categories
              </Text>
              <div className="bg-white_A700 flex items-center justify-start rounded-[4px] shadow-bs17 w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly rounded-[4px] w-[100%]">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 md:w-[100%] w-[88%]"
                    orientation="horizontal"
                  >
                    <div className="border-indigo_50 border-r-[1px] border-solid flex items-center justify-start sm:ml-[0] w-[100%]">
                      <div className="flex flex-col gap-[7px] items-center justify-end my-[31px] p-[2px] w-[100%]">
                        <Text
                          className="font-semibold mt-[47px] text-bluegray_953 text-center w-[auto]"
                          variant="body44"
                        >
                          Apps
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                          variant="body49"
                        >
                          223 apps
                        </Text>
                      </div>
                    </div>
                    <div className="border-indigo_50 border-r-[1px] border-solid flex items-center justify-start sm:ml-[0] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-center justify-end my-[31px] p-[2px] w-[100%]">
                        <Text
                          className="font-semibold mt-[45px] text-bluegray_953 text-center w-[auto]"
                          variant="body43"
                        >
                          Browsers
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                          variant="body49"
                        >
                          3 apps
                        </Text>
                      </div>
                    </div>
                    <div className="border-indigo_50 border-r-[1px] border-solid flex items-center justify-start sm:ml-[0] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-center justify-end my-[31px] p-[2px] w-[100%]">
                        <Text
                          className="font-semibold mt-[46px] text-bluegray_953 text-center w-[auto]"
                          variant="body44"
                        >
                          Communication
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                          variant="body49"
                        >
                          24 apps
                        </Text>
                      </div>
                    </div>
                    <div className="border-indigo_50 border-r-[1px] border-solid flex items-center justify-start sm:ml-[0] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-center justify-end my-[31px] p-[2px] w-[100%]">
                        <Text
                          className="font-semibold mt-[46px] text-bluegray_953 text-center w-[auto]"
                          variant="body44"
                        >
                          Education
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                          variant="body49"
                        >
                          9 apps
                        </Text>
                      </div>
                    </div>
                    <div className="border-indigo_50 border-r-[1px] border-solid flex items-center justify-start sm:ml-[0] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-center justify-end my-[31px] p-[2px] w-[100%]">
                        <Text
                          className="font-semibold mt-[46px] text-bluegray_953 text-center w-[auto]"
                          variant="body44"
                        >
                          Entertainment
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                          variant="body49"
                        >
                          29 apps
                        </Text>
                      </div>
                    </div>
                    <div className="border-indigo_50 border-r-[1px] border-solid flex items-center justify-start sm:ml-[0] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-center justify-end my-[31px] p-[2px] w-[100%]">
                        <Text
                          className="font-semibold mt-[46px] text-bluegray_953 text-center w-[auto]"
                          variant="body44"
                        >
                          Finance
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                          variant="body49"
                        >
                          6 apps
                        </Text>
                      </div>
                    </div>
                    <div className="border-indigo_50 border-r-[1px] border-solid flex items-center justify-start sm:ml-[0] w-[100%]">
                      <div className="flex flex-col gap-[8px] items-center justify-end my-[31px] p-[2px] w-[100%]">
                        <Text
                          className="font-semibold mt-[46px] text-bluegray_953 text-center w-[auto]"
                          variant="body44"
                        >
                          Games
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                          variant="body49"
                        >
                          26 apps
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="border-indigo_50 border-r-[1px] border-solid h-[153px] relative md:w-[100%] w-[13%]">
                    <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] items-center justify-center m-[auto] p-[2px] w-[100%]">
                      <Text
                        className="font-semibold mt-[46px] text-bluegray_953 text-center w-[auto]"
                        variant="body44"
                      >
                        News
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                        variant="body49"
                      >
                        3 apps
                      </Text>
                    </div>
                    <div className="absolute bg-white_A700 flex h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[24%]">
                      <div className="bg-blue_53 h-[153px] w-[100%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start pb-[63px] sm:px-[20px] md:px-[40px] px-[63px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[5px] md:w-[100%] w-[63%]">
            <Img
              src="images/img_appcracyfooterpng.png"
              className="h-[25px] sm:h-[auto] sm:hidden md:ml-[0] ml-[10px] object-cover md:w-[100%] w-[13%]"
              alt="appcracyfooterp"
            />
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:ml-[0] ml-[32px] p-[7px] md:w-[100%] w-[73%]">
              <Text
                className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                variant="body44"
              >
                Disclaimer
              </Text>
              <Text
                className="font-normal sm:ml-[0] ml-[17px] not-italic text-bluegray_405 text-center w-[auto]"
                variant="body44"
              >
                Privacy & Cookie Policy
              </Text>
              <Text
                className="font-normal sm:ml-[0] ml-[15px] not-italic text-bluegray_405 text-center w-[auto]"
                variant="body44"
              >
                DMCA
              </Text>
              <Text
                className="font-normal sm:ml-[0] ml-[16px] not-italic text-bluegray_405 text-center w-[auto]"
                variant="body47"
              >
                Contact
              </Text>
              <Text
                className="font-normal sm:ml-[0] ml-[17px] not-italic text-bluegray_405 text-center w-[auto]"
                variant="body44"
              >
                Uninstall on iOS
              </Text>
              <Text
                className="font-normal sm:ml-[0] ml-[15px] not-italic text-bluegray_405 text-center w-[auto]"
                variant="body44"
              >
                Uninstall on Android
              </Text>
            </div>
            <div className="flex flex-row gap-[36px] items-start justify-start pb-[11.59px] pt-[10px] px-[18px] self-stretch w-[auto]">
              <Img
                src="images/img_facebook_bluegray_405.svg"
                className="common-pointer h-[28px] w-[15px]"
                onClick={handleNavigate}
                alt="facebook"
              />
              <Img
                src="images/img_twitter_bluegray_405.svg"
                className="common-pointer h-[28px] w-[24px]"
                onClick={handleNavigate1}
                alt="twitter"
              />
            </div>
          </div>
          <Text
            className="font-normal mt-[30px] not-italic text-bluegray_405 text-center w-[auto]"
            variant="body47"
          >
            © 2023 Copyright. All Rights reserved. Appcracy.com is not the owner
            of any of the applications reviewed in this portal, all of them
            belong to their respective owners.
          </Text>
          <Img
            src="images/img_fiscalpng.png"
            className="h-[35px] sm:h-[auto] sm:hidden mt-[58px] object-cover md:w-[100%] w-[20%]"
            alt="fiscalpng"
          />
        </div>
      </div>
    </>
  );
};

export default HighPage;
