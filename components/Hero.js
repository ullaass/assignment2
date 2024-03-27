const Hero = () => {
  return (
    <div className="w-[569px] flex flex-col items-end justify-start pt-[59px] px-3.5 pb-[13.799999999999956px] box-border relative gap-[67px] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-21xl text-orangered-200 font-spartan mq450:gap-[17px_67px] mq750:gap-[33px_67px] mq750:pt-[38px] mq750:pb-5 mq750:box-border">
      <img
        className="w-[569px] h-[548px] relative object-cover hidden max-w-full z-[0]"
        alt=""
      />
      <div className="w-[510px] flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[71.5px] w-[63.8px] absolute !m-[0] top-[14px] left-[-33px] object-contain"
          loading="lazy"
          src="/vector3.png"
          alt=""
        />
        <div className="flex-1 flex flex-col items-end justify-start gap-[23px] max-w-full z-[1]">
          <div className="w-[463px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border gap-[19px] max-w-full">
            <div className="w-[432px] h-14 flex flex-row items-start justify-start py-0 px-[74px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="self-stretch flex-1 relative bg-white" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-end">
              <div className="h-[13px] w-[13px] relative">
                <div className="absolute top-[0px] left-[6px] bg-orangered-200 w-0.5 h-[13px]" />
                <div className="absolute top-[7px] left-[0px] bg-orangered-200 w-0.5 h-[13px] [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
              </div>
            </div>
            <h1 className="m-0 w-[416px] relative text-inherit leading-[30px] font-semibold font-inherit inline-block max-w-full mq450:text-5xl mq450:leading-[18px] mq750:text-13xl mq750:leading-[24px]">
              <span>Focus</span>
              <span className="text-darkslategray-100"> on your work</span>
            </h1>
          </div>
          <div className="self-stretch relative text-xl leading-[30px] font-semibold text-black text-center mq450:text-base mq450:leading-[24px]">
            Lorem ipsum it is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. 
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[41px] pl-[39px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
              <div className="bg-white flex flex-row items-start justify-start pt-1.5 px-0 pb-[38px] gap-[16px] mq450:flex-wrap">
                <div className="h-[90px] w-[238px] relative bg-white hidden" />
                <button className="cursor-pointer [border:none] py-2 pr-5 pl-[21px] bg-orangered-200 rounded-lg flex flex-row items-start justify-start whitespace-nowrap hover:bg-orangered-100">
                  <div className="h-[46px] w-[111px] relative rounded-lg bg-orangered-200 hidden" />
                  <div className="w-[70px] relative text-base leading-[30px] font-semibold font-spartan text-white text-center flex items-center justify-center min-w-[70px]">
                    Find job
                  </div>
                </button>
                <button className="cursor-pointer py-2 pr-[13px] pl-3.5 bg-[transparent] rounded-lg flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-orangered-200 hover:bg-orangered-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-orangered-100">
                  <div className="h-[46px] w-[111px] relative rounded-lg box-border hidden border-[1px] border-solid border-orangered-200" />
                  <div className="w-[84px] relative text-base leading-[30px] font-semibold font-spartan text-darkslategray-100 text-center flex items-center justify-center min-w-[84px]">
                    More info
                  </div>
                </button>
              </div>
              <div className="h-[13px] w-[13px] absolute !m-[0] top-[22px] left-[0px]">
                <div className="absolute top-[0px] left-[6px] bg-orangered-200 w-0.5 h-[13px]" />
                <div className="absolute top-[7px] left-[0px] bg-orangered-200 w-0.5 h-[13px] [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
              </div>
              <div className="h-[13px] w-[13px] absolute !m-[0] right-[0px] bottom-[18px]">
                <div className="absolute top-[0px] left-[6px] bg-orangered-200 w-0.5 h-[13px]" />
                <div className="absolute top-[7px] left-[0px] bg-orangered-200 w-0.5 h-[13px] [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[45.2px] h-[45.2px] absolute !m-[0] bottom-[36.8px] left-[29px] object-contain z-[1]"
        loading="lazy"
        // src="/ima.png"
        alt=""
      />
      <div className="w-[445px] flex flex-row items-start justify-end py-0 px-[77px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[31px] mq450:flex-wrap mq450:gap-[31px_15px]">
          <div className="h-[27px] flex-1 relative bg-white min-w-[136px] z-[1]" />
          <div className="h-[45.2px] w-[51px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
            <img
              className="self-stretch h-[36.2px] relative max-w-full overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              src="/Vector5.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
