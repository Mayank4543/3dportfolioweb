export const metadata = {
  title: "About Me",
  description: "Learn about my background, skills, and professional journey",
};

export default function About() {
  return (
    <div className="min-h-screen pt-24 px-8 pb-20 sm:p-20">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          Welcome to my portfolio! I am a passionate developer with expertise in
          web development and design.
        </p>
        <p className="text-lg mb-6">
          I specialize in creating responsive, user-friendly websites and
          applications with modern technologies like React, Next.js, and
          Tailwind CSS.
        </p>
        <p className="text-lg">
          My journey in tech began several years ago, and I've been constantly
          learning and improving my skills to deliver high-quality solutions to
          my clients and teams.
        </p>
      </div>
    </div>
  );
}
