"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CoffeeCup } from "@/components/svgs";

export function BrandNarrative() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="my-20 flex flex-col md:items-center px-6 py-10 md:py-20 bg-neutral-50 md:grid md:grid-cols-[70%_30%]"
    >
      <div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="block md:hidden max-md:pb-5"
        >
          <CoffeeCup />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl font-medium text-neutral-900 mb-6 font-instrument-sans"
        >
          Gray Cup Narrative
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-md sm:text-lg mb-10 text-neutral-700 my-4 max-w-2xl leading-relaxed"
        >
          <span className="mb-4">
            Gray Cup creates sustainable, high-quality essentials for
            everything that belongs in your cup.
          </span>
          Built on the idea of a{" "}
          <span className="font-medium">neutral cup</span>, sustainable,
          balanced, and uncompromising in quality, Gray Cup focuses on
          what truly matters.
          <br />
          <br />
          From coffee and matcha to tea and future essentials, we do not
          chase categories or trends.
          <br />
          <br />
          <span className="font-medium text-neutral-900">
            The best is what belongs in your cup.
          </span>
        </motion.p>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="hidden md:block"
      >
        <CoffeeCup />
      </motion.div>

      <motion.a
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href="https://discord.gg/gpRxmW63JW"
        target="_blank"
      >
        <Button variant="gray">Join Our Discord</Button>
      </motion.a>
    </motion.div>
  );
}
