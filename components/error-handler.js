const ErrorHandler = () => {
  return (
    <div className="w-[107px] flex flex-col items-end justify-start gap-[5px] text-center text-xs text-black font-spartan">
      <div className="self-stretch relative leading-[30px] font-medium inline-block min-w-[107px] z-[1]">
        Expires in 2 days
      </div>
      <div className="w-[90px] flex flex-row items-start justify-end py-0 px-0.5 box-border text-sm">
        <div className="flex-1 flex flex-row items-start justify-start gap-[1px]">
          <div className="w-[27px] relative leading-[30px] flex items-center justify-center min-w-[27px] z-[1]">
            Fee
          </div>
          <div className="flex-1 flex flex-row items-start justify-start text-base">
            <div className="h-[27px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            ₹
            </div>
            <div className="flex-1 relative leading-[30px] inline-block min-w-[38px] z-[2] ml-[-4px]">
              400
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandler;
