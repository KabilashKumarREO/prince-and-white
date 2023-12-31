import Link from "next/link";

const Banner = () => {
  return (
    <section
      id="banner"
      className="w-[100%] h-[400px] min-h-[400px] md:min-h-[600px] md:h-[600px] relative flex flex-col items-start"
    >
      <img
        className="absolute z-[-1] w-[100%] h-[400px] min-h-[400px] md:min-h-[600px] md:h-[600px] object-cover origin-center brightness-75"
        src="/assets/banner-2.png"
        alt="banner-1"
      />
      <div className="w-[100%] px-[24px] md:px-[36px] flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl mt-[100px] md:mt-[200px] font-bold text-light">
          Great offers on all your
          <br />
          favourite tech!
        </h2>
        <h4 className="text-2xl mt-[16px] font-semibold text-light">
          Commerce with confidence
        </h4>
        <Link href={"/products"}>
          <button className="mt-[24px] text-xl font-bold px-[36px] py-[16px] rounded-xl bg-primary">
            Visit Catalog
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
