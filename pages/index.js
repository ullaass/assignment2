import { useCallback } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import ErrorHandler from "../components/error-handler";
import Footer from "../components/footer";

const LandingPage = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Frame 2" to the project
  }, []);

  return (
    <div className="w-full bg-white overflow-hidden ">
      <div className="w-[454px] h-36 relative bg-white hidden max-w-full" />
      <section className="">
        <div className="w-full flex flex-col items-start justify-start pt-0 px-0 pb-10 box-border relative shrink-0 [debug_commit:f6aba90] mq750:pt-[29px] mq750:px-[34px] mq750:pb-[26px] mq750:box-border">
          <div className="w-[481px] h-full !m-[0] absolute top-[0px] right-[75px] bottom-[0px] flex flex-row items-end justify-between pt-[120px] pb-[422.5px] pr-[97px] pl-[131px] box-border bg-[url('/ima.png')] bg-cover bg-no-repeat bg-[top] gap-[20px] max-w-full">
            <img
              className="h-[632px] w-[481px] relative object-cover hidden max-w-full"
              src="/Vector5.png"
              alt=""
            />
            <div className="h-[49px] w-12 relative bg-white hidden" />
           
          </div>
          <Navbar />
          <Hero />
        </div>
       
      </section>
      <section className="w-full flex flex-row items-start justify-center pt-0 px-5 pb-16 box-border max-w-full text-left text-base text-darkslategray-100 font-spartan mq750:pb-[42px] mq750:box-border">
        <div className="w-[966px] flex flex-col items-end justify-start gap-[100.20000000000005px] max-w-full mq750:gap-[25px_100.2px] mq1050:gap-[50px_100.2px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full mq750:gap-[19px_38px]">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[6px] max-w-full">
              <div className="flex-1 rounded-31xl bg-whitesmoke box-border flex flex-row items-end justify-between py-0 pr-0.5 pl-[21px] min-w-[333px] max-w-full gap-[20px] z-[2] border-[1px] border-solid border-lightgray mq450:flex-wrap">
                <div className="self-stretch w-[833px] relative rounded-31xl bg-whitesmoke box-border hidden max-w-full border-[1px] border-solid border-lightgray" />
                <input
                  className="w-[186px] [border:none] [outline:none] bg-[transparent] h-10 flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border font-spartan font-semibold text-base text-darkslategray-200"
                  placeholder="Find your favorite job"
                  type="text"
                  value=""
                />
                <div className="h-[51px] rounded-31xl bg-orangered-200 flex flex-row items-start justify-start pt-[9px] pb-2 pr-[54px] pl-[59px] box-border z-[3]">
                  <div className="h-[51px] w-[147px] relative rounded-31xl bg-orangered-200 hidden" />
                  <img
                    className="h-[34px] w-[34px] relative overflow-hidden shrink-0 z-[4]"
                    src="/search.png"
                    alt=""
                  />
                </div>
              </div>
              <button className="cursor-pointer pt-2.5 px-[21px] pb-[9px] bg-[transparent] h-[51px] rounded-31xl box-border flex flex-row items-end justify-start gap-[6px] z-[2] border-[1px] border-solid border-orangered-200 hover:bg-orangered-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-orangered-100">
                <div className="h-[51px] w-[127px] relative rounded-31xl box-border hidden border-[1px] border-solid border-orangered-200" />
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0 min-h-[32px] z-[3]"
                  alt=""
                  src="/line.png"
                />
                <div className="w-[45px] relative text-base leading-[30px] font-semibold font-spartan text-black text-center flex items-center justify-center min-w-[45px] z-[3]">
                  Filter
                </div>
              </button>
            </div>
            <div className="flex flex-row items-end justify-center py-0 pr-px pl-0 box-border gap-[6px] max-w-full mq1050:flex-wrap">
              <div className="flex flex-col items-start justify-end pt-0 pb-[32.799999999999955px] pr-2 pl-0">
                <div className="relative leading-[30px] font-semibold">
                  <p className="m-0">Popular</p>
                  <p className="m-0">Categories</p>
                </div>
              </div>
              <div className="h-[110.8px] flex flex-col items-start justify-end pt-0 pb-[1.7999999999999543px] pr-[27px] pl-0 box-border">
                <div className="w-0.5 flex-1 relative bg-dimgray" />
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-3 pl-0 gap-[15.099999999999907px]">
                <button className="cursor-pointer py-2 pr-2.5 pl-[11px] bg-[transparent] rounded-lg flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-orangered-200 hover:bg-orangered-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-orangered-100">
                  <div className="h-[46px] w-[133px] relative rounded-lg box-border hidden border-[1px] border-solid border-orangered-200" />
                  <div className="w-28 relative text-sm leading-[30px] font-semibold font-spartan text-black text-center inline-block min-w-[112px] z-[1]">
                    Content Writer
                  </div>
                </button>
                <button className="cursor-pointer pt-[6.900000000000091px] px-[26.799999999999997px] pb-[6.7999999999999545px] bg-[transparent] rounded-[6.91px] flex flex-row items-start justify-start border-[0.9px] border-solid border-orangered-200 hover:bg-orangered-300 hover:box-border hover:border-[0.9px] hover:border-solid hover:border-orangered-100">
                  <div className="h-[39.7px] w-[133px] relative rounded-[6.91px] box-border hidden border-[0.9px] border-solid border-orangered-200" />
                  <div className="w-[78px] relative text-[13.8px] leading-[26px] font-semibold font-spartan text-black text-center inline-block min-w-[78px] z-[1]">
                    Translator
                  </div>
                </button>
              </div>
              <div className="h-[100.8px] flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start gap-[7px]">
                  <button className="cursor-pointer py-2 px-2.5 bg-[transparent] rounded-lg flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-orangered-200 hover:bg-orangered-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-orangered-100">
                    <div className="h-[46px] w-[154px] relative rounded-lg box-border hidden border-[1px] border-solid border-orangered-200" />
                    <div className="w-[133px] relative text-sm leading-[30px] font-semibold font-spartan text-black text-center inline-block z-[1]">
                      Graphic Designer
                    </div>
                  </button>
                  <button className="cursor-pointer py-2 px-[49px] bg-[transparent] rounded-lg flex flex-row items-start justify-start border-[1px] border-solid border-orangered-200 hover:bg-orangered-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-orangered-100">
                    <div className="h-[46px] w-[154px] relative rounded-lg box-border hidden border-[1px] border-solid border-orangered-200" />
                    <div className="w-[54px] relative text-base leading-[30px] font-semibold font-spartan text-black text-center inline-block min-w-[54px] z-[1]">
                      UI/UX
                    </div>
                  </button>
                </div>
              </div>
              <FrameComponent1 sEO="SEO" />
              <FrameComponent1
                sEO="HR Operations"
                propWidth="128px"
                propMinWidth="128px"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[11px] pl-3 box-border max-w-full text-21xl text-orangered-200">
            <div className="flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full">
              <h1 className="m-0 w-[305px] relative text-inherit leading-[30px] font-semibold font-inherit inline-block mq450:text-5xl mq450:leading-[18px] mq750:text-13xl mq750:leading-[24px]">
                <span>Trending</span>
                <span className="text-darkslategray-100"> Jobs</span>
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[7px] box-border max-w-full text-center text-xs text-black">
                <div className="flex-1 flex flex-col items-end justify-start gap-[23px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[34px] max-w-full mq750:gap-[34px_17px] mq1050:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[293px] max-w-full mq1050:flex-1">
                      <div
                        className="self-stretch rounded-2xl bg-whitesmoke flex flex-row items-end justify-between pt-[15px] pb-[18px] pr-3.5 pl-[23px] box-border max-w-full gap-[20px] cursor-pointer mq450:flex-wrap"
                        onClick={onGroupContainerClick}
                      >
                        <div className="h-[101px] w-[451px] relative rounded-2xl bg-whitesmoke hidden max-w-full" />
                        <FrameComponent
                          flatColorIconsgoogle="/gogle.png"
                          contentWriter="Content Writer"
                          googleInc="Google Inc"
                          fullTime="Full Time"
                        />
                        <div className="w-[86px] flex flex-col items-start justify-start gap-[8px]">
                          <div className="self-stretch relative leading-[30px] font-medium inline-block min-w-[86px] z-[1]">
                            Expires in 1 hr
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[1px] text-sm">
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
                    </div>
                    <div className="flex-[0.9224] rounded-2xl bg-whitesmoke flex flex-row items-start justify-start pt-[18px] pb-4 pr-3 pl-[23px] box-border gap-[53px] min-w-[293px] max-w-full text-base mq450:flex-wrap mq450:gap-[53px_26px] mq1050:flex-1">
                      <div className="h-[101px] w-[451px] relative rounded-2xl bg-whitesmoke hidden max-w-full" />
                      <div className="flex-1 flex flex-row items-start justify-start gap-[21px] min-w-[166px]">
                        <div className="h-[59px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                          <img
                            className="w-[52px] h-[52px] relative overflow-hidden shrink-0 z-[1]"
                            loading="lazy"
                            alt=""
                            src="/face.png"
                          />
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[7px]">
                          <b className="w-[153px] relative leading-[30px] inline-block z-[1]">
                            Graphic Designe
                          </b>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[4px] text-sm">
                            <div className="flex-1 flex flex-row items-start justify-start gap-[5px]">
                              <div className="flex-1 relative leading-[30px] inline-block min-w-[99px] z-[1]">
                                Facebook Inc
                              </div>
                              <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
                                <div className="w-1 h-1 relative rounded-[50%] bg-orangered-200 z-[1]" />
                              </div>
                            </div>
                            <div className="w-[71px] relative leading-[30px] flex items-center justify-center min-w-[71px] z-[1]">
                              Part Time
                            </div>
                          </div>
                        </div>
                      </div>
                      <ErrorHandler />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[33px] max-w-full text-base mq750:gap-[16px]">
                    <div className="flex-1 rounded-2xl bg-whitesmoke flex flex-row items-start justify-start pt-[18px] pb-4 pr-3 pl-[23px] box-border gap-[21px] min-w-[293px] max-w-full mq450:flex-wrap">
                      <div className="h-[101px] w-[451px] relative rounded-2xl bg-whitesmoke hidden max-w-full" />
                      <div className="h-[59px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                        <img
                          className="w-[52px] h-[52px] relative overflow-hidden shrink-0 z-[1]"
                          alt=""
                          src="/face.png"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[30px] pl-0 box-border gap-[7px] min-w-[140px]">
                        <b className="w-[153px] relative leading-[30px] inline-block z-[1]">
                          Graphic Designer
                        </b>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[5.5px] text-sm">
                          <div className="flex-1 relative leading-[30px] inline-block min-w-[99px] z-[1]">
                            Facebook Inc
                          </div>
                          <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                            <div className="w-1 h-1 relative rounded-[50%] bg-orangered-200 z-[1]" />
                          </div>
                          <div className="w-[71px] relative leading-[30px] flex items-center justify-center min-w-[71px] z-[1]">
                            Part Time
                          </div>
                        </div>
                      </div>
                      <ErrorHandler />
                    </div>
                    <div className="flex-1 rounded-2xl bg-whitesmoke flex flex-row items-start justify-start pt-[18px] pb-4 pr-3 pl-[23px] box-border gap-[54px] min-w-[293px] max-w-full mq450:flex-wrap mq450:gap-[54px_27px]">
                      <div className="h-[101px] w-[451px] relative rounded-2xl bg-whitesmoke hidden max-w-full" />
                      <FrameComponent
                        flatColorIconsgoogle="/face.png"
                        contentWriter="Graphic Designer"
                        googleInc="Facebook Inc"
                        fullTime="Part Time"
                        propWidth="unset"
                        propFlex="1"
                        propMinWidth="166px"
                        propWidth1="153px"
                        propGap="4px"
                        propMinWidth1="99px"
                        propWidth2="71px"
                        propMinWidth2="71px"
                      />
                      <ErrorHandler />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
