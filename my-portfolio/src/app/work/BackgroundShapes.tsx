import Image from "next/image";

export const BackgroundShapes = () => {
  return (
    <>
      <Image
        className="absolute lg:top-32 lg:left-[8rem] lg:w-[550px] top-20 left-2"
        src="/fluid_red1.svg"
        alt="Fluid Red 1"
        width={300}
        height={600}
      />
      <Image
        className="absolute lg:top-[58rem] lg:left-[20rem] top-[48rem] left-5 lg:w-[1000px] lg:h-[600px]"
        src="/fluid_red2.svg"
        alt="Fluid Red 2"
        width={300}
        height={600}
      />
      <Image
        className="absolute lg:top-[105rem] lg:left-[9rem] top-[93rem] right-2"
        src="/fluid_blue1.svg"
        alt="Fluid Blue 1"
        width={1000}
        height={1500}
      />
    </>
  );
};
