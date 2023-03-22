import React from "react";

import { Img, Text, Line } from "components";
import { useNavigate } from "react-router-dom";
import {
  putUpdateProfile,
  postRegister,
  postLogin,
  postList,
} from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CategPage = () => {
  const [updateprofile1, setUpdateprofile1] = React.useState();
  const [register, setRegister] = React.useState();
  const [login, setLogin] = React.useState();
  const [login1, setLogin1] = React.useState();
  const [list, setList] = React.useState();
  const [list1, setList1] = React.useState();
  const [updateprofile2, setUpdateprofile2] = React.useState();
  const [updateprofile3, setUpdateprofile3] = React.useState();
  const [updateprofile4, setUpdateprofile4] = React.useState();
  const [updateprofile5, setUpdateprofile5] = React.useState();
  const [updateprofile6, setUpdateprofile6] = React.useState();
  const [updateprofile7, setUpdateprofile7] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    callApi1();
    callApi2();
    callApi3();
    callApi4();
    callApi5();
    callApi6();
    callApi7();
    callApi8();
    callApi9();
    callApi10();
    callApi11();
  }, []);

  function callApi1() {
    const req = {};

    putUpdateProfile(req)
      .then((res) => {
        setUpdateprofile1(res?.data);

        navigate("/shortlandpg");
      })
      .catch((err) => {
        console.error(err);
        navigate("/high");
      });
  }
  function callApi2() {
    const req = {};

    postRegister(req)
      .then((res) => {
        setRegister(res?.data);

        navigate("/shortlandpg");
      })
      .catch((err) => {
        console.error(err);
        navigate("/high");
      });
  }
  function callApi3() {
    const req = {};

    postLogin(req)
      .then((res) => {
        setLogin(res?.data);

        navigate("/high");
      })
      .catch((err) => {
        console.error(err);
        navigate("/shortlandpg");
      });
  }
  function callApi4() {
    const req = {};

    postLogin(req)
      .then((res) => {
        setLogin1(res?.data);

        navigate("/high");
      })
      .catch((err) => {
        console.error(err);
        navigate("/shortlandpg");
      });
  }
  function callApi5() {
    const req = {};

    postList(req)
      .then((res) => {
        setList(res?.data);

        navigate("/high");
      })
      .catch((err) => {
        console.error(err);
        navigate("/high");
      });
  }
  function callApi6() {
    const req = {};

    postList(req)
      .then((res) => {
        setList1(res?.data);

        navigate("/high");
      })
      .catch((err) => {
        console.error(err);
        navigate("/high");
      });
  }
  function callApi7() {
    const req = {};

    putUpdateProfile(req)
      .then((res) => {
        setUpdateprofile2(res?.data);

        navigate("/high");
      })
      .catch((err) => {
        console.error(err);
        toast.error("put api error handle response status with message");
      });
  }
  function callApi8() {
    const req = {};

    putUpdateProfile(req)
      .then((res) => {
        setUpdateprofile3(res?.data);

        navigate("/high");
      })
      .catch((err) => {
        console.error(err);
        toast.error("put api error handle response status with view");
      });
  }
  function callApi9() {
    const req = {};

    putUpdateProfile(req)
      .then((res) => {
        setUpdateprofile4(res?.data);

        navigate("/high");
      })
      .catch((err) => {
        console.error(err);
        toast.error("api error handle response status with view");
      });
  }
  function callApi10() {
    const req = {};

    putUpdateProfile(req)
      .then((res) => {
        setUpdateprofile5(res?.data);

        navigate("/high");
      })
      .catch((err) => {
        console.error(err);
        toast.error("api error with handlestatus ");
      });
  }
  function callApi11() {
    const req = {};

    putUpdateProfile(req)
      .then((res) => {
        setUpdateprofile6(res?.data);

        navigate("/high");
      })
      .catch((err) => {
        console.error(err);
        toast.error("api error");
      });
  }
  function callApi12() {
    const req = {};

    putUpdateProfile(req)
      .then((res) => {
        setUpdateprofile7(res?.data);

        navigate("/high");
      })
      .catch((err) => {
        console.error(err);
        toast.error("api error");
      });
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter justify-start mx-[auto] sm:px-[20px] md:px-[40px] px-[57px] w-[100%]">
        <div className="flex items-center max-w-[1124px] mx-[auto] w-[100%]">
          <div className="flex md:flex-col flex-row gap-[32px] items-center justify-start px-[16px] w-[100%]">
            <Img
              src="images/img_logoblackpng.png"
              className="md:flex-1 h-[25px] sm:h-[auto] object-cover md:w-[100%] w-[13%]"
              alt="logoblackpng"
            />
            <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[20px] items-center justify-center pr-[18px] py-[18px] md:w-[100%] w-[55%]">
              <Text
                className="common-pointer font-normal not-italic text-bluegray_953 text-left w-[auto]"
                variant="body42"
                onClick={() => navigate("/shortlandpg")}
              >
                Play Store
              </Text>
              <Text
                className="common-pointer font-normal sm:ml-[0] ml-[33px] not-italic text-bluegray_953 text-left w-[auto]"
                variant="body42"
                onClick={() => navigate("/landpgvone")}
              >
                Zoom
              </Text>
              <Text
                className="common-pointer font-normal sm:ml-[0] ml-[31px] not-italic text-bluegray_953 text-left w-[auto]"
                variant="body42"
                onClick={() => navigate("/founderslandpg")}
              >
                WhatsApp
              </Text>
              <Text
                className="common-pointer font-normal sm:ml-[0] ml-[31px] not-italic text-bluegray_953 text-left w-[auto]"
                variant="body42"
                onClick={() => navigate("/lgvtwo")}
              >
                Hangouts
              </Text>
              <Text
                className="common-pointer font-normal sm:ml-[0] ml-[31px] mr-[144px] not-italic text-bluegray_953 text-left w-[auto]"
                variant="body43"
                onClick={() => navigate("/categ")}
              >
                Netflix
              </Text>
            </div>
          </div>
        </div>
        <div className="sm:bottom-[] flex flex-col gap-[19px] inset-y-[5px] items-center justify-start left-[222px] sm:left-[] max-w-[] sm:mb-[] min-h-[55px] sm:min-h-[] min-w-[55px] sm:min-w-[] md:ml-[0] ml-[7px] p-[34px] sm:px-[20px] relative right-[-255px] sm:right-[] sm:static sm:top-[] md:w-[100%] w-[53%]">
          <div className="flex flex-row gap-[25px] items-center justify-center md:w-[100%] w-[63%]">
            <div className="flex items-center justify-start w-[83%]">
              <div
                className="common-pointer bg-white_A700 border-[1px] border-bluegray_104 border-solid flex items-end justify-start p-[7px] rounded-[16px] w-[100%]"
                onClick={() => {
                  callApi12();
                }}
              >
                <div className="flex items-start justify-start mr-[13px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                    variant="body42"
                  >
                    Search app
                  </Text>
                </div>
              </div>
            </div>
            <Img
              src="images/img_appcracyenpng.png"
              className="h-[32px] md:h-[auto] rounded-[50%] w-[32px]"
              alt="appcracyenpng"
            />
          </div>
          <div className="flex flex-col gap-[8px] items-center justify-start mb-[199px] md:w-[100%] w-[57%]">
            <div className="flex flex-row items-center justify-between py-[15px] w-[100%]">
              <Line className="bg-bluegray_200_87 h-[1px] my-[9px] w-[27%]" />
              <Text
                className="font-bold text-bluegray_201 text-center uppercase w-[auto]"
                variant="body41"
              >
                {updateprofile1?.message}
              </Text>
              <Line className="bg-bluegray_200_87 h-[1px] my-[9px] w-[27%]" />
            </div>
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="gap-[16px] grid grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="bg-white_A700 flex flex-1 items-center justify-start py-[32px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col gap-[7px] items-center justify-end p-[2px] w-[100%]">
                      <Text
                        className="font-semibold mt-[47px] text-bluegray_953 text-center w-[auto]"
                        variant="body44"
                      >
                        {updateprofile6?.status}
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                        variant="body49"
                      >
                        223 apps
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start py-[32px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-end p-[2px] w-[100%]">
                      <Text
                        className="font-semibold mt-[45px] text-bluegray_953 text-center w-[auto]"
                        variant="body43"
                      >
                        {updateprofile5?.status}
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                        variant="body49"
                      >
                        3 apps
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start py-[32px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-end p-[2px] w-[100%]">
                      <Text
                        className="font-semibold mt-[46px] text-bluegray_953 text-center w-[auto]"
                        variant="body44"
                      >
                        {updateprofile4?.status}
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                        variant="body49"
                      >
                        24 apps
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start py-[32px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-end p-[2px] w-[100%]">
                      <Text
                        className="font-semibold mt-[46px] text-bluegray_953 text-center w-[auto]"
                        variant="body44"
                      >
                        {updateprofile3?.status}
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                        variant="body49"
                      >
                        9 apps
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start py-[32px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-end p-[2px] w-[100%]">
                      <Text
                        className="font-semibold mt-[46px] text-bluegray_953 text-center w-[auto]"
                        variant="body44"
                      >
                        {updateprofile2?.message}
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                        variant="body49"
                      >
                        29 apps
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start py-[32px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-end p-[2px] w-[100%]">
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
                  <div className="bg-white_A700 flex flex-1 items-center justify-start py-[32px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-end p-[2px] w-[100%]">
                      <Text
                        className="font-semibold mt-[46px] text-bluegray_953 text-center w-[auto]"
                        variant="body44"
                      >
                        {list1?.status}
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                        variant="body49"
                      >
                        26 apps
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start py-[32px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-end p-[2px] w-[100%]">
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
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start py-[32px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col gap-[7px] items-center justify-end p-[2px] w-[100%]">
                      <Text
                        className="font-semibold mt-[47px] text-bluegray_953 text-center w-[auto]"
                        variant="body44"
                      >
                        Productivity
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                        variant="body49"
                      >
                        16 apps
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start py-[32px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-end p-[2px] w-[100%]">
                      <Text
                        className="font-semibold mt-[45px] text-bluegray_953 text-center w-[auto]"
                        variant="body43"
                      >
                        Social
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                        variant="body49"
                      >
                        26 apps
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start py-[32px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-end p-[2px] w-[100%]">
                      <Text
                        className="font-semibold mt-[46px] text-bluegray_953 text-center w-[auto]"
                        variant="body44"
                      >
                        Tools
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                        variant="body49"
                      >
                        73 apps
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start py-[32px] rounded-[4px] shadow-bs17 w-[100%]">
                    <div className="flex flex-col gap-[8px] items-center justify-end p-[2px] w-[100%]">
                      <Text
                        className="font-semibold mt-[45px] text-bluegray_953 text-center w-[auto]"
                        variant="body43"
                      >
                        Travel & Local
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_405 text-center w-[auto]"
                        variant="body49"
                      >
                        7 apps
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CategPage;
