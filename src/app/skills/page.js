export const metadata = {
  title: "Skills",
  description:
    "Explore my technical skills and expertise in various technologies",
};

export default function Skills() {
  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Next.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js", level: 70 },
  ];

  return (
    <div className="min-h-screen pt-24 px-8 pb-20 sm:p-20">
      <h1 className="text-4xl font-bold mb-8">My Skills</h1>
      <div className="max-w-3xl mx-auto">
        <div className="grid gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-black dark:bg-white group-hover:bg-blue-600 transition-all duration-500 ease-in-out rounded-full"
                  style={{
                    width: `${skill.level}%`,
                    transition: "width 1s ease-in-out",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
