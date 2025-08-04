import React from "react";

const Testimonials = () => {
  return (
    <section className="mt-8 md:mt-14 xl:mt-20">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="grid grid-cols-12 max-md:gap-3">
          <div className="col-span-12 md:col-span-8 xl:col-span-9">
            <div className="mb-8 md:mb-10">
              <h5 className="text-foreground text-2xl md:text-5xl xl:text-64 leading-110 tracking-medium">
                Testimonials
              </h5>
            </div>
            <p className="text-foreground text-sm md:text-xl xl:text-5xl font-medium leading-tight tracking-sharp">
              “Joey is a remarkable artist. He grasps abstract ideas and
              transforms them into exceptional visuals. Throughout the years,
              I've witnessed him produce everything from small symbols to
              comprehensive adaptive web pages. He has crafted clothing items
              like tees and caps, promotional products, and professional
              literature.”
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-3">
            <div className="h-full pl-20 lg:pl-24 flex flex-col justify-end text-start">
                <p className="text-foreground text-sm md:text-xl font-semibold leading-140 tracking-low mb-2">Chris Ellington</p>
                <span className="text-foreground text-sm md:text-base xl:text-xl font-medium leading-140 tracking-low">Product Lead,Gatha.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
