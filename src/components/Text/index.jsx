import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-[48px] md:text-[48px] text-[93px]",
  h2: "font-thin text-[9.05px]",
  h3: "text-[9px]",
  h4: "font-extrabold sm:text-[48px] md:text-[48px] text-[88px]",
  h5: "font-normal sm:text-[48px] md:text-[48px] text-[80px]",
  h6: "font-normal sm:text-[48px] md:text-[48px] text-[78px]",
  body1: "font-bold sm:text-[48px] md:text-[48px] text-[76px]",
  body2: "font-bold sm:text-[48px] md:text-[48px] text-[66px]",
  body3: "font-normal sm:text-[48px] md:text-[48px] text-[61px]",
  body4: "font-normal text-[6px]",
  body5: "sm:text-[42px] md:text-[48px] text-[56px]",
  body6: "font-semibold sm:text-[38px] md:text-[44px] text-[52px]",
  body7: "font-semibold sm:text-[39px] md:text-[45px] text-[49px]",
  body8: "sm:text-[38px] md:text-[44px] text-[48px]",
  body9: "font-normal sm:text-[37px] md:text-[43px] text-[47px]",
  body10: "font-normal sm:text-[36px] md:text-[42px] text-[46px]",
  body11: "font-bold sm:text-[31px] md:text-[37px] text-[41px]",
  body12: "sm:text-[36px] md:text-[38px] text-[40px]",
  body13: "font-bold sm:text-[35px] md:text-[37px] text-[39px]",
  body14: "font-bold sm:text-[34.4px] md:text-[36.4px] text-[38.4px]",
  body15: "sm:text-[34px] md:text-[36px] text-[38px]",
  body16: "font-bold sm:text-[33px] md:text-[35px] text-[37px]",
  body17: "font-thin sm:text-[32px] md:text-[34px] text-[36px]",
  body18: "font-semibold sm:text-[31px] md:text-[33px] text-[35px]",
  body19: "sm:text-[30px] md:text-[32px] text-[34px]",
  body20: "sm:text-[29px] md:text-[31px] text-[33px]",
  body21: "sm:text-[28px] md:text-[30px] text-[32px]",
  body22: "font-semibold sm:text-[27px] md:text-[29px] text-[31px]",
  body23: "sm:text-[26px] md:text-[28px] text-[30px]",
  body24: "sm:text-[24px] md:text-[26px] text-[28px]",
  body25: "font-semibold sm:text-[23.2px] md:text-[25.2px] text-[27.2px]",
  body26: "font-medium sm:text-[22px] md:text-[24px] text-[26px]",
  body27: "font-light sm:text-[21px] md:text-[23px] text-[25px]",
  body28: "sm:text-[20px] md:text-[22px] text-[24px]",
  body29: "sm:text-[19px] md:text-[21px] text-[23px]",
  body30: "font-normal sm:text-[18.4px] md:text-[20.4px] text-[22.4px]",
  body31: "sm:text-[18px] md:text-[20px] text-[22px]",
  body32: "sm:text-[17px] md:text-[19px] text-[21px]",
  body33: "text-[20px]",
  body34: "text-[19.2px]",
  body35: "text-[19px]",
  body36: "font-thin text-[18.72px]",
  body37: "text-[18px]",
  body38: "font-semibold text-[17.6px]",
  body39: "text-[17px]",
  body40: "font-normal text-[160px] sm:text-[48px] md:text-[48px]",
  body41: "text-[16px]",
  body42: "text-[15px]",
  body43: "text-[14px]",
  body44: "text-[13px]",
  body45: "font-normal text-[125px] sm:text-[48px] md:text-[48px]",
  body46: "text-[12.8px]",
  body47: "text-[12px]",
  body48: "font-thin text-[11.05px]",
  body49: "text-[11px]",
  body50: "font-thin text-[10.05px]",
  body51: "text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
