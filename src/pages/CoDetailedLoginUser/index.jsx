import React from "react";

import { Text, Img, Line, Button, List } from "components";

const CoDetailedLoginUserPage = () => {
  return (
    <>
      <div className="bg-black_900 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-gradient  flex items-center justify-end p-[7px] w-[100%]">
          <Text
            className="font-normal not-italic text-left text-white_A700 w-[auto]"
            variant="body44"
          >
            Zoom Webinar: Learn and enhance your TypeScript skills | 28th March
            2023 | 10 AM PST [10:30 PM IST] Register here
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1216px] mx-[auto] md:px-[20px] w-[100%]">
          <header className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center w-[100%]">
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-[58px] items-center justify-between sm:m-[22px] md:w-[100%] w-[65%]">
              <Img
                src="images/img_62383c8a3006dc7.svg"
                className="h-[23px] w-[auto]"
                alt="62383c8a3006dcSeven"
              />
              <ul className="flex sm:flex-col flex-row gap-[8px] sm:hidden items-start justify-start pl-[4px] pr-[197.38px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] w-[24%]">
                  <div className="flex flex-row gap-[5.25px] items-center justify-start px-[8px] py-[27px]">
                    <a
                      className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700 w-[auto]"
                      href="javascript:"
                    >
                      Products
                    </a>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[10px] w-[10px]"
                      alt="arrowdown"
                    />
                  </div>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[46%]">
                  <div className="flex flex-row gap-[6.52px] items-center justify-start px-[8px] py-[27px]">
                    <a
                      className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700 w-[auto]"
                      href="javascript:"
                    >
                      Resources & Support
                    </a>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[10px] w-[10px]"
                      alt="arrowdown_One"
                    />
                  </div>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[27%]">
                  <div className="flex flex-row gap-[5.19px] items-center justify-start px-[8px] py-[27px]">
                    <a
                      className="cursor-pointer font-normal not-italic text-[15px] text-left text-white_A700 w-[auto]"
                      href="javascript:"
                    >
                      Use Cases
                    </a>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[10px] w-[10px]"
                      alt="arrowdown_Two"
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex md:flex-1 flex-row items-center justify-end md:mt-[0] my-[6px] pl-[14px] py-[14px] md:w-[100%] w-[35%]">
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
          </header>
          <div className="flex flex-col items-start justify-start mt-[100px] pt-[2px] w-[100%]">
            <Text
              className="font-normal not-italic text-blue_A701 text-left uppercase w-[auto]"
              variant="body47"
            >
              Flutter
            </Text>
            <Text
              className="leading-[60.00px] mt-[21px] text-left text-white_A700_e5 sm:w-[100%] w-[86%]"
              variant="body6"
            >
              Build a Flutter application from Figma using Webflow and DhiWise
              in a week.
            </Text>
            <div className="flex flex-row md:gap-[40px] items-center justify-between mt-[39px] w-[100%]">
              <div className="flex flex-row gap-[30px] items-start justify-start self-stretch w-[auto]">
                <div className="flex flex-col gap-[7px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-green_802 text-left w-[auto]"
                    variant="body24"
                  >
                    280
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700_b2 tracking-[0.20px] w-[auto]"
                    variant="body44"
                  >
                    Saved hours
                  </Text>
                </div>
                <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-green_802 text-left w-[auto]"
                    variant="body24"
                  >
                    $8400
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700_b2 tracking-[0.20px] w-[auto]"
                    variant="body44"
                  >
                    Saved money
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-end pl-[16px] w-[7%]">
                <Img
                  src="images/img_63135090553f410.png"
                  className="h-[25px] md:h-[auto] object-cover w-[25px]"
                  alt="63135090553f410"
                />
                <Img
                  src="images/img_61a1f2159cb6fdc.png"
                  className="h-[25px] md:h-[auto] object-cover w-[25px]"
                  alt="61a1f2159cb6fdc"
                />
              </div>
            </div>
            <Img
              src="images/img_62e7b759eddd4e9.png"
              className="h-[649px] sm:h-[auto] mt-[60px] object-cover rounded-[10px] w-[100%]"
              alt="62e7b759eddd4eNine"
            />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[121px] mt-[50px] md:w-[100%] w-[80%]">
              <div className="flex flex-col gap-[20px] items-start justify-start pb-[20px] pr-[13.71px] self-stretch md:w-[100%] w-[auto]">
                <Text
                  className="font-light leading-[26.00px] md:max-w-[100%] max-w-[952px] text-left text-white_A700_b2"
                  variant="body41"
                >
                  The world is changing. And to fit in, businesses need to
                  evolve. From healthcare to entertainment to e-commerce, every
                  vertical in the new age needs mobile app-specific exposure to
                  thrive. And even though we would love to discuss every niche
                  out there, for now, we will focus on ubiquitous e-commerce— a
                  grocery app, to be precise.
                </Text>
                <Text
                  className="font-light leading-[26.00px] md:max-w-[100%] max-w-[954px] text-left text-white_A700_b2"
                  variant="body42"
                >
                  And the reason for picking e-commerce isn’t random. As
                  reported by Statista, the global e-commerce sales (retail
                  only) added up to $4.9 trillion worldwide. And that too in
                  2021 alone. That’s not it— the figures are expected to rise to
                  $7.4 by the end of 2025. Now imagine getting a piece of this
                  rich pie with just a fully functional mobile application at
                  your disposal. Sounds enticing, right?
                </Text>
                <Text
                  className="font-light leading-[26.00px] md:max-w-[100%] max-w-[959px] text-left text-white_A700_b2"
                  variant="body41"
                >
                  But wait, this isn’t an app development tutorial. Well, not
                  exactly. Instead, we would show you how DhiWise has the
                  capability to get your e-commerce business up and running,
                  eliminating grunt work, adding responsiveness, helping you get
                  the most impactful UI/UX in place, and achieving holistic
                  perfection.
                </Text>
                <Text
                  className="font-light text-left text-white_A700_b2 w-[auto]"
                  variant="body42"
                >
                  Trust this experience to be a wholesome one. Sit back and give
                  it a read.
                </Text>
              </div>
              <List
                className="flex-col gap-[20px] grid items-center mt-[20px] w-[100%]"
                orientation="vertical"
              >
                <div className="bg-gradient25  border-l-[4px] border-red_901 border-solid flex md:flex-1 flex-col gap-[20px] items-start justify-start sm:pl-[20px] pl-[24px] pt-[20px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-left text-red_300 tracking-[0.30px] w-[auto]"
                    variant="body29"
                  >
                    The Challenge
                  </Text>
                  <div className="flex flex-col items-start justify-start py-[4px] w-[100%]">
                    <Text
                      className="font-light text-left text-white_A700_b2 w-[auto]"
                      variant="body41"
                    >
                      Building a full-fledged Grocery application and managing
                      the real-time data is not a cakewalk.
                    </Text>
                    <Text
                      className="font-light mt-[26px] text-left text-white_A700_b2 w-[auto]"
                      variant="body41"
                    >
                      A production-ready application’s must-haves are:
                    </Text>
                    <div className="flex flex-col gap-[10px] items-start justify-start mt-[21px] pb-[10px] pl-[40px] md:pr-[40px] pr-[615.8px] sm:px-[20px] self-stretch md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                        variant="body42"
                      >
                        Attractive UI and UX
                      </Text>
                      <Text
                        className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                        variant="body42"
                      >
                        Authorized User-access
                      </Text>
                      <Text
                        className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                        variant="body42"
                      >
                        Accurate live information
                      </Text>
                      <Text
                        className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                        variant="body42"
                      >
                        Seamless Navigations
                      </Text>
                      <Text
                        className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                        variant="body42"
                      >
                        Exception Handling to avoid App-crashes
                      </Text>
                    </div>
                    <Text
                      className="font-light leading-[26.00px] mb-[15px] mt-[10px] text-left text-white_A700_b2 sm:w-[100%] w-[96%]"
                      variant="body41"
                    >
                      This Applications’ feature basket contains Login/SignUp
                      with Google, Facebook, and Email, Categories, Products and
                      their details, Addresses, Cart, and Wishlist.
                    </Text>
                  </div>
                </div>
                <div className="bg-gradient26  border-green_602 border-l-[4px] border-solid flex md:flex-1 flex-col items-start justify-start sm:pl-[20px] pl-[24px] pt-[30px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-green_200_dd text-left tracking-[0.30px] w-[auto]"
                    variant="body31"
                  >
                    The Solution
                  </Text>
                  <div className="flex flex-col items-start justify-start py-[11px] w-[100%]">
                    <Text
                      className="font-medium text-left text-white_A700_f2 w-[auto]"
                      variant="body29"
                    >
                      Webflow
                    </Text>
                    <Text
                      className="font-light leading-[26.00px] mt-[12px] text-left text-white_A700_b2 w-[100%]"
                      variant="body41"
                    >
                      Webflow is a popular no-code Software-as-a-Service, that
                      provides an online visual editor platform that allows
                      users to design, build, and launch websites. As most
                      websites interact with users and live data, for that
                      Webflow provides its in-built CMS where you can store data
                      in collections, and moreover, they provide REST APIs to
                      access those collections.
                    </Text>
                    <div className="bg-gradient27  flex items-start justify-start mt-[20px] pl-[30px] md:pr-[40px] pr-[57.5px] sm:px-[20px] py-[30px] rounded-[10px] self-stretch md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal leading-[32.00px] md:max-w-[100%] max-w-[861px] not-italic text-left text-white_A700_b2"
                        variant="body28"
                      >
                        TL;DR: Webflow provides its super customizable CMS,
                        which you can use to store and retrieve collections of
                        items.
                      </Text>
                    </div>
                    <Text
                      className="font-medium mt-[58px] text-left text-white_A700_f2 w-[auto]"
                      variant="body31"
                    >
                      DhiWise
                    </Text>
                    <Text
                      className="font-light mt-[17px] text-left text-white_A700_b2 w-[auto]"
                      variant="body42"
                    >
                      A sudden thought that might come to your mind, why
                      DhiWise?
                    </Text>
                    <Text
                      className="font-light leading-[26.00px] mt-[22px] text-left text-white_A700_b2 w-[100%]"
                      variant="body42"
                    >
                      DhiWise is a programming platform where developers can
                      convert their designs into developer-friendly code for
                      mobile and web apps. DhiWise automates the application
                      development lifecycle and instantly generates readable,
                      modular, and reusable code.
                    </Text>
                    <Text
                      className="font-light leading-[26.00px] mt-[20px] text-left text-white_A700_b2 sm:w-[100%] w-[98%]"
                      variant="body41"
                    >
                      In addition, unlike other low-code tools, DhiWise takes
                      care of every little customization you can do right from
                      the platform, starting from navigations, back navigations,
                      and Splash screen setup, to bigger customizations like
                      enabling Social and Email Authentication and API
                      integrations.
                    </Text>
                    <Text
                      className="font-light leading-[26.00px] mt-[20px] text-left text-white_A700_b2 sm:w-[100%] w-[99%]"
                      variant="body41"
                    >
                      Furthermore, DhiWise also provides in-built Supabase and
                      Firebase Authentications and Data storage integrations in
                      just a few steps.
                    </Text>
                    <Text
                      className="font-light mb-[11px] mt-[24px] text-left text-white_A700_b2 w-[auto]"
                      variant="body42"
                    >
                      With DhiWise, in its feature basket, it was a cake-walk to
                      build such a demanding application in JUST about 50 Hours.
                    </Text>
                  </div>
                </div>
              </List>
              <div className="bg-white_A700_26 flex md:flex-col flex-row gap-[16px] items-center justify-evenly mt-[30px] p-[10px] rounded-[4px] w-[100%]">
                <Img
                  src="images/img_62a6bab1f15fcae.png"
                  className="md:flex-1 h-[53px] sm:h-[auto] object-cover md:w-[100%] w-[3%]"
                  alt="62a6bab1f15fcae"
                />
                <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700_dd tracking-[0.30px] w-[auto]"
                    variant="body35"
                  >
                    Figma
                  </Text>
                  <Text
                    className="font-normal not-italic text-indigo_401 text-left w-[auto]"
                    variant="body44"
                  >
                    View design
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end mt-[30px] py-[10px] w-[100%]">
                <Text
                  className="font-medium mt-[3px] text-left text-white_A700_f2 w-[auto]"
                  variant="body29"
                >
                  Application Tech Stack
                </Text>
                <div className="flex flex-col gap-[10px] items-start justify-start mt-[10px] pb-[10px] pl-[40px] md:pr-[40px] pr-[729.8px] sm:px-[20px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                    variant="body43"
                  >
                    Flutter
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                    variant="body42"
                  >
                    Webflow CMS APIs
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                    variant="body42"
                  >
                    Authentication with Firebase
                  </Text>
                </div>
                <Text
                  className="font-medium mt-[59px] text-left text-white_A700_f2 w-[auto]"
                  variant="body29"
                >
                  Implementation
                </Text>
                <Text
                  className="font-light mt-[14px] text-left text-white_A700_b2 w-[auto]"
                  variant="body42"
                >
                  If the typical development process is taken into account, the
                  following steps are mandatory.
                </Text>
                <div className="flex flex-col gap-[10px] items-start justify-start mt-[22px] pb-[10px] pl-[40px] md:pr-[40px] pr-[724.8px] sm:px-[20px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                    variant="body42"
                  >
                    Design Development
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                    variant="body42"
                  >
                    Conversion of Design into UX
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                    variant="body42"
                  >
                    User authentication
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                    variant="body42"
                  >
                    App Navigations
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                    variant="body42"
                  >
                    API integrations
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700_b2 w-[auto]"
                    variant="body42"
                  >
                    Business Logic Development
                  </Text>
                </div>
                <Text
                  className="font-light mt-[14px] text-left text-white_A700_b2 w-[auto]"
                  variant="body42"
                >
                  However, it can differ from app to app.
                </Text>
                <Img
                  src="images/img_630d99b32705506.png"
                  className="h-[332px] sm:h-[auto] mt-[22px] object-cover w-[100%]"
                  alt="630d99b32705506"
                />
                <div className="flex items-start justify-start mt-[56px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-light text-left text-white_A700_b2 w-[auto]"
                    variant="body42"
                  ></Text>
                </div>
                <div className="bg-gradient27  flex items-start justify-start mt-[20px] pl-[30px] md:pr-[40px] pr-[53.47px] sm:px-[20px] py-[30px] rounded-[10px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal leading-[32.00px] md:max-w-[100%] max-w-[889px] not-italic text-left text-white_A700_b2"
                    variant="body28"
                  ></Text>
                </div>
                <Text
                  className="font-semibold mt-[106px] text-left text-white_A700 w-[auto]"
                  variant="body20"
                >
                  Features offered by DhiWise
                </Text>
                <Text
                  className="font-medium mt-[18px] text-left text-white_A700_fc tracking-[0.30px] w-[auto]"
                  variant="body35"
                >
                  1. Component Identification and updating
                </Text>
                <Text
                  className="font-light mt-[15px] text-left text-white_A700_b2 w-[auto]"
                  variant="body42"
                >
                  Since the Figma was created in accordance with best practices,
                  the code accuracy was almost 95%.
                </Text>
                <Text
                  className="font-light leading-[26.00px] mt-[22px] text-left text-white_A700_b2 sm:w-[100%] w-[95%]"
                  variant="body41"
                >
                  Despite certain incorrectly recognized components, it was
                  possible to quickly update them from the platform. That
                  resulted in avoiding the time-consuming feedback loop between
                  engineers and designers.
                </Text>
                <Text
                  className="font-medium mt-[70px] text-left text-white_A700_fc tracking-[0.30px] w-[auto]"
                  variant="body35"
                >
                  2. Seamless Navigations
                </Text>
                <Text
                  className="font-light leading-[26.00px] mt-[10px] text-left text-white_A700_b2 sm:w-[100%] w-[98%]"
                  variant="body41"
                >
                  As the designer was smart enough to add the prototype in
                  Figma, DhiWise automatically captured those, and navigations
                  were taken care of.
                </Text>
                <Text
                  className="font-light mt-[24px] text-left text-white_A700_b2 w-[auto]"
                  variant="body41"
                >
                  The back button in the App bar was automatically recognized
                  and back navigation was added.
                </Text>
                <Text
                  className="font-light leading-[26.00px] mt-[21px] text-left text-white_A700_b2 sm:w-[100%] w-[94%]"
                  variant="body42"
                >
                  There was a need to pass arguments from one screen to another.
                  With DhiWise, it was very much possible to do this as well.
                  Particularly for the Product detail page, it was necessary to
                  pass the product&#39;s id from the List screen&#39;s API
                  response.
                </Text>
                <Text
                  className="font-medium mt-[71px] text-left text-white_A700_fc tracking-[0.30px] w-[auto]"
                  variant="body37"
                >
                  3. Splash Screen
                </Text>
                <Text
                  className="font-light mt-[15px] text-left text-white_A700_b2 w-[auto]"
                  variant="body42"
                >
                  As the App had a splash screen as well, it was possible to set
                  it as a “Splash screen” in the application using DhiWise.
                </Text>
                <Text
                  className="font-light mt-[26px] text-left text-white_A700_b2 w-[auto]"
                  variant="body42"
                >
                  Moreover, the navigation from there to the first screen was
                  added along with the delay time.
                </Text>
                <Text
                  className="font-medium mt-[71px] text-left text-white_A700_fc tracking-[0.30px] w-[auto]"
                  variant="body35"
                >
                  4. Authentication
                </Text>
                <Text
                  className="font-light leading-[26.00px] mt-[12px] text-left text-white_A700_b2 w-[100%]"
                  variant="body41"
                >
                  Security in a purchasing app is, obviously, quite important.
                  In order to make it simple for application users to log in
                  using their social media accounts, Social Authentication (With
                  Google and Facebook) was implemented using DhiWise.
                  Additionally, straightforward Email Sign in and Sign Up were
                  also given as alternatives.
                </Text>
                <Text
                  className="font-light mt-[24px] text-left text-white_A700_b2 w-[auto]"
                  variant="body41"
                >
                  Firebase was integrated into the application from DhiWise to
                  manage the authentication.
                </Text>
                <Text
                  className="font-medium mt-[71px] text-left text-white_A700_fc tracking-[0.30px] w-[auto]"
                  variant="body35"
                >
                  5. API Integration
                </Text>
                <Text
                  className="font-light leading-[26.00px] mt-[10px] text-left text-white_A700_b2 w-[100%]"
                  variant="body41"
                >
                  For accessing the Webflow CMS data, all the APIs were
                  integrated into the application using this feature of DhiWise.
                  DhiWise helped in setting up API’s request with params,
                  headers, request body, API’s response binding to the view,
                  storing it in Preference, and handling the status code as
                  well.
                </Text>
                <Text
                  className="font-light mt-[24px] text-left text-white_A700_b2 w-[auto]"
                  variant="body42"
                >
                  Using the combination of these features, 4 screens were
                  configured with live data in just 8 hours.
                </Text>
                <Text
                  className="font-semibold mt-[72px] text-left text-white_A700 w-[auto]"
                  variant="body19"
                >
                  Features Loved By Developers
                </Text>
                <Text
                  className="font-medium mt-[17px] text-left text-white_A700_fc tracking-[0.30px] w-[auto]"
                  variant="body37"
                >
                  1. App Preview
                </Text>
                <div className="flex items-start justify-start mt-[10px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-light leading-[26.00px] md:max-w-[100%] max-w-[913px] text-left text-white_A700_b2"
                    variant="body41"
                  ></Text>
                </div>
                <Text
                  className="font-medium mt-[68px] text-left text-white_A700_fc tracking-[0.30px] w-[auto]"
                  variant="body35"
                >
                  2. Source Code
                </Text>
                <Text
                  className="font-light leading-[26.00px] mt-[12px] text-left text-white_A700_b2 sm:w-[100%] w-[99%]"
                  variant="body42"
                >
                  Developers tend to resist seeing or touching someone else’s
                  code, People at DhiWise, are pretty much intense about the
                  developer experience you get while building any of the apps.
                  It is understood how code quality is the superior thing in
                  development.
                </Text>
                <Text
                  className="font-light mt-[24px] text-left text-white_A700_b2 w-[auto]"
                  variant="body42"
                >
                  That’s why you get full authority over the source code of the
                  application that you build.
                </Text>
                <Text
                  className="font-light leading-[26.00px] mt-[22px] text-left text-white_A700_b2 sm:w-[100%] w-[97%]"
                  variant="body42"
                >
                  And for the source code, you do not have to rely on DhiWise
                  once you build your application. DhiWise prefers the
                  community-accepted libraries and packages inside the generated
                  Flutter mobile application which fits just right! Take GetX as
                  an example.
                </Text>
                <Text
                  className="font-light leading-[26.00px] mt-[20px] text-left text-white_A700_b2 sm:w-[100%] w-[93%]"
                  variant="body41"
                >
                  Also, the application follows MVC architecture which makes it
                  easier for you to customize it and add other features to your
                  application seamlessly.
                </Text>
                <Text
                  className="font-semibold mt-[70px] text-left text-white_A700 w-[auto]"
                  variant="body19"
                >
                  A common thought…
                </Text>
                <Text
                  className="font-light leading-[26.00px] mt-[12px] text-left text-white_A700_b2 sm:w-[100%] w-[96%]"
                  variant="body41"
                >
                  Developers work with rotating requirements and when using
                  no-code/low-code platforms, it might get difficult to manage
                  the changes.
                </Text>
                <Text
                  className="font-light mt-[24px] text-left text-white_A700_b2 w-[auto]"
                  variant="body42"
                >
                  Well, with DhiWise by your side
                </Text>
                <div className="flex flex-col gap-[10px] items-start justify-start mt-[22px] pb-[10px] sm:pl-[20px] pl-[40px] pr-[4.27px] self-stretch md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[928px] not-italic text-left text-white_A700_b2"
                    variant="body41"
                  >
                    If your design changes, you can re-sync the Figma and get
                    the changes. And the screens which are already configured
                    and not changed remain untouchable.
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[927px] not-italic text-left text-white_A700_b2"
                    variant="body41"
                  >
                    As DhiWise lets you take full ownership of the code, It also
                    provides an Extension to get the latest build directly into
                    your favorite IDEs, Visual Studio Code, Android Studio, and
                    IntelliJ.
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-[16px] grid md:grid-cols-1 grid-cols-2 justify-start mt-[40px] sm:pr-[20px] pr-[329.61px] md:pr-[40px] self-stretch md:w-[100%] w-[auto]"
                orientation="horizontal"
              >
                <div className="bg-white_A700_26 flex flex-col gap-[5px] items-start justify-start pb-[13px] pt-[10px] px-[16px] rounded-[4px] self-stretch w-[auto]">
                  <div className="flex flex-row gap-[10px] items-center justify-start pr-[174px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                    <Img
                      src="images/img_61a1f2159cb6fdc.png"
                      className="h-[30px] md:h-[auto] object-cover w-[30px]"
                      alt="61a1f2159cb6fdc"
                    />
                    <Text
                      className="font-semibold text-left text-white_A700_dd tracking-[0.30px] w-[auto]"
                      variant="body35"
                    >
                      GitHub
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-indigo_401 text-left w-[auto]"
                    variant="body44"
                  >
                    View Source Code
                  </Text>
                </div>
                <div className="bg-white_A700_26 flex flex-col gap-[5px] items-start justify-start px-[16px] py-[10px] rounded-[4px] self-stretch w-[auto]">
                  <div className="flex flex-row gap-[10px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_63135090553f410.png"
                      className="h-[30px] md:h-[auto] object-cover w-[30px]"
                      alt="63135090553f410"
                    />
                    <Text
                      className="font-semibold text-left text-white_A700_dd tracking-[0.30px] w-[auto]"
                      variant="body37"
                    >
                      Medium
                    </Text>
                  </div>
                  <Text
                    className="font-normal not-italic text-indigo_401 text-left w-[auto]"
                    variant="body44"
                  >
                    Check the step-by-step guide
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <div className="bg-gray_908 flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[100px] px-[2px] rounded-[20px] w-[100%]">
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
                Signup to use DhiWise, it’s completely free to get started with
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
                alt="61a1f2159cb6fdc_One"
              />
              <Img
                src="images/img_63135090553f410.png"
                className="h-[26px] md:h-[auto] object-cover w-[26px]"
                alt="63135090553f410_One"
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

export default CoDetailedLoginUserPage;
