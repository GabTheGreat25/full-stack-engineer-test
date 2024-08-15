import React from "react";
import NotFoundImg from "@assets/404-Not-Found.png";

export function NotFound() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={NotFoundImg}
        alt="Not Found"
        // className="md:w-[26rem] lg:w-[30rem]"
      />
      <h1 className="pt-12 pb-6 text-4xl font-semibold">Not Found</h1>
      <h2 className="text-2xl">The requested page could not be found.</h2>
      <br />
      <button
        title="Go Back"
        onClick={goBack}
        className="px-8 text-2xl font-medium duration-200 btn text-light-default hover:ease-in hover:bg-light-default hover:text-dark-default"
      >
        Go Back
      </button>
    </div>
  );
}
