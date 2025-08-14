import React from "react";

const Experties = () => {
  return (
    <section className="relative pt-8 pb-12 md:py-10 xl:py-20">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="mb-3 md:mb-10 xl:mb-12">
          <h3 className="text-foreground text-2xl md:text-32 xl:text-5xl font-semibold leading-tight tracking-sharp">
            Security
          </h3>
        </div>
        <div className="grid grid-cols-12 md:gap-x-9 xl:gap-x-20 gap-y-8 md:gap-y-14 xl:gap-y-20">
          <div className="col-span-12 md:col-span-6 lg:pr-10 xl:pr-20">
            <div className="mb-4 md:mb-7">
              <h4 className="text-foreground text-xl md:text-2xl lg:text-28 xl:text-3xl font-bold leading-snug -tracking-sharp pl-3 relative after:absolute after:content-[''] after:size-1 after:bg-foreground after:rounded-full after:left-0 after:top-1/2 after:-translate-y-1/2">
                Zero Trust Architecture
              </h4>
            </div>
            <p className="text-foreground text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-140 -tracking-low">
              Your AI agent APIs operate within isolated environments where
              every access is authenticated and authorized, preventing
              unauthorized access to agent configurations and customer data.
              Advanced network segmentation ensures each AI agent runs in its
              own secure enclave with real-time monitoring.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:pl-10 xl:pl-20">
            <div className="mb-4 md:mb-7">
              <h4 className="text-foreground text-xl md:text-2xl lg:text-28 xl:text-3xl font-bold leading-snug -tracking-sharp pl-3 relative after:absolute after:content-[''] after:size-1 after:bg-foreground after:rounded-full after:left-0 after:top-1/2 after:-translate-y-1/2">
                AI Threat Intelligence
              </h4>
            </div>
            <p className="text-foreground text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-140 -tracking-low">
              Our security systems actively monitor for threats targeting AI agent infrastructure, including API abuse attacks and sophisticated data injection attempts. Machine learning powered detection identifies suspicious patterns in agent API behavior and automatically isolates any affected systems for threat intelligence protection.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:pr-10 xl:pr-20">
            <div className="mb-4 md:mb-7">
              <h4 className="text-foreground text-xl md:text-2xl lg:text-28 xl:text-3xl font-bold leading-snug -tracking-sharp pl-3 relative after:absolute after:content-[''] after:size-1 after:bg-foreground after:rounded-full after:left-0 after:top-1/2 after:-translate-y-1/2">
                Immutable Data Protection
              </h4>
            </div>
            <p className="text-foreground text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-140 -tracking-low">
              Air gapped backup systems protect your agent configurations and
              customer interaction data from ransomware with automated
              versioning and comprehensive cryptographic integrity verification.
              Instant rollback capabilities ensure recovery from any security
              incident while safeguarding AI service operations.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:pl-10 xl:pl-20">
            <div className="mb-4 md:mb-7">
              <h4 className="text-foreground text-xl md:text-2xl lg:text-28 xl:text-3xl font-bold leading-snug -tracking-sharp pl-3 relative after:absolute after:content-[''] after:size-1 after:bg-foreground after:rounded-full after:left-0 after:top-1/2 after:-translate-y-1/2">
                Hardware Level Security
              </h4>
            </div>
            <p className="text-foreground text-sm md:text-base lg:text-lg xl:text-xl font-normal leading-140 -tracking-low">
              Dedicated AI infrastructure operates within SOC 2 certified
              facilities featuring biometric access controls and comprehensive
              24/7 monitoring systems. GPU clusters and storage arrays are
              protected behind locked cages with dual-factor authentication and
              advanced surveillance technology for complete protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experties;
