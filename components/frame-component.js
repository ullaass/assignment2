import { useMemo } from "react";

const FrameComponent = ({
  flatColorIconsgoogle,
  contentWriter,
  googleInc,
  fullTime,
  propWidth,
  propFlex,
  propMinWidth,
  propWidth1,
  propGap,
  propMinWidth1,
  propWidth2,
  propMinWidth2,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  const contentWriterStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const googleIncStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const fullTimeStyle = useMemo(() => {
    return {
      width: propWidth2,
      minWidth: propMinWidth2,
    };
  }, [propWidth2, propMinWidth2]);

  return (
    <div
      className="w-[242px] flex flex-row items-start justify-start gap-[21px] text-center text-base text-black font-spartan"
      style={frameDivStyle}
    >
      <div className="h-[58px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
        <img
          className="w-[52px] h-[52px] relative overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src={flatColorIconsgoogle}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
        <b
          className="w-[130px] relative leading-[30px] inline-block z-[1]"
          style={contentWriterStyle}
        >
          {contentWriter}
        </b>
        <div
          className="self-stretch flex flex-row items-start justify-start gap-[8.5px] text-sm"
          style={frameDiv1Style}
        >
          <div
            className="flex-1 relative leading-[30px] inline-block min-w-[82px] z-[1]"
            style={googleIncStyle}
          >
            {googleInc}
          </div>
          <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
            <div className="w-1 h-1 relative rounded-[50%] bg-orangered-200 z-[1]" />
          </div>
          <div
            className="w-[66px] relative leading-[30px] flex items-center justify-center min-w-[66px] z-[1]"
            style={fullTimeStyle}
          >
            {fullTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
