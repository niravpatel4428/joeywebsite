import React from "react";

const CtcForm = () => {
  return (
    <section className="relative pt-16">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="text-center max-w-[525px] lg:max-w-3xl mx-auto mb-10 md:mb-14 xl:mb-12">
          <h1 className="text-foreground text-32 sm:text-4xl md:text-5xl lg:text-[54px] xl:text-64 font-semibold leading-110 -tracking-medium">
            Have a project idea? Let's discuss it together.
          </h1>
        </div>

        <div className="w-full max-w-[600px] mx-auto">
          <form action="" className="flex flex-col gap-8">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="py-4 px-5 bg-[#F9F9F9] rounded-[48px] text-sm leading-170 text-foreground font-medium placeholder:text-[#C4C4C4] outline-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              className="py-4 px-5 bg-[#F9F9F9] rounded-[48px] text-sm leading-170 text-foreground font-medium placeholder:text-[#C4C4C4] outline-none"
            />
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="Mobile Number"
              className="py-4 px-5 bg-[#F9F9F9] rounded-[48px] text-sm leading-170 text-foreground font-medium placeholder:text-[#C4C4C4] outline-none"
            />
            <input
              type="text"
              name="aboutUs"
              id="aboutUs"
              placeholder="How did you hear about us?"
              className="py-4 px-5 bg-[#F9F9F9] rounded-[48px] text-sm leading-170 text-foreground font-medium placeholder:text-[#C4C4C4] outline-none"
            />
            <textarea
              name="project"
              id="project"
              rows="5"
              placeholder="Tell us more about your project "
              className="p-5 bg-[#F9F9F9] rounded-2xl text-base leading-170 text-foreground font-medium placeholder:text-[#C4C4C4] outline-none"
            ></textarea>
            <button className="py-5 px-6 bg-foreground text-background text-base font-semibold rounded-[30px]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtcForm;
