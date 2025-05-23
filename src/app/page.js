import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Hero from "../components/Hero";

// Import skills data from SkillsContent
import { skills } from "../components/skills/SkillsContent";
import PromiseSection from "@/components/PromiseSection";

export const metadata = {
  title: "Home",
  description: "Welcome to my portfolio - showcasing my projects and skills",
};

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section with Neon Background */}
      <Hero name="Sanskriti" />

      {/* Projects Section */}
      <PromiseSection />

      {/* Skills Section with Grid Pattern */}
      <section
        id="skills"
        className="relative w-full min-h-screen overflow-hidden px-4 py-20 flex flex-col items-center justify-center text-white"
      >
        {/* Background Video with Wavy Effect */}
        <div className="absolute w-full h-full z-[-10] bg-cover opacity-50 overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-50"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/Video/skills-bg.webm" type="video/webm" />
          </video>
          {/* Dark overlay with subtle gradient to enhance cosmic effect */}
          <div className="absolute inset-0 z-[-5] bg-gradient-to-b from-[#1a1a3d] via-[#2a1a5d] to-[#3a1a7d] opacity-70"></div>
        </div>

        <div className="w-full h-auto flex flex-col items-center justify-center">
          <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="text-[#b49bff] mr-[10px] h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="Welcome-text text-[13px]">
              Think better with Next.js 14
            </h1>
          </div>
          <div className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
            Making apps with modern technologies.
          </div>
          <div className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center">
            Never miss a task, deadline or idea.
          </div>
        </div>

        {/* Skill icons remain unchanged as per your request */}
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/html.png"
              alt="HTML"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/css.png"
              alt="CSS"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/js.png"
              alt="JavaScript"
              width={65}
              height={65}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/tailwind.png"
              alt="Tailwind CSS"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/react.png"
              alt="React"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/redux.png"
              alt="Redux"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/reactquery.png"
              alt="React Query"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/ts.png"
              alt="TypeScript"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/next.png"
              alt="Next.js 14"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/framer.png"
              alt="Framer Motion"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/stripe.png"
              alt="Stripe"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/node.png"
              alt="Node.js"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/mongodb.png"
              alt="MongoDB"
              width={40}
              height={40}
              priority={false}
            />
          </div>
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/html.png"
              alt="HTML"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/css.png"
              alt="CSS"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/js.png"
              alt="JavaScript"
              width={65}
              height={65}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/tailwind.png"
              alt="Tailwind CSS"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/mui.png"
              alt="Material UI"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/react.png"
              alt="React"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/redux.png"
              alt="Redux"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/reactquery.png"
              alt="React Query"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/ts.png"
              alt="TypeScript"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/next.png"
              alt="Next.js 14"
              width={80}
              height={80}
              priority={false}
            />
          </div>
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/node.png"
              alt="Node.js"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/express.png"
              alt="Express.js"
              width={80}
              height={80}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/mongodb.png"
              alt="MongoDB"
              width={40}
              height={40}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/firebase.png"
              alt="Firebase"
              width={55}
              height={55}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/postgresql.png"
              alt="PostgreSQL"
              width={70}
              height={70}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/mysql.png"
              alt="MySQL"
              width={70}
              height={70}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/prisma.png"
              alt="Prisma"
              width={70}
              height={70}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/graphql.png"
              alt="Graphql"
              width={80}
              height={80}
              priority={false}
            />
          </div>
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/reactnative.png"
              alt="React Native"
              width={70}
              height={70}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/tauri.png"
              alt="Tauri"
              width={70}
              height={70}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/docker.png"
              alt="Docker"
              width={70}
              height={70}
              priority={false}
            />
          </div>
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/figma.png"
              alt="Figma"
              width={50}
              height={50}
              priority={false}
            />
          </div>
        </div>

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          <div style={{ opacity: 1 }}>
            <Image
              src="/skills/go.png"
              alt="Go"
              width={60}
              height={60}
              priority={false}
            />
          </div>
        </div>

        {/* Removed the second absolute video div as it's redundant */}
      </section>
    </div>
  );
}
