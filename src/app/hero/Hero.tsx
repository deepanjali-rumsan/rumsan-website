export default function Hero() {
  return (
    <section className="relative px-6 md:px-12 py-8 overflow-hidden">
      {/* Background decorative squares */}
      {/* Left side */}
      <div className="absolute left-8 bottom-40 w-16 h-16 bg-blue-100 opacity-30 rounded-sm"></div>
      <div className="absolute left-16 bottom-20 w-20 h-20 border-2 border-blue-200 opacity-40 rounded-sm"></div>
      <div className="absolute left-4 bottom-64 w-8 h-8 bg-blue-200 opacity-50 rounded-sm"></div>
      <div className="absolute left-32 bottom-52 w-12 h-12 border-2 border-blue-100 opacity-30 rounded-sm"></div>

      {/* Right side */}
      <div className="absolute right-8 bottom-32 w-24 h-24 border-2 border-blue-200 opacity-40 rounded-sm"></div>
      <div className="absolute right-24 bottom-16 w-16 h-16 bg-blue-100 opacity-35 rounded-sm"></div>
      <div className="absolute right-12 bottom-56 w-10 h-10 bg-blue-200 opacity-45 rounded-sm"></div>
      <div className="absolute right-40 bottom-40 w-14 h-14 border-2 border-blue-100 opacity-35 rounded-sm"></div>
      <div className="absolute right-6 bottom-72 w-6 h-6 bg-blue-300 opacity-60 rounded-sm"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold leading-tight mb-8 relative">
          <span className="block" style={{ color: "#4252FF" }}>
            Bridging Yesterday&apos;s
          </span>
          <span className="block" style={{ color: "#4252FF" }}>
            Problems With
          </span>
          <span className="text-gray-600 block">Tomorrow&apos;s Solution</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed mx-auto">
          We use blockchain and AI to support impact - driven companies,
          governments, humanitarian organizations build trustworthy, scalable
          digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-base">
            Talk to our team
            <span>→</span>
          </button>
          <button className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-2xl font-semibold hover:bg-blue-50 transition-colors text-base">
            Explore our work
          </button>
        </div>
      </div>
    </section>
  );
}
