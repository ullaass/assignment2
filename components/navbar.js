import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full h-[83px] !m-[0] sticky top-[0] right-[0px] left-[0px] bg-orangered-200 flex flex-row items-end justify-between pt-2 pb-[8.100000000000023px] pr-[59px] pl-[76px] box-border z-[99] gap-[20px] max-w-full mq750:w-[836.2px] mq750:pl-[38px] mq750:pr-[29px] mq750:box-border">
      <div className="h-[83px] w-[1276px] relative bg-orangered-200 hidden max-w-full" />
      <img
        className="h-[50px] w-[100px] relative z-[3]"
        loading="lazy"
        src="/wfhnav.png"
        alt=""
      />
      <nav className="m-0 w-[439px] flex flex-col items-start justify-end pt-0 px-0 pb-[14px] box-border max-w-full mq750:hidden">
        <nav className="m-0 w-[361px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-xl text-white font-spartan">
          <Link href="#" className="relative leading-[30px] inline-block min-w-[102px] whitespace-nowrap z-[3] text-white no-underline ">
            Find Jobs
          </Link>
          <Link href="#" className="relative leading-[30px] inline-block min-w-[79px] whitespace-nowrap z-[3] text-white no-underline">
            Sign up
          </Link>
          <Link href="#" className="relative leading-[30px] inline-block min-w-[60px] z-[3] text-white no-underline">
            Login
          </Link>
        </nav>
      </nav>
      <div className="w-[88px] flex flex-col items-start justify-end pt-0 px-0 pb-[14px] box-border">
        <div className="self-stretch h-8 flex flex-row items-start justify-between gap-[20px]">
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px] z-[3]"
            loading="lazy"
            src="/carbon_notification.png"
            alt=""
          />
          <img
            className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px] z-[3]"
            loading="lazy"
            src="/gg_profile.png"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
