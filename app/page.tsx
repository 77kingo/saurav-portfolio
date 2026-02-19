"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const projects = [
    {
      title: "Travel Landing Page",
      image: "/projects/travel.png",
      url: "https://77kingo.github.io/travel_landing/",
    },
    {
      title: "Quiz App",
      image: "/projects/quiz.png",
      url: "https://77kingo.github.io/quiz_app/",
    },
    {
      title: "Foodie App",
      image: "/projects/foodie.png",
      url: "https://77kingo.github.io/foodie-app/",
    },
    {
      title: "Music Player",
      image: "/projects/music.png",
      url: "https://77kingo.github.io/MusicPlayer/",
    },
  ];

  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen relative overflow-x-hidden scroll-smooth">

      {/* Cursor Glow */}
      <div
        className="fixed pointer-events-none -z-10 w-40 h-40 bg-purple-500 opacity-20 blur-3xl rounded-full"
        style={{
          left: position.x - 80,
          top: position.y - 80,
        }}
      />

      {/* Background Glow */}
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] 
        bg-purple-600 opacity-30 blur-[150px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] 
        bg-blue-600 opacity-30 blur-[150px] rounded-full animate-pulse"></div>
      </div>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text"
        >
          Saurav Singh
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-gray-400 max-w-2xl"
        >
          Full Stack Developer crafting scalable and modern web experiences.
        </motion.p>

        <div className="mt-8 flex gap-6 flex-wrap justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-purple-500 rounded-full hover:bg-purple-500/20 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 
              rounded-2xl p-6 shadow-2xl hover:scale-105 
              hover:border-purple-500/40 transition-all duration-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl mb-4 w-full"
              />

              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

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

      {/* CONTACT */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build Something Exceptional
        </h2>

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
