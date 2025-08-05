import Image from "next/image";
import Link from "next/link";

const AgentCard = ({ image, title, subtitle, href = "/" }) => {
  return (
    <div className="flex flex-col gap-3 xl:gap-6">
      <Link href={href} className="rounded-2xl md:rounded-32 overflow-hidden group">
        <Image
          src={image}
          alt={title}
          className="object-cover h-full w-full group-hover:scale-105 transition-all duration-500"
        />
      </Link>
      <div>
        <p className="text-foreground text-xl sm:text-sm md:text-xl font-semibold leading-140 tracking-low mb-2">
          {title}
        </p>
        <p className="text-foreground text-xl sm:text-sm md:text-base xl:text-xl font-medium leading-140 tracking-low">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AgentCard;

{
  /* <div className="flex flex-col gap-3 xl:gap-6">
  <Link href="/" className="rounded-32 overflow-hidden group">
    <Image
      src={image4}
      alt="imgage-agents"
      className="object-cover h-full w-full group-hover:scale-105 transition-all duration-500"
    />
  </Link>
  <div>
    <p className="text-foreground text-xl sm:text-sm md:text-xl font-semibold leading-140 tracking-low mb-2">
      Crint
    </p>
    <p className="text-foreground text-xl sm:text-sm md:text-base xl:text-xl font-medium leading-140 tracking-low">
      Mobile App
    </p>
  </div>
</div>; */
}
