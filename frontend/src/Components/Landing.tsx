import { toast } from "sonner";
import FeaturePage from "./FeaturePage";
import { useSelector } from "react-redux";
import { selectSession } from "../Store/features/authSlice";
import ScrollButton from "./ScrollButton";

const Landing = () => {

  const sessionData = useSelector(selectSession);
  return (
    <div className="bg-bgdark flex flex-col">
      <div className="mainHedingdiv  h-full w-[80%] mr-auto ml-auto mt-3">
        <div className="mainlandingcontent h-full w-[60%] ml-auto mr-auto flex flex-col gap-6 pt-[10%]">
          <span className="text-textdark text-6xl text-center font-thin">
            Transforming Skills
          </span>
          <span className="text-textdark text-4xl text-center">
            Connecting Aspirations{" "}
          </span>
          <span className="text-richtextdark text-6xl text-center font-thin">
            Powering Growth
          </span>
        </div>
        <div className="mainlandingcontent h-full w-[60%] ml-auto mr-auto mt-8">
          <p className="text-textdark text-center">
            SkillHub is a dynamic platform designed to connect individuals
            seeking skill development by{" "}
            <span className="underline hover:cursor-pointer">
              exchanging skills
            </span>{" "}
            with those offering their expertise.
          </p>
        </div>
        {
          !sessionData?.access_token && <div className="tempdiv h-[10vh]"></div>
        }
        { sessionData?.access_token &&
          <div className="mainlandingcontent h-full w-[60%] ml-auto mr-auto mt-8 flex justify-center gap-5">
            <button
              className="bg-richtextdark p-3 m-20 hover:bg-hover rounded-xl transition-all duration-200 text-textdark"
              onClick={() => {
                toast.error("Work is in progress");
              }}
            >
              Get Started
            </button>
            <button
              className="bg-transparent p-3 m-20 hover:bg-richtextdark rounded-xl transition-all duration-200 text-textdark border border-solid border-richtextdark"
              onClick={() => {
                toast.error("not finished yet");
              }}
            >
              Documentation
            </button>
          </div>
        }
        <ScrollButton />
      </div>
      <FeaturePage />
      <div className="h-screen"></div>
    </div >
  );
};

export default Landing;
