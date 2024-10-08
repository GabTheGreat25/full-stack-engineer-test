import React from "react";
import {
  FaAndroid,
  FaPhoneAlt,
  FaRegEnvelope,
  FaFacebookSquare,
  FaCopyright,
  FaHome,
  FaUser,
  FaSignInAlt,
  FaComment,
  FaQuestion,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  return (
    <>
      <footer className="w-full h-full px-10 pt-5 pb-20 bg-neutral-primary text-light-default dark:bg-light-default dark:text-dark-default">
        <div className="grid w-full grid-flow-col-dense justify-evenly">
          <div className="grid justify-center grid-flow-row-dense">
            <span className="lg:pb-4 md:pb-[.65rem] font-semibold xl:text-base md:text-[.75rem] text-primary-default dark:text-dark-default">
              IMPORTANT INFORMATION
            </span>
            <a
              className="grid grid-flow-col-dense gap-x-2 w-fit items-center pb-2 no-underline link hover:text-primary-default hover:dark:text-neutral-secondary xl:text-base md:text-[.75rem]"
              onClick={home}
            >
              <FaHome />
              <span className="relative top-[1px]">HOME</span>
            </a>
            <a className="grid grid-flow-col-dense gap-x-2 w-fit items-center py-2 no-underline link hover:text-primary-default hover:dark:text-neutral-secondary xl:text-base md:text-[.75rem]">
              <FaUser />
              <span className="relative top-[1px]">REGISTER</span>
            </a>
            <a className="grid grid-flow-col-dense gap-x-2 w-fit items-center py-2 no-underline link hover:text-primary-default hover:dark:text-neutral-secondary xl:text-base md:text-[.75rem]">
              <FaSignInAlt />
              <span className="relative top-[1px]">LOGIN</span>
            </a>
            <a className="grid grid-flow-col-dense gap-x-2 w-fit items-center py-2 no-underline link hover:text-primary-default hover:dark:text-neutral-secondary xl:text-base md:text-[.75rem]">
              <FaComment />
              <span className="relative top-[1px]">FEEDBACK</span>
            </a>
            <a className="grid grid-flow-col-dense gap-x-2 w-fit items-center py-2 no-underline link hover:text-primary-default hover:dark:text-neutral-secondary xl:text-base md:text-[.75rem]">
              <FaQuestion />
              <span className="relative top-[1px]">FAQS</span>
            </a>
          </div>
          <div className="grid justify-center grid-flow-row-dense h-fit">
            <span className="font-semibold xl:text-base md:text-[.75rem] text-primary-default dark:text-dark-default lg:pb-4 md:pb-[.65rem]">
              DOWNLOAD APK
            </span>
            <div className="grid grid-flow-col-dense gap-x-2 w-fit items-center hover:text-primary-default hover:dark:text-neutral-secondary xl:text-base md:text-[.75rem]">
              <FaAndroid />
              MOBILE APK
            </div>
          </div>
          <div className="grid justify-center grid-flow-row-dense">
            <span className="pb-3 font-semibold xl:text-base md:text-[.75rem] text-primary-default dark:text-dark-default">
              CONTACT US
            </span>
            <div className="relative grid items-center justify-start grid-flow-col-dense gap-2 bottom-[2rem] h-fit hover:text-primary-default hover:dark:text-neutral-secondary xl:text-base md:text-[.75rem]">
              <FaPhoneAlt />
              <a className="no-underline link">+63123 456 7890</a>
            </div>
            <div className="relative grid items-center justify-start grid-flow-col-dense gap-2 bottom-[3.5rem] h-fit hover:text-primary-default hover:dark:text-neutral-secondary xl:text-base md:text-[.75rem]">
              <FaRegEnvelope />
              <a className="no-underline link">johndoe@test.com</a>
            </div>
          </div>
          <div className="grid justify-center grid-flow-row-dense h-fit">
            <span className="font-semibold xl:text-base md:text-[.75rem] text-primary-default dark:text-dark-default lg:pb-4 md:pb-[.65rem]">
              CONNECT
            </span>
            <div className="grid grid-flow-col-dense gap-x-2 w-fit items-center hover:text-primary-default hover:dark:text-neutral-secondary xl:text-base md:text-[.75rem]">
              <FaFacebookSquare />
              facebook.com/cartogo
            </div>
          </div>
        </div>
        <div className="grid justify-end py-8 pr-12">
          <p className="grid items-center justify-start grid-flow-col-dense gap-2 h-fit">
            Copyright
            <span>
              <FaCopyright />
            </span>
            2024 - XPAY INTERN - GABRIEL MENDOZA
          </p>
        </div>
      </footer>
    </>
  );
}
