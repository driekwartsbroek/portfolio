"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WindowPanel from "@/components/WindowPanel";
import Container from "@/components/Container";
import LetterboxdLink from "@/components/LetterboxdLink";
import Tooltip from "@/components/Tooltip";

export default function About() {
  const calculateAge = () => {
    const birthDate = new Date("1997-10-14");
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const age = calculateAge();

  return (
    <div className="flex flex-col items-center relative">
      {" "}
      {/* Add 'relative' here */}
      <WindowPanel
        title="About Me"
        showBackArrow={true}
        showBreadcrumbs={true}
        className="max-h-[800px]"
      >
        <Container className="w-full flex-grow max-w-2xl mx-auto overflow-y-auto">
          <div className="mb-6 flex justify-start">
            {" "}
            {/* Change this line */}
            <Tooltip content="is this you?">
              <Image
                src="/1000_F_26356527_jPF0QNbPhT65KYlYhQhFUFopfzapAidj.jpg"
                alt="About Me"
                width={200}
                height={320}
                className="rounded-lg shadow-lg"
              />
            </Tooltip>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-text-primary-light dark:text-primary-light">
            clicks shouldn&apos;t cause headaches.
          </h1>
          <p className="text-lg mb-4 text-text-primary-light dark:text-text-primary-dark">
            I&apos;m a {age}-year-old UX/UI designer based in Brussels Belgium,
            passionate about making interfaces even my parents could use.
          </p>
          <p className="text-lg mb-4 text-text-primary-light dark:text-text-primary-dark">
            when I&apos;m not designing, you can find me watching movies.
          </p>
          <LetterboxdLink username="bertselleslagh" />
        </Container>
      </WindowPanel>
    </div>
  );
}
