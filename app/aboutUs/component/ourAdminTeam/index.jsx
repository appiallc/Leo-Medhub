"use client";

const teamMembers = [
  {
    name: "isha Patel ",
    role: "Director of Operations",
  },
  {
    name: "Akash Parekh",
    role: "Staffing Manager",
  },
  {
    name: "Nisha Patel",
    role: "RCM Manager"
  },
  {
    name: "Vishal Purohit",
    role: "Director of Sales",
  },
  {
    name: "Amit Patel",
    role: "India Sales Manager",
  },
  {
    name: "Reshma khan",
    role: "Philippines Sales Manager",
  },
];

export default function AdministrativeTeam() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl font-extrabold  bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
          Our Administrative Team
        </h2>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Name */}
              <h3 className="text-lg font-medium text-gray-800">
                {member.name}
              </h3>

              {/* Role */}
              <p
                className={`mt-2 text-base ${
                  member.highlight ? "text-red-600" : "text-gray-600"
                }`}
              >
                {member.role}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-full rounded-b-2xl bg-[#293675]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
