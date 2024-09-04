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
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="min-h-screen bg-background dark:bg-background-dark p-10 sm:p-12 md:p-16 flex flex-col relative pt-32"
    >
      <div className="mt-16 flex flex-col items-center">
        <WindowPanel
          title="About Me"
          showBackArrow={true}
          showBreadcrumbs={true}
        >
          <Container className="mt-8 w-full flex-grow max-w-3xl mx-auto">
            <div className="mb-6">
              <Tooltip content="is this you? &amp;#x1f5b5;">
                <Image
                  src="/1000_F_26356527_jPF0QNbPhT65KYlYhQhFUFopfzapAidj.jpg"
                  alt="About Me"
                  width={250}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </Tooltip>
            </div>
            <h1 className="text-4xl font-bold mb-6 text-text-primary-light dark:text-primary-light">
              clicks shouldn&apos;t cause headaches.
            </h1>
            <p className="text-lg mb-6 text-text-primary-light dark:text-text-primary-dark">
              I&apos;m a {age}-year-old UX/UI designer based in Brussels
              Belgium, passionate about making interfaces even my parents could
              use.
            </p>
            <p className="text-lg mb-6 text-text-primary-light dark:text-text-primary-dark">
              when I&apos;m not designing, you can find me watching movies.
            </p>
            <LetterboxdLink username="bertselleslagh" />
          </Container>
        </WindowPanel>
      </div>
    </motion.div>
  );
}
