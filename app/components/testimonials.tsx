import React, { FC } from "react";

interface TestimonialsProps {
  title?: string;
  subdetail?: string;
  description: string;
  authorName: string;
  authorRole: string;
}

const Testimonials: FC<TestimonialsProps> = ({
  title,
  subdetail,
  description,
  authorName,
  authorRole,
}) => {
  return (
    <section className="mt-8 md:mt-14 xl:mt-20">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="grid grid-cols-12 max-md:gap-3">
          <div className="col-span-12 md:col-span-8 xl:col-span-9">
            {title && (
              <div className="mb-8 md:mb-10">
                <h5 className="text-foreground text-2xl md:text-5xl xl:text-64 leading-110 tracking-medium">
                  {title}
                </h5>
              </div>
            )}

            <p className="text-foreground text-sm md:text-base font-medium mb-3 md:mb-4">
              {subdetail}
            </p>
            <p className="text-foreground text-sm md:text-xl xl:text-5xl font-medium leading-tight tracking-sharp">
              {description}
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-3">
            <div className="h-full md:pl-20 lg:pl-24 flex flex-col justify-end text-start">
              <p className="text-foreground text-sm md:text-xl font-semibold leading-140 tracking-low mb-2">
                {authorName}
              </p>
              <span className="text-foreground text-sm md:text-base xl:text-xl font-medium leading-140 tracking-low">
                {authorRole}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
