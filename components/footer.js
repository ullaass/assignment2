import Link from "next/link";

const Footer = () => {
  return (
    <footer className="self-stretch bg-darkslategray-100 flex flex-row items-start justify-between pt-[46px] pb-[45px] pr-[101px] pl-[92px] box-border max-w-full gap-[20px] text-left text-base text-white font-spartan mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[46px] mq750:pr-[50px] mq750:box-border mq1050:flex-wrap mq1050:justify-center">
      <div className="h-[283px] w-[1276px] relative bg-darkslategray-100 hidden max-w-full" />
      <div className="h-[150px] w-[245.8px] flex flex-col items-start justify-start pt-[41px] px-0 pb-0 box-border">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
          loading="lazy"
          src="/grop.png"
          alt=""
        />
      </div>
      <div className="w-[311px] flex flex-row items-start justify-start gap-[124px] mq450:gap-[124px_62px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <div className="relative leading-[30px] inline-block min-w-[82px] z-[1]">
              Find Jobs
            </div>
          </div>
          <div className="relative leading-[30px] inline-block min-w-[123px] z-[1]">
            Career Advice
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <div className="relative leading-[30px] inline-block min-w-[52px] z-[1]">
              About
            </div>
          </div>
          <div className="relative leading-[30px] inline-block min-w-[103px] z-[1]">
            Help Center
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <div className="relative leading-[30px] inline-block min-w-[48px] z-[1]">
            Login
          </div>
          <div className="relative leading-[30px] inline-block min-w-[64px] whitespace-nowrap z-[1]">
            Sign up
          </div>
          <div className="relative leading-[30px] inline-block min-w-[39px] z-[1]">{`T&C`}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
