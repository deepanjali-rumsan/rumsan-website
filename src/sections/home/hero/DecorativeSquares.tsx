export default function DecorativeSquares() {
  return (
    <>
      {/* Left side - filled squares */}
      <div className="hidden lg:block absolute left-15 bottom-120 w-14 h-14 bg-brand-light/25 rounded-lg" />
      <div className="hidden lg:block absolute left-15 bottom-100 w-14 h-14 bg-brand-light/25 rounded-lg" />
      <div className=" absolute -left-5 bottom-100 w-14 h-14 bg-brand-light/25 rounded-lg" />
      <div className="hidden md:blockabsolute left-35 bottom-60 w-14 h-14 bg-brand-light/25 rounded-lg" />

      {/* Left side - border squares */}
      <div className="hidden lg:block absolute left-15 bottom-80 w-14 h-14 border-2 border-brand-light/25 rounded-lg" />
      <div className="hidden md:block absolute left-35 bottom-80 w-14 h-14 border-2 border-brand-light/25 rounded-lg" />
      <div className=" absolute -left-5 bottom-60 w-14 h-14 border-2 border-brand-light/25 rounded-lg" />
      <div className=" absolute left-55 bottom-60 w-14 h-14 border-2 border-brand-light/25 rounded-lg" />

      {/* Right side - filled squares */}
      <div className="hidden md:block absolute right-35 bottom-60 w-14 h-14 bg-brand-light/25 rounded-lg" />
      <div className="hidden md:block absolute right-35 bottom-40 w-14 h-14 bg-brand-light/25 rounded-lg" />
      <div className="hidden lg:block absolute right-55 bottom-40 w-14 h-14 bg-brand-light/25 rounded-lg" />
      <div className="hidden md:block absolute right-15 bottom-0 w-14 h-14 bg-brand-light/25 rounded-lg" />

      {/* Right side - border squares */}
      <div className="hidden lg:block absolute right-35 bottom-20 w-14 h-14 border-2 border-brand-light/25 rounded-lg" />
      <div className="hidden md:block absolute right-15 bottom-20 w-14 h-14 border-2 border-brand-light/25 rounded-lg" />
      <div className="hidden md:block absolute -right-5 bottom-0 w-14 h-14 border-2 border-brand-light/25 rounded-lg" />
    </>
  );
}
