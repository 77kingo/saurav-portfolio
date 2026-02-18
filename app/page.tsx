"use client";

import { motion } from "framer-motion";

export default function Home() {
  const projects = [
    {
      title: "Kingo Hamrokhet",
      description:
        "A creative web platform showcasing digital innovation and clean UI design.",
      url: "https://kingo-hamrokhet.lovestoblog.com/",
    },
    {
      title: "Travel Landing Page",
      description:
        "A modern and responsive travel landing page with beautiful UI.",
      url: "https://77kingo.github.io/travel_landing/",
    },
    {
      title: "Quiz App",
      description:
        "Interactive quiz application built using JavaScript.",
      url: "https://77kingo.github.io/quiz_app/",
    },
    {
      title: "Foodie App",
      description:
        "A responsive food discovery app with clean layout.",
      url: "https://77kingo.github.io/foodie-app/",
    },
    {
      title: "Music Player",
      description:
        "Custom web music player built using JavaScript.",
      url: "https://77kingo.github.io/MusicPlayer/",
    },
  ];

  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen overflow-x-hidden scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-lg">Saurav Singh</h1>
          <div className="flex gap-6 text-sm">
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
            <a
              href="https://github.com/77kingo"
              target="_blank"
              className="hover:text-purple-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
        >
          Saurav Singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-gray-400 max-w-2xl"
        >
          Full Stack Developer building scalable, high-performance digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex gap-6"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            href="https://github.com/77kingo"
            target="_blank"
            className="px-6 py-3 rounded-full border border-gray-600 hover:border-purple-500 transition"
          >
            GitHub
          </a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          I build modern web applications using React, Next.js, and JavaScript.
          I focus on performance, clean UI design, and engaging user experiences.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 bg-[#111111]">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                className="text-purple-400 hover:text-purple-300"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            { name: "React / Next.js", level: "90%" },
            { name: "JavaScript", level: "85%" },
            { name: "Node.js", level: "80%" },
            { name: "Tailwind CSS", level: "88%" },
            { name: "Git & GitHub", level: "92%" },
            { name: "UI/UX Design", level: "75%" },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800"
            >
              <h3 className="mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-800 h-2 rounded-full">
                <div
                  style={{ width: skill.level }}
                  className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GITHUB STATS */}
      <section className="py-24 px-6 text-center bg-[#111111]">
        <h2 className="text-4xl font-bold mb-12">GitHub Activity</h2>

        <div className="flex flex-col items-center gap-8">
          <img
            src="https://github-readme-stats.vercel.app/api?username=77kingo&show_icons=true&theme=dark"
            alt="GitHub Stats"
            className="w-full max-w-lg"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=77kingo&layout=compact&theme=dark"
            alt="Top Languages"
            className="w-full max-w-lg"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something Exceptional
        </h2>

        <p className="text-gray-400 mb-8">
          Have a project idea or collaboration in mind? Let’s connect.
        </p>

        <a
          href="mailto:singhsaurav8899@gmail.com"
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:scale-105 transition inline-block"
        >
          singhsaurav8899@gmail.com
        </a>
      </section>

    </main>
  );
}
