"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CartButton } from "@/components/cart-button";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Gray Cup"
                width={45}
                height={45}
                draggable={false}
              />
              <span className="text-xl font-semibold text-nowrap tracking-tight">
                Gray Cup
              </span>
            </Link>
            <p className="opacity-20">|</p>

            {/* Tablet-visible links */}
            <nav className="hidden md:flex gap-1 text-sm font-medium">
              {[
                ["Products", "/products"],
                ["New Product Request", "/new-product-request"],
                ["Feedback", "/feedback"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-md px-2 py-2 hover:bg-neutral-100"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            <CartButton />
          </div>
        </div>
      </header>

      {/* ================= SIDEBAR ================= */}
      <div
        className={`fixed inset-0 z-50 transition-opacity ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />

        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-xl
          transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <button
            className="mb-4 self-end rounded-md cursor-pointer p-2 hover:bg-neutral-100"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* All links */}
          <nav className="flex flex-col gap-2 text-sm font-medium">
            {[
              ["Products", "/products"],
              ["Sample Request", "/sample-request"],
              ["New Product Request", "/new-product-request"],
              ["Feedback", "/feedback"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-2 hover:bg-neutral-100"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="mt-auto flex flex-col gap-2 pt-6">
            <Link
              href="https://graycup.in/"
              target="_blank"
              rel="noopener"
              onClick={() => setMenuOpen(false)}
            >
              <Button variant="blue" size="sm" className="w-full">
                Visit Consumer Store
              </Button>
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
