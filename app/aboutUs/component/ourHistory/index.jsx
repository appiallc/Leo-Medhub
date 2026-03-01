export default function OurHistory() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      {/* Top & Bottom Gradient Borders */}
      {/* <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-red-400 via-red-500 to-rose-600" />
      <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-rose-600 via-red-500 to-red-400" /> */}

      {/* Decorative Blur Shapes */}
      <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-red-300 opacity-40 blur-3xl" />
      <div className="absolute -right-20 top-24 h-48 w-48 rounded-full bg-rose-300 opacity-40 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
          Our History
        </h2>

        {/* Divider */}
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-red-600 to-blue-700" />

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
        Leo Medhub stands apart as a healthcare-focused partner, not merely an outsourcing vendor. Founded by experienced medical billers with deep industry expertise, our team understands the complexities of revenue cycle management and the everyday challenges healthcare providers face.
        </p>
      </div>
    </section>
  );
}
