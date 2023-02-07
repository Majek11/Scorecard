import React from "react";
import {  FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";
//import { RiCloseCircleLine } from "react-icons/ri";
const Share = () => {

    const shareUrl = 'https//:twitter.com/intent/tweet?hashtags=quotes&text=';

  return (
    <div className="pl-[35%] pt-[8%]">
      <div className="container w-[500px] h-[320px] rounded-[20px] border-[4px] border-[#0F4C4B] bg-[#dde1e1] text-white">
        <div className="head flex justify-between pt-8 px-8 items-center">
          <h1 className="text-[28px] text-[#0F4C4B]">Share Result</h1>
          {/* <RiCloseCircleLine size={30} className="text-[#0F4C4B]" /> */}
        </div>
        <hr className="h-[2px] mt-4 w-[430px] ml-8 bg-gray-900 opacity-50" />
        <div className="share2 pt-8">
          <p className="text-[20px] font-[600] p-6 text-[#0F4C4B]">
            Share this result via
          </p>
        </div>

        <div className="icons flex justify-center gap-[80px] pt-4">
          
          <FacebookShareButton url="https://www.facebook.com/" quote= { "I just scored Ahmed Tinubu, Atiku Abubakar and Peter Obi on Scorecard by ALG. You should do the same."} hashtags={"#yourvotecounts"}>
            <FacebookIcon size={50} round='true' name="Facebook" />
          </FacebookShareButton>
          <TwitterShareButton title="shareUrl" url={shareUrl} target="_blank" quote= { "I just scored Ahmed Tinubu, Atiku Abubakar and Peter Obi on Scorecard by ALG. You should do the same."} hashtags={"#yourvotecounts"}>
            <TwitterIcon size={50} round='true' className="text-[#0F4C4B]" />
          </TwitterShareButton>
          <LinkedinShareButton url="https://www.linkedin.com/home" quote= { "I just scored Ahmed Tinubu, Atiku Abubakar and Peter Obi on Scorecard by ALG. You should do the same."} hashtags={"#yourvotecounts"}>
            <LinkedinIcon size={50} round='true' className="text-[#0F4C4B]" />
          </LinkedinShareButton>
          
        </div>
      </div>
    </div>
  );
};

export default Share;
