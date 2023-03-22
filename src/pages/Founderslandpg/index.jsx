import React from "react";

import { Img, Text, Button, Slider, Input } from "components";
import { CloseSVG } from "../../assets/images";

const FounderslandpgPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const [inputvalue2, setInputvalue2] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gray_103 flex items-start justify-start sm:px-[20px] px-[310px] md:px-[40px] self-stretch md:w-[100%] w-[auto]">
          <div className="flex flex-col gap-[55px] justify-start w-[100%]">
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[100px] md:w-[100%] w-[94%]">
              <div className="md:h-[550px] h-[554px] relative w-[100%]">
                <div className="absolute flex flex-row gap-[20px] md:hidden items-end justify-start left-[0] pb-[55px] sm:pr-[20px] md:pr-[40px] pr-[55px] top-[18%] w-[73%]">
                  <Img
                    src="images/img_arrowup.svg"
                    className="h-[60px] w-[60px]"
                    alt="arrowup"
                  />
                  <Text
                    className="mb-[3px] mt-[11px] text-black_900_dd text-left w-[auto]"
                    variant="body16"
                  >
                    Startup School
                  </Text>
                </div>
                <div className="absolute bottom-[0] sm:bottom-[11px] flex flex-col sm:gap-[1px] gap-[27px] sm:h-[700px] items-center justify-start left-[0] sm:left-[1px] sm:m-[22px] sm:max-h-[] sm:max-w-[] sm:min-h-[44px] sm:min-w-[] sm:pl-[2px] sm:pr-[11px] sm:py-[2px] sm:relative sm:right-[11px] sm:top-[1px] sm:w-[299px] w-[37%]">
                  <Text
                    className="font-normal leading-[60.00px] not-italic text-gray_916 text-left sm:w-[100%] w-[99%]"
                    variant="body12"
                  >
                    Learn how to start a company, with help from the world&#39;s
                    top startup accelerator - Y Combinator.
                  </Text>
                  <div className="flex items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                    <Text
                      className="font-bold leading-[36.00px] md:max-w-[100%] max-w-[522px] text-deep_orange_501 text-left"
                      variant="body28"
                    ></Text>
                  </div>
                </div>
                <Img
                  src="images/img_worldmapsvg.svg"
                  className="absolute h-[550px] inset-y-[0] my-[auto] sm:p-[11px] right-[0] w-[auto]"
                  alt="worldmapsvg"
                />
              </div>
              <div className="flex flex-row gap-[29px] items-center justify-start mt-[55px] sm:pr-[20px] md:pr-[40px] pr-[851px] md:w-[100%] w-[73%]">
                <Button className="bg-deep_orange_501 cursor-pointer font-normal min-w-[168px] not-italic pb-[15.84px] pl-[50px] pr-[50.17px] pt-[14px] sm:px-[20px] md:px-[40px] rounded-[6px] text-[19px] text-center text-white_A700 w-[auto]">
                  Sign up
                </Button>
                <a
                  className="font-normal not-italic text-[16px] text-deep_orange_501 text-left underline w-[auto]"
                  href="javascript:"
                >
                  Sign in
                </a>
              </div>
              <Text
                className="font-normal leading-[36.00px] mt-[70px] not-italic text-black_900_dd text-left sm:w-[100%] w-[73%]"
                variant="body28"
              >
                Get advice based on 15 years of YC&#39;s knowledge, stay
                accountable for weekly progress, and find your co-founder.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start md:w-[100%] w-[81%]">
              <div className="bg-gray_917 flex flex-col items-start justify-start p-[57px] sm:px-[20px] md:px-[40px] w-[100%]">
                <Text
                  className="font-medium md:ml-[0] ml-[42px] text-deep_orange_301 text-left w-[auto]"
                  variant="body21"
                >
                  How Startup School works
                </Text>
                <div className="flex flex-col gap-[10px] items-start justify-start md:ml-[0] ml-[42px] mt-[4px] sm:pl-[20px] pl-[40px] pr-[2.14px] py-[10px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold leading-[33.00px] md:max-w-[100%] max-w-[1057px] text-left text-white_A700"
                    variant="body31"
                  >
                    Get the essential advice for ambitious startup founders,
                    taught by Y Combinator partners and industry leaders.
                  </Text>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body32"
                  >
                    Go at your own pace. It will take approximately 7 weeks if
                    you spend 1-2 hours/week.
                  </Text>
                </div>
                <Text
                  className="font-medium md:ml-[0] ml-[42px] mt-[29px] text-deep_orange_301 text-left w-[auto]"
                  variant="body21"
                >
                  Who is Startup School for?
                </Text>
                <Text
                  className="font-bold leading-[33.00px] mb-[24px] md:ml-[0] ml-[82px] mt-[14px] text-left text-white_A700 sm:w-[100%] w-[84%]"
                  variant="body31"
                >
                  It’s for anyone at the early stages of building a startup,
                  turning a side project into a company, or anyone curious to
                  learn about becoming a founder.
                </Text>
              </div>
              <div className="flex flex-col gap-[17px] items-center justify-start mt-[150px] pt-[6px] px-[6px] md:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-black_900_dd text-center w-[auto]"
                  variant="body20"
                >
                  The YC Curriculum
                </Text>
                <Text
                  className="font-normal leading-[36.00px] not-italic text-center text-gray_603 sm:w-[100%] w-[95%]"
                  variant="body28"
                >
                  Learn how to build a top startup - from the same people who
                  helped Airbnb, Doordash, Stripe, Reddit, and Coinbase get
                  started.
                </Text>
              </div>
              <div className="flex flex-col mt-[70px] relative md:w-[100%] w-[85%]">
                <div className="flex items-start justify-start mx-[auto] p-[15px] w-[100%]">
                  <div className="flex items-center justify-start md:ml-[0] ml-[10px] md:w-[100%] w-[94%]">
                    <div className="md:gap-[20px] gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[6px] items-center justify-start pb-[29px] rounded-[6px] shadow-bs8 w-[100%]">
                        <Img
                          src="images/img_michaeljpg.png"
                          className="h-[180px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"
                          alt="michaeljpg"
                        />
                        <div className="flex flex-col gap-[13px] items-start justify-start p-[17px] w-[100%]">
                          <Text
                            className="font-bold md:ml-[0] ml-[12px] text-black_900 text-left w-[auto]"
                            variant="body42"
                          >
                            How to Plan your MVP
                          </Text>
                          <Text
                            className="font-normal leading-[22.00px] md:ml-[0] ml-[12px] not-italic text-black_900 text-left sm:w-[100%] w-[79%]"
                            variant="body43"
                          >
                            Michael Seibel, YC Partner & Co-Founder of Twitch
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[6px] items-center justify-start pb-[52px] rounded-[6px] shadow-bs8 w-[100%]">
                        <Img
                          src="images/img_carolynnpng.png"
                          className="h-[180px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"
                          alt="carolynnpng"
                        />
                        <div className="flex flex-col gap-[14px] items-start justify-start p-[17px] w-[100%]">
                          <Text
                            className="font-bold md:ml-[0] ml-[12px] text-black_900 text-left w-[auto]"
                            variant="body42"
                          >
                            Modern Startup Funding
                          </Text>
                          <Text
                            className="font-normal md:ml-[0] ml-[12px] not-italic text-black_900 text-left w-[auto]"
                            variant="body44"
                          >
                            Carolynn Levy, inventor of the SAFE
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[6px] items-center justify-start pb-[29px] rounded-[6px] shadow-bs8 w-[100%]">
                        <Img
                          src="images/img_katpng.png"
                          className="h-[180px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"
                          alt="katpng"
                        />
                        <div className="flex flex-col gap-[16px] items-start justify-start p-[16px] w-[100%]">
                          <Text
                            className="font-bold leading-[22.00px] md:ml-[0] ml-[14px] text-black_900 text-left sm:w-[100%] w-[84%]"
                            variant="body41"
                          >
                            How to Launch your Company in the Press
                          </Text>
                          <Text
                            className="font-normal mb-[2px] md:ml-[0] ml-[14px] not-italic text-black_900 text-left w-[auto]"
                            variant="body44"
                          >
                            Kat Manalac, YC Head of Outreach
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[6px] items-center justify-start pb-[29px] rounded-[6px] shadow-bs8 w-[100%]">
                        <Img
                          src="images/img_gustafpng.png"
                          className="h-[180px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"
                          alt="gustafpng"
                        />
                        <div className="flex flex-col gap-[14px] items-start justify-start p-[16px] w-[100%]">
                          <Text
                            className="font-bold md:ml-[0] ml-[13px] text-black_900 text-left w-[auto]"
                            variant="body42"
                          >
                            How to Get Users and Grow
                          </Text>
                          <Text
                            className="font-normal leading-[22.00px] mb-[2px] md:ml-[0] ml-[13px] not-italic text-black_900 text-left sm:w-[100%] w-[80%]"
                            variant="body44"
                          >
                            Gustaf Alstromer, YC Partner & Former Head of Growth
                            at Airbnb
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[6px] items-center justify-start pb-[29px] rounded-[6px] shadow-bs8 w-[100%]">
                        <Img
                          src="images/img_alijpg.png"
                          className="h-[180px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"
                          alt="alijpg"
                        />
                        <div className="flex flex-col gap-[14px] items-start justify-start p-[16px] w-[100%]">
                          <Text
                            className="font-bold md:ml-[0] ml-[13px] text-black_900 text-left w-[auto]"
                            variant="body42"
                          >
                            How to Lead Teams
                          </Text>
                          <Text
                            className="font-normal leading-[22.00px] mb-[2px] md:ml-[0] ml-[13px] not-italic text-black_900 text-left sm:w-[100%] w-[89%]"
                            variant="body43"
                          >
                            Ali Rowghani, CFO of Pixar & COO of Twitter
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[6px] items-center justify-start pb-[6px] rounded-[6px] shadow-bs8 w-[100%]">
                        <Img
                          src="images/img_daltonpng.png"
                          className="h-[180px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"
                          alt="daltonpng"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start p-[16px] w-[100%]">
                          <Text
                            className="font-bold leading-[22.00px] md:ml-[0] ml-[14px] text-black_900 text-left sm:w-[100%] w-[83%]"
                            variant="body41"
                          >
                            How and When to Apply to Y Combinator
                          </Text>
                          <Text
                            className="font-normal leading-[22.00px] mb-[2px] md:ml-[0] ml-[14px] not-italic text-black_900 text-left sm:w-[100%] w-[85%]"
                            variant="body43"
                          >
                            Dalton Caldwell, YC Partner & Head of Admissions
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[6px] items-center justify-start pb-[6px] rounded-[6px] shadow-bs8 w-[100%]">
                        <Img
                          src="images/img_markjpg.png"
                          className="h-[180px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"
                          alt="markjpg"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start p-[16px] w-[100%]">
                          <Text
                            className="font-bold leading-[22.00px] md:ml-[0] ml-[14px] text-black_900 text-left sm:w-[100%] w-[63%]"
                            variant="body41"
                          >
                            The Founding Story of Facebook
                          </Text>
                          <Text
                            className="font-normal leading-[22.00px] mb-[2px] md:ml-[0] ml-[14px] not-italic text-black_900 text-left sm:w-[100%] w-[86%]"
                            variant="body43"
                          >
                            Mark Zuckerberg, Founder and CEO of Facebook
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[6px] items-center justify-start pb-[6px] rounded-[6px] shadow-bs8 w-[100%]">
                        <Img
                          src="images/img_annejpg.png"
                          className="h-[180px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"
                          alt="annejpg"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start p-[16px] w-[100%]">
                          <Text
                            className="font-bold leading-[22.00px] md:ml-[0] ml-[14px] text-black_900 text-left sm:w-[100%] w-[67%]"
                            variant="body41"
                          >
                            On Starting and Scaling 23andMe
                          </Text>
                          <Text
                            className="font-normal leading-[22.00px] mb-[2px] md:ml-[0] ml-[14px] not-italic text-black_900 text-left sm:w-[100%] w-[87%]"
                            variant="body43"
                          >
                            Anne Wojcicki, Co-Founder and CEO of 23andMe
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col gap-[6px] items-center justify-start pb-[6px] rounded-[6px] shadow-bs8 w-[100%]">
                        <Img
                          src="images/img_boomjpg.png"
                          className="h-[180px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[6px] rounded-tr-[6px] w-[100%]"
                          alt="boomjpg"
                        />
                        <div className="flex flex-col gap-[15px] items-start justify-start p-[16px] w-[100%]">
                          <Text
                            className="font-bold leading-[22.00px] md:ml-[0] ml-[14px] text-black_900 text-left sm:w-[100%] w-[77%]"
                            variant="body41"
                          >
                            Boom: A Startup Building a Supersonic Jet
                          </Text>
                          <Text
                            className="font-normal leading-[22.00px] mb-[2px] md:ml-[0] ml-[14px] not-italic text-black_900 text-left sm:w-[100%] w-[80%]"
                            variant="body43"
                          >
                            Blake Scholl, Founder and CEO of Boom
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-[-50px] mx-[auto] w-[100%] z-[1]">
                  <div className="flex items-start justify-start pb-[10px] pr-[0.02px] self-stretch md:w-[100%] w-[auto]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start sm:pr-[20px] pr-[363px] md:pr-[40px] self-stretch w-[auto]">
                      <div className="flex items-start justify-start p-[40px] sm:px-[20px] w-[100%]">
                        <div className="flex flex-col justify-start mb-[194px] mt-[84px] md:w-[100%] w-[91%]">
                          <Text
                            className="font-bold md:ml-[0] ml-[103px] text-gray_916 text-left w-[auto]"
                            variant="body31"
                          >
                            Alumni Stories
                          </Text>
                          <div className="flex sm:flex-col flex-row sm:gap-[40px] gap-[68px] items-start justify-start mt-[24px] w-[100%]">
                            <Img
                              src="images/img_arrowleft_gray_603.svg"
                              className="h-[35px] sm:mt-[0] mt-[134px] w-[35px]"
                              alt="arrowleft"
                            />
                            <Text
                              className="sm:flex-1 font-normal leading-[36.00px] not-italic text-gray_603 text-left sm:w-[100%] w-[83%]"
                              variant="body39"
                            >
                              &quot;I trust Startup School to give me high
                              quality content without having to sift through a
                              lot. If you Google a question about startups,
                              you&#39;ll come up with a bunch of stuff that is a
                              terrible use of time. I trust that someone at Y
                              Combinator has already dedicated attention to
                              curating this content.&quot;
                            </Text>
                          </div>
                          <Text
                            className="font-bold md:ml-[0] ml-[218px] mt-[32px] text-gray_603 text-left w-[auto]"
                            variant="body31"
                          >
                            - Tony Xiao (Collections, YC 2012)
                          </Text>
                        </div>
                      </div>
                      <div className="flex h-[230px] items-center justify-start shadow-bs9 w-[230px]">
                        <Img
                          src="images/img_tonyxiaojpg.png"
                          className="h-[230px] md:h-[auto] object-cover w-[230px]"
                          alt="tonyxiaojpg"
                        />
                      </div>
                      <Img
                        src="images/img_arrowleft_gray_603.svg"
                        className="h-[35px] w-[35px]"
                        alt="arrowleft_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_917 flex flex-col gap-[1px] items-start justify-start pb-[72px] pt-[49px] px-[100px] sm:px-[20px] md:px-[40px] self-stretch md:w-[100%] w-[auto]">
                <Text
                  className="font-medium text-deep_orange_301 text-left w-[auto]"
                  variant="body21"
                >
                  Also part of Startup School:
                </Text>
                <div className="flex flex-col gap-[10px] items-start justify-start pl-[40px] md:pr-[40px] pr-[78.44px] sm:px-[20px] py-[10px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold leading-[33.00px] md:max-w-[100%] max-w-[981px] text-left text-white_A700"
                    variant="body31"
                  >
                    YC Co-Founder Matching: the world’s largest co-founder
                    matching platform, with over 100,000 matches made
                  </Text>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body32"
                  >
                    Discounts on popular products from companies like AWS, Brex,
                    and Stripe
                  </Text>
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body32"
                  >
                    A weekly update tool to track your growth and progress
                  </Text>
                </div>
              </div>
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 2 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[0.30]"
                magnifiedIndex={1}
                centerMode
                ref={sliderRef}
                className="mt-[80px] w-[85%]"
                items={[...Array(6)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex flex-col items-center justify-end mx-[10px]">
                      <Text
                        className="font-bold text-center text-gray_916 w-[auto]"
                        variant="body19"
                      >
                        How co-founder matching works:
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-end mt-[43px] sm:pl-[20px] pl-[345px] md:pl-[40px] w-[100%]">
                        <Img
                          src="images/img_arrowright_black_900.svg"
                          className="h-[24px] w-[auto]"
                          alt="arrowright"
                        />
                        <div className="bg-white_A700 flex md:flex-1 flex-col gap-[18px] justify-start md:ml-[0] ml-[19px] p-[20px] rounded-[5px] md:w-[100%] w-[44%]">
                          <Input
                            value={inputvalue2}
                            onChange={(e) => setInputvalue2(e?.target?.value)}
                            wrapClassName="border-b-[2px] border-deep_orange_301 border-solid flex pl-[11px] pr-[35px] w-[100%]"
                            className="font-bold p-[0] placeholder:text-black_900_dd sm:pr-[20px] text-[15px] text-black_900_dd text-center w-[100%]"
                            name="div"
                            placeholder="See potential co-founders"
                            prefix={
                              <div className="sm:w-[100%] sm:mx-[0] w-[8%]">
                                <Img
                                  src="images/img_search_deep_orange_301.svg"
                                  className="cursor-pointer my-[auto]"
                                  alt="search"
                                />
                              </div>
                            }
                            suffix={
                              <CloseSVG
                                className="cursor-pointer my-[auto]"
                                onClick={() => setInputvalue2("")}
                                color="#dd000000"
                                style={{
                                  visibility:
                                    inputvalue2?.length <= 0
                                      ? "hidden"
                                      : "visible",
                                }}
                              />
                            }
                          ></Input>
                          <Text
                            className="font-normal italic leading-[22.00px] md:ml-[0] ml-[20px] text-black_900_dd text-left sm:w-[100%] w-[78%]"
                            variant="body42"
                          >
                            We’ll show you candidates best suited for you based
                            on your requirements and preferences
                          </Text>
                        </div>
                        <Img
                          src="images/img_arrowright_black_900.svg"
                          className="h-[24px] md:ml-[0] ml-[15px] w-[auto]"
                          alt="arrowright_One"
                        />
                        <div className="bg-white_A700 flex md:flex-1 flex-col gap-[18px] items-center justify-start md:ml-[0] ml-[19px] p-[20px] rounded-[5px] md:w-[100%] w-[44%]">
                          <div className="border-b-[2px] border-deep_orange_301 border-solid flex flex-row gap-[15px] items-start justify-start px-[11px] w-[100%]">
                            <Img
                              src="images/img_settings_deep_orange_301.svg"
                              className="h-[24px] mb-[4px] w-[24px]"
                              alt="settings"
                            />
                            <Text
                              className="font-bold mt-[2px] text-black_900_dd text-center w-[auto]"
                              variant="body42"
                            >
                              Connect with your matches
                            </Text>
                          </div>
                          <Text
                            className="font-normal italic leading-[22.00px] text-black_900_dd text-left sm:w-[100%] w-[86%]"
                            variant="body42"
                          >
                            Send invitations to founders that seem like a good
                            fit, and explore the possibility of working together
                          </Text>
                        </div>
                      </div>
                      <a
                        className="font-bold mt-[40px] text-[19px] text-center text-deep_orange_301 underline w-[auto]"
                        href="javascript:"
                      >
                        Learn more about co-founder matching
                      </a>
                    </div>
                  </React.Fragment>
                ))}
              />
              <div className="flex flex-col gap-[50px] items-center justify-start mt-[100px] pl-[278.11px] pr-[278.89px] sm:px-[20px] md:px-[40px] self-stretch md:w-[100%] w-[auto]">
                <Text
                  className="font-bold text-center text-gray_916 w-[auto]"
                  variant="body23"
                >
                  Learn from the best startup founders
                </Text>
                <Button className="bg-deep_orange_501 cursor-pointer font-normal min-w-[154px] not-italic pb-[15.84px] pl-[50px] pr-[50.53px] pt-[14px] sm:px-[20px] md:px-[40px] rounded-[6px] text-[15px] text-center text-white_A700 w-[auto]">
                  Sign up
                </Button>
              </div>
              <div className="bg-gray_918 flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[100px] p-[100px] sm:px-[20px] md:px-[40px] w-[100%]">
                <Img
                  src="images/img_arrowup.svg"
                  className="h-[30px] hidden w-[30px]"
                  alt="arrowup_One"
                />
                <Text
                  className="font-normal md:ml-[0] ml-[5px] not-italic text-left text-white_A700 w-[auto]"
                  variant="body33"
                >
                  Combinator
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[101px] not-italic text-gray_201 text-left w-[auto]"
                  variant="body43"
                >
                  About
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[62px] not-italic text-gray_201 text-left w-[auto]"
                  variant="body44"
                >
                  Privacy
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[61px] not-italic text-gray_201 text-left w-[auto]"
                  variant="body42"
                >
                  FAQ
                </Text>
                <Text
                  className="font-normal md:ml-[0] ml-[61px] not-italic text-gray_201 text-left w-[auto]"
                  variant="body43"
                >
                  Help
                </Text>
                <Button className="border-[1px] border-solid border-white_A700 cursor-pointer font-normal min-w-[138px] md:ml-[0] ml-[382px] md:mt-[0] my-[2px] not-italic pb-[11.84px] pl-[37px] pr-[37.94px] pt-[10px] sm:px-[20px] rounded-[8px] text-[11px] text-center text-white_A700 w-[auto]">
                  Sign up now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderslandpgPage;
