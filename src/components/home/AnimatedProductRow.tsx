"use client";

import { motion } from "framer-motion";
import { LazyProductRow } from "@/components/products";
import type { Product } from "@/data/products/types";

interface AnimatedProductRowProps {
  title: string;
  products: Product[];
  delay?: number;
}

export function AnimatedProductRow({ title, products, delay = 0 }: AnimatedProductRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <LazyProductRow title={title} products={products} />
    </motion.div>
  );
}
