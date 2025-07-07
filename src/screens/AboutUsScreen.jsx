const teamMembers = [
  {
    name: "Navjot Singh",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    className: "BCA - 3rd Year",
    rollNumber: "",
    branch: "Information Technology",
  },
  {
    name: "Garv",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    className: "BCA - 3rd Year",
    rollNumber: "2224891",
    branch: "Information Technology",
  },
  {
    name: "Gurpreet Singh",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    className: "BCA - 3rd Year",
    rollNumber: "2224893",
    branch: "Information Technology",
  },
  {
    name: "Gagandeep Singh",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
    className: "BCA - 3rd Year",
    rollNumber: "2224890",
    branch: "Information Technology",
  },
];

const AboutUsScreen = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Intro Section */}
      <section className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          About Country Explorer
        </h1>
        <p className="text-lg text-gray-700">
          Country Explorer is a student-built project using React JS and
          Tailwind CSS. It provides users with a simple way to explore countries
          and learn about their demographics, regions, and flags through a free
          public API. The app was created as a part of our academic curriculum
          to demonstrate React development, API integration, and modern UI
          design.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">
          Meet Our Team
        </h2>

        <div className="flex flex-wrap flex-row gap-8 px-4 justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full border-4 border-blue-500 mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">
                <strong>Class:</strong> {member.className}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Roll No:</strong> {member.rollNumber}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Branch:</strong> {member.branch}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsScreen;
