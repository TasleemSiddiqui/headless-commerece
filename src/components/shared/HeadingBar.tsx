import React from "react";

const HeadingBar = ({heading,subHeading}:{heading:string,subHeading:string}) => {
  return (
    <section className="my-3 px-2 md:my-5 md:px-4  lg:my-10 lg:px-6 text-left leading-normal">
      <h1 className="text-2xl md:text-3xl font-semibold font-sans tracking-tight lg:text-4xl">
        {
            heading
        }
      </h1>
      <h2 className="border-b pb-2 text-xl md:text2xl lg:text-3xl font-thin font-sans tracking-tight first:mt-0">
        {
            subHeading
        }
      </h2>
    </section>
  );
};

export default HeadingBar;
