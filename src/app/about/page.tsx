"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WindowPanel from "@/components/WindowPanel";
import LetterboxdLink from "@/components/LetterboxdLink";
import Tooltip from "@/components/Tooltip";
import { useState } from "react";
import ImageModal from "@/components/ImageModal";

export default function About() {
  const skills = [
    { name: "User Flows", level: 100 },
    { name: "Wireframing", level: 100 },
    { name: "Prototyping", level: 100 },
    { name: "UI Design", level: 100 },
    { name: "Functional Analysis", level: 65 },
    { name: "Front-end development", level: 20 },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center relative">
      <WindowPanel
        title="About Me"
        showBackArrow={true}
        showBreadcrumbs={true}
        className="relative bg-transparent"
        zIndex={1}
        onFocus={() => {}}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full flex-grow max-w-3xl mx-auto overflow-y-auto px-6 sm:px-8 lg:px-10 pb-36 rounded-lg"
        >
          <div className="relative mb-1">
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden relative">
              <Image
                src="/1000_F_26356527_jPF0QNbPhT65KYlYhQhFUFopfzapAidj.jpg"
                alt="Banner"
                layout="fill"
                objectFit="cover"
                objectPosition="center 25%"
              />
            </div>
            <Tooltip content="is this you?">
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                <Image
                  src="/1000_F_26356527_jPF0QNbPhT65KYlYhQhFUFopfzapAidj.jpg"
                  alt="About Me"
                  width={150}
                  height={150}
                  className="rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </Tooltip>
          </div>
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-text-primary-light dark:text-primary-light">
              Clicks shouldn&apos;t cause headaches.
            </h2>
            <p className="text-lg text-text-primary-light dark:text-text-primary-dark">
              I&apos;ve always been obsessed with how stuff looks and works.
              Helping my parents figure out their digital environment has
              oftentime surprised me about the amount of intuition that&apos;s
              required to navigate our daily digital lives. Lets make everything
              more accessible together and build things even our parents could
              use and love.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mt-4 mb-6 text-text-primary-light dark:text-primary-light">
              Skills
            </h2>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center">
                  <span className="w-32 text-text-primary-light dark:text-text-primary-dark">
                    {skill.name}
                  </span>
                  <div className="flex-grow bg-gray-200 rounded-full h-2.5 ml-2">
                    <motion.div
                      className="bg-blue-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-text-primary-light dark:text-primary-light">
              Fun Facts
            </h2>
            <ul className="list-none text-lg text-text-primary-light dark:text-text-primary-dark">
              <li className="flex items-start mb-4">
                <span className="mr-2">🧑‍💻</span>
                <span className="mb-4">
                  This portfolio was crafted with lots of love, AI-help (thanks
                  Claude 🤝) and only a couple of tears.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🐈</span>
                <span>
                  My cat{" "}
                  <span
                    className="cursor-pointer underline font-semibold text-blue-500 hover:text-blue-400"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Octo
                  </span>{" "}
                  (who is a lovely nightmare) bears many nicknames:
                  <div className="flex flex-wrap gap-2 mt-2 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      the bottomless pit
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      poes
                    </span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      Walter
                    </span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                      Findus
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      Timo
                    </span>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                      sous-chef
                    </span>
                    <span className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                      octet
                    </span>
                    <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">
                      octaaf
                    </span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                      octavius
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      gato
                    </span>
                  </div>
                </span>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <LetterboxdLink username="bertselleslagh" />
          </div>
        </motion.div>
      </WindowPanel>
      <ImageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
