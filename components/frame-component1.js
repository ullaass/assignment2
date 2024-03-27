import { useMemo } from "react";

const FrameComponent1 = ({ sEO, propWidth, propMinWidth }) => {
  const sEOStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <div className="h-[100.8px] flex flex-col items-start justify-start">
      <button className="cursor-pointer py-2 px-[58px] bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-orangered-200 hover:bg-orangered-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-orangered-100">
        <div className="h-[46px] w-[154px] relative rounded-lg box-border hidden border-[1px] border-solid border-orangered-200" />
        <div
          className="w-[37px] relative text-base leading-[30px] font-semibold font-spartan text-black text-center inline-block min-w-[37px] z-[1]"
          style={sEOStyle}
        >
          {sEO}
        </div>
      </button>
    </div>
  );
};

export default FrameComponent1;
